import type { Pool } from 'pg';
import { ensureSchema } from './schema.js';
import { OWNER_EMAIL } from './owner.js';

// Best-effort, server-only handling for an authenticated non-owner hitting the
// admin surface. Two jobs, both fire-and-forget relative to the 404 the caller
// returns:
//   1. ALWAYS record the attempt in audit_events (the durable record).
//   2. Email the owner, rate-limited to once per user per 24h, so a curious
//      user cannot flood the owner's inbox.
//
// It never throws: the caller returns 404 regardless of DB or email health.

const EMAIL_COOLDOWN = `now() - interval '24 hours'`;

function firstHeader(v: unknown): string {
  if (Array.isArray(v)) return typeof v[0] === 'string' ? v[0] : '';
  return typeof v === 'string' ? v : '';
}

function clientIp(headers: Record<string, unknown>): string {
  const fwd = firstHeader(headers['x-forwarded-for']) || firstHeader(headers['x-vercel-forwarded-for']);
  const first = fwd.split(',')[0]?.trim();
  if (first) return first;
  return firstHeader(headers['x-real-ip']);
}

async function sendOwnerEmail(meta: Record<string, unknown>): Promise<void> {
  // Emails stay disabled until RESEND_API_KEY is set in the Vercel environment.
  // The audit_events row is written regardless, so the attempt is never lost.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;
  const from = process.env.ALERT_FROM_EMAIL || 'PawPath Admin <admin@pawpath.quest>';
  const lines = [
    `A signed-in non-owner tried to open the admin page.`,
    ``,
    `Email: ${meta.email ?? '(unknown)'}`,
    `Name: ${meta.name ?? '(unknown)'}`,
    `Account id: ${meta.account_id ?? '(unknown)'}`,
    `Time: ${meta.attempted_at ?? '(unknown)'}`,
    `IP: ${meta.ip || '(unknown)'}`,
    `User agent: ${meta.user_agent || '(unknown)'}`,
  ];
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from, to: [OWNER_EMAIL], subject: `PawPath: unauthorized /admin attempt by ${meta.email ?? 'unknown'}`, text: lines.join('\n') }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  } catch {
    /* best effort */
  }
}

export async function recordDeniedAdminAttempt(
  pool: Pool,
  identity: { sub: string; email: string; name: string },
  headers: Record<string, unknown>,
): Promise<void> {
  const client = await pool.connect();
  try {
    await ensureSchema(client);
    // Upsert the visitor's account so the audit row references a real id and we
    // capture their current display name/email.
    const account = (
      await client.query(
        `INSERT INTO accounts (google_sub,email,display_name) VALUES ($1,$2,$3)
         ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email, display_name=EXCLUDED.display_name
         RETURNING id`,
        [identity.sub, identity.email, identity.name],
      )
    ).rows[0] as { id: string } | undefined;
    if (!account) return;
    const meta = {
      email: identity.email,
      name: identity.name,
      account_id: account.id,
      ip: clientIp(headers),
      user_agent: firstHeader(headers['user-agent']).slice(0, 500),
      attempted_at: new Date().toISOString(),
    };
    // 1. Always log the attempt.
    await client.query(
      `INSERT INTO audit_events (actor_account_id, action, metadata) VALUES ($1, $2, $3)`,
      [account.id, 'admin.access_denied', JSON.stringify(meta)],
    );
    // 2. Rate-limit the owner email to once per user per 24h.
    const recent = await client.query(
      `SELECT 1 FROM audit_events WHERE actor_account_id = $1 AND action = 'admin.access_denied_email' AND created_at > ${EMAIL_COOLDOWN} LIMIT 1`,
      [account.id],
    );
    if (recent.rowCount === 0) {
      await client.query(
        `INSERT INTO audit_events (actor_account_id, action, metadata) VALUES ($1, $2, $3)`,
        [account.id, 'admin.access_denied_email', JSON.stringify({ ip: meta.ip, user_agent: meta.user_agent })],
      );
      // Fire-and-forget: a slow/missing email API must never delay the 404.
      void sendOwnerEmail(meta);
    }
  } catch {
    /* best effort — never fail the 404 */
  } finally {
    client.release();
  }
}
