#!/usr/bin/env bash
set -euo pipefail

# Deploy script for static build to Hostinger via rsync+ssh
# Configurable via environment variables (defaults provided for your Hostinger values)

: "${HOSTINGER_SSH_USER:=u623083914}"
: "${HOSTINGER_SSH_HOST:=147.93.38.91}"
: "${HOSTINGER_SSH_PORT:=65002}"
: "${HOSTINGER_SSH_KEY:=${HOME}/.ssh/hostinger_deploy}"
: "${HOSTINGER_KNOWN_HOSTS:=/Users/calebearaujo/GIT/Calebe-Dev/HOSTINGER_KNOWN_HOSTS}"
: "${REMOTE_DIR:=~/public_html}"

echo "Using SSH user: ${HOSTINGER_SSH_USER}@${HOSTINGER_SSH_HOST}:${HOSTINGER_SSH_PORT}"
echo "Using private key: ${HOSTINGER_SSH_KEY}"

if [ ! -f "${HOSTINGER_SSH_KEY}" ]; then
  echo "ERROR: SSH private key not found at ${HOSTINGER_SSH_KEY}" >&2
  exit 1
fi

SSH_OPTS="-i ${HOSTINGER_SSH_KEY} -p ${HOSTINGER_SSH_PORT}"

if [ -f "${HOSTINGER_KNOWN_HOSTS}" ]; then
  SSH_OPTS="${SSH_OPTS} -o UserKnownHostsFile=${HOSTINGER_KNOWN_HOSTS} -o StrictHostKeyChecking=yes"
  echo "Using known_hosts: ${HOSTINGER_KNOWN_HOSTS}"
else
  SSH_OPTS="${SSH_OPTS} -o StrictHostKeyChecking=no"
  echo "Warning: known_hosts file not found at ${HOSTINGER_KNOWN_HOSTS}. Falling back to StrictHostKeyChecking=no"
fi

echo "Running build..."
npm run build

# Create timestamped release
TIMESTAMP=$(date -u +"%Y%m%d%H%M%S")
# Keep tilde unexpanded so the remote shell expands it to the remote user's home
RELEASES_DIR='~/releases'
REMOTE_RELEASE_DIR="$RELEASES_DIR/$TIMESTAMP"

echo "Ensuring remote releases dir exists"
# Try to ensure ssh-agent has the key loaded to avoid passphrase prompts during rsync
if command -v ssh-agent >/dev/null 2>&1 && command -v ssh-add >/dev/null 2>&1; then
  if ! ssh-add -l >/dev/null 2>&1; then
    eval "$(ssh-agent -s)" >/dev/null 2>&1 || true
    ssh-add "${HOSTINGER_SSH_KEY}" || echo "Warning: could not add SSH key to agent (it may require a passphrase)."
  fi
fi

echo "Ensuring remote releases dir exists"
ssh ${SSH_OPTS} ${HOSTINGER_SSH_USER}@${HOSTINGER_SSH_HOST} "mkdir -p ${RELEASES_DIR} && chmod 755 ${RELEASES_DIR}" || true
echo "Syncing ./build/ to remote release ${REMOTE_RELEASE_DIR}"
# Use rsync with explicit ssh options
rsync -avz -e "ssh ${SSH_OPTS}" ./build/ ${HOSTINGER_SSH_USER}@${HOSTINGER_SSH_HOST}:${REMOTE_RELEASE_DIR}/

echo "Activating new release ${TIMESTAMP} on remote host"
ssh ${SSH_OPTS} ${HOSTINGER_SSH_USER}@${HOSTINGER_SSH_HOST} "set -e; mkdir -p ${RELEASES_DIR}; chmod 755 ${RELEASES_DIR}; if [ -e ${REMOTE_DIR} ]; then mv ${REMOTE_DIR} ${REMOTE_DIR}.bak.${TIMESTAMP} || true; fi; mv ${REMOTE_RELEASE_DIR} ${REMOTE_DIR}; # keep 5 latest releases
cd ${RELEASES_DIR}; ls -1dt * | tail -n +6 | xargs -r rm -rf"

echo "Deploy finished."
