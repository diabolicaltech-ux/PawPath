export type LegalView = 'terms' | 'privacy';

/** Hash anchors used for the legal pages (browser-native navigation). */
export const LEGAL_HASHES: Record<LegalView, string> = {
  terms: '#terms',
  privacy: '#privacy',
};

/**
 * Maps a location hash (e.g. "#terms", "#/terms", "#privacy") to a legal view,
 * or null when the hash does not reference a legal page.
 */
export function legalViewFromHash(hash: string): LegalView | null {
  const value = hash.replace(/^#\/?/, '').trim();
  return value === 'terms' || value === 'privacy' ? value : null;
}
