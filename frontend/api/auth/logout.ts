import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * POST /api/auth/logout — revokes the first-party session.
 *
 * `pawpath_session` is an HttpOnly cookie with a 30-day lifetime, so clearing
 * client state alone would leave a live credential sitting in the browser. This
 * handler expires that cookie server-side so "Sign out" actually ends the
 * session.
 *
 * Deliberately best-effort and idempotent:
 * - No identity resolution. A stale, expired, tampered or missing cookie must
 *   still be clearable, so nothing here can fail on an unverifiable session.
 * - Repeated calls are harmless — the same expiring Set-Cookie is returned.
 * - Always 200 for a POST, so a sign-out never fails in the UI.
 *
 * The clearing cookie carries exactly the attributes the login cookie is set
 * with (HttpOnly; Secure; SameSite=Lax; Path=/) and Max-Age=0 to delete it.
 */
export const CLEAR_SESSION_COOKIE =
  'pawpath_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'METHOD_NOT_ALLOWED' });
  }
  // Expire the session cookie regardless of whether it was present or valid.
  res.setHeader('Set-Cookie', CLEAR_SESSION_COOKIE);
  // Never let a shared cache replay this response to another user.
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({ ok: true });
}
