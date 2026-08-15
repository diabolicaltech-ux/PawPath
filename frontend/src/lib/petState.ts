import type { PetProfile } from '../types/pet';

/**
 * Replace one pet in the app-level collection without changing other profiles.
 * A missing id is treated as a no-op so stale or malformed updates cannot add data.
 */
export function replacePetById(
  pets: PetProfile[],
  id: string | undefined,
  replacement: PetProfile,
): PetProfile[] {
  if (!id) return pets;
  return pets.map(pet => pet.id === id ? replacement : pet);
}

export function replacePetInCollection(
  pets: PetProfile[],
  updatedPet: PetProfile,
): PetProfile[] {
  return replacePetById(pets, updatedPet.id, updatedPet);
}

/**
 * Cloud store is authoritative. For matching ids the remote profile wins;
 * profiles that exist only locally (offline-created or legacy pre-cloud) are
 * preserved so they can be uploaded by syncUpLocalOnlyPets rather than dropped.
 */
export function mergeRemotePets(localPets: PetProfile[], remotePets: PetProfile[]): PetProfile[] {
  const remoteById = new Map(remotePets.filter(pet => pet.id).map(pet => [pet.id, pet]));
  const localIds = new Set(localPets.map(pet => pet.id).filter(Boolean));
  const merged: PetProfile[] = [
    // Local profile first, then upgraded to the remote version when ids match.
    ...localPets.map(pet => pet.id && remoteById.has(pet.id) ? remoteById.get(pet.id)! : pet),
    // Remote-only profiles are added (id matches are already represented above).
    ...remotePets.filter(pet => !pet.id || !localIds.has(pet.id)),
  ];
  // Deduplicate by id, keeping the last occurrence (remote version for shared ids).
  const seen = new Set<string>();
  const deduped: PetProfile[] = [];
  for (const pet of merged) {
    if (pet.id && seen.has(pet.id)) continue;
    if (pet.id) seen.add(pet.id);
    deduped.push(pet);
  }
  return deduped;
}

/** Keep the currently open dashboard selection aligned with a saved update. */
export function replaceSelectedPet(
  selectedPet: PetProfile | null,
  updatedPet: PetProfile,
): PetProfile | null {
  if (!selectedPet || !updatedPet.id || selectedPet.id !== updatedPet.id) {
    return selectedPet;
  }
  return updatedPet;
}
