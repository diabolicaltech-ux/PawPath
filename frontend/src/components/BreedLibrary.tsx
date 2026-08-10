import React, { useState, useMemo } from 'react';
import {
  Search, Globe, Star, Activity, Heart, ChevronRight, X,
  PawPrint, BookOpen, Filter, Dog, CheckCircle2, Clock
} from 'lucide-react';
import { BREED_NEWSLETTERS, getBreedNewsletter } from '../data/breed_newsletter_data';
import { BREEDS, type BreedData } from '../data/breeds';
import PetNewsletter from './PetNewsletter';

const CONDITION_GLOSSES: Record<string, string> = {
  dysplasia: 'abnormal development of a joint', pra: 'progressive retinal atrophy, an inherited eye disease that may affect vision',
  hcm: 'hypertrophic cardiomyopathy, a disease that can thicken the heart muscle', gdv: 'gastric dilatation-volvulus, a dangerous stomach emergency',
  bloat: 'gastric dilatation-volvulus, a dangerous stomach emergency', mdr1: 'a genetic drug-sensitivity variant that can change how some medicines affect a pet',
  dcm: 'dilated cardiomyopathy, a disease that weakens and enlarges the heart', 'patellar luxation': 'a kneecap that slips out of its normal track',
  hypothyroidism: 'an underactive thyroid gland', eic: 'exercise-induced collapse, an episode of weakness or collapse after activity',
  osteochondrodysplasia: 'abnormal bone and cartilage development'
};
const conditionLabel = (condition: string) => { const key = condition.toLowerCase(); const gloss = Object.entries(CONDITION_GLOSSES).find(([term]) => key.includes(term))?.[1]; return gloss ? `${condition} (${gloss})` : condition; };
const concernLabel = (severity: unknown) => { const n = Number(severity); if (!Number.isFinite(n)) return 'Concern level not recorded'; if (n <= 1) return 'Mild concern'; if (n <= 3) return 'Moderate concern'; return 'Notable concern'; };

type BreedLibraryView = 'grid' | 'detail';

