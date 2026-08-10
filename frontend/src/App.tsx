import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
// Local-first mode: no remote auth backend is required to use PawPath.
import { PawPrint } from 'lucide-react';
import PublicLandingPage from './components/PublicLandingPage';
import { getPetLimit, grantPremium, grantPetSlot } from './lib/access';
import NavBar from './components/NavBar';

// Lazy-load logged-in-only components so their heavy data dependencies
// (breeds.ts 416KB, breed_newsletter_data.ts 253KB, exercise_plans.ts 22KB)
// are split into separate chunks and excluded from the initial bundle
// that anonymous visitors download.
const OnboardingForm = lazy(() => import('./components/OnboardingForm'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const LoggedInHomepage = lazy(() => import('./components/LoggedInHomepage'));
const BreedLibrary = lazy(() => import('./components/BreedLibrary'));
const RescuePage = lazy(() => import('./components/RescuePage'));
const AccountSettings = lazy(() => import('./components/AccountSettings'));
import type { PetProfile, MedicalHistoryEntry } from './types/pet';
import { formatBreeds } from './types/pet';
import { loadPets, addPet, updatePet, deletePet, savePets } from './lib/storage';
import { loadRemotePets, createRemotePet, updateRemotePet, deleteRemotePet } from './lib/cloudSync';
import { getWeightUnit, formatWeight } from './lib/weightUnits';
import { replacePetInCollection, replaceSelectedPet } from './lib/petState';
import { useAuth } from './lib/auth';
import { setAccount } from './lib/access';

// Shared loading fallback for lazy-loaded views
const ViewLoader = () => (
  <div className="min-h-screen bg-surface-alt flex items-center justify-center">
    <div className="text-center">
      <PawPrint className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
      <p className="text-dark-muted">Loading...</p>
    </div>
  </div>
);

type View = 'login' | 'home' | 'onboarding' | 'dashboard' | 'breed-library' | 'rescue' | 'account';

const App: React.FC = () => {
  const { user } = useAuth();
  const isLoaded = true;
  const isSignedIn = !!user;
  const [pets, setPets] = useState<PetProfile[]>([]);
  const [view, setView] = useState<View>('home');
  const [selectedPet, setSelectedPet] = useState<PetProfile | null>(null);
  const [editingPet, setEditingPet] = useState<PetProfile | null>(null);
  const [weightUnit, setWeightUnit] = useState<'kg' | 'lbs'>(getWeightUnit());

  // Handle auth state changes
  useEffect(() => {
    setAccount(user?.sub || null);
    if (!isLoaded) return;
    if (!isSignedIn) {
      // Clear in-memory account state on sign-out; signed-out UI never reads pets.
      setPets([]);
      setSelectedPet(null);
      setEditingPet(null);
      setView('login');
    } else {
      loadRemotePets().then(remote => { savePets(remote); setPets(remote); }).catch(() => {
        // Authenticated data is remote-authoritative. Never display another device's local data when sync is unavailable.
        setPets([]);
      });
      // After sign-in, always go to home/dashboard — never stay on login
      setView('home');
    }
  }, [isLoaded, isSignedIn, user]);
  // Automatic Stripe verification is additive to the support unlock flow.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('unlock');
    const sessionId = params.get('session_id');
    if (code && (grantPremium(code) || grantPetSlot(code))) {
      window.history.replaceState({}, '', window.location.pathname + window.location.hash);
      return;
    }
    if (!sessionId) return;
    fetch(`/api/verify?session_id=${encodeURIComponent(sessionId)}`)
      .then(response => response.ok ? response.json() : { ok: false })
      .then(result => {
        if (result?.ok && (result.product === 'premium' ? grantPremium('PP-7K9Q4X') : result.product === 'slot' ? grantPetSlot('PP-2M6N8V') : false)) {
          window.history.replaceState({}, '', window.location.pathname + window.location.hash);
        }
      })
      .catch(() => undefined);
  }, []);

  // Handle onboarding complete (new pet)
  const handleAddComplete = useCallback(async (data: PetProfile) => {
    let updated: PetProfile[];
    try { const remote = await createRemotePet(data); updated = [...pets, remote]; savePets(updated); }
    catch { return; }
    setPets(updated);
    setView('home');
    setEditingPet(null);
  }, []);

  // Handle onboarding complete (edit pet)
  const handleEditComplete = useCallback(async (data: PetProfile) => {
    if (editingPet?.id) {
      const today = new Date().toISOString().split('T')[0];
      const editEntry: MedicalHistoryEntry = {
        date: today,
        type: 'profile_edit',
        description: 'Profile updated',
        details: `Updated ${data.name}'s health profile`
      };
      const dataWithHistory = {
        ...data,
        medicalHistory: [...(data.medicalHistory || []), editEntry]
      };
      try {
        const remote = await updateRemotePet(dataWithHistory);
        const updated = pets.map(p => p.id === editingPet.id ? remote : p);
        savePets(updated); setPets(updated); setSelectedPet(remote);
      } catch { return; }
    }
    setView('dashboard');
    setEditingPet(null);
  }, [editingPet, pets]);

  // Keep the app-level pet collection in sync with dashboard actions. Dashboard
  // also persists to localStorage, but App owns the state used by the homepage.
  const handleDashboardPetUpdate = useCallback((updatedPet: PetProfile) => {
    updateRemotePet(updatedPet).then(remote => {
      setPets(currentPets => { const next = replacePetInCollection(currentPets, remote); savePets(next); return next; });
      setSelectedPet(currentPet => replaceSelectedPet(currentPet, remote));
    }).catch(() => undefined);
  }, []);

  // Open pet dashboard
  const openDashboard = useCallback((pet: PetProfile) => {
    setSelectedPet(pet);
    setView('dashboard');
  }, []);

  // Back to home from dashboard
  const backToHome = useCallback(() => {
    setSelectedPet(null);
    const saved = loadPets();
    setPets(saved);
    setView('home');
  }, []);

  // Edit pet
  const startEdit = useCallback((pet: PetProfile) => {
    setEditingPet(pet);
    setView('onboarding');
  }, []);

  // Delete pet
  const handleDelete = useCallback((id: string) => {
    deleteRemotePet(id).then(() => { const updated = pets.filter(p => p.id !== id); savePets(updated); setPets(updated); }).catch(() => undefined);
    setEditingPet(current => current?.id === id ? null : current);
    setSelectedPet(current => {
      if (current?.id !== id) return current;
      setView('home');
      return null;
    });
  }, []);

  // Add new pet (with free tier limit)
  const [showPetLimitModal, setShowPetLimitModal] = useState(false);
  const startAdd = useCallback(() => {
    if (pets.length >= getPetLimit()) {
      setShowPetLimitModal(true);
      return;
    }
    setEditingPet(null);
    setView('onboarding');
  }, [pets.length]);

  // Navigation handler for NavBar
  const handleNavigate = useCallback((target: 'home' | 'onboarding' | 'breed-library' | 'rescue' | 'account') => {
    if (target === 'home') {
      loadRemotePets().then(remote => { savePets(remote); setPets(remote); }).catch(() => {
        // Authenticated data is remote-authoritative. Never display another device's local data when sync is unavailable.
        setPets([]);
      });
      setSelectedPet(null);
      setView('home');
    } else if (target === 'onboarding') {
      setEditingPet(null);
      setView('onboarding');
    } else if (target === 'breed-library') {
      setSelectedPet(null);
      setView('breed-library');
    } else if (target === 'rescue') {
      setSelectedPet(null);
      setView('rescue');
    } else if (target === 'account') {
      setSelectedPet(null);
      setView('account');
    }
  }, []);

  // Show nothing while Clerk loads
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-surface-alt flex items-center justify-center">
        <div className="text-center">
          <PawPrint className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-dark-muted">Loading...</p>
        </div>
      </div>
    );
  }

  // Show public landing page if not signed in
  if (!isSignedIn) return <PublicLandingPage />;

  return (
    <div className="min-h-screen bg-surface-alt">
      {/* Top Navigation Bar */}
      <NavBar
        currentView={view === 'home' ? 'home' : view === 'dashboard' ? 'dashboard' : view === 'breed-library' ? 'breed-library' : view === 'rescue' ? 'rescue' : view === 'account' ? 'account' : 'home'}
        onNavigate={handleNavigate}
        petName={selectedPet?.name || (pets.length > 0 ? pets[0].name : undefined)}
        user={user}
      />

      {/* Logged-in Homepage View */}
      {view === 'home' && (
        <Suspense fallback={<ViewLoader />}>
          <LoggedInHomepage
            pets={pets}
            onOpenDashboard={openDashboard}
            onAddPet={startAdd}
            onEditPet={startEdit}
            onDeletePet={handleDelete}
            weightUnit={weightUnit}
          />
        </Suspense>
      )}

      {/* Account settings */}
      {view === 'account' && <Suspense fallback={<ViewLoader />}><AccountSettings account={user?.sub} /></Suspense>}
      {/* Breed Library View */}
      {view === 'breed-library' && (
        <Suspense fallback={<ViewLoader />}>
          <BreedLibrary />
        </Suspense>
      )}

      {/* Rescue directory */}
      {view === 'rescue' && (
        <Suspense fallback={<ViewLoader />}><RescuePage /></Suspense>
      )}
      {/* Onboarding View */}
      {view === 'onboarding' && (
        <div className="flex items-center justify-center p-4 min-h-screen">
          <Suspense fallback={<ViewLoader />}>
            <OnboardingForm
              onComplete={editingPet ? handleEditComplete : handleAddComplete}
              initialData={editingPet || undefined}
              onCancel={() => { 
                if (editingPet && selectedPet) {
                  setView('dashboard');
                } else {
                  setView('home');
                }
                setEditingPet(null); 
              }}
            />
          </Suspense>
        </div>
      )}

      {/* Dashboard View */}
      {view === 'dashboard' && selectedPet && (
        <Suspense fallback={<ViewLoader />}>
          <Dashboard
            pet={selectedPet}
            onBack={backToHome}
            onEdit={() => startEdit(selectedPet)}
            onPetUpdate={handleDashboardPetUpdate}
            weightUnit={weightUnit}
          />
        </Suspense>
      )}
      {showPetLimitModal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" role="dialog" aria-modal="true"><div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"><h2 className="text-xl font-bold text-dark">Add another dog</h2><p className="mt-2 text-sm text-dark-muted">One-time $2.99, yours forever.</p><div className="mt-6 flex gap-3"><button onClick={() => setShowPetLimitModal(false)} className="flex-1 rounded-xl border border-bd px-4 py-3 text-sm font-semibold text-dark-muted">Not now</button><a href="https://buy.stripe.com/4gM9ASfqzdTo0fYaricjS01" target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-white">Continue to pay</a></div></div></div>}
    </div>
  );
};

export default App;