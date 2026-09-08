import type { Pool } from 'pg';
import { ensureSchema } from './schema.js';

// Best-effort, server-only handling for an authenticated non-owner hitting the
// admin surface. Two jobs relative to the 404 the caller returns:
//   1. ALWAYS record the attempt in audit_events (the durable record).
//   2. Email the owner, rate-limited to once per user per 24h, so a curious
//      user cannot flood the owner's inbox.
//
// It never throws: the caller returns 404 regardless of DB or email health.
// Emails are disabled until RESEND_API_KEY is set in the Vercel environment; the
// audit_events row is written regardless, so an attempt is never lost.

// Who receives the alert. Defaults to the owner's Google address; override via
// ADMIN_ALERT_EMAIL in the Vercel environment. This is separate from the auth
// gate (OWNER_EMAIL in owner.ts) so the alert destination can be routed to a
// different mailbox without widening admin access. Read at send time (not
// module-load) so tests and per-request env changes are honored.
export function alertRecipient(): string {
  return (process.env.ADMIN_ALERT_EMAIL || 'contactpawpath@gmail.com').toLowerCase();
}

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

/** Builds the Resend payload for an alert, or null when email is disabled. */
export function buildAlertEmail(meta: Record<string, unknown>): {
  from: string;
  to: string[];
  subject: string;
  text: string;
} | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
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
  return {
    from,
    to: [alertRecipient()],
    subject: `PawPath: unauthorized /admin attempt by ${meta.email ?? 'unknown'}`,
    text: lines.join('\n'),
  };
}

/** Sends the alert via Resend. Never throws; returns true only on a 2xx send. */
export async function sendAlertEmail(meta: Record<string, unknown>): Promise<boolean> {
  const payload = buildAlertEmail(meta);
  if (!payload) return false;
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      return response.ok;
    } finally {
      clearTimeout(timer);
    }
  } catch {
    return false;
  }
}

export type AlertSender = (meta: Record<string, unknown>) => Promise<boolean> | boolean;

export async function recordDeniedAdminAttempt(
  pool: Pool,
  identity: { sub: string; email: string; name: string },
  headers: Record<string, unknown>,
  sendEmail: AlertSender = sendAlertEmail,
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
      // Fire-and-forget in production: a slow/missing email API must never delay
      // the 404. Tests inject a synchronous spy so the send is observable.
      void sendEmail(meta);
    }
  } catch {
    /* best effort — never fail the 404 */
  } finally {
    client.release();
  }
}
