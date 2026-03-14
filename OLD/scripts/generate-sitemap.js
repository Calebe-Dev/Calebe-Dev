#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://example.com';
const routesDir = path.join(__dirname, '..', 'src', 'routes');
const outDir = path.join(__dirname, '..', 'static');
const outFile = path.join(outDir, 'sitemap.xml');

function isIgnored(name) {
  return name.startsWith('_') || name.startsWith('.') || name === 'lib' || name === 'components';
}

function collectPages(dir) {
  const pages = [];

  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    const hasPage = entries.some(e => e.isFile() && e.name === '+page.svelte');
    if (hasPage) {
      const rel = path.relative(routesDir, current);
      const urlPath = rel === '' ? '/' : '/' + rel.replace(/\\/g, '/');
      pages.push({ path: urlPath, mtime: fs.statSync(path.join(current, '+page.svelte')).mtime });
    }
    for (const e of entries) {
      if (e.isDirectory() && !isIgnored(e.name)) walk(path.join(current, e.name));
    }
  }

  walk(dir);
  return pages;
}

function buildSitemap(pages) {
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  const footer = '</urlset>';
  const items = pages.map(p => {
    const lastmod = p.mtime.toISOString();
    const loc = (SITE_URL.replace(/\/$/, '') + p.path);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  }).join('\n');
  return header + items + '\n' + footer;
}

function main(){
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const pages = collectPages(routesDir);
  if (!pages.length) {
    console.warn('No pages found under src/routes. Sitemap will include root only.');
    pages.push({ path: '/', mtime: new Date() });
  }

  const xml = buildSitemap(pages);
  fs.writeFileSync(outFile, xml, 'utf8');
  console.log('Sitemap written to', outFile);
  console.log('Generated', pages.length, 'entries.');
}

main();
