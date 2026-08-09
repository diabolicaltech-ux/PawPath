
import { calculateRER, calculateMER, Species } from './src/engine/metabolic_engine';
import { evaluateAlerts, AlertSeverity } from './src/engine/alert_engine';
import { getLifeStage, checkVaccinationStatus } from './src/engine/milestone_engine';

async function runVerification() {
  console.log('--- PawPath Verification Script ---');

  // 1. Metabolic Engine Verification
  const weight = 10;
  const rer = calculateRER(weight);
  console.log(`RER for ${weight}kg: ${rer.toFixed(2)} (Expected ~393.64)`);

  const canineInput = {
    species: Species.CANINE,
    weightKg: 10,
    isNeutered: false,
    activityLevel: 'normal' as any,
    lifeStage: 'adult' as any
  };
  const canineMer = calculateMER(canineInput);
  console.log(`Canine MER (Intact Adult): ${canineMer.toFixed(2)} (Expected: ${rer} * 1.8 = ${(rer * 1.8).toFixed(2)})`);

  const felineInput = {
    species: Species.FELINE,
    weightKg: 4,
    isNeutered: false,
    activityLevel: 'normal' as any,
    lifeStage: 'adult' as any,
    isWeightLossTarget: true
  };
  const felineMer = calculateMER(felineInput);
  const felineRer = calculateRER(4);
  console.log(`Feline MER (Weight Loss, Intact): ${felineMer.toFixed(2)} (Expected safety clamp: ${felineRer} * 0.7 = ${(felineRer * 0.7).toFixed(2)})`);

  // 2. Alert Engine Verification
  const mockPet = {
    id: '1',
    name: 'Buddy',
    species: Species.CANINE,
    breed: {
      name: 'Labrador Retriever',
      species: Species.CANINE,
      highRiskConditions: [
        { condition: 'Hip Dysplasia', onsetAgeMonths: 24, screeningRecommendation: 'OFA', severity: AlertSeverity.ADVISORY }
      ]
    },
    dateOfBirth: new Date(Date.now() - 36 * 30 * 24 * 60 * 60 * 1000), // 3 years old
    healthLogs: [],
    clinicalEvents: []
  };
  const alerts = evaluateAlerts(mockPet as any);
  console.log(`Alerts for 3yr old Lab: ${alerts.length}`);
  alerts.forEach(a => console.log(` - [${AlertSeverity[a.severity]}] ${a.label}: ${a.message}`));

  // 3. Milestone Engine Verification
  const stage = getLifeStage({
    species: Species.CANINE,
    dateOfBirth: new Date(Date.now() - 9 * 365 * 24 * 60 * 60 * 1000), // 9 years old
    weightKg: 50 // Giant breed
  });
  console.log(`Life stage for 9yr 50kg Dog: ${stage} (Expected: Senior or End-of-Life)`);

  const vaxAlerts = checkVaccinationStatus(Species.CANINE, []);
  console.log(`Vaccination alerts (empty records): ${vaxAlerts.join(', ')}`);

  console.log('--- Verification Complete ---');
}

runVerification().catch(console.error);
