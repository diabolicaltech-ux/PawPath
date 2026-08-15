# Shared co-parent foundation
Set `DATABASE_URL` to a Neon/Postgres connection string and apply `001_coparent.sql`. `/api/collab` verifies a Google ID token against Google's tokeninfo endpoint, derives the Google `sub` server-side, and never accepts a client-supplied subject. GET lists authorized memberships; POST creates an owner pet and audit event; PUT/DELETE mutate only rows joined to the caller's account. Invitation endpoints/UI are intentionally deferred.

## Cloud-backed profile storage (account-scoped)
PawPath profiles are stored in the cloud (Postgres via `/api/collab`) and scoped to the verified Google account:
- **Identity is server-derived.** The collab handler calls Google's `tokeninfo` with the bearer ID token, verifies `aud` against `GOOGLE_CLIENT_ID`, and uses the returned `sub` to resolve the account row. A client-supplied subject is never accepted.
- **Authorization is enforced in SQL.** Every read/write is filtered through `pet_memberships` joined on the caller's `account_id`; DELETE/PUT return 404 for pets the account does not own.
- **Stable client ids.** POST preserves a well-formed client-supplied UUID as the pet id (`ON CONFLICT (id) DO UPDATE` makes retries idempotent; membership insert uses `ON CONFLICT DO NOTHING`). This prevents duplicate pets across sync/merge/re-login. Malformed/absent ids fall back to a server-generated UUID.
- **Local storage is a cache, not the source of truth.** The app loads the cloud list on sign-in, merges with the account-scoped local cache (cloud wins on id match), and uploads local-only profiles (`syncUpLocalOnlyPets`). Sync failures are surfaced in the UI and never silently discard a profile saved on the device.

## Auth integration
The web flow is Google authorization-code OAuth:
- `GET /api/auth/login` → redirects to Google with `openid email profile offline_access` (offline access issues a refresh token).
- `GET /api/auth/callback` → exchanges the code, stores `{ sub, name, email, picture, idToken, refreshToken }` in `localStorage['pawpath_user']`, and reloads `/`. The callback keeps the Google client secret server-side.
- `POST /api/auth/refresh` → exchanges the stored refresh token for a fresh ID token (secret stays on the server). The client calls this automatically when the ID token expires (~1h), so cloud sync keeps working across sessions.
- `/api/collab` authenticates with `Authorization: Bearer <idToken>` and never treats `localStorage.pawpath_user.sub` as proof of identity on its own.

## Required secrets (Vercel project `pawpath`, production target)
- `DATABASE_URL` — Neon/Postgres connection string (schema from `001_coparent.sql` applied).
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` — Google OAuth client for the PawPath domain (redirect URI `https://pawpath.quest/api/auth/callback`).
- `GOOGLE_REDIRECT_URI` — optional override; defaults to the callback URL above.
- `DB_HEALTH_TOKEN` — token for `GET /api/db-health`.
- `VERCEL_TOKEN` — deployment token (CI only; not a runtime secret).
- `STRIPE_SECRET_KEY` — used by `/api/verify` for the paid-slot flow.
