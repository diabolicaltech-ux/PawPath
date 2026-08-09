import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  Scale, 
  Calendar,
  Activity,
  ChevronRight,
  Plus
} from 'lucide-react';
import { calculateMER } from '../engine/metabolic_engine';
import { getLifeStage, checkVaccinationStatus } from '../engine/milestone_engine';
import { evaluateAlerts } from '../engine/alert_engine';
import type { PetProfile } from '../types/pet';
import { BREEDS } from '../data/breeds';

interface DashboardProps {
  pet: PetProfile;
}

const Dashboard: React.FC<DashboardProps> = ({ pet }) => {
  const weightNum = parseFloat(pet.weight) || 0;
  const dobDate = new Date(pet.dob);

  // Real calculations
  const mer = calculateMER({
    species: pet.species,
    weightKg: weightNum,
    isNeutered: pet.isNeutered,
    activityLevel: pet.activityLevel,
    workingDogMultiplier: pet.workingDogMultiplier,
    lifeStage: 'adult',
    bcsScore: pet.bcs
  });

  const lifeStage = getLifeStage({
    species: pet.species,
    dateOfBirth: dobDate,
    weightKg: weightNum
  });

  const selectedBreed = BREEDS.find(b => b.name === pet.breed) || {
    name: pet.breed,
    species: pet.species,
    highRiskConditions: []
  };

  const activeAlerts = evaluateAlerts({
    id: 'temp',
    name: pet.name,
    species: pet.species,
    dateOfBirth: dobDate,
    breed: selectedBreed as any,
    healthLogs: [{ date: new Date(), weightKg: weightNum, bcsScore: pet.bcs }],
    clinicalEvents: []
  });

  const vaxAlerts = checkVaccinationStatus(pet.species, []);

  const calculateAgeYears = (dob: Date) => {
    const diff = Date.now() - dob.getTime();
    return (diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  };

  const milestones = [
    { name: 'Core Vaccine Booster', due: '6 months', status: 'upcoming', type: 'Vaccine' },
    { name: 'Dental Screening', due: 'Annually', status: 'recommended', type: 'Screening' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-indigo-600 pt-8 pb-20 px-6 rounded-b-[40px]">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
              {pet.species === 'canine' ? '🐕' : '🐈'}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{pet.name}</h1>
              <p className="opacity-80">{pet.breed} • {pet.weight}kg</p>
            </div>
          </div>
          <button className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-all">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 space-y-6">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-indigo-600 mb-1">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Daily Target</span>
            </div>
            <p className="text-xl font-bold text-slate-800">{Math.round(mer)} <span className="text-sm font-normal text-slate-400">kcal</span></p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-blue-600 mb-1">
              <Scale className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">BCS Score</span>
            </div>
            <p className="text-xl font-bold text-slate-800">{pet.bcs} <span className="text-sm font-normal text-slate-400">/ 9</span></p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-green-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Life Stage</span>
            </div>
            <p className="text-sm font-bold text-slate-800 uppercase">{lifeStage}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-orange-600 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase">Age</span>
            </div>
            <p className="text-xl font-bold text-slate-800">{calculateAgeYears(dobDate)} <span className="text-sm font-normal text-slate-400">years</span></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Weight History */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="text-indigo-600 w-5 h-5" /> Weight History
              </h2>
              <button className="text-indigo-600 text-sm font-medium">View All</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-slate-50">
                <div>
                  <p className="font-medium text-slate-700">{pet.weight} kg</p>
                  <p className="text-xs text-slate-400">Current</p>
                </div>
                <div className="text-xs px-2 py-1 rounded-full text-slate-400 bg-slate-50">
                  Initial
                </div>
              </div>
            </div>
          </section>

          {/* Alerts */}
          <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
              <AlertTriangle className="text-orange-600 w-5 h-5" /> Clinical Alerts
            </h2>
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
              {activeAlerts.map((alert, i) => (
                <div key={i} className={`p-4 rounded-2xl border ${
                  alert.severity >= 3 ? 'bg-red-50 border-red-100' : 'bg-orange-50 border-orange-100'
                }`}>
                  <h3 className={`font-bold text-sm mb-1 ${
                    alert.severity >= 3 ? 'text-red-800' : 'text-orange-800'
                  }`}>{alert.label}</h3>
                  <p className={`text-xs leading-relaxed ${
                    alert.severity >= 3 ? 'text-red-700' : 'text-orange-700'
                  }`}>{alert.message}</p>
                </div>
              ))}
              {vaxAlerts.map((alert, i) => (
                <div key={`vax-${i}`} className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 text-sm mb-1">Vaccination Alert</h3>
                  <p className="text-xs text-blue-700 leading-relaxed">{alert}</p>
                </div>
              ))}
              {activeAlerts.length === 0 && vaxAlerts.length === 0 && (
                <p className="text-sm text-slate-400 text-center py-8 italic">No active alerts</p>
              )}
            </div>
          </section>
        </div>

        {/* Milestones */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Calendar className="text-blue-600 w-5 h-5" /> Upcoming Milestones
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-all">
                <div className="mb-2">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    m.type === 'Core Vaccine' ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {m.type}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm mb-1">{m.name}</h3>
                <p className="text-xs text-slate-500 font-medium">Due: {m.due}</p>
                <ChevronRight className="absolute right-4 bottom-4 w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-all" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
