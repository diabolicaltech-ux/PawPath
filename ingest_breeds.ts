import { Species } from '../src/engine/metabolic_engine';
import fs from 'fs';

interface AlertRule {
  condition: string;
  onsetAgeMonths: number;
  severity: number;
  screening: string;
}

interface BreedData {
  name: string;
  species: Species;
  ideal_weight_min_kg: number;
  ideal_weight_max_kg: number;
  life_expectancy?: number;
  senior_classification_age?: number;
  alert_rules: {
    predispositions: AlertRule[];
    contraindications?: string[];
  };
}

const SPECIES_DEFAULTS = {
  [Species.CANINE]: {
    life_expectancy: 12,
    senior_classification_age: 8
  },
  [Species.FELINE]: {
    life_expectancy: 15,
    senior_classification_age: 11
  }
};

function validateBreed(breed: any): breed is BreedData {
  if (!breed.name || typeof breed.name !== 'string') return false;
  if (![Species.CANINE, Species.FELINE].includes(breed.species)) return false;
  if (typeof breed.ideal_weight_min_kg !== 'number' || breed.ideal_weight_min_kg < 0) return false;
  if (typeof breed.ideal_weight_max_kg !== 'number' || breed.ideal_weight_max_kg < breed.ideal_weight_min_kg) return false;
  if (breed.alert_rules && !Array.isArray(breed.alert_rules.predispositions)) return false;
  return true;
}

const paths = [
  '/home/team/shared/breed_data/canine_breeds.json',
  '/home/team/shared/breed_data/feline_breeds.json'
];

let allBreeds: any[] = [];
paths.forEach(path => {
  if (fs.existsSync(path)) {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    allBreeds = allBreeds.concat(data);
  }
});

console.log(`-- PawPath Breed Ingestion Script`);
console.log(`-- Found ${allBreeds.length} breeds to process.`);

allBreeds.forEach((breed: any) => {
  if (!validateBreed(breed)) {
    console.error(`-- SKIP: Invalid breed data for ${breed.name || 'unknown'}`);
    return;
  }

  const defaults = SPECIES_DEFAULTS[breed.species];
  const lifeExp = breed.life_expectancy ?? defaults.life_expectancy;
  const seniorAge = breed.senior_classification_age ?? defaults.senior_classification_age;

  const sql = `INSERT INTO breeds (species, name, ideal_weight_min_kg, ideal_weight_max_kg, life_expectancy, senior_classification_age, alert_rules)
VALUES (
  '${breed.species}', 
  '${breed.name.replace(/'/g, "''")}', 
  ${breed.ideal_weight_min_kg}, 
  ${breed.ideal_weight_max_kg}, 
  ${lifeExp}, 
  ${seniorAge}, 
  '${JSON.stringify(breed.alert_rules).replace(/'/g, "''")}'
)
ON CONFLICT (species, name) 
DO UPDATE SET 
  ideal_weight_min_kg = EXCLUDED.ideal_weight_min_kg,
  ideal_weight_max_kg = EXCLUDED.ideal_weight_max_kg,
  life_expectancy = EXCLUDED.life_expectancy,
  senior_classification_age = EXCLUDED.senior_classification_age,
  alert_rules = EXCLUDED.alert_rules;`;

  console.log(sql);
});
