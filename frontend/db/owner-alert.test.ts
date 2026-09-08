import test from 'node:test';
import assert from 'node:assert/strict';
import { recordDeniedAdminAttempt } from '../api/_lib/ownerAlert.ts';

// A tiny in-memory fake of pg's PoolClient sufficient for
// recordDeniedAdminAttempt. It tracks audit rows and lets the test control the
// rate-limit SELECT so we can prove both the "first send" and "suppressed
// repeat" paths without a live database.
function makePool(opts: { emailMarkerCount?: number } = {}) {
  const state = {
    auditRows: [] as Array<{ action: string; metadata: unknown }>,
    emailSent: [] as Array<Record<string, unknown>>,
    released: false,
  };
  const pool = {
    connect: async () => ({
      query: async (sql: string, params: unknown[]) => {
        if (sql.includes('INSERT INTO accounts') && sql.includes('RETURNING id')) {
          return { rows: [{ id: 'acct-0000-0000-0000-000000000001' }], rowCount: 1 };
        }
        if (sql.includes("action = 'admin.access_denied_email'") && sql.includes('SELECT 1')) {
          // Rate-limit check: rowCount 0 => no recent email, send allowed.
          return { rows: [], rowCount: opts.emailMarkerCount ?? 0 };
        }
        if (sql.includes('INSERT INTO audit_events')) {
          state.auditRows.push({ action: String(params[1]), metadata: params[2] });
          return { rows: [], rowCount: 1 };
        }
        // DDL (ensureSchema) and anything else.
        return { rows: [], rowCount: 0 };
      },
      release: () => {
        state.released = true;
      },
    }),
  };
  return { pool, state };
}

const IDENTITY = { sub: 'google-123', email: 'intruder@example.com', name: 'Intruder McGee' };
const HEADERS = {
  'x-forwarded-for': '203.0.113.7, 10.0.0.1',
  'user-agent': 'Mozilla/5.0 (test)',
};

test('first non-owner attempt: writes an audit row AND queues the owner alert with visitor identity', async () => {
  const { pool, state } = makePool({ emailMarkerCount: 0 });
  const sent: Array<Record<string, unknown>> = [];
  const spy = (meta: Record<string, unknown>) => {
    sent.push(meta);
    return true;
  };

  await recordDeniedAdminAttempt(pool as never, IDENTITY, HEADERS, spy);

  // Audit row always written, with the visitor's identity and source metadata.
  const denied = state.auditRows.filter((r) => r.action === 'admin.access_denied');
  assert.equal(denied.length, 1, 'exactly one admin.access_denied audit row');
  const meta = JSON.parse(denied[0].metadata as string) as Record<string, unknown>;
  assert.equal(meta.email, 'intruder@example.com');
  assert.equal(meta.name, 'Intruder McGee');
  assert.equal(meta.account_id, 'acct-0000-0000-0000-000000000001');
  assert.equal(meta.ip, '203.0.113.7');

  // Email queued exactly once, carrying the visitor's identity.
  assert.equal(sent.length, 1, 'one alert email queued');
  assert.equal(sent[0].email, 'intruder@example.com');
  assert.equal(sent[0].name, 'Intruder McGee');

  // A rate-limit marker row was written to back the 24h suppression.
  const markers = state.auditRows.filter((r) => r.action === 'admin.access_denied_email');
  assert.equal(markers.length, 1, 'one rate-limit marker row');
  assert.equal(state.released, true, 'pool client released');
});

test('repeat attempt within 24h: audit row still accrues but the alert email is suppressed', async () => {
  const { pool, state } = makePool({ emailMarkerCount: 1 }); // simulate a recent email
  const sent: Array<Record<string, unknown>> = [];
  const spy = (meta: Record<string, unknown>) => {
    sent.push(meta);
    return true;
  };

  await recordDeniedAdminAttempt(pool as never, IDENTITY, HEADERS, spy);

  const denied = state.auditRows.filter((r) => r.action === 'admin.access_denied');
  assert.equal(denied.length, 1, 'audit row still written on repeat attempt');
  assert.equal(sent.length, 0, 'no email queued within the cooldown window');
  // No new marker either — the existing marker is still within 24h.
  const markers = state.auditRows.filter((r) => r.action === 'admin.access_denied_email');
  assert.equal(markers.length, 0, 'no duplicate rate-limit marker');
});

test('alert recipient is configurable via ADMIN_ALERT_EMAIL and falls back to the owner address', async () => {
  const { buildAlertEmail, alertRecipient } = await import('../api/_lib/ownerAlert.ts');
  const saved = process.env.ADMIN_ALERT_EMAIL;
  const savedKey = process.env.RESEND_API_KEY;
  try {
    delete process.env.ADMIN_ALERT_EMAIL;
    assert.equal(alertRecipient(), 'contactpawpath@gmail.com');

    process.env.RESEND_API_KEY = 're_test_key';
    const fallback = buildAlertEmail({ email: 'x@example.com', name: 'X', account_id: 'a', ip: '', user_agent: '', attempted_at: '' });
    assert.equal(fallback?.to[0], 'contactpawpath@gmail.com');

    process.env.ADMIN_ALERT_EMAIL = 'ops@example.com';
    const overridden = buildAlertEmail({ email: 'x@example.com', name: 'X', account_id: 'a', ip: '', user_agent: '', attempted_at: '' });
    assert.equal(overridden?.to[0], 'ops@example.com');
  } finally {
    if (saved === undefined) delete process.env.ADMIN_ALERT_EMAIL;
    else process.env.ADMIN_ALERT_EMAIL = saved;
    if (savedKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = savedKey;
  }
});
