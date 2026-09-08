import React, { useEffect, useMemo, useState } from 'react';
import { PawPrint } from 'lucide-react';
import type { AdminAccount, AdminPet } from '../lib/admin';
import {
  loadAdminAccounts,
  loadAccountPets,
  adminBan,
  adminUnban,
  adminGrant,
  adminSendMessage,
} from '../lib/admin';

type Busy = 'ban' | 'unban' | 'grant-slot' | 'grant-premium' | 'message' | null;

interface AdminPageProps {
  /** Invoked when the server reports the current user is not the owner, so the
   *  parent can route back to the regular user experience (no error page). */
  onDenied: () => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ onDenied }) => {
  const [accounts, setAccounts] = useState<AdminAccount[]>([]);
  const [state, setState] = useState<'loading' | 'denied' | 'error' | 'ready'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<AdminAccount | null>(null);
  const [viewPets, setViewPets] = useState<AdminPet[]>([]);
  const [viewing, setViewing] = useState(false);
  const [busy, setBusy] = useState<Busy>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // Compose modal
  const [composing, setComposing] = useState<AdminAccount | null>(null);
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');

  const reload = async () => {
    try {
      const list = await loadAdminAccounts();
      setAccounts(list);
      setState('ready');
    } catch (e) {
      if (e instanceof Error && e.message === 'ADMIN_404') {
        // Not the owner: hand control back to the parent so the visitor lands on
        // their regular page. The server has already logged + (rate-limited)
        // emailed the owner about the attempt.
        setState('denied');
        onDenied();
      } else {
        setError(e instanceof Error ? e.message : 'Unknown error');
        setState('error');
      }
    }
  };

  useEffect(() => {
    void reload();
  }, []);

  const run = async (fn: () => Promise<void>, label: Busy) => {
    setBusy(label);
    setNotice(null);
    try {
      await fn();
      setNotice('Done.');
      await reload();
    } catch (e) {
      setNotice(e instanceof Error ? e.message : 'Action failed.');
    } finally {
      setBusy(null);
    }
  };

  const openView = async (account: AdminAccount) => {
    setSelected(account);
    setViewing(true);
    try {
      setViewPets(await loadAccountPets(account.id));
    } catch {
      setViewPets([]);
    }
  };

  const openCompose = (account: AdminAccount) => {
    setComposing(account);
    setSubject('');
    setMessageBody('');
  };

  const sorted = useMemo(
    () =>
      [...accounts].sort((a, b) => {
        const ab = a.banned_at ? 1 : 0;
        const bb = b.banned_at ? 1 : 0;
        if (ab !== bb) return ab - bb;
        return a.email.localeCompare(b.email);
      }),
    [accounts],
  );

  if (state === 'loading') {
    return <div className="p-8 text-dark-muted">Loading admin…</div>;
  }

  if (state === 'denied') {
    // The parent re-routes the visitor to their regular page via onDenied().
    // This branch renders only for the instant before that transition; show
    // nothing admin-flavored so the surface never reveals its existence.
    return <div className="p-8 text-dark-muted" aria-hidden="true">Loading…</div>;
  }

  if (state === 'error') {
    return <div className="p-8 text-accent-red">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-surface-alt p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <PawPrint className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-dark">PawPath Admin</h1>
        </div>

        {notice && (
          <div className="mb-4 rounded-xl border border-bd bg-surface px-4 py-3 text-sm text-dark-muted">{notice}</div>
        )}

        <div className="bg-white border border-bd rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-dark-muted border-b border-bd bg-surface-warm">
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Dogs</th>
                <th className="px-4 py-3 font-semibold">Slots</th>
                <th className="px-4 py-3 font-semibold">Premium</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((account) => {
                const banned = Boolean(account.banned_at);
                return (
                  <tr key={account.id} className="border-b border-bd last:border-0 align-top">
                    <td className="px-4 py-3">
                      <div className="font-medium text-dark">{account.display_name || account.email}</div>
                      <div className="text-dark-muted text-xs">{account.email}</div>
                      <div className="text-dark-muted text-xs">since {new Date(account.created_at).toLocaleDateString()}</div>
                    </td>
                    <td className="px-4 py-3 text-dark">{account.dog_count}</td>
                    <td className="px-4 py-3 text-dark">{account.slot_grants}</td>
                    <td className="px-4 py-3 text-dark">{account.premium_grants > 0 ? 'Yes' : '—'}</td>
                    <td className="px-4 py-3">
                      {banned ? (
                        <span className="inline-block rounded-full bg-accent-red/10 text-accent-red px-2 py-0.5 text-xs font-semibold">Banned</span>
                      ) : (
                        <span className="inline-block rounded-full bg-accent-green/10 text-accent-green px-2 py-0.5 text-xs font-semibold">Active</span>
                      )}
                      {banned && account.banned_reason && (
                        <div className="text-dark-muted text-xs mt-1">{account.banned_reason}</div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1.5">
                        <button
                          onClick={() => void openView(account)}
                          className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-dark hover:bg-surface-alt"
                        >
                          View
                        </button>
                        <button
                          onClick={() => void run(() => adminGrant(account.id, 'slot'), 'grant-slot')}
                          disabled={busy !== null}
                          className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-dark hover:bg-surface-alt disabled:opacity-50"
                        >
                          +Slot
                        </button>
                        <button
                          onClick={() => void run(() => adminGrant(account.id, 'premium'), 'grant-premium')}
                          disabled={busy !== null}
                          className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-dark hover:bg-surface-alt disabled:opacity-50"
                        >
                          +Premium
                        </button>
                        {banned ? (
                          <button
                            onClick={() => void run(() => adminUnban(account.id), 'unban')}
                            disabled={busy !== null}
                            className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-accent-green hover:bg-surface-alt disabled:opacity-50"
                          >
                            Unban
                          </button>
                        ) : (
                          <button
                            onClick={() => void run(() => adminBan(account.id), 'ban')}
                            disabled={busy !== null}
                            className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-accent-red hover:bg-surface-alt disabled:opacity-50"
                          >
                            Ban
                          </button>
                        )}
                        <button
                          onClick={() => openCompose(account)}
                          className="rounded-lg border border-bd px-2.5 py-1.5 text-xs font-semibold text-dark hover:bg-surface-alt"
                        >
                          Message
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {sorted.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-dark-muted">No accounts yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View-as-customer modal */}
      {viewing && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setViewing(false)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-dark">{selected.display_name || selected.email}</h2>
            <p className="text-xs text-dark-muted mb-4">{selected.email}</p>
            {viewPets.length === 0 ? (
              <p className="text-dark-muted text-sm">No dogs.</p>
            ) : (
              <ul className="space-y-2">
                {viewPets.map((pet) => (
                  <li key={pet.id} className="rounded-xl border border-bd p-3">
                    <div className="font-semibold text-dark">{pet.name}</div>
                    <pre className="mt-2 text-xs text-dark-muted whitespace-pre-wrap break-words max-h-48 overflow-auto">
                      {JSON.stringify(pet.payload, null, 2)}
                    </pre>
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => setViewing(false)}
              className="mt-4 w-full rounded-xl border border-bd px-4 py-2 text-sm font-semibold text-dark-muted hover:bg-surface-alt"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Compose message modal */}
      {composing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4" onClick={() => setComposing(null)}>
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold text-dark">Message {composing.email}</h2>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="mt-3 w-full rounded-xl border border-bd px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              placeholder="Message (visible to the user on next login)"
              rows={5}
              className="mt-2 w-full rounded-xl border border-bd px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setComposing(null)}
                className="flex-1 rounded-xl border border-bd px-4 py-2 text-sm font-semibold text-dark-muted"
              >
                Cancel
              </button>
              <button
                disabled={busy !== null || !subject.trim() || !messageBody.trim()}
                onClick={() =>
                  void run(async () => {
                    await adminSendMessage(composing.id, subject, messageBody);
                    setComposing(null);
                  }, 'message')
                }
                className="flex-1 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
