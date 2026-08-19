import { legalViewFromHash } from './legalRouting';

describe('legalViewFromHash', () => {
  it('maps #terms and #/terms to terms', () => {
    expect(legalViewFromHash('#terms')).toBe('terms');
    expect(legalViewFromHash('#/terms')).toBe('terms');
  });

  it('maps #privacy and #/privacy to privacy', () => {
    expect(legalViewFromHash('#privacy')).toBe('privacy');
    expect(legalViewFromHash('#/privacy')).toBe('privacy');
  });

  it('returns null for non-legal hashes and empty strings', () => {
    expect(legalViewFromHash('')).toBeNull();
    expect(legalViewFromHash('#home')).toBeNull();
    expect(legalViewFromHash('#dashboard')).toBeNull();
    expect(legalViewFromHash('#/account')).toBeNull();
  });

  it('accepts the normalized token without a leading #', () => {
    expect(legalViewFromHash('terms')).toBe('terms');
    expect(legalViewFromHash('privacy')).toBe('privacy');
  });
});
