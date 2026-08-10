import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const storage = fs.readFileSync(new URL('../src/lib/storage.ts', import.meta.url), 'utf8');
const access = fs.readFileSync(new URL('../src/lib/access.ts', import.meta.url), 'utf8');
test('pet storage never migrates unscoped data into an account', () => {
  assert.match(storage, /Account data is strictly namespaced/);
  assert.match(storage, /encodeURIComponent\(sub\)/);
  assert.doesNotMatch(storage, /localStorage\.getItem\(key\)\)/);
});
test('entitlements use the same encoded account namespace', () => {
  assert.match(access, /encodeURIComponent\(sub\)/);
  assert.match(access, /const key=\(k:string\)=>`\$\{k\}\$\{account\}`/);
});
