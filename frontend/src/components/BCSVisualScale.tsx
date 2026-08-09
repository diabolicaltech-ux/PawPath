import React, { useRef, useEffect, useMemo } from 'react';
import { Info } from 'lucide-react';
import { getBodyType, type BodyType } from '../data/breedBodyTypes';

interface BCSVisualScaleProps {
  bcs: number;
  onChange: (bcs: number) => void;
  species: 'canine';
  breedName?: string;
}

const BCS_DESCRIPTIONS: Record<number, string> = {
  1: 'Ribs, spine, and pelvic bones easily visible. No palpable fat. Severe muscle wasting.',
  2: 'Ribs, spine, and pelvic bones visible from a distance. Minimal muscle mass.',
  3: 'Ribs easily visible. Spine and pelvic bones prominent. Minimal palpable fat.',
  4: 'Ribs palpable with minimal fat cover. Waist visible from above. Tuck present.',
  5: 'Ribs palpable with slight fat cover. Waist visible from above. Ideal body condition.',
  6: 'Ribs palpable with moderate fat cover. Waist barely visible. Slight abdominal tuck.',
  7: 'Ribs difficult to palpate. Heavy fat cover. Waist absent. Back broad.',
  8: 'Ribs not palpable under thick fat. Massive fat deposits over spine and tail base. Abdomen distended.',
  9: 'Extreme fat deposits over thorax, spine, and limbs. Abdominal distension. Significant mobility impairment.',
};

function getCategory(bcs: number): { label: string; color: string } {
  if (bcs <= 3) return { label: 'Underweight', color: 'text-amber-600' };
  if (bcs <= 5) return { label: 'Ideal', color: 'text-emerald-600' };
  if (bcs <= 7) return { label: 'Overweight', color: 'text-orange-600' };
  return { label: 'Obese', color: 'text-accent-red' };
}

function getCategoryForScore(score: number): string {
  if (score <= 3) return 'Underweight';
  if (score <= 5) return 'Ideal';
  return 'Overweight';
}

// Hand-crafted silhouettes: 9 distinct body sizes per species
// ViewBox 0 0 72 56 — animal faces left

type SilhouetteSet = {
  // Main body outline (head + body + tail as one contiguous path)
  body: string;
  // Leg strokes
  legs: string;
  // Rib/detail lines for underweight
  ribs: string;
};

