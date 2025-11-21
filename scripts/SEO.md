SEO helper scripts and notes
==========================

Usage
-----

- Generate a sitemap (writes `static/sitemap.xml`). Set your site URL first:

```bash
# POSIX (bash/zsh)
VITE_SITE_URL="https://example.com" npm run generate-sitemap
```

Notes
-----
- The layout uses `import.meta.env.VITE_SITE_URL` to build canonical and Open Graph URLs. Set `VITE_SITE_URL` in your environment or CI.
- `static/robots.txt` exists; consider adding a `Sitemap: https://your-site.example/sitemap.xml` line to it after you publish the site.
- Commit `static/sitemap.xml` and `static/projects/*` to ensure deterministic builds.
