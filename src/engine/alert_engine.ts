/**
 * PawPath Breed-Specific Alert Engine
 * 
 * Implements logic for generating breed-specific and clinical alerts
 * as defined in the PawPath Clinical Rulebook §3.3.
 */

import { Species } from './metabolic_engine';

export const AlertSeverity = {
  INFORMATIONAL: 1,
  ADVISORY: 2,
  WARNING: 3,
  CRITICAL: 4
} as const;
export type AlertSeverity = typeof AlertSeverity[keyof typeof AlertSeverity];

export interface Breed {
  name: string;
  species: Species;
  // Support both legacy highRiskConditions and the alert_rules.predispositions structure from breeds.ts
  highRiskConditions?: {
    condition: string;
    onsetAgeMonths: number;
    screeningRecommendation: string;
    severity: AlertSeverity;
  }[];
  alert_rules?: {
    predispositions?: {
      condition: string;
      onsetAgeMonths: number;
      severity: AlertSeverity;
      screening: string;
    }[];
    contraindications?: string[];
  };
  contraindications?: {
    condition: string;
    description: string;
    severity: AlertSeverity;
  }[];
}

export interface HealthLog {
  date: Date;
  weightKg: number;
  bcsScore: number;
}

export interface ClinicalEvent {
  date: Date;
  eventType: string; // 'vaccination', 'screening', 'bloodwork', etc.
  details: any;
}

export interface Medication {
  name: string;
  dose: string;
  frequency: string;
}

export interface MedicalHistory {
  isNeutered: boolean;
  activityLevel: string;
  bcsScore: number;
  currentDietType: string;
  chronicConditions: string[];
  onNsaids: boolean;
  onCorticosteroids: boolean;
  onThyroidMedication: boolean;
  onInsulin: boolean;
  onAntiSeizure: boolean;
  onHeartMedication: boolean;
  onBehavioralMedication: boolean;
  supplements: string[];
  currentMedications?: Medication[];
  weightHistoryNote?: string;
  recentWeightLoss?: boolean; // Phase 6 addition
}

export interface Pet {
  id: string;
  name: string;
  species: Species;
  breed: Breed;
  /** Multi-breed support — array of breeds for mixed-breed pets */
  breeds?: Breed[];
  dateOfBirth: Date;
  healthLogs: HealthLog[];
  clinicalEvents: ClinicalEvent[];
  medicalHistory?: MedicalHistory;
}

export interface Alert {
  severity: AlertSeverity;
  label: string;
  message: string;
  condition?: string;
}

/**
 * Helper: get all breeds for a pet (supports both single breed and multi-breed)
 */
function getAllBreeds(pet: Pet): Breed[] {
  const breeds: Breed[] = [pet.breed];
  if (pet.breeds && pet.breeds.length > 0) {
    pet.breeds.forEach(b => {
      if (!breeds.some(existing => existing.name === b.name)) {
        breeds.push(b);
      }
    });
  }
  return breeds;
}

/**
 * Helper: get all breed names as lowercase array for matching
 */
function getAllBreedNames(pet: Pet): string[] {
  return getAllBreeds(pet).map(b => b.name.toLowerCase());
}

/**
 * Evaluates a pet and generates active alerts
 */
