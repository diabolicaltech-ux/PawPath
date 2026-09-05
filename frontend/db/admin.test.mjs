import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const admin = fs.readFileSync(new URL('../api/admin.ts', import.meta.url), 'utf8');
const me = fs.readFileSync(new URL('../api/me.ts', import.meta.url), 'utf8');
const collab = fs.readFileSync(new URL('../api/collab.ts', import.meta.url), 'utf8');
const identity = fs.readFileSync(new URL('../api/_lib/identity.ts', import.meta.url), 'utf8');
const owner = fs.readFileSync(new URL('../api/_lib/owner.ts', import.meta.url), 'utf8');
const schema = fs.readFileSync(new URL('../api/_lib/schema.ts', import.meta.url), 'utf8');
const sql = fs.readFileSync(new URL('./001_coparent.sql', import.meta.url), 'utf8');
const access = fs.readFileSync(new URL('../src/lib/access.ts', import.meta.url), 'utf8');
const adminClient = fs.readFileSync(new URL('../src/lib/admin.ts', import.meta.url), 'utf8');

test('admin endpoint gates access on the owner email server-side', () => {
  assert.match(owner, /contactpawpath@gmail\.com/);
  assert.match(owner, /OWNER_EMAIL/);
  assert.match(admin, /isOwnerEmail/);
  // Never accept a client-supplied identity/email as auth.
  assert.doesNotMatch(admin, /req\.body\.email/);
});

test('admin returns 404 (not 403) for unauthorized access, 503 only on real outage', () => {
  assert.match(admin, /res\.status\(404\)/);
  assert.match(admin, /NOT_FOUND/);
  // A missing DATABASE_URL must not mask as 404; surface 503 for the owner.
  assert.match(admin, /res\.status\(503\)/);
  assert.match(admin, /DATABASE_NOT_CONFIGURED/);
  // The owner-gate runs before any DB connect so a non-owner never gets 503.
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

test('owner account is exempt from ban lockout in collab', () => {
  assert.match(collab, /isOwnerEmail/);
  assert.match(collab, /banned_at && !isOwnerEmail\(user\.email\)/);
});

test('schema and coparent SQL both self-provision the admin tables', () => {
  for (const table of ['entitlement_grants', 'admin_messages']) {
    assert.match(schema, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`));
    assert.match(sql, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`));
  }
  assert.match(schema, /banned_at/);
  assert.match(schema, /banned_reason/);
  assert.match(sql, /banned_at/);
  assert.match(sql, /banned_reason/);
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
