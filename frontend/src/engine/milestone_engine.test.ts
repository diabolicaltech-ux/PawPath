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

  test('emits a neutral note, not MISSING CORE VACCINE alarm copy, when no records exist', () => {
    const alerts = checkVaccinationStatus(Species.CANINE, []);
    expect(alerts.length).toBeGreaterThan(0);
    expect(alerts.every(a => !a.includes('MISSING CORE VACCINE'))).toBe(true);
  });

  test('treats a "Core vaccines" record as covering both core vaccines', () => {
    const records = [{ vaccineName: 'Core vaccines', dateAdministered: new Date(), isCore: true }];
    expect(checkVaccinationStatus(Species.CANINE, records)).toEqual([]);
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

  test('labels unrecorded adult core vaccines "Not recorded" instead of "Overdue"', () => {
    const milestones = generateMilestones({
      species: Species.CANINE,
      dateOfBirth: new Date('2020-01-01'),
      weightKg: 20,
      breedNames: ['TestBreed'],
      existingVaccinations: [],
      existingScreenings: [],
    });
    const coreVax = milestones.filter(m => m.type === 'Vaccine' && m.id.startsWith('vax-core-'));
    expect(coreVax.length).toBeGreaterThan(0);
    expect(milestones.filter(m => m.due === 'Overdue')).toEqual([]);
    coreVax.forEach(m => expect(m.due).toBe('Not recorded'));
  });

  test('omits core vaccine milestones when a "Core vaccines" record exists', () => {
    const milestones = generateMilestones({
      species: Species.CANINE,
      dateOfBirth: new Date('2020-01-01'),
      weightKg: 20,
      breedNames: ['TestBreed'],
      existingVaccinations: [{ vaccineName: 'Core vaccines', dateAdministered: new Date(), isCore: true }],
      existingScreenings: [],
    });
    expect(milestones.some(m => m.id.startsWith('vax-core-'))).toBe(false);
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
