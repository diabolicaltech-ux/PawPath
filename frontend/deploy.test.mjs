import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('./deploy.mjs', import.meta.url), 'utf8');

test('deployment uploads the canonical frontend build and serverless handlers', () => {
  assert.match(source, /const DIST = join\(FRONTEND, 'dist'\)/);
  assert.match(source, /const apiDir = join\(FRONTEND, 'api'\)/);
  assert.match(source, /getFiles\(apiDir, 'api'\)/);
});

test('deployment exposes runtime dependencies at Vercel upload root', () => {
  assert.match(source, /file: 'package\.json'/);
  assert.match(source, /file: 'package-lock\.json'/);
  assert.match(source, /installCommand: 'npm ci --ignore-scripts'/);
});
