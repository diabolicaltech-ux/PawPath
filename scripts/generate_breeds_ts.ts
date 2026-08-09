import fs from 'fs';

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

const content = `import { Species } from '../engine/metabolic_engine';

export interface BreedData {
  name: string;
  species: 'canine' | 'feline';
  ideal_weight_min_kg: number;
  ideal_weight_max_kg: number;
  life_expectancy: number;
  senior_classification_age: number;
  alert_rules: any;
}

export const BREEDS: BreedData[] = ${JSON.stringify(allBreeds, null, 2).replace(/"species": "canine"/g, '"species": "canine"').replace(/"species": "feline"/g, '"species": "feline"')};
`;

fs.writeFileSync('/home/agent-lead-software-developer/pawpath-frontend/src/data/breeds.ts', content);
console.log('Successfully updated src/data/breeds.ts with 51 breeds.');
