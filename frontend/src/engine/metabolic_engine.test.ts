import { calculateMER, Species } from './metabolic_engine';

const obeseDog = () => ({
  species: Species.CANINE,
  weightKg: 40,
  isNeutered: true,
  activityLevel: 'normal' as const,
  lifeStage: 'adult' as const,
  bcsScore: 5,
});

describe('calculateMER weight-loss base', () => {
  test('weight-loss MER is lower than current-weight MER for an obese dog', () => {
    const current = calculateMER(obeseDog());
    const weightLoss = calculateMER({
      ...obeseDog(),
      idealWeightKg: 30,
      isWeightLossTarget: true,
    });
    expect(weightLoss).toBeLessThan(current);
  });

  test('weight-loss RER is based on ideal weight, not current weight', () => {
    const withIdeal = calculateMER({
      ...obeseDog(),
      idealWeightKg: 30,
      isWeightLossTarget: true,
    });
    const withoutIdeal = calculateMER({
      ...obeseDog(),
      isWeightLossTarget: true,
    });
    // Same weight-loss multiplier (1.0); the only difference is the RER base.
    expect(withIdeal).toBeLessThan(withoutIdeal);
  });
});
