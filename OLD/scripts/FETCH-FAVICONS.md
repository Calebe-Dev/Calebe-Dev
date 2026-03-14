# fetch-favicons script

This document explains how `scripts/fetch-favicons.js` works and how to run it manually.

What it does
- Parses `src/lib/components/Projects.svelte` and extracts project `url` values.
- Attempts to download a favicon/icon for each domain by checking common icon paths (`/favicon-32x32.png`, `/favicon.ico`, `/apple-touch-icon.png`, etc.).
- Falls back to Google favicon service (`https://www.google.com/s2/favicons`) if no local icon is available.
- Saves downloaded files to `static/projects/` and writes a mapping JSON to `src/lib/data/project-thumbs.json`:
  {
    "https://example.com/": "/projects/example.com.png",
    ...
  }

Why it's no longer run during `npm run build`
- Downloading assets for every domain can slow down builds and may be unreliable (network, remote hosts, rate limits).
- The project now runs the script manually so you can control when assets are fetched and commit the results to the repo for stable builds.

How to run (manual)
- From the repository root run:

```bash
npm run fetch-favicons
```

- Or run directly with node:

```bash
node ./scripts/fetch-favicons.js
```

What to do after running
- Inspect `static/projects/` for generated images and `src/lib/data/project-thumbs.json` for the mapping.
- If the results look good, commit the generated files (especially `static/projects/*` and `src/lib/data/project-thumbs.json`) to keep builds fast and avoid network requests during CI.

CI / Automation options
- If you want CI to refresh favicons occasionally, you can add a job that runs `npm run fetch-favicons` and commits the updated assets back to the repo. Be cautious with credentials and CI tokens.
- Alternatively, run the script on your machine before deploying and push the generated assets.

Troubleshooting
- If a favicon download fails, check the script output for the domain and try opening the favicon URL in the browser.
- Some sites do not allow hotlinking or return non-image responses; in those cases you may want to manually provide a `thumbnail` entry in `Projects.svelte` or place a replacement file under `static/projects/` and update the mapping JSON.

Customization
- To prefer higher-resolution icons, modify `scripts/fetch-favicons.js` to test more candidate paths (e.g. `/.well-known/apple-app-site-association` or specific `favicon-64x64.png`), or add post-processing with `sharp` to standardize sizes.

Security & Privacy
- The script performs HTTP requests to external domains. Run it locally or from a trusted environment. If you need to avoid external requests from CI, run the script locally and commit the downloaded assets.

If you want, I can:
- Add a `--ci` flag that skips Google fallback (useful for air-gapped environments),
- Add size-normalization using `sharp` (requires installing `sharp`),
- Or add a log file to summarize which icons were skipped.

