import { calculateMER, estimateIdealWeightKg, Species } from './metabolic_engine';

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

describe('estimateIdealWeightKg', () => {
  test('returns the breed-range midpoint for a single breed', () => {
    const ideal = estimateIdealWeightKg([
      { ideal_weight_min_kg: 25, ideal_weight_max_kg: 34 },
    ]);
    expect(ideal).toBe(29.5);
  });

  test('averages midpoints across mixed breeds', () => {
    const ideal = estimateIdealWeightKg([
      { ideal_weight_min_kg: 20, ideal_weight_max_kg: 30 }, // midpoint 25
      { ideal_weight_min_kg: 40, ideal_weight_max_kg: 50 }, // midpoint 45
    ]);
    expect(ideal).toBe(35);
  });

  test('returns undefined when no breed ranges are available', () => {
    expect(estimateIdealWeightKg([])).toBeUndefined();
  });

  test('weight-loss MER uses the breed-range midpoint, not current weight', () => {
    const ideal = estimateIdealWeightKg([
      { ideal_weight_min_kg: 25, ideal_weight_max_kg: 34 },
    ]);
    expect(ideal).toBe(29.5);
    const weightLoss = calculateMER({
      ...obeseDog(),
      idealWeightKg: ideal,
      isWeightLossTarget: true,
    });
    const current = calculateMER(obeseDog());
    expect(weightLoss).toBeLessThan(current);
  });
});
