export type NotificationSettings = {
  emailOptIn: boolean;
  smsOptIn: boolean;
};

const KEY_PREFIX = 'pawpath_notification_settings';

const storageKey = (account?: string | null) => `${KEY_PREFIX}${account ? `_${account}` : ''}`;

export function loadNotificationSettings(account?: string | null): NotificationSettings {
  try {
    const raw = localStorage.getItem(storageKey(account));
    if (!raw) return { emailOptIn: false, smsOptIn: false };
    const parsed = JSON.parse(raw) as Partial<NotificationSettings>;
    return { emailOptIn: parsed.emailOptIn === true, smsOptIn: parsed.smsOptIn === true };
  } catch {
    return { emailOptIn: false, smsOptIn: false };
  }
}

/** Stores consent preferences only. Phone numbers are intentionally never persisted here. */
export function saveNotificationSettings(settings: NotificationSettings, account?: string | null): void {
  try { localStorage.setItem(storageKey(account), JSON.stringify(settings)); } catch { /* storage is optional */ }
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}
