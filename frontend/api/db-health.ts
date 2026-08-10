import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pool } from 'pg';

const REQUIRED_TABLES = ['accounts', 'pets', 'pet_memberships', 'audit_events'];
const configured = () => Boolean(process.env.DATABASE_URL);
const authorized = (req: VercelRequest) => {
  const expected = process.env.DB_HEALTH_TOKEN;
  const supplied = String(req.headers['x-db-health-token'] || '');
  return Boolean(expected && supplied && supplied === expected);
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' });
  if (!authorized(req)) return res.status(401).json({ ok: false, error: 'UNAUTHORIZED' });
  if (!configured()) return res.status(503).json({ ok: false, configured: false, connected: false, schema: false });

  const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false }, max: 1, connectionTimeoutMillis: 5000 });
  try {
    const client = await pool.connect();
    try {
      const tables = await client.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = ANY($1::text[])`, [REQUIRED_TABLES]);
      const role = await client.query(`SELECT 1 FROM pg_type WHERE typname = 'pet_member_role' LIMIT 1`);
      const tableNames = new Set(tables.rows.map((row: { table_name: string }) => row.table_name));
      const schema = REQUIRED_TABLES.every(name => tableNames.has(name)) && role.rowCount === 1;
      return res.status(schema ? 200 : 503).json({ ok: schema, configured: true, connected: true, schema });
    } finally { client.release(); }
  } catch {
    return res.status(503).json({ ok: false, configured: true, connected: false, schema: false });
  } finally { await pool.end(); }
}
