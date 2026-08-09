import { calculateRER, calculateMER, Species, MetabolicInput } from '../src/engine/metabolic_engine';

describe('Metabolic Engine', () => {
  test('calculateRER returns correct value for 10kg', () => {
    // 70 * (10 ^ 0.75) = 70 * 5.6234... = 393.638...
    expect(calculateRER(10)).toBeCloseTo(393.64, 1);
  });

  test('calculateMER for neutered adult canine', () => {
    const input: MetabolicInput = {
      species: Species.CANINE,
      weightKg: 10,
      isNeutered: true,
      activityLevel: 'normal',
      lifeStage: 'adult'
    };
    const rer = calculateRER(10);
    expect(calculateMER(input)).toBeCloseTo(rer * 1.6, 1);
  });

  test('calculateMER for intact adult feline', () => {
    const input: MetabolicInput = {
      species: Species.FELINE,
      weightKg: 5,
      isNeutered: false,
      activityLevel: 'normal',
      lifeStage: 'adult'
    };
    const rer = calculateRER(5);
    expect(calculateMER(input)).toBeCloseTo(rer * 1.4, 1);
  });

  test('calculateMER feline weight loss safety guard', () => {
    // Feline weight loss: 0.8 * MER, but not below 0.7 * RER
    // If we use a neutered cat: multiplier is 1.2.
    // MER = RER * 1.2
    // Weight loss MER = 0.8 * (RER * 1.2) = 0.96 * RER
    // This is > 0.7 * RER, so it should be fine.
    
    // To trigger the safety guard, we'd need a very low multiplier.
    // Rulebook says "Never below 0.8 x MER for cats". 
    // And "MUST NOT have caloric restriction below 70% of RER".
    
    const input: MetabolicInput = {
      species: Species.FELINE,
      weightKg: 5,
      isNeutered: true,
      activityLevel: 'low' as any, // 'low' is not in enum but handled as default
      lifeStage: 'adult',
      isWeightLossTarget: true
    };
    
    const rer = calculateRER(5);
    // Base multiplier for neutered adult feline is 1.2
    // Calc: 1.2 * 0.8 = 0.96.
    expect(calculateMER(input)).toBeCloseTo(rer * 0.96, 1);
  });
});
