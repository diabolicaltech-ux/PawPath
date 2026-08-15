import type { PetProfile } from '../types/pet';
import { getCurrentUser, saveUser } from './auth';
type RemotePet = { id: string; name: string; payload?: PetProfile };

/** True when the Google ID token is missing, expired, or expiring within 2 minutes. */
function idTokenExpired(idToken: string | undefined): boolean {
  if (!idToken) return true;
  try {
    const payload = idToken.split('.')[1];
    if (!payload) return true;
    const claims = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    const exp = Number(claims.exp);
    if (!Number.isFinite(exp)) return true;
    return exp * 1000 <= Date.now() + 2 * 60 * 1000;
  } catch { return true; }
}

let refreshInFlight: Promise<string | null> | null = null;
/**
 * Renews the Google ID token via our own /api/auth/refresh endpoint when it is
 * expired. The refresh token never leaves first-party origin; the client secret
 * stays on the server. Returns the fresh ID token (or null when renewal failed).
 */
export async function ensureFreshIdToken(): Promise<string | null> {
  const user = getCurrentUser();
  if (!user) return null;
  if (!idTokenExpired(user.idToken)) return user.idToken ?? null;
  if (!user.refreshToken) return null;
  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      try {
        const r = await fetch('/api/auth/refresh', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refresh_token: user.refreshToken }),
        });
        if (!r.ok) return null;
        const body = await r.json() as { idToken?: string };
        if (!body.idToken) return null;
        saveUser({ ...user, idToken: body.idToken });
        return body.idToken;
      } catch { return null; }
    })().finally(() => { refreshInFlight = null; });
  }
  return refreshInFlight;
}

const request = async (init: RequestInit = {}) => {
  const user = getCurrentUser();
  if (!user?.sub) throw new Error('REMOTE_AUTH_UNAVAILABLE');
  const idToken = await ensureFreshIdToken();
  if (!idToken) throw new Error('REMOTE_AUTH_UNAVAILABLE');
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${idToken}`);
  if (init.body) headers.set('Content-Type', 'application/json');
  const response = await fetch('/api/collab', { ...init, headers });
  if (!response.ok) throw new Error(`REMOTE_${response.status}`);
  return response;
};
const fromRemote = (p: RemotePet): PetProfile => ({ ...(p.payload || {}), id: p.id, name: p.name });
export async function loadRemotePets(): Promise<PetProfile[]> {
  const body = await (await request()).json() as { pets?: RemotePet[] };
  return Array.isArray(body.pets) ? body.pets.map(fromRemote) : [];
}
export async function createRemotePet(pet: PetProfile): Promise<PetProfile> {
  const body = await (await request({ method: 'POST', body: JSON.stringify({ id: pet.id, name: pet.name, payload: pet }) })).json() as { pet: RemotePet };
  return fromRemote(body.pet);
}
export async function updateRemotePet(pet: PetProfile): Promise<PetProfile> {
  const body = await (await request({ method: 'PUT', body: JSON.stringify({ id: pet.id, name: pet.name, payload: pet }) })).json() as { pet: RemotePet };
  return fromRemote(body.pet);
}
export async function deleteRemotePet(id: string): Promise<void> {
  await request({ method: 'DELETE', headers: { 'x-pet-id': id } });
}

/**
 * Uploads profiles that exist only in the local cache (e.g. created while
 * offline, or legacy pre-cloud profiles) so the cloud becomes the durable store.
 * Returns the remote pets that were created; the caller merges them by id.
 * Idempotent: the server preserves the client-supplied UUID, so a retry after a
 * network failure cannot create a duplicate pet.
 */
export async function syncUpLocalOnlyPets(localPets: PetProfile[]): Promise<PetProfile[]> {
  if (!localPets.length) return [];
  const remote = await loadRemotePets();
  const remoteIds = new Set(remote.map(p => p.id).filter(Boolean));
  const created: PetProfile[] = [];
  for (const pet of localPets) {
    if (!pet.id || remoteIds.has(pet.id)) continue;
    try {
      const synced = await createRemotePet(pet);
      remoteIds.add(synced.id);
      created.push(synced);
    } catch { /* keep going; a later sync retries */ }
  }
  return created;
}
