import React, { useEffect, useState, useRef } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  Calendar,
  Activity,
  ChevronRight,
  ChevronLeft,
  Plus,
  ArrowUp,
  ArrowDown,
  Minus,
  X,
  Stethoscope,
  Pill,
  FileText,
  HeartPulse,
  Syringe,
  ClipboardList,
  PawPrint,
  Edit3,
  Flame,
  Snowflake,
  Dog,
  CheckCircle2,
  EyeOff,
  Clock
} from 'lucide-react';
import { calculateMER } from '../engine/metabolic_engine';
import { getLifeStage, checkVaccinationStatus, generateMilestones } from '../engine/milestone_engine';
import type { Milestone } from '../engine/milestone_engine';
import { evaluateAlerts } from '../engine/alert_engine';
import { getExerciseRecommendation, getIntensityLabel, getIntensityColor } from '../engine/exercise_engine';
const UserButton = () => null;
const SUPPORT_EMAIL = 'contactpawpath@gmail.com';

/** Translate persisted clinical stage keys into owner-friendly labels. */
const stageDisplay = (stage: string): string =>
  stage === 'End-of-Life' ? 'Advanced Senior Care' : stage;
import type { PetProfile, WeightEntry, MedicalHistoryEntry } from '../types/pet';
import { formatBreeds } from '../types/pet';
import { BREEDS } from '../data/breeds';
import PetNewsletter from './PetNewsletter';
import { getBreedNewsletter, hasBreedNewsletter } from '../data/breed_newsletter_data';
import { getWeightUnit, formatWeightWithUnit, formatWeight, kgToLbs, lbsToKg } from '../lib/weightUnits';

interface DashboardProps {
  pet: PetProfile;
  onBack?: () => void;
  onEdit?: () => void;
  /** Notify the parent when a dashboard action persists a changed pet profile. */
  onPetUpdate?: (pet: PetProfile) => boolean;
  weightUnit?: 'kg' | 'lbs';
}

