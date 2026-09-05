// The single owner account allowed to use the admin surface. The value may be
// overridden server-side via OWNER_EMAIL; the fallback is the owner's Google
// address. This module lives under `_lib/` so it is NOT routed as a function,
// and it is imported only by server handlers — the address must never be
// bundled into the client. The authoritative gate is `isOwnerEmail`, which
// compares a server-derived (session/Google) email to this exact address.
export const OWNER_EMAIL = (process.env.OWNER_EMAIL || 'contactpawpath@gmail.com').toLowerCase();

export const isOwnerEmail = (email: string): boolean => email.toLowerCase() === OWNER_EMAIL;
