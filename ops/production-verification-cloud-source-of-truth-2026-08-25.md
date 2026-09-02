# Production Verification — Cloud as Source of Truth (session-auth fix)

**Date:** 2026-08-25
**Deployment:** `dpl_DAwzBRES2Jd282eNXb1YpYoQis9Q` → aliased `pawpath.quest`
**PR:** https://github.com/diabolicaltech-ux/PawPath/pull/21
**Verified by:** Lead Software Developer
**Method:** curl (HTTP status/body) on production origin.

## Root cause
Google rejects `offline_access` for the PawPath OAuth client (verified live: `invalid=[offline_access]` in the Google error redirect). No `offline_access` ⇒ no refresh token ⇒ the Google ID token expires after ~1 h. After expiry `/api/collab` auth failed, and the client silently fell back to localStorage-only — matching the owner's "profiles still local-only" report.

## Fix (PR #21)
- `api/auth/callback.ts` — after Google login, sign a first-party HS256 session token (`SESSION_SECRET`) and set it as an HttpOnly `pawpath_session` cookie (30-day).
- `api/collab.ts` — authenticate via the session cookie first (fallback to Google `tokeninfo`); self-provision the Postgres schema via `api/_lib/schema.ts`.
- `api/_lib/session.ts` + `api/_lib/schema.ts` — shared sign/verify + idempotent DDL (directory is `_`-prefixed so Vercel does not route them as functions).
- `src/lib/cloudSync.ts` — after ID-token expiry (no refresh token), still send the request so the session cookie can authenticate.
- `SESSION_SECRET` set (encrypted) in Vercel for production/preview/development.
- `@vercel/node` added to dependencies + `_lib` imports use `.js` extensions (Vercel's function builder typechecks `api/*.ts` with `moduleResolution: nodenext`).

## Build/test evidence
- `node --test db/*.test.mjs` → 26/26 pass (includes session roundtrip/tamper/expiry).
- `npm run build` (tsc --noEmit + vite build) → clean; bundle `index-C-qKcFdS.js`.

## Deploy note (large-asset path)
`frontend/deploy.mjs` inlines all files as one base64 JSON body, which Vercel caps at ~10 MB (dist now ~13 MB due to the Week-1 social images). `frontend/deploy-large.mjs` was added and used: per-file digest upload via `POST /v2/files` (`x-now-digest`/`x-now-size`) → create deployment referencing SHA1 digests. This is the same path the Web Reliability Lead used for the social-image deployment.

## Verified on production (curl)
| Check | Result |
|-------|--------|
| `https://pawpath.quest/` | HTTP 200; `index.html` references `index-C-qKcFdS.js` (new bundle) |
| `GET /api/collab` (no auth) | HTTP 401 `{"error":"AUTH_REQUIRED"}` — function invokes cleanly, reaches auth gate (not a build/runtime crash) |
| `GET /api/auth/callback` (no code) | HTTP 400 `Missing Google authorization code.` |
| `GET /api/auth/login` | HTTP 307 redirect to Google OAuth |
| `GET /api/_lib/session`, `/api/_lib/schema` | HTTP 404 — `_lib` is not routed as a function |

## Not verifiable from this environment (owner-gated)
- Authenticated Google onboarding → save → refresh → re-login persistence (requires the owner's Google session).
- Cross-account isolation with a second Google account.
- Authenticated `/api/db-health` (`DB_HEALTH_TOKEN` not present here).

## Result
PASS (as far as determinable without an owner Google session). The cloud source-of-truth path is deployed and the serverless functions build and invoke cleanly; the remaining end-to-end checks require the owner's Google login.
