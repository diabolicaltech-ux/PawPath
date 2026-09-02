import test from 'node:test';
import assert from 'node:assert/strict';
import {
  signSessionToken,
  verifySessionToken,
  readSessionCookie,
  SESSION_COOKIE,
} from '../api/_lib/session.ts';

const SECRET = 'test-secret-that-is-long-enough-for-hmac-sha256-1234567890';

test('session token signs and verifies a roundtrip', () => {
  const claims = { sub: 'google-sub-123', email: 'owner@example.com', name: 'Owner' };
  const token = signSessionToken(claims, SECRET);
  assert.equal(typeof token, 'string');
  assert.equal(token.split('.').length, 3);
  const verified = verifySessionToken(token, SECRET);
  assert.ok(verified);
  assert.equal(verified.sub, claims.sub);
  assert.equal(verified.email, claims.email);
  assert.equal(verified.name, claims.name);
});

test('session token is rejected when tampered or signed with a different secret', () => {
  const token = signSessionToken({ sub: 's', email: 'e@x.co', name: 'N' }, SECRET);
  const parts = token.split('.');
  // Tamper with the payload.
  const tampered = `${parts[0]}.${Buffer.from(JSON.stringify({ sub: 'evil', email: 'e@x.co', exp: Math.floor(Date.now() / 1000) + 9999 })).toString('base64url')}.${parts[2]}`;
  assert.equal(verifySessionToken(tampered, SECRET), null);
  // Signed with a different secret.
  assert.equal(verifySessionToken(token, 'a-different-secret-1234567890'), null);
});

test('session token is rejected when expired', () => {
  const token = signSessionToken(
    { sub: 's', email: 'e@x.co', name: 'N', exp: Math.floor(Date.now() / 1000) - 60 },
    SECRET,
  );
  assert.equal(verifySessionToken(token, SECRET), null);
});

test('readSessionCookie extracts the pawpath_session value', () => {
  assert.equal(readSessionCookie(undefined), null);
  assert.equal(readSessionCookie(''), null);
  assert.equal(readSessionCookie('foo=bar'), null);
  assert.equal(
    readSessionCookie(`foo=bar; ${SESSION_COOKIE}=abc.def.ghi; other=1`),
    'abc.def.ghi',
  );
});
