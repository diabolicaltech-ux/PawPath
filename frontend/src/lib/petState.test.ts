import { mergeRemotePets, replacePetById, replaceSelectedPet } from './petState';
import type { PetProfile } from '../types/pet';

const pet = (id: string, name: string): PetProfile => ({ id, name } as PetProfile);

describe('local-first pet state', () => {
  test('keeps a locally saved profile when remote sync has no profile', () => {
    const local = pet('local-1', 'Juniper');

    expect(mergeRemotePets([local], [])).toEqual([local]);
  });

  test('merges remote profiles without deleting locally saved profiles', () => {
    const local = pet('local-1', 'Juniper');
    const remote = pet('remote-2', 'Milo');

    expect(mergeRemotePets([local], [remote])).toEqual([local, remote]);
  });

  test('replaces the local profile and selected dashboard profile after a successful sync', () => {
    const local = pet('local-1', 'Juniper');
    const synced = { ...local, name: 'Juniper Updated' };

    expect(replacePetById([local], local.id, synced)).toEqual([synced]);
    expect(replaceSelectedPet(local, synced)).toEqual(synced);
  });
});
