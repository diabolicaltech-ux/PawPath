/**
 * Breed-to-Body-Type mapping for BCS silhouette selection.
 * Based on clinical review: /home/team/shared/bcs-breed-categories.md
 * 
 * Canine body types: lean | standard | broad | dachshund
 */

export type CanineBodyType = 'lean' | 'standard' | 'broad' | 'dachshund';
export type BodyType = CanineBodyType;

// Maps breed name (case-insensitive partial match) to body type
// Ordered by specificity — check exact matches first, then prefixes
const CANINE_BODY_MAP: Record<string, CanineBodyType> = {
  // === Toy / Companion → standard (small scale) ===
  'Yorkshire Terrier': 'standard',
  'Cavalier King Charles Spaniel': 'standard',
  'Chihuahua': 'standard',
  'Pomeranian': 'standard',
  'Maltese': 'standard',
  'Papillon': 'standard',
  'Poodle (Toy)': 'standard',
  'Pekingese': 'standard',
  'Shih Tzu': 'standard',
  'Havanese': 'standard',
  'Italian Greyhound': 'lean', // exception: fine-boned sighthound
  'Miniature Pinscher': 'standard',
  'Brussels Griffon': 'standard',

  // === Dachshund-type ===
  'Dachshund': 'dachshund',
  'Pembroke Welsh Corgi': 'dachshund',
  'Cardigan Welsh Corgi': 'dachshund',
  'Basset Hound': 'dachshund',
  'Dandie Dinmont Terrier': 'dachshund',
  'Skye Terrier': 'dachshund',
  'Scottish Terrier': 'dachshund',
  'Swedish Vallhund': 'dachshund',
  'Lancashire Heeler': 'dachshund',

  // === Stocky / Bully → broad ===
  'Bulldog': 'broad',
  'French Bulldog': 'broad',
  'Boston Terrier': 'broad',
  'Pug': 'broad',
  'American Pit Bull Terrier': 'broad',
  'American Staffordshire Terrier': 'broad',
  'Staffordshire Bull Terrier': 'broad',
  'Boxer': 'broad',
  'Cane Corso': 'broad',
  'Dogue de Bordeaux': 'broad',
  'Bullmastiff': 'broad',
  'English Mastiff': 'broad',
  'Neapolitan Mastiff': 'broad',
  'Shar-Pei': 'broad',
  'Chow Chow': 'broad',

  // === Athletic / Mesomorphic → standard ===
  'Labrador Retriever': 'standard',
  'Golden Retriever': 'standard',
  'German Shepherd Dog': 'standard',
  'German Shepherd': 'standard',
  'Border Collie': 'standard',
  'Poodle (Standard)': 'standard',
  'Poodle (Miniature)': 'standard',
  'Australian Shepherd': 'standard',
  'English Springer Spaniel': 'standard',
  'Cocker Spaniel': 'standard',
  'American Cocker Spaniel': 'standard',
  'Beagle': 'standard',
  'Shetland Sheepdog': 'standard',
  'Collie': 'standard',
  'Dalmatian': 'standard',
  'Weimaraner': 'standard',
  'Vizsla': 'standard',
  'Rhodesian Ridgeback': 'standard',
  'Doberman Pinscher': 'standard',
  'Rottweiler': 'standard',
  'Bernese Mountain Dog': 'standard',
  'Brittany': 'standard',
  'Pointer': 'standard',
  'Belgian Malinois': 'standard',

  // === Lean / Sighthound ===
  'Greyhound': 'lean',
  'Whippet': 'lean',
  'Saluki': 'lean',
  'Afghan Hound': 'lean',
  'Borzoi': 'lean',
  'Irish Wolfhound': 'lean',
  'Scottish Deerhound': 'lean',
  'Ibizan Hound': 'lean',
  'Pharaoh Hound': 'lean',
  'Azawakh': 'lean',
  'Sloughi': 'lean',
  'German Shorthaired Pointer': 'lean', // lean athletic, not sighthound but deep-chested
  'Cirneco dell\'Etna': 'lean',
  'Magyar Agar': 'lean',

  // === Giant / Heavy → broad ===
  'Great Dane': 'broad',
  'Saint Bernard': 'broad',
  'Newfoundland': 'broad',
  'Leonberger': 'broad',
  'Tibetan Mastiff': 'broad',
  'Great Pyrenees': 'broad',
  'Anatolian Shepherd': 'broad',
  'Komondor': 'broad',
  'Black Russian Terrier': 'broad',
  'Boerboel': 'broad',
  'Kangal': 'broad',
  'Landseer': 'broad',

  // === Spitz / Northern → standard ===
  'Siberian Husky': 'standard',
  'Alaskan Malamute': 'standard',
  'Samoyed': 'standard',
  'Akita': 'standard',
  'Shiba Inu': 'standard',
  'Japanese Spitz': 'standard',
  'Finnish Lapphund': 'standard',
  'Norwegian Buhund': 'standard',
  'Icelandic Sheepdog': 'standard',
  'Keeshond': 'standard',
  'American Eskimo Dog': 'standard',
};


