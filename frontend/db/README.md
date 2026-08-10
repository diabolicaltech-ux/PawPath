# Shared co-parent foundation
Set `DATABASE_URL` to a Neon/Postgres connection string and apply `001_coparent.sql`. `/api/collab` verifies a Google ID token against Google's tokeninfo endpoint, derives the Google `sub` server-side, and never accepts a client-supplied subject. GET lists authorized memberships; POST creates an owner pet and audit event. Invitation endpoints/UI are intentionally deferred.

## Auth integration note
The current web callback stores a profile in localStorage and does not retain a Google ID token. `/api/collab` intentionally requires an ID token in `Authorization: Bearer` and therefore is not wired into the current UI. A later auth integration must establish a secure server session or token exchange; never treat `localStorage.pawpath_user.sub` as proof of identity.
