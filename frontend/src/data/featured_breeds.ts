/**
 * Lightweight featured breed data for the public landing page.
 *
 * This is a curated subset of the full breed newsletter data — just the fields
 * the landing page's "Featured Breed Guides" section needs for 3 showcase
 * breeds. Keeping this separate avoids pulling the full 253KB
 * breed_newsletter_data.ts into the initial bundle for anonymous visitors.
 *
 * Source: first 3 canine entries from breed_newsletter_data.ts
 * (Labrador Retriever, Golden Retriever, German Shepherd Dog).
 */

export interface FeaturedBreed {
  breedName: string;
  image: string;
  species: string;
  origin: {
    region: string;
    originalPurpose: string;
    summary: string;
  };
  activities: {
    primary: string[];
    weeklyMinutesMin: number;
    weeklyMinutesMax: number;
  };
  training: {
    trainability: number;
  };
  healthCautions: string[];
}

export const FEATURED_BREEDS: FeaturedBreed[] = [
  {
    breedName: "Labrador Retriever",
    image: "/breed-images/labrador-retriever.svg",
    species: "canine",
    origin: {
      region: "Newfoundland, Canada",
      originalPurpose: "Fishing and retrieving companion for fishermen",
      summary:
        "The Labrador Retriever originated in Newfoundland, Canada, where they worked alongside fishermen retrieving nets and fish that escaped from hooks. The breed was refined in England in the 1800s and became one of the most popular family dogs in the world.",
    },
    activities: {
      primary: ["Swimming", "Fetch", "Retrieving games"],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 420,
    },
    training: { trainability: 4 },
    healthCautions: [
      "Prone to obesity — monitor calorie intake closely, especially treats",
      "High risk of hip and elbow dysplasia — maintain lean body condition",
      "Prone to ear infections — check and clean ears weekly, especially after swimming",
      "Exercise-induced collapse (EIC) — genetic condition; avoid overexertion in hot weather",
    ],
  },
  {
    breedName: "Golden Retriever",
    image: "/breed-images/golden-retriever.svg",
    species: "canine",
    origin: {
      region: "Scotland, United Kingdom",
      originalPurpose: "Retrieving waterfowl for hunters",
      summary:
        "The Golden Retriever was developed in the Scottish Highlands by crossing the now-extinct Yellow Retriever with the Tweed Water Spaniel and later infusions of Bloodhound and Irish Setter. They were bred specifically for retrieving game from both water and land.",
    },
    activities: {
      primary: ["Retrieving", "Swimming", "Hiking"],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 420,
    },
    training: { trainability: 5 },
    healthCautions: [
      "High cancer rate — monitor for unusual lumps, especially hemangiosarcoma",
      "Prone to hip and elbow dysplasia — maintain lean body condition",
      "High risk of skin allergies and ear infections",
      "Progressive retinal atrophy (PRA) — annual eye exams recommended",
    ],
  },
  {
    breedName: "German Shepherd Dog",
    image: "/breed-images/german-shepherd-dog.svg",
    species: "canine",
    origin: {
      region: "Germany",
      originalPurpose: "Herding and guarding sheep",
      summary:
        "The German Shepherd Dog was developed in the late 1800s by Captain Max von Stephanitz, who sought to create the ideal working dog. The breed was standardized from various herding dogs in Germany and quickly became valued for police, military, and service work worldwide.",
    },
    activities: {
      primary: ["Protection sports", "Agility", "Scent work"],
      weeklyMinutesMin: 280,
      weeklyMinutesMax: 560,
    },
    training: { trainability: 5 },
    healthCautions: [
      "Very high risk of hip and elbow dysplasia — OFA certification recommended",
      "Prone to degenerative myelopathy — a progressive spinal cord disease",
      "Bloat (GDV) — high risk in deep-chested breeds; consider prophylactic gastropexy",
      "Exocrine pancreatic insufficiency (EPI) — common in GSDs",
    ],
  },
];
