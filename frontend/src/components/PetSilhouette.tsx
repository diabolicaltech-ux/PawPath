import React, { useMemo } from 'react';

// All supported silhouette filenames from the intake library
export type SilhouetteFilename = 
  | 'puppy-canine' | 'adult-canine' | 'senior-canine' | 'senior-aging-canine'
  | 'underweight-canine' | 'ideal-canine' | 'overweight-canine' | 'obese-canine'
  | 'brachycephalic-canine' | 'athletic-canine'
  | 'pet-profile-placeholder' | 'pawpath-icon';

// Convenience type aliases
export type SilhouetteType = 
  | 'puppy' | 'adult' | 'senior' | 'senior-aging'
  | 'underweight' | 'ideal' | 'overweight' | 'obese'
  | 'brachycephalic' | 'athletic'
  | 'mixed-breed'
  | 'placeholder' | 'logo';

interface PetSilhouetteProps {
  /** Direct SVG filename (e.g. "ideal-canine", "senior-canine") — takes highest priority */
  filename?: SilhouetteFilename;
  /** Convenience type alias (e.g. "ideal", "puppy") — used if filename not set */
  type?: SilhouetteType;
  /** Dog species is fixed for the dog-only app. */
  species?: 'canine';
  /** BCS score 1-9 — auto-selects body condition silhouette */
  bcsScore?: number;
  /** Life stage string — auto-selects life stage silhouette */
  lifeStage?: string;
  /** Choose which auto-selection to prioritize when both bcsScore and lifeStage are set */
  priority?: 'bcs' | 'lifeStage';
  /** CSS class for the img element */
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

/** Maps a SilhouetteType + species to the SVG filename */
function typeToFilename(type: SilhouetteType): SilhouetteFilename {
  switch (type) {
    case 'puppy': return 'puppy-canine';
    case 'adult': return 'adult-canine';
    case 'senior': return 'senior-canine';
    case 'senior-aging': return 'senior-aging-canine';
    case 'underweight': return 'underweight-canine';
    case 'ideal': return 'ideal-canine';
    case 'overweight': return 'overweight-canine';
    case 'obese': return 'obese-canine';
    case 'brachycephalic': return 'brachycephalic-canine';
    case 'athletic': return 'athletic-canine';
    case 'mixed-breed': return 'mixed-breed-canine';
    case 'placeholder': return 'pet-profile-placeholder';
    case 'logo': return 'pawpath-icon';
    default: return 'mixed-breed-canine';
  }
}
/** Maps BCS score (1-9) to silhouette type */
export function bcsToSilhouetteType(bcs: number): SilhouetteType {
  if (bcs <= 3) return 'underweight';
  if (bcs <= 5) return 'ideal';
  if (bcs <= 7) return 'overweight';
  return 'obese';
}

/** Maps life stage string to silhouette type */
export function lifeStageToSilhouetteType(stage: string): SilhouetteType {
  const value = stage.toLowerCase();
  if (value.includes('puppy')) return 'puppy';
  if (value.includes('junior') || value.includes('adult')) return 'adult';
  if (value.includes('senior') || value.includes('geriatric')) return 'senior';
  return 'adult';
}
/**
 * Determine the best filename using the priority chain:
 * 1. Explicit `filename` prop
 * 2. Explicit `type` prop  
 * 3. `bcsScore` and/or `lifeStage` auto-selection
 * 4. Fallback to placeholder
 */
function resolveFilename(
  filename: SilhouetteFilename | undefined,
  type: SilhouetteType | undefined,
  bcsScore: number | undefined,
  lifeStage: string | undefined,
  priority: 'bcs' | 'lifeStage' | undefined,
): SilhouetteFilename {
  // 1. Direct filename — highest priority
  if (filename) return filename;
  
  // 2. Type alias
  if (type) return typeToFilename(type);
  
  // 3. Auto-select from bcsScore and/or lifeStage
  if (bcsScore && lifeStage) {
    // When both are set, use priority or default to lifeStage
    if (priority === 'bcs') {
      return typeToFilename(bcsToSilhouetteType(bcsScore));
    }
    return typeToFilename(lifeStageToSilhouetteType(lifeStage));
  }
  
  if (bcsScore) {
    return typeToFilename(bcsToSilhouetteType(bcsScore));
  }
  
  if (lifeStage) {
    return typeToFilename(lifeStageToSilhouetteType(lifeStage));
  }
  
  // 4. Fallback
  return 'pet-profile-placeholder';
}

/**
 * Reusable pet silhouette component using the intake example SVG library.
 * 
 * Usage:
 *   // Direct filename
 *   <PetSilhouette filename="ideal-canine" className="w-32 h-32" />
 *   
 *   // Type alias
 *   <PetSilhouette type="puppy" species="canine" />
 *   
 *   // Auto-select from BCS
 *   <PetSilhouette species="canine" bcsScore={5} />
 *   
 *   // Auto-select from life stage
 *   <PetSilhouette species="canine" lifeStage="senior" />
 *   
 *   // Both BCS + life stage (shows life stage by default)
 *   <PetSilhouette species="canine" bcsScore={5} lifeStage="adult" />
 *   
 *   // Prioritize BCS over life stage
 *   <PetSilhouette species="canine" bcsScore={5} lifeStage="adult" priority="bcs" />
 *   
 *   // Fallback placeholder
 *   <PetSilhouette species="canine" />
 */
const PetSilhouette: React.FC<PetSilhouetteProps> = ({ 
  filename,
  type,
  species = 'canine',
  bcsScore,
  lifeStage,
  priority,
  className = 'w-24 h-24',
  alt = 'Pet silhouette',
  width,
  height,
}) => {
  const resolvedFilename = useMemo(() => 
    resolveFilename(filename, type, species, bcsScore, lifeStage, priority),
    [filename, type, species, bcsScore, lifeStage, priority]
  );
  
  const src = `/${resolvedFilename}.svg`;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
};

export default PetSilhouette;