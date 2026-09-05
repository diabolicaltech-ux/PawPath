import { applyServerEntitlements } from './access';

export interface AdminMessage {
  id: string;
  subject: string;
  body: string;
  read_at: string | null;
  created_at: string;
}

export interface MeResponse {
  account: {
    id: string;
    email: string;
    display_name: string;
    banned: boolean;
    banned_reason: string | null;
  };
  entitlements: {
    slot_grants: number;
    premium_grants: number;
  };
  messages: AdminMessage[];
}

/**
 * Fetches the signed-in user's server-side account status and overlays
 * server-side entitlements onto the local access model. On any failure it
 * resolves to null so the local-first experience is never blocked; bans are
 * still enforced by /api/collab independently of this fetch.
 */
export async function loadMe(): Promise<MeResponse | null> {
  try {
    const response = await fetch('/api/me', { headers: { Accept: 'application/json' } });
    if (!response.ok) return null;
    const data = (await response.json()) as MeResponse;
    applyServerEntitlements(data.entitlements?.slot_grants || 0, data.entitlements?.premium_grants || 0);
    return data;
  } catch {
    return null;
  }
}

export async function markMessagesRead(): Promise<void> {
  try {
    await fetch('/api/me', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'mark_messages_read' }),
    });
  } catch { /* non-blocking */ }
}
