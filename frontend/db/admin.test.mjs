import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const admin = fs.readFileSync(new URL('../api/admin.ts', import.meta.url), 'utf8');
const me = fs.readFileSync(new URL('../api/me.ts', import.meta.url), 'utf8');
const collab = fs.readFileSync(new URL('../api/collab.ts', import.meta.url), 'utf8');
const identity = fs.readFileSync(new URL('../api/_lib/identity.ts', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../api/_lib/schema.ts', import.meta.url), 'utf8');
const access = fs.readFileSync(new URL('../src/lib/access.ts', import.meta.url), 'utf8');
const adminClient = fs.readFileSync(new URL('../src/lib/admin.ts', import.meta.url), 'utf8');

test('admin endpoint gates access on the owner email server-side', () => {
  assert.match(admin, /contactpawpath@gmail\.com/);
  assert.match(admin, /identity\.email\.toLowerCase\(\) !== OWNER_EMAIL/);
});

test('admin returns 404 (not 403) for unauthorized access', () => {
  assert.match(admin, /res\.status\(404\)/);
  assert.match(admin, /NOT_FOUND/);
  // The admin must never accept a client-supplied identity/email as auth.
  assert.doesNotMatch(admin, /req\.body\.email/);
});

test('admin identity is resolved server-side via the session/Google identity helper', () => {
  assert.match(admin, /resolveIdentity/);
  assert.match(identity, /verifySessionToken/);
  assert.match(identity, /readSessionCookie/);
  assert.match(identity, /tokeninfo\?id_token=/);
});

test('admin mutations are parameterized and keyed by account id', () => {
  assert.match(admin, /UPDATE accounts SET banned_at/);
  assert.match(admin, /UPDATE accounts SET banned_at = NULL/);
  assert.match(admin, /INSERT INTO entitlement_grants/);
  assert.match(admin, /INSERT INTO admin_messages/);
  assert.match(admin, /audit_events/);
});

test('collab enforces bans server-side', () => {
  assert.match(collab, /banned_at/);
  assert.match(collab, /ACCOUNT_BANNED/);
});

test('me endpoint exposes server entitlements and messages', () => {
  assert.match(me, /entitlement_grants/);
  assert.match(me, /admin_messages/);
  assert.match(me, /slot_grants/);
  assert.match(me, /premium_grants/);
  assert.match(me, /banned/);
});

test('schema self-provisions admin tables idempotently', () => {
  assert.match(schema, /banned_at/);
  assert.match(schema, /entitlement_grants/);
  assert.match(schema, /admin_messages/);
  assert.match(schema, /IF NOT EXISTS/);
});

test('server entitlements overlay the pet limit (admin grants, no Stripe)', () => {
  assert.match(access, /applyServerEntitlements/);
  assert.match(access, /SERVER_EXTRA_PETS_STORAGE_KEY/);
  assert.match(access, /serverExtra\(\)/);
});

test('admin client never leaks the owner email into the bundle', () => {
  assert.doesNotMatch(adminClient, /contactpawpath/);
});
