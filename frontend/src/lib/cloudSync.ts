import type { PetProfile } from '../types/pet';
import { getCurrentUser } from './auth';

type RemotePet = { id: string; name: string; payload?: PetProfile };
const request = async (init: RequestInit = {}) => {
  const user = getCurrentUser();
  if (!user?.idToken) throw new Error('REMOTE_AUTH_UNAVAILABLE');
  const headers = new Headers(init.headers);
  headers.set('Authorization', `Bearer ${user.idToken}`);
  if (init.body) headers.set('Content-Type', 'application/json');
  const response = await fetch('/api/collab', { ...init, headers });
  if (!response.ok) throw new Error(`REMOTE_${response.status}`);
  return response;
};
const fromRemote = (p: RemotePet): PetProfile => ({ ...(p.payload || {}), id: p.id, name: p.name });
export async function loadRemotePets(): Promise<PetProfile[]> {
  const body = await (await request()).json() as { pets?: RemotePet[] };
  return Array.isArray(body.pets) ? body.pets.map(fromRemote) : [];
}
export async function createRemotePet(pet: PetProfile): Promise<PetProfile> {
  const body = await (await request({ method: 'POST', body: JSON.stringify({ name: pet.name, payload: pet }) })).json() as { pet: RemotePet };
  return fromRemote(body.pet);
}
export async function updateRemotePet(pet: PetProfile): Promise<PetProfile> {
  const body = await (await request({ method: 'PUT', body: JSON.stringify({ id: pet.id, name: pet.name, payload: pet }) })).json() as { pet: RemotePet };
  return fromRemote(body.pet);
}
export async function deleteRemotePet(id: string): Promise<void> {
  await request({ method: 'DELETE', headers: { 'x-pet-id': id } });
}
