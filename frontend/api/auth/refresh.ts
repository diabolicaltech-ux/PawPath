import type { VercelRequest, VercelResponse } from '@vercel/node';
// Exchanges a stored Google refresh token for a fresh ID token. The Google
// client secret never leaves the server; the browser only ever holds the
// refresh token (same localStorage surface as the existing idToken) and calls
// this endpoint to renew before /api/collab requests when the ID token expires.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  const body = typeof req.body === 'object' ? req.body : {};
  const refreshToken = typeof body.refresh_token === 'string' ? body.refresh_token : '';
  if (!refreshToken) return res.status(400).json({ error: 'REFRESH_TOKEN_REQUIRED' });
  const id = process.env.GOOGLE_CLIENT_ID, secret = process.env.GOOGLE_CLIENT_SECRET;
  if (!id || !secret) return res.status(503).json({ error: 'AUTH_NOT_CONFIGURED' });
  try {
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ refresh_token: refreshToken, client_id: id, client_secret: secret, grant_type: 'refresh_token' }),
    });
    if (!r.ok) return res.status(401).json({ error: 'REFRESH_FAILED' });
    const t = await r.json();
    if (!t.id_token) return res.status(400).json({ error: 'NO_ID_TOKEN' });
    return res.status(200).json({ idToken: t.id_token });
  } catch { return res.status(500).json({ error: 'REFRESH_INTERNAL' }); }
}
