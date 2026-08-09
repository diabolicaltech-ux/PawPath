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

export enum FelineLifeStage {
  KITTEN = 'Kitten',
  JUNIOR = 'Junior',
  PRIME = 'Prime',
  MATURE = 'Mature',
  SENIOR = 'Senior'
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
 * Determines the feline life stage based on age
 */
export function getFelineLifeStage(ageYears: number): FelineLifeStage {
  if (ageYears < 0.5) return FelineLifeStage.KITTEN;
  if (ageYears <= 2.0) return FelineLifeStage.JUNIOR;
  if (ageYears <= 6.0) return FelineLifeStage.PRIME;
  if (ageYears <= 10.0) return FelineLifeStage.MATURE;
  return FelineLifeStage.SENIOR;
}

/**
 * Gets the current life stage for a pet
 */
export function getLifeStage(input: PetMilestoneInput): string {
  const ageYears = (new Date().getTime() - input.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  
  if (input.species === Species.CANINE) {
    return getCanineLifeStage(ageYears, input.weightKg);
  } else {
    return getFelineLifeStage(ageYears);
  }
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
  const coreVaccines = species === Species.CANINE ? ['DHPP', 'Rabies'] : ['FVRCP', 'Rabies'];
  
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