// Dog silhouettes
const DOG_SILHOUETTES: Record<number, SilhouetteSet> = {
  // BCS 1: Severely emaciated — prominent spine, ribs, pelvic bones, hollow belly
  1: {
    body: 'M0,20 C0,17 2,14 5,12 C7,11 9,10 11,10 L12,13 C12,12 12,12 13,13 C15,11 17,10 18,9 C20,8 22,8 25,9 C28,11 30,13 32,13 C34,12 36,11 38,10 C40,9 42,8 44,8 L46,10 L46,20 C46,24 44,28 40,31 C36,34 32,35 28,33 C24,31 22,28 20,24 C18,28 16,31 13,30 C10,29 8,28 6,26 C4,24 2,22 0,20 Z',
    legs: 'M14,30 L13,40 M18,31 L17,42 M33,31 L32,41 M38,30 L37,40',
    ribs: 'M20,16 L20,22 M24,15 L24,24 M28,15 L28,23 M32,16 L32,22',
  },
  // BCS 2: Very thin — ribs visible, spine ridge, minimal muscle
  2: {
    body: 'M0,20 C0,17 2,14 5,12 C7,11 9,10 11,10 L13,13 C14,12 15,12 16,13 C18,12 19,12 21,13 C24,14 27,14 30,14 C33,13 36,12 38,12 C40,11 42,10 44,10 L46,12 L46,22 C46,24 44,26 40,28 C36,29 32,29 28,27 C26,26 24,26 22,28 C20,29 18,28 16,27 C14,25 12,23 10,22 C8,23 6,22 4,21 C2,21 1,20 0,20 Z',
    legs: 'M15,27 L14,38 M19,28 L18,39 M33,27 L32,38 M38,27 L37,38',
    ribs: 'M21,17 L21,22 M25,16 L25,23 M29,17 L29,22',
  },
  // BCS 3: Thin — visible ribcage, tucked abdomen
  3: {
    body: 'M0,18 C0,15 2,13 5,11 C7,10 9,9 11,10 L13,12 C15,11 17,11 19,12 C22,13 25,13 28,13 C31,13 34,12 36,12 C38,11 40,11 42,11 L45,13 L45,23 C45,25 43,27 40,28 C37,29 33,29 29,28 C26,27 24,27 22,29 C19,31 17,30 15,28 C13,26 11,25 9,24 C7,23 5,22 3,21 C1,20 0,19 0,18 Z',
    legs: 'M15,29 L14,39 M19,29 L18,40 M33,29 L32,39 M38,28 L37,39',
    ribs: 'M22,18 L22,22 M27,18 L27,23',
  },
  // BCS 4: Lean — minimal fat, visible waist, tuck present
  4: {
    body: 'M0,17 C0,14 2,12 5,11 C7,10 9,10 12,11 L14,13 C16,12 18,12 20,13 C23,14 26,15 29,15 C32,14 35,13 37,13 C39,12 41,12 43,13 L47,15 L47,24 C47,26 45,27 41,27 C38,27 35,25 33,24 C32,23 31,23 29,24 C27,25 24,24 22,24 C20,25 18,25 16,24 C14,23 12,22 10,23 C8,23 6,22 4,20 C2,19 1,18 0,17 Z',
    legs: 'M16,27 L15,38 M20,28 L19,39 M34,27 L33,38 M39,26 L38,37',
    ribs: '',
  },
  // BCS 5: Ideal — well-proportioned, visible waist, healthy tone
  5: {
    body: 'M0,16 C0,13 3,11 6,10 C8,10 10,9 12,10 L15,12 C17,11 19,11 21,13 C24,13 27,14 30,14 C33,14 36,13 38,13 C40,13 42,12 44,13 L48,15 L48,25 C48,27 46,28 42,28 C39,27 36,25 34,23 C32,22 31,22 29,23 C27,25 24,24 21,24 C19,25 17,25 15,24 C13,23 11,22 9,22 C7,23 5,21 3,20 C1,18 0,17 0,16 Z',
    legs: 'M17,28 L16,39 M21,29 L20,40 M35,28 L34,39 M40,27 L39,38',
    ribs: '',
  },
  // BCS 6: Overweight — moderate fat cover, waist barely visible
  6: {
    body: 'M0,15 C0,13 3,11 6,10 C8,9 11,10 13,11 L15,13 C17,12 20,12 22,14 C25,15 28,15 31,15 C34,15 37,14 39,14 C42,14 44,14 45,15 L49,19 L49,27 C49,30 47,31 43,32 C40,32 37,31 34,29 C33,28 31,28 29,29 C27,31 24,31 21,30 C19,30 16,29 14,28 C12,28 10,27 8,27 C6,27 4,26 2,24 C1,21 0,18 0,15 Z',
    legs: 'M17,32 L16,41 M22,32 L21,42 M36,31 L35,41 M41,31 L40,41',
    ribs: '',
  },
  // BCS 7: Heavy — thick fat, waist absent, back broad
  7: {
    body: 'M0,14 C0,12 3,10 7,9 C9,9 12,10 14,11 L16,13 C19,12 22,13 24,14 C27,16 30,16 33,16 C36,15 39,15 41,15 C44,16 46,17 47,18 L51,23 L51,31 C51,34 49,35 45,37 C42,37 38,38 34,37 C32,36 29,36 27,37 C25,38 22,38 18,37 C15,36 12,36 10,35 C8,33 6,32 3,30 C1,27 0,22 0,14 Z',
    legs: 'M18,37 L17,44 M23,37 L22,45 M37,36 L36,44 M42,36 L41,44',
    ribs: '',
  },
  // BCS 8: Obese — massive fat deposits, distended abdomen
  8: {
    body: 'M0,13 C0,11 3,9 7,8 C10,9 13,10 15,11 L18,13 C21,12 24,14 26,15 C29,17 32,18 35,18 C38,18 41,17 43,18 C46,20 48,22 49,24 L53,30 L53,38 C53,42 51,44 46,46 C42,48 38,50 33,50 C30,49 27,49 25,50 C23,52 19,52 15,50 C12,49 9,49 7,47 C4,44 2,41 0,36 C0,30 0,20 0,13 Z',
    legs: 'M19,46 L18,52 M24,47 L23,53 M38,46 L37,52 M43,47 L42,53',
    ribs: '',
  },
  // BCS 9: Severely obese — extreme fat, mobility impairment
  9: {
    body: 'M0,12 C0,10 3,8 7,7 C10,8 13,9 15,10 L18,12 C22,11 25,13 28,15 C31,18 34,19 37,20 C40,19 43,19 45,20 C48,23 51,26 52,29 L56,36 L56,44 C56,48 54,51 49,53 C45,55 40,57 35,57 C31,56 27,57 24,57 C21,58 17,58 13,56 C9,54 6,52 4,49 C2,44 1,38 0,30 C0,20 0,16 0,12 Z',
    legs: 'M20,54 L19,59 M26,55 L25,60 M40,54 L39,59 M46,55 L45,60',
    ribs: '',
  },
};

