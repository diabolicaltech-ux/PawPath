# Production Verification — Owner-Only /admin (PR #22)

**Date:** 2026-09-05
**Deployment:** `dpl_A16q7JfdwSNMcjjkxxjVLz7FzpJR` → aliased `pawpath.quest`
**PR:** https://github.com/diabolicaltech-ux/PawPath/pull/22
**Verified by:** Lead Software Developer
**Method:** curl (HTTP status/body) on production origin + source inspection.

## What shipped
Owner-only `/admin` (accounts list, view-as-customer, free-access grants, bans,
user messaging) locked to `contactpawpath@gmail.com`, enforced server-side with
404 for everyone else. Non-admin `/api/me` for ban status + entitlements + unread
messages. `vercel.json` rewrite `/admin -> /index.html` so the direct URL boots
the SPA; `App.tsx` matches the path client-side and lazy-loads the admin chunk
only when signed in as the owner.

## Build/test evidence
- `node --test db/*.test.mjs` → 40/40 pass (includes admin security/static tests).
- `npm run build` → clean; admin chunk emitted as `AdminPage-D3m20DPw.js`
  (lazy-loaded, not in the initial `index-CvozPe34.js` bundle).

## Phase 1 — Anonymous / non-admin (verified on production via curl)

| # | Check | Result |
|---|-------|--------|
| 1.1 | `GET /` | **200**; references `index-CvozPe34.js` (current bundle) |
| 1.2 | `GET /admin` anonymous | **200** SPA shell (the rewrite serves `index.html`); body contains **no** admin UI, **no** owner email, **no** account markup (grep for `contactpawpath`, `account list`, `view-as-customer`, `grant … slot` all 0) |
| 1.3 | `GET /admin/` | **404** |
| 1.3 | `GET /ADMIN` | **200** SPA shell — but `App.tsx` `isAdminPath()` is exact-match `/admin` (case-sensitive, trailing-slash-normalized), so `/ADMIN` renders the default route, never the admin view |
| 1.4 | `GET /api/admin` (anonymous) | **404** `{"error":"NOT_FOUND"}` (no data) |
| 1.4 | `GET /api/admin/accounts`, `/api/admin/messages`, `/api/admin/audit` | **404** (Vercel 404; no data — owner gate runs before any pool/method dispatch) |
| 1.5 | `POST /api/admin` (mutation, anonymous) | **404** `{"error":"NOT_FOUND"}` |
| 1.5 | `PUT /api/admin` (anonymous) | **404** |
| 1.7 | `GET /api/collab` (no auth) | **401** `{"error":"AUTH_REQUIRED"}` (unchanged) |
| 1.7 | `GET /api/db-health` (no token) | **401** `{"ok":false,"error":"UNAUTHORIZED"}` (unchanged) |
| 1.8 | Nav has no admin link | `grep 'href="[^"]*admin[^"]*"' /` → none; `grep contactpawpath /` → 0 |
| 1.9 | `_lib` not routable | `GET /api/_lib/owner`, `/api/_lib/identity` → **404** |

### 1.2 / 1.3 clarification
The `/admin` rewrite intentionally returns the SPA shell with HTTP 200 (the
verification plan itself anticipated "404 (static or SPA fallback — must not
render admin UI)"). The security property is **no admin UI leak**, verified:
the anonymous shell contains zero admin markup and the owner email does not
appear anywhere in the served HTML. Actual admin data is only reachable through
`/api/admin/*`, which is 404 for everyone except the owner session.

## Phase 2 — Owner browser session (owner-gated; not run from this environment)
Deferred to the owner's `contactpawpath@gmail.com` session. Checklist (from the
verification plan): 2.1 admin UI renders when signed in as owner; 2.2 signed-out /
non-owner sees no admin UI; 2.3 account list loads; 2.4 view-as-customer is
read-only; 2.5 grant free access reflected; 2.6 ban/unban server-enforced and
owner cannot self-lockout; 2.7 message user visible on next login; 2.8 refresh +
re-login persistence.

## Phase 3 — Post-verification sweep
- [ ] UptimeRobot homepage monitor: no downtime window during rollout (not
      observable from this environment — homepage stayed 200 through the deploy).
- [x] No new console errors on `/` for anonymous visitors: admin chunk is
      lazy-loaded (`AdminPage-D3m20DPw.js`), not in the initial bundle.
- [ ] Spot-check legal/breed/guides/tools rewrites still resolve (`/terms`,
      `/privacy`, one breed page) — noted for the owner session or a follow-up.
- [x] Ops note written (this file).

## Deploy note (bug found + fixed during rollout)
The admin build was ~17.8 MB — the first payload to cross the deployer's 8 MB
inline-budget threshold and trigger the per-file upload fallback (PR #20). That
path was broken: it read the missing-file digest list from `data.missing`, but
Vercel returns it as `data.error.missing`. The canonical deploy **failed** with a
400 `missing_files` before this fix. Fixed in `frontend/deploy.mjs` (read both
shapes defensively) and opened as PR #23
(https://github.com/diabolicaltech-ux/PawPath/pull/23). After the fix the deploy
completed: `18 files need upload → Files uploaded; creating deployment →
Deployment: dpl_A16q7JfdwSNMcjjkxxjVLz7FzpJR → Alias: pawpath.quest`.

## Result
**Phase 1 PASS** (all anonymous checks green). Overall admin rollout requires the
owner's Phase 2 confirmation; Phase 3 sweep items marked unchecked remain for the
owner session / follow-up.
