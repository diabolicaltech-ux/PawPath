import { readFileSync, writeFileSync } from 'fs';

const filePath = '/home/team/shared/implementation_v1/src/data/breeds.ts';
let content = readFileSync(filePath, 'utf-8');

// 1. Fix "American Bull Dog" → "American Bulldog"
content = content.replace('"name": "American Bull Dog"', '"name": "American Bulldog"');

// 2. Merge Dobermann into Doberman Pinscher
// The Dobermann block has predispositions: Hip Dysplasia, Elbow Dysplasia, GDV, Dilated Cardiomyopathy, Osteosarcoma, Hypothyroidism
// The Doberman Pinscher already has: Dilated Cardiomyopathy, Von Willebrand's, Hypothyroidism, Cervical Vertebral Instability
// We need to add the missing ones from Dobermann: Hip Dysplasia, Elbow Dysplasia, GDV, Osteosarcoma
// And upgrade DCM screening to the more specific one from Dobermann

// Add new predispositions to Doberman Pinscher's array (before the closing bracket of predispositions)
// The missing conditions from Dobermann: Hip Dysplasia, Elbow Dysplasia, GDV, Osteosarcoma
// DCM already exists (use the more detailed screening from Doberman Pinscher which is better)
// Hypothyroidism already exists

const dobermanPinscherPredispositions = [
  {
    condition: "Hip Dysplasia",
    onsetAgeMonths: 12,
    severity: 2,
    screening: "OFA scoring"
  },
  {
    condition: "Elbow Dysplasia",
    onsetAgeMonths: 12,
    severity: 2,
    screening: "OFA scoring"
  },
  {
    condition: "Gastric Dilatation-Volvulus",
    onsetAgeMonths: 12,
    severity: 4,
    screening: "Prophylactic gastropexy"
  },
  {
    condition: "Osteosarcoma",
    onsetAgeMonths: 48,
    severity: 3,
    screening: "Lameness evaluation"
  }
];

// Insert these after the last existing predisposition in Doberman Pinscher
// Find the Doberman Pinscher predispositions block
const dpPattern = `"name": "Doberman Pinscher",\\s*"species": "canine",\\s*"ideal_weight_min_kg": 30,\\s*"ideal_weight_max_kg": 45,\\s*"life_expectancy": 11,\\s*"senior_classification_age": 8,\\s*"alert_rules": \\{\\s*"predispositions": \\[`;
const dpMatch = content.match(new RegExp(dpPattern));
if (dpMatch) {
  // Find the end of the predispositions array in Doberman Pinscher
  // The array ends with the last entry before the closing ]
  const afterDp = content.slice(dpMatch.index + dpMatch[0].length);
  // Find the first ], that closes the predispositions array
  // We need to find the closing ] of the predispositions array
  let depth = 0;
  let endIdx = 0;
  for (let i = 0; i < afterDp.length; i++) {
    if (afterDp[i] === '[' || afterDp[i] === '{') depth++;
    if (afterDp[i] === ']' || afterDp[i] === '}') {
      depth--;
      if (depth === 0 && afterDp[i] === ']') {
        endIdx = i;
        break;
      }
    }
  }
  // Insert new predispositions just before the closing ]
  const insertPos = dpMatch.index + dpMatch[0].length + endIdx;
  const newEntries = dobermanPinscherPredispositions.map((p, i) => {
    const comma = i < dobermanPinscherPredispositions.length - 1 ? ',' : '';
    return `        {
          "condition": "${p.condition}",
          "onsetAgeMonths": ${p.onsetAgeMonths},
          "severity": ${p.severity},
          "screening": "${p.screening}"
        }${comma}`;
  }).join(',\n');
  content = content.slice(0, insertPos) + ',\n' + newEntries + content.slice(insertPos);
  console.log('Added Dobermann predispositions to Doberman Pinscher');
}

