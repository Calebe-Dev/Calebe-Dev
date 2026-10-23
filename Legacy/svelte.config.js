import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({ extensions: ['.md'] })
	],

	kit: {
		// Build para Cloudflare Pages. O adapter lê o wrangler.jsonc e gera
		// .svelte-kit/cloudflare (assets estáticos + _worker.js + _routes.json).
		// See https://svelte.dev/docs/kit/adapter-cloudflare
		adapter: adapter(),
		prerender: {
			// Origem usada no prerender (ex.: url.origin no sitemap.xml)
			origin: 'https://calebearaujo.com.br',
			handleMissingId: 'ignore'
		}
	}
};

export default config;
