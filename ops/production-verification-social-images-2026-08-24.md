# Production Verification — Week-1 Social Images under `/social/`

**Date:** 2026-08-24
**Deployment:** `dpl_4WBXktqo1hAyWTM8pdBkYSYCFqij` (deployment URL `pawpath-j7th0mo9x-pawpath.vercel.app`), aliased to `pawpath.quest`.
**Source:** PR https://github.com/diabolicaltech-ux/PawPath/pull/19 (merged as commit `0f89bbd`).
**Verified by:** Web Reliability Lead
**Method:** curl (HTTP status + content-type + exact byte length) and real browser (Chromium via agent-browser) render of each URL.

## Purpose
Confirm the Week-1 social/post images added by PR #19 are served from the single production application `pawpath.quest` at the handoff-pack URLs `https://pawpath.quest/social/<file>.png`, returning correct PNG image content (not 404).

## Deploy note (large-asset path)
The canonical deployer (`frontend/deploy.mjs`) sends `dist/` as one base64 JSON body, which Vercel caps at ~10 MB. With the six 1.1–1.4 MB images, the inline body was ~17.7 MB and Vercel returned `Request body too large. Limit: 10mb`. Deploy was completed using the standard Vercel per-file upload flow instead: create deployment referencing SHA1 digests → collect `missing_files` → `POST /v2/files` with `x-now-digest`/`x-now-size` → re-create deployment. The 6 image files were uploaded this way; the remaining ~96 small files went inline. The final deployment and `pawpath.quest` alias promote follow the same steps as the canonical deployer.

## Verified URLs (all HTTP 200, `content-type: image/png`)

| URL | HTTP | Content-Type | Bytes (matches committed file) | Browser render |
|-----|------|--------------|-------------------------------|----------------|
| https://pawpath.quest/social/pawpath-profile-image.png | 200 | image/png | 1,412,674 | ✓ 1024×1024 |
| https://pawpath.quest/social/pawpath-social-week1-brand.png | 200 | image/png | 1,227,120 | ✓ 1024×1024 |
| https://pawpath.quest/social/pawpath-social-week1-nutrition.png | 200 | image/png | 1,143,076 | ✓ 1024×1024 |
| https://pawpath.quest/social/pawpath-social-week1-medical-history.png | 200 | image/png | 1,212,910 | ✓ 1024×1024 |
| https://pawpath.quest/social/pawpath-social-week1-milestones.png | 200 | image/png | 1,127,256 | ✓ 1024×1024 |
| https://pawpath.quest/social/pawpath-social-week1-mixed-breed.png | 200 | image/png | 1,193,907 | ✓ 1024×1024 |

## Result
PASS. All six Week-1 social image URLs return HTTP 200 with `image/png` and byte lengths identical to the files committed in PR #19, and each renders correctly in a real browser. The images are ready for the owner-led social launch. Images were intentionally **not** added to `sitemap.xml` or `robots.txt` (per lead instruction).
