import crypto from 'node:crypto';

export interface SessionClaims {
  sub: string;
  email: string;
  name: string;
  exp: number;
}

const SESSION_TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days

const b64url = (input: string | Buffer): string =>
  Buffer.from(input as Buffer).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const b64urlDecode = (input: string): Buffer =>
  Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/'), 'base64');

/**
 * Issues a first-party session token (a minimal HS256 JWT) so `/api/collab` can
 * authenticate a signed-in user after the Google ID token expires (~1h).
 *
 * Google rejects `offline_access` for this OAuth client (verified:
 * `invalid=[offline_access]`), so no refresh token is available. A server-signed
 * session token gives us durable cloud auth without depending on Google.
 */
export function signSessionToken(
  claims: Omit<SessionClaims, 'exp'> & { exp?: number },
  secret: string,
): string {
  const header = b64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = b64url(
    JSON.stringify({
      ...claims,
      exp: claims.exp ?? Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
    }),
  );
  const signature = b64url(crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest());
  return `${header}.${payload}.${signature}`;
}

/** Verifies a session token and returns its claims, or null when invalid/expired. */
export function verifySessionToken(token: string, secret: string): SessionClaims | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;
    const expected = b64url(crypto.createHmac('sha256', secret).update(`${header}.${payload}`).digest());
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    const claims = JSON.parse(b64urlDecode(payload).toString('utf8'));
    if (!claims || typeof claims.sub !== 'string' || typeof claims.email !== 'string') return null;
    if (typeof claims.exp !== 'number' || claims.exp * 1000 <= Date.now()) return null;
    return {
      sub: claims.sub,
      email: claims.email,
      name: typeof claims.name === 'string' && claims.name ? claims.name : claims.email,
      exp: claims.exp,
    };
  } catch {
    return null;
  }
}

/** Extracts the `pawpath_session` cookie value from a raw Cookie header. */
export function readSessionCookie(cookieHeader: string | undefined): string | null {
  if (!cookieHeader) return null;
  for (const part of cookieHeader.split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    const name = part.slice(0, idx).trim();
    if (name === 'pawpath_session') {
      const raw = part.slice(idx + 1).trim();
      try {
        return decodeURIComponent(raw);
      } catch {
        return raw;
      }
    }
  }
  return null;
}

/** The cookie used to carry the session token between callback and collab. */
export const SESSION_COOKIE = 'pawpath_session';
