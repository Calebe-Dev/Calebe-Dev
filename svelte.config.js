import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Deploy como Cloudflare Worker com static assets (ver wrangler.jsonc).
		// See https://svelte.dev/docs/kit/adapter-cloudflare
		adapter: adapter(),
		prerender: {
			// Origem usada no prerender (ex.: url.origin no sitemap.xml)
			origin: 'https://calebearaujo.com.br',
			// Os cards de compartilhamento são gerados a partir do build (npm run cards): numa página
			// nova o card ainda não existe no primeiro build. Só esse caso vira aviso; o resto é erro.
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/images/compartilhamento/')) return console.warn(`aviso: ${message}`);
				throw new Error(message);
			}
		}
	}
};

export default config;
