import {
  getCanineLifeStage,
  checkVaccinationStatus,
  generateMilestones,
} from './milestone_engine';
import { Species } from './metabolic_engine';

const coreRecords = () => [
  { vaccineName: 'DHPP', dateAdministered: new Date(), isCore: true },
  { vaccineName: 'Rabies', dateAdministered: new Date(), isCore: true },
];

describe('checkVaccinationStatus', () => {
  test('returns no missing-vaccine alerts when core vaccination records exist', () => {
    expect(checkVaccinationStatus(Species.CANINE, coreRecords())).toEqual([]);
  });

  test('flags missing core vaccines when no records exist', () => {
    expect(checkVaccinationStatus(Species.CANINE, []).length).toBeGreaterThan(0);
  });
});

describe('generateMilestones', () => {
  test('produces no Overdue milestones when vaccination records show completion', () => {
    const milestones = generateMilestones({
      species: Species.CANINE,
      dateOfBirth: new Date('2020-01-01'),
      weightKg: 20,
      breedNames: ['TestBreed'],
      existingVaccinations: coreRecords(),
      existingScreenings: [],
    });
    expect(milestones.filter(m => m.due === 'Overdue')).toEqual([]);
  });
});

describe('getCanineLifeStage', () => {
  test('never derives an End-of-Life stage for any age or weight', () => {
    const allowedStages = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior'];
    for (let age = 0; age <= 30; age += 0.5) {
      for (const weight of [5, 15, 30, 50]) {
        const stage = getCanineLifeStage(age, weight);
        expect(stage).not.toBe('End-of-Life');
        expect(allowedStages).toContain(stage);
      }
    }
  });
});
