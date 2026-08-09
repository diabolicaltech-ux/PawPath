import type { PetProfile } from '../types/pet';

/**
 * Replace one pet in the app-level collection without changing other profiles.
 * A missing id is treated as a no-op so stale or malformed updates cannot add data.
 */
export function replacePetInCollection(
  pets: PetProfile[],
  updatedPet: PetProfile,
): PetProfile[] {
  if (!updatedPet.id) return pets;
  return pets.map(pet => pet.id === updatedPet.id ? updatedPet : pet);
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
