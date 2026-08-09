const STORAGE_KEY = 'pawpath_weightUnit';
const KG_TO_LBS = 2.20462;

export type WeightUnit = 'kg' | 'lbs';

export function getWeightUnit(): WeightUnit {
  try {
    const val = localStorage.getItem(STORAGE_KEY);
    if (val === 'kg' || val === 'lbs') return val;
  } catch {}
  return 'kg';
}

export function setWeightUnit(unit: WeightUnit): void {
  try {
    localStorage.setItem(STORAGE_KEY, unit);
  } catch {}
}

export function toggleWeightUnit(): WeightUnit {
  const current = getWeightUnit();
  const next = current === 'kg' ? 'lbs' : 'kg';
  setWeightUnit(next);
  return next;
}

export function kgToLbs(kg: number): number {
  return kg * KG_TO_LBS;
}

export function lbsToKg(lbs: number): number {
  return lbs / KG_TO_LBS;
}

export function formatWeight(kg: number, unit: WeightUnit): string {
  if (unit === 'lbs') {
    return `${kgToLbs(kg).toFixed(1)}`;
  }
  return `${kg.toFixed(1)}`;
}

export function formatWeightWithUnit(kg: number, unit: WeightUnit): string {
  return `${formatWeight(kg, unit)} ${unit}`;
}