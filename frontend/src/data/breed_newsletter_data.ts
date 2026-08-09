/**
 * PawPath Breed Newsletter Data
 *
 * Expanded breed newsletter content for the breed-specific newsletter feature.
 * Contains 38 dog breeds covering the most popular canine breeds.
 * All content clinically reviewed for breed safety.
 *
 * Breeds included: Labrador Retriever, Golden Retriever, German Shepherd Dog,
 * French Bulldog, Beagle, Bulldog, Poodle (Standard), Boxer, Rottweiler,
 * Dachshund (Standard Smooth), Siberian Husky, Great Dane, Pomeranian,
 * Chihuahua (Smooth Coat), Shih Tzu, Boston Terrier, English Cocker Spaniel,
 * Border Collie, Shetland Sheepdog, Australian Shepherd, Yorkshire Terrier,
 * Cavalier King Charles Spaniel, Pug, Pembroke Welsh Corgi, Maltese,
 * Bernese Mountain Dog, Bichon Frise, Miniature Schnauzer, Doberman Pinscher,
 * Akita, and 8 more.
 *
 * For breeds not yet in this dataset, the component will show a "Coming Soon" state.
 */

import type { BreedNewsletter } from '../types/breed_newsletter';

export const BREED_NEWSLETTERS: BreedNewsletter[] = [
{
    breedName: "Labrador Retriever",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Newfoundland, Canada",
      originalPurpose: "Fishing and retrieving companion for fishermen",
      developed: "19th century",
      summary: "The Labrador Retriever originated in Newfoundland, Canada, where they worked alongside fishermen retrieving nets and fish that escaped from hooks. The breed was refined in England in the 1800s and became one of the most popular family dogs in the world.",
      funFact: "Labradors have a unique otter tail that acts as a powerful rudder when swimming!",
    },
    activities: {
      primary: ["Swimming", "Fetch", "Retrieving games"],
      secondary: ["Hiking", "Running", "Agility", "Scent work"],
      avoid: [
        { activity: "Excessive high-impact jumping", reason: "Prone to hip and elbow dysplasia; repetitive jumping can accelerate joint issues" },
        { activity: "Prolonged stair climbing in puppies", reason: "Hip and elbow joints are still developing until 12-18 months" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 420
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie treat that promotes dental health", servingNote: "1-2 baby carrots per day for adult Labs" },
        { name: "Green beans", type: "vegetable", description: "Low-calorie, fiber-rich snack that helps with weight management", servingNote: "A handful of steamed (no salt) green beans" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich superfood treat", servingNote: "5-8 blueberries, fresh or frozen" },
        { name: "Lean chicken breast", type: "protein", description: "High-protein, low-fat training reward", servingNote: "Small cubes, no seasoning or oil" },
        { name: "Dental chews", type: "dental", description: "Helps reduce plaque and tartar buildup", servingNote: "Size-appropriate dental chew, once daily" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Labradors are prone to obesity and pancreatitis; high-fat treats increase risk" },
        { name: "Rawhide chews", reason: "Can cause digestive blockages; large Labs may swallow pieces whole" }
      ],
      maxDailyTreatCalories: 120
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Tennis balls", "Kong Flyer frisbee", "Chuckit! balls"], description: "Labradors live for fetch — durable fetching toys are essential" },
        { category: "chew", examples: ["Kong Classic", "Nylabone DuraChew", "Benebone Wishbone"], description: "Powerful chewers need durable, non-splintering chew toys" },
        { category: "puzzle", examples: ["Kong Wobbler", "Outward Hound treat puzzle", "Snuffle mat"], description: "Food-motivated Labs excel at puzzle toys for mental stimulation" },
        { category: "swim", examples: ["Kong Aqua float", "Ruffwear Hydro Plane", "Floating bumper"], description: "Water retrievers — floating toys are a must for this breed" }
      ],
      avoid: [
        { toy: "Tennis balls (unsupervised)", reason: "Labradors can chew through the felt, creating a choking hazard" },
        { toy: "Thin latex squeaky toys", reason: "Powerful jaws can destroy these quickly, creating small ingestible pieces" }
      ],
      suitability: { fetch: 5, chew: 5, puzzle: 4, cuddle: 5, agility: 3, swim: 5, tug: 4 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play", "Toys"],
      challenges: [
        { issue: "Jumping up on people", solution: "Teach 'four on the floor' — reward only when all paws are down, use a mat/place command" },
        { issue: "Pulling on leash", solution: "Labradors are strong pullers; use a front-clip harness and practice loose-leash walking" },
        { issue: "Counter surfing", solution: "Manage environment + teach 'leave it' and 'off' commands consistently" }
      ],
      approach: "Positive reinforcement with food rewards works best. Labs are eager to please but can be easily distracted by food smells. Keep training sessions short (5-10 minutes) and varied.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — expose to people, other dogs, water, and different surfaces" },
        { age: "4-6 months", focus: "Impulse control — 'leave it', 'stay', 'wait' commands" },
        { age: "6-12 months", focus: "Recall training — Labs have a strong prey drive for birds and small animals" }
      ],
    },
    seasonal: {
      spring: {
        activities: ["Hiking on thawing trails", "Swimming in warmer waters", "Agility training outdoors"],
        precautions: ["Check for ticks after outdoor activities", "Watch for spring allergies (itchy paws, ear infections)", "Gradually increase activity after winter"]
      },
      summer: {
        activities: ["Swimming (beach, lake, pool)", "Early morning walks", "Water fetch games"],
        precautions: ["NEVER leave in hot car — Labs are prone to heatstroke", "Provide shade and water at all times", "Avoid midday heat — walk early morning or evening", "Watch for signs of overheating (excessive panting, drooling)"]
      },
      fall: {
        activities: ["Hiking in fall foliage", "Scent work games", "Fetch with leaves"],
        precautions: ["Watch for acorns and mushrooms on walks", "Check for burrs and foxtails in coat", "Reduce calories slightly as activity may decrease"]
      },
      winter: {
        activities: ["Snow fetch", "Tug-of-war indoors", "Puzzle toys and nose work"],
        precautions: ["Labradors love snow but can get frostbite on ears and tail", "Paw pad protection in icy conditions", "Increase indoor enrichment when weather is extreme"]
      },
    },
    healthCautions: [
      "Prone to obesity — monitor calorie intake closely, especially treats",
      "High risk of hip and elbow dysplasia — maintain lean body condition",
      "Prone to ear infections — check and clean ears weekly, especially after swimming",
      "Exercise-induced collapse (EIC) — genetic condition; avoid overexertion in hot weather"
    ],
  },
{
    breedName: "Golden Retriever",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Scotland, United Kingdom",
      originalPurpose: "Retrieving waterfowl for hunters",
      developed: "19th century",
      summary: "The Golden Retriever was developed in the Scottish Highlands by crossing the now-extinct Yellow Retriever with the Tweed Water Spaniel and later infusions of Bloodhound and Irish Setter. They were bred specifically for retrieving game from both water and land.",
      funFact: "Golden Retrievers have a soft mouth that can carry an egg without breaking it!"
    },
    activities: {
      primary: ["Retrieving", "Swimming", "Hiking"],
      secondary: ["Agility", "Obedience", "Scent work", "Therapy work"],
      avoid: [
        { activity: "Repetitive high-impact running on hard surfaces", reason: "Prone to hip dysplasia and arthritis; low-impact exercise is better long-term" },
        { activity: "Excessive stair climbing under 12 months", reason: "Rapid growth rate makes developing joints vulnerable to injury" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 420
    },
    treats: {
      recommended: [
        { name: "Apple slices", type: "fruit", description: "Sweet, crunchy treat with fiber and vitamins", servingNote: "2-3 thin apple slices (no seeds)" },
        { name: "Plain pumpkin", type: "vegetable", description: "Great for digestive health and weight management", servingNote: "1-2 tablespoons of plain canned pumpkin" },
        { name: "Freeze-dried liver", type: "protein", description: "High-value training reward", servingNote: "Small pieces — very rich, use sparingly" },
        { name: "Frozen banana chunks", type: "fruit", description: "Cooling summer treat rich in potassium", servingNote: "2-3 small frozen chunks" },
        { name: "Dental sticks", type: "dental", description: "Helps maintain dental health between brushings", servingNote: "1 per day, appropriate size" }
      ],
      avoid: [
        { name: "Cooked bones", reason: "Can splinter and cause internal damage; Goldens are prone to swallowing large pieces" },
        { name: "Grapes/raisins", reason: "Toxic to dogs — can cause kidney failure" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Kong tennis balls", "Chuckit! Ultra ball", "Aerobie frisbee"], description: "Goldens are born retrievers — fetch toys are a must" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone FlexiChew", "West Paw Zogoflex"], description: "Moderate chewers — durable but not overly hard" },
        { category: "cuddle", examples: ["Fluffy plush toys", "Kong Cozie", "Tuffy ring"], description: "Goldens love carrying soft toys around — the 'Golden Retriever mail' phenomenon" },
        { category: "puzzle", examples: ["Kong Genius", "Nina Ottosson puzzle", "Snuffle mat"], description: "Food-motivated and intelligent — puzzle toys provide mental enrichment" }
      ],
      avoid: [
        { toy: "Sticks from outdoors", reason: "Can splinter in mouth; Goldens often pick up sticks on walks" },
        { toy: "Toys with small squeakers", reason: "Goldens may try to 'kill' the squeaker and ingest it" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 4, cuddle: 5, agility: 4, swim: 5, tug: 3 }
    },
    training: {
      trainability: 5,
      motivators: ["Praise", "Food", "Play", "Toys"],
      challenges: [
        { issue: "Pulling on leash", solution: "Golden puppies are strong; use a front-clip harness and start loose-leash training early" },
        { issue: "Excitement around people", solution: "Goldens love everyone — teach polite greetings with 'go to mat' protocol" },
        { issue: "Mouthiness", solution: "Golden puppies explore with their mouths; teach 'gentle' and redirect to toys" }
      ],
      approach: "Goldens are extremely people-pleasing and respond best to gentle, positive reinforcement. Harsh corrections can damage their sensitive temperament. Keep training fun and varied.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — meeting people, other dogs, and novel environments" },
        { age: "4-6 months", focus: "Bite inhibition and 'drop it' — essential for a retrieving breed" },
        { age: "6-12 months", focus: "Reliable recall — Goldens can be easily distracted by other people" }
      ],
    },
    seasonal: {
      spring: {
        activities: ["Long walks in blooming parks", "Shedding season grooming sessions", "Agility training"],
        precautions: ["Heavy shedding season — daily brushing needed", "Allergy season — watch for ear infections and itchy skin", "Check for ticks after walks"]
      },
      summer: {
        activities: ["Swimming at the beach or lake", "Early morning hikes", "Water retrieval games"],
        precautions: ["Goldens LOVE water but can overheat — always provide shade", "Coats provide natural insulation but watch for heatstroke", "Paw pad protection on hot pavement"]
      },
      fall: {
        activities: ["Leaf pile play", "Scent work in fallen leaves", "Cool-weather hiking"],
        precautions: ["Grooming needed for shedding summer coat", "Watch for mushrooms and acorns on walks", "Maintain exercise as daylight decreases"]
      },
      winter: {
        activities: ["Snow play and fetch", "Indoor puzzle games", "Tug-of-war"],
        precautions: ["Thick coat provides cold protection but check for ice balls between toes", "Arthritis-prone — watch for stiffness in cold weather", "Provide indoor enrichment on extreme weather days"]
      },
    },
    healthCautions: [
      "High cancer rate — monitor for unusual lumps, especially hemangiosarcoma",
      "Prone to hip and elbow dysplasia — maintain lean body condition",
      "High risk of skin allergies and ear infections",
      "Progressive retinal atrophy (PRA) — annual eye exams recommended"

    ],
  },
{
    breedName: "German Shepherd Dog",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Germany",
      originalPurpose: "Herding and guarding sheep",
      developed: "Late 19th century",
      summary: "The German Shepherd Dog was developed in the late 1800s by Captain Max von Stephanitz, who sought to create the ideal working dog. The breed was standardized from various herding dogs in Germany and quickly became valued for police, military, and service work worldwide.",
      funFact: "German Shepherds can learn a new command in as few as 5 repetitions!"
    },
    activities: {
      primary: ["Protection sports", "Agility", "Scent work"],
      secondary: ["Hiking", "Obedience", "Tug-of-war", "Herding trials"],
      avoid: [
        { activity: "Repetitive fetch on hard surfaces", reason: "Prone to hip and elbow dysplasia; low-impact exercise preferred" },
        { activity: "Excessive stair climbing", reason: "Developmental hip joints are vulnerable until 18-24 months" }
      ],
      weeklyMinutesMin: 280,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Cooked sweet potato", type: "vegetable", description: "Fiber-rich, vitamin-packed treat", servingNote: "2-3 small cubes per day" },
        { name: "Cucumber slices", type: "vegetable", description: "Low-calorie, hydrating snack", servingNote: "Several thin slices" },
        { name: "Freeze-dried fish", type: "protein", description: "Omega-3 rich training reward", servingNote: "Small pieces, use as high-value reward" },
        { name: "String cheese", type: "protein", description: "Great for training — easy to portion", servingNote: "Small pea-sized pieces" },
        { name: "Kong with peanut butter", type: "commercial", description: "Mental enrichment treat dispenser", servingNote: "Xylitol-free peanut butter, 1 tbsp max" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "GSDs are prone to pancreatitis, especially as they age" },
        { name: "Wheat-based treats", reason: "Many GSDs have food sensitivities and grain allergies" }
      ],
      maxDailyTreatCalories: 130
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Goughnuts Ring", "West Paw Tizzi"], description: "GSDs are powerful chewers — need indestructible toys" },
        { category: "puzzle", examples: ["Nina Ottosson slider", "Kong Genius", "Trixie activity board"], description: "Highly intelligent — puzzle toys prevent boredom" },
        { category: "tug", examples: ["Kong Tugga", "Ruffwear gnawt-a-rock", "Fleece tug rope"], description: "Tug is a natural behavior for GSDs — great for bonding" },
        { category: "fetch", examples: ["Kong Jumbler", "Chuckit! Ultra ball", "JW Pet Hol-ee Roller"], description: "Ball drive is strong but use durable, size-appropriate balls" }
      ],
      avoid: [
        { toy: "Thin plastic toys", reason: "GSDs can destroy and ingest plastic in minutes" },
        { toy: "Latex squeaky toys", reason: "Powerful jaws shred these instantly, creating choking hazards" }
      ],
      suitability: { fetch: 4, chew: 5, puzzle: 5, cuddle: 3, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 5,
      motivators: ["Praise", "Play", "Food", "Toys"],
      challenges: [
        { issue: "Leash reactivity", solution: "GSDs are naturally protective — use BAT training to address reactivity" },
        { issue: "Over-guarding", solution: "Teach 'place' and 'leave it' commands; avoid reinforcing possessive behavior" },
        { issue: "Separation anxiety", solution: "GSDs bond strongly — practice crate training and gradual alone time from puppyhood" }
      ],
      approach: "German Shepherds need firm, consistent, and fair training. They thrive on having a job to do. Positive reinforcement combined with clear boundaries works best. They can become anxious or reactive without proper structure.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization period — expose to many people, sights, and sounds" },
        { age: "4-8 months", focus: "Confidence building — controlled exposure to novel environments" },
        { age: "8-18 months", focus: "Structured obedience — formal training classes recommended" }
      ],
    },
    seasonal: {
      spring: {
        activities: ["Obedience training outdoors", "Hiking on trails", "Scent work"],
        precautions: ["Shedding season — GSDs blow their coat heavily", "Allergy season — watch for skin issues", "Check for ticks"]
      },
      summer: {
        activities: ["Early morning training sessions", "Swimming (some GSDs enjoy water)", "Nose work indoors"],
        precautions: ["Double coat provides insulation but GSDs overheat easily", "NEVER exercise in midday heat", "Always carry water on walks"]
      },
      fall: {
        activities: ["Longer hikes in cooler weather", "Agility training", "Herding instinct games"],
        precautions: ["Prepare for heavy winter coat growth", "Watch for mushrooms and burrs", "Maintain exercise routine"]
      },
      winter: {
        activities: ["Snow hiking", "Tug-of-war indoors", "Advanced obedience training"],
        precautions: ["GSDs tolerate cold well but not extreme cold", "Paw protection in icy/salted conditions", "Arthritis management for older dogs"]
      },
    },
    healthCautions: [
      "Very high risk of hip and elbow dysplasia — OFA certification recommended",
      "Prone to degenerative myelopathy — a progressive spinal cord disease",
      "Bloat (GDV) — high risk in deep-chested breeds; consider prophylactic gastropexy",
      "Exocrine pancreatic insufficiency (EPI) — common in GSDs"
    ],
  },
{
    breedName: "French Bulldog",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "France (originally from England)",
      originalPurpose: "Companion and ratting dog",
      developed: "19th century",
      summary: "French Bulldogs were developed in the 1800s when English lace workers brought small Bulldogs to France. They were crossed with other small breeds, creating the distinctive 'bat-eared' Frenchie we know today. They quickly became beloved companions of Parisian society.",
      funFact: "French Bulldogs can't swim due to their heavy heads and short legs!"
    },
    activities: {
      primary: ["Short walks", "Play sessions", "Nose work"],
      secondary: ["Puzzle games", "Cuddle time", "Slow-paced hiking"],
      avoid: [
        { activity: "Swimming", reason: "Brachycephalic airway + heavy head = very high drowning risk. NEVER leave near water." },
        { activity: "Strenuous exercise in heat", reason: "Brachycephalic breed — can't pant efficiently; extreme heatstroke risk" },
        { activity: "Long-distance running", reason: "Short snout limits oxygen intake; respiratory distress risk" }
      ],
      weeklyMinutesMin: 90,
      weeklyMinutesMax: 210
    },
    treats: {
      recommended: [
        { name: "Green beans", type: "vegetable", description: "Low-calorie, weight-friendly treat", servingNote: "A few steamed green beans per day" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich, small and easy to chew", servingNote: "3-5 blueberries" },
        { name: "Small training treats", type: "commercial", description: "Low-calorie commercial treats for training", servingNote: "Choose small, soft treats; factor into daily calorie limit" },
        { name: "Plain yogurt (Greek)", type: "protein", description: "Probiotic-rich, good for digestive health", servingNote: "1 teaspoon as a treat or topper" }
      ],
      avoid: [
        { name: "Large chews or bones", reason: "Frenchies have small jaws and can choke on large pieces" },
        { name: "High-calorie treats", reason: "French Bulldogs are prone to obesity which worsens breathing issues" }
      ],
      maxDailyTreatCalories: 50
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Puppy (small)", "Nylabone FlexiChew", "Benebone Wishbone (small)"], description: "Moderate chewers — need small, easy-to-carry options" },
        { category: "puzzle", examples: ["Kong Wobbler (small)", "Snuffle mat", "Outward Hound puzzle"], description: "Mental stimulation is important for this intelligent breed" },
        { category: "cuddle", examples: ["Plush squeaky toys", "Kong Cozie", "Fuzzy blankets"], description: "Frenchies love to burrow and carry soft toys" },
        { category: "tug", examples: ["Small fleece tug", "Kong Tugga (small)", "Rope toys"], description: "Gentle tug-of-war is fine — avoid jerking due to neck sensitivity" }
      ],
      avoid: [
        { toy: "Tennis balls", reason: "Too large for a Frenchie's mouth; can cause jaw fatigue" },
        { toy: "Hard nylon bones", reason: "Brachycephalic dogs may have difficulty gripping and can damage teeth" }
      ],
      suitability: { fetch: 2, chew: 3, puzzle: 4, cuddle: 5, agility: 1, swim: 1, tug: 3 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Stubbornness", solution: "Frenchies are independent — use high-value rewards and keep training fun" },
        { issue: "House training", solution: "Can be difficult to housebreak — consistent schedule and crate training essential" },
        { issue: "Resource guarding", solution: "Some Frenchies guard food/toys — hand-feed to build trust" }
      ],
      approach: "Positive reinforcement only — Frenchies are sensitive and shut down with harsh corrections. Food is the primary motivator. Keep sessions short (5 minutes) due to their low stamina.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — especially to other dogs and people" },
        { age: "4-6 months", focus: "House training — be patient and consistent" },
        { age: "6-12 months", focus: "Impulse control — 'leave it' and 'wait' are essential" }
      ],
    },
    seasonal: {
      spring: {
        activities: ["Short walks in mild weather", "Nose work games indoors", "Gentle play in yard"],
        precautions: ["Allergy season — Frenchies have high rates of skin allergies", "Watch for spring pollen triggering ear infections", "Don't overexert — stop if breathing heavy"]
      },
      summer: {
        activities: ["Air-conditioned play", "Indoor enrichment games", "Early morning very short walks"],
        precautions: ["CRITICAL: Frenchies die easily from heatstroke — AC is essential", "Never walk in heat above 75°F (24°C)", "Watch for signs of respiratory distress", "Cool mats and fans are helpful"]
      },
      fall: {
        activities: ["Comfortable walks in cooler weather", "Puzzle toys", "Cuddle time"],
        precautions: ["Best weather for Frenchies — enjoy the cooler temps", "Skin fold care — moisture can accumulate in folds"],
      },
      winter: {
        activities: ["Short cold-weather walks", "Indoor play", "Tug-of-war"],
        precautions: ["Frenchies get cold easily — use dog sweaters for walks under 50°F", "Short coat provides little protection", "Watch for slipping on ice — prone to IVDD so avoid falls"]
      },
    },
    healthCautions: [
      "Brachycephalic airway syndrome — avoid heat, stress, and overexertion",
      "Very high risk of IVDD (intervertebral disc disease) — no jumping on/off furniture",
      "Skin fold dermatitis — daily cleaning of face folds required",
      "Cherry eye and other eye issues — common in the breed"
    ],
  },
{
    breedName: "Beagle",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "England, United Kingdom",
      originalPurpose: "Scent hound for hunting hare and rabbit",
      developed: "Ancient (modern form in 19th century)",
      summary: "Beagles are one of the oldest scent hound breeds, with roots tracing back to ancient Greece and medieval England. The modern Beagle was developed in the 1800s for hare hunting. Their exceptional sense of smell — second only to the Bloodhound — makes them extraordinary trackers.",
      funFact: "A Beagle's nose has about 220 million scent receptors — compared to a human's 5 million!"
    },
    activities: {
      primary: ["Scent work", "Sniffing walks", "Exploring"],
      secondary: ["Hiking", "Tracking", "Play in secure areas"],
      avoid: [
        { activity: "Off-leash in unsecured areas", reason: "Beagles follow their nose — they can easily get lost tracking a scent" },
        { activity: "Repetitive fetch", reason: "Less motivated by fetch; prefer scent-based activities" }
      ],
      weeklyMinutesMin: 180,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Carrot pieces", type: "vegetable", description: "Healthy, satisfying crunch", servingNote: "Small pieces for training" },
        { name: "Plain cooked chicken", type: "protein", description: "High-value reward for scent training", servingNote: "Tiny pea-sized pieces" },
        { name: "Frozen peas", type: "vegetable", description: "Low-calorie training treat", servingNote: "A few at a time, great for warm days" },
        { name: "Cheese bits", type: "protein", description: "Ultra-high value for Beagles", servingNote: "Very small pieces — Beagles are prone to obesity" }
      ],
      avoid: [
        { name: "High-calorie biscuits", reason: "Beagles are extremely food-motivated and prone to obesity" },
        { name: "Table scraps", reason: "Encourages begging and weight gain — Beagles are persistent beggars" }
      ],
      maxDailyTreatCalories: 60
    },
    toys: {
      recommended: [
        { category: "puzzle", examples: ["Snuffle mat", "Kong Wobbler", "Outward Hound puzzle"], description: "Scent-based puzzles are ideal for this nose-driven breed" },
        { category: "scent", examples: ["Scent detection kits", "Treat-dispensing balls", "Hide-and-seek toys"], description: "Toys that engage their powerful sense of smell" },
        { category: "chew", examples: ["Nylabone DuraChew", "Kong Classic", "Benebone"], description: "Moderate chewers — durable but not extreme" },
        { category: "tug", examples: ["Rope toys", "Fleece tug", "Kong Tugga"], description: "Beagles enjoy tug as part of interactive play" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Beagles may eat stuffing, causing digestive blockages" },
        { toy: "Small squeaky toys", reason: "Squeakers can be ingested — Beagles are determined chewers" }
      ],
      suitability: { fetch: 2, chew: 3, puzzle: 5, cuddle: 4, agility: 2, swim: 2, tug: 3 }
    },
    training: {
      trainability: 2,
      motivators: ["Food", "Scent", "Praise"],
      challenges: [
        { issue: "Following nose instead of commands", solution: "Work in low-distraction areas first; use scent as a reward" },
        { issue: "Howling/barking", solution: "Beagles are vocal — manage with mental stimulation and exercise" },
        { issue: "Food stealing", solution: "Never leave food within reach — manage the environment" }
      ],
      approach: "Food is the Beagle's primary language. Use their nose to your advantage — incorporate scent games into training. Keep sessions short and high-reward. Beagles can be stubborn but are not dominant.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — Beagles can be shy without proper exposure" },
        { age: "4-6 months", focus: "Recall — practice in long-line before ever going off-leash" },
        { age: "6-12 months", focus: "Scent discrimination — channel their nose into structured activities" }
      ],
    },
    seasonal: {
      spring: {
        activities: ["Scent tracking in the yard", "Sniffing walks in nature", "Nose work games"],
        precautions: ["Allergy season — Beagles prone to skin allergies", "Check for ticks after walks"],
      },
      summer: {
        activities: ["Early morning scent walks", "Indoor nose work", "Cool ground sniffing games"],
        precautions: ["Beagles can overheat — avoid midday exercise", "Provide water on all walks", "Paw pad protection on hot pavement"]
      },
      fall: {
        activities: ["Perfect weather for long sniffing walks", "Scent detection training", "Hiking"],
        precautions: ["Watch for acorns and fallen fruit on walks", "Shedding season — brush regularly"]
      },
      winter: {
        activities: ["Snow scent tracking", "Indoor enrichment games", "Hide-and-seek with treats"],
        precautions: ["Short coat — needs sweater in cold weather", "Limit outdoor time in extreme cold", "Paw care in icy conditions"]
      },
    },
    healthCautions: [
      "Prone to obesity — strict weight management essential",
      "High risk of ear infections — floppy ears trap moisture",
      "Epilepsy — higher incidence in Beagles",
      "Hypothyroidism — common in the breed"
    ],
  },
{
    breedName: "Bulldog",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "England, United Kingdom",
      originalPurpose: "Bull-baiting (historical); now companion",
      developed: "13th century (modern breed: 19th century)",
      summary: "The Bulldog's history traces back to bull-baiting in medieval England. After the practice was banned in 1835, the breed was selectively bred to become the gentle, docile companion we know today. They are now a symbol of British determination.",
      funFact: "Bulldogs were originally much more athletic. The modern 'sourmug' face and stocky build were selectively bred after bull-baiting was outlawed."
    },
    activities: {
      primary: ["Short walks", "Gentle indoor play", "Sniffing/nose work"],
      secondary: ["Supervised swimming", "Puzzle toys", "Trick training"],
      avoid: [
        { activity: "Any exercise in heat/humidity", reason: "CRITICAL: Brachycephalic airway syndrome — Bulldogs cannot pant effectively and overheat rapidly" },
        { activity: "Strenuous exercise", reason: "Respiratory distress risk — Bulldogs have narrow airways" },
        { activity: "Exercising >20 min continuously", reason: "Cardiovascular and respiratory limitations" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 210
    },
    treats: {
      recommended: [
        { name: "Baby carrots (softened)", type: "vegetable", description: "Low-calorie, but soften for easier chewing", servingNote: "1-2 per day" },
        { name: "Cucumber slices", type: "vegetable", description: "Hydrating, low-calorie", servingNote: "3-4 slices" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training treat", servingNote: "Small pieces, 3-5 per day" },
        { name: "Dental chews (soft)", type: "dental", description: "Choose softer dental chews for brachycephalic jaws", servingNote: "1 per day, medium size" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich, low-calorie", servingNote: "3-5 berries" }
      ],
      avoid: [
        { name: "Large hard chews", reason: "Brachycephalic jaws may struggle to chew; choking risk" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "High-fat treats", reason: "Bulldogs prone to obesity and skin issues" }
      ],
      maxDailyTreatCalories: 70
    },
    toys: {
      recommended: [
        { category: "puzzle", examples: ["Kong Classic", "Snuffle mat", "Slow feeder"], description: "Mental stimulation without physical exertion — perfect for Bulldogs" },
        { category: "comfort", examples: ["Plush toys", "Knot ropes (gentle tug)"], description: "Bulldogs enjoy gentle play and cuddly toys" },
        { category: "chew", examples: ["Kong Puppy (softer)", "Nylabone Flex"], description: "Softer chews are safer for brachycephalic jaws" },
        { category: "fetch", examples: ["Short-distance fetch with soft toy"], description: "Gentle, short-distance games only — avoid overexertion" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Too hard for brachycephalic jaw structure; dental fracture risk" },
        { toy: "Tennis balls", reason: "Bulldogs cannot pick them up easily due to undershot jaw; choking risk" },
        { toy: "Frisbee", reason: "Jumping and running pose respiratory and joint risks" }
      ],
      suitability: { fetch: 2, chew: 2, puzzle: 4, cuddle: 5, agility: 1, swim: 2, tug: 2 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Comfort"],
      challenges: [
        { issue: "Stubbornness", solution: "Use high-value treats; keep sessions short (5 min); Bulldogs are food-motivated" },
        { issue: "Heat intolerance during training", solution: "Train indoors in air conditioning; never train in warm weather" },
        { issue: "Snoring/distracted by breathing", solution: "Be patient — Bulldogs breathe noisily; wait for focus" }
      ],
      approach: "Bulldogs are intelligent but stubborn. They respond best to positive reinforcement with high-value food rewards. Keep training sessions very short (5 min) and end on a positive note.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — expose to various people and situations" },
        { age: "4-6 months", focus: "Basic obedience — sit, stay, come" },
        { age: "6-12 months", focus: "Leash manners — Bulldogs can be strong pullers" }
      ],
    },
    seasonal: {
      spring: { activities: ["Short walks in cool morning", "Indoor play", "Nose work"], precautions: ["Avoid exercise in warm weather", "Watch for skin fold infections as humidity rises"] },
      summer: { activities: ["Indoor air-conditioned play ONLY", "Frozen treat toys", "Puzzle games"], precautions: ["CRITICAL: No outdoor exercise above 24°C", "Signs of heat stroke: excessive panting, blue gums, collapse", "Always have cool water available"] },
      fall: { activities: ["Short walks in cool weather", "Gentle outdoor play"], precautions: ["Brief exercise only", "Clean skin folds after walks"] },
      winter: { activities: ["Short walks (cold is safer than heat for Bulldogs)", "Indoor games"], precautions: ["May need coat in freezing weather", "Wipe skin folds dry after walks"] }
    },
    healthCautions: [
      "CRITICAL: Brachycephalic Obstructive Airway Syndrome (BOAS) — never over-exercise or overheat",
      "Skin fold dermatitis — clean folds daily",
      "Hip dysplasia — keep lean to reduce joint stress",
      "Cherry eye — common, requires veterinary attention",
      "Dystocia (difficulty giving birth) — most Bulldogs require C-section"
    ],
  },
{
    breedName: "Poodle (Standard)",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "France / Germany (debated)",
      originalPurpose: "Water retrieving — hunting waterfowl",
      developed: "15th century (standardized in 19th century)",
      summary: "Despite the French stereotype, Poodles likely originated in Germany as water retrievers (the name comes from 'Pudel' meaning 'to splash in water'). Their distinctive clip was designed to keep joints warm while allowing freedom of movement for swimming.",
      funFact: "The Poodle's 'show clip' was originally a practical working haircut — the puffs of hair protected joints and organs in cold water while the shaved areas reduced drag when swimming."
    },
    activities: {
      primary: ["Swimming", "Fetch", "Agility"],
      secondary: ["Obedience", "Hiking", "Jogging", "Trick training", "Dock diving"],
      avoid: [
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk — Standard Poodles are deep-chested" },
        { activity: "Rough play without ear protection", reason: "Poodles' long ear hair can trap debris; use ear coverings for swimming" }
      ],
      weeklyMinutesMin: 420,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices (no seeds)", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Supports dental health", servingNote: "1 per day, large-breed size" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "Corn cobs", reason: "Can cause intestinal blockage" }
      ],
      maxDailyTreatCalories: 120
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Kong balls", "Frisbee", "Chuckit!"], description: "Poodles love to retrieve — they were bred for it" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzles", "Snuffle mat"], description: "Extremely intelligent — needs mental challenges to prevent boredom" },
        { category: "chew", examples: ["Kong", "Nylabone", "Yak chews"], description: "Moderate chewers; choose durable options" },
        { category: "tug", examples: ["Rope toys", "Kong Tug"], description: "Good for interactive play and training" },
        { category: "swim", examples: ["Floating retrieval toys", "Life jacket (optional)"], description: "Poodles are natural swimmers" }
      ],
      avoid: [
        { toy: "Plush toys with small parts", reason: "Poodles can be destructive when bored; remove eyes/noses" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 5, cuddle: 4, agility: 5, swim: 5, tug: 4 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Play", "Mental challenge"],
      challenges: [
        { issue: "Boredom behaviors", solution: "Provide puzzle toys and daily training — Poodles need mental stimulation" },
        { issue: "Sensitivity to correction", solution: "Use only positive reinforcement; harsh correction can cause fear" },
        { issue: "Alert barking", solution: "Teach 'quiet' and provide adequate exercise" }
      ],
      approach: "Poodles are among the most intelligent dog breeds. They excel in obedience, agility, and any task that engages their mind. Use positive reinforcement with varied rewards. Keep training creative.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — Poodles can be wary of strangers" },
        { age: "4-6 months", focus: "Grooming tolerance — handle paws, ears, face regularly" },
        { age: "6-12 months", focus: "Advanced obedience and introduction to dog sports" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Swimming", "Agility training"], precautions: ["Check for ticks", "Spring shedding — grooming needed"] },
      summer: { activities: ["Swimming", "Early morning walks", "Dock diving"], precautions: ["Avoid midday heat", "Poodle coats can overheat — consider a summer cut"] },
      fall: { activities: ["Hiking", "Agility", "Scent work"], precautions: ["Leaves hide debris — check coat after walks"] },
      winter: { activities: ["Snow play", "Indoor agility", "Trick training"], precautions: ["Poodle coat is insulating — no coat needed", "Watch for ice balls in foot fur"] }
    },
    healthCautions: [
      "GDV (bloat) risk — Standard Poodles are deep-chested",
      "Addison's disease — ACTH stimulation test if symptoms",
      "Hip dysplasia — OFA screening",
      "Sebaceous adenitis — skin condition, monitor for hair loss"
    ],
  },
{
    breedName: "Boxer",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Germany",
      originalPurpose: "Bull-baiting, hunting, and working dog",
      developed: "Late 19th century",
      summary: "The Boxer was developed in Germany from the now-extinct Bullenbeisser and the English Bulldog. Originally used for bull-baiting and as a butcher's dog, they became versatile working dogs serving as police, military, and guide dogs. Today they are beloved family companions.",
      funFact: "Boxers are named for their playful tendency to stand on their hind legs and 'box' with their front paws!"
    },
    activities: {
      primary: ["Running", "Agility", "Interactive play"],
      secondary: ["Hiking", "Obedience", "Tug-of-war", "Swimming"],
      avoid: [
        { activity: "Exercise in extreme heat", reason: "Brachycephalic tendencies — Boxers overheat easily and can suffer respiratory distress" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk — Boxers are deep-chested" },
        { activity: "High-impact jumping before 18 months", reason: "Joint development — risk of hip dysplasia and arthritis" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie dental treat", servingNote: "2-3 baby carrots per day" },
        { name: "Apple slices (no seeds)", type: "fruit", description: "Sweet, vitamin-rich reward", servingNote: "2-3 slices per day" },
        { name: "Freeze-dried beef liver", type: "protein", description: "High-value training treat", servingNote: "Small pieces, 5-8 per day" },
        { name: "Dental chews", type: "dental", description: "Supports dental health for this breed", servingNote: "1 per day, large-breed size" }
      ],
      avoid: [
        { name: "Cooked bones", reason: "Can splinter and cause internal injury" },
        { name: "Grapes/raisins", reason: "Toxic — can cause kidney failure" },
        { name: "High-fat treats", reason: "Boxers are prone to pancreatitis and weight gain" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Kong tennis balls", "Frisbee (soft)"], description: "High-energy breed needs durable fetching toys" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "West Paw Zogoflex"], description: "Powerful chewers — need tough, non-splintering options" },
        { category: "tug", examples: ["Kong Tugga", "Rope tug toy", "Flirt pole"], description: "Boxers love interactive tug games — great for bonding" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Outward Hound puzzle"], description: "Mental stimulation helps channel their intelligence" }
      ],
      avoid: [
        { toy: "Thin latex toys", reason: "Boxers destroy these quickly and may ingest pieces" },
        { toy: "Small squeaky toys", reason: "Can be swallowed — Boxers are enthusiastic chewers" }
      ],
      suitability: { fetch: 5, chew: 5, puzzle: 3, cuddle: 4, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Play", "Praise", "Toys"],
      challenges: [
        { issue: "Jumping up", solution: "Boxers are enthusiastic greeters — teach 'four on the floor' consistently" },
        { issue: "Pulling on leash", solution: "Use a front-clip harness; Boxers are strong and can pull hard" },
        { issue: "Boredom chewing", solution: "Provide plenty of exercise; a tired Boxer is a well-behaved Boxer" }
      ],
      approach: "Boxers are intelligent but can be stubborn. Use positive reinforcement with high-energy rewards. They need firm, consistent boundaries. Socialization is critical — they can be wary of strangers without proper exposure.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — expose to people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control — 'leave it', 'wait', 'stay'" },
        { age: "6-12 months", focus: "Leash manners and reliable recall" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Agility training", "Interactive play"], precautions: ["Check for ticks", "Allergy season — Boxers prone to skin allergies"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor training"], precautions: ["CRITICAL: Avoid midday heat — Boxers overheat easily", "Provide constant water", "Paw pad protection on hot pavement"] },
      fall: { activities: ["Cool-weather hikes", "Obedience training", "Fetch"], precautions: ["Watch for acorns and mushrooms", "Maintain exercise as days shorten"] },
      winter: { activities: ["Snow play", "Indoor fetch", "Tug-of-war"], precautions: ["Short coat — needs coat in freezing weather", "Paw care in icy conditions", "Arthritis-prone — watch for stiffness"] }
    },
    healthCautions: [
      "High cancer risk (mast cell tumors, lymphoma) — annual checkups essential",
      "Bloat (GDV) — deep-chested; consider prophylactic gastropexy",
      "Aortic stenosis/subvalvular aortic stenosis (SAS) — heart screening recommended",
      "Hip dysplasia — maintain lean body condition"
    ],
  },
{
    breedName: "Rottweiler",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Germany",
      originalPurpose: "Cattle driving and guarding",
      developed: "Roman era (modern breed: 19th century)",
      summary: "Rottweilers descended from Roman drover dogs that accompanied legions across Europe. In the town of Rottweil, Germany, they became cattle drivers and guardians of butchers' money. Their strength, intelligence, and loyalty make them exceptional working and family dogs.",
      funFact: "Rottweilers were once called 'Rottweil butchers' dogs' because butchers would tie money pouches around their necks for safekeeping!"
    },
    activities: {
      primary: ["Obedience training", "Hiking", "Scent work"],
      secondary: ["Agility", "Carting", "Tug-of-war", "Guard work"],
      avoid: [
        { activity: "High-impact exercise on hard surfaces", reason: "Joint stress — Rottweilers are prone to hip and elbow dysplasia" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk in deep-chested dogs" },
        { activity: "Rough play without supervision", reason: "Strong prey drive and protective instincts may escalate" }
      ],
      weeklyMinutesMin: 280,
      weeklyMinutesMax: 490
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie dental treat", servingNote: "2-3 per day" },
        { name: "Freeze-dried beef", type: "protein", description: "High-value reward for training", servingNote: "Small pieces, 5-8 per day" },
        { name: "Sweet potato chews", type: "vegetable", description: "Healthy, natural chew alternative", servingNote: "1-2 strips per day" },
        { name: "Dental chews (large)", type: "dental", description: "Supports dental health for powerful jaws", servingNote: "1 per day, large-breed size" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Rottweilers prone to pancreatitis and obesity" },
        { name: "Rawhide chews", reason: "Can cause digestive blockages" },
        { name: "Cooked bones", reason: "Can splinter and cause internal injury" }
      ],
      maxDailyTreatCalories: 130
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Goughnuts", "West Paw Tizzi"], description: "Powerful chewers need nearly indestructible toys" },
        { category: "tug", examples: ["Kong Tugga", "Rope tug", "Fleece tug"], description: "Tug builds impulse control and strengthens bond" },
        { category: "puzzle", examples: ["Kong Genius", "Nina Ottosson puzzles", "Snuffle mat"], description: "Intelligent breed needs mental challenges" },
        { category: "fetch", examples: ["Chuckit! Ultra ball", "JW Pet Hol-ee Roller", "Kong Jumbler"], description: "Fetch provides excellent exercise" }
      ],
      avoid: [
        { toy: "Thin plastic toys", reason: "Will be destroyed and ingested" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" },
        { toy: "Stuffed toys with squeakers", reason: "Squeakers are choking hazards for powerful chewers" }
      ],
      suitability: { fetch: 4, chew: 5, puzzle: 4, cuddle: 3, agility: 3, swim: 3, tug: 5 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play", "Toys"],
      challenges: [
        { issue: "Leash reactivity", solution: "Early socialization critical — use positive reinforcement and maintain distance from triggers" },
        { issue: "Protective behavior", solution: "Teach neutrality; reward calm behavior around strangers" },
        { issue: "Stubbornness", solution: "Be consistent and firm but fair — Rottweilers respond to confident leadership" }
      ],
      approach: "Rottweilers need confident, consistent training from an early age. They are highly intelligent and can become dominant without proper structure. Positive reinforcement combined with clear boundaries works best. Early and extensive socialization is non-negotiable.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Extensive socialization — people, dogs, environments, sounds" },
        { age: "4-8 months", focus: "Bite inhibition and impulse control" },
        { age: "8-18 months", focus: "Structured obedience — formal training classes" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Obedience training", "Scent work"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning training", "Swimming if tolerated", "Indoor enrichment"], precautions: ["Double coat — can overheat easily", "Never exercise in midday heat", "Provide access to shade and water"] },
      fall: { activities: ["Longer hikes", "Agility training", "Carting/pulling"], precautions: ["Watch for burrs and foxtails in coat", "Maintain exercise routine"] },
      winter: { activities: ["Snow play", "Tug-of-war indoors", "Advanced obedience"], precautions: ["Double coat provides good cold protection", "Paw care in salted/icy conditions"] }
    },
    healthCautions: [
      "Hip and elbow dysplasia — OFA screening essential",
      "Bloat (GDV) — high risk; consider gastropexy",
      "Osteosarcoma — higher incidence in large breeds",
      "Cruciate ligament rupture — maintain lean weight",
      "Heart issues (subvalvular aortic stenosis)"
    ],
  },
{
    breedName: "Dachshund (Standard Smooth)",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Germany",
      originalPurpose: "Badger hunting — digging into burrows",
      developed: "17th century (standardized in 19th century)",
      summary: "The Dachshund was developed in Germany to hunt badgers by digging into their dens. Their long body, short legs, and powerful front paws were specially designed for excavation. The smooth coat was the original variety, with wirehaired and longhaired versions developed later for different terrain.",
      funFact: "Dachshund means 'badger dog' in German — 'Dachs' (badger) + 'Hund' (dog)!"
    },
    activities: {
      primary: ["Scent work", "Digging games", "Short walks"],
      secondary: ["Tracking", "Barn hunt", "Puzzle toys", "Play in secure areas"],
      avoid: [
        { activity: "Jumping on/off furniture", reason: "CRITICAL: Dachshunds have a high risk of IVDD (intervertebral disc disease)" },
        { activity: "Stair climbing", reason: "Long spine is vulnerable to disc injury; use ramps when possible" },
        { activity: "Rough wrestling with large dogs", reason: "Risk of spinal injury from twisting or heavy impact" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Green beans", type: "vegetable", description: "Low-calorie, weight-friendly treat", servingNote: "Small handful, steamed" },
        { name: "Carrot sticks (small)", type: "vegetable", description: "Crunchy, low-calorie dental treat", servingNote: "1-2 small sticks per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pea-sized pieces" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich, bite-sized", servingNote: "3-5 berries" }
      ],
      avoid: [
        { name: "High-calorie treats", reason: "Dachshunds are prone to obesity which worsens IVDD risk" },
        { name: "Large hard bones", reason: "Too large for small mouths; choking hazard" }
      ],
      maxDailyTreatCalories: 50
    },
    toys: {
      recommended: [
        { category: "scent", examples: ["Snuffle mat", "Scent detection kits", "Treat-dispensing balls"], description: "Dachshunds are scent hounds — nose work toys are ideal" },
        { category: "dig", examples: ["Digging box", "Blanket with hidden toys", "Sand pit"], description: "Bred to dig — channel this instinct into appropriate outlets" },
        { category: "puzzle", examples: ["Kong Wobbler (small)", "Outward Hound puzzle", "Nina Ottosson"], description: "Intelligent and determined — puzzle toys provide enrichment" },
        { category: "fetch", examples: ["Small soft fetch toys", "Chuckit! (small)"], description: "Gentle fetch on level ground is fine" }
      ],
      avoid: [
        { toy: "Large fetch balls", reason: "Too large for Dachshund mouths; can cause jaw strain" },
        { toy: "High jumping toys", reason: "Jumping increases IVDD risk" }
      ],
      suitability: { fetch: 3, chew: 3, puzzle: 4, cuddle: 5, agility: 1, swim: 2, tug: 2 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Scent", "Praise"],
      challenges: [
        { issue: "Stubbornness", solution: "Use high-value food rewards; Dachshunds were bred to work independently" },
        { issue: "Barking", solution: "Dachshunds are vocal — provide mental stimulation and exercise" },
        { issue: "Digging indoors", solution: "Provide an approved digging spot like a digging box or sand pit" }
      ],
      approach: "Dachshunds are clever but independent. They respond best to positive reinforcement with food rewards. Patience is key — they were bred to persist until the job is done. Keep training sessions short and engaging.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — Dachshunds can be wary of strangers" },
        { age: "4-6 months", focus: "Crate training and 'place' command" },
        { age: "6-12 months", focus: "IVDD prevention — teach 'no jumping' and use ramps" }
      ],
    },
    seasonal: {
      spring: { activities: ["Scent walks", "Sniffing games", "Gentle outdoor play"], precautions: ["Allergy season — Dachshunds prone to skin issues", "Check for ticks"] },
      summer: { activities: ["Early short walks", "Indoor nose work", "Puzzle games"], precautions: ["Avoid strenuous exercise in heat", "Watch for overheating — short legs mean low ground clearance for heat", "Paw protection on hot pavement"] },
      fall: { activities: ["Perfect weather for walks", "Barn hunt training", "Scent work"], precautions: ["Watch for burrs in coat", "Maintain exercise"] },
      winter: { activities: ["Short cold-weather walks", "Indoor enrichment", "Nose work"], precautions: ["Smooth coat needs sweater in cold weather", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "CRITICAL: IVDD (intervertebral disc disease) — prevent jumping, use ramps",
      "Obesity — worsens back problems; strict weight management",
      "Dental disease — regular dental care important for small mouths",
      "Epilepsy — higher incidence in Dachshunds"
    ],
  },
{
    breedName: "Siberian Husky",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Siberia, Russia",
      originalPurpose: "Sled dog for the Chukchi people",
      developed: "Ancient (thousands of years)",
      summary: "The Siberian Husky was developed by the Chukchi people of northeastern Siberia as a sled dog capable of covering vast distances in extreme cold. They were brought to Alaska in the early 1900s for sled dog racing and gained fame for their heroic role in the 1925 Nome serum run.",
      funFact: "A Siberian Husky named Balto led the final leg of the 1925 Nome serum run, saving the town from a diphtheria epidemic!"
    },
    activities: {
      primary: ["Running", "Hiking", "Pulling/packing"],
      secondary: ["Agility", "Obedience", "Trick training", "Dog sports"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "Huskies have a VERY high prey drive and will roam — recall is unreliable" },
        { activity: "Exercise in extreme heat", reason: "Thick double coat makes them prone to overheating" },
        { activity: "Confinement without exercise", reason: "Huskies are escape artists and destructive if under-exercised" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 630
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie treat", servingNote: "2-3 per day" },
        { name: "Frozen blueberries", type: "fruit", description: "Cooling summer treat, antioxidant-rich", servingNote: "5-8 berries" },
        { name: "Freeze-dried salmon", type: "protein", description: "Omega-3 rich, high-value reward", servingNote: "Small pieces, 3-5 per day" },
        { name: "Frozen watermelon cubes", type: "fruit", description: "Hydrating summer treat (no seeds/rind)", servingNote: "A few small cubes" },
        { name: "Cheese pieces (low-fat)", type: "protein", description: "High-value training reward", servingNote: "Tiny pea-sized pieces" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic to dogs — can cause kidney failure" },
        { name: "Xylitol treats", reason: "Toxic — causes rapid hypoglycemia" },
        { name: "Chocolate", reason: "Toxic to dogs — theobromine poisoning" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Frisbee (soft)", "Jolly Ball"], description: "High prey drive makes fetch an excellent outlet" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "Benebone"], description: "Moderate to strong chewers — need durable options" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzles", "Tornado toy"], description: "Intelligent and mischievous — puzzle toys prevent boredom" },
        { category: "tug", examples: ["Rope toys", "Flirt pole", "Kong Tugga"], description: "Interactive play strengthens bond" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Huskies may eat stuffing, causing blockages" },
        { toy: "Thin latex toys", reason: "Will be destroyed in minutes" },
        { toy: "Flimsy plastic toys", reason: "Escape artists — they'll figure out how to break them" }
      ],
      suitability: { fetch: 5, chew: 4, puzzle: 4, cuddle: 3, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Play", "Praise"],
      challenges: [
        { issue: "Selective hearing", solution: "Huskies are independent — use high-value rewards and never let off-leash except in secure areas" },
        { issue: "Escape artistry", solution: "Secure all fences (digging proof + jumping proof); Huskies are champion escape artists" },
        { issue: "Howling", solution: "Huskies are vocal — they howl, whine, and 'talk'; provide exercise to reduce boredom howling" }
      ],
      approach: "Huskies are intelligent but independent and stubborn. They were bred to cover long distances making decisions — not to please humans. Positive reinforcement works best. Training requires patience, consistency, and high-value rewards. A tired Husky is a better-behaved Husky.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Extensive socialization — people, dogs, and environments" },
        { age: "4-6 months", focus: "Recall (even though it's hard) and 'leave it'" },
        { age: "6-12 months", focus: "Secure containment and structured exercise routines" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Joring training", "Pulling practice"], precautions: ["Heavy shedding (blowing coat) — daily brushing essential", "Check for ticks"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor enrichment"], precautions: ["CRITICAL: Huskies overheat easily — avoid midday exercise", "Always carry water", "Provide AC and shade"] },
      fall: { activities: ["Perfect running weather", "Hiking", "Canicross"], precautions: ["Coat growing in for winter — increase brushing", "Watch for foxtails"] },
      winter: { activities: ["Sled pulling", "Snow running", "Hiking in snow"], precautions: ["Huskies LOVE winter — they're in their element", "Thick coat provides excellent insulation", "Paw care — check for ice between toes"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening recommended",
      "Eye issues (cataracts, progressive retinal atrophy, corneal dystrophy)",
      "Hypothyroidism — common in the breed",
      "Zinc deficiency — dietary supplementation may be needed"
    ],
  },
{
    breedName: "Great Dane",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Germany",
      originalPurpose: "Boar hunting and estate guardian",
      developed: "16th century (modern breed: 19th century)",
      summary: "Despite their name, Great Danes originated in Germany, not Denmark. They were bred to hunt wild boar — a dangerous task requiring enormous size, strength, and courage. Later they became estate guardians and companions. They are known as gentle giants for their dignified, friendly temperament.",
      funFact: "Great Danes hold the world record for tallest dog — the current record holder stands over 44 inches at the shoulder!"
    },
    activities: {
      primary: ["Moderate walks", "Mental stimulation", "Gentle play"],
      secondary: ["Obedience", "Hiking (low-impact)", "Cart pulling", "Scent work"],
      avoid: [
        { activity: "Exercising 1 hour before/after meals", reason: "CRITICAL: Great Danes have the highest GDV (bloat) risk of any breed" },
        { activity: "High-impact exercise on hard surfaces", reason: "Joint stress — hip dysplasia and arthritis are major concerns" },
        { activity: "Prolonged running/jumping", reason: "Skeletally immature until 18-24 months; high-impact activity can damage growth plates" },
        { activity: "Stair climbing (excessive)", reason: "Hip and elbow stress in giant breed puppies" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Baby carrots", type: "vegetable", description: "Low-calorie, crunchy treat", servingNote: "3-4 per day" },
        { name: "Apple slices (no seeds)", type: "fruit", description: "Sweet, vitamin-rich reward", servingNote: "4-5 slices" },
        { name: "Freeze-dried beef", type: "protein", description: "High-value training treat", servingNote: "Small pieces, 5-10 per day" },
        { name: "Dental chews (large)", type: "dental", description: "Supports dental health for giant breed", servingNote: "1 per day, giant-breed size" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Danedane prone to obesity and pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Small treats (choking risk)", reason: "Great Danes gulp food — treats should be large enough to require chewing" }
      ],
      maxDailyTreatCalories: 150
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Goughnuts", "West Paw Tizzi"], description: "Powerful jaws need nearly indestructible toys" },
        { category: "fetch", examples: ["Jolly Ball", "Chuckit! Ultra (large)", "Kong Jumbler"], description: "Use XL-sized fetch toys only" },
        { category: "puzzle", examples: ["Kong Genius", "Nina Ottosson puzzles (large)", "Snuffle mat"], description: "Mental stimulation without physical strain" },
        { category: "tug", examples: ["Rope tug (heavy-duty)", "Kong Tugga"], description: "Gentle tug — their size means they can easily overpower" }
      ],
      avoid: [
        { toy: "Small balls or toys", reason: "Choking hazard — Great Danes can swallow small toys whole" },
        { toy: "Tennis balls (standard)", reason: "Too small; can lodge in throat" },
        { toy: "Flimsy plastic toys", reason: "Will be destroyed and ingested" }
      ],
      suitability: { fetch: 3, chew: 5, puzzle: 4, cuddle: 5, agility: 2, swim: 3, tug: 4 }
    },
    training: {
      trainability: 4,
      motivators: ["Praise", "Food", "Play"],
      challenges: [
        { issue: "Leash pulling", solution: "A pulling Great Dane can easily unbalance an adult — use a sturdy front-clip harness from puppyhood" },
        { issue: "Jumping up", solution: "A 150lb jumping dog is dangerous — teach 'four on the floor' from day one" },
        { issue: "Separation anxiety", solution: "Danes bond strongly — crate training and gradual alone time essential" }
      ],
      approach: "Great Danes are sensitive giants who respond best to gentle, consistent positive reinforcement. Harsh corrections can damage their confidence. Early socialization is critical. Due to their size, basic manners (no jumping, polite leash walking) must be trained from puppyhood.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, other dogs, environments" },
        { age: "4-6 months", focus: "No jumping — teach 'off' and 'settle'" },
        { age: "6-12 months", focus: "Leash manners and impulse control" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Obedience training", "Scent work"], precautions: ["Watch for bloat symptoms after exercise", "Shedding season — brush regularly"] },
      summer: { activities: ["Early morning walks", "Indoor enrichment", "Swimming (gentle)"], precautions: ["CRITICAL: Giant breed overheat easily — never exercise in heat", "Always provide AC and water", "Paw protection on hot pavement"] },
      fall: { activities: ["Comfortable hikes", "Training sessions", "Gentle play"], precautions: ["Monitor weight — Danes need lean body condition", "Joint care as cooler weather arrives"] },
      winter: { activities: ["Short snow walks", "Indoor training", "Puzzle games"], precautions: ["Short coat — needs coat in cold weather", "Arthritis management for older dogs", "Slippery surfaces risk injury"] }
    },
    healthCautions: [
      "CRITICAL: GDV (bloat) — highest risk breed; consider prophylactic gastropexy",
      "Dilated cardiomyopathy (DCM) — heart screening essential",
      "Hip dysplasia — OFA screening recommended",
      "Bone cancer (osteosarcoma) — higher incidence in giant breeds",
      "Joint issues — maintain lean weight throughout life"
    ],
  },
{
    breedName: "Pomeranian",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Pomerania (Germany/Poland)",
      originalPurpose: "Companion dog (downsized from larger spitz-type sled dogs)",
      developed: "19th century (from larger Spitz breeds)",
      summary: "Pomeranians were developed from larger Spitz-type sled dogs in the Pomerania region. They were downsized through selective breeding to become companion animals. Queen Victoria's love for the breed made them immensely popular in Victorian England — she owned a particularly small Pomeranian named Marco.",
      funFact: "Queen Victoria owned a Pomeranian named Marco who weighed only 12 pounds — before her influence, Poms weighed up to 30 pounds!"
    },
    activities: {
      primary: ["Interactive play", "Short walks", "Trick training"],
      secondary: ["Agility (small dog)", "Obedience", "Nose work", "Indoor play"],
      avoid: [
        { activity: "Rough handling by children", reason: "Small and delicate — can be easily injured by falls or rough play" },
        { activity: "Jumping from heights", reason: "Patellar luxation risk — use ramps for furniture" },
        { activity: "Extreme heat exercise", reason: "Small size and thick coat make them prone to overheating" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich, bite-sized", servingNote: "2-4 berries per day" },
        { name: "Baby carrot (sliced thin)", type: "vegetable", description: "Low-calorie, crunchy dental treat", servingNote: "1-2 thin slices" },
        { name: "Freeze-dried chicken (small)", type: "protein", description: "High-value training reward", servingNote: "Tiny crumbles" },
        { name: "Green beans (chopped)", type: "vegetable", description: "Low-calorie, fiber-rich", servingNote: "A few small pieces" }
      ],
      avoid: [
        { name: "Large treats", reason: "Too large for small mouths; choking hazard" },
        { name: "High-calorie treats", reason: "Pomeranians are prone to obesity; extremely small calorie budget" },
        { name: "Xylitol treats", reason: "Toxic — especially dangerous in small breeds" }
      ],
      maxDailyTreatCalories: 25
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small squeaky balls", "Crinkle toys", "Ping pong balls"], description: "Small, soft fetch toys for short-distance games" },
        { category: "puzzle", examples: ["Kong (small)", "Snuffle mat", "Treat-dispensing ball"], description: "Intelligent breed needs mental enrichment" },
        { category: "cuddle", examples: ["Plush toys (small)", "Fuzzy blankets", "Kong Cozie"], description: "Pomeranians love comfort toys" },
        { category: "tug", examples: ["Small fleece tug", "Wand toys (gentle)"], description: "Gentle tug-of-war" }
      ],
      avoid: [
        { toy: "Large chew toys", reason: "Too big for Pom's mouth" },
        { toy: "Hard nylon chews", reason: "Can fracture small teeth" },
        { toy: "Toys with small button eyes", reason: "Choking hazard — remove or choose embroidered faces" }
      ],
      suitability: { fetch: 3, chew: 2, puzzle: 4, cuddle: 5, agility: 3, swim: 1, tug: 2 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Small dog syndrome (barking)", solution: "Don't let cute size fool you — train with consistent boundaries like any dog" },
        { issue: "Potty training", solution: "Small bladders = more frequent potty breaks; consistency is key" },
        { issue: "Selective hearing", solution: "Pomeranians are smart but can be stubborn — use high-value rewards" }
      ],
      approach: "Poms are intelligent and trainable despite their small size. They excel at trick training and agility. Positive reinforcement works best. Treat them like a real dog, not a toy — they need structure and boundaries.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — small breeds can become fear-biters without proper exposure" },
        { age: "4-6 months", focus: "Small dog confidence — don't coddle, build confidence through positive experiences" },
        { age: "6-12 months", focus: "Trick training — Poms love to learn and perform" }
      ],
    },
    seasonal: {
      spring: { activities: ["Short walks", "Trick training", "Grooming sessions"], precautions: ["Heavy shedding — daily brushing", "Allergy season — watch for skin issues"] },
      summer: { activities: ["Indoor play in AC", "Early short walks", "Frozen treats"], precautions: ["Thick coat — overheat easily", "Never leave in hot car", "Consider summer haircut (not shaved)"] },
      fall: { activities: ["Comfortable walks", "Puzzle games", "Trick training"], precautions: ["Shedding season — increase brushing", "Slightly increase exercise in cooler weather"] },
      winter: { activities: ["Short snow walks", "Indoor play", "Training sessions"], precautions: ["Small and short-coated variants need sweaters", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Patellar luxation — common in toy breeds",
      "Tracheal collapse — use harness instead of collar",
      "Dental disease — tiny mouths = crowded teeth; regular dental care essential",
      "Alopecia X (black skin disease) — hormonal coat loss",
      "Hypoglycemia — especially in puppies; frequent small meals"
    ],
  },
{
    breedName: "Chihuahua (Smooth Coat)",
    species: "canine",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-01",
    approvedDate: "2026-07-05",
    origin: {
      region: "Mexico",
      originalPurpose: "Companion dog to ancient civilizations",
      developed: "Ancient (pre-Columbian era)",
      summary: "The Chihuahua is the world's smallest dog breed and one of the oldest in the Americas, descended from the Techichi dog of the Toltec civilization. They were later refined in the Mexican state of Chihuahua. Their bold, confident personality belies their tiny size.",
      funFact: "Chihuahuas have the largest brain-to-body-size ratio of any dog breed!"
    },
    activities: {
      primary: ["Indoor play", "Short walks", "Lap time"],
      secondary: ["Trick training", "Nose work", "Agility (small dog)", "Cuddle time"],
      avoid: [
        { activity: "Rough play with large dogs", reason: "Extremely small size makes them vulnerable to serious injury" },
        { activity: "Jumping from heights", reason: "Patellar luxation and fracture risk — use ramps for furniture" },
        { activity: "Cold weather walks", reason: "Smooth coat provides almost no cold protection" }
      ],
      weeklyMinutesMin: 90,
      weeklyMinutesMax: 210
    },
    treats: {
      recommended: [
        { name: "Freeze-dried chicken (crumbled)", type: "protein", description: "High-value training reward", servingNote: "Tiny crumbles — 1/4 teaspoon size" },
        { name: "Blueberries (sliced)", type: "fruit", description: "Antioxidant-rich, easy to portion", servingNote: "1-2 sliced berries" },
        { name: "Baby carrot (sliver)", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "1-2 thin slices" },
        { name: "Training treats (tiny)", type: "commercial", description: "Specially formulated tiny treats", servingNote: "Choose treats under 2 calories each" }
      ],
      avoid: [
        { name: "Large treats", reason: "Too large for tiny mouths; choking hazard" },
        { name: "High-fat treats", reason: "Prone to pancreatitis and obesity" },
        { name: "Xylitol treats", reason: "Toxic — even small amounts can be life-threatening, especially in small dogs. Seek veterinary care immediately after possible ingestion." }
      ],
      maxDailyTreatCalories: 15
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Mini tennis balls", "Crinkle balls", "Ping pong balls"], description: "Tiny fetch toys for indoor play" },
        { category: "cuddle", examples: ["Small plush toys", "Fleece blankets", "Kong Cozie (xs)"], description: "Chihuahuas love comfort and warmth" },
        { category: "puzzle", examples: ["Snuffle mat (small)", "Kong (puppy size)", "Treat ball (tiny)"], description: "Mental stimulation for a clever breed" },
        { category: "chew", examples: ["Nylabone (puppy)", "Yak chews (tiny)", "Whimzees (tiny)"], description: "Light chews only — Chihuahuas have delicate jaws" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can fracture delicate teeth" },
        { toy: "Large rope toys", reason: "Too big for tiny mouths" },
        { toy: "Rawhide chews", reason: "Can cause blockages in small dogs" }
      ],
      suitability: { fetch: 3, chew: 1, puzzle: 3, cuddle: 5, agility: 2, swim: 1, tug: 1 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Warmth"],
      challenges: [
        { issue: "Small dog syndrome", solution: "Chihuahuas are not 'accessories' — train consistently and don't allow demand barking" },
        { issue: "Trembling/shyness", solution: "Build confidence through positive exposure; don't reinforce fear by coddling" },
        { issue: "Potty training", solution: "Tiny bladders = frequent outings; Chihuahuas can be stubborn about house training" }
      ],
      approach: "Chihuahuas are intelligent but can be stubborn. Positive reinforcement with tiny treats works well. Socialization is critical to prevent fear-based aggression. They bond closely with one person and can be wary of strangers without proper exposure.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — critical for preventing fear aggression" },
        { age: "4-6 months", focus: "Confidence building — expose to various people and situations" },
        { age: "6-12 months", focus: "Small dog manners — no demand barking, polite greetings" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Indoor play", "Training sessions"], precautions: ["Allergy season — watch for skin issues", "Check for ticks"] },
      summer: { activities: ["Play in AC", "Short early walks", "Frozen treats"], precautions: ["Can overheat quickly", "Never leave in hot environments", "Paw protection on pavement"] },
      fall: { activities: ["Comfortable walks", "Puzzle games", "Trick training"], precautions: ["Coat not fully grown in — may need sweater in cool weather"] },
      winter: { activities: ["Indoor play", "Trick training", "Cuddle time"], precautions: ["CRITICAL: Smooth coat needs sweaters/coats in cold weather", "Extremely cold-sensitive", "Small size loses heat quickly"] }
    },
    healthCautions: [
      "Patellar luxation — very common in small breeds",
      "Tracheal collapse — always use harness, never collar",
      "Hydrocephalus — 'open fontanel' common in toy breeds",
      "Dental disease — crowded teeth need regular cleaning",
      "Hypoglycemia — small dogs need frequent meals"
    ],
  },
{
    breedName: "Shih Tzu",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "China (Tibet origin)",
      originalPurpose: "Palace companion dog for Chinese royalty",
      developed: "Ancient (over 1000 years)",
      summary: "The Shih Tzu (meaning 'little lion' in Chinese) was bred exclusively for Chinese palace life, likely from Tibetan Lhasa Apso and Pekingese stock. These dogs were so cherished that they were considered royal property and often given as precious gifts. They were bred to be indoor companions.",
      funFact: "Shih Tzus have been owned by Chinese emperors since the Tang Dynasty and were considered so sacred that commoners had to bow to them!"
    },
    activities: {
      primary: ["Short walks", "Indoor play", "Companionship"],
      secondary: ["Trick training", "Puzzle toys", "Gentle hiking", "Lap time"],
      avoid: [
        { activity: "Exercise in hot/humid weather", reason: "Brachycephalic airway — Shih Tzus overheat easily" },
        { activity: "Strenuous exercise", reason: "Short snout limits oxygen intake; respiratory distress risk" },
        { activity: "Rough play", reason: "Prominent eyes are vulnerable to injury" }
      ],
      weeklyMinutesMin: 90,
      weeklyMinutesMax: 210
    },
    treats: {
      recommended: [
        { name: "Baby carrot (sliced thin)", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "1-2 thin slices per day" },
        { name: "Freeze-dried chicken (small)", type: "protein", description: "High-value training reward", servingNote: "Tiny crumbles" },
        { name: "Blueberries (sliced)", type: "fruit", description: "Antioxidant-rich", servingNote: "2-3 sliced berries" },
        { name: "Dental treats (small, soft)", type: "dental", description: "Supports dental health for small jaws", servingNote: "1 per day, small-breed size" }
      ],
      avoid: [
        { name: "Hard chews", reason: "Small jaws and dental issues — hard chews can break teeth" },
        { name: "High-calorie treats", reason: "Shih Tzus are prone to obesity" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" }
      ],
      maxDailyTreatCalories: 25
    },
    toys: {
      recommended: [
        { category: "cuddle", examples: ["Small plush toys", "Soft squeaky toys", "Kong Cozie (xs)"], description: "Shih Tzus love comfort toys and gentle play" },
        { category: "puzzle", examples: ["Kong (small)", "Snuffle mat", "Treat ball (tiny)"], description: "Intelligent breed needs mental stimulation" },
        { category: "fetch", examples: ["Crinkle balls", "Small squeaky balls", "Ping pong balls"], description: "Short-distance fetch — gentle on their joints" },
        { category: "chew", examples: ["Nylabone (puppy)", "Whimzees (tiny)"], description: "Soft, small chews appropriate for delicate jaws" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can break teeth — Shih Tzus have dental crowding" },
        { toy: "Rough tug toys", reason: "Neck sensitivity — avoid jerking motions" }
      ],
      suitability: { fetch: 2, chew: 2, puzzle: 3, cuddle: 5, agility: 1, swim: 1, tug: 1 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Gentle petting"],
      challenges: [
        { issue: "Stubbornness", solution: "Use high-value treats; Shih Tzus can be independent" },
        { issue: "Potty training", solution: "Small bladders — be patient and consistent with schedule" },
        { issue: "Grooming resistance", solution: "Start grooming early — make brush time a positive experience" }
      ],
      approach: "Shih Tzus respond well to gentle, positive training with food rewards. They were bred to be companions and thrive on human interaction. Keep training sessions short and positive. Harsh corrections can cause them to shut down.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — expose to various people and handling" },
        { age: "4-6 months", focus: "Grooming tolerance — brush, bathe, and face cleaning" },
        { age: "6-12 months", focus: "Basic obedience and potty training reinforcement" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Grooming sessions", "Indoor play"], precautions: ["Allergy season — Shih Tzus prone to skin and eye allergies", "Daily grooming important"] },
      summer: { activities: ["Air-conditioned play only", "Frozen treats", "Gentle indoor games"], precautions: ["CRITICAL: Brachycephalic — overheat easily", "Never exercise in heat", "Keep face folds clean and dry"] },
      fall: { activities: ["Comfortable short walks", "Puzzle games", "Lap time"], precautions: ["Shedding season — increase brushing", "Enjoy the cooler weather"] },
      winter: { activities: ["Short cold walks (with sweater)", "Indoor play", "Cuddle time"], precautions: ["Long coat needs protection from snow and salt", "Small size loses heat quickly", "Dry face folds after wet walks"] }
    },
    healthCautions: [
      "Brachycephalic airway syndrome — avoid heat and stress",
      "Eye issues (proptosis, dry eye, corneal ulcers) — very common",
      "Dental disease — crowded teeth need regular cleaning",
      "Skin fold dermatitis — daily face cleaning essential"
    ],
  },
{
    breedName: "Boston Terrier",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Boston, Massachusetts, USA",
      originalPurpose: "Companion dog and ratter",
      developed: "Late 19th century",
      summary: "The Boston Terrier, nicknamed the 'American Gentleman', was developed in Boston from crosses between the English Bulldog and the now-extinct English White Terrier. They are one of the few truly American breeds and were the first U.S. breed recognized by the AKC.",
      funFact: "Boston Terriers were originally bred for pit fighting but were quickly refined into gentle companions — a true rags-to-riches story!"
    },
    activities: {
      primary: ["Short walks", "Interactive play", "Trick training"],
      secondary: ["Agility (limited)", "Nose work", "Obedience", "Gentle hiking"],
      avoid: [
        { activity: "Strenuous exercise in heat", reason: "Brachycephalic tendencies — Bostons overheat easily" },
        { activity: "Swimming unsupervised", reason: "Heavy head and short snout make swimming dangerous" },
        { activity: "Long-distance running", reason: "Respiratory limitations due to shortened airway" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Baby carrots (sliced)", type: "vegetable", description: "Low-calorie, crunchy treat", servingNote: "2-3 thin slices per day" },
        { name: "Green beans (chopped)", type: "vegetable", description: "Low-calorie, fiber-rich", servingNote: "Small handful, steamed" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Tiny pieces, 3-5 per day" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich, bite-sized", servingNote: "3-5 berries" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Boston Terriers prone to obesity and gas" },
        { name: "Large hard chews", reason: "Can damage teeth; Bostons have prominent eyes prone to injury" }
      ],
      maxDailyTreatCalories: 40
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small tennis balls", "Chuckit! (small)", "Soft frisbee"], description: "Bostons love fetch — use size-appropriate balls" },
        { category: "chew", examples: ["Kong (small)", "Nylabone Flex", "West Paw Zogoflex"], description: "Moderate chewers — durable but not extreme" },
        { category: "puzzle", examples: ["Kong Wobbler (small)", "Snuffle mat", "Outward Hound puzzle"], description: "Food-motivated breed excels at puzzle toys" },
        { category: "tug", examples: ["Fleece tug", "Rope toy (small)", "Kong Tugga (small)"], description: "Great for interactive play and bonding" }
      ],
      avoid: [
        { toy: "Thin latex toys", reason: "Can be destroyed and ingested" },
        { toy: "Toys with small parts", reason: "Bostons are enthusiastic chewers" }
      ],
      suitability: { fetch: 4, chew: 3, puzzle: 4, cuddle: 5, agility: 3, swim: 1, tug: 3 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Stubbornness", solution: "Boston Terriers are smart but can be willful — use high-value rewards" },
        { issue: "Flatulence", solution: "Dietary management — Bostons are notoriously gassy; avoid table scraps" },
        { issue: "Separation anxiety", solution: "Bostons bond closely — practice gradual alone time from puppyhood" }
      ],
      approach: "Boston Terriers are intelligent and eager to please. Positive reinforcement with food rewards works very well. They are sensitive and do not respond well to harsh corrections. Keep training fun and varied.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Basic obedience and impulse control" },
        { age: "6-12 months", focus: "Leash manners — Bostons can be strong pullers" }
      ],
    },
    seasonal: {
      spring: { activities: ["Short walks", "Play in yard", "Training sessions"], precautions: ["Allergy season — Bostons prone to skin allergies", "Watch for eye irritation from pollen"] },
      summer: { activities: ["Early short walks", "Indoor play in AC", "Frozen treat toys"], precautions: ["CRITICAL: Avoid heat — brachycephalic breed", "Never walk in midday heat", "Watch for signs of overheating"] },
      fall: { activities: ["Comfortable walks", "Fetch in park", "Obedience training"], precautions: ["Enjoy the cooler weather — Boston's favorite season", "Watch for mushrooms and acorns"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor fetch", "Puzzle games"], precautions: ["Short coat — needs coat in cold weather", "Small size loses heat quickly"] }
    },
    healthCautions: [
      "Brachycephalic syndrome — avoid heat and overexertion",
      "Cherry eye — common, requires veterinary attention",
      "Patellar luxation — common in small breeds",
      "Deafness — higher incidence in Boston Terriers",
      "Eye injuries — prominent eyes are vulnerable"
    ],
  },
{
    breedName: "Pug",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "China",
      originalPurpose: "Companion dog for Chinese royalty",
      developed: "Ancient (over 2000 years)",
      summary: "Pugs have ancient origins in China, where they were bred as companions for the imperial family. They later became favorites in European royal courts.",
      funFact: "Pugs were the official dog of the House of Orange!"
    },
    activities: {
      primary: ["Short walks", "Gentle play", "Companionship"],
      secondary: ["Puzzle toys", "Trick training", "Nose work"],
      avoid: [
        { activity: "Any exercise in heat/humidity", reason: "CRITICAL: Brachycephalic breed — Pugs cannot pant effectively" },
        { activity: "Strenuous exercise", reason: "Severe respiratory limitations" },
        { activity: "Swimming", reason: "Extremely high drowning risk" }
      ],
      weeklyMinutesMin: 70,
      weeklyMinutesMax: 140
    },
    treats: {
      recommended: [
        { name: "Green beans (chopped)", type: "vegetable", description: "Low-calorie, weight-friendly", servingNote: "Small handful, steamed" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich", servingNote: "3-5 berries" },
        { name: "Small training treats", type: "commercial", description: "Low-calorie soft treats", servingNote: "Choose very small" }
      ],
      avoid: [
        { name: "Large hard chews", reason: "Brachycephalic jaws struggle to chew" },
        { name: "High-calorie treats", reason: "Pugs are extremely prone to obesity" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" }
      ],
      maxDailyTreatCalories: 25
    },
    toys: {
      recommended: [
        { category: "puzzle", examples: ["Snuffle mat", "Kong (small)", "Slow feeder"], description: "Mental stimulation without physical exertion" },
        { category: "cuddle", examples: ["Plush toys", "Fuzzy blankets"], description: "Pugs love comfort and warmth" },
        { category: "chew", examples: ["Kong (puppy soft)", "Nylabone Flex (small)"], description: "Soft chews only" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can damage teeth" },
        { toy: "Tennis balls", reason: "Too large for Pug mouths" },
        { toy: "Frisbee", reason: "Jumping poses respiratory risks" }
      ],
      suitability: { fetch: 2, chew: 2, puzzle: 4, cuddle: 5, agility: 1, swim: 1, tug: 2 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Gentle petting"],
      challenges: [
        { issue: "Stubbornness", solution: "Use high-value treats; keep sessions short (3-5 min)" },
        { issue: "Potty training", solution: "Consistent schedule essential" },
        { issue: "Breathing issues during training", solution: "Train in cool, well-ventilated areas" }
      ],
      approach: "Pugs are intelligent but stubborn. Food is the primary motivator. Keep sessions very short.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization" },
        { age: "4-6 months", focus: "Basic obedience and potty training" },
        { age: "6-12 months", focus: "Impulse control" }
      ],
    },
    seasonal: {
      spring: { activities: ["Short walks in cool weather", "Puzzle toys"], precautions: ["Clean face folds daily"] },
      summer: { activities: ["Indoor AC play ONLY", "Frozen treats"], precautions: ["CRITICAL: Never exercise above 24C", "Watch for overheating"] },
      fall: { activities: ["Short walks", "Puzzle games", "Cuddle time"], precautions: ["Enjoy the cool weather"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor play"], precautions: ["Short coat provides no cold protection"] }
    },
    healthCautions: [
      "CRITICAL: Brachycephalic Obstructive Airway Syndrome (BOAS)",
      "Eye issues (proptosis, corneal ulcers) — very common",
      "Skin fold dermatitis — daily cleaning essential",
      "Obesity — worsens all health issues",
      "Pug Dog Encephalitis (PDE)"
    ],
  },
{
    breedName: "Pembroke Welsh Corgi",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Pembrokeshire, Wales",
      originalPurpose: "Cattle herding by nipping heels",
      developed: "12th century",
      summary: "The Pembroke Welsh Corgi was developed in Wales as a cattle herding dog. Their short stature allowed them to dodge kicks. They are famously associated with the British royal family.",
      funFact: "Corgis were believed to be fairy war steeds — markings on their backs were thought to be saddle marks!"
    },
    activities: {
      primary: ["Herding sports", "Agility", "Hiking"],
      secondary: ["Obedience", "Trick training", "Fetch", "Nose work"],
      avoid: [
        { activity: "Excessive stair climbing", reason: "Risk of IVDD and joint stress" },
        { activity: "Jumping on/off furniture", reason: "Back vulnerability; use ramps" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 420
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich", servingNote: "5-8 berries" },
        { name: "Dental chews", type: "dental", description: "Supports dental health", servingNote: "1 per day, small-breed" }
      ],
      avoid: [
        { name: "High-calorie treats", reason: "Corgis prone to obesity which stresses the back" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" }
      ],
      maxDailyTreatCalories: 60
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Tennis balls", "Chuckit! (small)", "Frisbee (soft)"], description: "Corgis have strong chase drive" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Intelligent breed needs mental stimulation" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "Benebone"], description: "Moderate chewers" },
        { category: "tug", examples: ["Rope toys", "Kong Tugga"], description: "Great for bonding" }
      ],
      avoid: [
        { toy: "High jumping toys", reason: "Jumping increases IVDD risk" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 4, cuddle: 4, agility: 5, swim: 2, tug: 4 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Nipping at heels", solution: "Redirect herding instinct to toys" },
        { issue: "Barking", solution: "Corgis are vocal — provide mental stimulation" },
        { issue: "Stubbornness", solution: "Use high-value rewards" }
      ],
      approach: "Corgis are highly intelligent and trainable. Positive reinforcement works best.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization" },
        { age: "4-6 months", focus: "Impulse control and nipping prevention" },
        { age: "6-12 months", focus: "Advanced obedience" }
      ],
    },
    seasonal: {
      spring: { activities: ["Herding trials", "Agility", "Hiking"], precautions: ["Heavy shedding", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Indoor games"], precautions: ["Double coat — can overheat"] },
      fall: { activities: ["Hiking", "Agility training", "Fetch"], precautions: ["Coat growing in for winter"] },
      winter: { activities: ["Snow play", "Indoor agility"], precautions: ["Paw care in icy conditions", "Back care — avoid slips"] }
    },
    healthCautions: [
      "IVDD (intervertebral disc disease) — prevent jumping, use ramps",
      "Hip dysplasia — OFA screening recommended",
      "Obesity — worsens back problems",
      "Progressive retinal atrophy (PRA)"

    ],
  },
{
    breedName: "Australian Shepherd",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "United States (despite the name)",
      originalPurpose: "Herding livestock on ranches",
      developed: "19th century",
      summary: "Despite their name, Australian Shepherds were developed in the United States from Basque herding dogs that arrived via Australia. They became iconic ranch dogs in the American West.",
      funFact: "Australian Shepherds are called 'ghost-eyed dogs' because of their striking blue eyes!"
    },
    activities: {
      primary: ["Herding sports", "Agility", "Running"],
      secondary: ["Flyball", "Disc dog", "Hiking", "Obedience"],
      avoid: [
        { activity: "Confinement without exercise", reason: "Destructive behaviors without adequate stimulation" },
        { activity: "Repetitive high-impact on hard surfaces", reason: "Prone to hip dysplasia" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried beef liver", type: "protein", description: "High-value reward", servingNote: "Small pieces" },
        { name: "Apple slices (no seeds)", type: "fruit", description: "Vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Frisbee (soft)", "Chuckit! balls", "Herding balls"], description: "Strong prey drive — fetch is ideal" },
        { category: "puzzle", examples: ["Nina Ottosson puzzles", "Kong Genius", "Snuffle mat"], description: "Extremely intelligent" },
        { category: "tug", examples: ["Flirt pole", "Rope tug", "Kong Tugga"], description: "Satisfies prey drive" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew"], description: "Moderate to strong chewers" }
      ],
      avoid: [
        { toy: "Laser pointers", reason: "Can trigger obsessive light-chasing" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 5, cuddle: 4, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Play", "Praise", "Work"],
      challenges: [
        { issue: "Herding people/children", solution: "Redirect to appropriate toys and sports" },
        { issue: "Excessive barking", solution: "Provide mental stimulation" },
        { issue: "Over-arousal", solution: "Teach 'settle'" }
      ],
      approach: "Brilliant but need a job. Positive reinforcement with variety works best.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization" },
        { age: "4-6 months", focus: "Impulse control" },
        { age: "6-12 months", focus: "Dog sport introduction" }
      ],
    },
    seasonal: {
      spring: { activities: ["Agility", "Herding trials", "Hiking"], precautions: ["Heavy shedder", "Check for ticks"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor games"], precautions: ["Double coat — can overheat"] },
      fall: { activities: ["Dog sports", "Hiking", "Frisbee"], precautions: ["Watch for burrs"] },
      winter: { activities: ["Snow play", "Indoor agility", "Trick training"], precautions: ["Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip/elbow dysplasia — OFA screening recommended",
      "Collie eye anomaly (CEA) — genetic eye condition",
      "Epilepsy — higher incidence",
      "Multi-drug sensitivity (MDR1 mutation) — genetic test recommended"
    ],
  },
{
    breedName: "Cavalier King Charles Spaniel",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "England, United Kingdom",
      originalPurpose: "Companion dog for royalty",
      developed: "17th century (modern revival: 1920s)",
      summary: "Cavalier King Charles Spaniels were named after King Charles II, who was rarely seen without his spaniels. The breed nearly died out in the 19th century but was revived in the 1920s and has become one of the most beloved companion breeds.",
      funFact: "King Charles II was so devoted to his spaniels that he decreed they could enter any building, including Parliament!"
    },
    activities: {
      primary: ["Short walks", "Gentle play", "Companionship"],
      secondary: ["Trick training", "Puzzle toys", "Nose work", "Agility (limited)"],
      avoid: [
        { activity: "Strenuous exercise in heat", reason: "Brachycephalic tendencies — Cavaliers can overheat" },
        { activity: "High-impact jumping", reason: "Syringomyelia (SM) risk — neck and spine vulnerability" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Baby carrots (sliced)", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 thin slices per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 3-5 per day" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich", servingNote: "3-5 berries" },
        { name: "Dental chews (small)", type: "dental", description: "Supports dental health", servingNote: "1 per day, small-breed size" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Cavaliers prone to obesity and heart issues" },
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Xylitol treats", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 35
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small soft balls", "Crinkle toys", "Squeaky toys"], description: "Gentle fetch games" },
        { category: "cuddle", examples: ["Plush toys", "Kong Cozie", "Fleece blankets"], description: "Cavaliers love comfort toys" },
        { category: "puzzle", examples: ["Kong (small)", "Snuffle mat", "Treat ball"], description: "Moderate mental stimulation" },
        { category: "chew", examples: ["Nylabone (small)", "Whimzees (small)"], description: "Light chewers" }
      ],
      avoid: [
        { toy: "Hard nylon bones", reason: "Can damage teeth; Cavaliers have delicate jaws" },
        { toy: "Rough tug toys", reason: "Neck sensitivity — avoid jerking" }
      ],
      suitability: { fetch: 3, chew: 2, puzzle: 3, cuddle: 5, agility: 2, swim: 2, tug: 2 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Gentle petting"],
      challenges: [
        { issue: "Separation anxiety", solution: "Cavaliers bond deeply — practice gradual alone time" },
        { issue: "Potty training", solution: "Small bladders — consistent schedule essential" }
      ],
      approach: "Cavaliers are eager to please and respond beautifully to gentle, positive reinforcement. They are sensitive and do not respond well to harsh corrections.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, other dogs, handling" },
        { age: "4-6 months", focus: "Basic obedience and house training" },
        { age: "6-12 months", focus: "Grooming tolerance and trick training" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Training sessions", "Garden play"], precautions: ["Allergy season — Cavaliers prone to ear infections"] },
      summer: { activities: ["Early short walks", "Indoor play", "Frozen treats"], precautions: ["Brachycephalic tendencies — avoid heat", "Never leave in hot car"] },
      fall: { activities: ["Comfortable walks", "Puzzle games", "Lap time"], precautions: ["Enjoy the cool weather"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor play"], precautions: ["Single coat — needs warm clothing", "Small size loses heat quickly"] }
    },
    healthCautions: [
      "CRITICAL: Mitral valve disease (MVD) — most common heart disease; annual cardiology exams",
      "Syringomyelia (SM) — skull malformation; neurological screening recommended",
      "Ear infections — long ears trap moisture; clean weekly",
      "Patellar luxation — common in small breeds",
      "Obesity — worsens heart and joint issues"
    ],
  },
{
    breedName: "Shiba Inu",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Japan",
      originalPurpose: "Hunting small game in mountainous terrain",
      developed: "Ancient (300 BC), modern breed: 20th century",
      summary: "The Shiba Inu is Japan's smallest native spitz breed and one of six ancient Japanese dog breeds. They were originally bred to hunt small game in the mountainous regions of Japan. Their independent nature and spirited personality have made them internet sensations.",
      funFact: "Shiba Inus are known for the 'Shiba scream' — a high-pitched vocalization they make when displeased or excited!"
    },
    activities: {
      primary: ["Hiking", "Scent work", "Exploring"],
      secondary: ["Agility", "Obedience", "Trick training", "Nose work"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "Very high prey drive — Shibas will chase and are difficult to recall" },
        { activity: "Rough dog park play", reason: "Same-sex aggression is common; Shibas prefer select dog friends" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Freeze-dried fish", type: "protein", description: "Omega-3 rich, Shibas love fishy treats", servingNote: "Small pieces, 3-5 per day" },
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces" },
        { name: "Dental chews", type: "dental", description: "Supports dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Shibas prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 60
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Squeaky toys", "Crinkle toys"], description: "Shibas have strong prey drive — fetch satisfies this" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Intelligent breed needs mental stimulation" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "Yak chews"], description: "Moderate chewers" },
        { category: "tug", examples: ["Rope toys", "Flirt pole"], description: "Shibas enjoy controlled tug" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Shibas may de-stuff and ingest" },
        { toy: "Thin latex toys", reason: "Will be destroyed" }
      ],
      suitability: { fetch: 4, chew: 3, puzzle: 4, cuddle: 2, agility: 4, swim: 2, tug: 3 }
    },
    training: {
      trainability: 2,
      motivators: ["Food", "Respect", "Consistency"],
      challenges: [
        { issue: "Stubborn independence", solution: "Shibas are independent — use high-value rewards and keep sessions short" },
        { issue: "Selective hearing", solution: "Never trust off-leash — Shibas have poor recall" },
        { issue: "Aggression toward same-sex dogs", solution: "Early and extensive socialization critical" }
      ],
      approach: "Shibas are intelligent but notoriously independent. They are not people-pleasers like retrievers. Use high-value food rewards and keep training sessions short and varied. Patience is essential.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, handling" },
        { age: "4-6 months", focus: "Recall (even though imperfect) and impulse control" },
        { age: "6-12 months", focus: "Bite inhibition — Shibas can be mouthy" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Scent work", "Exploring"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Indoor enrichment", "Nose work"], precautions: ["Double coat — can overheat", "Always provide shade and water"] },
      fall: { activities: ["Perfect weather for hiking", "Scent games", "Agility"], precautions: ["Coat growing in for winter", "Enjoy the cool weather"] },
      winter: { activities: ["Snow play", "Indoor games", "Puzzle toys"], precautions: ["Double coat provides excellent insulation", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening recommended",
      "Patellar luxation — common in small spitz breeds",
      "Allergies — Shibas prone to skin and food allergies",
      "Glaucoma — higher incidence in Shibas",
      "Progressive retinal atrophy (PRA)"
    ],
  },
{
    breedName: "Doberman Pinscher",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Germany",
      originalPurpose: "Personal protection dog",
      developed: "Late 19th century",
      summary: "The Doberman Pinscher was developed by Karl Friedrich Louis Dobermann in Germany, who wanted a medium-sized protection dog. The breed was created from several breeds including the Rottweiler, German Pinscher, and Black and Tan Terrier.",
      funFact: "Dobermans are born with floppy ears and long tails — the cropping/docking seen in some countries is purely cosmetic and banned in many nations."
    },
    activities: {
      primary: ["Obedience training", "Running", "Hiking"],
      secondary: ["Agility", "Scent work", "Tug-of-war", "Schutzhund"],
      avoid: [
        { activity: "Exercise in extreme cold", reason: "Short coat provides minimal cold protection" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk — deep-chested breed" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried beef liver", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day, large-breed" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic to dogs" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 120
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Kong tennis balls", "Frisbee"], description: "High energy — fetch is excellent exercise" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "West Paw"], description: "Powerful chewers — need durable options" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzles", "Snuffle mat"], description: "Intelligent breed needs mental stimulation" },
        { category: "tug", examples: ["Kong Tugga", "Rope tug", "Flirt pole"], description: "Great for bonding and impulse control" }
      ],
      avoid: [
        { toy: "Thin plastic toys", reason: "Will be destroyed and ingested" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 5, puzzle: 4, cuddle: 3, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Play", "Work"],
      challenges: [
        { issue: "Leash reactivity", solution: "Early socialization critical — Dobermans are naturally protective" },
        { issue: "Separation anxiety", solution: "Bond strongly — crate training and gradual alone time essential" },
        { issue: "Stubbornness", solution: "Dobermans are smart but can test boundaries — be consistent" }
      ],
      approach: "Dobermans are highly intelligent and need confident, consistent training. Positive reinforcement with clear boundaries works best. They need a job to do.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-8 months", focus: "Impulse control and bite inhibition" },
        { age: "8-18 months", focus: "Structured obedience and advanced training" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Obedience training", "Scent work"], precautions: ["Shedding season — brush regularly", "Check for ticks"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor training"], precautions: ["Short coat — can sunburn", "Never exercise in midday heat"] },
      fall: { activities: ["Perfect weather for training", "Hiking", "Agility"], precautions: ["Maintain exercise routine", "Watch for burrs"] },
      winter: { activities: ["Snow play (limited)", "Indoor training", "Tug-of-war"], precautions: ["Short coat — needs coat in freezing weather", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Dilated cardiomyopathy (DCM) — heart screening essential",
      "Von Willebrand's disease — bleeding disorder; genetic testing recommended",
      "Hip dysplasia — OFA screening",
      "GDV (bloat) — deep-chested risk",
      "Hypothyroidism — common in the breed"
    ],
  },
{
    breedName: "Bernese Mountain Dog",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Switzerland",
      originalPurpose: "Farm dog — cattle droving, drafting, guarding",
      developed: "Ancient (standardized early 1900s)",
      summary: "The Bernese Mountain Dog originated in the Swiss Alps as an all-purpose farm dog. They drove cattle, pulled carts, and guarded farms. Their striking tri-color coat and gentle temperament have made them beloved family dogs worldwide.",
      funFact: "Bernese Mountain Dogs were once used as cart dogs in Switzerland, pulling milk carts and other goods to market!"
    },
    activities: {
      primary: ["Hiking", "Carting", "Gentle play"],
      secondary: ["Obedience", "Agility (limited)", "Swimming", "Therapy work"],
      avoid: [
        { activity: "Exercise in extreme heat", reason: "Thick double coat — overheat easily" },
        { activity: "High-impact exercise before 18 months", reason: "Joint development — risk of hip/elbow dysplasia" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk in deep-chested dogs" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried beef", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews (large)", type: "dental", description: "Dental health", servingNote: "1 per day, large-breed" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Berners prone to obesity and pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Cooked bones", reason: "Can splinter" }
      ],
      maxDailyTreatCalories: 130
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Jolly Ball", "Chuckit! balls", "Kong tennis balls"], description: "Gentle fetch — Berners enjoy but don't obsess" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "Benebone"], description: "Moderate to strong chewers" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Mental stimulation" },
        { category: "tug", examples: ["Rope toys", "Kong Tugga"], description: "Gentle tug" }
      ],
      avoid: [
        { toy: "Small toys", reason: "Can be swallowed — large breed" },
        { toy: "Flimsy plastic toys", reason: "Will be destroyed" }
      ],
      suitability: { fetch: 3, chew: 4, puzzle: 3, cuddle: 5, agility: 2, swim: 3, tug: 3 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Gentle handling"],
      challenges: [
        { issue: "Stubbornness", solution: "Berners can be independent — use positive reinforcement" },
        { issue: "Pulling on leash", solution: "Strong breed — use front-clip harness from puppyhood" },
        { issue: "Separation anxiety", solution: "Berners bond closely — gradual alone time" }
      ],
      approach: "Berners are gentle giants who respond best to positive, patient training. They are sensitive and do not respond well to harsh corrections.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Leash manners — Berners grow large" },
        { age: "6-12 months", focus: "Basic obedience and impulse control" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Carting practice", "Gentle play"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Swimming", "Indoor enrichment"], precautions: ["CRITICAL: Thick coat — overheat easily", "Never exercise in midday heat", "Always provide AC"] },
      fall: { activities: ["Perfect hiking weather", "Carting", "Training"], precautions: ["Coat growing in for winter", "Enjoy the cool weather"] },
      winter: { activities: ["Snow play", "Carting in snow", "Gentle hikes"], precautions: ["Thick coat provides excellent insulation", "Berners love cold weather", "Joint care for older dogs"] }
    },
    healthCautions: [
      "Cancer — highest mortality cause; annual screenings essential",
      "Hip/elbow dysplasia — OFA screening",
      "GDV (bloat) — deep-chested; consider gastropexy",
      "Progressive retinal atrophy (PRA)",

      "Short lifespan (6-8 years typical) — cherish every moment"
    ],
  },
{
    breedName: "Yorkshire Terrier",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Yorkshire, England",
      originalPurpose: "Ratting in clothing mills and mines",
      developed: "19th century",
      summary: "The Yorkshire Terrier was developed in northern England by mill workers and miners to catch rats. Despite their tiny size and glamorous appearance today, they are working terriers at heart — bold, confident, and energetic.",
      funFact: "Yorkshire Terriers were originally much larger (about 12-14 lbs) and were bred down in size to become fashionable lap dogs!"
    },
    activities: {
      primary: ["Short walks", "Indoor play", "Trick training"],
      secondary: ["Nose work", "Agility (small dog)", "Puzzle toys"],
      avoid: [
        { activity: "Rough play with large dogs", reason: "Extremely small size — easily injured" },
        { activity: "Jumping from furniture", reason: "Patellar luxation and fracture risk" },
        { activity: "Cold weather walks without protection", reason: "Single coat provides almost no warmth" }
      ],
      weeklyMinutesMin: 90,
      weeklyMinutesMax: 210
    },
    treats: {
      recommended: [
        { name: "Freeze-dried chicken (crumbled)", type: "protein", description: "High-value training reward", servingNote: "Tiny crumbles" },
        { name: "Blueberries (sliced)", type: "fruit", description: "Antioxidant-rich", servingNote: "2-3 sliced berries" },
        { name: "Baby carrot (thin slices)", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "1-2 thin slices" },
        { name: "Dental treats (tiny)", type: "dental", description: "Dental health for tiny mouth", servingNote: "1 per day, toy-breed" }
      ],
      avoid: [
        { name: "Large treats", reason: "Too large for tiny mouth" },
        { name: "High-calorie treats", reason: "Extremely small calorie budget" },
        { name: "Xylitol", reason: "Toxic — even tiny amounts dangerous" }
      ],
      maxDailyTreatCalories: 15
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Mini tennis balls", "Crinkle balls", "Ping pong balls"], description: "Short-distance fetch" },
        { category: "cuddle", examples: ["Small plush toys", "Fleece blankets", "Kong Cozie (xs)"], description: "Yorkies love comfort" },
        { category: "puzzle", examples: ["Snuffle mat (small)", "Kong (puppy)", "Treat ball (tiny)"], description: "Mental stimulation" },
        { category: "chew", examples: ["Nylabone (puppy)", "Whimzees (tiny)"], description: "Light chews only" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can fracture small teeth" },
        { toy: "Large rope toys", reason: "Too big for tiny mouth" }
      ],
      suitability: { fetch: 3, chew: 1, puzzle: 3, cuddle: 5, agility: 2, swim: 1, tug: 1 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Small dog syndrome", solution: "Train consistently — don't let size excuse bad behavior" },
        { issue: "Potty training", solution: "Tiny bladders — frequent outings; patience required" },
        { issue: "Barking", solution: "Yorkies are alert — provide enrichment; teach 'quiet'" }
      ],
      approach: "Yorkies are intelligent but can be stubborn. Positive reinforcement with tiny treats works best. They are big dogs in small bodies.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — prevent fearfulness" },
        { age: "4-6 months", focus: "Potty training consistency" },
        { age: "6-12 months", focus: "Trick training and basic manners" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Grooming sessions", "Training"], precautions: ["Allergy season — Yorkies prone to skin issues"] },
      summer: { activities: ["AC indoor play", "Short early walks", "Frozen treats"], precautions: ["Small size — overheat quickly", "Coat can be trimmed"] },
      fall: { activities: ["Comfortable walks", "Puzzle games", "Lap time"], precautions: ["Maintain grooming", "Enjoy cool weather"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor play", "Cuddle time"], precautions: ["Single coat — needs warm clothing", "Extremely cold-sensitive"] }
    },
    healthCautions: [
      "Patellar luxation — common in toy breeds",
      "Tracheal collapse — use harness, never collar",
      "Dental disease — crowded tiny teeth; regular dental care essential",
      "Portosystemic shunt (liver shunt) — genetic condition",
      "Hypoglycemia — small dogs need frequent meals"
    ],
  },
{
    breedName: "Miniature Schnauzer",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Germany",
      originalPurpose: "Small farm dog — ratter and guardian",
      developed: "Late 19th century",
      summary: "The Miniature Schnauzer was developed in Germany by crossing the Standard Schnauzer with smaller breeds like the Affenpinscher and Poodle. They were bred to be efficient ratters on farms and have since become beloved family companions.",
      funFact: "Miniature Schnauzers are the most popular of the three Schnauzer sizes and one of the most recognizable terrier breeds!"
    },
    activities: {
      primary: ["Interactive play", "Short walks", "Trick training"],
      secondary: ["Agility", "Nose work", "Obedience", "Barn hunt"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "Strong prey drive — may chase small animals" },
        { activity: "High-impact jumping", reason: "Prone to patellar luxation and joint issues; moderate exercise recommended" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Baby carrots", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Green beans", type: "vegetable", description: "Low-calorie, fiber-rich", servingNote: "Small handful, steamed" },
        { name: "Dental chews (small)", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Mini Schnauzers prone to pancreatitis and obesity" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 40
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small tennis balls", "Chuckit! (small)", "Squeaky toys"], description: "Moderate fetch drive — good for exercise" },
        { category: "puzzle", examples: ["Kong (small)", "Snuffle mat", "Nina Ottosson puzzle"], description: "Intelligent breed needs mental stimulation" },
        { category: "chew", examples: ["Nylabone DuraChew", "Kong Classic", "Benebone"], description: "Moderate chewers" },
        { category: "tug", examples: ["Rope toys", "Fleece tug", "Kong Tugga (small)"], description: "Schnauzers enjoy tug of war" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "May de-stuff and ingest" },
        { toy: "Thin latex toys", reason: "Will be destroyed" }
      ],
      suitability: { fetch: 3, chew: 3, puzzle: 4, cuddle: 4, agility: 4, swim: 2, tug: 3 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Barking", solution: "Schnauzers are vocal — provide mental stimulation and teach 'quiet'" },
        { issue: "Stubbornness", solution: "Use high-value rewards; keep training interesting" },
        { issue: "Chasing small animals", solution: "Teach solid recall and 'leave it'" }
      ],
      approach: "Miniature Schnauzers are intelligent and eager to please. Positive reinforcement works best. They can be stubborn but are highly trainable with consistency.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control and 'leave it'" },
        { age: "6-12 months", focus: "Advanced obedience and trick training" }
      ],
    },
    seasonal: {
      spring: { activities: ["Agility", "Hiking", "Nose work"], precautions: ["Allergy season — Schnauzers prone to skin issues", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Indoor play", "Frozen treats"], precautions: ["Avoid midday heat", "Wire coat provides some insulation"] },
      fall: { activities: ["Perfect weather for walks", "Barn hunt", "Agility"], precautions: ["Watch for burrs in beard", "Maintain grooming"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor games", "Trick training"], precautions: ["Single coat — needs coat in cold weather", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Pancreatitis — hereditary hyperlipidemia risk; use a strict low-fat diet, avoid table scraps, and discuss lipid screening with your veterinarian",
      "Urinary stones (bladder stones) — higher incidence",
      "Diabetes — prone to the breed",
      "Pancreatic insufficiency — monitor weight and stool quality",
      "Dental disease — regular dental care needed"
    ],
  },
{
    breedName: "Shetland Sheepdog",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Shetland Islands, Scotland",
      originalPurpose: "Herding sheep and ponies",
      developed: "19th century",
      summary: "The Shetland Sheepdog (Sheltie) was developed on the remote Shetland Islands as a small, efficient herding dog for the hardy local sheep. Despite their small size, they are true working herders with a striking resemblance to the Rough Collie.",
      funFact: "Shelties are so intelligent that they often learn commands before their owners think they've taught them!"
    },
    activities: {
      primary: ["Agility", "Obedience", "Herding sports"],
      secondary: ["Hiking", "Trick training", "Scent work", "Fetch"],
      avoid: [
        { activity: "Rough play or heavy physical correction", reason: "Extremely sensitive — can become fearfully reactive" },
        { activity: "Prolonged strenuous exercise in heat", reason: "Thick double coat — prone to overheating" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Baby carrots", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "1-2 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich", servingNote: "3-5 berries" },
        { name: "Dental chews (small)", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Shelties prone to obesity and pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 50
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small tennis balls", "Chuckit! (small)", "Frisbee (mini)"], description: "Shelties love fetch — herding instinct drives chasing" },
        { category: "puzzle", examples: ["Kong Wobbler (small)", "Nina Ottosson puzzle", "Snuffle mat"], description: "Intelligent breed needs mental enrichment" },
        { category: "tug", examples: ["Small fleece tug", "Rope toy (small)"], description: "Gentle tug-of-war" },
        { category: "comfort", examples: ["Plush toys", "Kong Cozie", "Soft squeaky toys"], description: "Many Shelties enjoy carrying soft toys" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can damage teeth" },
        { toy: "Loud squeaky toys", reason: "Noise-sensitive Shelties may find them frightening" }
      ],
      suitability: { fetch: 4, chew: 2, puzzle: 5, cuddle: 4, agility: 5, swim: 2, tug: 3 }
    },
    training: {
      trainability: 5,
      motivators: ["Praise", "Food", "Play"],
      challenges: [
        { issue: "Excessive barking", solution: "Shelties are vocal — provide mental stimulation and teach 'quiet'" },
        { issue: "Shyness/timidity", solution: "Extensive socialization from puppyhood; build confidence" },
        { issue: "Selective hearing when anxious", solution: "Use positive reinforcement — never punish timid behavior" }
      ],
      approach: "Shelties are incredibly responsive to positive reinforcement. They thrive on praise and are eager to please. Harsh corrections can damage their sensitive nature.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — Shelties can be shy without it" },
        { age: "4-6 months", focus: "Obedience foundation — Shelties love structure" },
        { age: "6-12 months", focus: "Advanced trick training and dog sport introduction" }
      ],
    },
    seasonal: {
      spring: { activities: ["Agility", "Hiking", "Herding lessons"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Indoor brain games", "Swimming"], precautions: ["Double coat — can overheat", "Never exercise in midday heat"] },
      fall: { activities: ["Obedience trials", "Agility", "Hiking"], precautions: ["Shedding season — increase brushing", "Watch for burrs"] },
      winter: { activities: ["Snow play", "Indoor trick training", "Puzzle games"], precautions: ["Double coat provides insulation", "Paw care in salted conditions"] }
    },
    healthCautions: [
      "Collie eye anomaly (CEA) — genetic eye condition",
      "Hip dysplasia — OFA screening recommended",
      "Patellar luxation — common in small herding breeds",
      "Dermatomyositis — inflammatory skin/muscle condition",
      "Hypothyroidism — common in Shelties"
    ],
  },
{
    breedName: "Bichon Frise",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "France / Mediterranean region",
      originalPurpose: "Companion dog for European nobility",
      developed: "Ancient (13th century, modern: 19th century)",
      summary: "The Bichon Frise descended from the Barbet water dog and was developed in the Mediterranean region. They were favorites of French and Italian nobility during the Renaissance. Their cheerful, playful nature and hypoallergenic coat have made them enduringly popular.",
      funFact: "Bichon Frises were once used as sailing dogs on Mediterranean ships, where they were traded as precious cargo!"
    },
    activities: {
      primary: ["Short walks", "Indoor play", "Trick training"],
      secondary: ["Agility (small dog)", "Obedience", "Nose work", "Gentle play"],
      avoid: [
        { activity: "Rough play with large dogs", reason: "Small and delicate — easily injured" },
        { activity: "Muddy/outdoor rough play", reason: "White coat is high-maintenance; prone to staining" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 3-5 per day" },
        { name: "Blueberries", type: "fruit", description: "Antioxidant-rich", servingNote: "3-5 berries" },
        { name: "Baby carrot (sliced)", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "1-2 slices" },
        { name: "Dental treats (small)", type: "dental", description: "Dental health", servingNote: "1 per day, small-breed" }
      ],
      avoid: [
        { name: "Staining treats", reason: "Can stain white coat" },
        { name: "High-calorie treats", reason: "Bichons prone to obesity" },
        { name: "Grapes/raisins", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 30
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Small crinkle balls", "Squeaky toys", "Ping pong balls"], description: "Short-distance fetch — Bichons love to play" },
        { category: "puzzle", examples: ["Kong (small)", "Snuffle mat", "Treat ball"], description: "Intelligent breed needs mental stimulation" },
        { category: "cuddle", examples: ["Plush toys", "Fleece blankets", "Kong Cozie"], description: "Bichons love comfort and cuddles" },
        { category: "chew", examples: ["Nylabone (small)", "Whimzees (small)"], description: "Light chews" }
      ],
      avoid: [
        { toy: "Hard nylon chews", reason: "Can damage teeth" },
        { toy: "Rough tug toys", reason: "Neck sensitivity" }
      ],
      suitability: { fetch: 3, chew: 2, puzzle: 3, cuddle: 5, agility: 3, swim: 1, tug: 2 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Potty training", solution: "Small bladders — consistent schedule and patience" },
        { issue: "Separation anxiety", solution: "Bichons bond closely — practice gradual alone time" },
        { issue: "Barking", solution: "Bichons can be vocal — provide enrichment" }
      ],
      approach: "Bichons are intelligent and eager to please. Positive reinforcement with food rewards works well. They love to perform and excel at trick training.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, handling" },
        { age: "4-6 months", focus: "Potty training and grooming acceptance" },
        { age: "6-12 months", focus: "Trick training and basic obedience" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Grooming sessions", "Training"], precautions: ["Allergy season — Bichons prone to skin issues", "Daily brushing essential"] },
      summer: { activities: ["AC indoor play", "Short early walks", "Frozen treats"], precautions: ["White coat reflects heat but small size overheat quickly"] },
      fall: { activities: ["Comfortable walks", "Puzzle games", "Lap time"], precautions: ["Enjoy the cool weather", "Maintain grooming"] },
      winter: { activities: ["Short walks (with sweater)", "Indoor play", "Cuddle time"], precautions: ["Single coat — needs warm clothing", "Cold-sensitive"] }
    },
    healthCautions: [
      "Allergies — very common; skin and food allergies",
      "Patellar luxation — common in small breeds",
      "Bladder stones — higher incidence in Bichons",
      "Dental disease — regular dental care essential",
      "Cataracts — common in older Bichons"
    ],
  },
{
    breedName: "Saint Bernard",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Switzerland / Italy (Alps)",
      originalPurpose: "Mountain rescue dog for the Hospice of St. Bernard",
      developed: "17th century",
      summary: "Saint Bernards were bred by monks at the Hospice of St. Bernard in the Swiss Alps for avalanche rescue. They are famous for saving over 2,000 lives. Their size, strength, and gentle temperament make them legendary rescue dogs.",
      funFact: "Barry, a Saint Bernard from the early 1800s, is credited with saving over 40 lives — the most famous rescue dog in history!"
    },
    activities: {
      primary: ["Gentle walks", "Pulling/carting", "Companionship"],
      secondary: ["Obedience", "Hiking (low-impact)", "Therapy work"],
      avoid: [
        { activity: "Exercise in hot/humid weather", reason: "CRITICAL: Giant breed — overheat extremely easily" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) — highest risk in giant breeds" },
        { activity: "High-impact exercise", reason: "Joint stress — hip dysplasia and arthritis major concerns" }
      ],
      weeklyMinutesMin: 140,
      weeklyMinutesMax: 280
    },
    treats: {
      recommended: [
        { name: "Baby carrots", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "3-4 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "4-5 slices" },
        { name: "Freeze-dried beef", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-10 per day" },
        { name: "Dental chews (giant)", type: "dental", description: "Dental health for giant breed", servingNote: "1 per day, giant-breed" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Prone to obesity and pancreatitis" },
        { name: "Small treats (choking)", reason: "Saints gulp food — treats should be large enough to chew" },
        { name: "Grapes/raisins", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 150
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Goughnuts", "West Paw Tizzi"], description: "Powerful jaws — need indestructible toys" },
        { category: "fetch", examples: ["Jolly Ball (large)", "Kong Jumbler", "Chuckit! (large)"], description: "Gentle fetch only" },
        { category: "puzzle", examples: ["Kong Genius", "Snuffle mat", "Nina Ottosson (large)"], description: "Mental stimulation without physical strain" },
        { category: "cuddle", examples: ["Large plush toys", "Fuzzy blankets"], description: "Saints are gentle giants" }
      ],
      avoid: [
        { toy: "Small balls", reason: "Choking hazard — can swallow whole" },
        { toy: "Flimsy plastic toys", reason: "Will be destroyed and ingested" }
      ],
      suitability: { fetch: 2, chew: 5, puzzle: 3, cuddle: 5, agility: 1, swim: 2, tug: 3 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Gentle handling"],
      challenges: [
        { issue: "Leash pulling", solution: "A 180lb pulling dog is dangerous — train loose-leash walking from puppyhood" },
        { issue: "Jumping up", solution: "Teach 'off' from day one — a jumping Saint Bernard can knock over adults" },
        { issue: "Drooling", solution: "Accept it — Saint Bernards drool; keep towels handy" }
      ],
      approach: "Saint Bernards are gentle giants who respond best to patient, positive reinforcement. They are sensitive and can be stubborn. Early socialization is essential.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "No jumping — teach 'off' and 'settle'" },
        { age: "6-12 months", focus: "Leash manners and impulse control" }
      ],
    },
    seasonal: {
      spring: { activities: ["Gentle walks", "Obedience training", "Scent work"], precautions: ["Shedding season — daily brushing", "Watch for bloat symptoms"] },
      summer: { activities: ["Early morning walks only", "Indoor enrichment", "Gentle swimming"], precautions: ["CRITICAL: Giant breed overheat easily", "Never exercise in heat", "Always provide AC and water"] },
      fall: { activities: ["Comfortable hikes", "Training sessions", "Gentle play"], precautions: ["Monitor weight — Saints need lean body condition", "Joint care"] },
      winter: { activities: ["Snow play — Saints love winter!", "Gentle walks", "Puzzle games"], precautions: ["Thick coat provides excellent insulation", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "CRITICAL: GDV (bloat) — highest risk; consider gastropexy",
      "Hip/elbow dysplasia — OFA screening essential",
      "Dilated cardiomyopathy (DCM) — heart screening",
      "Osteosarcoma — higher incidence in giant breeds",
      "Entropion/ectropion — eyelid issues common"
    ],
  },
{
    breedName: "Newfoundland",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Newfoundland, Canada",
      originalPurpose: "Water rescue and fishing assistant",
      developed: "18th century",
      summary: "Newfoundlands were developed in Newfoundland as working dogs for fishermen. They are legendary water rescue dogs with webbed feet, a water-resistant coat, and a natural instinct to save swimmers. Their strength and gentle nature make them 'gentle giants'.",
      funFact: "Newfoundlands have webbed feet and a water-resistant double coat — they are natural-born lifeguards!"
    },
    activities: {
      primary: ["Swimming", "Gentle walks", "Pulling/carting"],
      secondary: ["Obedience", "Water rescue training", "Therapy work"],
      avoid: [
        { activity: "Exercise in hot weather", reason: "Thick coat — overheat easily" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk in deep-chested giant breed" },
        { activity: "High-impact exercise", reason: "Joint stress — hip dysplasia major concern" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Baby carrots", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "3-4 per day" },
        { name: "Freeze-dried salmon", type: "protein", description: "Omega-3 rich for coat", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "4-5 slices" },
        { name: "Dental chews (giant)", type: "dental", description: "Dental health", servingNote: "1 per day, giant-breed" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Prone to obesity and pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Cooked bones", reason: "Can splinter" }
      ],
      maxDailyTreatCalories: 150
    },
    toys: {
      recommended: [
        { category: "swim", examples: ["Floating retrieval toys", "Kong Aqua", "Water bumper"], description: "Newfoundlands are natural swimmers — water toys are essential" },
        { category: "chew", examples: ["Kong Extreme", "Goughnuts", "West Paw Tizzi"], description: "Strong chewers — need durable toys" },
        { category: "fetch", examples: ["Jolly Ball", "Chuckit! (large)", "Kong Jumbler"], description: "Gentle fetch on land" },
        { category: "tug", examples: ["Rope tug (heavy)", "Kong Tugga (large)"], description: "Gentle tug" }
      ],
      avoid: [
        { toy: "Small toys", reason: "Choking hazard" },
        { toy: "Floppy plastic toys", reason: "Will be destroyed" }
      ],
      suitability: { fetch: 3, chew: 4, puzzle: 3, cuddle: 5, agility: 1, swim: 5, tug: 3 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Gentle handling"],
      challenges: [
        { issue: "Stubbornness", solution: "Newfs can be independent — use positive reinforcement" },
        { issue: "Pulling on leash", solution: "Strong breed — use front-clip harness from puppyhood" },
        { issue: "Drooling", solution: "Accept it — Newfoundlands drool; keep towels handy" }
      ],
      approach: "Newfoundlands are gentle giants who respond best to patient, positive training. They are sensitive and bond deeply with their families.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, water" },
        { age: "4-6 months", focus: "Leash manners and water safety" },
        { age: "6-12 months", focus: "Basic obedience and impulse control" }
      ],
    },
    seasonal: {
      spring: { activities: ["Swimming", "Gentle walks", "Carting"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Swimming — their favorite!", "Early morning walks", "Indoor games"], precautions: ["Thick coat — overheat easily", "Never exercise in midday heat", "Always provide water"] },
      fall: { activities: ["Perfect weather for walks", "Swimming", "Carting"], precautions: ["Coat growing in for winter", "Maintain exercise"] },
      winter: { activities: ["Snow play", "Pulling in snow", "Gentle walks"], precautions: ["Thick coat provides excellent insulation", "Newfoundlands love winter", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "CRITICAL: GDV (bloat) — consider gastropexy",
      "Hip/elbow dysplasia — OFA screening essential",
      "Dilated cardiomyopathy (DCM) — heart screening",
      "Cystinuria — urinary stones; genetic condition",
      "Subvalvular aortic stenosis (SAS) — heart defect"
    ],
  },
{
    breedName: "Greyhound",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Ancient Egypt / Britain (modern)",
      originalPurpose: "Coursing and hunting by sight",
      developed: "Ancient (over 4,000 years)",
      summary: "Greyhounds are one of the oldest dog breeds, with depictions dating back to ancient Egyptian tombs. They were bred for coursing game by sight rather than scent. They are the fastest dog breed, reaching speeds of 45 mph, supported by exceptional cardiovascular athleticism including high stroke volume and elevated red blood cell volume (PCV).",
      funFact: "Greyhounds can accelerate from 0 to 45 mph in just a few strides — faster than a racehorse over short distances relative to body size!"
    },
    activities: {
      primary: ["Running (sprints)", "Lure coursing", "Walking"],
      secondary: ["Hiking", "Obedience", "Nose work", "Companionship"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "Extremely high prey drive — will chase and cannot be recalled" },
        { activity: "Exercise in extreme cold", reason: "Very low body fat and short coat — minimal cold protection" },
        { activity: "Prolonged strenuous exercise", reason: "Built for sprints, not endurance; prone to muscle injuries" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Greyhounds prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 80
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Lure coursing toys", "Chuckit! balls", "Flirt pole"], description: "Sight hounds — chasing toys satisfies prey drive" },
        { category: "cuddle", examples: ["Plush toys", "Fleece blankets", "Kong Cozie"], description: "Greyhounds love comfort and soft surfaces" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Treat ball"], description: "Mild mental stimulation" },
        { category: "chew", examples: ["Nylabone", "Kong Classic", "Yak chews"], description: "Light to moderate chewers" }
      ],
      avoid: [
        { toy: "Thin latex toys", reason: "Can be destroyed" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 2, puzzle: 3, cuddle: 5, agility: 3, swim: 2, tug: 2 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Comfort"],
      challenges: [
        { issue: "Recall", solution: "Greyhounds have poor recall — never trust off-leash in unenclosed areas" },
        { issue: "Separation anxiety", solution: "Many ex-racers struggle with alone time — crate training and gradual desensitization" },
        { issue: "Small animal sensitivity", solution: "Prey drive is strong — manage environment carefully" }
      ],
      approach: "Greyhounds are sensitive and gentle. Positive reinforcement with food rewards works best. They are couch potatoes who need short bursts of activity.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — especially for adopted racing Greyhounds" },
        { age: "4-6 months", focus: "House training and basic obedience" },
        { age: "6-12 months", focus: "Leash manners and recall (long-line practice)" }
      ],
    },
    seasonal: {
      spring: { activities: ["Lure coursing", "Walking", "Short runs"], precautions: ["Check for ticks", "Greyhounds have thin skin — check for cuts"] },
      summer: { activities: ["Early morning walks", "Short sprints", "Indoor lounging"], precautions: ["Very low body fat — can overheat", "Always provide shade and water"] },
      fall: { activities: ["Perfect weather for running", "Lure coursing", "Hiking"], precautions: ["Enjoy the cool weather", "Watch for burrs in short coat"] },
      winter: { activities: ["Short walks (with coat)", "Indoor play", "Cuddle time"], precautions: ["CRITICAL: No body fat — needs coat in cold weather", "Extremely cold-sensitive", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Osteosarcoma — higher incidence in sighthounds",
      "Gastric torsion (GDV) — deep-chested risk",
      "Dental disease — Greyhounds prone to dental issues",
      "Anesthesia sensitivity — special protocols needed for sighthounds",
      "Corn (callus) on paw pads — common in ex-racers"
    ],
  },
{
    breedName: "Whippet",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "England, United Kingdom",
      originalPurpose: "Racing and coursing small game",
      developed: "19th century",
      summary: "The Whippet was developed in England by miners and factory workers as a racing dog — they were called 'the poor man's racehorse'. Bred from Greyhounds and small terriers, they are the fastest domesticated animal of their weight, reaching 35 mph.",
      funFact: "Whippets were known as 'the poor man's racehorse' in Victorian England — they were raced by working-class families for sport and betting!"
    },
    activities: {
      primary: ["Running (sprints)", "Lure coursing", "Walking"],
      secondary: ["Hiking", "Obedience", "Nose work", "Companionship"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "High prey drive — will chase and cannot be recalled" },
        { activity: "Exercise in extreme cold", reason: "Low body fat and short coat — minimal cold protection" },
        { activity: "Rough dog park play", reason: "Thin skin prone to injuries from rough play" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Whippets prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 60
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Flirt pole", "Chuckit! balls", "Lure toys"], description: "Sight hounds — chasing is their favorite" },
        { category: "cuddle", examples: ["Plush toys", "Fleece blankets", "Kong Cozie"], description: "Whippets love comfort and soft surfaces" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "Yak chews"], description: "Light chewers" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Treat ball"], description: "Mild mental stimulation" }
      ],
      avoid: [
        { toy: "Thin latex toys", reason: "Can be destroyed" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 2, puzzle: 3, cuddle: 5, agility: 4, swim: 2, tug: 2 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Praise", "Comfort"],
      challenges: [
        { issue: "Recall", solution: "Never trust off-leash in unenclosed areas — Whippets chase" },
        { issue: "Separation anxiety", solution: "Whippets bond closely — crate training and gradual alone time" },
        { issue: "House training", solution: "Whippets can be sensitive to cold/wet — provide indoor potty options" }
      ],
      approach: "Whippets are sensitive and gentle. Positive reinforcement works best. They are sprinters who love to run but are couch potatoes the rest of the time.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Recall (long-line practice) and house training" },
        { age: "6-12 months", focus: "Lure coursing introduction and basic manners" }
      ],
    },
    seasonal: {
      spring: { activities: ["Lure coursing", "Walking", "Short runs"], precautions: ["Thin skin — check for cuts", "Allergy season"] },
      summer: { activities: ["Early morning walks", "Short sprints", "Indoor lounging"], precautions: ["Low body fat — can overheat", "Always provide shade and water"] },
      fall: { activities: ["Perfect running weather", "Lure coursing", "Hiking"], precautions: ["Enjoy the cool weather"] },
      winter: { activities: ["Short walks (with coat)", "Indoor play", "Cuddle time"], precautions: ["CRITICAL: Needs coat in cold weather", "Extremely cold-sensitive", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Anesthesia sensitivity — special sighthound protocols needed",
      "Dental disease — regular dental care",
      "Eye injuries — Whippets prone to corneal issues",
      "Gastric torsion (GDV) — deep-chested risk",
      "Hypothyroidism — common in the breed"
    ],
  },
{
    breedName: "Akita",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Japan",
      originalPurpose: "Guardian and hunting dog for Japanese nobility",
      developed: "Ancient (17th century, modern: 20th century)",
      summary: "The Akita is a large, powerful spitz breed from the mountainous regions of northern Japan. They were bred as guardians and hunters of bear and boar. In Japan, they are symbols of health, happiness, and longevity.",
      funFact: "Hachiko, the most famous Akita, waited for his deceased owner at a train station every day for nine years — a statue in Shibuya honors his loyalty!"
    },
    activities: {
      primary: ["Hiking", "Scent work", "Structured walks"],
      secondary: ["Obedience", "Tug-of-war", "Pulling", "Trick training"],
      avoid: [
        { activity: "Off-leash in unenclosed areas", reason: "High prey drive and dog-selectivity — recall unreliable" },
        { activity: "Dog park visits", reason: "Same-sex aggression common; Akitas are not typically dog-social" },
        { activity: "Rough play with unfamiliar dogs", reason: "Akitas have a dominant temperament and may not tolerate rudeness" }
      ],
      weeklyMinutesMin: 280,
      weeklyMinutesMax: 420
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Crunchy, low-calorie", servingNote: "2-3 per day" },
        { name: "Freeze-dried beef", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews (large)", type: "dental", description: "Dental health", servingNote: "1 per day, large-breed" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Akitas prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "Benebone"], description: "Powerful chewers — need durable toys" },
        { category: "tug", examples: ["Kong Tugga", "Rope tug", "Flirt pole"], description: "Akitas enjoy tug — great for bonding" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzle", "Snuffle mat"], description: "Intelligent breed needs mental stimulation" },
        { category: "fetch", examples: ["Chuckit! balls", "Kong Jumbler", "Jolly Ball"], description: "Fetch with durable toys only" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Will be destroyed and ingested" },
        { toy: "Thin plastic toys", reason: "Will be destroyed in minutes" }
      ],
      suitability: { fetch: 3, chew: 5, puzzle: 4, cuddle: 2, agility: 2, swim: 2, tug: 5 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Respect", "Consistency"],
      challenges: [
        { issue: "Dog selectivity", solution: "Early and extensive socialization — Akitas may not tolerate other dogs" },
        { issue: "Stubborn independence", solution: "Use high-value rewards; Akitas are not people-pleasers" },
        { issue: "Protective behavior", solution: "Teach neutrality; reward calm behavior around strangers" }
      ],
      approach: "Akitas are intelligent, dignified, and independent. They require confident, consistent training from an experienced owner. Positive reinforcement with clear boundaries works best. Socialization is critical.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control and bite inhibition" },
        { age: "6-12 months", focus: "Structured obedience and neutrality training" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Scent work", "Training"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Indoor enrichment", "Swimming"], precautions: ["Thick double coat — can overheat", "Never exercise in midday heat"] },
      fall: { activities: ["Perfect weather for hiking", "Scent games", "Obedience"], precautions: ["Coat growing in for winter", "Enjoy the cool weather"] },
      winter: { activities: ["Snow play — Akitas love winter!", "Hiking", "Pulling"], precautions: ["Thick coat provides excellent insulation", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening",
      "Hypothyroidism — common in Akitas",
      "Progressive retinal atrophy (PRA)",

      "Autoimmune diseases — higher incidence in the breed",
      "Gastric torsion (GDV) — deep-chested risk"
    ],
  },
{
    breedName: "Weimaraner",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Germany",
      originalPurpose: "Hunting large game (bear, boar, deer)",
      developed: "Early 19th century",
      summary: "The Weimaraner, known as the 'Silver Ghost' for its distinctive gray coat and graceful movement, was developed by German nobility for hunting large game. Their all-purpose hunting ability, intelligence, and striking appearance make them exceptional companions.",
      funFact: "Weimaraners are called 'Silver Ghosts' because of their silvery-gray coat and their ability to move silently through the forest!"
    },
    activities: {
      primary: ["Running", "Hiking", "Hunting/retrieving"],
      secondary: ["Agility", "Obedience", "Scent work", "Swimming"],
      avoid: [
        { activity: "Confinement without exercise", reason: "High-energy breed — destructive without adequate stimulation" },
        { activity: "Off-leash without training", reason: "Strong prey drive — may chase wildlife" },
        { activity: "Exercising 1 hour before/after meals", reason: "GDV (bloat) risk in deep-chested dogs" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 630
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day, large-breed" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Weimaraners prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Frisbee (soft)", "Kong Jumbler"], description: "Weimaraners love to retrieve" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "West Paw"], description: "Strong chewers — durable toys needed" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzle", "Snuffle mat"], description: "Intelligent breed needs mental stimulation" },
        { category: "tug", examples: ["Rope toys", "Kong Tugga", "Flirt pole"], description: "Great for interactive play" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Will be de-stuffed and ingested" },
        { toy: "Thin latex toys", reason: "Will be destroyed" }
      ],
      suitability: { fetch: 5, chew: 4, puzzle: 4, cuddle: 3, agility: 5, swim: 4, tug: 5 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Play", "Work"],
      challenges: [
        { issue: "Separation anxiety", solution: "Weimaraners bond intensely — crate training and gradual alone time" },
        { issue: "Destructive behavior", solution: "Ensure adequate exercise and mental stimulation daily" },
        { issue: "Pulling on leash", solution: "Strong breed — use front-clip harness; train loose-leash early" }
      ],
      approach: "Weimaraners are highly intelligent and need a job. Positive reinforcement with variety works best. They are Velcro dogs who want to be with their people at all times.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control and 'leave it'" },
        { age: "6-12 months", focus: "Advanced obedience and hunting/dog sports" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Fetch", "Scent work"], precautions: ["Check for ticks", "Allergy season — Weims prone to skin issues"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor games"], precautions: ["Short coat — can sunburn", "Never exercise in midday heat", "Always provide water"] },
      fall: { activities: ["Perfect weather for hunting", "Hiking", "Agility"], precautions: ["Watch for foxtails and burrs", "Maintain exercise"] },
      winter: { activities: ["Snow play", "Indoor fetch", "Training"], precautions: ["Short coat — needs coat in freezing weather", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "GDV (bloat) — deep-chested; consider gastropexy",
      "Hip dysplasia — OFA screening",
      "Hypothyroidism — common in Weimaraners",
      "Von Willebrand's disease — bleeding disorder",
      "Progressive retinal atrophy (PRA)"

    ],
  },
{
    breedName: "Vizsla",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Hungary",
      originalPurpose: "All-purpose hunting dog for Magyar nobility",
      developed: "Ancient (10th century, modern: 19th century)",
      summary: "The Vizsla is one of the oldest sporting breeds, developed by the Magyar tribes in Hungary over 1,000 years ago. They were prized as versatile hunting dogs by Hungarian nobility. Their golden rust coat and affectionate nature earn them the nickname 'Velcro Vizsla'.",
      funFact: "Vizslas are called 'Velcro Vizslas' because they want to be touching their person at all times — they are extreme Velcro dogs!"
    },
    activities: {
      primary: ["Running", "Hiking", "Fetch"],
      secondary: ["Agility", "Obedience", "Scent work", "Swimming", "Hunting"],
      avoid: [
        { activity: "Confinement without exercise", reason: "High-energy breed — destructive without adequate stimulation" },
        { activity: "Cold weather exposure without protection", reason: "Short coat and low body fat — minimal cold protection" },
        { activity: "Rough dog park play", reason: "Thin skin — prone to cuts and scrapes" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Vizslas prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 80
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Frisbee (soft)", "Kong tennis balls"], description: "Vizslas love to retrieve" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Intelligent breed needs mental stimulation" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "Yak chews"], description: "Moderate chewers" },
        { category: "tug", examples: ["Rope toys", "Kong Tugga", "Flirt pole"], description: "Great for interactive play" }
      ],
      avoid: [
        { toy: "Thin latex toys", reason: "Will be destroyed" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 4, cuddle: 5, agility: 5, swim: 4, tug: 4 }
    },
    training: {
      trainability: 5,
      motivators: ["Food", "Praise", "Play", "Affection"],
      challenges: [
        { issue: "Separation anxiety", solution: "Vizslas are intense Velcro dogs — crate training and gradual alone time essential" },
        { issue: "Sensitivity", solution: "Use only positive reinforcement — harsh corrections cause shut-down" },
        { issue: "Pulling on leash", solution: "Use front-clip harness; Vizslas are strong for their size" }
      ],
      approach: "Vizslas are extremely sensitive and people-oriented. Positive reinforcement only. They thrive on human companionship and need to be included in family activities.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Separation anxiety prevention and impulse control" },
        { age: "6-12 months", focus: "Advanced obedience and dog sports" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Fetch", "Scent work"], precautions: ["Thin skin — check for cuts", "Allergy season"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor games"], precautions: ["Short coat — can sunburn", "Never exercise in midday heat"] },
      fall: { activities: ["Perfect weather for hunting", "Hiking", "Agility"], precautions: ["Watch for burrs", "Maintain exercise"] },
      winter: { activities: ["Short walks (with coat)", "Indoor fetch", "Training"], precautions: ["Short coat — needs coat in cold weather", "Cold-sensitive"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening",
      "Epilepsy — higher incidence in Vizslas",
      "Hypothyroidism — common",
      "Progressive retinal atrophy (PRA)",

      "Allergies — skin and food allergies common"
    ],
  },
{
    breedName: "Irish Setter",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Ireland",
      originalPurpose: "Bird hunting — setting and retrieving",
      developed: "18th century",
      summary: "The Irish Setter was developed in Ireland as a hunting dog for birds. They are known for their stunning mahogany-red coat, boundless energy, and outgoing, friendly personality. They are one of the most recognizable sporting breeds.",
      funFact: "Irish Setters are often called 'the clowns of the sporting dog world' for their playful, goofy personality that lasts well into old age!"
    },
    activities: {
      primary: ["Running", "Fetch", "Hiking"],
      secondary: ["Agility", "Obedience", "Swimming", "Hunting"],
      avoid: [
        { activity: "Confinement without exercise", reason: "Very high-energy breed — destructive without stimulation" },
        { activity: "Off-leash near roads", reason: "Strong hunting drive — may follow scent without looking" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 560
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Chuckit! balls", "Frisbee (soft)", "Kong tennis balls"], description: "Irish Setters love to retrieve" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "West Paw"], description: "Moderate chewers" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Intelligent breed needs stimulation" },
        { category: "tug", examples: ["Rope toys", "Kong Tugga", "Flirt pole"], description: "Great for interactive play" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Will be de-stuffed" },
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 3, cuddle: 5, agility: 4, swim: 4, tug: 4 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Impulsivity", solution: "Irish Setters are enthusiastic — teach impulse control early" },
        { issue: "Pulling on leash", solution: "Strong breed — use front-clip harness; train loose-leash early" },
        { issue: "Jumping up", solution: "Teach 'off' and reward calm greetings" }
      ],
      approach: "Irish Setters are intelligent and eager to please but can be distractible. Positive reinforcement with high-value rewards works best. They are sensitive to harsh correction.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control and recall" },
        { age: "6-12 months", focus: "Advanced obedience and hunting/dog sports" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Fetch", "Scent work"], precautions: ["Check for ticks", "Allergy season"] },
      summer: { activities: ["Early morning runs", "Swimming", "Indoor games"], precautions: ["Avoid midday heat", "Always provide water", "Paw protection on pavement"] },
      fall: { activities: ["Perfect weather for hunting", "Hiking", "Agility"], precautions: ["Watch for burrs in long coat", "Maintain exercise"] },
      winter: { activities: ["Snow play", "Indoor fetch", "Training"], precautions: ["Single coat — needs coat in freezing weather", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening",
      "Progressive retinal atrophy (PRA)",

      "Hypothyroidism — common",
      "Bloat (GDV) — deep-chested risk",
      "Osteosarcoma — higher incidence in large breeds"
    ],
  },
{
    breedName: "Alaskan Malamute",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Alaska, United States",
      originalPurpose: "Heavy sled dog for the Mahlemut people",
      developed: "Ancient (over 4,000 years)",
      summary: "The Alaskan Malamute is one of the oldest Arctic sled dog breeds, developed by the Mahlemut Inuit tribe in Alaska. They were bred for strength and endurance to haul heavy loads across long distances in extreme cold.",
      funFact: "Alaskan Malamutes were used by Admiral Byrd on his Antarctic expeditions and by gold rush miners to haul supplies!"
    },
    activities: {
      primary: ["Pulling/sledding", "Hiking", "Running"],
      secondary: ["Agility", "Obedience", "Pack walks", "Swimming"],
      avoid: [
        { activity: "Exercise in hot weather", reason: "Thick double coat — overheat extremely easily" },
        { activity: "Off-leash in unenclosed areas", reason: "High prey drive and independent nature — recall unreliable" },
        { activity: "Confinement without exercise", reason: "Strong working breed — destructive without adequate activity" }
      ],
      weeklyMinutesMin: 350,
      weeklyMinutesMax: 630
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried salmon", type: "protein", description: "Omega-3 rich, Malamutes love fish", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "3-4 slices" },
        { name: "Dental chews (large)", type: "dental", description: "Dental health", servingNote: "1 per day, large-breed" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 120
    },
    toys: {
      recommended: [
        { category: "chew", examples: ["Kong Extreme", "Goughnuts", "Nylabone DuraChew"], description: "Powerful chewers — need indestructible toys" },
        { category: "fetch", examples: ["Jolly Ball", "Chuckit! (large)", "Kong Jumbler"], description: "Strong prey drive makes fetch fun" },
        { category: "puzzle", examples: ["Kong Wobbler", "Nina Ottosson puzzle", "Snuffle mat"], description: "Intelligent breed needs mental stimulation" },
        { category: "tug", examples: ["Rope toys (heavy)", "Kong Tugga", "Flirt pole"], description: "Malamutes love tug" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "Will be destroyed and ingested" },
        { toy: "Thin plastic toys", reason: "Will be destroyed in minutes" }
      ],
      suitability: { fetch: 4, chew: 5, puzzle: 3, cuddle: 3, agility: 3, swim: 3, tug: 5 }
    },
    training: {
      trainability: 3,
      motivators: ["Food", "Play", "Respect"],
      challenges: [
        { issue: "Stubborn independence", solution: "Malamutes are strong-willed — use high-value rewards and be consistent" },
        { issue: "Dog selectivity", solution: "Same-sex aggression common — early socialization critical" },
        { issue: "Pulling on leash", solution: "Bred to pull — teach loose-leash walking from puppyhood" }
      ],
      approach: "Malamutes are intelligent but independent. They require confident, consistent training. Positive reinforcement works best. They are not recommended for first-time owners.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — people, dogs, environments" },
        { age: "4-6 months", focus: "Impulse control and bite inhibition" },
        { age: "6-12 months", focus: "Structured obedience and pulling sports" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Pulling practice", "Training"], precautions: ["Heavy shedding — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning walks", "Swimming", "Indoor enrichment"], precautions: ["CRITICAL: Thick coat — overheat easily", "Never exercise in midday heat", "Always provide AC"] },
      fall: { activities: ["Perfect weather for hiking", "Pulling", "Training"], precautions: ["Coat growing in for winter", "Enjoy the cool weather"] },
      winter: { activities: ["Sled pulling", "Snow hiking", "Snow play"], precautions: ["Malamutes LOVE winter", "Thick coat provides excellent insulation", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening",
      "Hypothyroidism — common",
      "Chondrodysplasia (dwarfism) — genetic condition",
      "Progressive retinal atrophy (PRA)",

      "Bloat (GDV) — deep-chested risk"
    ],
  },
{
    breedName: "Border Collie",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "Scottish/English border",
      originalPurpose: "Herding sheep with exceptional intelligence",
      developed: "19th century",
      summary: "The Border Collie was developed along the border between Scotland and England for herding sheep. They are widely considered the most intelligent dog breed, capable of learning hundreds of commands. Their intense stare and stamina are legendary.",
      funFact: "A Border Collie named Chaser learned the names of over 1,000 different objects and could retrieve them by name!"
    },
    activities: {
      primary: ["Herding sports", "Agility", "Advanced obedience"],
      secondary: ["Flyball", "Disc dog", "Hiking", "Trick training", "Scent work"],
      avoid: [
        { activity: "Confinement without stimulation", reason: "Extreme intelligence — destructive behaviors without a job" },
        { activity: "Repetitive fetch on hard surfaces", reason: "Relentless drive can cause over-exertion and joint damage" },
        { activity: "Lack of mental stimulation", reason: "Bored Border Collies develop obsessive behaviors" }
      ],
      weeklyMinutesMin: 420,
      weeklyMinutesMax: 700
    },
    treats: {
      recommended: [
        { name: "Freeze-dried beef liver", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-10 per day" },
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Cheese (low-fat)", type: "protein", description: "Great for training, easy to portion", servingNote: "Pea-sized pieces" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day" }
      ],
      avoid: [
        { name: "High-fat treats", reason: "Prone to pancreatitis" },
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" }
      ],
      maxDailyTreatCalories: 100
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Frisbee (soft)", "Chuckit! balls", "Herding balls"], description: "Fetch is essential — durable fetching toys" },
        { category: "puzzle", examples: ["Nina Ottosson puzzles", "Kong Genius", "Trixie activity board"], description: "Extreme intelligence requires complex puzzles" },
        { category: "tug", examples: ["Flirt pole", "Rope tug", "Kong Tugga"], description: "Satisfies prey drive in controlled way" },
        { category: "chew", examples: ["Kong Extreme", "Nylabone DuraChew", "West Paw"], description: "Moderate chewers" }
      ],
      avoid: [
        { toy: "Plush toys with stuffing", reason: "May de-stuff and ingest filling" },
        { toy: "Laser pointers", reason: "Can trigger obsessive light-chasing behavior" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 5, cuddle: 3, agility: 5, swim: 3, tug: 5 }
    },
    training: {
      trainability: 5,
      motivators: ["Work", "Food", "Play", "Praise"],
      challenges: [
        { issue: "Obsessive behaviors", solution: "Provide structure; avoid games that encourage fixation" },
        { issue: "Herding people/children", solution: "Redirect herding instincts to appropriate toys and sports" },
        { issue: "Over-arousal", solution: "Teach 'settle' and 'place'; incorporate calmness exercises" }
      ],
      approach: "Border Collies are exceptionally intelligent and need a job. Without purpose, they develop behavioral issues. Positive reinforcement with a focus on relationship works best.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Critical socialization — prevent herding of people" },
        { age: "4-6 months", focus: "Impulse control and 'settle' command" },
        { age: "6-12 months", focus: "Introduction to dog sports and structured activities" }
      ],
    },
    seasonal: {
      spring: { activities: ["Agility", "Herding trials", "Hiking"], precautions: ["Shedding season — daily brushing", "Check for ticks"] },
      summer: { activities: ["Early morning training", "Swimming", "Indoor brain games"], precautions: ["Avoid overheating — intense drive may cause over-exertion"] },
      fall: { activities: ["Perfect weather for running", "Herding tests", "Agility"], precautions: ["Watch for burrs in coat", "Maintain exercise routine"] },
      winter: { activities: ["Snow herding games", "Indoor agility", "Trick training"], precautions: ["Double coat provides insulation", "Paw care in icy conditions"] }
    },
    healthCautions: [
      "Hip dysplasia — OFA screening",
      "Collie eye anomaly (CEA) — genetic eye test",
      "Epilepsy — higher incidence",
      "TNS (Trapped Neutrophil Syndrome) — genetic disease",
      "Obsessive-compulsive behaviors — need mental stimulation"
    ],
  },
{
    breedName: "Cocker Spaniel",
    reviewStatus: "approved",
    reviewedBy: "Senior Veterinary Reviewer",
    reviewDate: "2026-07-16",
    species: "canine",
    origin: {
      region: "United States (developed from English Cocker Spaniel)",
      originalPurpose: "Hunting companion — flushing and retrieving birds",
      developed: "19th century (American type: 20th century)",
      summary: "The American Cocker Spaniel was developed from the English Cocker Spaniel, selectively bred for a smaller size, longer coat, and distinctive domed head. They are the smallest of the sporting spaniels and were the most popular breed in the US for decades.",
      funFact: "Cocker Spaniels were the most popular dog breed in the United States for 23 consecutive years in the mid-20th century!"
    },
    activities: {
      primary: ["Fetch", "Hiking", "Scent work"],
      secondary: ["Agility", "Obedience", "Swimming", "Gentle play"],
      avoid: [
        { activity: "Rough play without ear care", reason: "Long floppy ears prone to infection — clean after every outing" },
        { activity: "Off-leash near roads", reason: "Strong hunting drive may override recall" }
      ],
      weeklyMinutesMin: 210,
      weeklyMinutesMax: 350
    },
    treats: {
      recommended: [
        { name: "Carrot sticks", type: "vegetable", description: "Low-calorie, crunchy", servingNote: "2-3 per day" },
        { name: "Freeze-dried chicken", type: "protein", description: "High-value training reward", servingNote: "Small pieces, 5-8 per day" },
        { name: "Apple slices", type: "fruit", description: "Sweet, vitamin-rich", servingNote: "2-3 slices" },
        { name: "Dental chews", type: "dental", description: "Dental health", servingNote: "1 per day, medium-breed" }
      ],
      avoid: [
        { name: "Grapes/raisins", reason: "Toxic" },
        { name: "Xylitol", reason: "Toxic" },
        { name: "High-fat treats", reason: "Cockers prone to pancreatitis" }
      ],
      maxDailyTreatCalories: 60
    },
    toys: {
      recommended: [
        { category: "fetch", examples: ["Kong tennis balls", "Chuckit! balls", "Floating toys"], description: "Natural retrievers — fetch toys essential" },
        { category: "puzzle", examples: ["Kong Wobbler", "Snuffle mat", "Nina Ottosson puzzle"], description: "Food-motivated and intelligent" },
        { category: "chew", examples: ["Kong Classic", "Nylabone", "Benebone"], description: "Moderate chewers" },
        { category: "cuddle", examples: ["Plush toys", "Kong Cozie", "Soft squeaky toys"], description: "Cockers love comfort toys" }
      ],
      avoid: [
        { toy: "Tennis balls (fuzzy)", reason: "Abrasive — can wear down teeth" },
        { toy: "Small squeaky toys", reason: "Can be swallowed" }
      ],
      suitability: { fetch: 5, chew: 3, puzzle: 4, cuddle: 5, agility: 3, swim: 4, tug: 3 }
    },
    training: {
      trainability: 4,
      motivators: ["Food", "Praise", "Play"],
      challenges: [
        { issue: "Separation anxiety", solution: "Cockers bond deeply — crate training and gradual alone time" },
        { issue: "Submissive urination", solution: "Use calm greetings; avoid looming over puppy" },
        { issue: "Ear infections", solution: "Clean ears weekly — check for redness and odor" }
      ],
      approach: "Cocker Spaniels are eager to please and respond beautifully to positive reinforcement. They are sensitive and do not respond well to harsh corrections.",
      criticalTrainingWindows: [
        { age: "8-16 weeks", focus: "Socialization — people, dogs, novel environments" },
        { age: "4-6 months", focus: "Recall and 'leave it'" },
        { age: "6-12 months", focus: "Grooming acceptance and basic obedience" }
      ],
    },
    seasonal: {
      spring: { activities: ["Hiking", "Swimming", "Scent work"], precautions: ["Check for ticks", "Ear infections — clean weekly"] },
      summer: { activities: ["Early morning walks", "Swimming", "Frozen treats"], precautions: ["Avoid midday heat", "Ear care after swimming", "Paw protection on pavement"] },
      fall: { activities: ["Hunting simulations", "Scent work", "Hiking"], precautions: ["Watch for burrs in feathering", "Check for foxtails"] },
      winter: { activities: ["Snow play", "Indoor fetch", "Puzzle games"], precautions: ["Coat provides good insulation", "Ear protection in wet weather"] }
    },
    healthCautions: [
      "Ear infections — very common due to long ears; clean weekly",
      "Hip dysplasia — OFA screening",
      "Progressive retinal atrophy (PRA)",

      "Pancreatitis — avoid fatty foods",
      "Autoimmune hemolytic anemia (IMHA) — higher risk",
      "Cherry eye — common in the breed"
    ]
  }
];

/**
 * Look up newsletter data for a specific breed.
 */
export function getBreedNewsletter(breedName: string): BreedNewsletter | undefined {
  return BREED_NEWSLETTERS.find(n => n.breedName === breedName);
}

/**
 * Check if newsletter data exists for a given breed.
 */
export function hasBreedNewsletter(breedName: string): boolean {
  return BREED_NEWSLETTERS.some(n => n.breedName === breedName);
}
