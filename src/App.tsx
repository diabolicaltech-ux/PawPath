import React, { useState } from 'react';
import OnboardingForm from './components/OnboardingForm';
import Dashboard from './components/Dashboard';
import type { PetProfile } from './types/pet';

const App: React.FC = () => {
  const [pet, setPet] = useState<PetProfile | null>(null);

  const handleOnboardingComplete = (data: PetProfile) => {
    setPet(data);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {!pet ? (
        <div className="flex items-center justify-center p-4 min-h-screen">
          <OnboardingForm onComplete={handleOnboardingComplete} />
        </div>
      ) : (
        <Dashboard pet={pet} />
      )}
    </div>
  );
};

export default App;