function getSilhouettePath(score: number, bodyType: BodyType): string {
  const set = DOG_SILHOUETTES;
  const s = set[score] || set[5];
  const base = s.body + ' ' + s.legs + ' ' + s.ribs;
  
  // For 'standard' body type, return base silhouettes unchanged
  if (bodyType === 'standard') return base;
  
  // For other body types, apply transformations to the standard paths
  return transformForBodyType(base, score, bodyType);
}

// Transform standard silhouette paths for different body types
function transformForBodyType(path: string, score: number, bodyType: BodyType): string {
  if (bodyType === 'dachshund') {
    return transformDachshund(path, score);
  }
  if (bodyType === 'lean') {
    return transformLean(path, score);
  }
  if (bodyType === 'broad') {
    return transformBroad(path, score);
  }
  return path;
}

// Lean body type: deeper chest, sharper tuck, ribs visible at higher BCS
function transformLean(path: string, score: number): string {
  // Adjust body coordinates: narrow the belly, deepen the chest
  let p = path;
  
  // Shift belly Y coordinates upward by 2-3 units for deeper tuck
  // Shift back Y coordinates to create deeper chest
  // This is a coordinate transform applied to the SVG path
  p = p.replace(/\b(\d+)\b/g, (match, num) => {
    const n = parseInt(num);
    // Belly area: Y ≈ 24-35 range → shift upward
    if (n >= 24 && n <= 38) return String(n - 2);
    // Back area for deeper chest
    if (n >= 7 && n <= 12) return String(n - 1);
    return match;
  });
  
  // For sighthounds, ribs are normal at BCS 4-5
  // Add rib lines if they're missing (BCS 4-5 don't have ribs in standard)
  if (score === 4 || score === 5) {
    // Add subtle rib lines for lean breeds at ideal BCS
    const ribBase = 20;
    p += ` M${ribBase},${16 + score} L${ribBase},${20 + score}`;
    p += ` M${ribBase + 5},${16 + score} L${ribBase + 5},${20 + score}`;
  }
  
  return p;
}

// Broad body type: wider, rounder, minimal waist
function transformBroad(path: string, score: number): string {
  let p = path;
  
  // Make body wider: expand body X coordinates
  // In the viewBox 72x56, body is in X range ~18-55
  p = p.replace(/\b(\d+)\b/g, (match, num) => {
    const n = parseInt(num);
    // Chest/shoulder area: expand outward
    if (n >= 40 && n <= 56) return String(n + 1);
    // Belly: drop lower for rounder appearance
    if (n >= 24 && n <= 30 && score >= 5) return String(n + 2);
    return match;
  });
  
  // For broad breeds at BCS 4-5: reduce or remove any rib lines
  // (They wouldn't show ribs until lower BCS)
  if (score >= 4) {
    // Remove rib stroke lines (the standard underweight ones)
    p = p.replace(/ M\d+,\d+ L\d+,\d+/g, '');
    // But restore the main path (which contains M commands)
    // This is safe because rib lines come after the main path
  }
  
  return p;
}

// Dachshund: very long body, very short legs
function transformDachshund(path: string, score: number): string {
  let p = path;
  
  // Stretch body horizontally: expand X coordinates in body region
  // Also shorten leg lengths
  p = p.replace(/\b(\d+)\b/g, (match, num) => {
    const n = parseInt(num);
    // Leg lengths: current legs are Y ~30-42 range → make them shorter
    if (n >= 38 && n <= 42) return String(n - 15); // shorten long legs
    if (n >= 44 && n <= 60) return String(n - 15); // shorten legs further
    // Body X coordinates: stretch
    if (n >= 44 && n <= 56) return String(n + 8); // stretch rear body
    if (n >= 30 && n <= 42) return String(n + 4); // stretch mid body
    return match;
  });
  
  return p;
}