const BreedLibrary: React.FC = () => {
  // Free tier placeholder — all users are free until payment status is wired up

  const [searchQuery, setSearchQuery] = useState('');
  const [speciesFilter] = useState<'canine'>('canine');
  const [statusFilter, setStatusFilter] = useState<'all' | 'approved' | 'vet_reviewed' | 'draft'>('all');
  const [view, setView] = useState<BreedLibraryView>('grid');
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null);

  // Filter breeds based on search, species, and review status
  const filteredBreeds = useMemo(() => {
    const approved = new Map(BREED_NEWSLETTERS.filter(b => b.reviewStatus === 'approved').map(b => [b.breedName, b]));
    return BREEDS.filter(b => {
      if (b.species !== 'canine') return false; if (!searchQuery) return true; const q=searchQuery.toLowerCase(); const n=approved.get(b.name); return b.name.toLowerCase().includes(q) || !!n?.origin.region.toLowerCase().includes(q) || !!n?.origin.originalPurpose.toLowerCase().includes(q); }).map(b => approved.get(b.name) || b);
  }, [searchQuery, speciesFilter]);
  const selectedNewsletter = selectedBreed ? getBreedNewsletter(selectedBreed) : null;

  const previewBreeds = filteredBreeds;


  // Get region flag emoji
  const getRegionFlag = (region: string): string => {
    const r = region.toLowerCase();
    if (r.includes('germany')) return '🇩🇪';
    if (r.includes('france')) return '🇫🇷';
    if (r.includes('scotland') || r.includes('united kingdom') || r.includes('england') || r.includes('britain')) return '🇬🇧';
    if (r.includes('canada') || r.includes('newfoundland')) return '🇨🇦';
    if (r.includes('united states') || r.includes('maine') || r.includes('america')) return '🇺🇸';
    if (r.includes('thailand') || r.includes('siam')) return '🇹🇭';
    if (r.includes('china')) return '🇨🇳';
    if (r.includes('japan')) return '🇯🇵';
    if (r.includes('australia')) return '🇦🇺';
    if (r.includes('russia') || r.includes('siberia')) return '🇷🇺';
    if (r.includes('italy')) return '🇮🇹';
    if (r.includes('spain')) return '🇪🇸';
    if (r.includes('mexico')) return '🇲🇽';
    if (r.includes('belgium')) return '🇧🇪';
    if (r.includes('netherlands')) return '🇳🇱';
    if (r.includes('switzerland')) return '🇨🇭';
    if (r.includes('poland')) return '🇵🇱';
    if (r.includes('ireland')) return '🇮🇪';
    if (r.includes('hungary')) return '🇭🇺';
    if (r.includes('iran') || r.includes('persia')) return '🇮🇷';
    return '🌍';
  };

  return (
    <div className="min-h-screen bg-surface-alt pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-dark">Breed Library</h1>
              <p className="text-dark-muted mt-1">
                Explore detailed breed profiles — {BREEDS.length} breeds available
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl border border-bd p-4 mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-muted" />
              <input
                type="text"
                placeholder="Search breeds by name, origin, or purpose..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-bd text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-muted hover:text-dark-muted"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Species filter */}
            <div className="flex gap-1.5">
              {(['canine'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSpeciesFilter(s)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 ${
                    speciesFilter === s
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-bd-light text-dark-muted hover:bg-bd-light'
                  }`}
                >
                  <Dog className="w-4 h-4" />
                  Dogs
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-4 text-sm text-dark-muted">
          {filteredBreeds.length === 0 ? (
            <span>No breeds found matching your search.</span>
          ) : (
            <span>Showing {previewBreeds.length} matching breed{previewBreeds.length !== 1 ? 's' : ''}</span>
          )}
        </div>

        {/* Grid View */}
        {view === 'grid' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {previewBreeds.map(breed => {
                if ('name' in breed) return <button key={breed.name} onClick={() => { setSelectedBreed(breed.name); setView('detail'); }} className="text-left bg-white rounded-2xl border border-bd p-5 hover:border-primary transition-all"><div className="flex items-start gap-3"><span className="text-2xl">🐕</span><div><h3 className="font-bold text-dark">{breed.name}</h3><p className="text-xs text-dark-muted mt-1">Dog · {breed.ideal_weight_min_kg}–{breed.ideal_weight_max_kg} kg</p><p className="text-xs text-dark-muted mt-1">Life expectancy: {breed.life_expectancy} years · Senior care from around {breed.senior_classification_age}+</p><p className="text-xs text-dark-muted mt-2">{(breed.alert_rules?.predispositions || []).slice(0,3).map((x:any)=>conditionLabel(x.condition)).join(' · ')}</p></div></div><span className="mt-4 block text-sm text-primary font-medium">View Health Guide <ChevronRight className="inline w-4 h-4"/></span></button>;
                return <button
                  key={breed.breedName}
                  onClick={() => { setSelectedBreed(breed.breedName); setView('detail'); }}
                  className="bg-white rounded-2xl border border-bd overflow-hidden hover:shadow-lg hover:border-primary transition-all text-left group"
                >
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-2xl shrink-0">{'name' in breed ? '🐕' : getRegionFlag(breed.origin.region)}</span>
                      <div className="min-w-0">
                        <h3 className="font-bold text-dark text-base">{'name' in breed ? breed.name : breed.breedName}</h3>
                        <p className="text-xs text-dark-muted truncate">{'name' in breed ? `$Dog · ${breed.ideal_weight_min_kg}–${breed.ideal_weight_max_kg} kg` : `${breed.origin.region} · ${breed.origin.originalPurpose}`}</p>
                      </div>
                    </div>

                    <p className="text-sm text-dark-muted leading-relaxed line-clamp-2 mb-3">
                      {'name' in breed ? `Life expectancy ${breed.life_expectancy} years · Senior at ${breed.senior_classification_age}+` : breed.origin.summary}
                    </p>

                    {/* Fun fact */}
                    <div className="flex items-start gap-1.5 p-2.5 bg-amber-50 rounded-xl border border-amber-100 mb-3">
                      <Star className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-amber-700 italic leading-relaxed">{breed.origin.funFact}</p>
                    </div>

                    {/* Activity + Health badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {breed.activities.primary.slice(0, 2).map((a, i) => (
                        <span key={i} className="px-2 py-0.5 bg-green-50 text-green-700 rounded-lg text-[10px] font-medium border border-green-100">
                          {a}
                        </span>
                      ))}
                      <span className="px-2 py-0.5 bg-primary-light text-primary-dark rounded-lg text-[10px] font-medium border border-primary-light">
                        ⏱ {breed.activities.weeklyMinutesMin}–{breed.activities.weeklyMinutesMax} min/wk
                      </span>
                    </div>

                    {/* Trainability */}
                    <div className="flex items-center gap-2 text-xs text-dark-muted">
                      <span className="flex items-center gap-1">
                        <Activity className="w-3 h-3" /> Trainability:
                      </span>
                      <span className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map(s => (
                          <span key={s} className={`w-1.5 h-1.5 rounded-full ${s <= breed.training.trainability ? 'bg-primary' : 'bg-bd-light'}`} />
                        ))}
                      </span>
                      <span className="text-dark-muted">({breed.training.trainability}/5)</span>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <span className="text-sm text-primary font-medium hover:text-primary-dark transition-all flex items-center gap-1 group-hover:gap-2">
                      Read Breed Guide <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </button>
              })}
            </div>
          </>
        )}

        {/* Detail View */}
        {view === 'detail' && selectedNewsletter && (
          <div>
            <button
              onClick={() => { setView('grid'); setSelectedBreed(null); }}
              className="mb-4 text-primary font-medium hover:text-primary-dark transition-all flex items-center gap-1"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Back to Breed Library
            </button>
            <div className="bg-white rounded-3xl border border-bd overflow-hidden">
              {/* Breed header */}
              <div className="bg-gradient-to-br from-primary via-primary-dark to-primary p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{getRegionFlag(selectedNewsletter.origin.region)}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedNewsletter.breedName}</h2>
                    <p className="text-white/70 text-sm">
                      {selectedNewsletter.origin.region} · {selectedNewsletter.origin.originalPurpose}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-2.5 py-1 bg-white/20 rounded-lg text-xs font-medium backdrop-blur-sm">
                    🐕 Dog
                  </span>
                  <span className="px-2.5 py-1 bg-white/20 rounded-lg text-xs font-medium backdrop-blur-sm">
                    Developed: {selectedNewsletter.origin.developed}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mt-4">
                  <PetNewsletter newsletter={selectedNewsletter} />
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'detail' && !selectedNewsletter && selectedBreed && (() => {
          const b = BREEDS.find(x => x.name === selectedBreed);
          if (!b) return null;
          const contraindications = b.alert_rules?.contraindications || [];
          return <div>
            <button onClick={() => { setView('grid'); setSelectedBreed(null); }} className="mb-4 text-primary font-medium">← Back to Breed Library</button>
            <div className="bg-white rounded-3xl border border-bd p-6">
              <h2 className="text-2xl font-bold text-dark">{b.name} Health Guide</h2>
              <p className="text-sm text-dark-muted mt-2">Dog · Ideal weight {b.ideal_weight_min_kg}–{b.ideal_weight_max_kg} kg · Life expectancy {b.life_expectancy} years · Senior care from around {b.senior_classification_age}+</p>
              <h3 className="font-bold text-dark mt-6">Common Health Considerations</h3>
              <div className="mt-2 space-y-2">{(b.alert_rules?.predispositions || []).map((x:any,i:number) => { const onset = x.onsetAgeMonths == null ? 'timing not recorded' : x.onsetAgeMonths < 24 ? `usually shows up around ${x.onsetAgeMonths} months` : `usually shows up around ${Math.round(x.onsetAgeMonths/12)} years`; return <div key={i} className="p-3 bg-surface-alt rounded-xl text-sm"><b>{conditionLabel(x.condition)}</b><p className="text-xs text-dark-muted mt-1">{onset} · {concernLabel(x.severity)}{x.screening ? ` · Suggested screening: ${x.screening}` : ''}</p></div>; })}</div>
              {contraindications.length > 0 ? <><h3 className="font-bold text-dark mt-6">Contraindications</h3><ul className="mt-2 space-y-2">{contraindications.map((x:any,i:number) => <li key={i} className="p-3 bg-amber-50 rounded-xl text-sm">⚠️ {typeof x === 'string' ? x : x.condition || x.name || JSON.stringify(x)}</li>)}</ul></> : <p className="text-xs text-dark-muted mt-2">No breed-specific contraindications recorded — always consult your veterinarian.</p>}
              <p className="text-xs text-dark-muted italic mt-6">Predispositions are breed risk factors, not diagnoses. Always consult your veterinarian for health decisions.</p>
            </div>
          </div>;
        })()}
        {/* Empty state */}
        {filteredBreeds.length === 0 && view === 'grid' && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-bd-light rounded-3xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-dark-muted" />
            </div>
            <h3 className="text-lg font-bold text-dark-muted mb-1">No breeds found</h3>
            <p className="text-sm text-dark-muted">Try adjusting your search query or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BreedLibrary;