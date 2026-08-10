import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const sql = fs.readFileSync(new URL('./001_coparent.sql', import.meta.url), 'utf8');
test('coparent schema contains authorization boundaries and audit trail', () => {
  for (const table of ['accounts','pets','pet_memberships','invitations','audit_events']) assert.match(sql, new RegExp(`CREATE TABLE IF NOT EXISTS ${table}`));
  assert.match(sql, /google_sub text NOT NULL UNIQUE/);
  assert.match(sql, /pet_member_role/);
  assert.match(sql, /expires_at timestamptz/);
  assert.match(sql, /ON DELETE CASCADE/);
});
