import type { PoolClient } from 'pg';

// Idempotent DDL mirroring `frontend/db/001_coparent.sql`. Running this on first
// use makes the cloud store self-provisioning: a fresh Neon database works
// without a manual migration step, and an already-migrated database is left
// untouched (every statement is guarded with IF NOT EXISTS / a duplicate-object
// catch).
const DDL = [
  `CREATE EXTENSION IF NOT EXISTS pgcrypto`,
  `CREATE TABLE IF NOT EXISTS accounts (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), google_sub text NOT NULL UNIQUE, email text NOT NULL, display_name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now())`,
  `CREATE TABLE IF NOT EXISTS pets (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), owner_account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, name text NOT NULL, payload jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`,
  `DO $$ BEGIN CREATE TYPE pet_member_role AS ENUM ('owner','editor','viewer'); EXCEPTION WHEN duplicate_object THEN NULL; END $$`,
  `CREATE TABLE IF NOT EXISTS pet_memberships (pet_id uuid NOT NULL REFERENCES pets(id) ON DELETE CASCADE, account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, role pet_member_role NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (pet_id, account_id))`,
  `CREATE TABLE IF NOT EXISTS audit_events (id bigserial PRIMARY KEY, actor_account_id uuid REFERENCES accounts(id), pet_id uuid REFERENCES pets(id) ON DELETE SET NULL, action text NOT NULL, metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now())`,
  `CREATE INDEX IF NOT EXISTS pet_memberships_account_idx ON pet_memberships(account_id)`,
];

let ready = false;

/**
 * Applies the idempotent schema once per warm function instance. In serverless
 * the module may be re-instantiated per cold start, so this is best-effort and
 * cheap (IF NOT EXISTS short-circuits on every subsequent call).
 */
export async function ensureSchema(client: PoolClient): Promise<void> {
  if (ready) return;
  for (const statement of DDL) await client.query(statement);
  ready = true;
}
