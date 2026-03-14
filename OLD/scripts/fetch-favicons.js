#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '..');
const projectsFile = path.join(repoRoot, 'src', 'lib', 'components', 'Projects.svelte');
const outStatic = path.join(repoRoot, 'static', 'projects');
const thumbsJsonOut = path.join(repoRoot, 'src', 'lib', 'data', 'project-thumbs.json');

mkdirSync(outStatic, { recursive: true });
await fs.mkdir(path.dirname(thumbsJsonOut), { recursive: true });

async function readProjectsFile() {
  const content = await fs.readFile(projectsFile, 'utf8');
  return content;
}

function extractUrls(fileContent) {
  const urls = [];
  // match patterns like: url: "https://example.com/"
  const regex = /url:\s*"(https?:\/\/[^"']+)"/g;
  let m;
  while ((m = regex.exec(fileContent)) !== null) {
    urls.push(m[1]);
  }
  return Array.from(new Set(urls));
}

function domainForUrl(siteUrl) {
  try {
    const u = new URL(siteUrl);
    return u.hostname.replace(/[:@]/g, '-');
  } catch (e) {
    return siteUrl.replace(/[^a-z0-9\.\-]/gi, '_');
  }
}

async function download(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    const contentType = res.headers.get('content-type') || '';
    return { buf, contentType, url: res.url };
  } catch (e) {
    return null;
  }
}

async function tryFetchFavicon(origin) {
  const candidates = [
    '/favicon-32x32.png',
    '/favicon-16x16.png',
    '/favicon.ico',
    '/apple-touch-icon.png',
    '/apple-touch-icon-precomposed.png',
    '/manifest.json'
  ];

  for (const pathCandidate of candidates) {
    const url = origin.replace(/\/$/, '') + pathCandidate;
    const r = await download(url);
    if (r && r.contentType.startsWith('image/')) return { res: r, source: url };
  }

  // fallback: Google's favicon service
  const google = `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(origin)}`;
  const r = await download(google);
  if (r && r.contentType.startsWith('image/')) return { res: r, source: google };

  return null;
}

function extFromContentType(contentType, originalUrl) {
  if (contentType.includes('svg')) return '.svg';
  if (contentType.includes('png')) return '.png';
  if (contentType.includes('jpeg')) return '.jpg';
  if (contentType.includes('gif')) return '.gif';
  if (contentType.includes('icon') || originalUrl.endsWith('.ico')) return '.ico';
  return '.png';
}

async function main() {
  console.log('fetch-favicons: parsing', projectsFile);
  const content = await readProjectsFile();
  const urls = extractUrls(content);
  console.log(`found ${urls.length} project urls`);

  const map = {};

  for (const siteUrl of urls) {
    try {
      const origin = new URL(siteUrl).origin;
      const domain = domainForUrl(siteUrl);
      console.log('fetch-favicons: trying', origin);
      const found = await tryFetchFavicon(origin);
      if (found) {
        const ext = extFromContentType(found.res.contentType, found.res.url);
        const filename = `${domain}${ext}`;
        const outPath = path.join(outStatic, filename);
        await fs.writeFile(outPath, found.res.buf);
        map[siteUrl] = `/projects/${filename}`;
        console.log('saved', outPath);
      } else {
        console.log('no favicon found for', origin);
      }
    } catch (e) {
      console.error('error handling', siteUrl, e);
    }
  }

  await fs.writeFile(thumbsJsonOut, JSON.stringify(map, null, 2));
  console.log('wrote thumbs json to', thumbsJsonOut);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