export function evaluateAlerts(pet: Pet): Alert[] {
  const alerts: Alert[] = [];
  const ageInMonths = calculateAgeInMonths(pet.dateOfBirth);
  let individualRiskCount = 0;
  const allBreeds = getAllBreeds(pet);
  const allBreedNames = getAllBreedNames(pet);

  // Collect risks from all breeds
  const risks: {
    condition: string;
    onsetAgeMonths: number;
    screeningRecommendation: string;
    severity: AlertSeverity;
    breedName: string;
  }[] = [];

  allBreeds.forEach(breed => {
    const breedRisks = [
      ...(breed.highRiskConditions?.map(h => ({ ...h, breedName: breed.name })) || []),
      ...(breed.alert_rules?.predispositions?.map(p => ({
        condition: p.condition,
        onsetAgeMonths: p.onsetAgeMonths,
        screeningRecommendation: p.screening,
        severity: p.severity,
        breedName: breed.name
      })) || [])
    ];
    risks.push(...breedRisks);
  });

  // 1. Breed Predisposition Alerts (Level 1) & 5. Missed Screenings (Level 3)
  risks.forEach(risk => {
    const hasScreening = pet.clinicalEvents.some(event => 
      event.eventType === 'screening' && event.details.condition === risk.condition
    );

    if (!hasScreening) {
      individualRiskCount++;
      if (ageInMonths < risk.onsetAgeMonths) {
        alerts.push({
          severity: AlertSeverity.INFORMATIONAL,
          label: 'Breed Predisposition',
          message: `${risk.breedName}s are predisposed to ${risk.condition}. Consider DNA testing or future screening.`,
          condition: risk.condition
        });
      } else if (ageInMonths >= risk.onsetAgeMonths + 6) {
        // 5. Missed Screening Alert (§3.3 #5)
        alerts.push({
          severity: AlertSeverity.WARNING,
          label: 'Missed Screening',
          message: `CRITICAL: Missed screening window for ${risk.condition} (${risk.breedName}). Immediate veterinary consultation recommended.`,
          condition: risk.condition
        });
      } else {
        // 2. Age-Of-Onset Alerts (Level 2)
        alerts.push({
          severity: AlertSeverity.ADVISORY,
          label: 'Screening Recommended',
          message: `${pet.name} is now entering the typical age range for ${risk.condition} screening (${risk.breedName}).`,
          condition: risk.condition
        });
      }
    }
  });

  // 4. Cumulative Risk Alert (§3.3 #4)
  if (individualRiskCount > 3) {
    alerts.push({
      severity: AlertSeverity.WARNING,
      label: 'Cumulative Risk',
      message: 'Multiple breed-specific risks detected. Comprehensive senior screening recommended.'
    });
  }

  // 3. Weight & BCS Deviation Alerts
  if (pet.healthLogs.length >= 2) {
    const lastTwoLogs = pet.healthLogs.slice(-2);
    const bcs1 = lastTwoLogs[0].bcsScore;
    const bcs2 = lastTwoLogs[1].bcsScore;

    if (bcs1 > 6 && bcs2 > 6) {
      alerts.push({
        severity: AlertSeverity.ADVISORY,
        label: 'Weight Management',
        message: 'Consecutive high BCS scores recorded. Flag for weight management discussion.'
      });
    } else if (bcs1 < 4 && bcs2 < 4) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Nutritional Assessment',
        message: 'Consecutive low BCS scores recorded. Nutritional assessment recommended.'
      });
    }

    // Unexplained weight loss (cats) > 5% in 1 month
    if (pet.species === Species.FELINE) {
      const weight1 = lastTwoLogs[0].weightKg;
      const weight2 = lastTwoLogs[1].weightKg;
      const timeDiffMonths = (lastTwoLogs[1].date.getTime() - lastTwoLogs[0].date.getTime()) / (1000 * 60 * 60 * 24 * 30.44);
      
      if (timeDiffMonths <= 1.5 && weight2 < weight1 * 0.95) {
        alerts.push({
          severity: AlertSeverity.WARNING,
          label: 'Weight Loss Alert',
          message: 'Unexplained weight loss >5% in 1 month detected. Veterinary investigation recommended.'
        });
      }
    }
  }

  // 6. Breed-Specific Contraindication Alerts (across all breeds)
  allBreeds.forEach(breed => {
    if (breed.contraindications) {
      breed.contraindications.forEach(contra => {
        if (!alerts.some(a => a.condition === contra.condition)) {
          alerts.push({
            severity: contra.severity,
            label: 'Contraindication Alert',
            message: `${breed.name}: ${contra.description}`,
            condition: contra.condition
          });
        }
      });
    }
    
    // New style string contraindications from breeds.ts
    if (breed.alert_rules?.contraindications) {
      breed.alert_rules.contraindications.forEach(contra => {
        alerts.push({
          severity: AlertSeverity.WARNING,
          label: 'Contraindication Alert',
          message: `${breed.name}: ${contra}`
        });
      });
    }
  });

  // 7. Medical History & Medication Contraindications (§4.3)
  if (pet.medicalHistory) {
    const history = pet.medicalHistory;

    // Concurrent NSAID/steroid use (Level 4)
    if (history.onNsaids && history.onCorticosteroids) {
      alerts.push({
        severity: AlertSeverity.CRITICAL,
        label: 'Medication Conflict',
        message: 'CRITICAL: Concurrent use of NSAIDs and Corticosteroids detected. High risk of GI perforation/ulceration.'
      });
    }

    // Expanded brachycephalic breed list (§2.2 Audit)
    const brachyBreeds = [
      'bulldog', 'pug', 'persian', 'shih tzu', 'boxer', 'boston terrier', 
      'pekingese', 'japanese chin', 'brussels griffon', 'chow chow', 
      'staffordshire bull terrier'
    ];
    const isBrachy = allBreedNames.some(name => 
      brachyBreeds.some(b => name.includes(b))
    );

    // Brachycephalic breed + BCS >6 (Level 3)
    if (isBrachy && (history.bcsScore > 6 || (pet.healthLogs.length > 0 && pet.healthLogs[pet.healthLogs.length-1].bcsScore > 6))) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'BOAS Risk',
        message: 'Weight management is critical for brachycephalic breeds to minimize Brachycephalic Obstructive Airway Syndrome (BOAS) symptoms.'
      });
    }

    // Cat + CKD + High Protein Diet (Placeholder - would need diet analysis)
    if (pet.species === Species.FELINE && (history.chronicConditions.includes('Chronic Kidney Disease (CKD)') || history.chronicConditions.includes('Kidney Disease (CKD)'))) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Renal Management',
        message: 'Renal diet typically recommended for CKD. Monitor protein and phosphorus intake.'
      });
    }

    // Pancreatitis + High Fat (Advisory)
    if (history.chronicConditions.includes('Pancreatitis')) {
      alerts.push({
        severity: AlertSeverity.ADVISORY,
        label: 'Dietary Restriction',
        message: 'History of pancreatitis requires strict low-fat dietary management to prevent recurrence.'
      });
    }

    // MDR1-sensitive breed + certain drugs (Level 4)
    const mdr1Breeds = ['Collie', 'Australian Shepherd', 'Shetland Sheepdog', 'Whippet', 'McNab', 'Old English Sheepdog', 'Silken Windhound', 'Longhaired Whippet'];
    const isMDR1Breed = allBreedNames.some(name => mdr1Breeds.some(m => name.includes(m.toLowerCase())));
    if (isMDR1Breed) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Genetic Sensitivity',
        message: 'MDR1 gene mutation common in this breed. Use caution with Ivermectin, Loperamide, and certain anesthetics.'
      });
    }

    // Brachycephalic + acepromazine use (Level 3) - Fix check source (§2.5 Audit)
    const hasAcepromazine = 
      history.weightHistoryNote?.toLowerCase().includes('acepromazine') || 
      history.supplements.some(s => s.toLowerCase().includes('acepromazine')) ||
      history.currentMedications?.some(m => m.name.toLowerCase().includes('acepromazine'));

    if (isBrachy && hasAcepromazine) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Anesthesia Risk',
        message: 'Acepromazine use in brachycephalic breeds can significantly increase respiratory depression risk.'
      });
    }

    // Phase 6: Unexplained weight loss alert
    if (pet.species === Species.FELINE && history.recentWeightLoss) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Weight History Alert',
        message: 'Recent significant weight loss reported. In feline patients, this requires veterinary investigation for underlying metabolic or renal conditions.'
      });
    }

    // FIC/FLUTD history + dry food (Level 2)
    if (pet.species === Species.FELINE && 
        (history.chronicConditions.includes('FLUTD/FIC (Feline Idiopathic Cystitis)') || history.chronicConditions.includes('FLUTD/FIC')) && 
        history.currentDietType === 'dry') {
      alerts.push({
        severity: AlertSeverity.ADVISORY,
        label: 'Hydration Alert',
        message: 'Increased moisture intake recommended for FIC/FLUTD history. Consider transition to wet food.'
      });
    }

    // Herbal Supplements + NSAIDs (Level 3)
    const hasBleedingRiskSupp = history.supplements.some(s => 
      ['garlic', 'ginkgo', 'ginger', 'ginseng'].includes(s.toLowerCase())
    );
    if (hasBleedingRiskSupp && history.onNsaids) {
      alerts.push({
        severity: AlertSeverity.WARNING,
        label: 'Bleeding Risk',
        message: 'Certain herbal supplements combined with NSAIDs may increase bleeding risk.'
      });
    }
  }

  return alerts;
}

function calculateAgeInMonths(dob: Date): number {
  const now = new Date();
  return (now.getFullYear() - dob.getFullYear()) * 12 + (now.getMonth() - dob.getMonth());
}
