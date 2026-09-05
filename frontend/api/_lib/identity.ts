import type { VercelRequest } from '@vercel/node';
import { verifySessionToken, readSessionCookie } from './session.js';

export interface Identity {
  sub: string;
  email: string;
  name: string;
}

/**
 * Resolves the signed-in identity server-side.
 *
 * Prefers the first-party `pawpath_session` cookie (HttpOnly, signed with
 * SESSION_SECRET) so cloud auth survives Google ID-token expiry (~1h), since
 * Google rejects `offline_access` for this client and issues no refresh token.
 * Falls back to verifying a Google ID token from the Authorization header
 * (valid for the first ~hour after login).
 *
 * Throws `Error('AUTH_REQUIRED')` when no credential is present and
 * `Error('AUTH_INVALID')` when a credential is present but rejected. This
 * mirrors the contract `/api/collab` maps to 401/403 so the caller can choose
 * its own status codes (e.g. the admin surface maps every failure to 404 to
 * avoid leaking its existence).
 */
export async function resolveIdentity(req: VercelRequest): Promise<Identity> {
  const sessionSecret = process.env.SESSION_SECRET;
  if (sessionSecret) {
    const session = verifySessionToken(
      readSessionCookie(req.headers.cookie as string | undefined) || '',
      sessionSecret,
    );
    if (session) return { sub: session.sub, email: session.email, name: session.name };
  }
  const token = String(req.headers.authorization || '').replace(/^Bearer\s+/i, '');
  if (!token) throw new Error('AUTH_REQUIRED');
  const r = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(token)}`);
  if (!r.ok) throw new Error('AUTH_INVALID');
  const u = (await r.json()) as { sub?: unknown; email?: unknown; name?: unknown; aud?: unknown };
  if (!u.sub || !u.email) throw new Error('AUTH_INVALID');
  if (process.env.GOOGLE_CLIENT_ID && u.aud && String(u.aud) !== process.env.GOOGLE_CLIENT_ID) {
    throw new Error('AUTH_INVALID');
  }
  return { sub: String(u.sub), email: String(u.email), name: String(u.name || u.email) };
}
