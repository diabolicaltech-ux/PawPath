import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const storage = fs.readFileSync(new URL('../src/lib/storage.ts', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
test('legacy recovery is explicit and quarantined per account', () => {
  assert.match(storage, /quarantineLegacyPets/);
  assert.match(storage, /quarantine_\$\{encodeURIComponent\(sub\)\}/);
  assert.match(storage, /if \(!raw \|\| localStorage\.getItem\(quarantineKey\(sub\)\)\) return \[\]/);
  assert.match(storage, /loadUnsupportedProfiles\(sub\?: string\)/);
});
test('account switch clears in-memory pets before loading next account', () => {
  assert.match(app, /setPets\(\[\]\);\s*setSelectedPet\(null\);\s*setEditingPet\(null\);/);
});
