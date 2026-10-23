import { SITE_URL, UPDATED } from '$lib/site';

export const prerender = true;

// Todas as páginas do site, descobertas no build: página nova entra no sitemap sozinha.
const paths = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))
	.map((file) => file.replace('/src/routes', '').replace('/+page.svelte', '') || '/')
	.filter((path) => !path.includes('['))
	.sort();

export function GET() {
	const urls = paths
		.map((path) => {
			const loc = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
			return `\t<url>\n\t\t<loc>${loc}</loc>\n\t\t<lastmod>${UPDATED}</lastmod>\n\t</url>`;
		})
		.join('\n');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
}
