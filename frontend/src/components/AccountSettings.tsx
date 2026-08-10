import React, { useEffect, useState } from 'react';
import { Bell, Check, ShieldCheck } from 'lucide-react';
import { isValidPhone, loadNotificationSettings, saveNotificationSettings } from '../lib/notificationSettings';

type Props = { account?: string | null };

const AccountSettings: React.FC<Props> = ({ account }) => {
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [phone, setPhone] = useState('');
  const [saved, setSaved] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  useEffect(() => {
    const settings = loadNotificationSettings(account);
    setEmailOptIn(settings.emailOptIn);
    setSmsOptIn(settings.smsOptIn);
  }, [account]);

  const onSave = (event: React.FormEvent) => {
    event.preventDefault();
    if (smsOptIn && !isValidPhone(phone)) {
      setPhoneError('Enter a valid phone number (10–15 digits) to enable text notifications.');
      return;
    }
    setPhoneError('');
    saveNotificationSettings({ emailOptIn, smsOptIn }, account);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  };

  return <section className="mx-auto w-full max-w-2xl rounded-2xl border border-bd bg-white p-5 shadow-sm sm:p-7" aria-labelledby="account-settings-title">
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-primary-light p-2 text-primary-deeper"><Bell className="h-5 w-5" aria-hidden="true" /></div>
      <div><h1 id="account-settings-title" className="text-2xl font-bold text-dark">Account settings</h1><p className="mt-1 text-sm text-dark-muted">Choose how PawPath can keep you informed.</p></div>
    </div>
    <form onSubmit={onSave} className="mt-7 space-y-6">
      <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-bd p-4">
        <span><span className="block font-semibold text-dark">Email notifications</span><span className="mt-1 block text-sm text-dark-muted">Receive helpful reminders about your dog’s health plan.</span></span>
        <input type="checkbox" checked={emailOptIn} onChange={e => setEmailOptIn(e.target.checked)} className="mt-1 h-5 w-5 accent-primary-deeper" aria-label="Email notifications" />
      </label>
      <div className="rounded-xl border border-bd p-4">
        <label className="flex cursor-pointer items-start justify-between gap-4"><span><span className="block font-semibold text-dark">Text notifications</span><span className="mt-1 block text-sm text-dark-muted">Get optional reminders by SMS.</span></span><input type="checkbox" checked={smsOptIn} onChange={e => setSmsOptIn(e.target.checked)} className="mt-1 h-5 w-5 accent-primary-deeper" aria-label="Text notifications" /></label>
        {smsOptIn && <div className="mt-4"><label htmlFor="account-phone" className="block text-sm font-medium text-dark">Mobile phone number</label><input id="account-phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="(555) 555-0123" className="mt-1 w-full rounded-lg border border-bd px-3 py-3 text-base text-dark outline-none focus:border-primary-deeper focus:ring-2 focus:ring-primary-light" aria-describedby="phone-help phone-error" aria-invalid={!!phoneError} /><p id="phone-help" className="mt-2 text-xs text-dark-muted">PawPath does not send texts yet. If this becomes available, we’ll ask you to confirm again. Message and data rates may apply; reply STOP to opt out.</p>{phoneError && <p id="phone-error" className="mt-2 text-sm text-accent-red">{phoneError}</p>}</div>}
      </div>
      <div className="flex items-start gap-2 rounded-xl bg-surface-warm p-3 text-xs text-dark-muted"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" /><span>These preferences are explicit opt-ins and are off by default. Your phone number is used only for this form and is not saved by PawPath.</span></div>
      <button type="submit" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary-deeper px-5 py-3 font-semibold text-white hover:bg-primary-dark">{saved && <Check className="h-4 w-4" aria-hidden="true" />} {saved ? 'Saved' : 'Save preferences'}</button>
    </form>
  </section>;
};
export default AccountSettings;