const BCSVisualScale: React.FC<BCSVisualScaleProps> = ({ bcs, onChange, species, breedName }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const selectedCategory = getCategory(bcs);
  
  // Determine body type from breed name
  const bodyType = useMemo(() => {
    return breedName ? getBodyType(breedName) : 'standard';
  }, [breedName]);
  
  const bodyTypeLabel = bodyType !== 'standard'
    ? (bodyType === 'lean' ? 'Lean Build' : bodyType === 'broad' ? 'Broad Build' : 'Long Body / Short Legs')
    : null;
  
  // Scroll selected card into center view
  useEffect(() => {
    if (cardRefs.current[bcs - 1] && scrollRef.current) {
      const card = cardRefs.current[bcs - 1];
      const container = scrollRef.current;
      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollTo = cardLeft - containerWidth / 2 + cardWidth / 2;
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, [bcs]);
  
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-dark">What shape is your pet in?</h2>
        <p className="text-dark-muted mt-2">A simple way to check if your pet is underweight, ideal, or overweight (1-9 scale used by veterinarians).</p>
      </div>
      
      <div className="space-y-4">
        {/* Category labels */}
        <div className="flex justify-between px-2">
          <span className="text-xs font-semibold text-amber-600">Underweight</span>
          <span className="text-xs font-semibold text-emerald-600">Ideal</span>
          <span className="text-xs font-semibold text-orange-600">Overweight</span>
        </div>
        
        {/* Score number labels */}
        <div className="flex justify-between px-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => (
            <span 
              key={score} 
              className={`text-xs font-bold w-16 text-center ${
                bcs === score ? 'text-primary' : 'text-dark-muted'
              }`}
            >
              {score}
            </span>
          ))}
        </div>
        
        {/* Horizontal scrollable scale */}
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-3 px-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => {
            const isSelected = bcs === score;
            return (
              <div
                key={score}
                ref={(el) => setCardRef(el, score - 1)}
                onClick={() => onChange(score)}
                className={`snap-center shrink-0 w-20 h-28 rounded-xl cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-1 ${
                  isSelected 
                    ? 'bg-primary-light ring-2 ring-primary shadow-md scale-105' 
                    : 'bg-surface-alt hover:bg-bd-light ring-1 ring-bd'
                }`}
              >
                <svg viewBox="0 0 72 56" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d={getSilhouettePath(score, bodyType)}
                    fill={isSelected ? '#6366f1' : '#94a3b8'}
                    stroke={isSelected ? '#4f46e5' : '#64748b'}
                    strokeWidth={0.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={`text-xs font-bold mt-1 ${
                  isSelected ? 'text-primary' : 'text-dark-muted'
                }`}>
                  {score}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Range category bar */}
        <div className="w-full h-2 rounded-full overflow-hidden flex">
          <div className="h-full bg-amber-300" style={{ width: '33.33%' }} />
          <div className="h-full bg-emerald-400" style={{ width: '22.22%' }} />
          <div className="h-full bg-orange-400" style={{ width: '22.22%' }} />
          <div className="h-full bg-red-400" style={{ width: '22.22%' }} />
        </div>
        <div className="flex justify-between px-1 text-xs text-dark-muted">
          <span>1 — 3</span>
          <span>4 — 5</span>
          <span>6 — 7</span>
          <span>8 — 9</span>
        </div>
        
        {/* Info card */}
        <div className="text-center p-5 bg-surface-alt rounded-xl border border-bd">
          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-primary">{bcs}</span>
            <span className="text-sm text-dark-muted self-end mb-2">/ 9</span>
          </div>
          <p className={`font-bold text-lg uppercase tracking-wider ${selectedCategory.color}`}>
            {selectedCategory.label}
          </p>
          {bodyTypeLabel && (
            <p className="text-xs text-primary font-medium mt-1">
              {breedName} · {bodyTypeLabel}
            </p>
          )}
          {bodyType === 'lean' && (bcs >= 4 && bcs <= 5) && (
            <p className="text-xs text-amber-600 italic mt-1">
              Visible ribs and hip bones are normal for this body type at ideal weight
            </p>
          )}
          {bodyType === 'broad' && (bcs >= 4 && bcs <= 5) && (
            <p className="text-xs text-amber-600 italic mt-1">
              A rounder body with minimal waist is normal for this build at ideal weight
            </p>
          )}
          <div className="mt-4 flex gap-3 text-left">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-dark-muted leading-relaxed">
              {BCS_DESCRIPTIONS[bcs]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCSVisualScale;