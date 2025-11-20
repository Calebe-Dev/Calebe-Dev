
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
		RouteId(): "/" | "/solicitar-projeto";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/solicitar-projeto": Record<string, never>
		};
		Pathname(): "/" | "/solicitar-projeto" | "/solicitar-projeto/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/ProfileFoto.jpeg" | "/ilustation2.png" | "/ilustration.png" | "/ilustration3.png" | "/logo.png" | "/meta/ favicon.ico" | "/meta/.DS_Store" | "/meta/Logo_icon.png" | "/meta/fallback-square.jpeg" | "/meta/fallback-square.png" | "/meta/google-image.jpeg" | "/meta/google-image.png" | "/meta/og-image.jpeg" | "/meta/og-image.png" | "/meta/twitter-image.jpeg" | "/meta/twitter-image.png" | "/mocap.png" | "/robots.txt" | string & {};
	}
}