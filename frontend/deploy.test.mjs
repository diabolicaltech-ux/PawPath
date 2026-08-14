import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
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

test('deployment tolerates a missing serverless api directory', () => {
  assert.match(source, /existsSync\(apiDir\)/);
  assert.match(source, /if \(existsSync\(apiDir\)\) files\.push\(\.\.\.getFiles\(apiDir, 'api'\)\)/);
});

test('no live rescue directory route is shipped or referenced', () => {
  // The owner-directed experience is a coming-soon tab with no ZIP lookup.
  // A serverless handler that accepts a ZIP and queries Google Places must not
  // be present in the repository or referenced by the frontend or deployer.
  const frontendDir = join(process.cwd(), 'frontend');
  assert.equal(existsSync(join(frontendDir, 'api', 'rescue.js')), false, 'frontend/api/rescue.js must be removed');
  const apiDir = join(frontendDir, 'api');
  const deployed = existsSync(apiDir)
    ? readdirSync(apiDir, { recursive: true }).map((entry) => String(entry))
    : [];
  assert.equal(deployed.some((name) => name.includes('rescue')), false, 'no api handler may reference the rescue listing');
  const grepDirs = [join(frontendDir, 'src')];
  for (const dir of grepDirs) {
    const matches = [];
    const walk = (current) => {
      for (const entry of readdirSync(current, { withFileTypes: true })) {
        const full = join(current, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (/\.(ts|tsx|js|mjs|json)$/.test(entry.name)) {
          const text = readFileSync(full, 'utf8');
          if (/api\/rescue|zip.*google.*places|places.*zip/i.test(text)) matches.push(full);
        }
      }
    };
    walk(dir);
    assert.deepEqual(matches, [], `rescue ZIP lookup references found in ${dir}`);
  }
});
