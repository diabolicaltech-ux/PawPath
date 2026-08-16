import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const login = fs.readFileSync(new URL('../api/auth/login.ts', import.meta.url), 'utf8');
const callback = fs.readFileSync(new URL('../api/auth/callback.ts', import.meta.url), 'utf8');
const refresh = fs.readFileSync(new URL('../api/auth/refresh.ts', import.meta.url), 'utf8');
const authLib = fs.readFileSync(new URL('../src/lib/auth.ts', import.meta.url), 'utf8');

test('login requests openid email profile (offline_access dropped: Google rejects it for this client)', () => {
  assert.match(login, /openid email profile/);
  assert.doesNotMatch(login, /offline_access/);
});

test('callback persists the refresh token next to the id token', () => {
  assert.match(callback, /idToken: t\.id_token/);
  assert.match(callback, /refreshToken: t\.refresh_token/);
});

test('refresh endpoint exchanges a refresh token for a new id token server-side', () => {
  assert.match(refresh, /grant_type: 'refresh_token'/);
  assert.match(refresh, /client_secret/);
  assert.match(refresh, /id_token/);
  assert.match(refresh, /REFRESH_TOKEN_REQUIRED/);
  assert.match(refresh, /405/);
});

test('client profile carries the refresh token field', () => {
  assert.match(authLib, /refreshToken\?: string/);
});
