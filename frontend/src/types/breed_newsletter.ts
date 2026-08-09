/**
 * PawPath Breed Newsletter Types
 * 
 * Extends breed data with newsletter content for the breed-specific
 * newsletter feature on each pet's dashboard.
 * 
 * Schema reviewed by Clinical Supervisor. All content clinically reviewed
 * for breed safety.
 */

/**
 * A single newsletter content item — one breed's complete newsletter data.
 */
export interface BreedNewsletter {
  /** Matches breed name in BREEDS array */
  breedName: string;
  /** Matches species */
  species: 'canine';

  // Review workflow status
  /** Review status: draft → vet_reviewed → approved */
  reviewStatus: 'draft' | 'vet_reviewed' | 'approved';
  /** Who reviewed the content (Senior Veterinary Reviewer name) */
  reviewedBy?: string;
  /** Date of last review */
  reviewDate?: string;
  /** Clinical Supervisor approval timestamp */
  approvedDate?: string;

  /** 1. Breed Origin & History */
  origin: {
    /** Where the breed was developed (country/region) */
    region: string;
    /** Original purpose (e.g., "hunting companion", "herding livestock") */
    originalPurpose: string;
    /** Century or approximate year of development */
    developed: string;
    /** Short paragraph (1-3 sentences) about breed history */
    summary: string;
    /** Fun fact (1 sentence, engaging) */
    funFact: string;
  };

  /** 2. Common Activities — what this breed enjoys doing */
  activities: {
    /** Primary activity type (1-3 items) */
    primary: string[];
    /** Secondary activity type (2-4 items) */
    secondary: string[];
    /** Activities to AVOID for this breed (with clinical reason) */
    avoid: { activity: string; reason: string }[];
    /** Weekly activity time recommendation (minutes) */
    weeklyMinutesMin: number;
    weeklyMinutesMax: number;
  };

  /** 3. Recommended Treats — healthy, breed-appropriate options */
  treats: {
    /** Healthy treat options */
    recommended: {
      name: string;
      type: 'vegetable' | 'fruit' | 'protein' | 'dental' | 'commercial';
      description: string;
      /** Serving size note specific to breed size */
      servingNote: string;
    }[];
    /** Treats to AVOID for this breed */
    avoid: { name: string; reason: string }[];
    /** Max daily treat calories (based on breed size) */
    maxDailyTreatCalories: number;
  };

  /** 4. Recommended Toys — breed-appropriate toy types */
  toys: {
    /** Recommended toy types */
    recommended: {
      category: string;
      examples: string[];
      description: string;
    }[];
    /** Toy types to avoid */
    avoid: { toy: string; reason: string }[];
    /** Suitability scores (1-5) */
    suitability: {
      fetch: number;
      chew: number;
      puzzle: number;
      cuddle: number;
      agility: number;
      swim: number;
      tug: number;
    };
  };

  /** 5. Training Tips — breed-specific training advice */
  training: {
    /** Trainability rating (1-5, 5=easiest) */
    trainability: number;
    /** Key motivators for this breed */
    motivators: string[];
    /** Common training challenges */
    challenges: { issue: string; solution: string }[];
    /** Recommended training approach */
    approach: string;
    /** Best age to start specific training */
    criticalTrainingWindows: { age: string; focus: string }[];
  };

  /** 6. Seasonal Activities — what to do each season */
  seasonal: {
    spring: { activities: string[]; precautions: string[] };
    summer: { activities: string[]; precautions: string[] };
    fall: { activities: string[]; precautions: string[] };
    winter: { activities: string[]; precautions: string[] };
  };

  /** Breed-specific health cautions relevant to activities/treats */
  healthCautions: string[];
}

/**
 * Data structure for the newsletter content file.
 * Each breed gets one entry.
 */
export interface BreedNewsletterCollection {
  version: string;
  lastUpdated: string;
  reviewedBy: string;
  entries: BreedNewsletter[];
}