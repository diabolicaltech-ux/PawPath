import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';
import { resolveIdentity } from './_lib/identity.js';
import { ensureSchema } from './_lib/schema.js';
import { isOwnerEmail } from './_lib/owner.js';
const pool: Pool | null = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 2 }) : null;

/**
 * The collab handler, with its database injectable so the ownership rules can be
 * exercised against a real engine in-process (see `db/collab-ownership.test.ts`).
 * Production reaches this through the default export below, always wired to the
 * pooled connection, so the injectable parameter is never client-reachable.
 */
export async function handleCollab(req: VercelRequest, res: VercelResponse, db: Pool | null = pool) {
  if (!db) return res.status(503).json({ error: 'DATABASE_NOT_CONFIGURED' });
  try {
    const user = await resolveIdentity(req);
    const client = await db.connect();
    try {
      // Self-provision the schema on first use (idempotent), so a fresh Neon
      // database works without a manual migration step.
      await ensureSchema(client);
      await client.query('BEGIN');
      const account = (await client.query(`INSERT INTO accounts (google_sub,email,display_name) VALUES ($1,$2,$3) ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email,display_name=EXCLUDED.display_name RETURNING id,google_sub,email,display_name,banned_at`, [user.sub,user.email,user.name])).rows[0];
      // Banned accounts are blocked from every data operation. The ban is
      // enforced server-side here (not just hidden in the UI), so a banned
      // user cannot read, create, or mutate pets via direct API calls. The
      // owner account is exempt so it can never lock itself out of /admin.
      if (account.banned_at && !isOwnerEmail(user.email)) {
        await client.query('ROLLBACK');
        return res.status(403).json({ error: 'ACCOUNT_BANNED' });
      }
      if (req.method === 'GET') {
        const pets = (await client.query(`SELECT p.id,p.name,p.payload,m.role FROM pets p JOIN pet_memberships m ON m.pet_id=p.id WHERE m.account_id=$1 ORDER BY p.created_at`, [account.id])).rows;
        await client.query('COMMIT'); return res.status(200).json({ account, pets });
      }
      if (req.method === 'PUT') {
        const body = typeof req.body === 'object' ? req.body : {};
        if (!body.id || typeof body.id !== 'string' || !body.name || typeof body.name !== 'string') { await client.query('ROLLBACK'); return res.status(400).json({error:'PET_REQUIRED'}); }
        const pet = (await client.query(`UPDATE pets p SET name=$1,payload=$2,updated_at=now() FROM pet_memberships m WHERE p.id=$3 AND m.pet_id=p.id AND m.account_id=$4 RETURNING p.id,p.name,p.payload`, [body.name, body.payload || {}, body.id, account.id])).rows[0];
        if (!pet) { await client.query('ROLLBACK'); return res.status(404).json({error:'PET_NOT_FOUND'}); }
        await client.query('COMMIT'); return res.status(200).json({pet,role:'owner'});
      }
      if (req.method === 'DELETE') {
        const id = String(req.query.id || req.headers['x-pet-id'] || '');
        if (!id) { await client.query('ROLLBACK'); return res.status(400).json({error:'PET_ID_REQUIRED'}); }
        const deleted = (await client.query(`DELETE FROM pets p USING pet_memberships m WHERE p.id=$1 AND m.pet_id=p.id AND m.account_id=$2 RETURNING p.id`, [id, account.id])).rowCount;
        if (!deleted) { await client.query('ROLLBACK'); return res.status(404).json({error:'PET_NOT_FOUND'}); }
        await client.query('COMMIT'); return res.status(204).end();
      }
      if (req.method === 'POST') {
        const body = typeof req.body === 'object' ? req.body : {};
        if (!body.name || typeof body.name !== 'string') { await client.query('ROLLBACK'); return res.status(400).json({error:'NAME_REQUIRED'}); }
        // Preserve the client-supplied pet id when it is a well-formed UUID so
        // the local cache and the cloud row share one identity. This prevents
        // duplicate pets when a profile is synced, merged, or re-logged-in.
        // Never trust the id for authorization: the row is still scoped by
        // account.id derived from the verified Google token below.
        const clientId = typeof body.id === 'string' ? body.id : '';
        const petId = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(clientId)
          ? clientId
          : undefined; // server-generated UUID when absent/malformed
        const pet = petId
          ? (await client.query(`INSERT INTO pets (id,owner_account_id,name,payload) VALUES ($1,$2,$3,$4)
              ON CONFLICT (id) DO UPDATE SET name=EXCLUDED.name,payload=EXCLUDED.payload,updated_at=now()
              WHERE pets.owner_account_id = EXCLUDED.owner_account_id
              RETURNING id,name,payload`, [petId, account.id, body.name, body.payload || {}])).rows[0]
          : (await client.query(`INSERT INTO pets (owner_account_id,name,payload) VALUES ($1,$2,$3) RETURNING id,name,payload`, [account.id, body.name, body.payload || {}])).rows[0];
        if (!pet) {
          // The ownership predicate above makes DO UPDATE a no-op when the
          // conflicting row belongs to a different account, so no row comes
          // back. Without that predicate, naming someone else's pet id here
          // overwrote their record and then handed the caller an 'owner'
          // membership on it — a cross-account write and read escalation.
          // Refuse without touching the row and without creating a membership.
          // 404 rather than 403, matching the scoped PUT/DELETE paths, so the
          // response cannot be used to probe whether an id exists elsewhere.
          await client.query('ROLLBACK');
          return res.status(404).json({error:'PET_NOT_FOUND'});
        }
        await client.query('INSERT INTO pet_memberships (pet_id,account_id,role) VALUES ($1,$2,\'owner\') ON CONFLICT DO NOTHING',[pet.id,account.id]);
        await client.query('INSERT INTO audit_events (actor_account_id,pet_id,action,metadata) VALUES ($1,$2,\'pet.created\',$3)',[account.id,pet.id,JSON.stringify({name:pet.name})]);
        await client.query('COMMIT'); return res.status(201).json({pet,role:'owner'});
      }
      await client.query('ROLLBACK'); return res.status(405).json({error:'METHOD_NOT_ALLOWED'});
    } finally { client.release(); }
  } catch (e) { const code = e instanceof Error && e.message==='AUTH_REQUIRED' ? 401 : e instanceof Error && e.message==='AUTH_INVALID' ? 403 : 500; return res.status(code).json({error: e instanceof Error ? e.message : 'INTERNAL_ERROR'}); }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  return handleCollab(req, res);
}
