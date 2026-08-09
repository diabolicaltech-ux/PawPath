import { Species } from '../engine/metabolic_engine';

export interface BreedData {
  name: string;
  species: 'canine';
  ideal_weight_min_kg: number;
  ideal_weight_max_kg: number;
  life_expectancy: number;
  senior_classification_age: number;
  alert_rules: any;
}

export const BREEDS: BreedData[] = [
{
    "name": "Affenpinscher",
    "species": "canine",
    "ideal_weight_min_kg": 3,
    "ideal_weight_max_kg": 5,
    "life_expectancy": 12,
    "senior_classification_age": 8,
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
          "condition": "Brachycephalic Airway Syndrome (BOAS)",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Veterinary upper airway assessment"
        }
      ],
      "contraindications": [
        "Brachycephalic breed: Avoid overexertion in hot/humid weather; use harness instead of neck collar to protect trachea."
      ]
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
                },
        {
                  "condition": "Brachycephalic Airway Syndrome (BOAS)",
                  "onsetAgeMonths": 12,
                  "severity": 3,
                  "screening": "Brachycephalic breed screening"
                }
      ],
      "contraindications": [
        "Brachycephalic breed: Avoid overexertion in hot/humid weather; monitor breathing closely."
      ]
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
        },
        {
          "condition": "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC / Boxer Cardiomyopathy)",
          "onsetAgeMonths": 36,
          "severity": 4,
          "screening": "Annual 24-hour Holter monitor and echocardiogram"
        },
        {
          "condition": "Dilated Cardiomyopathy (DCM)",
          "onsetAgeMonths": 36,
          "severity": 4,
          "screening": "Annual echocardiogram and cardiac biomarker (nt-proBNP) testing"
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
    "senior_classification_age": 8,
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
        "Hot/humid exercise: heat stroke can be life-threatening; limit exertion, provide cooling and water, and seek veterinary care immediately if heat-stroke signs occur.",
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
                  "condition": "Brachycephalic Airway Syndrome (BOAS)",
                  "onsetAgeMonths": 12,
                  "severity": 3,
                  "screening": "Veterinary upper airway assessment"
                }
      ],
      "contraindications": [
        "Brachycephalic breed: Highly prone to heat stroke. Avoid strenuous exercise in hot or humid conditions; maintain ideal weight (BCS 4-5) to minimize respiratory effort.",
        "Acepromazine use: Use extreme caution; increased risk of severe bradycardia and respiratory depression in brachycephalic giant breeds."
      ]
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
        },
        {
          "condition": "Gastric Dilatation-Volvulus (GDV / Bloat)",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Prophylactic gastropexy discussion; feed multiple small meals"
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
    "senior_classification_age": 8,
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
          "condition": "Brachycephalic Airway Syndrome (BOAS)",
          "onsetAgeMonths": 12,
          "severity": 3,
          "screening": "Brachycephalic breed screening"
        }],
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
        },
        {
          "condition": "Gastric Dilatation-Volvulus (GDV / Bloat)",
          "onsetAgeMonths": 24,
          "severity": 4,
          "screening": "Prophylactic gastropexy discussion; feed multiple small meals"
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
                  "severity": 3,
                  "screening": "Annual dental prophylaxis"
                },
        {
                  "condition": "Hypoglycemia",
                  "onsetAgeMonths": 3,
                  "severity": 3,
                  "screening": "Blood glucose monitoring in puppies"
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
                },
        {
                  "condition": "Brachycephalic Airway Syndrome (BOAS)",
                  "onsetAgeMonths": 12,
                  "severity": 3,
                  "screening": "Brachycephalic breed screening"
                }
      ],
      "contraindications": [
        "Brachycephalic breed: Avoid overexertion in hot/humid weather; monitor breathing closely."
      ]
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
                  "condition": "MDR1 Drug Sensitivity",
                  "onsetAgeMonths": 0,
                  "severity": 4,
                  "screening": "MDR1 genetic test"
                }
      ],
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
          "condition": "Hypothyroidism",
          "onsetAgeMonths": 36,
          "severity": 2,
          "screening": "T4/TSH"
        }
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
                  "condition": "Cancer (Histiocytic Sarcoma)",
                  "onsetAgeMonths": 60,
                  "severity": 3,
                  "screening": "Annual CBC/chem"
                },
        {
                  "condition": "Gastric Dilatation-Volvulus (GDV)",
                  "onsetAgeMonths": 36,
                  "severity": 3,
                  "screening": "Prophylactic gastropexy discussion"
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
    "senior_classification_age": 8,
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
        },
        {
          "condition": "Brachycephalic Airway Syndrome (BOAS)",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "Veterinary upper airway assessment"
        }
      ],
      "contraindications": [
        "Brachycephalic breed: Prone to airway obstruction. Avoid tight neck collars (use harness); avoid overheating."
      ]
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
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
    "senior_classification_age": 8,
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 4,
          "screening": "MDR1 genetic DNA test"
        },
        {
          "condition": "Collie Eye Anomaly (CEA)",
          "onsetAgeMonths": 3,
          "severity": 2,
          "screening": "Ophthalmic screening"
        }
      ],
      "contraindications": [
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine/butorphanol unless genetically cleared."
      ]
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
          "screening": "Use propofol/isoflurane protocol; maintain active warming"
        },
        {
          "condition": "Mitral Valve Disease",
          "onsetAgeMonths": 96,
          "severity": 3,
          "screening": "Annual auscultation"
        },
        {
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "MDR1 genetic DNA test (specifically for long-haired lines)"
        }
      ],
      "contraindications": [
        "Sighthound anesthesia sensitivity: Avoid barbiturate anesthetics; monitor body temperature closely.",
        "MDR1 mutation risk: Avoid ivermectin, milbemycin, loperamide, and use reduced doses of acepromazine and butorphanol unless genetically cleared."
      ]
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
      ,
        {
          "condition": "Gastric Dilatation-Volvulus (GDV)",
          "onsetAgeMonths": 36,
          "severity": 3,
          "screening": "Prophylactic gastropexy discussion"
        }],
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
          "condition": "MDR1 Drug Sensitivity",
          "onsetAgeMonths": 0,
          "severity": 3,
          "screening": "MDR1 genetic DNA test"
        },
        {
          "condition": "Exocrine Pancreatic Insufficiency",
          "onsetAgeMonths": 12,
          "severity": 2,
          "screening": "TLI blood test if symptoms"
        }
      ],
      "contraindications": [
        "Avoid elevated feeding (bloat risk); avoid strenuous exercise 1hr before/after meals",
        "MDR1 mutation risk: Carry up to 10% carrier frequency. Avoid high-dose ivermectin/loperamide unless genetically cleared."
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
  }
].filter(b => b.species === 'canine');