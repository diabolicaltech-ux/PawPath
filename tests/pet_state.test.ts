import { replacePetInCollection, replaceSelectedPet } from '../frontend/src/lib/petState';
import type { PetProfile } from '../frontend/src/types/pet';

const pet = (id: string, name: string): PetProfile => ({
  id,
  name,
  species: 'canine',
  breed: 'Mixed Breed',
  dob: '2020-01-01',
  gender: 'female',
  isNeutered: true,
  weight: '10',
  activityLevel: 'normal',
  bcs: 5,
  chronicConditions: [],
  previousSurgeries: [],
  previousSeriousIllness: false,
  currentMedications: [],
  onNsaids: false,
  onCorticosteroids: false,
  onThyroidMedication: false,
  onInsulin: false,
  onAntiSeizure: false,
  onHeartMedication: false,
  onBehavioralMedication: false,
  supplements: [],
  drugAllergies: [],
  vaccinations: [],
  onHeartwormPrevention: false,
  onFleaTickPrevention: false,
  completedScreenings: [],
  hasRecentBloodwork: false,
});

describe('pet state synchronization', () => {
  it('replaces only the matching pet in the collection', () => {
    const first = pet('first', 'Milo');
    const second = pet('second', 'Luna');
    const updated = { ...first, name: 'Milo Updated', weight: '12' };

    expect(replacePetInCollection([first, second], updated)).toEqual([updated, second]);
  });

  it('keeps the selected dashboard pet in sync with the saved update', () => {
    const selected = pet('first', 'Milo');
    const updated = { ...selected, name: 'Milo Updated' };

    expect(replaceSelectedPet(selected, updated)).toEqual(updated);
    expect(replaceSelectedPet(selected, pet('other', 'Luna'))).toBe(selected);
  });

  it('does not add an update without an id', () => {
    const existing = pet('first', 'Milo');
    const withoutId = { ...existing, id: undefined, name: 'Invalid' };

    expect(replacePetInCollection([existing], withoutId)).toEqual([existing]);
    expect(replaceSelectedPet(existing, withoutId)).toBe(existing);
  });
});
