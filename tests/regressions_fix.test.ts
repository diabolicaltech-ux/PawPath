import { calculateMER, Species, MetabolicInput } from '../src/engine/metabolic_engine';
import { evaluateAlerts, AlertSeverity, Pet } from '../src/engine/alert_engine';

describe('Metabolic Engine Fixes', () => {
  test('BCS adjustment applied correctly (BCS 9)', () => {
    const baseInput: MetabolicInput = {
      species: Species.CANINE,
      weightKg: 10,
      isNeutered: true,
      activityLevel: 'normal',
      lifeStage: 'adult',
      bcsScore: 5 // Neutral
    };
    const obeseInput: MetabolicInput = {
      ...baseInput,
      bcsScore: 9 // Obese (0.8 multiplier)
    };
    
    const baseMER = calculateMER(baseInput);
    const obeseMER = calculateMER(obeseInput);
    
    expect(obeseMER).toBeCloseTo(baseMER * 0.8, 1);
  });

  test('BCS adjustment applied correctly (BCS 1)', () => {
    const baseInput: MetabolicInput = {
      species: Species.CANINE,
      weightKg: 10,
      isNeutered: true,
      activityLevel: 'normal',
      lifeStage: 'adult',
      bcsScore: 5
    };
    const thinInput: MetabolicInput = {
      ...baseInput,
      bcsScore: 1 // Thin (1.2 multiplier)
    };
    
    const baseMER = calculateMER(baseInput);
    const thinMER = calculateMER(thinInput);
    
    expect(thinMER).toBeCloseTo(baseMER * 1.2, 1);
  });

  test('Puppy sub-stage multipliers (0-4mo vs 4-12mo)', () => {
    const youngPuppy: MetabolicInput = {
      species: Species.CANINE,
      weightKg: 5,
      isNeutered: false,
      activityLevel: 'normal',
      lifeStage: 'puppy_kitten',
      ageMonths: 3
    };
    const olderPuppy: MetabolicInput = {
      ...youngPuppy,
      ageMonths: 6
    };
    
    const youngMER = calculateMER(youngPuppy);
    const olderMER = calculateMER(olderPuppy);
    
    // Young: 3.0, Older: 2.0
    expect(youngMER / olderMER).toBeCloseTo(3.0 / 2.0, 1);
  });

  test('Working dog custom multiplier', () => {
    const input: MetabolicInput = {
      species: Species.CANINE,
      weightKg: 20,
      isNeutered: false,
      activityLevel: 'working',
      workingDogMultiplier: 4.5,
      lifeStage: 'adult'
    };
    const mer = calculateMER(input);
    const rer = calculateMER({...input, activityLevel: 'normal', isNeutered: true}) / 1.6; // Get RER
    // Wait, simpler way to get RER
    expect(mer).toBeCloseTo(4.5 * (70 * Math.pow(20, 0.75)), 1);
  });
});

describe('Alert Engine Fixes', () => {
  const breed = {
    name: 'Test Breed',
    species: Species.CANINE,
    highRiskConditions: [
      { condition: 'A', onsetAgeMonths: 10, screeningRecommendation: '', severity: AlertSeverity.WARNING },
      { condition: 'B', onsetAgeMonths: 10, screeningRecommendation: '', severity: AlertSeverity.WARNING },
      { condition: 'C', onsetAgeMonths: 10, screeningRecommendation: '', severity: AlertSeverity.WARNING },
      { condition: 'D', onsetAgeMonths: 10, screeningRecommendation: '', severity: AlertSeverity.WARNING }
    ]
  };

  test('Missed Screening Alert (Level 3)', () => {
    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - 2); // 24 months old
    const pet: Pet = {
      id: '1',
      name: 'Test',
      species: Species.CANINE,
      breed: {
        ...breed,
        highRiskConditions: [breed.highRiskConditions[0]]
      },
      dateOfBirth: dob,
      healthLogs: [],
      clinicalEvents: []
    };
    const alerts = evaluateAlerts(pet);
    expect(alerts.some(a => a.label === 'Missed Screening' && a.severity === AlertSeverity.WARNING)).toBe(true);
  });

  test('Cumulative Risk Alert (Level 3) for > 3 conditions', () => {
    const dob = new Date();
    dob.setFullYear(dob.getFullYear() - 1); // 12 months old (inside window for A, B, C, D)
    const pet: Pet = {
      id: '1',
      name: 'Test',
      species: Species.CANINE,
      breed: breed,
      dateOfBirth: dob,
      healthLogs: [],
      clinicalEvents: []
    };
    const alerts = evaluateAlerts(pet);
    expect(alerts.some(a => a.label === 'Cumulative Risk')).toBe(true);
  });
});
