import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

// Behavioral guard for the security headers shipped by the production config.
//
// Where production actually reads from: the canonical deployer
// (frontend/deploy.mjs) does NOT upload either repository config verbatim. It
// writes a SYNTHETIC root vercel.json for the flattened upload, assembling it
// from repo-root `rewrites` + `headers` and frontend/vercel.json's `redirects`.
// Anything outside those passthroughs is dead config: it looks shipped in the
// repository and never reaches the edge. So this guard asserts (a) the header
// DATA in the repo-root vercel.json, (b) that deploy.mjs really passes it
// through, and (c) the redirect list on frontend/vercel.json, the copy the
// deployer reads for redirects (PR #38).
//
// The beta-readiness audit (check 6) found the live site serving HSTS only:
// CSP, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy,
// Permissions-Policy and COOP were all absent on / and every /api/* response.
//
// Two deliberate choices, both recorded here so they are not re-litigated:
//   1. CSP ships REPORT-ONLY. An enforcing CSP during a closed beta risks
//      breaking the Google OAuth redirect and inline app code; report-only
//      collects the violations needed to enforce it safely after beta.
//      `frame-ancestors` is ignored in a report-only policy, so clickjacking
//      protection is X-Frame-Options: DENY, which IS enforced.
//   2. HSTS is intentionally NOT re-declared here and `includeSubDomains` is
//      intentionally absent — the platform already sends
//      `max-age=63072000` (verified live), and turning on includeSubDomains
//      would commit every *.pawpath.quest host to HTTPS. That needs a subdomain
//      inventory nobody has produced, so it is left alone rather than guessed.

const config = JSON.parse(fs.readFileSync(new URL('../../vercel.json', import.meta.url), 'utf8'));
// The redirect list ships from the frontend copy; the header list from the root.
const shippedRedirects = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8')).redirects || [];
const deploySource = fs.readFileSync(new URL('../deploy.mjs', import.meta.url), 'utf8');

// Rebuild the synthetic vercel.json the deployer uploads, from the same two
// files and the same keys, so the assertions below run against the shape
// production receives rather than against a repository file.
const shippedConfig = {
  rewrites: Array.isArray(config.rewrites) ? config.rewrites : [],
  headers: Array.isArray(config.headers) ? config.headers : [],
  redirects: shippedRedirects,
};

/** Header values that apply to a given request path, per the config. */
function headersFor(path) {
  const out = {};
  for (const block of config.headers || []) {
    const re = new RegExp(`^${block.source.replace('/(.*)', '/(?:.*)').replace(/\//g, '\\/')}$`);
    if (re.test(path)) for (const h of block.headers || []) out[h.key.toLowerCase()] = h.value;
  }
  return out;
}

test('the deployer ships these headers in the flattened production vercel.json', () => {
  // Source assertions petrify the passthrough: delete either line in deploy.mjs
  // and this fails. Without them the headers below are unreachable — which is
  // exactly what shipped before this guard: a config that looked hardened in the
  // repository and served HSTS only at the edge.
  assert.match(deploySource, /const headers = Array\.isArray\(repoVercel\.headers\)/);
  assert.match(deploySource, /repoVercel\.headers/);
  assert.match(deploySource, /^\s*headers,$/m, 'the synthetic config object must include headers,');
  assert.match(deploySource, /Shipping vercel\.json with .*header blocks/, 'the deployer log must report the header count');

  // And the shipped object, rebuilt the way deploy.mjs builds it, must carry the
  // header block and the hardcoded settings the flattened upload needs.
  assert.ok(shippedConfig.headers.length >= 1, 'the flattened vercel.json must carry the security header block');
  assert.match(deploySource, /framework: null/);
  assert.match(deploySource, /buildCommand: 'true'/);
  assert.match(deploySource, /outputDirectory: '\.'/);
  assert.match(deploySource, /installCommand: 'npm ci --ignore-scripts'/);
  const shippedKeys = shippedConfig.headers.flatMap((block) => (block.headers || []).map((h) => h.key.toLowerCase()));
  for (const key of [
    'x-content-type-options',
    'x-frame-options',
    'referrer-policy',
    'permissions-policy',
    'cross-origin-opener-policy',
    'content-security-policy-report-only',
  ]) {
    assert.ok(shippedKeys.includes(key), `the shipped vercel.json is missing the ${key} header`);
  }
  // A header on a narrower source than /(.*) would silently exempt most of the
  // site, so the shipped block must stay site-wide.
  assert.ok(
    shippedConfig.headers.some((block) => block.source === '/(.*)'),
    'the shipped header block must cover every path',
  );
});

test('security headers cover both / and /api/* with the expected values', () => {
  const expected = {
    'x-content-type-options': 'nosniff',
    'x-frame-options': 'DENY',
    'referrer-policy': 'strict-origin-when-cross-origin',
    'cross-origin-opener-policy': 'same-origin',
  };
  // Checked against the two surfaces the audit probed, not just the root.
  for (const path of ['/', '/api/collab', '/api/admin', '/admin', '/breed-health/beagle']) {
    const headers = headersFor(path);
    for (const [key, value] of Object.entries(expected)) {
      assert.equal(headers[key], value, `${path} must send ${key}: ${value}`);
    }
    assert.match(
      headers['permissions-policy'] || '',
      /camera=\(\)/,
      `${path} must send a Permissions-Policy that denies camera`,
    );
    assert.match(headers['permissions-policy'], /geolocation=\(\)/, `${path} Permissions-Policy denies geolocation`);
  }
});

