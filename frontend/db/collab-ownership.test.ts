import test from 'node:test';
import assert from 'node:assert/strict';
import { signSessionToken } from '../api/_lib/session.ts';

// Behavioral cross-account test for the POST /api/collab ownership rule
// (beta-readiness audit 2, finding F1).
//
// Why this is written the way it is: the F1 defect was a property of what a SQL
// statement does (`INSERT ... ON CONFLICT (id) DO UPDATE` with no ownership
// predicate), so a source-text assertion alone cannot prove the fix — it can
// only prove the predicate is written down. This test instead drives the REAL
// handler (real session-cookie auth, real SQL strings, real control flow)
// against a REAL PostgreSQL engine running in-process via PGlite, in two
// account contexts, and asserts on the stored rows.
//
// Dependencies: `pg` (a frontend dependency, imported by the handler) and
// `@electric-sql/pglite` (root devDependency). Both are needed to import the
// handler and the engine, so this test skips loudly rather than failing when
// they are absent; `db/collab.test.mjs` carries the dependency-free regression
// guard for the same rule.

const SESSION_SECRET = 'test-session-secret-for-collab-ownership';
process.env.SESSION_SECRET = SESSION_SECRET;
// Keep the owner gate deterministic: neither test account is the owner.
process.env.OWNER_EMAIL = 'owner@example.com';

const PET_A = 'aaaaaaaa-bbbb-4ccc-8ddd-eeeeeeeeeeee';
const PET_B = 'bbbbbbbb-cccc-4ddd-8eee-ffffffffffff';

type Res = { status?: number; body?: any; ended?: boolean };

function makeRes() {
  const out: Res = {};
  const res: any = {
    status(code: number) {
      out.status = code;
      return res;
    },
    json(body: unknown) {
      out.body = body;
      return res;
    },
    end() {
      out.ended = true;
      return res;
    },
  };
  return { res, out };
}

function reqOf(token: string, method: string, extra: Record<string, unknown> = {}) {
  return {
    method,
    query: {},
    body: {},
    ...extra,
    headers: { cookie: `pawpath_session=${token}`, 'user-agent': 'collab-ownership-test' },
  } as never;
}

function tokenFor(sub: string, email: string, name: string) {
  return signSessionToken({ sub, email, name }, SESSION_SECRET);
}

/**
 * PGlite (PostgreSQL 16 compiled to WASM) exposes the same query surface the
 * handler uses, so a thin adapter is all that is needed to run the production
 * code against a real engine. The one concession: PGlite does not bundle the
 * pgcrypto extension, so `ensureSchema`'s idempotent `CREATE EXTENSION` line is
 * a no-op here — `gen_random_uuid()` is core in PostgreSQL 13+, so the schema's
 * uuid defaults still behave exactly as they do in production.
 */
function pgliteAdapter(pglite: any) {
  const client = {
    async query(sql: string, params?: unknown[]) {
      if (/CREATE EXTENSION IF NOT EXISTS pgcrypto/i.test(sql)) return { rows: [], rowCount: 0 };
      if (!params || params.length === 0) {
        await pglite.exec(sql);
        return { rows: [], rowCount: 0 };
      }
      const result = await pglite.query(sql, params);
      const rows = result.rows ?? [];
      return {
        rows,
        rowCount: typeof result.affectedRows === 'number' ? result.affectedRows : rows.length,
      };
    },
    release() {},
  };
  return { connect: async () => client };
}

let shared: { pglite: any; db: any } | null = null;
let loadFailure = '';

async function loadEnv() {
  if (shared) return shared;
  let handleCollab: any;
  let PGlite: any;
  try {
    ({ handleCollab } = await import('../api/collab.ts'));
  } catch (e) {
    loadFailure = `could not import the collab handler (is the frontend's deps installed?): ${e instanceof Error ? e.message : String(e)}`;
    return null;
  }
  try {
    ({ PGlite } = await import('@electric-sql/pglite'));
  } catch (e) {
    loadFailure = `could not import @electric-sql/pglite (root devDependency): ${e instanceof Error ? e.message : String(e)}`;
    return null;
  }
  const pglite = new PGlite();
  shared = { pglite, db: { adapter: pgliteAdapter(pglite), handleCollab } };
  return shared;
}

