import type { VercelRequest, VercelResponse } from '@vercel/node';
import type { PoolClient } from 'pg';
import { Pool } from 'pg';
import { resolveIdentity } from './_lib/identity.js';
import { ensureSchema } from './_lib/schema.js';
import { isOwnerEmail } from './_lib/owner.js';
import { recordDeniedAdminAttempt } from './_lib/ownerAlert.js';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
      max: 2,
      // Bound how long a denied-visitor audit write may block the 404 if the DB
      // is unreachable; the helper swallows the error and we still return 404.
      connectionTimeoutMillis: 3000,
    })
  : null;

async function authorizeAdmin(req: VercelRequest): Promise<{ sub: string; email: string; name: string } | null> {
  // resolveIdentity throws AUTH_REQUIRED/AUTH_INVALID on failure; we treat any
  // failure as "not an admin" and surface 404, so a non-admin (or a request
  // with no credential at all) cannot distinguish "this endpoint exists".
  const identity = await resolveIdentity(req);
  if (!isOwnerEmail(identity.email)) {
    // Authenticated but not the owner: record the attempt (audit + rate-limited
    // owner email) before returning 404. The audit write is awaited so the
    // durable "always log every attempt" guarantee survives a serverless freeze;
    // the email itself is fire-and-forget inside the helper and never delays us.
    if (pool) {
      await recordDeniedAdminAttempt(pool, identity, req.headers as Record<string, unknown>).catch(() => {});
    }
    return null;
  }
  return { sub: identity.sub, email: identity.email, name: identity.name };
}

interface ActionResult {
  status: number;
  body: Record<string, unknown>;
}

// Each mutation is parameterized and keyed by account UUID (never a
// client-supplied email or subject) to avoid ambiguity. The admin's account
// UUID is used to record audit events against a real accounts(id).
async function runAction(
  client: PoolClient,
  action: string,
  params: Record<string, unknown>,
  adminAccountId: string,
): Promise<ActionResult> {
  const accountId = typeof params.account_id === 'string' ? params.account_id : '';
  if (!UUID_RE.test(accountId)) return { status: 400, body: { error: 'ACCOUNT_REQUIRED' } };
  const audit = (auditAction: string, metadata: Record<string, unknown>) =>
    client.query(`INSERT INTO audit_events (actor_account_id, action, metadata) VALUES ($1, $2, $3)`, [
      adminAccountId,
      auditAction,
      JSON.stringify(metadata),
    ]);

  if (action === 'ban') {
    const reason = typeof params.reason === 'string' && params.reason ? params.reason : null;
    await client.query(
      `UPDATE accounts SET banned_at = COALESCE(banned_at, now()), banned_reason = COALESCE($2, banned_reason) WHERE id = $1`,
      [accountId, reason],
    );
    await audit('admin.ban', { account_id: accountId, reason });
    return { status: 200, body: { ok: true } };
  }
  if (action === 'unban') {
    await client.query(`UPDATE accounts SET banned_at = NULL, banned_reason = NULL WHERE id = $1`, [accountId]);
    await audit('admin.unban', { account_id: accountId });
    return { status: 200, body: { ok: true } };
  }
  if (action === 'grant') {
    const kind = typeof params.kind === 'string' ? params.kind : '';
    if (kind !== 'slot' && kind !== 'premium') return { status: 400, body: { error: 'INVALID_GRANT_KIND' } };
    const reason = typeof params.reason === 'string' && params.reason ? params.reason : null;
    await client.query(
      `INSERT INTO entitlement_grants (account_id, kind, reason, granted_by_account_id) VALUES ($1, $2, $3, $4)`,
      [accountId, kind, reason, adminAccountId],
    );
    await audit('admin.grant', { account_id: accountId, kind, reason });
    return { status: 200, body: { ok: true } };
  }
  if (action === 'message') {
    const subject = typeof params.subject === 'string' ? params.subject.trim() : '';
    const body = typeof params.body === 'string' ? params.body.trim() : '';
    if (!subject || !body) return { status: 400, body: { error: 'MESSAGE_REQUIRED' } };
    await client.query(`INSERT INTO admin_messages (account_id, subject, body) VALUES ($1, $2, $3)`, [
      accountId,
      subject,
      body,
    ]);
    await audit('admin.message', { account_id: accountId, subject });
    return { status: 200, body: { ok: true } };
  }
  return { status: 400, body: { error: 'UNKNOWN_ACTION' } };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Authorize FIRST: every non-owner (or unauthenticated) access returns 404,
  // regardless of DB state, so the admin surface's existence is never leaked.
  // Only after the owner is confirmed do we distinguish a real outage (503) so
  // a misconfigured DATABASE_URL isn't masked as a permissions failure.
  const admin = await authorizeAdmin(req).catch(() => null);
  if (!admin) return res.status(404).json({ error: 'NOT_FOUND' });
  // Owner confirmed; a missing DB is a real outage (503), never a permissions mask.
  if (!pool) return res.status(503).json({ error: 'DATABASE_NOT_CONFIGURED' });

  const client = await pool.connect();
  try {
    await ensureSchema(client);

    // Resolve (or self-provision) the owner's account row so audit events
    // reference a real id — a first-ever /admin visit before any collab use
    // must still succeed rather than 404.
    const adminAccount = (
      await client.query(
        `INSERT INTO accounts (google_sub,email,display_name) VALUES ($1,$2,$3)
         ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email, display_name=EXCLUDED.display_name
         RETURNING id`,
        [admin.sub, admin.email, admin.email],
      )
    ).rows[0] as { id: string } | undefined;
    if (!adminAccount) return res.status(404).json({ error: 'NOT_FOUND' });

    if (req.method === 'GET') {
      const accounts = (
        await client.query(
          `SELECT a.id, a.google_sub, a.email, a.display_name, a.created_at, a.banned_at, a.banned_reason,
                  (SELECT count(*)::int FROM pets p WHERE p.owner_account_id = a.id) AS dog_count,
                  (SELECT count(*)::int FROM entitlement_grants g WHERE g.account_id = a.id AND g.kind = 'slot') AS slot_grants,
                  (SELECT count(*)::int FROM entitlement_grants g WHERE g.account_id = a.id AND g.kind = 'premium') AS premium_grants
             FROM accounts a ORDER BY a.created_at DESC`,
        )
      ).rows;
      return res.status(200).json({ accounts });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'object' ? req.body : {};
      const action = typeof body.action === 'string' ? body.action : '';

      if (action === 'view') {
        const accountId = String(body.account_id || '');
        if (!UUID_RE.test(accountId)) return res.status(400).json({ error: 'ACCOUNT_REQUIRED' });
        const pets = (
          await client.query(
            `SELECT p.id, p.name, p.payload, p.created_at, p.updated_at
               FROM pets p WHERE p.owner_account_id = $1 ORDER BY p.created_at`,
            [accountId],
          )
        ).rows;
        return res.status(200).json({ pets });
      }

      await client.query('BEGIN');
      try {
        const result = await runAction(client, action, body, adminAccount.id);
        if (result.status >= 400) {
          await client.query('ROLLBACK');
          return res.status(result.status).json(result.body);
        }
        await client.query('COMMIT');
        return res.status(result.status).json(result.body);
      } catch (e) {
        await client.query('ROLLBACK');
        throw e;
      }
    }

    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  } catch (e) {
    return res.status(500).json({ error: e instanceof Error ? e.message : 'INTERNAL_ERROR' });
  } finally {
    client.release();
  }
}