/**
 * Look up a breed's body type by name.
 * Does exact match first, then tries partial prefix match.
 * Falls back to 'standard' if no match found.
 */
export function getBodyType(breedName: string, species: 'canine' = 'canine'): BodyType {
  const map = CANINE_BODY_MAP;
  
  // Exact match
  if (map[breedName]) return map[breedName];
  
  // Try matching by breed name prefix (handles "(Standard)", "(Miniature)", etc.)
  // Use the word before the first parenthesis as the base name
  const baseName = breedName.replace(/\s*\(.*/, '').trim();
  if (baseName !== breedName && map[baseName]) return map[baseName];
  
  // Try matching as a substring of a key
  for (const key of Object.keys(map)) {
    if (key.startsWith(baseName) || baseName.startsWith(key)) {
      return map[key];
    }
  }
  
  // Also check if breedName contains common keywords
  if (species === 'canine') {
    const lower = breedName.toLowerCase();
    if (lower.includes('greyhound') || lower.includes('whippet') || lower.includes('saluki') ||
        lower.includes('hound') && (lower.includes('afghan') || lower.includes('borzoi') || lower.includes('ibizan'))) {
      return 'lean';
    }
    if (lower.includes('dachshund') || lower.includes('corgi') || lower.includes('basset')) {
      return 'dachshund';
    }
    if (lower.includes('bulldog') || lower.includes('mastiff') || lower.includes('boxer') ||
        lower.includes('pug') || lower.includes('corso') || lower.includes('dogue') ||
        lower.includes('bullmastiff') || lower.includes('bully') || lower.includes('staffordshire')) {
      return 'broad';
    }
    if (lower.includes('poodle')) {
      return 'standard';
    }
  } else {
    const lower = breedName.toLowerCase();
    if (lower.includes('siamese') || lower.includes('oriental') || lower.includes('sphynx') ||
        lower.includes('rex') || lower.includes('balinese') || lower.includes('javanese')) {
      return 'lean';
    }
    if (lower.includes('persian') || lower.includes('british') || lower.includes('scottish') ||
        lower.includes('exotic') || lower.includes('himalayan') || lower.includes('selkirk') ||
        lower.includes('chartreux') || lower.includes('bobtail') || lower.includes('manx') ||
        lower.includes('cymric')) {
      return 'broad';
    }
    if (lower.includes('maine') || lower.includes('norwegian') || lower.includes('siberian') ||
        lower.includes('ragdoll') || lower.includes('ragamuffin') || lower.includes('bengal') ||
        lower.includes('chausie') || lower.includes('savannah') || lower.includes('pixiebob')) {
      return 'broad';
    }
  }
  
  return 'standard';
}