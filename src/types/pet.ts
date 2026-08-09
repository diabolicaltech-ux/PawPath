import { Species } from '../engine/metabolic_engine';

export interface Medication {
  name: string;
  dose: string;
  frequency: string;
  prescribingVet?: string;
}

export interface WeightEntry {
  date: string;      // ISO date string
  weightKg: number;
  notes?: string;
}

export interface MedicalHistoryEntry {
  date: string;
  type: 'weight' | 'vet_visit' | 'profile_edit' | 'medication' | 'screening' | 'condition' | 'note';
  description: string;
  details?: string;
}

export interface VaccinationRecord {
  vaccineName: string;
  isCore: boolean;
  dateAdministered?: string;
  status: 'recorded' | 'unknown' | 'never';
}

export interface ScreeningRecord {
  screeningType: string;
  ageAtScreening?: number;
  result?: string;
}

/** A single breed selection within a multi-breed pet profile */
export interface BreedSelection {
  breed: string;
  percentage?: number;   // e.g. 50 for 50% — only in advanced mode
  isPrimary?: boolean;   // Designates the primary breed
}

/** Helper: get the primary breed name, or the first breed, or fallback */
export function getPrimaryBreed(pet: { breeds?: BreedSelection[]; breed?: string }): string {
  if (pet.breeds && pet.breeds.length > 0) {
    const primary = pet.breeds.find(b => b.isPrimary) || pet.breeds[0];
    return primary.breed;
  }
  return pet.breed || 'Unknown';
}

/** Helper: format a multi-breed label (e.g., "Golden Retriever / Labrador Mix") */
export function formatBreeds(breeds?: BreedSelection[]): string {
  if (!breeds || breeds.length === 0) return '';
  if (breeds.length === 1) return breeds[0].breed;
  return breeds.map(b => b.breed).join(' / ');
}

export interface PetProfile {
  /** Unique identifier for multi-pet support */
  id?: string;
  name: string;
  species: Species;
  /** @deprecated Use breeds[] instead. Kept for backward compatibility */
  breed: string;
  /** Multi-breed support — array of breed selections */
  breeds?: BreedSelection[];
  dob: string;
  gender: 'male' | 'female';
  isNeutered: boolean;
  weight: string;
  activityLevel: 'low' | 'normal' | 'high' | 'working';
  workingDogMultiplier?: number;
  bcs: number;
  
  // Medical History
  chronicConditions: string[];
  previousSurgeries: string[];
  previousSeriousIllness: boolean;
  previousSeriousIllnessDetail?: string;
  
  // Medications
  currentMedications: Medication[];
  onNsaids: boolean;
  onCorticosteroids: boolean;
  onThyroidMedication: boolean;
  onInsulin: boolean;
  onAntiSeizure: boolean;
  onHeartMedication: boolean;
  onBehavioralMedication: boolean;
  supplements: string[];
  drugAllergies: { drug: string; reaction: string }[];
  
  // Preventive Care
  vaccinations: VaccinationRecord[];
  onHeartwormPrevention: boolean;
  onFleaTickPrevention: boolean;
  
  // Screenings
  completedScreenings: ScreeningRecord[];
  hasRecentBloodwork: boolean;
  recentBloodworkDate?: string;
  
  // Weight History
  weightHistory?: WeightEntry[];
  medicalHistory?: MedicalHistoryEntry[];
  recentWeightLoss?: boolean;
  allergies?: string;
  weightHistoryNote?: string;
  currentDietType?: string;
}
