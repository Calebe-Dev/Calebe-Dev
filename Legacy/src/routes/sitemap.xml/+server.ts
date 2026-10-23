import { getPosts } from '$lib/utils/blog';

export const prerender = true;

export async function GET({ url }) {
	const posts = await getPosts();

	// Aqui definimos as rotas estáticas do portfólio
	const pages = [
		'',
		'/blog',
		// adicionar outras rotas estáticas principais se houver
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(
			(page) => `
	<url>
		<loc>${url.origin}${page}</loc>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
		.join('')}
	${posts
		.map(
			(post) => `
	<url>
		<loc>${url.origin}/blog/${post.slug}</loc>
		<lastmod>${new Date(post.date).toISOString()}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.7</priority>
	</url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	});
}
