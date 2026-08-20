# PawPath production verification — Google Search Console meta tag — 2026-08-20

Feature: PR #15 "Add Google Search Console site-verification meta tag" (commit `643d6dc` on `migrate-pawpath-from-dbt`).

## Change
Added to `frontend/index.html` `<head>`:
```html
<meta name="google-site-verification" content="vO0sqtSLRtec-OWkA--mWZva3LRP5QdR62VimvGQRo8" />
```
Owner selected the META TAG ownership-verification method for `pawpath.quest` (not DNS TXT).

## Build/test evidence (pre-deploy)
- `npm run build` (tsc --noEmit && vite build) passes; built `dist/index.html` contains the tag.
- `node --test frontend/deploy.test.mjs` passes 5/5.

## Deploy
- Canonical deployer: `node frontend/deploy.mjs` (`VERCEL_TOKEN` from environment).
- Deployment: `dpl_xPDeUREpzVySG6C2NX2yBSkrN1rz` (`pawpath-815rkaq1v-pawpath.vercel.app`).
- Alias promoted: `pawpath.quest`.

## Live verification
`https://pawpath.quest/` returns:
- HTTP **200** (curl, ~0.33s)
- `<meta name="google-site-verification" content="vO0sqtSLRtec-OWkA--mWZva3LRP5QdR62VimvGQRo8" />` present in served home page `<head>`.

Real-browser (agent-browser → Chromium) confirmation on `https://pawpath.quest/`:
- `document.querySelector('meta[name="google-site-verification"]').content` → `"vO0sqtSLRtec-OWkA--mWZva3LRP5QdR62VimvGQRo8"`
- outerHTML → `<meta name="google-site-verification" content="vO0sqtSLRtec-OWkA--mWZva3LRP5QdR62VimvGQRo8">`
- Screenshot: `gsc-verify-home.png` (page renders; title "PawPath — Lifelong Health Tracking for Dogs").

## Owner action
The tag is live at `https://pawpath.quest/`. The owner may now click **Verify** in Google Search Console for the `pawpath.quest` property. Clicking either the "google-site-verification" meta tag or the register-domain route will validate.