test('POST /api/collab cannot overwrite or join another account\'s pet', async (t) => {
  const env = await loadEnv();
  if (!env) {
    t.skip(loadFailure);
    return;
  }
  const { pglite } = env;
  const { adapter, handleCollab } = env.db as { adapter: any; handleCollab: any };
  const alice = tokenFor('google-sub-alice', 'alice@example.com', 'Alice');
  const bob = tokenFor('google-sub-bob', 'bob@example.com', 'Bob');

  // Alice creates her dog, supplying its id the way the client does.
  const created = makeRes();
  await handleCollab(
    reqOf(alice, 'POST', { body: { id: PET_A, name: 'Rex', payload: { notes: 'alice private history' } } }),
    created.res,
    adapter,
  );
  assert.equal(created.out.status, 201, 'the owner can create their own pet');

  // Bob names ALICE's pet id with his own payload — the F1 attack.
  const attack = makeRes();
  await handleCollab(
    reqOf(bob, 'POST', { body: { id: PET_A, name: 'OwnedByBob', payload: { notes: 'bob was here' } } }),
    attack.res,
    adapter,
  );

  // Refused, silently (no 403 confirming the id exists elsewhere).
  assert.equal(attack.out.status, 404, 'a foreign pet id is refused');
  assert.equal(attack.out.body?.error, 'PET_NOT_FOUND');

  // Alice's record is untouched — the whole point of the fix.
  const petRow = (await pglite.query('SELECT name, payload, owner_account_id FROM pets WHERE id = $1', [PET_A]))
    .rows[0];
  assert.equal(petRow.name, 'Rex', "Alice's pet name is unchanged");
  assert.equal(petRow.payload.notes, 'alice private history', "Alice's payload is unchanged");

  // Bob gained no membership on Alice's pet...
  const bobMember = (
    await pglite.query(
      `SELECT 1 FROM pet_memberships m JOIN accounts a ON a.id = m.account_id
       WHERE m.pet_id = $1 AND a.google_sub = $2`,
      [PET_A, 'google-sub-bob'],
    )
  ).rows;
  assert.equal(bobMember.length, 0, 'the attacker gains no membership');

  // ...and cannot read it through the normal listing path.
  const bobList = makeRes();
  await handleCollab(reqOf(bob, 'GET'), bobList.res, adapter);
  assert.equal(bobList.out.status, 200);
  assert.deepEqual(bobList.out.body.pets, [], "the attacker's pet list stays empty");

  // No audit row was written for a refused create.
  const audited = (
    await pglite.query(`SELECT 1 FROM audit_events WHERE pet_id = $1 AND action = 'pet.created'`, [PET_A])
  ).rows;
  assert.equal(audited.length, 1, 'only the legitimate create was audited');
});

test('the legitimate same-account re-save and a second account\'s own pet still work', async (t) => {
  const env = await loadEnv();
  if (!env) {
    t.skip(loadFailure);
    return;
  }
  const { pglite } = env;
  const { adapter, handleCollab } = env.db as { adapter: any; handleCollab: any };
  const alice = tokenFor('google-sub-alice', 'alice@example.com', 'Alice');
  const bob = tokenFor('google-sub-bob', 'bob@example.com', 'Bob');

  // The owner re-posting their own pet id (the sync/merge/re-login path) must
  // keep working — the fix must not break it.
  const resave = makeRes();
  await handleCollab(
    reqOf(alice, 'POST', { body: { id: PET_A, name: 'Rex II', payload: { notes: 'updated by alice' } } }),
    resave.res,
    adapter,
  );
  assert.equal(resave.out.status, 201, 'the owner can still re-save their own pet');
  const resaved = (await pglite.query('SELECT name, payload FROM pets WHERE id = $1', [PET_A])).rows[0];
  assert.equal(resaved.name, 'Rex II');
  assert.equal(resaved.payload.notes, 'updated by alice');

  // A second account keeps full function on its OWN pet, including a
  // client-supplied id (the same code path, different owner).
  const bobOwn = makeRes();
  await handleCollab(
    reqOf(bob, 'POST', { body: { id: PET_B, name: 'Bo', payload: { notes: 'bob private history' } } }),
    bobOwn.res,
    adapter,
  );
  assert.equal(bobOwn.out.status, 201, "a second account can create and own its own pet");

  const bobList = makeRes();
  await handleCollab(reqOf(bob, 'GET'), bobList.res, adapter);
  assert.equal(bobList.out.body.pets.length, 1, 'the second account sees exactly its own pet');
  assert.equal(bobList.out.body.pets[0].name, 'Bo');

  const aliceList = makeRes();
  await handleCollab(reqOf(alice, 'GET'), aliceList.res, adapter);
  assert.deepEqual(
    aliceList.out.body.pets.map((p: any) => p.name),
    ['Rex II'],
    "the first account's listing is unaffected by the second account",
  );
});

test('the scoped PUT and DELETE paths still refuse a foreign pet id', async (t) => {
  const env = await loadEnv();
  if (!env) {
    t.skip(loadFailure);
    return;
  }
  const { adapter, handleCollab } = env.db as { adapter: any; handleCollab: any };
  const bob = tokenFor('google-sub-bob', 'bob@example.com', 'Bob');

  const put = makeRes();
  await handleCollab(reqOf(bob, 'PUT', { body: { id: PET_A, name: 'Hijacked', payload: {} } }), put.res, adapter);
  assert.equal(put.out.status, 404, 'PUT on a foreign pet is refused');

  const del = makeRes();
  await handleCollab(reqOf(bob, 'DELETE', { query: { id: PET_A } }), del.res, adapter);
  assert.equal(del.out.status, 404, 'DELETE on a foreign pet is refused');
});
