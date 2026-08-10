import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const source = fs.readFileSync(new URL('../api/db-health.ts', import.meta.url), 'utf8');
test('database health endpoint is protected and coarse', () => {
  assert.match(source, /DB_HEALTH_TOKEN/);
  assert.match(source, /x-db-health-token/);
  assert.match(source, /UNAUTHORIZED/);
  assert.match(source, /configured: false, connected: false, schema: false/);
  assert.doesNotMatch(source, /res\.status\([^)]*\)\.json\(\{[^}]*DATABASE_URL/);
});
test('database health checks required schema without reading user data', () => {
  for (const table of ['accounts', 'pets', 'pet_memberships', 'audit_events']) assert.match(source, new RegExp(table));
  assert.match(source, /pet_member_role/);
  assert.doesNotMatch(source, /SELECT \* FROM/);
});
