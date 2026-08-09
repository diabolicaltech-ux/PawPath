# Hosting options

PawPath is a client-side Vite/React app, so it is not tied to GitHub or to a server-side runtime. The production deployment currently uses Vercel's static deployment API, but the built `frontend/dist` directory can be hosted on any static host with SPA fallback enabled.

Supported alternatives include:

- **Netlify** — publish `frontend/dist`; configure a rewrite from `/*` to `/index.html`.
- **Cloudflare Pages** — upload the same directory or connect another Git provider; configure SPA fallback.
- **AWS S3 + CloudFront** — serve the static files and configure the error document to `index.html` for client-side routes.
- **Firebase Hosting** — deploy `frontend/dist` with a rewrite to `/index.html`.
- **Any conventional web server** — Nginx, Apache, or an object-storage CDN can serve the build, provided unknown application routes fall back to `index.html`.

The app stores profiles and promo grants locally in the browser. Hosting migration does not require a database or authentication service. The only host-specific requirement is the existing build/deploy step (`npm ci && npm run build`) and SPA fallback configuration. Stripe remains an external checkout link and does not depend on the hosting provider.
