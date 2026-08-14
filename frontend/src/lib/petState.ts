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
 * Remote sync is supplemental. Preserve local-only profiles when the remote
 * service is empty, unavailable, or has not received an offline change yet.
 */
export function mergeRemotePets(localPets: PetProfile[], remotePets: PetProfile[]): PetProfile[] {
  const remoteById = new Map(remotePets.filter(pet => pet.id).map(pet => [pet.id, pet]));
  const localIds = new Set(localPets.map(pet => pet.id).filter(Boolean));
  return [
    ...localPets.map(pet => pet.id && remoteById.has(pet.id) ? remoteById.get(pet.id)! : pet),
    ...remotePets.filter(pet => !pet.id || !localIds.has(pet.id)),
  ];
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
