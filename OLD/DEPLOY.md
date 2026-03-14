## Deploying to Hostinger (SSH) — Local & GitHub Actions

This repository includes scripts to build and safely deploy your static SvelteKit site to Hostinger.

Files added:

Prerequisites

Local deploy
1. Ensure `~/.ssh/hostinger_deploy` exists and is the correct private key.
2. Optionally add it to your macOS Keychain or `ssh-agent`: `ssh-add --apple-use-keychain ~/.ssh/hostinger_deploy`.
3. Make scripts executable (first time only):
```
chmod +x scripts/*.sh
```
4. Build and deploy:
```
npm ci
npm run deploy
```

The deploy script will:

Rollback
1. Use the rollback script to restore the previous release (it will move current public_html to a rollback folder and restore the last release):
```
bash scripts/rollback.sh
```

CI / GitHub Actions
1. Create Secrets in your repository (Settings → Secrets → Actions):
```
HOSTINGER_SSH_HOST = 147.93.38.91
HOSTINGER_SSH_USER = u623083914
HOSTINGER_SSH_PORT = 65002
HOSTINGER_SSH_KEY = (private key content)  # e.g. cat ~/.ssh/hostinger_deploy
HOSTINGER_KNOWN_HOSTS = (content of hostinger_known_hosts)
```
2. Push to `main` — the `deploy-hostinger-ssh.yml` workflow will run and deploy.

Notes
