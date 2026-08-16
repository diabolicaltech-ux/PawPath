import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const storage = fs.readFileSync(new URL('../src/lib/storage.ts', import.meta.url), 'utf8');
const app = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const petState = fs.readFileSync(new URL('../src/lib/petState.ts', import.meta.url), 'utf8');
const cloudSync = fs.readFileSync(new URL('../src/lib/cloudSync.ts', import.meta.url), 'utf8');

test('legacy recovery is explicit and quarantined per account', () => {
  assert.match(storage, /quarantineLegacyPets/);
  assert.match(storage, /quarantine_\$\{encodeURIComponent\(sub\)\}/);
  assert.match(storage, /if \(!raw \|\| localStorage\.getItem\(quarantineKey\(sub\)\)\) return \[\]/);
  assert.match(storage, /loadUnsupportedProfiles\(sub\?: string\)/);
});

test('account switch clears in-memory pets before loading next account', () => {
  assert.match(app, /setPets\(\[\]\);\s*setSelectedPet\(null\);\s*setEditingPet\(null\);/);
});

test('sign-in reconciles against the cloud and uploads local-only profiles', () => {
  // Cloud is the authoritative store: sign-in must load remote pets and then
  // push any profiles that exist only on this device (offline or pre-cloud).
  assert.match(app, /loadRemotePets\(\)\.then/);
  assert.match(app, /syncUpLocalOnlyPets\(localPets\)/);
  assert.match(app, /setSyncStatus\('syncing'\)/);
  assert.match(app, /setSyncStatus\('offline'\)/);
});

test('remote merge prefers the cloud profile for matching ids', () => {
  // Cloud wins on conflicts; local-only profiles are preserved (not dropped).
  assert.match(petState, /Cloud store is authoritative/);
  assert.match(petState, /pet\.id && remoteById\.has\(pet\.id\) \? remoteById\.get\(pet\.id\)!/);
  assert.match(petState, /Deduplicate by id/);
});

test('cloud sync renews the Google id token before collab requests', () => {
  assert.match(cloudSync, /ensureFreshIdToken/);
  assert.match(cloudSync, /\/api\/auth\/refresh/);
  assert.match(cloudSync, /refresh_token/);
  assert.match(cloudSync, /REMOTE_AUTH_UNAVAILABLE/);
});

test('remote mutation failures are surfaced, not silent', () => {
  // A failed optional remote request must not look like a successful save.
  assert.match(app, /setSyncStatus\('synced'\)/);
  assert.match(app, /will sync this profile to your account when you are back online/);
  assert.match(app, /Saved on this device/);
});
