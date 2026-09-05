export const ALL_ACCESS_STORAGE_KEY = 'pawpath_all_access';
export const PREMIUM_STORAGE_KEY = 'pawpath_premium';
export const EXTRA_PETS_STORAGE_KEY = 'pawpath_extra_pet_slots';
// Server-side (admin/Stripe) entitlement overlay. Kept in a separate key so a
// re-fetch of /api/me overwrites it idempotently without double-counting local
// unlock-code slots.
export const SERVER_EXTRA_PETS_STORAGE_KEY = 'pawpath_server_extra_pet_slots';
export const SERVER_PREMIUM_STORAGE_KEY = 'pawpath_server_premium';
export const FREE_PET_LIMIT = 1;
export const PREMIUM_PET_LIMIT = 3;
export const PREMIUM_UNLOCK_CODE = 'PP-7K9Q4X';
export const PET_SLOT_UNLOCK_CODE = 'PP-2M6N8V';
let account = '';
export const setAccount = (sub: string | null) => { account = sub ? `_${encodeURIComponent(sub)}` : ''; };
const key = (k: string) => `${k}${account}`;
export const hasAllAccess = () => { try { return localStorage.getItem(key(ALL_ACCESS_STORAGE_KEY)) === '1'; } catch { return false; } };
export const isPremium = () => {
  if (hasAllAccess()) return true;
  try {
    return localStorage.getItem(key(PREMIUM_STORAGE_KEY)) === '1' || localStorage.getItem(key(SERVER_PREMIUM_STORAGE_KEY)) === '1';
  } catch { return false; }
};
const localExtra = () => { try { const n = Number.parseInt(localStorage.getItem(key(EXTRA_PETS_STORAGE_KEY)) || '0', 10); return Number.isFinite(n) ? Math.max(0, n) : 0; } catch { return 0; } };
const serverExtra = () => { try { const n = Number.parseInt(localStorage.getItem(key(SERVER_EXTRA_PETS_STORAGE_KEY)) || '0', 10); return Number.isFinite(n) ? Math.max(0, n) : 0; } catch { return 0; } };
export const getPetLimit = () => {
  if (hasAllAccess()) return Infinity;
  try { return (isPremium() ? PREMIUM_PET_LIMIT : FREE_PET_LIMIT) + localExtra() + serverExtra(); } catch { return FREE_PET_LIMIT; }
};
export const grantPremium = (c: string | null) => { if (c !== PREMIUM_UNLOCK_CODE) return false; try { localStorage.setItem(key(PREMIUM_STORAGE_KEY), '1'); } catch {} return true; };
export const grantPetSlot = (c: string | null) => {
  if (c !== PET_SLOT_UNLOCK_CODE) return false;
  try { localStorage.setItem(key(EXTRA_PETS_STORAGE_KEY), String(localExtra() + 1)); } catch {}
  return true;
};
/**
 * Overlay the authoritative server-side entitlements returned by /api/me onto
 * the local access state. Admin grants (and Stripe-backed grants recorded in
 * entitlement_grants) must raise the pet limit without a Stripe checkout or an
 * unlock code. Idempotent: each call overwrites the server overlay keys.
 */
export const applyServerEntitlements = (slotGrants: number, premiumGrants: number) => {
  try {
    localStorage.setItem(key(SERVER_EXTRA_PETS_STORAGE_KEY), String(Math.max(0, Math.floor(slotGrants || 0))));
    localStorage.setItem(key(SERVER_PREMIUM_STORAGE_KEY), premiumGrants > 0 ? '1' : '0');
  } catch { /* storage unavailable — server still enforces on the backend */ }
};
