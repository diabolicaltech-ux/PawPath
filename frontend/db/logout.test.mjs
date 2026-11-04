import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  signSessionToken,
  verifySessionToken,
  SESSION_COOKIE,
} from '../api/_lib/session.ts';
import logout, { CLEAR_SESSION_COOKIE } from '../api/auth/logout.ts';

const SECRET = 'test-secret-that-is-long-enough-for-hmac-sha256-1234567890';
const CLAIMS = { sub: 'google-sub-123', email: 'owner@example.com', name: 'Owner' };

/** Minimal VercelResponse stand-in: records status, headers and body. */
function mockRes() {
  const headers = {};
  return {
    statusCode: null,
    body: undefined,
    headers,
    setHeader(name, value) {
      headers[String(name).toLowerCase()] = value;
    },
    getHeader(name) {
      return headers[String(name).toLowerCase()];
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
    send(payload) {
      this.body = payload;
      return this;
    },
    end(payload) {
      this.body = payload;
      return this;
    },
  };
}

/** A request carrying a real, freshly minted session cookie. */
function requestWithLiveSession(method = 'POST') {
  const token = signSessionToken(CLAIMS, SECRET);
  return {
    token,
    req: {
      method,
      cookies: { [SESSION_COOKIE]: token },
      headers: { cookie: `${SESSION_COOKIE}=${encodeURIComponent(token)}` },
    },
  };
}

/** The Set-Cookie value(s) a response will send, as a flat list. */
function setCookies(res) {
  const raw = res.getHeader('set-cookie');
  if (raw === undefined) return [];
  return Array.isArray(raw) ? raw : [raw];
}

/** The `pawpath_session` clearing cookie, if the response sets one. */
function sessionClearingCookie(res) {
  return setCookies(res).find((c) => String(c).trimStart().startsWith(`${SESSION_COOKIE}=`));
}

/** Attribute string after the cookie value, e.g. "HttpOnly; Secure; ...". */
const attributesOf = (cookie) => String(cookie).slice(String(cookie).indexOf(';') + 1).trim();

test('a live session cookie is genuinely valid before sign-out', () => {
  // Establishes that the cookie the next test revokes is a real credential,
  // not a placeholder — otherwise "revocation" would prove nothing.
  const { token } = requestWithLiveSession();
  const verified = verifySessionToken(token, SECRET);
  assert.ok(verified);
  assert.equal(verified.sub, CLAIMS.sub);
});

test('POST revokes the session: returns 200 and expires pawpath_session with all flags', () => {
  const { req } = requestWithLiveSession('POST');
  const res = mockRes();
  logout(req, res);

  assert.equal(res.statusCode, 200);
  const clearing = sessionClearingCookie(res);
  assert.ok(clearing, 'response must set an expiring pawpath_session cookie');
  assert.equal(
    String(clearing).trim(),
    'pawpath_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0',
  );
  // Assert each flag individually so a failure names the missing attribute.
  for (const flag of ['HttpOnly', 'Secure', 'SameSite=Lax', 'Path=/', 'Max-Age=0']) {
    assert.match(String(clearing), new RegExp(`(^|; )${flag.replace(/[/]/g, '\\/')}(;|$)`));
  }
  // An emptied value is what actually removes the stored credential.
  assert.match(String(clearing), /^pawpath_session=;/);
});

test('the clearing cookie carries exactly the flags the login cookie is set with', () => {
  // Guards against the two drifting apart: a flag added to the login cookie
  // (e.g. a future SameSite or Domain change) must reach the clearing cookie.
  const callbackSrc = fs.readFileSync(new URL('../api/auth/callback.ts', import.meta.url), 'utf8');
  const loginCookie = callbackSrc.match(/`pawpath_session=[^;`]*;([^`]*)`/);
  assert.ok(loginCookie, 'callback.ts must set the pawpath_session cookie in a template literal');
  const loginAttributes = loginCookie[1]
    .replace(/Max-Age=\$\{[^}]*\}/, 'Max-Age=0')
    .replace(/\s+/g, ' ')
    .trim();

  const { req } = requestWithLiveSession('POST');
  const res = mockRes();
  logout(req, res);

  assert.equal(attributesOf(sessionClearingCookie(res)), loginAttributes);
  assert.equal(attributesOf(CLEAR_SESSION_COOKIE), loginAttributes);
});

test('logout is idempotent: repeated POSTs keep returning the same expiring cookie', () => {
  const { req } = requestWithLiveSession('POST');
  const first = mockRes();
  const second = mockRes();
  logout(req, first);
  logout(req, second);

  assert.equal(first.statusCode, 200);
  assert.equal(second.statusCode, 200);
  assert.deepEqual(setCookies(second), setCookies(first));
  assert.equal(attributesOf(sessionClearingCookie(second)), 'HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
});

test('POST without any cookie still succeeds and clears (best-effort)', () => {
  const res = mockRes();
  logout({ method: 'POST', cookies: {}, headers: {} }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(attributesOf(sessionClearingCookie(res)), 'HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
});

test('POST with an expired or tampered cookie still clears (no identity resolution required)', () => {
  const expired = signSessionToken(
    { ...CLAIMS, exp: Math.floor(Date.now() / 1000) - 60 },
    SECRET,
  );
  const tampered = `${signSessionToken(CLAIMS, SECRET).split('.').slice(0, 2).join('.')}.deadbeef`;
  assert.equal(verifySessionToken(expired, SECRET), null);
  assert.equal(verifySessionToken(tampered, SECRET), null);

  for (const token of [expired, tampered, 'not-a-token', '']) {
    const res = mockRes();
    logout({ method: 'POST', cookies: { [SESSION_COOKIE]: token }, headers: {} }, res);
    assert.equal(res.statusCode, 200);
    assert.equal(attributesOf(sessionClearingCookie(res)), 'HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0');
  }
});

test('non-POST methods are rejected with 405 and never touch the session cookie', () => {
  for (const method of ['GET', 'PUT', 'DELETE', 'PATCH']) {
    const { req } = requestWithLiveSession(method);
    const res = mockRes();
    logout(req, res);

    assert.equal(res.statusCode, 405, `${method} must not be accepted`);
    assert.equal(res.getHeader('allow'), 'POST');
    assert.equal(sessionClearingCookie(res), undefined, `${method} must not clear the session`);
  }
});

test('client signOut revokes server-side first, and never lets that call break the UI', () => {
  // Behavioural contract of src/lib/auth.ts (which cannot be imported here: it
  // pulls in React and touches window/localStorage at call time).
  const src = fs.readFileSync(new URL('../src/lib/auth.ts', import.meta.url), 'utf8');
  const body = src.match(/export const signOut=async\(\)=>\{([\s\S]*?)\n\};/);
  assert.ok(body, 'signOut must be an async function');
  const inner = body[1];

  assert.match(inner, /await fetch\('\/api\/auth\/logout',\s*\{\s*method:\s*'POST'\s*\}\)/);
  // The revoke call is wrapped so a network failure cannot block sign-out...
  assert.match(inner, /try\{[\s\S]*\/api\/auth\/logout[\s\S]*\}catch\{\}/);
  // ...and client state is still cleared afterwards, exactly as before.
  assert.ok(inner.indexOf('/api/auth/logout') < inner.indexOf('clearUser()'));
  assert.match(inner, /clearUser\(\);\s*window\.dispatchEvent\(new Event\('storage'\)\);/);
});
