#!/usr/bin/env bash
set -euo pipefail

APP_NAME="shell-plus-plus-webhook"
INSTALL_DIR="/opt/${APP_NAME}"
SERVICE_NAME="${APP_NAME}.service"
SERVICE_PATH="/etc/systemd/system/${SERVICE_NAME}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ ! -f "${SCRIPT_DIR}/main.go" ]]; then
  echo "main.go not found. Run this script inside the webhook directory."
  exit 1
fi

if ! command -v go >/dev/null 2>&1; then
  echo "Go is not installed on this server."
  echo "Install it first, then re-run this script."
  exit 1
fi

mkdir -p "${INSTALL_DIR}"

if [[ ! -f "${INSTALL_DIR}/.env" ]]; then
  cp "${SCRIPT_DIR}/.env.example" "${INSTALL_DIR}/.env"
  echo "Created ${INSTALL_DIR}/.env from template."
  echo "Edit that file before sending real GitHub requests."
fi

go build -trimpath -ldflags="-s -w" -o "${INSTALL_DIR}/${APP_NAME}" "${SCRIPT_DIR}"
cp "${SCRIPT_DIR}/shell-plus-plus-webhook.service.example" "${SERVICE_PATH}"

systemctl daemon-reload
systemctl enable --now "${APP_NAME}"

echo
echo "Deployment finished."
echo "Check service status:"
echo "  systemctl status ${APP_NAME}"
echo
echo "Edit config if needed:"
echo "  nano ${INSTALL_DIR}/.env"
echo
echo "After changing .env, restart:"
echo "  systemctl restart ${APP_NAME}"
echo
echo "Health check:"
echo "  curl http://127.0.0.1:18080/healthz"
