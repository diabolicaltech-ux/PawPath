import React, { useState, useEffect } from 'react';
import { Scale, ChevronRight, ChevronLeft, 
  CheckCircle2, Info, Stethoscope, Pill, Activity, 
  ShieldCheck, Search, Syringe, HeartPulse, X, PawPrint
} from 'lucide-react';
import { calculateMER, Species } from '../engine/metabolic_engine';
import { getLifeStage } from '../engine/milestone_engine';
import { evaluateAlerts } from '../engine/alert_engine';
import type { PetProfile, MedicalHistoryEntry } from '../types/pet';
import type { BreedData } from '../data/breeds';
import { BREEDS } from '../data/breeds';
import { getWeightUnit, lbsToKg } from '../lib/weightUnits';

interface OnboardingFormProps {
  onComplete: (data: PetProfile) => void;
  initialData?: PetProfile;
  onCancel?: () => void;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete, initialData, onCancel }) => {
  const [step, setStep] = useState(1);
  const [breeds, setBreeds] = useState<BreedData[]>([]);
  const [petData, setPetData] = useState<PetProfile>(() => initialData || {
    name: '',
    species: Species.CANINE,
    breed: '',
    breeds: [],
    dob: '',
    gender: 'male',
    isNeutered: false,
    weight: '',
    activityLevel: 'normal',
    bcs: 5,
    chronicConditions: [],
    previousSurgeries: [],
    previousSeriousIllness: false,
    currentMedications: [],
    onNsaids: false,
    onCorticosteroids: false,
    onThyroidMedication: false,
    onInsulin: false,
    onAntiSeizure: false,
    onHeartMedication: false,
    onBehavioralMedication: false,
    supplements: [],
    drugAllergies: [],
    vaccinations: [],
    onHeartwormPrevention: false,
    onFleaTickPrevention: false,
    completedScreenings: [],
    hasRecentBloodwork: false,
    currentDietType: 'dry',
    allergies: '',
    recentWeightLoss: false,
  });

  const [breedSearch, setSearch] = useState('');
  const [breedSelectionMode, setBreedSelectionMode] = useState<'simple' | 'advanced'>('simple');
  const [localWeightUnit, setLocalWeightUnit] = useState<'kg' | 'lbs'>(getWeightUnit());

  // Sync localWeightUnit whenever it changes (e.g. from Dashboard)
  const weightUnit = localWeightUnit;

  useEffect(() => {
    setBreeds(BREEDS.filter(b => b.species === Species.CANINE));
  }, []);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const totalSteps = 9;

  const filteredBreeds = breeds
    .filter(b => b.species === Species.CANINE)
    .filter(b => b.name.toLowerCase().includes(breedSearch.toLowerCase()))
    .map(b => b.name);

  const getResults = () => {
    const dobDate = new Date(petData.dob);
    const rawWeight = parseFloat(petData.weight) || 0;
    const weightKg = weightUnit === 'lbs' ? lbsToKg(rawWeight) : rawWeight;
    
    // Metabolic calc
    const mer = calculateMER({
      species: petData.species,
      weightKg: weightKg,
      isNeutered: petData.isNeutered,
      activityLevel: petData.activityLevel,
      workingDogMultiplier: petData.workingDogMultiplier,
      lifeStage: 'adult', // simplified for calc
      bcsScore: petData.bcs
    });

    // Life stage
    const lifeStage = getLifeStage({
      species: petData.species,
      dateOfBirth: dobDate,
      weightKg: weightKg
    });

    // Determine indigo-600 breed for alert evaluation
    const primaryBreedName = 
      petData.breeds?.find(b => b.isPrimary)?.breed || 
      petData.breeds?.[0]?.breed || 
      petData.breed || '';

    // Build all breed selections for multi-breed alert engine
    const allBreedSelections = petData.breeds && petData.breeds.length > 0
      ? petData.breeds
      : (petData.breed ? [{ breed: petData.breed }] : []);

    // Get breed data objects for all selected breeds
    const selectedBreedObjs = allBreedSelections
      .map(bs => breeds.find(b => b.name === bs.breed))
      .filter((b): b is BreedData => b !== undefined);

    const primaryBreed = breeds.find(b => b.name === primaryBreedName) || {
      name: primaryBreedName || 'Unknown',
      species: petData.species,
      alert_rules: { predispositions: [] }
    };

    const alerts = evaluateAlerts({
      id: 'temp',
      name: petData.name,
      species: petData.species,
      dateOfBirth: dobDate,
      breed: primaryBreed as any,
      breeds: selectedBreedObjs as any,
      healthLogs: [{ date: new Date(), weightKg: weightKg, bcsScore: petData.bcs }],
      clinicalEvents: [],
      medicalHistory: {
        isNeutered: petData.isNeutered,
        activityLevel: petData.activityLevel,
        bcsScore: petData.bcs,
        currentDietType: petData.currentDietType || 'dry',
        chronicConditions: petData.chronicConditions,
        onNsaids: petData.onNsaids,
        onCorticosteroids: petData.onCorticosteroids,
        onThyroidMedication: petData.onThyroidMedication,
        onInsulin: petData.onInsulin,
        onAntiSeizure: petData.onAntiSeizure,
        onHeartMedication: petData.onHeartMedication,
        onBehavioralMedication: petData.onBehavioralMedication,
        supplements: petData.allergies ? [petData.allergies] : [],
        currentMedications: petData.currentMedications,
        recentWeightLoss: petData.recentWeightLoss,
        weightHistoryNote: petData.allergies
      }
    });

    return { mer, lifeStage, alerts };
  };

  const handleFinalSubmit = async () => {
    // Convert weight from selected unit to kg for storage
    const weightUnit = getWeightUnit();
    const rawWeight = parseFloat(petData.weight) || 0;
    const weightKg = weightUnit === 'lbs' ? lbsToKg(rawWeight) : rawWeight;
    const today = new Date().toISOString().split('T')[0];
    const initialWeightEntry = {
      date: today,
      weightKg: weightKg,
      notes: 'Initial weight (onboarding)'
    };
    // Initialize medical history with a profile creation entry
    const initialMedicalEntry: MedicalHistoryEntry = {
      date: today,
      type: 'profile_edit',
      description: initialData ? 'Profile updated' : 'Profile created',
      details: `${petData.name} (Dog)`
    };
    const dataWithHistory = {
      ...petData,
      weight: weightKg.toString(),
      weightHistory: petData.weightHistory || [initialWeightEntry],
      medicalHistory: petData.medicalHistory || [initialMedicalEntry]
    };
    // Preserve the id if editing
    const data = initialData?.id ? { ...dataWithHistory, id: initialData.id } : dataWithHistory;
    onComplete(data);
  };

  const toggleCondition = (condition: string) => {
    const current = [...petData.chronicConditions];
    const index = current.indexOf(condition);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(condition);
    }
    setPetData({ ...petData, chronicConditions: current });
  };

  const canineConditions = [
    'Hip Dysplasia', 'Elbow Dysplasia', 'Patellar Luxation', 'IVDD', 'Epilepsy/Seizures', 
    'Heart Disease', 'Diabetes Mellitus', 'Cushing\'s Disease', 'Hypothyroidism', 
    'Addison\'s Disease', 'Pancreatitis', 'Kidney Disease (CKD)', 'Bladder Stones', 
    'Liver Disease/Shunt', 'Allergies/Skin Disease', 'Cancer'
  ];

  const isStep2Valid = () => {
    if (!petData.dob || !petData.weight) return false;
    
    const dob = new Date(petData.dob);
    const now = new Date();
    if (dob > now) return false;
    
    const ageYears = (now.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    if (ageYears > 30) return false;

    const weight = parseFloat(petData.weight);
    if (isNaN(weight)) return false;
    if (petData.species === Species.CANINE) {
      if (weight < 0.2 || weight > 150) return false;
    } else {
      if (weight < 0.2 || weight > 25) return false;
    }
    
    return true;
  };

  return (
    <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="h-2 bg-bd-light flex">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i + 1}
            className={`flex-1 transition-all duration-500 ${
              i + 1 <= step ? 'bg-primary' : ''
            }`}
          />
        ))}
      </div>

      <div className="p-8">
        {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary via-primary-dark to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <PawPrint className="text-white w-10 h-10" />
                      </div>
                      <h2 className="text-2xl font-bold text-dark">Welcome To PawPath!</h2>
                      <p className="text-dark-muted mt-2">Lifelong health tracking for your dog.</p>
                    </div>

                    {/* Mission */}
                    <div className="bg-gradient-to-r from-primary-light to-primary-light rounded-2xl p-5 border border-primary-light">
                      <p className="text-sm text-dark-muted leading-relaxed">
                        PawPath is a lifelong health tracking application for dogs that uses clinical data and metabolic modeling to provide proactive, personalized care.
                      </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-surface-alt rounded-xl p-4 border border-bd">
                        <div className="w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-lg">🩺</span>
                        </div>
                        <h3 className="font-bold text-dark text-sm">Highly Recommended</h3>
                        <p className="text-xs text-dark-muted mt-0.5">Breed-specific health risk monitoring</p>
                      </div>
                      <div className="bg-surface-alt rounded-xl p-4 border border-bd">
                        <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-lg">🥗</span>
                        </div>
                        <h3 className="font-bold text-dark text-sm">Precision Nutrition</h3>
                        <p className="text-xs text-dark-muted mt-0.5">Custom calorie and diet calculations</p>
                      </div>
                      <div className="bg-surface-alt rounded-xl p-4 border border-bd">
                        <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-lg">📋</span>
                        </div>
                        <h3 className="font-bold text-dark text-sm">Medical History</h3>
                        <p className="text-xs text-dark-muted mt-0.5">Comprehensive health timeline</p>
                      </div>
                      <div className="bg-surface-alt rounded-xl p-4 border border-bd">
                        <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                          <span className="text-lg">🎯</span>
                        </div>
                        <h3 className="font-bold text-dark text-sm">Life Stage Tracking</h3>
                        <p className="text-xs text-dark-muted mt-0.5">Age-appropriate milestone guidance</p>
                      </div>
                    </div>

                    {/* Contact info */}
                    <p className="text-xs text-dark-muted text-center">contact@pawpath.app — This information will be updated soon.</p>
                  </div>
                )}

                {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <PawPrint className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-dark">Welcome To PawPath!</h2>
              <p className="text-dark-muted mt-2">Let's start by getting to know your pet.</p>
            </div>
            <div className="space-y-4">
              {/* Pet Photo */}
              <div className="flex justify-center">
                <label className="cursor-pointer group relative">
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          setPetData({ ...petData, photoUrl: ev.target?.result as string });
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-light group-hover:border-primary transition-all flex items-center justify-center bg-primary-light">
                    {petData.photoUrl ? (
                      <img src={petData.photoUrl} alt="Pet photo" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-center">
                        <span className="text-2xl">{'🐕'}</span>
                        <p className="text-[10px] text-primary font-medium mt-0.5">Add Photo</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md group-hover:bg-primary-dark transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">Pet's Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-bd focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="Enter name..."
                  value={petData.name}
                  onChange={(e) => setPetData({ ...petData, name: e.target.value })}
                />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-dark-muted">Select Breed{petData.breeds && petData.breeds.length > 1 ? 's' : ''}</label>
                  <button
                    type="button"
                    onClick={() => setBreedSelectionMode(breedSelectionMode === 'simple' ? 'advanced' : 'simple')}
                    className="text-xs text-primary hover:text-primary-dark font-medium"
                  >
                    {breedSelectionMode === 'simple' ? 'Advanced Mode' : 'Simple Mode'}
                  </button>
                </div>
                
                {/* Selected breeds chips */}
                {petData.breeds && petData.breeds.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {petData.breeds.map((bs, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-3 py-1 bg-primary-light text-primary-dark rounded-full text-xs font-medium">
                        {bs.breed}
                        {bs.percentage !== undefined && <span className="text-primary">({bs.percentage}%)</span>}
                        {bs.isPrimary && <span className="text-[10px] uppercase font-bold text-primary">Primary</span>}
                        <button
                          type="button"
                          onClick={() => {
                            const newBreeds = [...(petData.breeds || [])];
                            newBreeds.splice(i, 1);
                            setPetData({ 
                              ...petData, 
                              breeds: newBreeds,
                              breed: newBreeds.length > 0 ? newBreeds[0].breed : ''
                            });
                          }}
                          className="ml-1 hover:text-accent-red"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                <div className="relative">
                  <Search className="absolute left-3 top-3.5 text-dark-muted w-4 h-4" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-bd focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Search breeds..."
                    value={breedSearch}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="mt-2 space-y-1 max-h-40 overflow-y-auto custom-scrollbar border-bd rounded-lg p-2">
                  {filteredBreeds.map((breed) => {
                    const isSelected = petData.breeds?.some(b => b.breed === breed);
                    return (
                      <button
                        key={breed}
                        onClick={() => {
                          if (breedSelectionMode === 'simple' || !petData.breeds) {
                            // Simple mode: replace all with single breed
                            setPetData({ 
                              ...petData, 
                              breed,
                              breeds: [{ breed, isPrimary: true }]
                            });
                            setSearch(breed);
                          } else {
                            // Advanced mode: toggle breed in/out
                            const current = [...(petData.breeds || [])];
                            const existingIdx = current.findIndex(b => b.breed === breed);
                            if (existingIdx >= 0) {
                              current.splice(existingIdx, 1);
                            } else {
                              current.push({ 
                                breed, 
                                percentage: undefined, 
                                isPrimary: current.length === 0 
                              });
                            }
                            setPetData({ 
                              ...petData, 
                              breeds: current,
                              breed: current.length > 0 ? current[0].breed : ''
                            });
                          }
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-all text-sm flex items-center justify-between ${
                          isSelected ? 'bg-primary text-white font-medium' : 'hover:bg-surface-alt text-dark-muted'
                        }`}
                      >
                        <span>{breed}</span>
                        {breedSelectionMode === 'advanced' && isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        )}
                      </button>
                    );
                  })}
                  {filteredBreeds.length === 0 && (
                    <p className="text-xs text-dark-muted text-center py-4">No breeds found</p>
                  )}
                </div>

                {/* Advanced mode: percentage & indigo-600 controls */}
                {breedSelectionMode === 'advanced' && petData.breeds && petData.breeds.length > 1 && (
                  <div className="mt-3 p-3 bg-surface-alt rounded-lg border border-bd">
                    <p className="text-xs font-medium text-dark-muted mb-2">Breed Composition (Advanced)</p>
                    {petData.breeds.map((bs, i) => (
                      <div key={i} className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-dark-muted w-1/3 truncate">{bs.breed}</span>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="%"
                          className="w-16 px-2 py-1 rounded border border-bd text-xs"
                          value={bs.percentage ?? ''}
                          onChange={(e) => {
                            const newBreeds = [...(petData.breeds || [])];
                            newBreeds[i] = { ...newBreeds[i], percentage: parseFloat(e.target.value) || undefined };
                            setPetData({ ...petData, breeds: newBreeds });
                          }}
                        />
                        <span className="text-xs text-dark-muted">%</span>
                        <button
                          type="button"
                          onClick={() => {
                            const newBreeds = [...(petData.breeds || [])];
                            newBreeds.forEach((b, idx) => newBreeds[idx] = { ...b, isPrimary: idx === i });
                            setPetData({ ...petData, breeds: newBreeds });
                          }}
                          className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                            bs.isPrimary ? 'bg-primary-light text-primary-dark' : 'bg-bd-light text-dark-muted hover:bg-bd-light'
                          }`}
                        >
                          {bs.isPrimary ? 'Primary' : 'Set Primary'}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-dark">Pet Profile</h2>
              <p className="text-dark-muted mt-2">Additional details for medical accuracy.</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-2">Gender</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPetData({ ...petData, gender: 'male' })}
                      className={`flex-1 p-3 rounded-lg border-bd transition-all ${petData.gender === 'male' ? 'border-primary bg-primary-light' : 'border-bd'}`}
                    >Male</button>
                    <button
                      onClick={() => setPetData({ ...petData, gender: 'female' })}
                      className={`flex-1 p-3 rounded-lg border-bd transition-all ${petData.gender === 'female' ? 'border-primary bg-primary-light' : 'border-bd'}`}
                    >Female</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-2">Is your pet fixed / spayed / neutered?</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPetData({ ...petData, isNeutered: true })}
                      className={`flex-1 p-3 rounded-lg border-bd transition-all text-sm ${petData.isNeutered === true ? 'border-primary bg-primary-light text-primary-dark font-medium' : 'border-bd text-dark-muted hover:border-bd'}`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setPetData({ ...petData, isNeutered: false })}
                      className={`flex-1 p-3 rounded-lg border-bd transition-all text-sm ${petData.isNeutered === false ? 'border-primary bg-primary-light text-primary-dark font-medium' : 'border-bd text-dark-muted hover:border-bd'}`}
                    >
                      No
                    </button>
                    <button
                      onClick={() => setPetData({ ...petData, isNeutered: false })}
                      className={`flex-1 p-3 rounded-lg border border-dashed transition-all text-sm ${'border-bd text-dark-muted hover:border-bd'}`}
                    >
                      Not sure
                    </button>
                  </div>
                  <p className="text-[11px] text-dark-muted mt-1 italic">Neutered pets need fewer calories. "Not sure" uses a general estimate.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-1">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-bd focus:ring-2 focus:ring-primary outline-none"
                    value={petData.dob}
                    onChange={(e) => setPetData({ ...petData, dob: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-muted mb-1">Weight</label>
                  <div className="relative flex gap-2">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-3 rounded-lg border border-bd focus:ring-2 focus:ring-primary outline-none"
                      placeholder="0.0"
                      value={petData.weight}
                      onChange={(e) => setPetData({ ...petData, weight: e.target.value })}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newUnit = weightUnit === 'kg' ? 'lbs' : 'kg';
                        setPetData({ ...petData, weight: '' });
                        localStorage.setItem('pawpath_weightUnit', newUnit);
                        setLocalWeightUnit(newUnit);
                      }}
                      className="px-3 py-3 rounded-lg border border-bd bg-white text-sm font-medium text-dark-muted hover:bg-surface-alt transition-all flex items-center gap-1 shrink-0"
                    >
                      <Scale className="w-4 h-4" />
                      {weightUnit}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-dark">Lifestyle & Diet</h2>
              <p className="text-dark-muted mt-2">How does {petData.name} spend their day?</p>
            </div>
            <div className="space-y-4">
              <>
                <>
                  {/* DOG: Current activity level options */}
                  <label className="block text-sm font-medium text-dark-muted mb-1">Typical Daily Activity</label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: 'low', label: 'Low', desc: 'Mostly naps and short walks' },
                      { id: 'normal', label: 'Moderate', desc: 'Daily walks and playtime' },
                      { id: 'high', label: 'Active', desc: 'Lots of running, hiking, or active play' },
                      { id: 'working', label: 'Very Active', desc: 'All-day activity (herding, hunting, service work)' }
                    ].map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setPetData({ ...petData, activityLevel: level.id as any })}
                        className={`w-full text-left p-3 rounded-xl border-bd transition-all ${
                          petData.activityLevel === level.id ? 'border-primary bg-primary-light' : 'border-bd hover:border-bd'
                        }`}
                      >
                        <p className="font-bold text-dark text-sm">{level.label}</p>
                        <p className="text-xs text-dark-muted">{level.desc}</p>
                      </button>
                    ))}
                  </div>
                </>
              </>

              {/* Diet Type for dogs */}
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">Current Diet Type</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-bd"
                  value={petData.currentDietType}
                  onChange={(e) => setPetData({...petData, currentDietType: e.target.value})}
                >
                  <option value="dry">Dry Kibble Only</option>
                  <option value="wet">Canned/Wet Only</option>
                  <option value="mixed">Mixed Dry + Wet</option>
                  <option value="raw">Raw Diet</option>
                  <option value="homecooked">Home-Cooked</option>
                  <option value="prescription">Prescription/Therapeutic</option>
                </select>
              </div>

              <div className="pt-4 border-t-bd border-bd">
                <div 
                  onClick={() => setPetData({ ...petData, recentWeightLoss: !petData.recentWeightLoss })}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div 
                    className={`w-6 h-6 rounded border-bd flex items-center justify-center transition-all shrink-0 ${
                      petData.recentWeightLoss ? 'bg-primary border-primary' : 'border-bd group-hover:border-primary'
                    }`}
                  >
                    {petData.recentWeightLoss && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark-muted">Has your pet lost weight without changing their diet?</p>
                    <p className="text-xs text-dark-muted">More than 5% body weight in the last month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-dark">Medical History</h2>
              <p className="text-dark-muted mt-2">Diagnosed conditions and surgeries.</p>
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Chronic Conditions (Check all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  {canineConditions.map(condition => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`text-left px-3 py-2 rounded-lg border-bd text-xs transition-all ${
                        petData.chronicConditions.includes(condition)
                          ? 'border-primary bg-primary-light text-primary-dark font-medium'
                          : 'border-bd text-dark-muted'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">Past Surgeries / Illnesses</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-bd text-sm h-20 outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Dental cleaning (2025), TPLO surgery (2023)..."
                  value={petData.previousSurgeries.join(', ')}
                  onChange={(e) => setPetData({ ...petData, previousSurgeries: e.target.value.split(',').map(s => s.trim()) })}
                />
              </div>
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pill className="text-orange-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-dark">Meds & Allergies</h2>
              <p className="text-dark-muted mt-2">Current medications and supplements.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-2">Are they on any of these medications?</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'onNsaids', label: 'NSAIDs (Carprofen, etc)' },
                    { id: 'onCorticosteroids', label: 'Steroids (Prednisone)' },
                    { id: 'onThyroidMedication', label: 'Thyroid Meds' },
                    { id: 'onInsulin', label: 'Insulin' },
                    { id: 'onHeartMedication', label: 'Heart Meds' },
                    { id: 'onAntiSeizure', label: 'Anti-Seizure' }
                  ].map(med => (
                    <button
                      key={med.id}
                      onClick={() => setPetData({ ...petData, [med.id]: !petData[med.id as keyof PetProfile] })}
                      className={`text-left px-3 py-2 rounded-lg border-bd text-xs transition-all ${
                        petData[med.id as keyof PetProfile]
                          ? 'border-orange-600 bg-orange-50 text-orange-700 font-medium'
                          : 'border-bd text-dark-muted'
                      }`}
                    >
                      {med.label}
                    </button>
                  ))}
                </div>
              </div>
              {petData.onNsaids && petData.onCorticosteroids && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-100 flex gap-2">
                  <Activity className="w-4 h-4 shrink-0" />
                  <strong>CONTRAINDICATION:</strong> NSAIDs and Steroids should not be used concurrently due to GI perforation risk.
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-dark-muted mb-1">Other Supplements / Allergies</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-bd text-sm h-20 outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="List herbal supplements or drug allergies..."
                  value={petData.allergies}
                  onChange={(e) => setPetData({ ...petData, allergies: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-primary-dark w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-dark">Preventive Care</h2>
              <p className="text-dark-muted mt-2">Vaccines and parasite prevention.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-alt rounded-xl">
                <div className="flex items-center gap-3">
                  <Syringe className="text-primary-dark w-5 h-5" />
                  <span className="text-sm font-medium">Core Vaccines Up-to-Date?</span>
                </div>
                <button
                  onClick={() => setPetData({ ...petData, hasRecentBloodwork: !petData.hasRecentBloodwork })}
                  className={`w-12 h-6 rounded-full relative transition-all ${petData.hasRecentBloodwork ? 'bg-blue-600' : 'bg-bd-light'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${petData.hasRecentBloodwork ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setPetData({ ...petData, onHeartwormPrevention: !petData.onHeartwormPrevention })}
                  className={`p-3 rounded-lg border-bd text-left text-sm flex justify-between items-center ${petData.onHeartwormPrevention ? 'border-blue-600 bg-blue-50' : 'border-bd'}`}
                >
                  <span>Heartworm Prevention</span>
                  {petData.onHeartwormPrevention && <CheckCircle2 className="w-4 h-4 text-primary-dark" />}
                </button>
                <button
                  onClick={() => setPetData({ ...petData, onFleaTickPrevention: !petData.onFleaTickPrevention })}
                  className={`p-3 rounded-lg border-bd text-left text-sm flex justify-between items-center ${petData.onFleaTickPrevention ? 'border-blue-600 bg-blue-50' : 'border-bd'}`}
                >
                  <span>Flea & Tick Prevention</span>
                  {petData.onFleaTickPrevention && <CheckCircle2 className="w-4 h-4 text-primary-dark" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="text-accent-red w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-dark">Screenings</h2>
              <p className="text-dark-muted mt-2">Breed-specific health evaluations.</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs text-dark-muted">Based on breed: <strong>{petData.breed}</strong></p>
              <div className="grid grid-cols-1 gap-2">
                {[
                  'OFA/PennHIP Hip Evaluation',
                  'OFA Elbow Evaluation',
                  'CERF Eye Exam',
                  'Echocardiogram (Heart Echo)',
                  'DNA/Genetic Testing'
                ].map(screening => (
                  <button
                    key={screening}
                    onClick={() => {
                      const current = [...petData.completedScreenings];
                      const exists = current.find(s => s.screeningType === screening);
                      if (exists) {
                        setPetData({ ...petData, completedScreenings: current.filter(s => s.screeningType !== screening) });
                      } else {
                        setPetData({ ...petData, completedScreenings: [...current, { screeningType: screening }] });
                      }
                    }}
                    className={`p-3 rounded-lg border-bd text-left text-xs transition-all ${
                      petData.completedScreenings.find(s => s.screeningType === screening)
                        ? 'border-accent-red bg-red-50 text-red-700'
                        : 'border-bd text-dark-muted'
                    }`}
                  >
                    {screening}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 9 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="text-accent-green w-12 h-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark">All Set!</h2>
              <p className="text-dark-muted mt-2">
                {petData.name}'s profile is ready. Initial clinical findings:
              </p>
            </div>
            <div className="bg-surface-alt p-6 rounded-2xl text-left space-y-4">
              <div className="flex justify-between items-center pb-2 border border-bd">
                <span className="text-dark-muted flex items-center gap-2"><Activity className="w-4 h-4" /> Daily Target:</span>
                <span className="font-bold text-primary text-lg">{Math.round(getResults().mer)} kcal</span>
              </div>
              <div className="flex justify-between items-center pb-2 border border-bd">
                <span className="text-dark-muted">Life Stage:</span>
                <span className="font-bold text-dark uppercase text-xs">{getResults().lifeStage}</span>
              </div>
              <div className="space-y-2">
                <span className="text-dark-muted text-xs font-bold uppercase tracking-wider">Highly Recommended</span>
                <div className="space-y-1">
                  {getResults().alerts.length === 0 ? (
                    <div className="text-accent-green text-sm font-medium">✓ No immediate risks detected</div>
                  ) : (
                    getResults().alerts.map((alert, i) => (
                      <div key={i} className={`text-xs p-3 rounded-lg border-bd ${
                        alert.severity === 4 ? 'bg-accent-red text-white border-red-700' :
                        alert.severity === 3 ? 'bg-red-50 text-red-700 border-red-100' : 
                        'bg-orange-50 text-orange-700 border-orange-100'
                      }`}>
                        <strong>{alert.severity >= 3 ? `Very Important — ${alert.label}` : alert.label}:</strong> {alert.message}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-10 flex gap-4">
          {onCancel && (
            <button
              onClick={onCancel}
              className="px-4 py-3 rounded-xl border border-bd text-dark-muted font-medium hover:bg-surface-alt transition-all text-sm"
            >
              Cancel
            </button>
          )}
          {step > 1 && step < totalSteps && (
            <button
              onClick={prevStep}
              className="flex-1 px-6 py-3 rounded-xl border border-bd text-dark-muted font-medium hover:bg-surface-alt transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}
          {step < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={step === 2 && (!petData.name || (!petData.breed && (!petData.breeds || petData.breeds.length === 0))) || (step === 3 && !isStep2Valid())}
              className="flex-[2] bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleFinalSubmit}
              className="w-full bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-dark transition-all shadow-lg"
            >
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default OnboardingForm;
