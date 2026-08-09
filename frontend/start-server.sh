#!/usr/bin/env bash
# PawPath static server launcher — starts the hardened serve-node.mjs
# detached from any shell so it survives session/logoff (no SIGHUP death).
#
# Usage:  bash start-server.sh          (starts if not already running)
#         bash start-server.sh restart  (kills existing + starts fresh)
set -u
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG="/tmp/pawpath-server.log"
PIDFILE="/tmp/pawpath-server.pid"

# Kill any existing server on port 3000 (graceful then forceful).
stop_existing() {
  local old
  old="$(pgrep -f 'node serve-node.mjs' || true)"
  if [ -n "$old" ]; then
    echo "Stopping existing server (pid: $old)..."
    kill $old 2>/dev/null || true
    sleep 1
    kill -9 $old 2>/dev/null || true
  fi
}

if [ "${1:-}" = "restart" ]; then
  stop_existing
fi

# Don't start a second instance if one is already listening.
if pgrep -f 'node serve-node.mjs' >/dev/null 2>&1; then
  echo "Server already running (pid: $(pgrep -f 'node serve-node.mjs')). Use 'restart' to reload."
  exit 0
fi

cd "$DIR"
# setsid = new session (detaches from controlling terminal / shell SIGHUP)
setsid bash -c "node serve-node.mjs > '$LOG' 2>&1" < /dev/null &
NEWPID=$!
echo "$NEWPID" > "$PIDFILE"
disown 2>/dev/null || true
sleep 2

if curl -sf -o /dev/null http://localhost:3000/; then
  echo "PawPath is LIVE on http://localhost:3000 (pid: $NEWPID, log: $LOG)"
else
  echo "WARN: server started but port 3000 not responding yet. Check $LOG"
  cat "$LOG" 2>/dev/null
fi
