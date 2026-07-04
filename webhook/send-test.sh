#!/usr/bin/env bash
set -euo pipefail

WEBHOOK_URL="${1:-}"
WEBHOOK_TOKEN="${2:-}"
PAYLOAD_PATH="${3:-./test-payload.json}"

if [[ -z "${WEBHOOK_URL}" ]]; then
  echo "Usage: ./send-test.sh <webhook-url> [webhook-token] [payload-path]"
  exit 1
fi

if [[ -n "${WEBHOOK_TOKEN}" ]]; then
  curl -fsS -X POST "${WEBHOOK_URL}" \
    -H "Content-Type: application/json" \
    -H "X-Webhook-Token: ${WEBHOOK_TOKEN}" \
    --data "@${PAYLOAD_PATH}"
else
  curl -fsS -X POST "${WEBHOOK_URL}" \
    -H "Content-Type: application/json" \
    --data "@${PAYLOAD_PATH}"
fi

echo
