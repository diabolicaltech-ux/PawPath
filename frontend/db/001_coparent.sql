CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE IF NOT EXISTS accounts (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), google_sub text NOT NULL UNIQUE, email text NOT NULL, display_name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS pets (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), owner_account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, name text NOT NULL, payload jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
DO $$ BEGIN CREATE TYPE pet_member_role AS ENUM ('owner','editor','viewer'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
CREATE TABLE IF NOT EXISTS pet_memberships (pet_id uuid NOT NULL REFERENCES pets(id) ON DELETE CASCADE, account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, role pet_member_role NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), PRIMARY KEY (pet_id, account_id));
CREATE TABLE IF NOT EXISTS invitations (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), pet_id uuid NOT NULL REFERENCES pets(id) ON DELETE CASCADE, invited_email text NOT NULL, role pet_member_role NOT NULL DEFAULT 'viewer', token_hash text NOT NULL UNIQUE, invited_by uuid NOT NULL REFERENCES accounts(id), expires_at timestamptz NOT NULL, accepted_at timestamptz, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE IF NOT EXISTS audit_events (id bigserial PRIMARY KEY, actor_account_id uuid REFERENCES accounts(id), pet_id uuid REFERENCES pets(id) ON DELETE SET NULL, action text NOT NULL, metadata jsonb NOT NULL DEFAULT '{}', created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS pet_memberships_account_idx ON pet_memberships(account_id);
CREATE INDEX IF NOT EXISTS invitations_expiry_idx ON invitations(expires_at) WHERE accepted_at IS NULL;
-- Admin support (owner-only /admin surface): ban state on accounts, the
-- entitlement grants ledger, and owner -> user messages. Idempotent so a
-- legacy or fresh database gains them without a manual migration.
ALTER TABLE accounts ADD COLUMN IF NOT EXISTS banned_at timestamptz;
ALTER TABLE accounts ADD COLUMN IF NOT EXISTS banned_reason text;
CREATE TABLE IF NOT EXISTS entitlement_grants (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, kind text NOT NULL, reason text, granted_by_account_id uuid REFERENCES accounts(id), created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS entitlement_grants_account_idx ON entitlement_grants(account_id);
CREATE TABLE IF NOT EXISTS admin_messages (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), account_id uuid NOT NULL REFERENCES accounts(id) ON DELETE CASCADE, subject text NOT NULL, body text NOT NULL, read_at timestamptz, created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX IF NOT EXISTS admin_messages_account_idx ON admin_messages(account_id);
