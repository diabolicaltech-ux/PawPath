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
  // Old enough to be well past onset+6 months → the "past window" branch.
  dateOfBirth: new Date('2015-01-01'),
  healthLogs: [],
  clinicalEvents: [] as { date: Date; eventType: string; details: any }[],
});

describe('evaluateAlerts screening grounding', () => {
  test('reframes past-window screening as a recommendation, not a missed-screening alarm', () => {
    const alerts = evaluateAlerts(basePet());
    // No "Missed Screening" alarm copy anywhere.
    expect(alerts.some(a => a.label === 'Missed Screening')).toBe(false);
    // A non-alarmist recommendation is present instead (ADVISORY, not WARNING).
    const rec = alerts.find(a => a.condition === 'Hip Dysplasia');
    expect(rec).toBeDefined();
    expect(rec!.severity).toBe(AlertSeverity.ADVISORY);
    expect(rec!.label).toBe('Screening Recommended');
    expect(rec!.message).not.toMatch(/missed|immediate|Very Important/i);
  });

  test('clears the screening recommendation when a matching screening event exists', () => {
    const pet = basePet();
    pet.clinicalEvents = [
      {
        date: new Date(),
        eventType: 'screening',
        details: { screeningType: 'OFA hip scoring', condition: 'OFA hip scoring' },
      },
    ];
    const alerts = evaluateAlerts(pet);
    expect(alerts.some(a => a.condition === 'Hip Dysplasia')).toBe(false);
  });
});
