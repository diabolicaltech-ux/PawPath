import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 2 }) : null;
async function identity(req: VercelRequest) {
  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) throw new Error('AUTH_REQUIRED');
  const r = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(token)}`);
  if (!r.ok) throw new Error('AUTH_INVALID');
  const u = await r.json();
  if (!u.sub || !u.email) throw new Error('AUTH_INVALID');
  return { sub: String(u.sub), email: String(u.email), name: String(u.name || u.email) };
}
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (!pool) return res.status(503).json({ error: 'DATABASE_NOT_CONFIGURED' });
  try {
    const user = await identity(req);
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const account = (await client.query(`INSERT INTO accounts (google_sub,email,display_name) VALUES ($1,$2,$3) ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email,display_name=EXCLUDED.display_name RETURNING id,google_sub,email,display_name`, [user.sub,user.email,user.name])).rows[0];
      if (req.method === 'GET') {
        const pets = (await client.query(`SELECT p.id,p.name,p.payload,m.role FROM pets p JOIN pet_memberships m ON m.pet_id=p.id WHERE m.account_id=$1 ORDER BY p.created_at`, [account.id])).rows;
        await client.query('COMMIT'); return res.status(200).json({ account, pets });
      }
      if (req.method === 'POST') {
        const body = typeof req.body === 'object' ? req.body : {};
        if (!body.name || typeof body.name !== 'string') { await client.query('ROLLBACK'); return res.status(400).json({error:'NAME_REQUIRED'}); }
        const pet = (await client.query(`INSERT INTO pets (owner_account_id,name,payload) VALUES ($1,$2,$3) RETURNING id,name,payload`, [account.id,body.name,body.payload || {}])).rows[0];
        await client.query('INSERT INTO pet_memberships (pet_id,account_id,role) VALUES ($1,$2,\'owner\')',[pet.id,account.id]);
        await client.query('INSERT INTO audit_events (actor_account_id,pet_id,action,metadata) VALUES ($1,$2,\'pet.created\',$3)',[account.id,pet.id,JSON.stringify({name:pet.name})]);
        await client.query('COMMIT'); return res.status(201).json({pet,role:'owner'});
      }
      await client.query('ROLLBACK'); return res.status(405).json({error:'METHOD_NOT_ALLOWED'});
    } finally { client.release(); }
  } catch (e) { const code = e instanceof Error && e.message==='AUTH_REQUIRED' ? 401 : e instanceof Error && e.message==='AUTH_INVALID' ? 403 : 500; return res.status(code).json({error: e instanceof Error ? e.message : 'INTERNAL_ERROR'}); }
}