const Dashboard: React.FC<DashboardProps> = ({ pet, onBack, onEdit, onPetUpdate, weightUnit: propUnit }) => {
  const [showLogWeight, setShowLogWeight] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [logWeightDate, setLogWeightDate] = useState(new Date().toISOString().split('T')[0]);
  const [logWeightValue, setLogWeightValue] = useState('');
  const [logWeightNotes, setLogWeightNotes] = useState('');

  // Use the prop or fallback to localStorage
  const unit = propUnit || getWeightUnit();

  // Vet visit form state
  const [showVetVisit, setShowVetVisit] = useState(false);
  const [vetDate, setVetDate] = useState(new Date().toISOString().split('T')[0]);
  const [vetNotes, setVetNotes] = useState('');
  const [vetConditions, setVetConditions] = useState<string[]>([]);
  const [vetMedications, setVetMedications] = useState({
    onNsaids: false, onCorticosteroids: false, onThyroidMedication: false,
    onInsulin: false, onAntiSeizure: false, onHeartMedication: false
  });
  const [vetScreenings, setVetScreenings] = useState<string[]>([]);
  const [vetWeight, setVetWeight] = useState('');

  // Add Note form state
  const [showAddNote, setShowAddNote] = useState(false);
  const [noteDate, setNoteDate] = useState(new Date().toISOString().split('T')[0]);
  const [noteText, setNoteText] = useState('');

  // Medical history display state
  const [showAllMedical, setShowAllMedical] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Photo upload ref
  const photoInputRef = useRef<HTMLInputElement>(null);

  // Alert management state
  const [alertActionFeedback, setAlertActionFeedback] = useState<string | null>(null);
  const [postponeAlert, setPostponeAlert] = useState<{ condition: string; index: number; isVax: boolean } | null>(null);
  const [postponeStage, setPostponeStage] = useState('');

  // MER info popover state
  const [showMERInfo, setShowMERInfo] = useState(false);

  // Body Condition info popover state
  const [showBodyConditionInfo, setShowBodyConditionInfo] = useState(false);

  // Life Stage info popover state
  const [showLifeStageInfo, setShowLifeStageInfo] = useState(false);

  // Local alert state — updates immediately on action, synced with pet prop
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>(pet.dismissedAlerts || []);
  const [hiddenAlerts, setHiddenAlerts] = useState<{ condition: string; hiddenAtLifeStage: string }[]>(pet.hiddenAlerts || []);
  const [postponedAlerts, setPostponedAlerts] = useState<{ condition: string; postponeUntilStage: string }[]>(pet.postponedAlerts || []);

  // App owns local-first persistence so every dashboard action updates the
  // homepage collection and can report a storage failure instead of losing data.
  const persistPetUpdate = (updatedPet: PetProfile) => {
    if (!updatedPet.id) return;
    onPetUpdate?.(updatedPet);
  };

  // Alert controls are local UI state, but their source of truth is the pet prop.
  // Reset them when the parent selects another pet or receives a saved update.
  useEffect(() => {
    setDismissedAlerts(pet.dismissedAlerts || []);
    setHiddenAlerts(pet.hiddenAlerts || []);
    setPostponedAlerts(pet.postponedAlerts || []);
  }, [pet.id, pet.dismissedAlerts, pet.hiddenAlerts, pet.postponedAlerts]);

  const isAlertDismissed = (condition?: string) => {
    if (!condition) return false;
    return dismissedAlerts.includes(condition);
  };

  const isAlertHidden = (condition?: string) => {
    if (!condition) return false;
    const found = hiddenAlerts.find(h => h.condition === condition);
    if (!found) return false;
    return found.hiddenAtLifeStage === lifeStage;
  };

  const isAlertPostponed = (condition?: string) => {
    if (!condition) return false;
    const found = postponedAlerts.find(p => p.condition === condition);
    if (!found) return false;
    // Check if current life stage is still before the postpone stage
    const stageOrder = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
    const currentIdx = stageOrder.indexOf(lifeStage);
    const postponeIdx = stageOrder.indexOf(found.postponeUntilStage);
    return currentIdx < postponeIdx;
  };

  const shouldShowAlert = (condition?: string): boolean => {
    if (!condition) return true; // alerts without conditions always show
    return !isAlertDismissed(condition) && !isAlertHidden(condition) && !isAlertPostponed(condition);
  };

  // Alert action handlers
  const addressAlert = (condition: string, label: string, message: string) => {
    const today = new Date().toISOString().split('T')[0];
    
    // Create a medical history entry for this alert being addressed
    const medEntry: MedicalHistoryEntry = {
      date: today,
      type: 'vet_visit',
      description: `Addressed: ${label}`,
      details: message || undefined
    };
    
    // Also add the condition to chronic conditions if it's a medical condition
    const updatedChronicConditions = condition.startsWith('vax-')
      ? pet.chronicConditions
      : [...new Set([...pet.chronicConditions, label])];
    
    // Dismiss the alert (same as "Remove" action)
    const updatedDismissedList = [...dismissedAlerts, condition];
    setDismissedAlerts(updatedDismissedList);
    
    // Persist everything
    const updatedPet = {
      ...pet,
      chronicConditions: updatedChronicConditions,
      dismissedAlerts: updatedDismissedList,
      medicalHistory: [...(pet.medicalHistory || []), medEntry]
    };
    persistPetUpdate(updatedPet);
    setRefreshKey(k => k + 1);
    showFeedback(`Addressed: ${label} — logged to medical records`);
  };

  const showFeedback = (msg: string) => {
    setAlertActionFeedback(msg);
    setTimeout(() => setAlertActionFeedback(null), 2000);
  };

  const dismissAlert = (condition: string) => {
    const updatedList = [...dismissedAlerts, condition];
    setDismissedAlerts(updatedList);
    const updated = { ...pet, dismissedAlerts: updatedList };
    persistPetUpdate(updated);
    showFeedback('Alert dismissed permanently');
  };

  const hideAlert = (condition: string) => {
    const updatedList = [...hiddenAlerts, { condition, hiddenAtLifeStage: lifeStage }];
    setHiddenAlerts(updatedList);
    const updated = { ...pet, hiddenAlerts: updatedList };
    persistPetUpdate(updated);
    showFeedback('Alert hidden for this life stage');
  };

  const postponeAlertAction = (condition: string) => {
    const updatedList = [...postponedAlerts, { condition, postponeUntilStage: postponeStage }];
    setPostponedAlerts(updatedList);
    const updated = { ...pet, postponedAlerts: updatedList };
    persistPetUpdate(updated);
    setPostponeAlert(null);
    showFeedback(`Alert postponed until ${postponeStage} stage`);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const photoUrl = ev.target?.result as string;
        const updatedPet = { ...pet, photoUrl };
        persistPetUpdate(updatedPet);
        setRefreshKey(k => k + 1);
      };
      reader.readAsDataURL(file);
    }
  };

  const weightNum = parseFloat(pet.weight) || 0;
  const dobDate = new Date(pet.dob);

  // Sort weight history by date descending (newest first)
  const sortedWeightHistory: WeightEntry[] = [...(pet.weightHistory || [])]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Current weight from most recent entry
  const currentWeightEntry = sortedWeightHistory[0] || null;
  const currentWeight = currentWeightEntry?.weightKg || weightNum;

  // Previous weight for trend
  const previousWeightEntry = sortedWeightHistory[1] || null;
  const weightChange = previousWeightEntry
    ? currentWeight - previousWeightEntry.weightKg
    : 0;

  // Sort medical history by date descending (newest first)
  const sortedMedicalHistory: MedicalHistoryEntry[] = [...(pet.medicalHistory || [])]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const displayedMedicalEntries = showAllMedical ? sortedMedicalHistory : sortedMedicalHistory.slice(0, 5);

  // Helper to add a medical history entry and persist
  const addMedicalEntry = (entry: MedicalHistoryEntry) => {
    const updatedHistory = [...(pet.medicalHistory || []), entry];
    const updatedPet = { ...pet, medicalHistory: updatedHistory };
    persistPetUpdate(updatedPet);
  };

  const handleLogWeight = () => {
    const w = parseFloat(logWeightValue);
    if (isNaN(w) || w <= 0) return;

    // Convert from selected unit to kg for storage
    const weightKg = unit === 'lbs' ? lbsToKg(w) : w;

    const newEntry: WeightEntry = {
      date: logWeightDate,
      weightKg: weightKg,
      notes: logWeightNotes || undefined
    };

    const updatedWeightHistory = [...(pet.weightHistory || []), newEntry];
    const medEntry: MedicalHistoryEntry = {
      date: logWeightDate,
      type: 'weight',
      description: `Weight logged: ${weightKg.toFixed(1)} kg`,
      details: logWeightNotes || undefined
    };
    const updatedMedicalHistory = [...(pet.medicalHistory || []), medEntry];
    const updatedPet = { ...pet, weightHistory: updatedWeightHistory, medicalHistory: updatedMedicalHistory, weight: weightKg.toString() };

    // Persist to localStorage and notify App so other views update immediately.
    persistPetUpdate(updatedPet);

    // Close form
    setShowLogWeight(false);
    setLogWeightDate(new Date().toISOString().split('T')[0]);
    setLogWeightValue('');
    setLogWeightNotes('');

    // Force re-render
    setRefreshKey(k => k + 1);
  };

  const handleVetVisit = () => {
    const today = new Date().toISOString().split('T')[0];
    
    // Build conditions description
    const conditionsDesc = vetConditions.length > 0
      ? `Conditions: ${vetConditions.join(', ')}`
      : '';

    // Build medication description
    const medChanges = Object.entries(vetMedications)
      .filter(([, val]) => val)
      .map(([key]) => key.replace('on', '').replace(/([A-Z])/g, ' $1').trim());
    const medDesc = medChanges.length > 0
      ? `Medication changes: ${medChanges.join(', ')}`
      : '';

    // Build screening description
    const screeningDesc = vetScreenings.length > 0
      ? `Screenings: ${vetScreenings.join(', ')}`
      : '';

    const details = [conditionsDesc, medDesc, screeningDesc, vetNotes]
      .filter(Boolean).join(' | ');

    const medEntry: MedicalHistoryEntry = {
      date: vetDate,
      type: 'vet_visit',
      description: 'Vet visit recorded',
      details: details || undefined
    };

    // Also update pet conditions and medications if provided
    const updatedPet = {
      ...pet,
      chronicConditions: vetConditions.length > 0
        ? [...new Set([...pet.chronicConditions, ...vetConditions])]
        : pet.chronicConditions,
      onNsaids: vetMedications.onNsaids || pet.onNsaids,
      onCorticosteroids: vetMedications.onCorticosteroids || pet.onCorticosteroids,
      onThyroidMedication: vetMedications.onThyroidMedication || pet.onThyroidMedication,
      onInsulin: vetMedications.onInsulin || pet.onInsulin,
      onAntiSeizure: vetMedications.onAntiSeizure || pet.onAntiSeizure,
      onHeartMedication: vetMedications.onHeartMedication || pet.onHeartMedication,
      medicalHistory: [...(pet.medicalHistory || []), medEntry]
    };

    // Handle weight if provided
    if (vetWeight) {
      const w = parseFloat(vetWeight);
      if (!isNaN(w) && w > 0) {
        updatedPet.weightHistory = [...(updatedPet.weightHistory || []), {
          date: vetDate,
          weightKg: w,
          notes: 'Vet visit'
        }];
        updatedPet.weight = vetWeight;
      }
    }

    persistPetUpdate(updatedPet);

    // Reset and reload
    setShowVetVisit(false);
    setVetDate(today);
    setVetNotes('');
    setVetConditions([]);
    setVetMedications({ onNsaids: false, onCorticosteroids: false, onThyroidMedication: false, onInsulin: false, onAntiSeizure: false, onHeartMedication: false });
    setVetScreenings([]);
    setVetWeight('');
    setRefreshKey(k => k + 1);
  };

  const handleAddNote = () => {
    if (!noteText.trim()) return;

    const medEntry: MedicalHistoryEntry = {
      date: noteDate,
      type: 'note',
      description: noteText.trim(),
      details: undefined
    };

    const updatedMedicalHistory = [...(pet.medicalHistory || []), medEntry];
    const updatedPet = { ...pet, medicalHistory: updatedMedicalHistory };
    persistPetUpdate(updatedPet);

    setShowAddNote(false);
    setNoteDate(new Date().toISOString().split('T')[0]);
    setNoteText('');
    setRefreshKey(k => k + 1);
  };

  const toggleCondition = (condition: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    const current = [...list];
    const index = current.indexOf(condition);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(condition);
    }
    setter(current);
  };

  const toggleVetMedication = (key: keyof typeof vetMedications) => {
    setVetMedications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Real calculations
  const mer = calculateMER({
    species: pet.species,
    weightKg: currentWeight,
    isNeutered: pet.isNeutered,
    activityLevel: pet.activityLevel,
    workingDogMultiplier: pet.workingDogMultiplier,
    lifeStage: 'adult',
    bcsScore: pet.bcs
  });

  const lifeStage = getLifeStage({
    species: pet.species,
    dateOfBirth: dobDate,
    weightKg: currentWeight
  });

  // Get age range for life stage
  const getLifeStageAgeRange = (stage: string): string => {
    const ageYears = parseFloat(calculateAgeYears(dobDate));
    if (pet.species === 'canine') {
      const ranges: Record<string, string> = {
        'Puppy': '(0-12 months)',
        'Junior': '(1-2 years)',
        'Adult': '(2-6 years)',
        'Mature Adult': '(6-8 years)',
        'Senior': '(8+ years)',
        'End-of-Life': '(advanced senior care)'
      };
      return ranges[stage] || '';
    }
  };

  // Multi-breed support
  const primaryBreedName = 
    pet.breeds?.find(b => b.isPrimary)?.breed || 
    pet.breeds?.[0]?.breed || 
    pet.breed || '';

  const selectedBreed = BREEDS.find(b => b.name === primaryBreedName) || {
    name: primaryBreedName,
    species: pet.species,
    highRiskConditions: []
  };

  const allBreedNames = pet.breeds && pet.breeds.length > 0
    ? pet.breeds.map(bs => bs.breed)
    : (pet.breed ? [pet.breed] : []);

  const allBreedObjs = allBreedNames
    .map(name => BREEDS.find(b => b.name === name))
    .filter((b): b is NonNullable<typeof b> => b !== undefined);

  const activeAlerts = evaluateAlerts({
    id: 'temp',
    name: pet.name,
    species: pet.species,
    dateOfBirth: dobDate,
    breed: selectedBreed as any,
    breeds: allBreedObjs.length > 0 ? allBreedObjs as any : undefined,
    healthLogs: [{ date: new Date(), weightKg: currentWeight, bcsScore: pet.bcs }],
    clinicalEvents: []
  });

  const vaxAlerts = checkVaccinationStatus(pet.species, []);

  // Filter alerts based on dismissed/hidden/postponed status
  const filteredAlerts = activeAlerts.filter(a => shouldShowAlert(a.condition));
  const filteredVaxAlerts = vaxAlerts.filter((_, i) => shouldShowAlert(`vax-${i}`));

  const calculateAgeYears = (dob: Date) => {
    const diff = Date.now() - dob.getTime();
    return (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  };

  // Dynamic milestone generation
  const milestoneStatus = pet.milestoneStatus || {};
  const breedHighRisk = selectedBreed.highRiskConditions || selectedBreed.alert_rules?.predispositions || [];
  const allMilestones = generateMilestones({
    species: pet.species,
    dateOfBirth: dobDate,
    weightKg: currentWeight,
    breedNames: allBreedNames.length > 0 ? allBreedNames : [pet.breed],
    highRiskConditions: breedHighRisk.map((r: any) => ({
      condition: r.condition,
      onsetAgeMonths: r.onsetAgeMonths,
      screeningRecommendation: r.screeningRecommendation || r.screening || '',
    })),
    existingVaccinations: [],
    existingScreenings: [],
  });

  // Filter milestones based on status
  const visibleMilestones = allMilestones.filter(m => {
    const status = milestoneStatus[m.id];
    return !status || status.status !== 'dismissed';
  });

  const upcomingMilestones = visibleMilestones.filter(m => {
    const status = milestoneStatus[m.id];
    return !status || status.status !== 'completed';
  });

  const completedMilestones = visibleMilestones.filter(m => milestoneStatus[m.id]?.status === 'completed');

  // Milestone action state
  const [updateMilestone, setUpdateMilestone] = useState<Milestone | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState('');

  const handleMilestoneAction = (milestoneId: string, action: 'completed' | 'acknowledged' | 'dismissed', reschedule?: string) => {
    const today = new Date().toISOString().split('T')[0];
    const updated = {
      ...pet,
      milestoneStatus: {
        ...milestoneStatus,
        [milestoneId]: {
          status: action,
          completedDate: action === 'completed' ? today : undefined,
          rescheduledDate: reschedule || undefined,
        },
      },
    };
    persistPetUpdate(updated);
    setUpdateMilestone(null);
    setRefreshKey(k => k + 1);
    showFeedback(action === 'completed' ? 'Milestone completed!' : action === 'acknowledged' ? 'Milestone acknowledged' : 'Milestone dismissed');
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const displayedEntries = showAllHistory ? sortedWeightHistory : sortedWeightHistory.slice(0, 5);

  // Get icon for medical history entry type
  const getMedicalIcon = (type: string) => {
    switch (type) {
      case 'weight': return <Scale className="w-4 h-4 text-primary" />;
      case 'vet_visit': return <Stethoscope className="w-4 h-4 text-primary-dark" />;
      case 'profile_edit': return <FileText className="w-4 h-4 text-dark-muted" />;
      case 'medication': return <Pill className="w-4 h-4 text-orange-600" />;
      case 'screening': return <Syringe className="w-4 h-4 text-accent-red" />;
      case 'condition': return <HeartPulse className="w-4 h-4 text-primary" />;
      case 'note': return <ClipboardList className="w-4 h-4 text-teal-600" />;
      default: return <FileText className="w-4 h-4 text-dark-muted" />;
    }
  };

  // Weight trend indicator component
  const WeightTrend = ({ change, unit: trendUnit }: { change: number; unit: string }) => {
    const displayChange = trendUnit === 'lbs' ? kgToLbs(Math.abs(change)) : change;
    const displayChangeFormatted = displayChange.toFixed(1);
    if (Math.abs(change) < 0.01) {
      return (
        <div className="flex items-center gap-1 text-dark-muted">
          <Minus className="w-3 h-3" />
          <span className="text-xs">Stable</span>
        </div>
      );
    }
    if (change > 0) {
      return (
        <div className="flex items-center gap-1 text-orange-600">
          <ArrowUp className="w-3 h-3" />
          <span className="text-xs font-medium">+{displayChangeFormatted} {trendUnit}</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 text-accent-green">
        <ArrowDown className="w-3 h-3" />
        <span className="text-xs font-medium">{displayChangeFormatted} {trendUnit}</span>
      </div>
    );
  };

  // Common conditions list for vet visit form
  const canineConditions = [
    'Hip Dysplasia', 'Elbow Dysplasia', 'Patellar Luxation', 'IVDD', 'Epilepsy/Seizures', 
    'Heart Disease', 'Diabetes Mellitus', 'Cushing\'s Disease', 'Hypothyroidism', 
    'Addison\'s Disease', 'Pancreatitis', 'Kidney Disease (CKD)', 'Bladder Stones', 
    'Liver Disease/Shunt', 'Allergies/Skin Disease', 'Cancer'
  ];

  const conditions = canineConditions;

  return (
    <div className="min-h-screen bg-surface-alt pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-primary-dark to-primary pt-8 pb-6 px-6 rounded-b-[40px] relative overflow-hidden">
        {/* Decorative paw prints */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <PawPrint className="absolute top-12 right-16 w-12 h-12 text-white" />
          <PawPrint className="absolute bottom-8 left-12 w-8 h-8 text-white" />
          <PawPrint className="absolute top-20 left-1/3 w-6 h-6 text-white" />
        </div>
        <div className="max-w-4xl mx-auto">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="text-white/80 hover:text-white flex items-center gap-1 mb-4 text-sm font-medium transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Home
            </button>
          )}
          <div className="flex justify-between items-center text-white">
            <div className="flex items-center gap-4">
              <label className="cursor-pointer group relative shrink-0">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  ref={photoInputRef}
                  onChange={handlePhotoChange}
                  className="hidden"
                />
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl overflow-hidden">
                  {pet.photoUrl ? (
                    <img src={pet.photoUrl} alt={pet.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl">{'🐕'}</span>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 rounded-2xl transition-all flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </label>
              <div>
                <h1 className="text-2xl font-bold">{pet.name}</h1>
                <p className="opacity-80">{formatBreeds(pet.breeds) || pet.breed} • {formatWeightWithUnit(currentWeight, unit)}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-xs opacity-60 capitalize">{stageDisplay(lifeStage)} · BCS {pet.bcs}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={onEdit} className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all flex items-center gap-1.5">
                <Edit3 className="w-5 h-5" /><span className="text-xs font-medium hidden sm:inline">Edit Profile</span>
              </button>
              <div className="bg-white/20 rounded-xl p-1.5 hover:bg-white/30 transition-all">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            type="button"
            onClick={() => setShowMERInfo(true)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-bd hover:border-primary hover:shadow-md transition-all text-left w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 text-primary mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Daily Calories</span>
            </div>
            <p className="text-xl font-bold text-dark">{Math.round(mer)} <span className="text-sm font-normal text-dark-muted">kcal</span></p>
          </button>
          <button
            type="button"
            onClick={() => setShowBodyConditionInfo(true)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-bd hover:border-blue-200 hover:shadow-md transition-all text-left w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 text-primary-dark mb-1">
              <Scale className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Body Condition</span>
            </div>
            <p className="text-xl font-bold text-dark">{pet.bcs} <span className="text-sm font-normal text-dark-muted">/ 9</span></p>
          </button>
          <button
            type="button"
            onClick={() => setShowLifeStageInfo(true)}
            className="bg-white p-4 rounded-2xl shadow-sm border border-bd hover:border-green-200 hover:shadow-md transition-all text-left w-full cursor-pointer"
          >
            <div className="flex items-center gap-2 text-accent-green mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Life Stage</span>
            </div>
            <p className="text-sm font-bold text-dark uppercase">{stageDisplay(lifeStage)}</p>
            <p className="text-[10px] text-dark-muted mt-0.5">{getLifeStageAgeRange(lifeStage)}</p>
          </button>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-bd">
            <div className="flex items-center gap-2 text-orange-600 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Age</span>
            </div>
            <p className="text-xl font-bold text-dark">{calculateAgeYears(dobDate)} <span className="text-sm font-normal text-dark-muted">years</span></p>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowVetVisit(true)}
            className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-bd hover:border-blue-200 transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Stethoscope className="text-primary-dark w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-bold text-dark text-sm">Add Vet Visit</p>
              <p className="text-xs text-dark-muted">Record new medical info</p>
            </div>
          </button>
          <button
            onClick={() => setShowAddNote(true)}
            className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-bd hover:border-teal-200 transition-all flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
              <ClipboardList className="text-teal-600 w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="font-bold text-dark text-sm">Add Note</p>
              <p className="text-xs text-dark-muted">Quick health note</p>
            </div>
          </button>
        </div>

        {/* Vet Visit Form Modal */}
        {showVetVisit && (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                <Stethoscope className="text-primary-dark w-5 h-5" /> Record Vet Visit
              </h2>
              <button onClick={() => setShowVetVisit(false)} className="text-dark-muted hover:text-dark-muted">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {/* Date & Notes */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-dark-muted mb-1">Visit Date</label>
                  <input
                    type="date"
                    value={vetDate}
                    onChange={(e) => setVetDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-dark-muted mb-1">Weight (optional)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    placeholder="0.0 kg"
                    value={vetWeight}
                    onChange={(e) => setVetWeight(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-1">Visit Notes</label>
                <textarea
                  placeholder="What happened at the vet visit?"
                  value={vetNotes}
                  onChange={(e) => setVetNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-bd text-sm h-20 outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* New Conditions */}
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-2">New Diagnoses (if any)</label>
                <div className="grid grid-cols-2 gap-1.5 max-h-[150px] overflow-y-auto custom-scrollbar">
                  {conditions.map(condition => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition, vetConditions, setVetConditions)}
                      className={`text-left px-2 py-1.5 rounded-lg border-bd text-xs transition-all ${
                        vetConditions.includes(condition)
                          ? 'border-primary bg-primary-light text-primary-dark font-medium'
                          : 'border-bd text-dark-muted'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>

              {/* Medication Changes */}
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-2">Medication Changes</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    { id: 'onNsaids' as const, label: 'NSAIDs' },
                    { id: 'onCorticosteroids' as const, label: 'Steroids' },
                    { id: 'onThyroidMedication' as const, label: 'Thyroid Meds' },
                    { id: 'onInsulin' as const, label: 'Insulin' },
                    { id: 'onAntiSeizure' as const, label: 'Anti-Seizure' },
                    { id: 'onHeartMedication' as const, label: 'Heart Meds' },
                  ].map(med => (
                    <button
                      key={med.id}
                      onClick={() => toggleVetMedication(med.id)}
                      className={`text-left px-2 py-1.5 rounded-lg border-bd text-xs transition-all ${
                        vetMedications[med.id]
                          ? 'border-orange-600 bg-orange-50 text-orange-700 font-medium'
                          : 'border-bd text-dark-muted'
                      }`}
                    >
                      {med.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Screenings */}
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-2">Screenings Completed</label>
                <div className="grid grid-cols-2 gap-1.5">
                  {[
                    'OFA/PennHIP Hip Evaluation',
                    'OFA Elbow Evaluation',
                    'CERF Eye Exam',
                    'Echocardiogram',
                    'DNA/Genetic Testing',
                    'Bloodwork/Chemistry'
                  ].map(screening => (
                    <button
                      key={screening}
                      onClick={() => {
                        const current = [...vetScreenings];
                        const idx = current.indexOf(screening);
                        if (idx >= 0) current.splice(idx, 1);
                        else current.push(screening);
                        setVetScreenings(current);
                      }}
                      className={`text-left px-2 py-1.5 rounded-lg border-bd text-xs transition-all ${
                        vetScreenings.includes(screening)
                          ? 'border-accent-red bg-red-50 text-red-700 font-medium'
                          : 'border-bd text-dark-muted'
                      }`}
                    >
                      {screening}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleVetVisit}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all"
            >
              Save Vet Visit
            </button>
          </div>
        )}

        {/* Add Note Form */}
        {showAddNote && (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                <ClipboardList className="text-teal-600 w-5 h-5" /> Add Health Note
              </h2>
              <button onClick={() => setShowAddNote(false)} className="text-dark-muted hover:text-dark-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-1">Date</label>
                <input
                  type="date"
                  value={noteDate}
                  onChange={(e) => setNoteDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-dark-muted mb-1">Note</label>
                <textarea
                  placeholder="e.g. Noticed limping after walk, appetite seems normal..."
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-bd text-sm h-24 outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <button
                onClick={handleAddNote}
                disabled={!noteText.trim()}
                className="w-full bg-teal-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save Note
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weight History */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                <TrendingUp className="text-primary w-5 h-5" /> Weight History
              </h2>
              <button
                onClick={() => setShowLogWeight(true)}
                className="w-full bg-primary text-white py-2.5 rounded-xl text-sm font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Plus className="w-4 h-4" /> Log New Weight
              </button>
            </div>

            {/* Current weight display with trend */}
            <div className="bg-gradient-to-r from-primary-light to-blue-50 rounded-2xl p-5 mb-4 border border-primary-light">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-dark-muted font-medium uppercase tracking-wider">Current Weight</p>
                  <p className="text-3xl font-bold text-dark mt-1">{formatWeightWithUnit(currentWeight, unit)}</p>
                </div>
                <div className="text-right">
                  {weightChange !== 0 && (
                    <>
                      <WeightTrend change={weightChange} unit={unit} />
                      <p className="text-[10px] text-dark-muted mt-0.5">since last visit</p>
                    </>
                  )}
                  {previousWeightEntry && (
                    <p className="text-[10px] text-dark-muted mt-0.5">
                      Previous: {formatWeightWithUnit(previousWeightEntry.weightKg, unit)}
                    </p>
                  )}
                </div>
              </div>
              {currentWeightEntry && (
                <p className="text-xs text-dark-muted mt-2">
                  Recorded {formatDate(currentWeightEntry.date)}
                  {currentWeightEntry.notes && ` • ${currentWeightEntry.notes}`}
                </p>
              )}
            </div>

            {/* Log Weight Form (inline) */}
            {showLogWeight && (
              <div className="mb-4 p-4 bg-surface-alt rounded-2xl border border-bd">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-dark-muted">Log New Weight</h3>
                  <button onClick={() => setShowLogWeight(false)} className="text-dark-muted hover:text-dark-muted">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-dark-muted mb-1">Date</label>
                      <input
                        type="date"
                        value={logWeightDate}
                        onChange={(e) => setLogWeightDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dark-muted mb-1">Weight ({unit})</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        placeholder={`0.0 ${unit}`}
                        value={logWeightValue}
                        onChange={(e) => setLogWeightValue(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark-muted mb-1">Notes (optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. Vet visit, home scale..."
                      value={logWeightNotes}
                      onChange={(e) => setLogWeightNotes(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button
                    onClick={handleLogWeight}
                    disabled={!logWeightValue || isNaN(parseFloat(logWeightValue)) || parseFloat(logWeightValue) <= 0}
                    className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save Weight
                  </button>
                </div>
              </div>
            )}

            {/* Weight History List */}
            {displayedEntries.length > 0 ? (
              <div className="space-y-2">
                {displayedEntries.map((entry, i) => {
                  const prevEntry = sortedWeightHistory[i + 1];
                  const changeSincePrev = prevEntry ? entry.weightKg - prevEntry.weightKg : null;
                  const displayWeight = unit === 'lbs' ? kgToLbs(entry.weightKg) : entry.weightKg;
                  const displayChange = changeSincePrev !== null
                    ? (unit === 'lbs' ? kgToLbs(Math.abs(changeSincePrev)) : changeSincePrev)
                    : null;
                  return (
                    <div key={`${entry.date}-${i}`} className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-surface-alt transition-all">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-bd-light'}`} />
                        <div>
                          <p className={`font-medium text-sm ${i === 0 ? 'text-dark' : 'text-dark-muted'}`}>
                            {displayWeight.toFixed(1)} {unit}
                          </p>
                          <p className="text-xs text-dark-muted">{formatDate(entry.date)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {displayChange !== null && (
                          <span className={`text-xs font-medium ${
                            changeSincePrev! > 0 ? 'text-orange-500' : changeSincePrev! < 0 ? 'text-accent-green' : 'text-dark-muted'
                          }`}>
                            {displayChange > 0 ? '+' : ''}{displayChange.toFixed(1)} {unit}
                          </span>
                        )}
                        {entry.notes && (
                          <span className="text-[10px] text-dark-muted max-w-[80px] truncate">{entry.notes}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-dark-muted text-center py-4 italic">No weight history recorded yet</p>
            )}

            {sortedWeightHistory.length > 5 && (
              <button
                onClick={() => setShowAllHistory(!showAllHistory)}
                className="w-full mt-3 text-center text-sm text-primary font-medium hover:text-primary-dark transition-all"
              >
                {showAllHistory ? 'Show Less' : `View All (${sortedWeightHistory.length} entries)`}
              </button>
            )}
          </section>

          {/* Alerts */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd relative">
            <h2 className="text-lg font-bold text-dark flex items-center gap-2 mb-2">
              <AlertTriangle className="text-orange-600 w-5 h-5" /> Highly Recommended
            </h2>
            {filteredAlerts.length > 0 && filteredVaxAlerts.length > 0 && (
              <p className="text-xs text-dark-muted mb-4">{filteredAlerts.length + filteredVaxAlerts.length} active alert{(filteredAlerts.length + filteredVaxAlerts.length) !== 1 ? 's' : ''}</p>
            )}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredAlerts.map((alert, i) => (
                <div key={i} className={`p-4 rounded-2xl border-bd ${
                  alert.severity >= 3 ? 'bg-red-50 border-red-100' : 'bg-orange-50 border-orange-100'
                }`}>
                  {alert.severity >= 3 && (
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-red-700 mb-1">Very Important</span>
                  )}
                  <h3 className={`font-bold text-sm mb-1 ${
                    alert.severity >= 3 ? 'text-red-800' : 'text-orange-800'
                  }`}>{alert.label}</h3>
                  <p className={`text-xs leading-relaxed ${
                    alert.severity >= 3 ? 'text-red-700' : 'text-orange-700'
                  }`}>{alert.message}</p>
                  {/* Action buttons */}
                  {alert.condition && (
                    <div className="mt-3 pt-2 border-t-bd border-orange-200/50 flex flex-wrap gap-1.5">
                      <button
                        onClick={() => addressAlert(alert.condition!, alert.label, alert.message)}
                        className="text-[10px] px-2 py-1 rounded-full bg-primary-light text-primary-dark hover:bg-primary-light transition-all font-medium flex items-center gap-1"
                      >
                        <Stethoscope className="w-3 h-3" /> Address
                      </button>
                      <button
                        onClick={() => dismissAlert(alert.condition!)}
                        className="text-[10px] px-2 py-1 rounded-full bg-bd-light text-dark-muted hover:bg-bd-light transition-all font-medium flex items-center gap-1"
                      >
                        <X className="w-3 h-3" /> Remove
                      </button>
                      <button
                        onClick={() => hideAlert(alert.condition!)}
                        className="text-[10px] px-2 py-1 rounded-full bg-bd-light text-dark-muted hover:bg-bd-light transition-all font-medium flex items-center gap-1"
                      >
                        <EyeOff className="w-3 h-3" /> Hide
                      </button>
                      <button
                        onClick={() => {
                          const stages = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                          const stageOrder = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                          const currentIdx = stageOrder.indexOf(lifeStage);
                          const next = stages.find(s => stageOrder.indexOf(s) > currentIdx);
                          setPostponeStage(next || stages[stages.length - 1]);
                          setPostponeAlert({ condition: alert.condition!, index: i, isVax: false });
                        }}
                        className="text-[10px] px-2 py-1 rounded-full bg-bd-light text-dark-muted hover:bg-bd-light transition-all font-medium flex items-center gap-1"
                      >
                        <Clock className="w-3 h-3" /> Postpone
                      </button>
                    </div>
                  )}
                </div>
              ))}
              {filteredVaxAlerts.map((alert, i) => (
                <div key={`vax-${i}`} className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 text-sm mb-1">Vaccination Alert</h3>
                  <p className="text-xs text-blue-700 leading-relaxed">{alert}</p>
                  <div className="mt-3 pt-2 border-t-bd border-blue-200/50 flex flex-wrap gap-1.5">
                    <button
                      onClick={() => addressAlert(`vax-${i}`, 'Vaccination Alert', alert)}
                      className="text-[10px] px-2 py-1 rounded-full bg-primary-light text-primary-dark hover:bg-primary-light transition-all font-medium flex items-center gap-1"
                    >
                      <Stethoscope className="w-3 h-3" /> Address
                    </button>
                    <button
                      onClick={() => {
                        setDismissedAlerts([...dismissedAlerts, `vax-${i}`]);
                        const updated = { ...pet, dismissedAlerts: [...dismissedAlerts, `vax-${i}`] };
                        persistPetUpdate(updated);
                        showFeedback('Vaccination alert dismissed');
                      }}
                      className="text-[10px] px-2 py-1 rounded-full bg-bd-light text-dark-muted hover:bg-bd-light transition-all font-medium flex items-center gap-1"
                    >
                      <X className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              ))}
              {filteredAlerts.length === 0 && filteredVaxAlerts.length === 0 && (
                <p className="text-sm text-dark-muted text-center py-8 italic">No active alerts</p>
              )}
            </div>

            {/* Postpone popover */}
            {postponeAlert && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 rounded-3xl" onClick={() => setPostponeAlert(null)}>
                <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs mx-4" onClick={e => e.stopPropagation()}>
                  <h3 className="font-bold text-dark text-sm mb-3">Postpone Alert</h3>
                  <p className="text-xs text-dark-muted mb-3">Show this alert again at:</p>
                  {/* Species-appropriate life stages for postpone */}
                  {(() => {
                    const allStages = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                    // Only show stages after the current one
                    const stageOrder = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                    const currentIdx = stageOrder.indexOf(lifeStage);
                    const availableStages = allStages.filter(s => stageOrder.indexOf(s) > currentIdx);
                    return (
                      <select
                        value={postponeStage}
                        onChange={e => setPostponeStage(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-primary mb-4"
                      >
                        {availableStages.length > 0 ? availableStages.map(stage => (
                          <option key={stage} value={stage}>{stage} stage</option>
                        )) : (
                          <option value="">No future stages available</option>
                        )}
                      </select>
                    );
                  })()}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setPostponeAlert(null)}
                      className="flex-1 px-4 py-2 rounded-xl border border-bd text-dark-muted text-sm font-medium hover:bg-surface-alt transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => postponeAlertAction(postponeAlert.condition)}
                      className="flex-1 px-4 py-2 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all"
                    >
                      Postpone
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Feedback toast */}
            {alertActionFeedback && (
              <div className="absolute bottom-4 left-4 right-4 bg-dark text-white text-xs px-4 py-2.5 rounded-xl shadow-lg text-center font-medium animate-pulse z-10">
                {alertActionFeedback}
              </div>
            )}
          </section>
        </div>

        {/* Vet Visit Prompt */}
        <div className="bg-gradient-to-r from-blue-50 to-primary-light rounded-2xl p-4 border border-blue-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="w-5 h-5 text-primary-dark" />
            <div>
              <p className="text-sm font-medium text-dark">Had a vet visit recently?</p>
              <p className="text-xs text-dark-muted">Add it to your pet's medical records</p>
            </div>
          </div>
          <button
            onClick={() => setShowVetVisit(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-medium hover:bg-blue-700 transition-all shrink-0"
          >
            Add Vet Visit
          </button>
        </div>

        {/* Medical History Timeline */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-dark flex items-center gap-2">
              <FileText className="text-primary w-5 h-5" /> Medical History
            </h2>
          </div>

          {displayedMedicalEntries.length > 0 ? (
            <div className="space-y-0">
              {displayedMedicalEntries.map((entry, i) => {
                const isLast = i === displayedMedicalEntries.length - 1;
                return (
                  <div key={`med-${entry.date}-${i}`} className="flex gap-4">
                    {/* Timeline line and dot */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-bd-light flex items-center justify-center shrink-0">
                        {getMedicalIcon(entry.type)}
                      </div>
                      {!isLast && <div className="w-0.5 flex-1 bg-bd-light mt-1" />}
                    </div>
                    {/* Content */}
                    <div className={`pb-6 ${isLast ? '' : ''}`}>
                      <p className="text-xs text-dark-muted font-medium">{formatDate(entry.date)}</p>
                      <p className="text-sm font-medium text-dark mt-0.5">{entry.description}</p>
                      {entry.details && (
                        <p className="text-xs text-dark-muted mt-0.5 leading-relaxed">{entry.details}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-dark-muted text-center py-4 italic">No medical history recorded yet</p>
          )}

          {sortedMedicalHistory.length > 5 && (
            <button
              onClick={() => setShowAllMedical(!showAllMedical)}
              className="w-full mt-2 text-center text-sm text-primary font-medium hover:text-primary-dark transition-all"
            >
              {showAllMedical ? 'Show Less' : `View All (${sortedMedicalHistory.length} entries)`}
            </button>
          )}
        </section>

        {/* Exercise Plan */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-dark flex items-center gap-2">
              <Dog className="text-accent-green w-5 h-5" /> Exercise Plan
            </h2>
          </div>
          {(() => {
            try {
              const rec = getExerciseRecommendation(pet);
              const p = rec.plan;
              return (
                <div className="space-y-4">
                  {/* Activity Level Bar */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-dark-muted">Daily Activity Target</span>
                      <span className="text-dark-muted">{rec.ageAdjustedMinutes} min/day</span>
                    </div>
                    <div className="h-3 bg-bd-light rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${getIntensityColor(p.intensityLevel)}`}
                        style={{ width: `${Math.min(rec.ageAdjustedMinutes / p.dailyMaxMinutes * 100, 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-dark-muted mt-1">
                      <span>{p.dailyMinMinutes} min</span>
                      <span className="font-medium text-dark-muted">{getIntensityLabel(rec.ageAdjustedIntensity)}</span>
                      <span>{p.dailyMaxMinutes} min</span>
                    </div>
                  </div>

                  {/* Intensity label */}
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${getIntensityColor(p.intensityLevel)}`} />
                      {getIntensityLabel(p.intensityLevel)} Intensity
                    </span>
                    <span className="text-dark-muted">|</span>
                    <span className="text-dark-muted capitalize">{rec.ageGroup} plan</span>
                  </div>

                  {/* Recommended exercises */}
                  <div>
                    <p className="text-xs font-bold text-dark-muted uppercase tracking-wider mb-2">Recommended</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.recommendedExercises.map((ex, i) => (
                        <span key={i} className="px-2.5 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-medium border border-green-100">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Restricted exercises */}
                  {p.restrictedExercises.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-dark-muted uppercase tracking-wider mb-2">Restricted</p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.restrictedExercises.map((ex, i) => (
                          <span key={i} className="px-2.5 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-medium border border-red-100">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Special considerations */}
                  {p.specialConsiderations.length > 0 && (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">⚠ Special Considerations</p>
                      <ul className="space-y-0.5">
                        {p.specialConsiderations.map((note, i) => (
                          <li key={i} className="text-xs text-amber-700">{note}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Heat/Cold restrictions */}
                  <div className="flex gap-3 text-xs">
                    <div className="flex-1 p-2.5 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="flex items-center gap-1.5 font-medium text-orange-700 mb-0.5">
                        <Flame className="w-3.5 h-3.5" /> Heat
                      </div>
                      <p className="text-orange-600">{p.heatRestriction}</p>
                    </div>
                    <div className="flex-1 p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-1.5 font-medium text-blue-700 mb-0.5">
                        <Snowflake className="w-3.5 h-3.5" /> Cold
                      </div>
                      <p className="text-primary-dark">{p.coldRestriction}</p>
                    </div>
                  </div>
                </div>
              );
            } catch (e) {
              return <p className="text-sm text-dark-muted text-center py-4 italic">Exercise plan unavailable</p>;
            }
          })()}
        </section>

        {/* Milestones */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-dark flex items-center gap-2">
              <Calendar className="text-primary-dark w-5 h-5" /> Milestones
            </h2>
            {upcomingMilestones.length > 0 && (
              <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                {upcomingMilestones.length} upcoming
              </span>
            )}
          </div>
          {upcomingMilestones.length === 0 && completedMilestones.length === 0 ? (
            <p className="text-sm text-dark-muted text-center py-6 italic">No milestones available</p>
          ) : (
            <div className="space-y-3">
              {/* Upcoming milestones */}
              {upcomingMilestones.length > 0 && (
                <>
                  <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider">Upcoming</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {upcomingMilestones.map((m) => {
                      const ms = milestoneStatus[m.id];
                      const isCompleted = ms?.status === 'completed';
                      return (
                        <div key={m.id} className={`p-4 rounded-2xl border-bd transition-all ${
                          isCompleted ? 'bg-green-50 border-green-200 opacity-70' : 'bg-surface-alt border-bd hover:border-primary'
                        }`}>
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                                m.type === 'Vaccine' ? 'bg-blue-100 text-blue-700' :
                                m.type === 'Screening' ? 'bg-primary-light text-primary-dark' :
                                'bg-amber-100 text-amber-700'
                              }`}>{m.type.replace('_', ' ')}</span>
                              <h3 className={`font-bold text-sm mt-1.5 ${
                                isCompleted ? 'text-green-700 line-through' : 'text-dark'
                              }`}>{m.name}</h3>
                              <p className="text-xs text-dark-muted mt-0.5">{m.description}</p>
                              <p className="text-xs font-medium text-dark-muted mt-1">Due: {m.due}</p>
                            </div>
                          </div>
                          {/* Update button */}
                          <button
                            onClick={() => { setUpdateMilestone(m); setRescheduleDate(''); }}
                            className="mt-2 text-xs text-primary font-medium hover:text-primary-dark transition-all flex items-center gap-1"
                          >
                            <ChevronRight className="w-3 h-3" /> Update
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              {/* Completed milestones */}
              {completedMilestones.length > 0 && (
                <div className="mt-4">
                  <p className="text-[11px] font-bold text-dark-muted uppercase tracking-wider mb-2">Completed ({completedMilestones.length})</p>
                  <div className="flex flex-wrap gap-2">
                    {completedMilestones.map(m => (
                      <span key={m.id} className="text-xs text-accent-green bg-green-50 border border-green-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> {m.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Milestone update popover */}
          {updateMilestone && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-20 rounded-3xl" onClick={() => setUpdateMilestone(null)}>
              <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs mx-4" onClick={e => e.stopPropagation()}>
                <h3 className="font-bold text-dark text-sm mb-1">{updateMilestone.name}</h3>
                <p className="text-xs text-dark-muted mb-4">{updateMilestone.description}</p>
                <div className="space-y-2">
                  <button
                    onClick={() => handleMilestoneAction(updateMilestone.id, 'completed')}
                    className="w-full text-left px-4 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-medium hover:bg-green-100 transition-all flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" /> Mark as Completed
                  </button>
                  <button
                    onClick={() => handleMilestoneAction(updateMilestone.id, 'acknowledged')}
                    className="w-full text-left px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-all flex items-center gap-2"
                  >
                    <EyeOff className="w-4 h-4" /> Acknowledge / Dismiss
                  </button>
                  <details className="group">
                    <summary className="w-full text-left px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium hover:bg-amber-100 transition-all flex items-center gap-2 cursor-pointer list-none">
                      <Clock className="w-4 h-4" /> Reschedule
                    </summary>
                    <div className="mt-2 pl-4 space-y-2">
                      <input
                        type="date"
                        value={rescheduleDate}
                        onChange={e => setRescheduleDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-bd text-sm outline-none focus:ring-2 focus:ring-amber-600"
                      />
                      <button
                        onClick={() => rescheduleDate && handleMilestoneAction(updateMilestone.id, 'acknowledged', rescheduleDate)}
                        disabled={!rescheduleDate}
                        className="w-full px-4 py-2 rounded-xl bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-all disabled:opacity-50"
                      >
                        Set New Date
                      </button>
                    </div>
                  </details>
                  <button
                    onClick={() => handleMilestoneAction(updateMilestone.id, 'dismissed')}
                    className="w-full text-left px-4 py-2.5 rounded-xl border border-bd text-dark-muted text-sm font-medium hover:bg-surface-alt transition-all flex items-center gap-2"
                  >
                    <X className="w-4 h-4" /> Remove Permanently
                  </button>
                </div>
                <button
                  onClick={() => setUpdateMilestone(null)}
                  className="w-full mt-3 text-center text-xs text-dark-muted hover:text-dark-muted transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Breed Newsletter — only for dogs (canine) initially */}
        {pet.species === 'canine' && hasBreedNewsletter(primaryBreedName) && (
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-bd">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-light rounded-xl flex items-center justify-center">
                <span className="text-base">📖</span>
              </div>
              <h2 className="text-lg font-bold text-dark flex items-center gap-2">
                Breed Guide
              </h2>
              {hasBreedNewsletter(primaryBreedName) && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-light text-primary-dark font-medium">
                  {primaryBreedName}
                </span>
              )}
            </div>
            {(() => {
              const nl = getBreedNewsletter(primaryBreedName);
              return nl ? <PetNewsletter newsletter={nl} /> : null;
            })()}
          </section>
        )}

        {/* MER Info Popover */}
        {showMERInfo && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-30" onClick={() => setShowMERInfo(false)}>
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md mx-4 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark text-lg flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> Daily Energy Target
                </h3>
                <button onClick={() => setShowMERInfo(false)} className="text-dark-muted hover:text-dark-muted p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* What is MER */}
              <div className="bg-primary-light rounded-xl p-4 mb-4 border border-primary-light">
                <p className="text-xs text-primary-dark leading-relaxed">
                  <strong>Maintenance Energy Requirement (MER)</strong> is the number of calories your pet needs each day to maintain their current weight. It's calculated using their Resting Energy Requirement (RER) multiplied by adjustment factors for their lifestyle and health status.
                </p>
              </div>

              {/* Calculation Breakdown */}
              <h4 className="font-bold text-dark text-sm mb-3">Calculation Breakdown</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Species</span>
                  <span className="text-xs font-medium text-dark capitalize">{pet.species}</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Current Weight</span>
                  <span className="text-xs font-medium text-dark">{formatWeightWithUnit(currentWeight, unit)}</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Neutered</span>
                  <span className="text-xs font-medium text-dark">{pet.isNeutered ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Activity Level</span>
                  <span className="text-xs font-medium text-dark capitalize">{pet.activityLevel}</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Life Stage</span>
                  <span className="text-xs font-medium text-dark">{stageDisplay(lifeStage)}</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-surface-alt rounded-lg">
                  <span className="text-xs text-dark-muted">Body Condition</span>
                  <span className="text-xs font-medium text-dark">{pet.bcs} / 9</span>
                </div>
                <div className="flex justify-between py-1.5 px-3 bg-primary-light rounded-lg border border-primary-light">
                  <span className="text-xs font-bold text-primary-dark">RER × Multiplier</span>
                  <span className="text-xs font-bold text-primary-dark">{Math.round(mer)} kcal/day</span>
                </div>
              </div>

              {/* Formula info */}
              <details className="group mb-4">
                <summary className="text-xs text-primary font-medium cursor-pointer hover:text-primary-dark transition-all list-none flex items-center gap-1">
                  <ChevronRight className="w-3 h-3 group-open:rotate-90 transition-transform" /> How is this calculated?
                </summary>
                <div className="mt-2 p-3 bg-surface-alt rounded-xl text-xs text-dark-muted space-y-1">
                  <p><strong>Step 1 — RER:</strong> 70 × (weight in kg)<sup>0.75</sup></p>
                  <p><strong>Step 2 — Multiplier:</strong> Based on species, neuter status, activity level, life stage, and BCS score</p>
                  <p><strong>Step 3 — MER:</strong> RER × Multiplier</p>
                  <p className="text-[10px] text-dark-muted mt-1 italic">Per PawPath Clinical Rulebook §1.3-1.4</p>
                </div>
              </details>

              {/* Recommendations */}
              <div className="space-y-3 pt-3 border-t-bd border-bd">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-sm">🍽️</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-800">Meal Splitting</p>
                    <p className="text-[11px] text-green-700 mt-0.5">Split daily calories into 2–3 meals to maintain steady energy and support digestion.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-sm">🦴</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-800">Treat Allowance</p>
                    <p className="text-[11px] text-amber-700 mt-0.5">Max {Math.round(mer * 0.1)} kcal/day from treats (~10% of daily calories). Choose low-calorie options.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-sm">💧</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-blue-800">Water Intake</p>
                    <p className="text-[11px] text-blue-700 mt-0.5">Aim for {Math.round(currentWeight * 50)}–{Math.round(currentWeight * 60)} ml per day (50–60 ml per kg of body weight). Increase in hot weather or after exercise.</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowMERInfo(false)}
                className="w-full mt-4 bg-primary text-white py-3 rounded-xl text-sm font-medium hover:bg-primary-dark transition-all"
              >
                Got it
              </button>
            </div>
          </div>
        )}

        {/* Body Condition Info Popover */}
        {showBodyConditionInfo && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-30" onClick={() => setShowBodyConditionInfo(false)}>
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md mx-4 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark text-lg flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary-dark" /> Body Condition Score
                </h3>
                <button onClick={() => setShowBodyConditionInfo(false)} className="text-dark-muted hover:text-dark-muted p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* What is BCS */}
              <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Body Condition Score (BCS)</strong> is a 1–9 scale that estimates your pet's body fat percentage. A score of <strong>5/9</strong> is ideal — neither underweight nor overweight.
                </p>
              </div>

              {/* Current score with plain label */}
              <div className="bg-surface-alt rounded-xl p-4 mb-4 border border-bd text-center">
                <p className="text-xs text-dark-muted mb-1">Your Pet's Score</p>
                <p className="text-3xl font-bold text-dark">{pet.bcs} <span className="text-lg font-normal text-dark-muted">/ 9</span></p>
                <p className="text-sm font-medium mt-1">{(() => {
                  const s = pet.bcs;
                  if (s <= 3) return <span className="text-orange-600">⚠️ Underweight — may need a diet adjustment</span>;
                  if (s <= 4) return <span className="text-amber-600">Slightly underweight — monitor closely</span>;
                  if (s <= 5) return <span className="text-accent-green">✅ Ideal weight — keep it up!</span>;
                  if (s <= 6) return <span className="text-amber-600">Slightly overweight — watch food intake</span>;
                  return <span className="text-orange-600">⚠️ Overweight — consider a weight management plan</span>;
                })()}</p>
              </div>

              {/* BCS Scale Visual */}
              <h4 className="font-bold text-dark text-sm mb-3">BCS 1–9 Scale</h4>
              <div className="space-y-1.5 mb-4">
                {[
                  { score: '1–3', label: 'Underweight', color: 'bg-orange-100 border-orange-200 text-orange-700', desc: 'Ribs, vertebrae, and pelvic bones visible from a distance. No body fat. Severe muscle wasting.' },
                  { score: '4', label: 'Slightly Underweight', color: 'bg-amber-50 border-amber-200 text-amber-700', desc: 'Ribs easily felt with little fat cover. Waist and abdominal tuck easily seen.' },
                  { score: '5', label: 'Ideal', color: 'bg-green-100 border-green-200 text-green-700', desc: 'Ribs felt with slight fat cover. Waist visible behind ribs when viewed from above. Belly tuck when viewed from side.' },
                  { score: '6', label: 'Slightly Overweight', color: 'bg-amber-50 border-amber-200 text-amber-700', desc: 'Ribs felt with moderate fat cover. Waist less distinct. Abdominal tuck still present.' },
                  { score: '7–9', label: 'Overweight to Obese', color: 'bg-orange-100 border-orange-200 text-orange-700', desc: 'Ribs difficult to feel under thick fat. No waist or abdominal tuck. Fat deposits on back, neck, and tail base.' },
                ].map(tier => (
                  <div key={tier.score} className={`p-3 rounded-xl border-bd ${tier.color} ${pet.bcs >= parseInt(tier.score) || (tier.score.includes('–') && pet.bcs >= parseInt(tier.score.split('–')[0])) ? 'ring-2 ring-offset-1' : ''}`}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold">{tier.score}</span>
                      <span className="text-xs font-bold">{tier.label}</span>
                    </div>
                    <p className="text-[10px] opacity-80 leading-relaxed">{tier.desc}</p>
                  </div>
                ))}
              </div>

              {/* When to be concerned */}
              <div className="p-3 bg-red-50 rounded-xl border border-red-100 mb-3">
                <p className="text-xs font-bold text-red-800 mb-1">🚨 When to Consult Your Vet</p>
                <p className="text-[11px] text-red-700 leading-relaxed">
                  Scores below <strong>4</strong> or above <strong>6</strong> may indicate health concerns. Unexplained weight changes — especially rapid loss — should always be evaluated by a veterinarian.
                </p>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[11px] text-blue-700 leading-relaxed flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 shrink-0" />
                  If you're unsure about your pet's body condition, ask your vet at the next checkup. They can show you how to assess BCS at home.
                </p>
              </div>

              <button
                onClick={() => setShowBodyConditionInfo(false)}
                className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all"
              >
                Got it
              </button>
            </div>
          </div>
        )}

        {/* Life Stage Info Popover */}
        {showLifeStageInfo && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-30" onClick={() => setShowLifeStageInfo(false)}>
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-md mx-4 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-dark text-lg flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent-green" /> Life Stage Guide
                </h3>
                <button onClick={() => setShowLifeStageInfo(false)} className="text-dark-muted hover:text-dark-muted p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* What is Life Stage */}
              <div className="bg-green-50 rounded-xl p-4 mb-4 border border-green-100">
                <p className="text-xs text-green-800 leading-relaxed">
                  <strong>Life stage</strong> reflects your pet's developmental phase and helps guide nutrition, exercise, and veterinary care. Each stage has different health priorities and recommended checkup frequencies.
                </p>
              </div>

              {/* Current stage */}
              <div className="bg-surface-alt rounded-xl p-4 mb-4 border border-bd text-center">
                <p className="text-xs text-dark-muted mb-1">Current Stage</p>
                <p className="text-2xl font-bold text-green-700 uppercase">{stageDisplay(lifeStage)}</p>
                <p className="text-sm font-medium text-dark-muted mt-1">{getLifeStageAgeRange(lifeStage)}</p>
              </div>

              {/* Timeline of stages */}
              <h4 className="font-bold text-dark text-sm mb-3">Life Stage Timeline</h4>
              <div className="space-y-2 mb-4">
                {(() => {
                  const stages = pet.species === 'canine'
                    ? [
                        { stage: 'Puppy', range: '0–12 months', color: 'bg-blue-100 border-blue-200 text-blue-700', changes: 'Rapid growth, socialization, basic training, multiple vet visits for vaccinations' },
                        { stage: 'Junior', range: '1–2 years', color: 'bg-teal-100 border-teal-200 text-teal-700', changes: 'Reaching adult size, continued training, spay/neuter recommended' },
                        { stage: 'Adult', range: '2–6 years', color: 'bg-green-100 border-green-200 text-green-700', changes: 'Maintenance nutrition, annual vet visits, regular exercise, dental care' },
                        { stage: 'Mature Adult', range: '6–8 years', color: 'bg-amber-100 border-amber-200 text-amber-700', changes: 'Senior screening starting, weight management, joint health monitoring' },
                        { stage: 'Senior', range: '8+ years', color: 'bg-orange-100 border-orange-200 text-orange-700', changes: 'Biannual vet visits, bloodwork monitoring, adjusted nutrition, joint supplements' },
                        { stage: 'End-of-Life', range: 'Advanced senior care', color: 'bg-amber-100 border-amber-200 text-amber-800', changes: 'Comfort-focused care, quality-of-life assessment, and regular veterinary guidance' },
                      ]
                    : [
                        { stage: 'Puppy', range: '0–12 months', color: 'bg-blue-100 border-blue-200 text-blue-700', changes: 'Growth, vaccinations, socialization, spay/neuter' },
                        { stage: 'Junior', range: '1–2 years', color: 'bg-teal-100 border-teal-200 text-teal-700', changes: 'Reaching full size, adult nutrition transition, continued training' },
                        { stage: 'Adult', range: '2–6 years', color: 'bg-green-100 border-green-200 text-green-700', changes: 'Annual vet visits, weight management, dental care, regular exercise' },
                        { stage: 'Mature Adult', range: '6–8 years', color: 'bg-amber-100 border-amber-200 text-amber-700', changes: 'Senior screening starting, weight management, joint health monitoring' },
                        { stage: 'Senior', range: '8+ years', color: 'bg-orange-100 border-orange-200 text-orange-700', changes: 'Biannual vet visits, bloodwork, joint health, comfort-focused care' },
                        { stage: 'End-of-Life', range: 'Advanced senior care', color: 'bg-amber-100 border-amber-200 text-amber-800', changes: 'Comfort-focused care, quality-of-life assessment, and regular veterinary guidance' },
                      ];
                  const stageOrder = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                  const currentIdx = stageOrder.indexOf(lifeStage);
                  return stages.map((s, i) => {
                    const stageIdx = stageOrder.indexOf(s.stage);
                    const isPast = stageIdx < currentIdx;
                    const isCurrent = stageIdx === currentIdx;
                    const isFuture = stageIdx > currentIdx;
                    return (
                      <div key={s.stage} className={`p-3 rounded-xl border-bd ${s.color} ${isCurrent ? 'ring-2 ring-offset-1 ring-accent-green' : isPast ? 'opacity-60' : ''}`}>
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-bold">
                            {isPast ? '✅ ' : isCurrent ? '📍 ' : '⬜ '}
                            {stageDisplay(s.stage)}
                          </span>
                          <span className="text-[10px] font-medium opacity-80">{s.range}</span>
                        </div>
                        <p className="text-[10px] opacity-80 leading-relaxed">{s.changes}</p>
                      </div>
                    );
                  });
                })()}
              </div>

              {/* Next transition */}
              <div className="p-3 bg-primary-light rounded-xl border border-primary-light mb-3">
                <p className="text-xs font-bold text-primary-dark mb-1">Next Stage Transition</p>
                <p className="text-[11px] text-primary-dark leading-relaxed">
                  {(() => {
                    const stageOrder = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                    const currentIdx = stageOrder.indexOf(lifeStage);
                    const stages = ['Puppy', 'Junior', 'Adult', 'Mature Adult', 'Senior', 'End-of-Life'];
                    const nextStage = stages.find(s => stageOrder.indexOf(s) > currentIdx);
                    if (nextStage) {
                      return `Your pet will transition to the <strong>${nextStage}</strong> stage next. Nutritional needs, exercise routines, and vet visit frequency should be adjusted at each transition. Ask your vet for guidance.`;
                    }
                    return 'Your pet may need advanced senior care. Focus on comfort and quality of life, and consult your veterinarian regularly about their changing needs.';
                  })()}
                </p>
              </div>

              <button
                onClick={() => setShowLifeStageInfo(false)}
                className="w-full mt-4 bg-accent-green text-white py-3 rounded-xl text-sm font-medium hover:bg-green-700 transition-all"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-bd pt-4 pb-2 text-center text-xs text-dark-muted">
        Questions or need help? <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary font-medium underline underline-offset-2">Email our support team</a>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Dashboard;