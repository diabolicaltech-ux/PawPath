#!/usr/bin/env node
/**
 * Idempotently provision PawPath's public availability monitor in UptimeRobot.
 * The API key is read only from UPTIMEROBOT_API_KEY and is never logged.
 *
 * Usage:
 *   UPTIMEROBOT_API_KEY=... node ops/uptimerobot.mjs
 *   UPTIMEROBOT_API_KEY=... DRY_RUN=1 node ops/uptimerobot.mjs
 */
const API = 'https://api.uptimerobot.com/v2';
const URL = process.env.MONITOR_URL || 'https://pawpath.quest/';
const NAME = process.env.MONITOR_NAME || 'PawPath public site';
const DRY_RUN = /^(1|true|yes)$/i.test(process.env.DRY_RUN || '');
const apiKey = process.env.UPTIMEROBOT_API_KEY;

if (!apiKey) {
  console.error('Missing UPTIMEROBOT_API_KEY (not committed or printed).');
  process.exit(2);
}
if (!/^https:\/\//i.test(URL)) {
  console.error('MONITOR_URL must be an HTTPS URL.');
  process.exit(2);
}

async function call(endpoint, params = {}) {
  const body = new URLSearchParams({ api_key: apiKey, format: 'json', ...params });
  const response = await fetch(`${API}/${endpoint}`, { method: 'POST', body });
  const json = await response.json().catch(() => ({}));
  if (!response.ok || json.stat !== 'ok') {
    throw new Error(`${endpoint} failed (${response.status}): ${json.error?.message || 'API error'}`);
  }
  return json;
}

async function main() {
  const monitors = await call('getMonitors', { 'logs': 0, 'showTimezone': 0 });
  const existing = (monitors.monitors || []).find((m) => m.url === URL || m.friendly_name === NAME);
  const alertContacts = await call('getAlertContacts');
  const recipient = process.env.ALERT_EMAIL || 'contactpawpath@gmail.com';
  const contact = (alertContacts.alert_contacts || []).find((c) => c.value === recipient);
  if (!contact) {
    throw new Error(`No UptimeRobot alert contact found for ${recipient}. Add/verify it in UptimeRobot first; refusing to create an unalerted monitor.`);
  }

  const config = {
    friendly_name: NAME,
    url: URL,
    type: 1,
    interval: 300,
    timeout: 30,
    monitor_ids: existing?.id,
    alert_contacts: String(contact.id),
  };
  console.log(JSON.stringify({ action: existing ? 'update' : 'create', monitor: NAME, url: URL, interval_seconds: 300, timeout_seconds: 30, alert_recipient: recipient, dry_run: DRY_RUN }));
  if (DRY_RUN) return;

  if (existing) {
    await call('editMonitor', config);
    console.log(`Updated UptimeRobot monitor ${existing.id}.`);
  } else {
    const created = await call('newMonitor', config);
    console.log(`Created UptimeRobot monitor ${created.monitor?.id || '(id unavailable)'}.`);
  }
}

main().catch((error) => { console.error(error.message); process.exit(1); });
