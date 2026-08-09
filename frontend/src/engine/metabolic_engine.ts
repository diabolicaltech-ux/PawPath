/**
 * PawPath Metabolic Engine
 * 
 * Implements clinical formulas for Resting Energy Requirement (RER) 
 * and Maintenance Energy Requirement (MER/DER) as defined in the 
 * PawPath Clinical Rulebook.
 */

export const Species = {
  CANINE: 'canine',
} as const;
export type Species = typeof Species[keyof typeof Species];

export interface MetabolicInput {
  species: Species;
  weightKg: number;
  isNeutered: boolean;
  activityLevel: 'low' | 'normal' | 'high' | 'working';
  workingDogMultiplier?: number; // 2.0 - 5.0 §1.3
  lifeStage: 'puppy' | 'junior' | 'adult' | 'senior';
  ageMonths?: number; // For sub-stage precision §1.3
  bcsScore?: number; // 1-9 scale
  isPregnant?: boolean;
  pregnancyMultiplier?: number; // 1.6 - 2.0 §1.3
  isLactating?: boolean;
  lactationMultiplier?: number; // 3.0 - 6.0 §1.3
  isWeightLossTarget?: boolean;
}

/**
 * Calculates Resting Energy Requirement (RER)
 * Formula: 70 × (body_weight_kg)^0.75
 */
export function calculateRER(weightKg: number, species?: Species): number {
  if (weightKg <= 0) throw new Error('Weight must be greater than 0');
  
  // Updated thresholds per Audit v1.0 / Rulebook §4.1
  if (species === Species.CANINE) {
    if (weightKg < 0.2 || weightKg > 150) {
      throw new Error('Canine weight must be between 0.2kg and 150kg');
    }
  }

  return 70 * Math.pow(weightKg, 0.75);
}

/**
 * Gets the MER multiplier based on species and clinical status
 * Multipliers derived from PawPath Clinical Rulebook §1.3
 */
export function getMultiplier(input: MetabolicInput): number {
  const { species, isNeutered, activityLevel, lifeStage, ageMonths, isPregnant, isLactating, isWeightLossTarget } = input;

  // 1. Handle special physiological states first (highest priority in rulebook)
  if (isLactating) {
    if (input.lactationMultiplier) return input.lactationMultiplier;
    return 3.0; 
  }

  if (isPregnant) {
    if (input.pregnancyMultiplier) return input.pregnancyMultiplier;
    return 1.8;
  }

  if (lifeStage === 'puppy') {
    if (ageMonths !== undefined && ageMonths > 4) return 2.0;
    return 3.0;
  }

  // 2. Weight management
  if (isWeightLossTarget) {
    if (species === Species.CANINE) return 1.0;
  }

  if (lifeStage === 'senior') {
    return 1.4;
  }

  // 3. Species-specific adult activity defaults
  if (species === Species.CANINE) {
    if (activityLevel === 'working') {
      return input.workingDogMultiplier || 3.0;
    }
    if (activityLevel === 'high') return 2.0;
    return isNeutered ? 1.6 : 1.8;
  }
}


/**
 * Calculates Maintenance Energy Requirement (MER/DER)
 */
export function calculateMER(input: MetabolicInput): number {
  const rer = calculateRER(input.weightKg, input.species);
  let multiplier = getMultiplier(input);
  
  let mer = rer * multiplier;

  // Apply canine BCS adjustment per Rulebook §1.4.
  const skipBCS = false;
  
  if (input.bcsScore && !skipBCS) {
    const bcsAdjustmentMap: Record<number, number> = {
      1: 1.2,
      2: 1.15,
      3: 1.1,
      4: 1.05,
      5: 1.0,
      6: 0.95,
      7: 0.9,
      8: 0.85,
      9: 0.8
    };
    const bcsMultiplier = bcsAdjustmentMap[input.bcsScore] || 1.0;
    mer = mer * bcsMultiplier;
  }


  return mer;
}
