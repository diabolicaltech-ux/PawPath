import { toggleCoreVaccinesRecord } from './pet';

describe('toggleCoreVaccinesRecord', () => {
  test('adds a recorded Core vaccines record when absent', () => {
    const result = toggleCoreVaccinesRecord([], '2026-09-23');
    expect(result).toEqual([
      { vaccineName: 'Core vaccines', isCore: true, status: 'recorded', dateAdministered: '2026-09-23' },
    ]);
  });

  test('removes the Core vaccines record when present', () => {
    const existing = [
      { vaccineName: 'Core vaccines', isCore: true, status: 'recorded' as const, dateAdministered: '2026-09-23' },
    ];
    expect(toggleCoreVaccinesRecord(existing, '2026-09-23')).toEqual([]);
  });

  test('preserves other vaccination records when toggling', () => {
    const others = [
      { vaccineName: 'Bordetella', isCore: false, status: 'recorded' as const, dateAdministered: '2026-01-01' },
    ];
    const result = toggleCoreVaccinesRecord(others, '2026-09-23');
    expect(result).toHaveLength(2);
    expect(result.some(v => v.vaccineName === 'Core vaccines')).toBe(true);
    expect(result.some(v => v.vaccineName === 'Bordetella')).toBe(true);
  });
});