test('CSP ships report-only, never enforcing, and names the OAuth origins', () => {
  const headers = headersFor('/');
  // Report-only during beta: an enforcing CSP could break sign-in.
  assert.ok(headers['content-security-policy-report-only'], 'CSP must ship in report-only mode');
  assert.equal(
    headers['content-security-policy'],
    undefined,
    'no enforcing Content-Security-Policy header may be added while the beta runs',
  );
  const csp = headers['content-security-policy-report-only'];
  // The policy must not be so strict that it would break the flows it is
  // measuring — report-only is for collecting real violations, not noise.
  assert.match(csp, /default-src 'self'/);
  assert.match(csp, /object-src 'none'/);
  assert.match(csp, /frame-ancestors 'none'/);
  assert.match(csp, /accounts\.google\.com/, 'the Google OAuth origin must be allowed');
  assert.doesNotMatch(csp, /default-src \*/, 'a wildcard default-src would collect no useful signal');
});

test('HSTS is left to the platform: no includeSubDomains is asserted here', () => {
  const blocks = config.headers || [];
  for (const block of blocks) {
    for (const h of block.headers || []) {
      if (h.key.toLowerCase() === 'strict-transport-security') {
        assert.doesNotMatch(
          h.value,
          /includeSubDomains/i,
          'includeSubDomains commits every *.pawpath.quest host to HTTPS — confirm the subdomain inventory first',
        );
      }
    }
  }
});

test('/admin/ is redirected to /admin so it cannot fall through to a platform 404', () => {
  // Verified live before the fix: `/admin` → 200 landing page, but `/admin/`
  // → a bare platform 404 page (NOT_FOUND), which reads as a broken product to
  // anyone who types the trailing slash.
  //
  // This redirect ships from frontend/vercel.json, not the repo root: the
  // deployer reads the redirect list from the frontend copy (PR #38) and the
  // repo-root config's redirects never reach the edge. Asserting the source of
  // the passthrough keeps the entry from drifting into dead config again.
  assert.match(deploySource, /const redirects = Array\.isArray\(frontendVercel\.redirects\)/);
  const redirect = shippedConfig.redirects.find((r) => r.source === '/admin/');
  assert.ok(redirect, 'a shipped /admin/ redirect is required');
  assert.equal(redirect.destination, '/admin');
  assert.equal(redirect.permanent, true, 'expect a 308 permanent redirect');
  // Redirects must not have displaced the SPA rewrite they hand off to.
  assert.ok(
    shippedConfig.rewrites.some((r) => r.source === '/admin' && r.destination === '/index.html'),
    'the /admin -> /index.html rewrite must survive',
  );
  // No redirect may exist only in the repo-root config: that file's redirects
  // are never uploaded, so such an entry is a false assurance, not a fix.
  const shippedSources = shippedConfig.redirects.map((r) => r.source);
  for (const r of config.redirects || []) {
    assert.ok(shippedSources.includes(r.source), `repo-root redirect ${r.source} is never shipped — move it to frontend/vercel.json`);
  }
});

test('the pre-existing rewrites and build settings survive the header change', () => {
  const sources = (config.rewrites || []).map((r) => r.source);
  for (const s of ['/breed-health', '/breed-health/:slug', '/tools/:slug', '/guides/:slug', '/terms', '/privacy', '/admin']) {
    assert.ok(sources.includes(s), `missing pre-existing rewrite ${s}`);
  }
  assert.equal(config.outputDirectory, 'frontend/dist');
  assert.equal(config.buildCommand, 'cd frontend && npm run build');
  assert.equal(config.installCommand, 'cd frontend && npm ci');
});

test('post-deploy verification steps for these headers are recorded', (t) => {
  // No deploy happens in this change, so the live proof is a post-deploy step.
  // These are the exact checks to run against pawpath.quest once it ships; the
  // assertions above prove the config, these prove the edge.
  t.diagnostic('expected curl evidence after deploy:');
  t.diagnostic("  curl -sI https://pawpath.quest/ | grep -iE 'x-content-type-options|referrer-policy|permissions-policy|cross-origin-opener-policy|content-security-policy|strict-transport-security'");
  t.diagnostic('    -> x-content-type-options: nosniff');
  t.diagnostic('    -> x-frame-options: DENY');
  t.diagnostic('    -> referrer-policy: strict-origin-when-cross-origin');
  t.diagnostic('    -> cross-origin-opener-policy: same-origin');
  t.diagnostic('    -> content-security-policy-report-only: default-src ... (NOT content-security-policy)');
  t.diagnostic('    -> strict-transport-security: max-age=63072000 (platform, unchanged, no includeSubDomains)');
  t.diagnostic("  curl -sI https://pawpath.quest/api/collab | grep -i x-content-type-options  -> nosniff");
  t.diagnostic('  curl -sI https://pawpath.quest/admin/ | head -1  -> HTTP/2 308');
  t.diagnostic('  curl -sI https://pawpath.quest/admin  | head -1  -> HTTP/2 200');
});
