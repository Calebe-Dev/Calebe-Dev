
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/blog" | "/cases" | "/cases/alphacompanyads" | "/cases/buenoswatertechnology" | "/cases/esquadriasmartins" | "/cases/grupooc" | "/cases/internetfibraagora" | "/cases/leadplanodesaude" | "/cases/linkdedicada" | "/cases/meupabxemnuvem" | "/cases/planotimempresa" | "/contato" | "/experiencia" | "/projetos" | "/servicos" | "/sobre" | "/solicitar-projeto" | "/solicitar-projeto/redirect";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/blog": Record<string, never>;
			"/cases": Record<string, never>;
			"/cases/alphacompanyads": Record<string, never>;
			"/cases/buenoswatertechnology": Record<string, never>;
			"/cases/esquadriasmartins": Record<string, never>;
			"/cases/grupooc": Record<string, never>;
			"/cases/internetfibraagora": Record<string, never>;
			"/cases/leadplanodesaude": Record<string, never>;
			"/cases/linkdedicada": Record<string, never>;
			"/cases/meupabxemnuvem": Record<string, never>;
			"/cases/planotimempresa": Record<string, never>;
			"/contato": Record<string, never>;
			"/experiencia": Record<string, never>;
			"/projetos": Record<string, never>;
			"/servicos": Record<string, never>;
			"/sobre": Record<string, never>;
			"/solicitar-projeto": Record<string, never>;
			"/solicitar-projeto/redirect": Record<string, never>
		};
		Pathname(): "/" | "/blog" | "/blog/" | "/cases" | "/cases/" | "/cases/alphacompanyads" | "/cases/alphacompanyads/" | "/cases/buenoswatertechnology" | "/cases/buenoswatertechnology/" | "/cases/esquadriasmartins" | "/cases/esquadriasmartins/" | "/cases/grupooc" | "/cases/grupooc/" | "/cases/internetfibraagora" | "/cases/internetfibraagora/" | "/cases/leadplanodesaude" | "/cases/leadplanodesaude/" | "/cases/linkdedicada" | "/cases/linkdedicada/" | "/cases/meupabxemnuvem" | "/cases/meupabxemnuvem/" | "/cases/planotimempresa" | "/cases/planotimempresa/" | "/contato" | "/contato/" | "/experiencia" | "/experiencia/" | "/projetos" | "/projetos/" | "/servicos" | "/servicos/" | "/sobre" | "/sobre/" | "/solicitar-projeto" | "/solicitar-projeto/" | "/solicitar-projeto/redirect" | "/solicitar-projeto/redirect/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.htaccess" | "/ProfileFoto.jpeg" | "/ilustation2.png" | "/ilustration.png" | "/ilustration3.png" | "/logo.png" | "/meta/ favicon.ico" | "/meta/.DS_Store" | "/meta/Logo_icon.png" | "/meta/fallback-square.jpeg" | "/meta/fallback-square.png" | "/meta/google-image.jpeg" | "/meta/google-image.png" | "/meta/og-image.jpeg" | "/meta/og-image.png" | "/meta/twitter-image.jpeg" | "/meta/twitter-image.png" | "/mocap.png" | "/projects/alphacompanyads.svg" | "/projects/blog-bellemodaintima.svg" | "/projects/buenoswatertechnology.svg" | "/projects/esquadriasmartins.svg" | "/projects/grupooc.svg" | "/projects/internetfibraagora.svg" | "/projects/leadplanodesaude.svg" | "/projects/linkdedicada.svg" | "/projects/meupabxemnuvem.svg" | "/projects/planotimempresa.svg" | "/projects/sorocabaindica.svg" | "/robots.txt" | string & {};
	}
}