// Remove the Dobermann entry (lines 5210-5260)
// Match the full Dobermann block
const dobermannPattern = /  \{\s*\n\s*"name": "Dobermann",[\s\S]*?"contraindications": \[\]\s*\n\s*\}\s*\n\s*\},?\n\s*\{/;
const dobermannMatch = content.match(dobermannPattern);
if (dobermannMatch) {
  // Replace the Dobermann block + the following comma/brace
  const replacement = '  {';
  content = content.slice(0, dobermannMatch.index) + replacement + content.slice(dobermannMatch.index + dobermannMatch[0].length);
  console.log('Removed Dobermann duplicate entry');
}

// 3-4. Deduplicate Hip Dysplasia in Akita, Alaskan Malamute, Chow Chow
// And deduplicate Obesity in Maine Coon
const dedupTargets = [
  { breed: 'Akita', condition: 'Hip Dysplasia' },
  { breed: 'Alaskan Malamute', condition: 'Hip Dysplasia' },
  { breed: 'Chow Chow', condition: 'Hip Dysplasia' },
  { breed: 'Maine Coon', condition: 'Obesity' }
];

for (const target of dedupTargets) {
  // Find the breed entry
  const breedPattern = new RegExp(`"name": "${target.breed}"[\\s\\S]*?"predispositions": \\[`);
  const breedMatch = content.match(breedPattern);
  if (breedMatch) {
    const start = breedMatch.index + breedMatch[0].length;
    // Find the matching ] for predispositions
    let depth = 0;
    let endIdx = -1;
    const sub = content.slice(start);
    for (let i = 0; i < sub.length; i++) {
      if (sub[i] === '[' || sub[i] === '{') depth++;
      if (sub[i] === ']' || sub[i] === '}') {
        depth--;
        if (depth === 0 && sub[i] === ']') {
          endIdx = i;
          break;
        }
      }
    }
    if (endIdx > 0) {
      const predispositionsBlock = sub.slice(0, endIdx);
      // Find duplicates of the condition
      const condRegex = new RegExp(`"condition": "${target.condition}"`, 'g');
      const matches = [...predispositionsBlock.matchAll(condRegex)];
      if (matches.length > 1) {
        // Remove the duplicate entries (keep the first one)
        // Find the second occurrence and remove it
        const secondMatch = matches[1];
        // Find the full block of the second occurrence
        const blockStart = start + secondMatch.index;
        // Find the end of this block (the next }, or the end of the array)
        const afterSecond = predispositionsBlock.slice(secondMatch.index + secondMatch[0].length);
        // Go back to find the start of the block (find the preceding {)
        const beforeSecond = predispositionsBlock.slice(0, secondMatch.index);
        const lastOpenBrace = beforeSecond.lastIndexOf('{');
        const blockStartRelative = lastOpenBrace;
        
        // Find the matching } for this block
        let d = 0;
        let blockEnd = -1;
        for (let i = blockStartRelative; i < predispositionsBlock.length; i++) {
          if (predispositionsBlock[i] === '{') d++;
          if (predispositionsBlock[i] === '}') {
            d--;
            if (d === 0) {
              blockEnd = i;
              break;
            }
          }
        }
        if (blockEnd > 0) {
          // Remove from the start of the duplicate block to its end
          // Plus the comma after it
          let removeStart = start + blockStartRelative;
          let removeEnd = start + blockEnd + 1;
          // Remove the comma before the block (if not first entry)
          // Or the comma after it
          // Look for a leading comma
          const beforeChar = content.slice(removeStart - 1, removeStart);
          if (beforeChar === ',') {
            removeStart = removeStart - 1;
          } else {
            // Check for trailing comma
            const afterChar = content.slice(removeEnd, removeEnd + 1);
            if (afterChar === ',') {
              removeEnd = removeEnd + 1;
            }
          }
          content = content.slice(0, removeStart) + content.slice(removeEnd);
          console.log(`Removed duplicate "${target.condition}" in ${target.breed}`);
        }
      }
    }
  }
}

// 5. Add BOAS to French Bulldog, Boston Terrier, Pug, Shih Tzu
const boasEntry = `        {
          "condition": "Brachycephalic Airway Syndrome",
          "onsetAgeMonths": 6,
          "severity": 4,
          "screening": "BOAS grading by veterinarian"
        }`;

const boasBreeds = [
  { name: 'French Bulldog', add: true },
  { name: 'Boston Terrier', add: true },
  { name: 'Pug', add: null }, // check if already has it
  { name: 'Shih Tzu', add: null }  // check if already has it
];

for (const breed of boasBreeds) {
  const breedPattern = new RegExp(`"name": "${breed.name}"[\\s\\S]*?"predispositions": \\[`);
  const breedMatch = content.match(breedPattern);
  if (breedMatch) {
    const start = breedMatch.index + breedMatch[0].length;
    const sub = content.slice(start);
    let depth = 0;
    let endIdx = -1;
    for (let i = 0; i < sub.length; i++) {
      if (sub[i] === '[' || sub[i] === '{') depth++;
      if (sub[i] === ']' || sub[i] === '}') {
        depth--;
        if (depth === 0 && sub[i] === ']') {
          endIdx = i;
          break;
        }
      }
    }
    if (endIdx > 0) {
      const predispositionsBlock = sub.slice(0, endIdx);
      const hasBoas = predispositionsBlock.includes('Brachycephalic Airway Syndrome');
      
      if (breed.add === false) {
        // Skip if explicitly told not to add
      } else if (hasBoas) {
        console.log(`${breed.name} already has BOAS — skipping`);
      } else {
        // Insert BOAS before the closing ]
        const insertPos = start + endIdx;
        // Check if predispositions array is empty
        const isEmpty = predispositionsBlock.trim().length === 0;
        const prefix = isEmpty ? '\n' + boasEntry : ',\n' + boasEntry;
        content = content.slice(0, insertPos) + prefix + content.slice(insertPos);
        console.log(`Added BOAS to ${breed.name}`);
      }
    }
  }
}

writeFileSync(filePath, content, 'utf-8');
console.log('Done!');