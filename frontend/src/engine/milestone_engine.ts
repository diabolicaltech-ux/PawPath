/**
 * PawPath Vaccination & Milestone Tracking Engine
 * 
 * Implements logic for tracking life-stage milestones and vaccination schedules
 * as defined in the PawPath Clinical Rulebook §2.
 */

import { Species } from './metabolic_engine';

export enum CanineLifeStage {
  PUPPY = 'Puppy',
  JUNIOR = 'Junior',
  ADULT = 'Adult',
  MATURE_ADULT = 'Mature Adult',
  SENIOR = 'Senior',
  END_OF_LIFE = 'End-of-Life'
}


export interface PetMilestoneInput {
  species: Species;
  dateOfBirth: Date;
  weightKg: number;
}

/**
 * Determines the canine life stage based on age and size-based adjustments
 */
export function getCanineLifeStage(ageYears: number, weightKg: number): CanineLifeStage {
  if (ageYears < 0.5) return CanineLifeStage.PUPPY;
  if (ageYears < 2.0) return CanineLifeStage.JUNIOR;
  
  let seniorAge = 10;
  if (weightKg < 10) seniorAge = 11;
  else if (weightKg <= 25) seniorAge = 10;
  else if (weightKg <= 40) seniorAge = 8;
  else seniorAge = 6;

  if (ageYears >= seniorAge + 2) return CanineLifeStage.END_OF_LIFE;
  if (ageYears >= seniorAge) return CanineLifeStage.SENIOR;
  if (ageYears >= 7) return CanineLifeStage.MATURE_ADULT;
  
  return CanineLifeStage.ADULT;
}


/**
 * Gets the current life stage for a pet
 */
