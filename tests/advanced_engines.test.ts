import { evaluateAlerts, AlertSeverity, Pet } from '../src/engine/alert_engine';
import { getLifeStage, checkVaccinationStatus, CanineLifeStage, FelineLifeStage } from '../src/engine/milestone_engine';
import { Species } from '../src/engine/metabolic_engine';

describe('Alert Engine', () => {
  const mockBreed = {
    name: 'Golden Retriever',
    species: Species.CANINE,
    highRiskConditions: [
      {
        condition: 'Hip Dysplasia',
        onsetAgeMonths: 12,
        screeningRecommendation: 'OFA Hips',
        severity: AlertSeverity.ADVISORY
      }
    ]
  };

  test('generates informational alert for young breed', () => {
    const pet: Pet = {
      id: '1',
      name: 'Buddy',
      species: Species.CANINE,
      breed: mockBreed,
      dateOfBirth: new Date(), // Just born
      healthLogs: [],
      clinicalEvents: []
    };
    const alerts = evaluateAlerts(pet);
    expect(alerts.some(a => a.severity === AlertSeverity.INFORMATIONAL)).toBe(true);
  });

  test('generates advisory alert for mature breed', () => {
    const dob = new Date();
    dob.setFullYear(now.getFullYear());
    dob.setMonth(now.getMonth() - 13); // 13 months old (within 6 month grace period of 12mo onset)
    const pet: Pet = {
      id: '1',
      name: 'Buddy',
      species: Species.CANINE,
      breed: mockBreed,
      dateOfBirth: dob,
      healthLogs: [],
      clinicalEvents: []
    };
    const alerts = evaluateAlerts(pet);
    expect(alerts.some(a => a.severity === AlertSeverity.ADVISORY)).toBe(true);
  });
});

function calculateAgeInMonths(dob: Date): number {
  const now = new Date();
  return (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
}
const now = new Date();

describe('Milestone Engine', () => {
  test('determines correct canine life stage for giant breed', () => {
    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - 7); // 7 years old
    const stage = getLifeStage({
      species: Species.CANINE,
      dateOfBirth: dob,
      weightKg: 50 // Giant
    });
    // Senior for giant starts at 6
    expect(stage).toBe(CanineLifeStage.SENIOR);
  });

  test('flags missing core vaccinations', () => {
    const alerts = checkVaccinationStatus(Species.FELINE, []);
    expect(alerts.length).toBe(2);
    expect(alerts[0]).toContain('MISSING CORE VACCINE');
  });
});
