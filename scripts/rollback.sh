#!/usr/bin/env bash
set -euo pipefail

# Rollback to previous release on the Hostinger server
: "${HOSTINGER_SSH_USER:=u623083914}"
: "${HOSTINGER_SSH_HOST:=147.93.38.91}"
: "${HOSTINGER_SSH_PORT:=65002}"
: "${HOSTINGER_SSH_KEY:=${HOME}/.ssh/hostinger_deploy}"
: "${HOSTINGER_KNOWN_HOSTS:=/Users/calebearaujo/GIT/Calebe-Dev/HOSTINGER_KNOWN_HOSTS}"
: "${REMOTE_DIR:=~/public_html}"

if [ ! -f "${HOSTINGER_SSH_KEY}" ]; then
  echo "ERROR: SSH private key not found at ${HOSTINGER_SSH_KEY}" >&2
  exit 1
fi

SSH_OPTS="-i ${HOSTINGER_SSH_KEY} -p ${HOSTINGER_SSH_PORT}"
if [ -f "${HOSTINGER_KNOWN_HOSTS}" ]; then
  SSH_OPTS="${SSH_OPTS} -o UserKnownHostsFile=${HOSTINGER_KNOWN_HOSTS} -o StrictHostKeyChecking=yes"
else
  SSH_OPTS="${SSH_OPTS} -o StrictHostKeyChecking=no"
fi

echo "Rolling back to previous release on ${HOSTINGER_SSH_HOST}"
ssh ${SSH_OPTS} ${HOSTINGER_SSH_USER}@${HOSTINGER_SSH_HOST} 'bash -s' <<'REMOTE_SCRIPT'
set -e
RELEASES_DIR=~/releases
REMOTE_DIR=~/public_html
if [ ! -d "$RELEASES_DIR" ]; then
  echo 'No releases directory found'
  exit 1
fi
PREV=$(ls -1dt "$RELEASES_DIR"/* 2>/dev/null | sed -n '2p')
if [ -z "$PREV" ]; then
  echo 'No previous release found'
  exit 1
fi
TIMESTAMP=$(date -u +%s)
if [ -e "$REMOTE_DIR" ]; then
  mv "$REMOTE_DIR" "$REMOTE_DIR.rollback.${TIMESTAMP}" || true
fi
mv "$PREV" "$REMOTE_DIR"
echo 'Rollback completed'
ls -1dt "$RELEASES_DIR"/* | tail -n +6 | xargs -r rm -rf
REMOTE_SCRIPT
