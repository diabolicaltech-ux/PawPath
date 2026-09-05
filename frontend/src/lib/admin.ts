export interface AdminAccount {
  id: string;
  google_sub: string;
  email: string;
  display_name: string;
  created_at: string;
  banned_at: string | null;
  banned_reason: string | null;
  dog_count: number;
  slot_grants: number;
  premium_grants: number;
}

export interface AdminPet {
  id: string;
  name: string;
  payload: unknown;
  created_at: string;
  updated_at: string;
}

async function request(init: RequestInit = {}): Promise<Response> {
  const headers = new Headers(init.headers);
  if (init.body) headers.set('Content-Type', 'application/json');
  const response = await fetch('/api/admin', { ...init, headers });
  if (!response.ok) throw new Error(`ADMIN_${response.status}`);
  return response;
}

export async function loadAdminAccounts(): Promise<AdminAccount[]> {
  const data = (await (await request()).json()) as { accounts?: AdminAccount[] };
  return Array.isArray(data.accounts) ? data.accounts : [];
}

export async function loadAccountPets(accountId: string): Promise<AdminPet[]> {
  const response = await request({
    method: 'POST',
    body: JSON.stringify({ action: 'view', account_id: accountId }),
  });
  const data = (await response.json()) as { pets?: AdminPet[] };
  return Array.isArray(data.pets) ? data.pets : [];
}

export async function adminBan(accountId: string, reason?: string): Promise<void> {
  await request({ method: 'POST', body: JSON.stringify({ action: 'ban', account_id: accountId, reason }) });
}

export async function adminUnban(accountId: string): Promise<void> {
  await request({ method: 'POST', body: JSON.stringify({ action: 'unban', account_id: accountId }) });
}

export async function adminGrant(accountId: string, kind: 'slot' | 'premium', reason?: string): Promise<void> {
  await request({ method: 'POST', body: JSON.stringify({ action: 'grant', account_id: accountId, kind, reason }) });
}

export async function adminSendMessage(accountId: string, subject: string, body: string): Promise<void> {
  await request({ method: 'POST', body: JSON.stringify({ action: 'message', account_id: accountId, subject, body }) });
}
