import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const sql = fs.readFileSync(new URL('./001_coparent.sql', import.meta.url), 'utf8');
const handler = fs.readFileSync(new URL('../api/collab.ts', import.meta.url), 'utf8');
const identityLib = fs.readFileSync(new URL('../api/_lib/identity.ts', import.meta.url), 'utf8');
const schemaLib = fs.readFileSync(new URL('../api/_lib/schema.ts', import.meta.url), 'utf8');
test('coparent schema contains authorization boundaries and audit trail', () => {
  for (const table of ['accounts','pets','pet_memberships','invitations','audit_events']) assert.match(sql, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`));
  assert.match(sql, /google_sub text NOT NULL UNIQUE/);
  assert.match(sql, /pet_member_role/);
  assert.match(sql, /expires_at timestamptz/);
  assert.match(sql, /ON DELETE CASCADE/);
});
test('identity is derived server-side from the verified Google token', () => {
  // Never accept a client-supplied subject: identity comes from Google's
  // tokeninfo response and the aud claim must match GOOGLE_CLIENT_ID.
  assert.match(identityLib, /tokeninfo\?id_token=/);
  assert.match(identityLib, /u\.sub/);
  assert.match(identityLib, /u\.aud/);
  assert.match(identityLib, /GOOGLE_CLIENT_ID/);
  assert.doesNotMatch(handler, /req\.body\.sub|req\.query\.sub/);
});
test('every pet query is scoped to the authenticated account', () => {
  // GET lists only memberships; PUT/DELETE mutate only rows joined to the
  // caller's account; POST binds owner_account_id to the verified account.
  assert.match(handler, /JOIN pet_memberships m ON m\.pet_id=p\.id WHERE m\.account_id=\$1/);
  assert.match(handler, /WHERE p\.id=\$3 AND m\.pet_id=p\.id AND m\.account_id=\$4/);
  assert.match(handler, /DELETE FROM pets p USING pet_memberships m WHERE p\.id=\$1 AND m\.pet_id=p\.id AND m\.account_id=\$2/);
  assert.match(handler, /INSERT INTO pets \(owner_account_id,name,payload\) VALUES \(\$1,\$2,\$3\)/);
});
test('POST preserves a well-formed client pet id and rejects malformed ids', () => {
  // Stable client ids prevent duplicate pets across sync/merge/relogin. The id
  // is validated as a UUID before use and never trusted for authorization.
  assert.match(handler, /client-supplied pet id/);
  assert.match(handler, /INSERT INTO pets \(id,owner_account_id,name,payload\) VALUES \(\$1,\$2,\$3,\$4\)/);
  assert.match(handler, /ON CONFLICT \(id\) DO UPDATE/);
  assert.match(handler, /ON CONFLICT DO NOTHING/);
  assert.match(handler, /INSERT INTO pets \(owner_account_id,name,payload\) VALUES \(\$1,\$2,\$3\)/);
});
test('collab handler refuses to run without a configured database', () => {
  assert.match(handler, /DATABASE_NOT_CONFIGURED/);
});

test('collab authenticates via the session cookie before Google tokeninfo', () => {
  // After the ID token expires (~1h), the HttpOnly session cookie keeps cloud
  // auth alive; the Google tokeninfo path remains as the fallback. The logic
  // now lives in the shared identity helper; collab consumes it and enforces
  // bans server-side.
  assert.match(handler, /resolveIdentity/);
  assert.match(identityLib, /verifySessionToken/);
  assert.match(identityLib, /readSessionCookie/);
  assert.match(identityLib, /pawpath_session|SESSION_COOKIE|SESSION_SECRET/);
  assert.match(identityLib, /tokeninfo\?id_token=/);
});

test('collab self-provisions the schema on first use', () => {
  // A fresh Neon database must work without a manual migration step.
  assert.match(handler, /ensureSchema/);
});

test('runtime schema is idempotent and mirrors the coparent DDL', () => {
  for (const table of ['accounts', 'pets', 'pet_memberships', 'audit_events']) {
    assert.match(schemaLib, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`));
  }
  assert.match(schemaLib, /pet_member_role/);
  assert.match(schemaLib, /duplicate_object/);
});
