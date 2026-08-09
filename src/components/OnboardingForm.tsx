import React, { useState } from 'react';
import { 
  PawPrint, Scale, Calendar, ChevronRight, ChevronLeft, 
  CheckCircle2, Info, Stethoscope, Pill, Activity, 
  ShieldCheck, Search, Syringe, HeartPulse
} from 'lucide-react';
import { calculateMER, Species } from '../engine/metabolic_engine';
import { getLifeStage } from '../engine/milestone_engine';
import { evaluateAlerts } from '../engine/alert_engine';
import type { PetProfile, Medication, VaccinationRecord, ScreeningRecord } from '../types/pet';
import { BREEDS } from '../data/breeds';

interface OnboardingFormProps {
  onComplete: (data: PetProfile) => void;
}

const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [petData, setPetData] = useState<PetProfile>({
    name: '',
    species: Species.CANINE,
    breed: '',
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
    currentDietType: 'dry'
  });

  const [breedSearch, setSearch] = useState('');

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const totalSteps = 9;

  const filteredBreeds = BREEDS
    .filter(b => b.species === petData.species)
    .filter(b => b.name.toLowerCase().includes(breedSearch.toLowerCase()))
    .map(b => b.name);

  const getResults = () => {
    const dobDate = new Date(petData.dob);
    const weightNum = parseFloat(petData.weight) || 0;
    
    // Metabolic calc
    const mer = calculateMER({
      species: petData.species,
      weightKg: weightNum,
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
      weightKg: weightNum
    });

    // Alerts
    const selectedBreed = BREEDS.find(b => b.name === petData.breed) || {
      name: petData.breed,
      species: petData.species,
      highRiskConditions: []
    };

    const alerts = evaluateAlerts({
      id: 'temp',
      name: petData.name,
      species: petData.species,
      dateOfBirth: dobDate,
      breed: selectedBreed as any,
      healthLogs: [{ date: new Date(), weightKg: weightNum, bcsScore: petData.bcs }],
      clinicalEvents: [],
      medicalHistory: {
        ...petData,
        activityLevel: petData.activityLevel,
        bcsScore: petData.bcs,
        currentDietType: petData.currentDietType || 'dry',
      }
    });

    return { mer, lifeStage, alerts };
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

  const felineConditions = [
    'Chronic Kidney Disease (CKD)', 'Hyperthyroidism', 'Diabetes Mellitus', 
    'FLUTD/FIC', 'Asthma/Respiratory Disease', 'Pancreatitis', 'Inflammatory Bowel Disease', 
    'Heart Disease (HCM)', 'Dental Disease/Gingivitis', 'Arthritis', 'FIV/FeLV Positive', 'Cancer'
  ];

  return (
    <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="h-2 bg-slate-100 flex">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i + 1}
            className={`flex-1 transition-all duration-500 ${
              i + 1 <= step ? 'bg-indigo-600' : ''
            }`}
          />
        ))}
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PawPrint className="text-indigo-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Welcome to PawPath</h2>
              <p className="text-slate-500 mt-2">Let's start by getting to know your pet.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pet's Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none"
                  placeholder="Enter name..."
                  value={petData.name}
                  onChange={(e) => setPetData({ ...petData, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPetData({ ...petData, species: Species.CANINE })}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    petData.species === Species.CANINE ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <span className="text-2xl">🐕</span>
                  <span className="font-medium">Dog</span>
                </button>
                <button
                  onClick={() => setPetData({ ...petData, species: Species.FELINE })}
                  className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                    petData.species === Species.FELINE ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <span className="text-2xl">🐈</span>
                  <span className="font-medium">Cat</span>
                </button>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-1">Select Breed</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3.5 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none"
                    placeholder="Search breeds..."
                    value={breedSearch}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="mt-2 space-y-1 max-h-40 overflow-y-auto custom-scrollbar border rounded-lg p-2">
                  {filteredBreeds.map((breed) => (
                    <button
                      key={breed}
                      onClick={() => {
                        setPetData({ ...petData, breed });
                        setSearch(breed);
                      }}
                      className={`w-full text-left px-3 py-2 rounded transition-all text-sm ${
                        petData.breed === breed ? 'bg-indigo-600 text-white font-medium' : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {breed}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">Pet Profile</h2>
              <p className="text-slate-500 mt-2">Additional details for medical accuracy.</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPetData({ ...petData, gender: 'male' })}
                      className={`flex-1 p-3 rounded-lg border transition-all ${petData.gender === 'male' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'}`}
                    >Male</button>
                    <button
                      onClick={() => setPetData({ ...petData, gender: 'female' })}
                      className={`flex-1 p-3 rounded-lg border transition-all ${petData.gender === 'female' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'}`}
                    >Female</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Neutered / Spayed</label>
                  <button
                    onClick={() => setPetData({ ...petData, isNeutered: !petData.isNeutered })}
                    className={`w-full p-3 rounded-lg border transition-all ${petData.isNeutered ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 text-slate-600'}`}
                  >
                    {petData.isNeutered ? 'Yes' : 'No'}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none"
                    value={petData.dob}
                    onChange={(e) => setPetData({ ...petData, dob: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Weight (kg)</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none"
                      placeholder="0.0"
                      value={petData.weight}
                      onChange={(e) => setPetData({ ...petData, weight: e.target.value })}
                    />
                    <Scale className="absolute right-4 top-3.5 text-slate-400 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">Lifestyle & Diet</h2>
              <p className="text-slate-500 mt-2">How does {petData.name} spend their day?</p>
            </div>
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">Typical Daily Activity</label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'low', label: 'Low', desc: 'Mostly indoor / leash walks' },
                  { id: 'normal', label: 'Moderate', desc: 'Regular walks, some play time' },
                  { id: 'high', label: 'High', desc: 'Active breed, vigorous daily exercise' },
                  { id: 'working', label: 'Working', desc: 'Service / performance / herding (>1hr intense)' }
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setPetData({ ...petData, activityLevel: level.id as any })}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      petData.activityLevel === level.id ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <p className="font-bold text-slate-800 text-sm">{level.label}</p>
                    <p className="text-xs text-slate-500">{level.desc}</p>
                  </button>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Diet Type</label>
                <select 
                  className="w-full px-4 py-2 rounded-lg border border-slate-200"
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
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-800">Body Condition</h2>
              <p className="text-slate-500 mt-2">Assess your pet's current shape (1-9).</p>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between items-end h-24 gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((score) => (
                  <div
                    key={score}
                    onClick={() => setPetData({ ...petData, bcs: score })}
                    className={`flex-1 cursor-pointer rounded-t-lg transition-all ${
                      petData.bcs === score ? 'bg-indigo-600' : 'bg-indigo-100 hover:bg-indigo-200'
                    }`}
                    style={{ height: `${20 + score * 8}%` }}
                  />
                ))}
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <span className="text-4xl font-bold text-indigo-600">{petData.bcs}</span>
                <p className="font-bold text-slate-700 mt-1 uppercase tracking-wider">
                  {petData.bcs <= 3 ? 'Underweight' : petData.bcs <= 5 ? 'Ideal' : petData.bcs <= 7 ? 'Overweight' : 'Obese'}
                </p>
                <div className="mt-4 flex gap-3 text-left">
                  <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 italic">
                    {petData.bcs <= 3 && 'Ribs, spine, and pelvic bones easily visible. No palpable fat.'}
                    {(petData.bcs === 4 || petData.bcs === 5) && 'Ribs palpable with slight fat cover, waist visible from above.'}
                    {(petData.bcs === 6 || petData.bcs === 7) && 'Heavy fat cover over ribs. Waist absent or barely visible.'}
                    {petData.bcs >= 8 && 'Massive fat deposits over thorax, spine, and tail base. Abdominal distension.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="text-purple-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Medical History</h2>
              <p className="text-slate-500 mt-2">Diagnosed conditions and surgeries.</p>
            </div>
            
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Chronic Conditions (Check all that apply)</label>
                <div className="grid grid-cols-2 gap-2">
                  {(petData.species === Species.CANINE ? canineConditions : felineConditions).map(condition => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`text-left px-3 py-2 rounded-lg border text-xs transition-all ${
                        petData.chronicConditions.includes(condition)
                          ? 'border-purple-600 bg-purple-50 text-purple-700 font-medium'
                          : 'border-slate-100 text-slate-600'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Past Surgeries / Illnesses</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm h-20 outline-none focus:ring-2 focus:ring-purple-600"
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
              <h2 className="text-2xl font-bold text-slate-800">Meds & Allergies</h2>
              <p className="text-slate-500 mt-2">Current medications and supplements.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Are they on any of these medications?</label>
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
                      className={`text-left px-3 py-2 rounded-lg border text-xs transition-all ${
                        petData[med.id as keyof PetProfile]
                          ? 'border-orange-600 bg-orange-50 text-orange-700 font-medium'
                          : 'border-slate-100 text-slate-600'
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
                <label className="block text-sm font-medium text-slate-700 mb-1">Other Supplements / Allergies</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm h-20 outline-none focus:ring-2 focus:ring-orange-600"
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
                <ShieldCheck className="text-blue-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Preventive Care</h2>
              <p className="text-slate-500 mt-2">Vaccines and parasite prevention.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Syringe className="text-blue-600 w-5 h-5" />
                  <span className="text-sm font-medium">Core Vaccines Up-to-Date?</span>
                </div>
                <button
                  onClick={() => setPetData({ ...petData, hasRecentBloodwork: !petData.hasRecentBloodwork })}
                  className={`w-12 h-6 rounded-full relative transition-all ${petData.hasRecentBloodwork ? 'bg-blue-600' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${petData.hasRecentBloodwork ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setPetData({ ...petData, onHeartwormPrevention: !petData.onHeartwormPrevention })}
                  className={`p-3 rounded-lg border text-left text-sm flex justify-between items-center ${petData.onHeartwormPrevention ? 'border-blue-600 bg-blue-50' : 'border-slate-100'}`}
                >
                  <span>Heartworm Prevention</span>
                  {petData.onHeartwormPrevention && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </button>
                <button
                  onClick={() => setPetData({ ...petData, onFleaTickPrevention: !petData.onFleaTickPrevention })}
                  className={`p-3 rounded-lg border text-left text-sm flex justify-between items-center ${petData.onFleaTickPrevention ? 'border-blue-600 bg-blue-50' : 'border-slate-100'}`}
                >
                  <span>Flea & Tick Prevention</span>
                  {petData.onFleaTickPrevention && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 8 && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartPulse className="text-red-600 w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Screenings</h2>
              <p className="text-slate-500 mt-2">Breed-specific health evaluations.</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs text-slate-500">Based on breed: <strong>{petData.breed}</strong></p>
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
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${
                      petData.completedScreenings.find(s => s.screeningType === screening)
                        ? 'border-red-600 bg-red-50 text-red-700'
                        : 'border-slate-100 text-slate-600'
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
              <CheckCircle2 className="text-green-600 w-12 h-12" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">All Set!</h2>
              <p className="text-slate-500 mt-2">
                {petData.name}'s profile is ready. Initial clinical findings:
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl text-left space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 flex items-center gap-2"><Activity className="w-4 h-4" /> Daily Target:</span>
                <span className="font-bold text-indigo-600 text-lg">{Math.round(getResults().mer)} kcal</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500">Life Stage:</span>
                <span className="font-bold text-slate-800 uppercase text-xs">{getResults().lifeStage}</span>
              </div>
              <div className="space-y-2">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Clinical Alerts</span>
                <div className="space-y-1">
                  {getResults().alerts.length === 0 ? (
                    <div className="text-green-600 text-sm font-medium">✓ No immediate risks detected</div>
                  ) : (
                    getResults().alerts.map((alert, i) => (
                      <div key={i} className={`text-xs p-3 rounded-lg border ${
                        alert.severity === 4 ? 'bg-red-600 text-white border-red-700' :
                        alert.severity === 3 ? 'bg-red-50 text-red-700 border-red-100' : 
                        'bg-orange-50 text-orange-700 border-orange-100'
                      }`}>
                        <strong>{alert.label}:</strong> {alert.message}
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
          {step > 1 && step < totalSteps && (
            <button
              onClick={prevStep}
              className="flex-1 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" /> Back
            </button>
          )}
          {step < totalSteps ? (
            <button
              onClick={nextStep}
              disabled={(step === 1 && (!petData.name || !petData.breed)) || (step === 2 && (!petData.dob || !petData.weight))}
              className="flex-[2] bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => onComplete(petData)}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-all shadow-lg"
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
