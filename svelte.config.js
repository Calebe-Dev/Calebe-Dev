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
			origin: 'https://calebearaujo.com.br'
		}
	}
};

export default config;
