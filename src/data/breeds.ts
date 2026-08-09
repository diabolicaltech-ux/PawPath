import { Species } from '../engine/metabolic_engine';

export interface BreedData {
  name: string;
  species: 'canine' | 'feline';
  ideal_weight_min_kg: number;
  ideal_weight_max_kg: number;
  life_expectancy: number;
  senior_classification_age: number;
  alert_rules: any;
}

export const BREEDS: BreedData[] = [
] = [
  {
    "name": "Affenpinscher",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Afghan Hound",
    "species": "canine",
    "ideal_weight_min_kg": 23,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Airedale Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Akita",
    "species": "canine",
    "ideal_weight_min_kg": 32,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Immune-Mediated Disease",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Regular bloodwork"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Alaskan Klee Kai",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Alaskan Malamute",
    "species": "canine",
    "ideal_weight_min_kg": 34,
    "ideal_weight_max_kg": 43,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Chondrodysplasia",
          "onsetAgeMonths": 3,
          "severity": 1,
          "screening": "Genetic testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Alpine Dachsbracke",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Bulldog",
    "species": "canine",
    "ideal_weight_min_kg": 27,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Bully",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American English Coonhound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Eskimo Dog",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Eskimo Dog (Miniature)",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Eskimo Dog (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Eskimo Dog (Toy)",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Hairless Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Sunburn Risk",
          "onsetAgeMonths": 0,
          "severity": 1,
          "screening": "Sun protection"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Pit Bull Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Staffordshire Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Water Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 13,
    "ideal_weight_max_kg": 21,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Anatolian Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 64,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Appenzeller Sennenhund",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Argentine Pila Dog",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Argentinian Dogo",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Cattle Dog",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Deafness",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Kelpie",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 21,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Stumpy Tail Cattle Dog",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Azawakh",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bankhar Dog",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Barbet",
    "species": "canine",
    "ideal_weight_min_kg": 17,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basenji",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 12,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Fanconi Syndrome",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual urinalysis"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Art\u00e9sien Normand",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Bleu de Gascogne",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Fauve de Bretagne",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Griffon Vend\u00e9en (Grand)",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Griffon Vend\u00e9en (Petit)",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Basset Hound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 29,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal care; weight management"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Glaucoma",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Tonometry"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal care; weight management"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bavarian Mountain Scent Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Beagle",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bearded Collie",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Beauceron",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bedlington Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Copper Toxicosis (Liver)",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "DNA test; liver enzymes"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Laekenois",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Malinois",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 34,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Shepherd Groenendael",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Shepherd Laekenois",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Shepherd Malinois",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Shepherd Tervuren",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Belgian Tervuren",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bergamasco Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 26,
    "ideal_weight_max_kg": 38,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bergamasco Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 26,
    "ideal_weight_max_kg": 38,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Berger Picard",
    "species": "canine",
    "ideal_weight_min_kg": 23,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bernese Mountain Dog",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 8,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Bichon Frise",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Black Mouth Cur",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Black Russian Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 59,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Black and Tan Coonhound",
    "species": "canine",
    "ideal_weight_min_kg": 29,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bloodhound",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 54,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Entropion",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Ophthalmic exam"
        },
        {
          "condition": "Skin Infections",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Ear/skin fold care"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Blue Lacy",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bluetick Coonhound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Boerboel",
    "species": "canine",
    "ideal_weight_min_kg": 50,
    "ideal_weight_max_kg": 80,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echo"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bolognese",
    "species": "canine",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bordeaux Dogue",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 55,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Respiratory Issues",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "BOAS evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Border Collie",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Border Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Canine Epileptoid Cramping Syndrome",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Borzoi",
    "species": "canine",
    "ideal_weight_min_kg": 27,
    "ideal_weight_max_kg": 48,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Multiple small meals; gastropexy consideration"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Use propofol; avoid thiobarbiturates"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Boston Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ,
        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Boxer",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": [
        "Brachycephalic Obstructive Airway Syndrome (BOAS): avoid overexertion in hot/humid weather",
        "Acepromazine: use extreme caution in brachycephalic breeds — significantly increased respiratory depression risk"
      ]
    }
  },
  {
    "name": "Boykin Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Ear cleaning"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bracco Italiano",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque Fran\u00e7ais (Gascogne)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque Fran\u00e7ais (Pyr\u00e9n\u00e9es)",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque Saint-Germain",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque d'Auvergne",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque de l'Ari\u00e8ge",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Braque du Bourbonnais",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Brazilian Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Briard",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Brittany",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Broholmer",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 11,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Brussels Griffon",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Bull Terrier (Miniature)",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bull Terrier (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bulldog",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 9,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading"
        },
        {
          "condition": "Skin Fold Dermatitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Daily fold cleaning"
        },
        {
          "condition": "Dystocia",
          "onsetAgeMonths": 18,
          "severity": 4,
          "screening": "C-section planning"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Cherry Eye",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Ophthalmic exam"
        }
      ],
      "contraindications": [
        "Hot/humid exercise: fatal heat stroke risk",
        "Weight gain BCS>5: worsens BOAS"
      ]
    }
  },
  {
    "name": "Bullmastiff",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 59,
    "life_expectancy": 8,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cairn Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Canadian Eskimo Dog",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cane Corso",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        },
        {
          "condition": "Idiopathic Epilepsy",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "Ectropion",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Ophthalmic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: large-breed puppy diet mandatory"
      ]
    }
  },
  {
    "name": "Cardigan Welsh Corgi",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal care; no jumping"
        },
        {
          "condition": "PRA",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Strict spinal care; weight management; ramps"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Carolina Dog",
    "species": "canine",
    "ideal_weight_min_kg": 13,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Catahoula Leopard Dog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Caucasian Ovcharka",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 70,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Caucasian Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 70,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cavalier King Charles Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Central Asian Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 12,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cesky Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Scottie Cramp",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Genetic testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Charnigue Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chesapeake Bay Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chihuahua",
    "species": "canine",
    "ideal_weight_min_kg": 1,
    "ideal_weight_max_kg": 3,
    "life_expectancy": 15,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chihuahua (Long Coat)",
    "species": "canine",
    "ideal_weight_min_kg": 1.5,
    "ideal_weight_max_kg": 3,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chihuahua (Smooth Coat)",
    "species": "canine",
    "ideal_weight_min_kg": 1.5,
    "ideal_weight_max_kg": 3,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chinese Chongqing Dog",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chinese Crested",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "Early dental loss common"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Dermatological exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chinese Shar-Pei",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 10,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Shar-Pei Fever",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Colchicine therapy; monitoring"
        },
        {
          "condition": "Skin Fold Dermatitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Daily skin fold cleaning"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Entropion",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "Surgical correction"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chinook",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 41,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chow Chow",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Entropion",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "Ophthalmic exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cimarr\u00f3n Uruguayo",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cirneco dell'Etna",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 13,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Glaucoma",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Tonometry"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Clumber Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cocker Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Collie",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Coton de Tulear",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Curly-Coated Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Czechoslovakian Wolfdog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "C\u00e3o Fila de S\u00e3o Miguel",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 35,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "C\u00e3o da Serra da Estrela",
    "species": "canine",
    "ideal_weight_min_kg": 35,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "C\u00e3o de Castro Laboreiro",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Strict spinal care; weight management; ramps"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Miniature Longhaired)",
    "species": "canine",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Miniature Smooth)",
    "species": "canine",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Miniature Wirehaired)",
    "species": "canine",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Rabbit Longhaired)",
    "species": "canine",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Rabbit Smooth)",
    "species": "canine",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Rabbit Wirehaired)",
    "species": "canine",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Standard Longhaired)",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Intervertebral Disc Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal radiographs; avoid jumping"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Standard Smooth)",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Intervertebral Disc Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal radiographs; avoid jumping"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dachshund (Standard Wirehaired)",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Intervertebral Disc Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal radiographs; avoid jumping"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dalmatian",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Deafness (Congenital)",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "BAER testing in puppies"
        },
        {
          "condition": "Urinary Stones (Urate)",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Low-purine diet; urinalysis"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dandie Dinmont Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal care"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Strict spinal care; weight management; ramps"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Danish-Swedish Farmdog",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Deutsch Stichelhaar",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dingo",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dog Argentino",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dogo Argentino",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        },
        {
          "condition": "Deafness",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dogo Canario",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dogue de Bordeaux",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 55,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echo"
        },
        {
          "condition": "Entropion",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Surgery"
        },
        {
          "condition": "Respiratory Issues",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        }
      ],
      "contraindications": [
        "Hot/humid weather precautions",
        "Weight gain worsens respiratory issues"
      ]
    }
  },
  {
    "name": "Doxie-Pin",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Intervertebral Disc Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal radiographs; avoid jumping"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Drever",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dutch Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 23,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Cocker Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Foxhound",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Setter",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Springer Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Toy (King Charles)",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 11,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "English Toy Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Entlebucher Mountain Dog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Eurasier",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Field Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Ear Infections (Otitis Externa)",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual CERF exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Finnish Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 26,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Finnish Lapphund",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Finnish Spitz",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Flat-Coated Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 10,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cancer (Histiocytic Sarcoma)",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual CBC/chem"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "French Bulldog",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 11,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ,
        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "French Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Galgah (Persian Greyhound)",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Longhaired Pointer",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Pinscher",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Shorthaired Pointer",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Von Willebrand Disease",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "vWB test before surgery"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Wirehaired Pointer",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Giant Schnauzer",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 43,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Glen of Imaal Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Golden Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 34,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Gordon Setter",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Grand Basset Griffon Vend\u00e9en",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Grand Bleu de Gascogne",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Great Dane",
    "species": "canine",
    "ideal_weight_min_kg": 50,
    "ideal_weight_max_kg": 80,
    "life_expectancy": 8,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Great Pyrenees",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 54,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Greater Swiss Mountain Dog",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 62,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Greenland Dog",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 12,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Greyhound",
    "species": "canine",
    "ideal_weight_min_kg": 27,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Multiple small meals; gastropexy consideration"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Use propofol; avoid thiobarbiturates"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hairless Khala",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 13,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Halden Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hamiltonstovare",
    "species": "canine",
    "ideal_weight_min_kg": 23,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hannoveraner Schweisshund",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 35,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Harrier",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Havanese",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hokkaido",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Holland Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 23,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hovawart",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hungarian Vizsla (Wirehaired)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Hygen Hound",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ibizan Hound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Multiple small meals; gastropexy consideration"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Use propofol; avoid thiobarbiturates"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Icelandic Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Irish Red and White Setter",
    "species": "canine",
    "ideal_weight_min_kg": 24,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Irish Setter",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Irish Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 12,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Irish Water Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Irish Wolfhound",
    "species": "canine",
    "ideal_weight_min_kg": 48,
    "ideal_weight_max_kg": 70,
    "life_expectancy": 7,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Istrian Short-haired Hound",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Istrian Wire-haired Hound",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Italian Greyhound",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Jack Russell Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Japanese Chin",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Japanese Spitz",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Japanese Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Jindo",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kai",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kangal",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 65,
    "life_expectancy": 12,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Karelian Bear Dog",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Keeshond",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kerry Blue Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "King Charles Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 11,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kishu",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Komondor",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kooikerhondje",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Korean Jindo",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Korthals Griffon",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kuvasz",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 52,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Labrador Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 36,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lagotto Romagnolo",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lakeland Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lancashire Heeler",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Landseer",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 68,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echo"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Large M\u00fcnsterl\u00e4nder",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Leonberger",
    "species": "canine",
    "ideal_weight_min_kg": 34,
    "ideal_weight_max_kg": 68,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Lhasa Apso",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Renal Dysplasia",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "BUN/Creatinine"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Longdog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lowchen",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lurcher",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 35,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Magyar Agar (Hungarian)",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Maltese",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Manchester Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Glaucoma",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual tonometry"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Manchester Terrier (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Manchester Terrier (Toy)",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Mastiff",
    "species": "canine",
    "ideal_weight_min_kg": 54,
    "ideal_weight_max_kg": 90,
    "life_expectancy": 8,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Miniature American Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Miniature Bull Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Deafness",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Miniature Pinscher",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Legg-Calve-Perthes",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Pelvic radiographs if lameness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Miniature Schnauzer",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Moscow Watchdog",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Mountain Cur",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Mudi",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Neapolitan Mastiff",
    "species": "canine",
    "ideal_weight_min_kg": 50,
    "ideal_weight_max_kg": 70,
    "life_expectancy": 8,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        },
        {
          "condition": "Skin Fold Dermatitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Daily skin fold cleaning"
        },
        {
          "condition": "Entropion",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "Surgical correction"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: large-breed puppy diet mandatory"
      ]
    }
  },
  {
    "name": "Newfoundland",
    "species": "canine",
    "ideal_weight_min_kg": 45,
    "ideal_weight_max_kg": 68,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Norbottenspets",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norfolk Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norrbottenspets",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norwegian Buhund",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norwegian Elkhound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norwegian Lundehund",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 12,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Gastrointestinal Issues",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dietary management"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norwich Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Nova Scotia Duck Tolling Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Old English Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 27,
    "ideal_weight_max_kg": 35,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Old Time Farm Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Otterhound",
    "species": "canine",
    "ideal_weight_min_kg": 29,
    "ideal_weight_max_kg": 52,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Papillon",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Parson Russell Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Legg-Calve-Perthes",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Pelvic radiographs"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pekingese",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 12,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "BOAS grading"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Pembroke Welsh Corgi",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "IVDD",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Strict spinal care; weight management; ramps"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Perdigueiro Portugu\u00eas",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Perro de Presa Mallorquin",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Peruvian Inca Orchid",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Sunburn Risk",
          "onsetAgeMonths": 0,
          "severity": 1,
          "screening": "Sun protection"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Petit Basset Griffon Vendeen",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Intervertebral Disc Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Spinal care"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Petit Basset Griffon Vend\u00e9en",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pharaoh Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Multiple small meals; gastropexy consideration"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Use propofol; avoid thiobarbiturates"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Picardy Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Plott Hound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Podenco Canario",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Podenco Ibicenco",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pointer",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pointer (English)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Polish Greyhound",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Polish Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Polish Lowland Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pomeranian",
    "species": "canine",
    "ideal_weight_min_kg": 1.5,
    "ideal_weight_max_kg": 3.5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Poodle (Miniature)",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Poodle (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Poodle (Toy)",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 3,
    "life_expectancy": 15,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portugese Water Dog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Podengo (Grande)",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Podengo (M\u00e9dio)",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol; pre-anesthetic screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Podengo (Pequeno)",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Podengo Pequeno",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophy"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 13,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Portuguese Water Dog",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pudelpointer",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pug",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ,
        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Puli",
    "species": "canine",
    "ideal_weight_min_kg": 11,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pumi",
    "species": "canine",
    "ideal_weight_min_kg": 10,
    "ideal_weight_max_kg": 15,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pyrenean Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Collie Eye Anomaly",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "CERF eye exam"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Rat Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ratonero Bodeguero Andaluz",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Redbone Coonhound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Rhodesian Ridgeback",
    "species": "canine",
    "ideal_weight_min_kg": 32,
    "ideal_weight_max_kg": 41,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Dermoid Sinus",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Surgical removal"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Rottweiler",
    "species": "canine",
    "ideal_weight_min_kg": 35,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 10,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Russell Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Russian Toy",
    "species": "canine",
    "ideal_weight_min_kg": 1,
    "ideal_weight_max_kg": 3,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Saarloos Wolfdog",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Saint Bernard",
    "species": "canine",
    "ideal_weight_min_kg": 54,
    "ideal_weight_max_kg": 82,
    "life_expectancy": 8,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Saluki",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Samoyed",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schapendoes",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schipperke",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Legg-Calve-Perthes",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Pelvic radiographs"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schnauzer (Giant)",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 42,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Exercise-Induced Collapse",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Genetic test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schnauzer (Miniature)",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schnauzer (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schweizer Laufhund",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Schweizer Niederlaufhund",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Scottish Deerhound",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 50,
    "life_expectancy": 9,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": [
        "Excess calcium in puppy diet: Max 2.5g/1000 kcal \u2014 large-breed puppy diet mandatory",
        "No strenuous exercise after meals (bloat risk)"
      ]
    }
  },
  {
    "name": "Scottish Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 12,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sealyham Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Segugio Italiano",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Segugio Italiano a Pelo Forte",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Segugio Italiano a Pelo Raso",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Shetland Sheepdog",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Shiba Inu",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Glaucoma",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual tonometry"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Shih Tzu",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ,
        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }
      ],
      "contraindications": [
        "Exercise in hot/humid weather: brachycephalic heat stroke risk",
        "Weight gain BCS>5 exacerbates respiratory issues",
        "Acepromazine use: respiratory depression risk"
      ]
    }
  },
  {
    "name": "Shikoku",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Siberian Husky",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Silky Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 13,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Skye Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Autoimmune Disorders",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Bloodwork"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sloughi",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Slovakian Hound",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Small Munsterlander",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neuro eval"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Small M\u00fcnsterl\u00e4nder",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Smooth Fox Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sm\u00e5land Hound",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Soft Coated Wheaten Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "South Russian Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 35,
    "ideal_weight_max_kg": 55,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spanish Hound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 27,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spanish Mastiff",
    "species": "canine",
    "ideal_weight_min_kg": 50,
    "ideal_weight_max_kg": 80,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spanish Water Dog",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spino",
    "species": "canine",
    "ideal_weight_min_kg": 28,
    "ideal_weight_max_kg": 37,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spinone Italiano",
    "species": "canine",
    "ideal_weight_min_kg": 28,
    "ideal_weight_max_kg": 37,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Cerebellar Ataxia",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Neurological exam"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Spotting Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Staffordshire Bull Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 17,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "CERF exam"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Standard Schnauzer",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Pancreatitis",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Low-fat diet"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Stephens Cur",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sussex Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Ear Infections (Otitis Externa)",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual CERF exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Swedish Lapphund",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Swedish Vallhund",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 14,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Swiss Hound",
    "species": "canine",
    "ideal_weight_min_kg": 15,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Taiwan Dog",
    "species": "canine",
    "ideal_weight_min_kg": 12,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Teddy Roosevelt Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Allergies",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Thai Bangkaew Dog",
    "species": "canine",
    "ideal_weight_min_kg": 13,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Thai Ridgeback",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Dermoid Sinus",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Surgical removal"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tibetan Mastiff",
    "species": "canine",
    "ideal_weight_min_kg": 36,
    "ideal_weight_max_kg": 73,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy at spay/neuter"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Monitor for lameness"
        },
        {
          "condition": "Cruciate Ligament Rupture",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Weight management; orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tibetan Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tibetan Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 8,
    "ideal_weight_max_kg": 12,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "CERF exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tolling Retriever",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tosa",
    "species": "canine",
    "ideal_weight_min_kg": 40,
    "ideal_weight_max_kg": 60,
    "life_expectancy": 10,
    "senior_classification_age": 6,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Panosteitis",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Radiographs during growth"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Toy Fox Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Transylvanian Hound",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 31,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Treeing Cur",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Treeing Tennessee Brindle",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 23,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Treeing Walker Coonhound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Gastropexy discussion"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Trigg Hound",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tyrolean Hound",
    "species": "canine",
    "ideal_weight_min_kg": 14,
    "ideal_weight_max_kg": 22,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Vizsla",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Volpino Italiano",
    "species": "canine",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Walloon Shepherd Dog",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 32,
    "life_expectancy": 13,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Weimaraner",
    "species": "canine",
    "ideal_weight_min_kg": 25,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Welsh Springer Spaniel",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Ear Infections (Otitis Externa)",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Cataracts",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual CERF exam"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Welsh Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 10,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "West Highland White Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 6,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Craniomandibular Osteopathy",
          "onsetAgeMonths": 4,
          "severity": 2,
          "screening": "Jaw radiographs"
        },
        {
          "condition": "Pulmonary Fibrosis",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Thoracic radiographs"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Wetterhoun",
    "species": "canine",
    "ideal_weight_min_kg": 16,
    "ideal_weight_max_kg": 25,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Whippet",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 16,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Anesthesia Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Use propofol"
        },
        {
          "condition": "Mitral Valve Disease",
          "onsetAgeMonths": 96,
          "severity": 3,
          "screening": "Annual auscultation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "White Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 22,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 12,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 60,
          "severity": 3,
          "screening": "Annual lameness evaluation"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Wire Fox Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Allergies (Atopic Dermatitis)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Allergy testing"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Wirehaired Pointing Griffon",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neurological evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Wirehaired Vizsla",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA"
        },
        {
          "condition": "Epilepsy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Neuro eval"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Xoloitzcuintli",
    "species": "canine",
    "ideal_weight_min_kg": 7,
    "ideal_weight_max_kg": 20,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Dental/Skin care for hairless"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Xoloitzcuintli (Miniature)",
    "species": "canine",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Xoloitzcuintli (Standard)",
    "species": "canine",
    "ideal_weight_min_kg": 9,
    "ideal_weight_max_kg": 18,
    "life_expectancy": 13,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Xoloitzcuintli (Toy)",
    "species": "canine",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Yorkshire Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 14,
    "senior_classification_age": 12,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Tracheal Collapse",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Cervical radiographs; use harness"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        },
        {
          "condition": "Hypoglycemia",
          "onsetAgeMonths": 3,
          "severity": 3,
          "screening": "Blood glucose monitoring in puppies"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Zaupal Hound",
    "species": "canine",
    "ideal_weight_min_kg": 18,
    "ideal_weight_max_kg": 28,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        },
        {
          "condition": "Ear Infections",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Weekly ear cleaning"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Abyssinian",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; ophthalmic exam"
        },
        {
          "condition": "Renal Amyloidosis",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "BUN/Creat/SDMA monitoring"
        },
        {
          "condition": "Gingivitis",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Bobtail",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Curl",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypertrophic Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual echocardiogram"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "American Wirehair",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Australian Mist",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Balinese",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Ophthalmic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bengal",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "DNA test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Birman",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echocardiogram"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Bombay",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hyperthyroidism",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Annual T4 screening"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Brazilian Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "British Longhair",
    "species": "feline",
    "ideal_weight_min_kg": 4.5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echo"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "British Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Polycystic Kidney Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; renal ultrasound"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Burmese",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Hypokalaemia",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Serum potassium monitoring"
        },
        {
          "condition": "Diabetes Mellitus",
          "onsetAgeMonths": 72,
          "severity": 2,
          "screening": "Glucose screening"
        },
        {
          "condition": "Orofacial Pain Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Oral exam"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Burmilla",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "California Spangled",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Celtic Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chantilly-Tiffany",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chartreux",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Chausie",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Colorpoint Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cornish Rex",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 24,
          "severity": 1,
          "screening": "Radiographs"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Cymric",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Manx Syndrome (Spina Bifida)",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Neurological exam in kittens"
        },
        {
          "condition": "Arthritis",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Joint evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Devon Rex",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Patellar Luxation",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Domestic Longhair",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Diabetes Mellitus",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Glucose monitoring"
        },
        {
          "condition": "Chronic Kidney Disease",
          "onsetAgeMonths": 108,
          "severity": 2,
          "screening": "Senior bloodwork"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Domestic Medium Hair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Domestic Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Diabetes Mellitus",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Glucose monitoring"
        },
        {
          "condition": "Chronic Kidney Disease",
          "onsetAgeMonths": 108,
          "severity": 2,
          "screening": "Senior bloodwork"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Donskoy",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Dragon Li",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Egyptian Mau",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Umbilical Hernia",
          "onsetAgeMonths": 3,
          "severity": 1,
          "screening": "Physical exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "European Burmese",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hypokalaemia",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Serum potassium monitoring"
        },
        {
          "condition": "Diabetes Mellitus",
          "onsetAgeMonths": 72,
          "severity": 2,
          "screening": "Glucose monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "European Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Exotic Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Polycystic Kidney Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; renal ultrasound"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        }
      ],
      "contraindications": [
        "Hot/humid conditions: brachycephalic heat risk"
      ]
    }
  },
  {
    "name": "Foldex",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Osteochondrodysplasia",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Limb/tail rads if symptoms"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "German Rex",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Annual echo"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Havana Brown",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Himalayan",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Polycystic Kidney Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; renal ultrasound"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "BOAS evaluation"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        }
      ],
      "contraindications": [
        "Hot/humid conditions: brachycephalic heat risk"
      ]
    }
  },
  {
    "name": "Japanese Bobtail",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 4.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Javanese",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Khao Manee",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Deafness",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing if blue-eyed"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kinkalow",
    "species": "feline",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Lordosis",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Physical exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Korat",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 4.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Kurilian Bobtail",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "LaPerm",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lamkin",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Lykoi",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Maine Coon",
    "species": "feline",
    "ideal_weight_min_kg": 5,
    "ideal_weight_max_kg": 11,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "MyBPC3 DNA test; annual echocardiogram"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Radiographs"
        },
        {
          "condition": "Spinal Muscular Atrophy",
          "onsetAgeMonths": 3,
          "severity": 1,
          "screening": "DNA test"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Manx",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Manx Syndrome (Spina Bifida)",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "Neurological exam in kittens"
        },
        {
          "condition": "Arthritis",
          "onsetAgeMonths": 96,
          "severity": 2,
          "screening": "Joint evaluation"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Mekong Bobtail",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Minskin",
    "species": "feline",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Munchkin",
    "species": "feline",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Lordosis",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Radiographic evaluation"
        },
        {
          "condition": "Skeletal Abnormalities",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Nebelung",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Norwegian Forest Cat",
    "species": "feline",
    "ideal_weight_min_kg": 4.5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 24,
          "severity": 1,
          "screening": "Radiographs"
        },
        {
          "condition": "Glycogen Storage Disease IV",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "DNA test"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ocicat",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ojos Azules",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Congenital Defects",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "Careful breeding practices"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Oriental Longhair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "PRA",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Ophthalmic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Oriental Shorthair",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Ophthalmic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Persian",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Polycystic Kidney Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; renal ultrasound"
        },
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Ophthalmic exam"
        },
        {
          "condition": "Brachycephalic Syndrome",
          "onsetAgeMonths": 6,
          "severity": 3,
          "screening": "BOAS grading"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        },
        {
          "condition": "Dermatophytosis",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Fungal culture"
        }
      ],
      "contraindications": [
        "Hot/humid weather: heat stroke risk",
        "Daily eye cleaning needed for tear staining"
      ]
    }
  },
  {
    "name": "Peterbald",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echo"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        },
        {
          "condition": "Dental Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Pixiebob",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "RagaMuffin",
    "species": "feline",
    "ideal_weight_min_kg": 4.5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echo"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ragdoll",
    "species": "feline",
    "ideal_weight_min_kg": 4.5,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "MyBPC3 DNA test; annual echocardiogram"
        },
        {
          "condition": "Feline Idiopathic Cystitis",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Urinalysis; pH monitoring"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Russian Blue",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Savannah",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 9,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Annual echo"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Scottish Fold",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Osteochondrodysplasia",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Limb/tail radiographs; pain management"
        },
        {
          "condition": "Polycystic Kidney Disease",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; renal US"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Annual echocardiogram"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Selkirk Rex",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "Dermatitis",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Skin care"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Serengeti",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Seychellois",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Siberian",
    "species": "feline",
    "ideal_weight_min_kg": 4.5,
    "ideal_weight_max_kg": 8,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Singapura",
    "species": "feline",
    "ideal_weight_min_kg": 2,
    "ideal_weight_max_kg": 3.5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Skookum",
    "species": "feline",
    "ideal_weight_min_kg": 2.5,
    "ideal_weight_max_kg": 4,
    "life_expectancy": 13,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Skeletal Issues",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Orthopedic exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Snowshoe",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sokoke",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sokoto",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Somali",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "DNA test; ophthalmic exam"
        },
        {
          "condition": "Gingivitis",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Sphynx",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Periodontal Disease",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Dental prophylaxis q6mo"
        },
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        },
        {
          "condition": "Urinary Tract Infections",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Annual urinalysis"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Thai",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Annual echo"
        },
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Tonkinese",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5.5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        },
        {
          "condition": "HCM",
          "onsetAgeMonths": 24,
          "severity": 3,
          "screening": "Annual echo"
        },
        {
          "condition": "Gingivitis",
          "onsetAgeMonths": 12,
          "severity": 1,
          "screening": "Dental prophy"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Toyger",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Turkish Angora",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Ataxia (Cerebellar)",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Neurological exam"
        },
        {
          "condition": "Deafness",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing"
        },
        {
          "condition": "Hypertrophic Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual echocardiogram"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Turkish Van",
    "species": "feline",
    "ideal_weight_min_kg": 4,
    "ideal_weight_max_kg": 7,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hypertrophic Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual echocardiogram"
        },
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Ural Rex",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Skin Conditions",
          "onsetAgeMonths": 6,
          "severity": 1,
          "screening": "Dermatology"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "Welsh Cat",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitor"
        }
      ],
      "contraindications": []
    }
  },
  {
    "name": "York Chocolate",
    "species": "feline",
    "ideal_weight_min_kg": 3.5,
    "ideal_weight_max_kg": 6,
    "life_expectancy": 14,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Obesity",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "BCS monitoring"
        }
      ],
      "contraindications": []
    }
  },
{
    "name": "German Shepherd",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 40,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA hip scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 18,
          "severity": 2,
          "screening": "OFA elbow evaluation"
        },
        {
          "condition": "Degenerative Myelopathy",
          "onsetAgeMonths": 72,
          "severity": 3,
          "screening": "DNA test for SOD-1 mutation"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        },
        {
          "condition": "Exocrine Pancreatic Insufficiency",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "TLI blood test if symptoms"
        }
      ],
      "contraindications": [
        "Avoid elevated feeding (bloat risk); avoid strenuous exercise 1hr before/after meals"
      ]
    }
  },
{
    "name": "Doberman Pinscher",
    "species": "canine",
    "ideal_weight_min_kg": 30,
    "ideal_weight_max_kg": 45,
    "life_expectancy": 11,
    "senior_classification_age": 8,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Hip Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Elbow Dysplasia",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "OFA scoring"
        },
        {
          "condition": "Gastric Dilatation-Volvulus",
          "onsetAgeMonths": 12,
          "severity": 4,
          "screening": "Prophylactic gastropexy"
        },
        {
          "condition": "Osteosarcoma",
          "onsetAgeMonths": 48,
          "severity": 3,
          "screening": "Lameness evaluation"
        },
        {
          "condition": "Dilated Cardiomyopathy",
          "onsetAgeMonths": 36,
          "severity": 4,
          "screening": "Annual echocardiogram + Holter monitoring"
        },
        {
          "condition": "Von Willebrand's Disease",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "vWB antigen test before surgery"
        },
        {
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual T4/TSH"
        },
        {
          "condition": "Cervical Vertebral Instability",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Neurological exam; MRI if ataxia"
        }
      ],
      "contraindications": [
        "Avoid aspirin/NSAIDs without coagulopathy screen (vWB risk)"
      ]
    }
  },
{
    "name": "Bull Terrier",
    "species": "canine",
    "ideal_weight_min_kg": 20,
    "ideal_weight_max_kg": 30,
    "life_expectancy": 12,
    "senior_classification_age": 10,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Deafness (Congenital)",
          "onsetAgeMonths": 0,
          "severity": 2,
          "screening": "BAER testing in puppies"
        },
        {
          "condition": "Luxating Patella",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Orthopedic exam"
        },
        {
          "condition": "Heart Disease (Aortic Stenosis)",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Cardiac auscultation + echocardiogram"
        },
        {
          "condition": "Kidney Disease (Polycystic)",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual urinalysis + BUN/Creatinine"
        }
      ]
    }
  },
{
    "name": "Siamese",
    "species": "feline",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 15,
    "senior_classification_age": 11,
    "alert_rules": {
      "predispositions": [
        {
          "condition": "Progressive Retinal Atrophy",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "DNA test; annual ophthalmic exam"
        },
        {
          "condition": "Asthma",
          "onsetAgeMonths": 24,
          "severity": 2,
          "screening": "Respiratory exam; thoracic radiographs if coughing"
        },
        {
          "condition": "Gastrointestinal Lymphoma",
          "onsetAgeMonths": 96,
          "severity": 3,
          "screening": "Annual wellness; FIV/FeLV negative status"
        },
        {
          "condition": "Amyloidosis (Hepatic/Renal)",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "Annual BUN/Creatinine; liver enzymes"
        },
        {
          "condition": "Megaesophagus",
          "onsetAgeMonths": 6,
          "severity": 2,
          "screening": "Thoracic radiographs if regurgitation"
        }
      ]
    }
  }
];
