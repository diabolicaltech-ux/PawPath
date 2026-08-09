import { getExercisePlanByBreed } from '../data/exercise_plans';
import type { ExercisePlan } from '../data/exercise_plans';
import { Species } from './metabolic_engine';
import type { PetProfile } from '../types/pet';

export interface ExerciseRecommendation {
  plan: ExercisePlan;
  ageAdjustedMinutes: number;
  ageAdjustedIntensity: number;
  ageGroup: 'puppy' | 'adult' | 'senior';
  currentActivityLevel: 'low' | 'normal' | 'high' | 'working';
  activityRatio: number; // 0-1 how well current activity matches recommended
}

const INTENSITY_LABELS: Record<number, string> = {
  1: 'Leisurely',
  2: 'Moderate',
  3: 'Vigorous',
  4: 'High-Intensity',
  5: 'Extreme',
};

const INTENSITY_COLORS: Record<number, string> = {
  1: 'bg-green-500',
  2: 'bg-lime-500',
  3: 'bg-yellow-500',
  4: 'bg-orange-500',
  5: 'bg-red-500',
};

export function getIntensityLabel(level: number): string {
  return INTENSITY_LABELS[level] || 'Moderate';
}

export function getIntensityColor(level: number): string {
  return INTENSITY_COLORS[level] || 'bg-yellow-500';
}

/**
 * Calculate age in months from date of birth
 */
function getAgeInMonths(dob: Date): number {
  const now = new Date();
  return (now.getFullYear() - dob.getFullYear()) * 12 +
    (now.getMonth() - dob.getMonth());
}

/**
 * Get an exercise recommendation for a pet profile
 */
export function getExerciseRecommendation(pet: PetProfile): ExerciseRecommendation {
  const dob = new Date(pet.dob);
  const ageMonths = getAgeInMonths(dob);

  // Determine primary breed name
  const breedName =
    pet.breeds?.find(b => b.isPrimary)?.breed ||
    pet.breeds?.[0]?.breed ||
    pet.breed ||
    'Unknown';

  const weight = parseFloat(pet.weight) || 0;
  const plan = getExercisePlanByBreed(breedName, 'canine', weight);

  // Determine age group
  const ageYears = ageMonths / 12;
  let ageGroup: 'puppy' | 'adult' | 'senior';
  if (pet.species === Species.CANINE) {
    if (ageMonths < 12) ageGroup = 'puppy';
    else if (weight >= 40 && ageMonths < 18) ageGroup = 'puppy'; // giant breeds
    else if (ageYears >= (plan.hasJointRisk ? 7 : 8)) ageGroup = 'senior';
    else ageGroup = 'adult';
  } else {
    if (ageMonths < 12) ageGroup = 'puppy';
    else if (ageYears >= 11) ageGroup = 'senior';
    else ageGroup = 'adult';
  }

  // Age-adjust minutes
  let ageAdjustedMinutes: number;
  if (ageGroup === 'puppy') {
    ageAdjustedMinutes = Math.min(ageMonths * 5, plan.dailyMaxMinutes);
  } else if (ageGroup === 'senior') {
    ageAdjustedMinutes = Math.round(plan.dailyMinMinutes * 0.7);
  } else {
    ageAdjustedMinutes = Math.round((plan.dailyMinMinutes + plan.dailyMaxMinutes) / 2);
  }

  // Age-adjust intensity
  let ageAdjustedIntensity = plan.intensityLevel;
  if (ageGroup === 'puppy') {
    ageAdjustedIntensity = Math.min(ageAdjustedIntensity, 2) as 1 | 2 | 3 | 4 | 5;
  } else if (ageGroup === 'senior') {
    ageAdjustedIntensity = Math.min(ageAdjustedIntensity, 2) as 1 | 2 | 3 | 4 | 5;
  }

  // Calculate activity ratio (current vs recommended)
  const activityMap: Record<string, number> = { low: 0.25, normal: 0.5, high: 0.75, working: 1.0 };
  const currentActivity = activityMap[pet.activityLevel] || 0.5;
  const recommendedActivity = ageAdjustedMinutes / plan.dailyMaxMinutes;
  const activityRatio = Math.min(currentActivity / Math.max(recommendedActivity, 0.01), 2.0);

  return {
    plan,
    ageAdjustedMinutes,
    ageAdjustedIntensity,
    ageGroup,
    currentActivityLevel: pet.activityLevel,
    activityRatio,
  };
}

/**
 * Get health-based restrictions
 */
export function getExerciseRestrictions(pet: PetProfile): string[] {
  const restrictions: string[] = [];

  if (pet.chronicConditions.includes('Hip Dysplasia') || pet.chronicConditions.includes('Elbow Dysplasia')) {
    restrictions.push('Avoid high-impact exercise on hard surfaces');
  }
  if (pet.chronicConditions.includes('IVDD') || pet.breed.toLowerCase().includes('dachshund') || pet.breed.toLowerCase().includes('corgi')) {
    restrictions.push('No jumping, no stairs — use ramps');
  }
  if (pet.chronicConditions.includes('Heart Disease')) {
    restrictions.push('Monitor for exercise intolerance — consult vet before strenuous exercise');
  }
  if (pet.bcs >= 7) {
    restrictions.push('Start with low-impact exercise — swimming ideal. Gradual increase.');
  }
  if (pet.recentWeightLoss) {
    restrictions.push('Recent weight loss — monitor energy levels during exercise');
  }

  return restrictions;
}