import React from 'react';
import { 
  PawPrint, Heart, Scale, Calendar, Activity, ChevronRight, 
  ShieldCheck, Star, Plus, Dog,
  ArrowRight, Sparkles, Trash2
} from 'lucide-react';
import type { PetProfile, BreedSelection } from '../types/pet';
import { formatBreeds, getPrimaryBreed } from '../types/pet';
import { getBreedNewsletter, hasBreedNewsletter } from '../data/breed_newsletter_data';
import PetNewsletter from './PetNewsletter';
import { formatWeightWithUnit, getWeightUnit } from '../lib/weightUnits';

interface LoggedInHomepageProps {
  pets: PetProfile[];
  onOpenDashboard: (pet: PetProfile) => void;
  onAddPet: () => void;
  onEditPet: (pet: PetProfile) => void;
  onDeletePet: (id: string) => void;
  weightUnit: 'kg' | 'lbs';
}


const LoggedInHomepage: React.FC<LoggedInHomepageProps> = ({
  pets,
  onOpenDashboard,
  onAddPet,
  onEditPet,
  onDeletePet,
  weightUnit,
}) => {
  const [deleteConfirm, setDeleteConfirm] = React.useState<string | null>(null);
  const calculateAgeYears = (dob: string) => {
    const diff = Date.now() - new Date(dob).getTime();
    return (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  };

  const getLifeStageLabel = (species: string, dob: string): string => {
    const ageYears = parseFloat(calculateAgeYears(dob));
    if (species === 'canine') {
      if (ageYears < 1) return 'Puppy';
      if (ageYears < 2) return 'Junior';
      if (ageYears < 6) return 'Adult';
      if (ageYears < 8) return 'Mature Adult';
      return 'Senior';
    }
  };

  // Get the indigo-600 breed name for the first pet (for breed-specific content)
  const primaryPet = pets.length > 0 ? pets[0] : null;
  const primaryBreedName = primaryPet ? getPrimaryBreed(primaryPet) : '';
  const breedNewsletter = primaryBreedName ? getBreedNewsletter(primaryBreedName) : null;
  return (
    <div className="min-h-screen bg-surface-alt pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-dark flex items-center gap-3">
              <PawPrint className="text-primary" /> 
              Welcome To PawPath!
            </h1>
            <p className="text-dark-muted mt-1">
              {pets.length === 1 
                ? `Managing 1 pet`
                : `Managing ${pets.length} pets`
              }
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onAddPet} className="bg-primary text-white px-5 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg">
              <Plus className="w-5 h-5" /> Add Pet
            </button>
          </div>
        </div>

        {/* Pets Quick Stats */}
        {pets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {pets.map(pet => {
              const primaryBreed = getPrimaryBreed(pet);
              const age = calculateAgeYears(pet.dob);
              const lifeStage = getLifeStageLabel(pet.species, pet.dob);
              const petWeight = parseFloat(pet.weight) || 0;
              return (
                <div
                  key={pet.id}
                  className="bg-white rounded-2xl border border-bd p-5 hover:border-primary hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => onOpenDashboard(pet)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden flex items-center justify-center text-2xl bg-primary-light shrink-0">
                      {pet.photoUrl ? (
                        <img src={pet.photoUrl} alt={pet.name} className="w-full h-full object-cover" />
                      ) : (
                        <span>{pet.species === 'canine' ? '🐕' : '🐈'}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-dark text-lg">{pet.name}</h3>
                      <p className="text-sm text-dark-muted truncate">{primaryBreed}</p>
                      <div className="flex items-center gap-3 mt-2 text-xs text-dark-muted">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {age} years
                        </span>
                        <span className="flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> {lifeStage}
                        </span>
                        <span className="flex items-center gap-1">
                          <Scale className="w-3 h-3" /> {formatWeightWithUnit(petWeight, weightUnit)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={(event) => { event.stopPropagation(); onEditPet(pet); }}
                        className="p-2 rounded-lg text-dark-muted hover:bg-surface-warm hover:text-primary transition-all"
                        title={`Edit ${pet.name}'s profile`}
                        aria-label={`Edit ${pet.name}'s profile`}
                      >
                        <PawPrint className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={(event) => { event.stopPropagation(); setDeleteConfirm(pet.id || null); }}
                        className="p-2 rounded-lg text-dark-muted hover:bg-red-50 hover:text-red-700 transition-all"
                        title={`Delete ${pet.name}'s profile`}
                        aria-label={`Delete ${pet.name}'s profile`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-5 h-5 text-dark-muted group-hover:text-primary transition-all ml-1" />
                    </div>
                  </div>
                  {deleteConfirm === pet.id && (
                    <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3" onClick={(event) => event.stopPropagation()} role="alertdialog" aria-label={`Delete ${pet.name} profile confirmation`}>
                      <p className="text-sm font-semibold text-red-900">Delete {pet.name}'s profile?</p>
                      <p className="mt-1 text-xs text-red-800">This removes all health history for this dog. This can't be undone.</p>
                      <div className="mt-3 flex justify-end gap-2">
                        <button type="button" onClick={() => setDeleteConfirm(null)} className="rounded-lg border border-bd bg-white px-3 py-2 text-xs font-medium text-dark-muted hover:bg-surface-alt">Cancel</button>
                        <button type="button" onClick={() => { onDeletePet(pet.id!); setDeleteConfirm(null); }} className="rounded-lg bg-red-700 px-3 py-2 text-xs font-semibold text-white hover:bg-red-800">Delete profile</button>
                      </div>
                    </div>
                  )}
                  {/* Breed badge */}
                  {hasBreedNewsletter(primaryBreed) && (
                    <div className="mt-3 pt-3 border-t-bd border-bd">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium">
                        📖 Breed Guide Available
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
            {/* Add pet card */}
            <button
              onClick={onAddPet}
              className="bg-white rounded-2xl border-2 border-dashed border-bd p-5 hover:border-primary hover:bg-primary-light/30 transition-all flex items-center justify-center min-h-[120px]"
            >
              <div className="text-center">
                <Plus className="w-8 h-8 text-dark-muted mx-auto mb-2" />
                <p className="text-sm font-medium text-dark-muted">Add Another Pet</p>
              </div>
            </button>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-bd mb-8">
            <PawPrint className="w-16 h-16 text-bd-light mx-auto mb-4" />
            <h2 className="text-xl font-bold text-dark-muted mb-2">No pets yet</h2>
            <p className="text-dark-muted mb-6">Add your first pet to get started with PawPath</p>
            <button
              onClick={onAddPet}
              className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-5 h-5" /> Add Your First Pet
            </button>
          </div>
        )}

        {/* Breed-Specific Content Section */}
        {primaryPet && breedNewsletter ? (
          <section className="bg-white rounded-3xl border border-bd overflow-hidden">
            <div className="p-6 border border-bd">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-light rounded-xl flex items-center justify-center">
                  <span className="text-base">📖</span>
                </div>
                <h2 className="text-lg font-bold text-dark">
                  {primaryBreedName} Breed Guide
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium">
                  For {primaryPet.name}
                </span>
              </div>
            </div>
            <div className="p-6">
              <PetNewsletter newsletter={breedNewsletter} />
            </div>
          </section>
        ) : null}
        {/* Quick Tips Section */}
        <section className="mt-8 bg-gradient-to-r from-primary-light to-blue-50 rounded-3xl border border-primary-light p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-bold text-dark">Quick Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-xl p-4 border border-primary-light/50">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Scale className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Weight</span>
              </div>
              <p className="text-sm text-dark-muted">Log your pet's weight weekly to track trends. Unexplained changes of more than 5% warrant a vet visit.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-primary-light/50">
              <div className="flex items-center gap-2 text-accent-green mb-2">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Activity</span>
              </div>
              <p className="text-sm text-dark-muted">Follow the exercise plan on your pet's dashboard. Adjust intensity based on breed, age, and weather.</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-primary-light/50">
              <div className="flex items-center gap-2 text-amber-600 mb-2">
                <Heart className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Health</span>
              </div>
              <p className="text-sm text-dark-muted">Record vet visits promptly. The clinical alert system will notify you about breed-specific risks.</p>
            </div>
          </div>
        </section>
        <section className="mt-8 pt-6 border-t border-primary-light/50 text-center text-xs">
          <p className="text-dark-muted">Guides: <a href="/guides/dog-vaccination-schedule" className="text-primary hover:text-primary-dark underline underline-offset-2">Dog vaccination schedule</a> · <a href="/guides/puppy-weight-chart" className="text-primary hover:text-primary-dark underline underline-offset-2">Puppy weight chart</a> · <a href="/tools/dog-nutrition-calculator" className="text-primary hover:text-primary-dark underline underline-offset-2">Dog nutrition calculator</a> · <a href="/breed-health" className="text-primary hover:text-primary-dark underline underline-offset-2">Breed health library</a></p>
          <p className="text-dark-muted mt-2">Questions? <a href="mailto:contactpawpath@gmail.com" className="text-primary hover:text-primary-dark underline underline-offset-2">Email our support team</a></p>
        </section>
      </div>
    </div>
  );
};

export default LoggedInHomepage;