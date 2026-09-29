import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Widened owner-address / bundle guard.
//
// Why this file exists (F3 critique, beta-readiness audit 2): the previous guard
// asserted `doesNotMatch` against exactly TWO hand-picked files
// (src/lib/admin.ts, src/components/AdminPage.tsx). A leak anywhere else in the
// client shipped green. It also asserted the owner address never reaches the
// client at all, which is not the truth today: the owner's address IS the
// published SUPPORT address shown to users (landing page, signed-in home,
// dashboard, and the static breed-health pages).
//
// So this guard is behavioral instead of aspirational:
//   1. It walks the WHOLE client source tree, not two files.
//   2. It pins today's real set of support surfaces, so any NEW file carrying the
//      address fails loudly (that is the regression a leak-guard must catch).
//   3. It scans the BUILT bundle when a build output exists, which a source-only
//      guard cannot do — a `public/` asset or a transformed dependency only
//      shows up there.
//
// KNOWN OPEN QUESTION (owner decision, flagged in the audit as F2): the owner's
// address is both the support contact AND the admin gate. Whether the admin gate
// address should be a separate, non-public mailbox is the owner's call. Until
// that is decided, this test pins the current reality rather than pretending the
// address is absent — a guard that fails permanently on a known, accepted state
// teaches the team to ignore it.

const FRONTEND_DIR = fileURLToPath(new URL('..', import.meta.url));
const OWNER_ADDRESS = 'contactpawpath@gmail.com';

const rel = (p) => path.relative(FRONTEND_DIR, p).split(path.sep).join('/');

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

const TEXT_FILE = /\.(ts|tsx|js|jsx|mjs|cjs|html|css|json|txt|md|svg)$/i;

function readTextFiles(root) {
  return walk(root)
    .filter((f) => TEXT_FILE.test(f))
    .map((f) => ({ file: f, rel: rel(f), text: fs.readFileSync(f, 'utf8') }));
}

// The supported, user-facing places the owner's support address may appear. Any
// other file is a new leak surface and must fail this test.
const ALLOWED_SUPPORT_SURFACES = [
  /^src\/components\/(PublicLandingPage|LoggedInHomepage|Dashboard)\.tsx$/,
  /^public\/.*\.html$/,
];

test('owner address reaches the client only through the published support surfaces', () => {
  const sources = readTextFiles(path.join(FRONTEND_DIR, 'src'));
  const publicFiles = readTextFiles(path.join(FRONTEND_DIR, 'public'));
  const all = [...sources, ...publicFiles];

  // Guard the guard: a broken walk must not make this test vacuously pass.
  assert.ok(sources.length > 20, `expected to walk the client source tree, saw ${sources.length} files`);

  // Anchor on the known support surfaces, so a rename or a walk regression that
  // drops them shows up as a failure rather than silent success.
  for (const anchor of [
    'src/components/PublicLandingPage.tsx',
    'src/components/LoggedInHomepage.tsx',
    'src/components/Dashboard.tsx',
  ]) {
    const hit = all.find((f) => f.rel === anchor);
    assert.ok(hit, `expected to walk ${anchor}`);
    assert.ok(hit.text.includes(OWNER_ADDRESS), `${anchor} should still carry the published support address`);
  }

  const hits = all.filter((f) => f.text.includes(OWNER_ADDRESS));
  const offenders = hits
    .filter((f) => !ALLOWED_SUPPORT_SURFACES.some((re) => re.test(f.rel)))
    .map((f) => f.rel);

  assert.deepEqual(
    offenders,
    [],
    `the owner address appeared in a new client surface: ${offenders.join(', ')}. ` +
      'If this is intentional, add it to ALLOWED_SUPPORT_SURFACES with a comment; ' +
      'otherwise remove the address from that file.',
  );
});

test('the owner gate stays server-side and is never part of the client tree', () => {
  const ownerLib = fs.readFileSync(path.join(FRONTEND_DIR, 'api/_lib/owner.ts'), 'utf8');
  // The gate itself must exist and must be server-only.
  assert.match(ownerLib, /OWNER_EMAIL/);
  assert.match(ownerLib, /isOwnerEmail/);

  // No client file may import or re-implement the gate: authorization must never
  // be decided in the browser.
  const clientFiles = readTextFiles(path.join(FRONTEND_DIR, 'src'));
  const gating = clientFiles
    .filter((f) => /isOwnerEmail|OWNER_EMAIL|admin\.access_denied|_lib\/owner/.test(f.text))
    .map((f) => f.rel);
  assert.deepEqual(gating, [], `client code must not implement the owner gate: ${gating.join(', ')}`);
});

test('a built bundle, when present, carries no server secret material', (t) => {
  const distDir = path.join(FRONTEND_DIR, 'dist');
  if (!fs.existsSync(distDir)) {
    t.diagnostic(`no build output at ${rel(distDir)} (gitignored) — run a build to scan the real bundle`);
    return;
  }
  const assets = readTextFiles(distDir);
  assert.ok(assets.length > 0, 'build output exists but no text assets were found');

  const SECRET_NAMES = [
    'RESEND_API_KEY',
    'DATABASE_URL',
    'DB_HEALTH_TOKEN',
    'SESSION_SECRET',
    'STRIPE_SECRET_KEY',
    'ADMIN_ALERT_EMAIL',
    'OWNER_EMAIL',
    'GOOGLE_CLIENT_SECRET',
  ];
  for (const asset of assets) {
    for (const name of SECRET_NAMES) {
      assert.ok(!asset.text.includes(name), `${asset.rel} must not reference ${name}`);
    }
    // If the running environment exposes a real secret, its value must not have
    // been inlined into the bundle either.
    for (const name of SECRET_NAMES) {
      const value = process.env[name];
      if (typeof value === 'string' && value.length >= 12) {
        assert.ok(!asset.text.includes(value), `${asset.rel} must not contain the value of ${name}`);
      }
    }
  }
  t.diagnostic(`scanned ${assets.length} built assets for secret material`);
});

test('a built bundle, when present, contains no server gate logic', (t) => {
  const distDir = path.join(FRONTEND_DIR, 'dist');
  if (!fs.existsSync(distDir)) {
    t.diagnostic('no build output present — skipping bundle gate-logic scan');
    return;
  }
  const assets = readTextFiles(distDir);
  for (const asset of assets) {
    // The admin gate and the alert/audit machinery are server-only. Their
    // presence in a client asset means server code was bundled.
    for (const marker of ['isOwnerEmail', 'admin.access_denied', 'recordDeniedAdminAttempt']) {
      assert.ok(!asset.text.includes(marker), `${asset.rel} must not contain server gate logic (${marker})`);
    }
  }

  // Record the address's real foothold in the bundle for the record. This is the
  // documented, currently-accepted reality (see the header note); it becomes a
  // blocking assertion once the owner rules on the support-vs-gate address.
  const carrying = assets.filter((a) => a.text.includes(OWNER_ADDRESS)).map((a) => a.rel);
  t.diagnostic(
    `built assets carrying the published support address (${carrying.length}): ${carrying.slice(0, 5).join(', ')}${carrying.length > 5 ? ', …' : ''}`,
  );
});
