import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';
import { resolveIdentity } from './_lib/identity.js';
import { ensureSchema } from './_lib/schema.js';

// Authenticated (non-admin) account endpoint. Returns the signed-in user's
// server-side entitlements (admin/Stripe grants), ban status, and unread
// admin messages. Bans and entitlements are enforced server-side so the
// client cannot grant itself access or lift a ban by editing localStorage.
const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 2 })
  : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!pool) return res.status(503).json({ error: 'DATABASE_NOT_CONFIGURED' });
  let user;
  try {
    user = await resolveIdentity(req);
  } catch (e) {
    const code = e instanceof Error && e.message === 'AUTH_REQUIRED' ? 401 : 403;
    return res.status(code).json({ error: e instanceof Error ? e.message : 'AUTH_INVALID' });
  }
  const client = await pool.connect();
  try {
    await ensureSchema(client);
    const account = (
      await client.query(
        `INSERT INTO accounts (google_sub,email,display_name) VALUES ($1,$2,$3)
         ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email, display_name=EXCLUDED.display_name
         RETURNING id, google_sub, email, display_name, banned_at, banned_reason`,
        [user.sub, user.email, user.name],
      )
    ).rows[0];

    if (req.method === 'GET') {
      const [slotGrants, premiumGrants, messages] = await Promise.all([
        client.query(`SELECT count(*)::int AS n FROM entitlement_grants WHERE account_id = $1 AND kind = 'slot'`, [account.id]),
        client.query(`SELECT count(*)::int AS n FROM entitlement_grants WHERE account_id = $1 AND kind = 'premium'`, [account.id]),
        client.query(
          `SELECT id, subject, body, read_at, created_at FROM admin_messages WHERE account_id = $1 ORDER BY created_at DESC`,
          [account.id],
        ),
      ]);
      return res.status(200).json({
        account: {
          id: account.id,
          email: account.email,
          display_name: account.display_name,
          banned: Boolean(account.banned_at),
          banned_reason: account.banned_reason,
        },
        entitlements: {
          slot_grants: slotGrants.rows[0].n,
          premium_grants: premiumGrants.rows[0].n,
        },
        messages: messages.rows,
      });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'object' ? req.body : {};
      if (body.action === 'mark_messages_read') {
        await client.query(`UPDATE admin_messages SET read_at = COALESCE(read_at, now()) WHERE account_id = $1 AND read_at IS NULL`, [account.id]);
        return res.status(200).json({ ok: true });
      }
      return res.status(400).json({ error: 'UNKNOWN_ACTION' });
    }

    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  } catch (e) {
    return res.status(500).json({ error: e instanceof Error ? e.message : 'INTERNAL_ERROR' });
  } finally {
    client.release();
  }
}
