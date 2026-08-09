export type BreedGroup =
  | 'toy' | 'small' | 'medium' | 'large' | 'giant'
  | 'brachycephalic' | 'sighthound' | 'herding' | 'terrier'
  | 'long-back';

export interface ExercisePlan {
  breedName: string;
  species: 'canine';
  breedGroup: BreedGroup;
  dailyMinMinutes: number;
  dailyMaxMinutes: number;
  intensityLevel: 1 | 2 | 3 | 4 | 5;
  recommendedExercises: string[];
  restrictedExercises: string[];
  specialConsiderations: string[];
  heatRestriction: string;
  coldRestriction: string;
  hasIVDDRisk: boolean;
  hasBrachycephalicRisk: boolean;
  hasGDVRisk: boolean;
  hasJointRisk: boolean;
  puppyModification: string;
  seniorModification: string;
}

/** Default plans by breed group for breeds not individually listed */
const groupDefaults: Record<BreedGroup, Omit<ExercisePlan, 'breedName' | 'species'>> = {
  toy: {
    breedGroup: 'toy',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 2,
    recommendedExercises: ['Short walks', 'Indoor fetch', 'Puzzle toys', 'Hide-and-seek'],
    restrictedExercises: ['Long-distance walks', 'Jogging', 'High jumps', 'Rough play with large dogs'],
    specialConsiderations: ['Prone to tracheal collapse — use harness, not collar', 'Hypoglycemia risk — avoid skipping meals before exercise', 'Cold intolerant — need sweaters in winter'],
    heatRestriction: 'Avoid exercise above 32°C (90°F)',
    coldRestriction: 'Needs sweater/coat below 0°C (32°F)',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2-3 times daily. No forced exercise.',
    seniorModification: '10-15 min gentle walks, 2-3 times daily. Monitor for stiffness.',
  },
  small: {
    breedGroup: 'small',
    dailyMinMinutes: 30,
    dailyMaxMinutes: 45,
    intensityLevel: 2,
    recommendedExercises: ['Brisk walks', 'Fetch', 'Nose work', 'Agility (low jumps)'],
    restrictedExercises: ['Intense running on hard surfaces', 'Excessive stair climbing'],
    specialConsiderations: ['Beagles — excellent nose work for mental stimulation', 'Cocker Spaniels — check ears after water activities'],
    heatRestriction: 'Avoid exercise above 32°C (90°F)',
    coldRestriction: 'Limit below 0°C (32°F) — use coat',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2-3 times daily. No forced exercise.',
    seniorModification: '15-20 min moderate walks, 1-2 times daily.',
  },
  medium: {
    breedGroup: 'medium',
    dailyMinMinutes: 45,
    dailyMaxMinutes: 60,
    intensityLevel: 3,
    recommendedExercises: ['Brisk walks', 'Running', 'Fetch', 'Swimming', 'Agility', 'Hiking'],
    restrictedExercises: ['Over-exercising in heat (brachy breeds)', 'Excessive jumping (IVDD risk breeds)'],
    specialConsiderations: ['Working/herding breeds need mental stimulation', 'Brachycephalic breeds — stick to Moderate (2) only'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Limit below -5°C (23°F) for short-coated breeds',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2 times daily. No forced running.',
    seniorModification: '15-20 min exercise, 2 times daily. Low-impact preferred.',
  },
  large: {
    breedGroup: 'large',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 3,
    recommendedExercises: ['Running', 'Swimming', 'Fetch', 'Hiking', 'Jogging', 'Agility'],
    restrictedExercises: ['High-impact exercise until growth plates close (12-18mo)', 'Strenuous exercise immediately after meals (GDV risk)'],
    specialConsiderations: ['Labs and Goldens prone to obesity — consistent exercise essential', 'Swimming is excellent low-impact exercise for joint health'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant. Check for ice balls between toes.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2 times daily. NO forced exercise until 12-18mo.',
    seniorModification: '20-30 min low-impact exercise, 2 times daily. Swimming ideal.',
  },
  giant: {
    breedGroup: 'giant',
    dailyMinMinutes: 30,
    dailyMaxMinutes: 60,
    intensityLevel: 2,
    recommendedExercises: ['Leisurely walks', 'Gentle swimming', 'Flat-field fetch', 'Nose work'],
    restrictedExercises: ['Running', 'Jogging', 'Jumping', 'Agility', 'Stairs', 'High-impact exercise'],
    specialConsiderations: ['Growth plates close late (18-24mo)', 'High risk of DCM — monitor for exercise intolerance', 'Joint stress is a major concern'],
    heatRestriction: 'Avoid exercise above 28°C (82°F)',
    coldRestriction: 'Generally cold-tolerant. Limit in extreme cold.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age — MAX. No forced exercise until 18-24mo.',
    seniorModification: '15-20 min gentle walks, 2 times daily. Joint support recommended.',
  },
  brachycephalic: {
    breedGroup: 'brachycephalic',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 1,
    recommendedExercises: ['Short walks', 'Indoor play', 'Puzzle toys', 'Gentle fetch', 'Swimming (supervised)'],
    restrictedExercises: ['Exercise in hot/humid weather', 'Strenuous play', 'Running', 'Overexertion'],
    specialConsiderations: ['CRITICAL: Cannot regulate body temperature effectively through panting', 'Exercise only during cool morning/evening hours', 'Watch for signs of respiratory distress', 'Always carry water'],
    heatRestriction: 'NO exercise above 26°C (80°F). NO exercise in humidity >60%.',
    coldRestriction: 'Needs coat below 4°C (40°F) — short walks only',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: true,
    hasGDVRisk: false,
    hasJointRisk: false,
    puppyModification: '5-10 min play sessions, 3-4 times daily. No forced exercise.',
    seniorModification: '10-15 min gentle walks, 2-3 times daily. Monitor breathing closely.',
  },
  sighthound: {
    breedGroup: 'sighthound',
    dailyMinMinutes: 45,
    dailyMaxMinutes: 60,
    intensityLevel: 3,
    recommendedExercises: ['Leashed walks', 'Safe enclosed running (fenced area)', 'Lure coursing', 'Short sprints'],
    restrictedExercises: ['Unsupervised off-leash exercise (prey drive)', 'Prolonged intense exercise', 'Cold weather exercise without coat'],
    specialConsiderations: ['Sprinters, not endurance athletes', 'Need short bursts of intense exercise followed by long rest', 'Sensitive to cold due to low body fat', 'Thin skin that tears easily'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Needs coat below 4°C (40°F) — sensitive to cold',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: false,
    puppyModification: '5 min per month of age. No sprinting until growth plates close.',
    seniorModification: '15-20 min walks plus short gentle sprints as tolerated.',
  },
  herding: {
    breedGroup: 'herding',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 4,
    recommendedExercises: ['Running', 'Fetch', 'Frisbee', 'Agility', 'Herding trials', 'Advanced obedience', 'Puzzle toys', 'Nose work'],
    restrictedExercises: ['Under-exercising — leads to behavioral problems', 'Repetitive motion without mental challenge'],
    specialConsiderations: ['NEED mental stimulation as much as physical exercise', 'Without adequate exercise: destructive behaviors, barking, anxiety', 'Excellent agility candidates'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant. Limit in extreme cold.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5 min per month of age + 5 min training, 2 times daily.',
    seniorModification: '20-30 min exercise + 15 min mental stimulation, 2 times daily.',
  },
  terrier: {
    breedGroup: 'terrier',
    dailyMinMinutes: 45,
    dailyMaxMinutes: 60,
    intensityLevel: 3,
    recommendedExercises: ['Walking', 'Fetch', 'Digging pits (designated area)', 'Earthdog trials', 'Barn hunt', 'Agility'],
    restrictedExercises: ['Off-leash in unenclosed areas (prey drive)', 'Extended periods without exercise'],
    specialConsiderations: ['Energetic and determined', 'Need outlets for digging and chasing instincts', 'Earthdog trials excellent for instinct satisfaction'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Limit below -5°C (23°F) for short-coated terriers',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5-10 min play sessions, 3-4 times daily.',
    seniorModification: '15-20 min walks, 2 times daily. Gentle play.',
  },
  'long-back': {
    breedGroup: 'long-back',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 2,
    recommendedExercises: ['Short walks', 'Gentle fetch', 'Nose work', 'Indoor play'],
    restrictedExercises: ['Jumping on/off furniture', 'Stairs', 'Rough play', 'Standing on hind legs'],
    specialConsiderations: ['IVDD ALERT: No jumping, no stairs', 'Use ramps for furniture and vehicles', 'Weight management is critical to prevent back stress'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Needs sweater/coat below 4°C (40°F)',
    hasIVDDRisk: true,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: 'No jumping or stairs. Carry up/down stairs until 12mo.',
    seniorModification: '10-15 min gentle walks. No stairs. Use ramps everywhere.',
  },
};

/** Individual breed exercise plans for top breeds */
export const EXERCISE_PLANS: ExercisePlan[] = [
  {
    breedName: 'Labrador Retriever',
    species: 'canine',
    breedGroup: 'large',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 3,
    recommendedExercises: ['Swimming', 'Fetch', 'Running', 'Hiking', 'Jogging'],
    restrictedExercises: ['High-impact exercise until growth plates close (12mo)', 'Strenuous exercise immediately after meals'],
    specialConsiderations: ['Obesity-prone — consistent exercise essential', 'Excellent swimmer — water is ideal low-impact exercise'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant. Check for ice balls between toes.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2 times daily. No forced exercise until 12mo.',
    seniorModification: '20-30 min swimming or gentle walks, 2 times daily.',
  },
  {
    breedName: 'French Bulldog',
    species: 'canine',
    breedGroup: 'brachycephalic',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 1,
    recommendedExercises: ['Short walks (cool hours)', 'Indoor play', 'Puzzle toys', 'Gentle fetch'],
    restrictedExercises: ['Exercise in heat >26°C', 'Strenuous play', 'Running', 'Overexertion'],
    specialConsiderations: ['EXTREME heat alert — cannot regulate temperature', 'Never exercise in >26°C (80°F)', 'Watch for respiratory distress signs', 'Use harness, not collar'],
    heatRestriction: 'NO exercise above 26°C (80°F). NO humidity >60%.',
    coldRestriction: 'Needs coat below 4°C (40°F)',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: true,
    hasGDVRisk: false,
    hasJointRisk: false,
    puppyModification: '5-10 min play, 3-4 times daily. No forced exercise.',
    seniorModification: '10-15 min gentle walks, 2-3 times daily.',
  },
  {
    breedName: 'Golden Retriever',
    species: 'canine',
    breedGroup: 'large',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 3,
    recommendedExercises: ['Swimming', 'Fetch', 'Running', 'Hiking', 'Retrieval games'],
    restrictedExercises: ['High-impact exercise until growth plates close', 'Strenuous exercise immediately after meals'],
    specialConsiderations: ['Loves water — swimming is ideal', 'Obesity-prone — consistent exercise essential', 'Excellent family exercise dog'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age, 2 times daily.',
    seniorModification: '20-30 min swimming or gentle walks, 2 times daily.',
  },
  {
    breedName: 'German Shepherd',
    species: 'canine',
    breedGroup: 'herding',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 3,
    recommendedExercises: ['Running', 'Fetch', 'Agility', 'Advanced obedience', 'Hiking', 'Puzzle toys'],
    restrictedExercises: ['High-impact exercise on hard surfaces', 'Forced exercise in growing puppies'],
    specialConsiderations: ['Needs mental challenges — not just physical exercise', 'Prone to hip dysplasia — avoid high-impact on hard surfaces', 'Excellent working dog — needs a job'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age. No forced running until 12mo.',
    seniorModification: '20-30 min exercise + 15 min training, 2 times daily.',
  },
  {
    breedName: 'Dachshund',
    species: 'canine',
    breedGroup: 'long-back',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 2,
    recommendedExercises: ['Short walks', 'Gentle fetch', 'Nose work', 'Sniffing walks'],
    restrictedExercises: ['Jumping on/off furniture', 'Stairs', 'Running on hard surfaces', 'Standing on hind legs'],
    specialConsiderations: ['IVDD ALERT: No jumping, no stairs', 'Use ramps for all furniture and vehicles', 'Weight management CRITICAL for back health'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Needs sweater/coat below 4°C (40°F)',
    hasIVDDRisk: true,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: 'No jumping or stairs. Carry up/down stairs until 12mo.',
    seniorModification: '10-15 min gentle walks. No stairs. Use ramps.',
  },
  {
    breedName: 'Border Collie',
    species: 'canine',
    breedGroup: 'herding',
    dailyMinMinutes: 60,
    dailyMaxMinutes: 90,
    intensityLevel: 4,
    recommendedExercises: ['Running', 'Frisbee', 'Agility', 'Herding trials', 'Advanced obedience', 'Puzzle toys'],
    restrictedExercises: ['Under-exercising — leads to severe behavioral problems'],
    specialConsiderations: ['HIGHEST exercise need of any breed', 'NEEDS a job — not suitable for sedentary homes', 'Mental stimulation as important as physical exercise', 'Agility superstar'],
    heatRestriction: 'Avoid exercise above 30°C (86°F)',
    coldRestriction: 'Generally cold-tolerant.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: false,
    hasJointRisk: true,
    puppyModification: '5 min per month of age + training. No agility jumps until 12mo.',
    seniorModification: '20-30 min exercise + 20 min mental stimulation, 2 times daily.',
  },
  {
    breedName: 'Bulldog',
    species: 'canine',
    breedGroup: 'brachycephalic',
    dailyMinMinutes: 20,
    dailyMaxMinutes: 30,
    intensityLevel: 1,
    recommendedExercises: ['Short walks (cool hours)', 'Indoor play', 'Gentle fetch'],
    restrictedExercises: ['Exercise in heat', 'Strenuous play', 'Running', 'Any overexertion'],
    specialConsiderations: ['EXTREME heat alert — cannot regulate temperature', 'Short, slow walks only. NO running.', 'Watch for respiratory distress'],
    heatRestriction: 'NO exercise above 26°C (80°F). NO humidity >60%.',
    coldRestriction: 'Needs coat below 4°C (40°F)',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: true,
    hasGDVRisk: false,
    hasJointRisk: false,
    puppyModification: '5-10 min play, 3-4 times daily.',
    seniorModification: '10-15 min gentle walks, 2-3 times daily.',
  },
  {
    breedName: 'Pug',
    species: 'canine',
    breedGroup: 'brachycephalic',
    dailyMinMinutes: 15,
    dailyMaxMinutes: 20,
    intensityLevel: 1,
    recommendedExercises: ['Short walks', 'Indoor play', 'Puzzle toys'],
    restrictedExercises: ['Exercise in heat', 'Strenuous play', 'Running', 'Overexertion'],
    specialConsiderations: ['EXTREME heat alert', 'Short, slow walks only', 'Never over-exert — respiratory distress risk is high'],
    heatRestriction: 'NO exercise above 26°C (80°F).',
    coldRestriction: 'Needs coat below 4°C (40°F)',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: true,
    hasGDVRisk: false,
    hasJointRisk: false,
    puppyModification: '5-10 min play, 3-4 times daily.',
    seniorModification: '10 min gentle walks, 2-3 times daily.',
  },
  {
    breedName: 'Great Dane',
    species: 'canine',
    breedGroup: 'giant',
    dailyMinMinutes: 30,
    dailyMaxMinutes: 60,
    intensityLevel: 2,
    recommendedExercises: ['Leisurely walks', 'Gentle swimming', 'Flat-field fetch', 'Nose work'],
    restrictedExercises: ['Running', 'Jogging', 'Jumping', 'Agility', 'Stairs', 'Forced exercise until 18mo'],
    specialConsiderations: ['Joint alert — no forced exercise until 18mo', 'High DCM risk — monitor for exercise intolerance', 'Leisurely walks only — not built for endurance'],
    heatRestriction: 'Avoid exercise above 28°C (82°F)',
    coldRestriction: 'Generally cold-tolerant.',
    hasIVDDRisk: false,
    hasBrachycephalicRisk: false,
    hasGDVRisk: true,
    hasJointRisk: true,
    puppyModification: '5 min per month of age MAX. No forced exercise until 18mo.',
    seniorModification: '15-20 min gentle walks, 2 times daily.',
  },
];

/**
 * Get an exercise plan for a specific breed
 */
export function getExercisePlanByBreed(
  breedName: string,
  species: 'canine',
  weightKg?: number
): ExercisePlan {
  // Check individual plans first
  const individual = EXERCISE_PLANS.find(
    p => p.breedName.toLowerCase() === breedName.toLowerCase()
  );
  if (individual) return individual;

  // Determine breed group from weight and species
  let group: BreedGroup = 'medium';

  // Determine group by weight
  if (weightKg) {
    if (weightKg < 5) group = 'toy';
    else if (weightKg < 10) group = 'small';
    else if (weightKg < 25) group = 'medium';
    else if (weightKg < 40) group = 'large';
    else group = 'giant';
  }

  // Check if breed name suggests specific groups
  const name = breedName.toLowerCase();
  if (name.includes('bulldog') || name.includes('pug') || name.includes('shih tzu') ||
      name.includes('boston terrier') || name.includes('pekingese') || name.includes('boxer')) {
    group = 'brachycephalic';
  } else if (name.includes('greyhound') || name.includes('whippet') || name.includes('borzoi') ||
             name.includes('saluki') || name.includes('galgah') || name.includes('afghan')) {
    group = 'sighthound';
  } else if (name.includes('corgi') || name.includes('dachshund') || name.includes('basset')) {
    group = 'long-back';
  } else if (name.includes('collie') || name.includes('shepherd') || name.includes('cattle') ||
             name.includes('corgi') || name.includes('sheltie')) {
    group = 'herding';
  } else if (name.includes('terrier') || name.includes('schnauzer')) {
    group = 'terrier';
  }

  return {
    breedName,
    species,
    breedGroup: group,
    ...groupDefaults[group],
  };
}