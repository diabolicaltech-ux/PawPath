# PawPath uptime monitoring

## Production monitor

UptimeRobot is the external availability monitor for `https://pawpath.quest/`. Provision it from an operator machine with the UptimeRobot API key held in an environment variable:

```sh
export UPTIMEROBOT_API_KEY='(retrieve from the password manager; never commit or paste into logs)'
node ops/uptimerobot.mjs
unset UPTIMEROBOT_API_KEY
```

The script is idempotent: it finds the monitor by URL/name and updates it instead of creating duplicates. Defaults are:

- HTTPS keyword-free monitor of `https://pawpath.quest/`
- 5-minute interval, 30-second timeout
- alert contact `contactpawpath@gmail.com`
- outage and recovery notifications are handled by UptimeRobot's alert contact settings

The recipient must already be a verified alert contact in UptimeRobot. The script intentionally refuses to create an unalerted monitor. Add and verify the contact in the UptimeRobot dashboard first, then rerun. Never place the API key in repository files, CI output, screenshots, or chat.

For a safe preview, use `DRY_RUN=1`; it still checks that the API key and verified recipient exist but performs no mutation:

```sh
UPTIMEROBOT_API_KEY='...' DRY_RUN=1 node ops/uptimerobot.mjs
```

Optional environment overrides are `MONITOR_URL`, `MONITOR_NAME`, and `ALERT_EMAIL`.

## Alert-storm guardrails

Use one monitor only. Keep the 300-second interval and configure UptimeRobot's alert contact to notify on a state transition (down and back up), not on every failed probe. Do not add a second monitor or test against the owner mailbox. To verify delivery, use UptimeRobot's own contact test after setup and record the result in the task/incident log; do not intentionally take the production site offline.

## Current availability check

At the time this setup was prepared, `curl -sS -o /dev/null -w '%{http_code} %{time_total}\\n' https://pawpath.quest/` returned HTTP 200. This is an observation, not a substitute for the external monitor.
