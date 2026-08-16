import type { VercelRequest, VercelResponse } from '@vercel/node';
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const code = String(req.query.code || '');
  const returnedState = String(req.query.state || '');
  const expectedState = req.cookies?.oauth_state || '';
  res.setHeader('Set-Cookie', 'oauth_state=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  if (!code) return res.status(400).send('Missing Google authorization code.');
  if (!expectedState || !returnedState || expectedState !== returnedState) return res.status(400).send('Invalid OAuth state.');
  const id = process.env.GOOGLE_CLIENT_ID, secret = process.env.GOOGLE_CLIENT_SECRET;
  if (!id || !secret) return res.status(503).send('Google login is not configured.');
  try {
    const redirect = process.env.GOOGLE_REDIRECT_URI || 'https://pawpath.quest/api/auth/callback';
    const token = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ code, client_id: id, client_secret: secret, redirect_uri: redirect, grant_type: 'authorization_code' }) });
    if (!token.ok) return res.status(401).send('Google authorization failed.');
    const t = await token.json();
    const profile = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { authorization: `Bearer ${t.access_token}` } });
    if (!profile.ok) return res.status(401).send('Google profile lookup failed.');
    const u = await profile.json();
    const payload = JSON.stringify({ sub: u.sub, name: u.name || u.email, email: u.email, picture: u.picture || '', idToken: t.id_token || '', refreshToken: t.refresh_token || '' }).replace(/</g, '\u003c');
    res.setHeader('content-type', 'text/html');
    res.end(`<!doctype html><script>localStorage.setItem('pawpath_user',${JSON.stringify(payload)});location.href='/'</script>`);
  } catch { return res.status(500).send('Google login failed.'); }
}
