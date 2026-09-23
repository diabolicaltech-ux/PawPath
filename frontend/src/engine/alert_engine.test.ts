import { evaluateAlerts, AlertSeverity } from './alert_engine';
import { Species } from './metabolic_engine';

const basePet = () => ({
  id: '1',
  name: 'Test',
  species: Species.CANINE,
  breed: {
    name: 'TestBreed',
    species: Species.CANINE,
    alert_rules: {
      predispositions: [
        {
          condition: 'Hip Dysplasia',
          onsetAgeMonths: 12,
          severity: AlertSeverity.WARNING,
          screening: 'OFA hip scoring',
        },
      ],
      contraindications: [],
    },
  },
  // Old enough to be well past onset+6 months → would fire "Missed Screening" if unscreened.
  dateOfBirth: new Date('2015-01-01'),
  healthLogs: [],
  clinicalEvents: [] as { date: Date; eventType: string; details: any }[],
});

describe('evaluateAlerts screening grounding', () => {
  test('fires a missed-screening alert when no matching screening event exists', () => {
    const alerts = evaluateAlerts(basePet());
    expect(
      alerts.some(a => a.label === 'Missed Screening' && a.condition === 'Hip Dysplasia'),
    ).toBe(true);
  });

  test('clears the missed-screening alert when a matching screening event exists', () => {
    const pet = basePet();
    pet.clinicalEvents = [
      {
        date: new Date(),
        eventType: 'screening',
        details: { screeningType: 'OFA hip scoring', condition: 'OFA hip scoring' },
      },
    ];
    const alerts = evaluateAlerts(pet);
    expect(
      alerts.some(a => a.label === 'Missed Screening' && a.condition === 'Hip Dysplasia'),
    ).toBe(false);
  });
});
