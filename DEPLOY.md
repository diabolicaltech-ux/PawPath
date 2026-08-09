
## Stripe auto-verification
The deployment includes `frontend/api/verify.js`, exposed at `/api/verify`. Set the Vercel production secret `STRIPE_SECRET_KEY` to the owner's Stripe secret key before enabling buyer auto-unlock. Optional public link overrides are `VITE_STRIPE_PREMIUM_URL` and `VITE_STRIPE_SLOT_URL`; defaults remain the current links until owner-managed links are available. Verify with a paid Checkout Session: `/api/verify?session_id=...` should return `{ "ok": true, "product": "premium"|"slot" }`. Missing key or unpaid/invalid sessions return `{ "ok": false }`.
