// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			// Bindings do wrangler.jsonc (KV, D1, vars...): tipe aqui ao adicioná-los.
			// ctx, caches e cf já são tipados pelo @sveltejs/adapter-cloudflare.
			env: Record<string, unknown>;
		}
	}
}

export {};