export function getLifeStage(input: PetMilestoneInput): string {
  const ageYears = (new Date().getTime() - input.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  
  if (input.species === Species.CANINE) {
    return getCanineLifeStage(ageYears, input.weightKg);
  }
  return getCanineLifeStage(ageYears, input.weightKg);
}

export interface VaccinationRecord {
  vaccineName: string;
  dateAdministered: Date;
  isCore: boolean;
}

/**
 * Checks for missed vaccination windows
 */
export function checkVaccinationStatus(species: Species, records: VaccinationRecord[]): string[] {
  const alerts: string[] = [];
  const now = new Date();
  
  // Rulebook §2.3: Flag if core-vaccine window missed by >6 months
  // This is a simplified check for the demo
  const coreVaccines = ['DHPP', 'Rabies'];
  
  coreVaccines.forEach(vaxName => {
    const lastRecord = records
      .filter(r => r.vaccineName === vaxName)
      .sort((a, b) => b.dateAdministered.getTime() - a.dateAdministered.getTime())[0];

    if (!lastRecord) {
      alerts.push(`MISSING CORE VACCINE: No record of ${vaxName} vaccination.`);
    } else {
      const monthsSinceLast = (now.getTime() - lastRecord.dateAdministered.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
      // Assuming 1 year booster for simplicity in this logic
      if (monthsSinceLast > 18) {
        alerts.push(`OVERDUE CORE VACCINE: ${vaxName} booster is overdue by >6 months. Restart series recommended.`);
      }
    }
  });

  return alerts;
}

/**
 * A single milestone item
 */
export interface Milestone {
  id: string;
  name: string;
  type: 'Vaccine' | 'Screening' | 'Wellness' | 'Life_Transition';
  due: string;
  description: string;
  breedRelevant?: boolean;
}

export interface MilestoneInput {
  species: Species;
  dateOfBirth: Date;
  weightKg: number;
  breedNames: string[];
  highRiskConditions?: { condition: string; onsetAgeMonths: number; screeningRecommendation: string }[];
  existingVaccinations?: VaccinationRecord[];
  existingScreenings?: { screeningType: string }[];
}

/**
 * Generate age-appropriate milestones for a pet based on life stage, species, and breed
 */
export function generateMilestones(input: MilestoneInput): Milestone[] {
  const milestones: Milestone[] = [];
  const ageYears = (new Date().getTime() - input.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  const ageMonths = ageYears * 12;
  const lifeStage = getLifeStage({ species: input.species, dateOfBirth: input.dateOfBirth, weightKg: input.weightKg });

  // 1. Core vaccine milestones
  const coreVaccines = ['DHPP', 'Rabies'];
  const existingVaxNames = (input.existingVaccinations || []).map(v => v.vaccineName);
  
  coreVaccines.forEach(vaxName => {
    if (!existingVaxNames.includes(vaxName)) {
      milestones.push({
        id: `vax-core-${vaxName}`,
        name: `${vaxName} Vaccine`,
        type: 'Vaccine',
        due: ageMonths < 6 ? 'Now (puppy series)' : ageMonths < 18 ? 'Due soon' : 'Overdue',
        description: `${vaxName} core vaccination. Essential for canine health.`,
      });
    }
  });

  // 2. Dental screening (annually from 1 year)
  if (ageYears >= 1) {
    milestones.push({
      id: 'dental-screening',
      name: 'Dental Screening',
      type: 'Screening',
      due: 'Annually',
      description: 'Annual dental health assessment. Recommended for all adult pets.',
    });
  }

  // 3. Breed-specific screening milestones
  const breedRisks = input.highRiskConditions || [];
  const existingScreeningTypes = (input.existingScreenings || []).map(s => s.screeningType);
  
  breedRisks.forEach(risk => {
    const onsetYears = risk.onsetAgeMonths / 12;
    const screeningName = risk.screeningRecommendation || `Screening for ${risk.condition}`;
    
    if (ageYears >= onsetYears - 0.5 && !existingScreeningTypes.includes(screeningName)) {
      milestones.push({
        id: `breed-screen-${risk.condition.replace(/\s+/g, '-').toLowerCase()}`,
        name: `${risk.condition} Screening`,
        type: 'Screening',
        due: `By age ${Math.ceil(onsetYears)}`,
        description: `${screeningName}. Important for ${input.breedNames.join('/')} breed predisposition.`,
        breedRelevant: true,
      });
    }
  });

  // 4. Life-stage transition milestones
  const lifeStageMilestones: Record<string, { id: string; name: string; description: string }[]> = {
    'Puppy': [
      { id: 'transition-puppy-food', name: 'Transition to Puppy Food', description: 'Ensure proper nutrition for growth and development.' },
      { id: 'puppy-socialization', name: 'Socialization Window', description: 'Critical period for socializing with people and other dogs.' },
    ],
    'Junior': [
      { id: 'spay-neuter', name: 'Spay/Neuter Consideration', description: 'Discuss spay/neuter timing with your veterinarian.' },
      { id: 'transition-adult-food', name: 'Transition to Adult Food', description: 'Switch from growth to maintenance diet.' },
    ],
    'Adult': [
      { id: 'annual-wellness', name: 'Annual Wellness Exam', description: 'Comprehensive annual health check-up.' },
      { id: 'heartworm-test', name: 'Heartworm Test', description: 'Annual heartworm testing recommended.' },
    ],
    'Mature Adult': [
      { id: 'senior-bloodwork', name: 'Baseline Senior Bloodwork', description: 'Establish baseline blood values for senior health monitoring.' },
      { id: 'weight-management-review', name: 'Weight Management Review', description: 'Review diet and activity for age-related changes.' },
    ],
    'Senior': [
      { id: 'senior-wellness', name: 'Senior Wellness Exam', description: 'Comprehensive senior health assessment with bloodwork and urinalysis.' },
      { id: 'senior-dental', name: 'Senior Dental Cleaning', description: 'Dental cleaning with senior-safe anesthesia protocol.' },
      { id: 'joint-health', name: 'Joint Health Assessment', description: 'Evaluate for arthritis and mobility issues.' },
    ],
    'End-of-Life': [
      { id: 'palliative-care', name: 'Comfort & Quality-of-Life Consultation', description: 'Discuss comfort, quality of life, and supportive-care options with your veterinarian.' },
      { id: 'hospice-planning', name: 'Advanced Senior Care Planning', description: 'Discuss comfort-focused care and supportive options with your veterinarian as your pet’s needs change.' },
    ],


  };

  const stageMilestones = lifeStageMilestones[lifeStage] || [];
  
  // Filter out duplicates from already-added milestones
  const existingIds = new Set(milestones.map(m => m.id));
  stageMilestones.forEach(m => {
    if (!existingIds.has(m.id)) {
      milestones.push({
        id: m.id,
        name: m.name,
        type: 'Wellness',
        due: lifeStage === 'Puppy' ? 'Now' : 'This stage',
        description: m.description,
      });
    }
  });

  // 5. Non-core vaccine reminders
  const nonCoreVaccines = input.species === Species.CANINE 
    ? ['Bordetella', 'Leptospirosis', 'Canine Influenza', 'Lyme']
    : ['FeLV', 'FIV'];
  
  nonCoreVaccines.forEach(vaxName => {
    if (!existingVaxNames.includes(vaxName)) {
      milestones.push({
        id: `vax-noncore-${vaxName}`,
        name: `${vaxName} (Non-Core) Vaccine`,
        type: 'Vaccine',
        due: 'Discuss with vet',
        description: `Non-core vaccination. Recommended based on lifestyle and risk factors.`,
      });
    }
  });

  return milestones;
}
