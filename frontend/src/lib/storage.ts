import { getCurrentUser } from "./auth";
import type { PetProfile } from '../types/pet';

const STORAGE_KEY = 'pawpath_pets';
// Account data is strictly namespaced. Never copy the unscoped legacy key into a signed-in account; that can expose one user's pets to another.
const accountKey=(key:string)=>{const sub=getCurrentUser()?.sub;if(!sub)return key;return `${key}_${encodeURIComponent(sub)}`;};
const UNSUPPORTED_KEY = 'pawpath_unsupported_profiles';
const LEGACY_KEY = STORAGE_KEY;
const quarantineKey = (sub: string) => `${STORAGE_KEY}_quarantine_${encodeURIComponent(sub)}`;

/** Explicit recovery only: preserves the unscoped legacy payload in an account quarantine.
 * It never imports, overwrites, or deletes pet records. */
export function quarantineLegacyPets(sub: string): PetProfile[] {
  if (!sub) return [];
  try {
    const raw = localStorage.getItem(LEGACY_KEY);
    if (!raw || localStorage.getItem(quarantineKey(sub))) return [];
    const parsed = JSON.parse(raw);
    const pets = Array.isArray(parsed) ? parsed.filter((p: any) => p && typeof p.name === 'string') : [];
    if (pets.length) localStorage.setItem(quarantineKey(sub), JSON.stringify(pets));
    return pets;
  } catch { return []; }
}

export function loadQuarantinedLegacyPets(sub: string): PetProfile[] {
  if (!sub) return [];
  try { const parsed = JSON.parse(localStorage.getItem(quarantineKey(sub)) || '[]'); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}
export function loadUnsupportedProfiles(sub?: string): Array<{ name: string; species: string; profile: unknown }> {
  const key = sub ? `${UNSUPPORTED_KEY}_${encodeURIComponent(sub)}` : '';
  if (!key) return [];
  try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch { return []; }
}
export function archiveUnsupported(profiles: any[], sub: string): void {
  if (!profiles.length) return;
  if (!sub) return;
  const existing = loadUnsupportedProfiles(sub);
  localStorage.setItem(`${UNSUPPORTED_KEY}_${encodeURIComponent(sub)}`, JSON.stringify([...existing, ...profiles.map(profile => ({ name: profile.name, species: String(profile.species), profile }))]));
}

export function loadPets(): PetProfile[] {
  try {
    const raw = localStorage.getItem(accountKey(STORAGE_KEY));
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const valid = parsed.filter((p: any) => p && typeof p.name === 'string');
    return valid;
  } catch {
    // Corrupted data — reset
    localStorage.removeItem(accountKey(STORAGE_KEY));
    return [];
  }
}

export function savePets(pets: PetProfile[]): void {
  try {
    localStorage.setItem(accountKey(STORAGE_KEY), JSON.stringify(pets));
  } catch {
    // localStorage full or other error — silently fail
    console.error('Failed to save pets to localStorage');
  }
}

export function addPet(pet: PetProfile): PetProfile[] {
  const pets = loadPets();
  const withId = { ...pet, id: crypto.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2) };
  pets.push(withId);
  savePets(pets);
  return pets;
}

export function updatePet(id: string, data: PetProfile): PetProfile[] {
  const pets = loadPets();
  const idx = pets.findIndex(p => (p as any).id === id);
  if (idx >= 0) {
    pets[idx] = { ...data, id };
    savePets(pets);
  }
  return pets;
}

export function deletePet(id: string): PetProfile[] {
  const pets = loadPets().filter(p => (p as any).id !== id);
  savePets(pets);
  return pets;
}