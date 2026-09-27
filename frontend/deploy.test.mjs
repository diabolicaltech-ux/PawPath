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

test('deployment uploads repository rewrites in the flattened root vercel.json', () => {
  assert.match(source, /const repoVercel = JSON\.parse\(readFileSync\(join\(process\.cwd\(\), 'vercel\.json'\), 'utf8'\)\)/);
  assert.match(source, /const rewrites = Array\.isArray\(repoVercel\.rewrites\)/);
  assert.match(source, /rewrites,/);
  assert.match(source, /framework: null/);
  assert.match(source, /buildCommand: 'true'/);
  assert.match(source, /outputDirectory: '\.'/);
  assert.doesNotMatch(source, /rewrites: \[\{ source: '\/guides\/:slug'/);
  assert.doesNotMatch(source, /cd frontend && npm ci/);
});

test('deployment ships the retired-URL 308 redirects in the flattened root vercel.json', () => {
  // Beta-readiness audit finding 3 (2026-09-25): the deployer used to ship a
  // synthetic vercel.json with rewrites only, so the retired cat-era 301
  // redirects in frontend/vercel.json never reached production and every
  // retired URL (e.g. /breed-health/maine-coon) returned a raw 404. The
  // flattened config must carry the redirect list so Vercel applies the
  // redirects before the rewrites.
  assert.match(source, /const frontendVercel = JSON\.parse\(readFileSync\(join\(FRONTEND, 'vercel\.json'\), 'utf8'\)\)/);
  assert.match(source, /const redirects = Array\.isArray\(frontendVercel\.redirects\)/);
  assert.match(source, /redirects,/);
  // The data itself: frontend/vercel.json must keep the retired-URL list,
  // including the highest-traffic retired cat URLs, mapping to dogs-only
  // pages with a permanent (308) status.
  const feVercel = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8'));
  const redirectSources = (feVercel.redirects || []).map((r) => r.source);
  assert.ok(redirectSources.length >= 20, `frontend/vercel.json must keep the retired-URL redirect list (found ${redirectSources.length})`);
  for (const retired of ['/breed-health/maine-coon', '/breed-health/persian', '/guides/cat-vaccination-schedule']) {
    assert.ok(redirectSources.includes(retired), `frontend/vercel.json is missing the redirect for ${retired}`);
  }
  const catGuide = feVercel.redirects.find((r) => r.source === '/guides/cat-vaccination-schedule');
  assert.equal(catGuide.destination, '/guides/dog-vaccination-schedule');
  assert.equal(catGuide.permanent, true);
});
test('deployment tolerates a missing serverless api directory', () => {
  assert.match(source, /existsSync\(apiDir\)/);
  assert.match(source, /if \(existsSync\(apiDir\)\) files\.push\(\.\.\.getFiles\(apiDir, 'api'\)\)/);
});

test('deployment falls back to per-file upload when the payload exceeds the inline budget', () => {
  // Vercel caps a deployment request body at ~10MB. When the base64 payload would
  // exceed the inline budget, deploy.mjs must use Vercel's per-file upload path
  // (SHA1 digest -> POST /v2/files with x-now-digest/x-now-size -> create the
  // deployment referencing those digests) instead of a single oversized body.
  assert.match(source, /INLINE_BODY_BUDGET\s*=\s*8_000_000/);
  assert.match(source, /createHash\('sha1'\)/);
  assert.match(source, /const usePerFile = bodyEstimate > INLINE_BODY_BUDGET/);
  assert.match(source, /v2\/files\?teamId=/);
  assert.match(source, /'x-now-digest'/);
  assert.match(source, /'x-now-size'/);
  assert.match(source, /missing/);
});

test('no Rescue a Dog feature remains shipped or referenced', () => {
  // Owner directed (2026-08-14) that the Rescue a Pet/Dog page and link be
  // removed entirely: no page component, no navigation entry, no view wiring,
  // no ZIP/Places lookup route, and no user-facing references in the client.
  const frontendDir = join(process.cwd(), 'frontend');
  assert.equal(
    existsSync(join(frontendDir, 'src', 'components', 'RescuePage.tsx')),
    false,
    'frontend/src/components/RescuePage.tsx must be removed'
  );
  assert.equal(existsSync(join(frontendDir, 'api', 'rescue.js')), false, 'frontend/api/rescue.js must be removed');
  const apiDir = join(frontendDir, 'api');
  const deployed = existsSync(apiDir)
    ? readdirSync(apiDir, { recursive: true }).map((entry) => String(entry))
    : [];
  assert.equal(deployed.some((name) => name.includes('rescue')), false, 'no api handler may reference the rescue listing');
  // No user-facing rescue page/navigation/view wiring may remain. Breed-content
  // mentions of "rescue" (e.g. Saint Bernard history) are intentional and are
  // not matched here.
  const featurePattern = /\brescue\b|RescuePage|Rescue a Dog|'rescue'|"rescue"/i;
  const grepDirs = [join(frontendDir, 'src')];
  for (const dir of grepDirs) {
    const matches = [];
    const walk = (current) => {
      for (const entry of readdirSync(current, { withFileTypes: true })) {
        const full = join(current, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (/\.(ts|tsx|js|mjs|json)$/.test(entry.name)) {
          if (entry.name === 'breed_newsletter_data.ts') continue; // breed content, not the Rescue feature
          const text = readFileSync(full, 'utf8');
          if (featurePattern.test(text)) matches.push(full);
        }
      }
    };
    walk(dir);
    assert.deepEqual(matches, [], `Rescue feature references found in ${dir}`);
  }
});
