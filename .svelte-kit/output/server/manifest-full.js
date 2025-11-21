export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","ProfileFoto.jpeg","ilustation2.png","ilustration.png","ilustration3.png","logo.png","meta/ favicon.ico","meta/.DS_Store","meta/Logo_icon.png","meta/fallback-square.jpeg","meta/fallback-square.png","meta/google-image.jpeg","meta/google-image.png","meta/og-image.jpeg","meta/og-image.png","meta/twitter-image.jpeg","meta/twitter-image.png","mocap.png","projects/alphacompanyads.com.br.png","projects/alphacompanyads.svg","projects/blog-bellemodaintima.svg","projects/blog.bellemodaintima.com.br.png","projects/buenoswatertechnology.com.br.png","projects/buenoswatertechnology.svg","projects/esquadriasmartins.com.br.png","projects/esquadriasmartins.svg","projects/grupooc.com.br.ico","projects/grupooc.svg","projects/internetfibraagora.com.br.png","projects/internetfibraagora.svg","projects/leadplanodesaude.com.br.png","projects/leadplanodesaude.svg","projects/linkdedicada.com.br.png","projects/linkdedicada.svg","projects/meupabxemnuvem.com.br.png","projects/meupabxemnuvem.svg","projects/planotimempresa.com.br.png","projects/planotimempresa.svg","projects/sorocabaindica.svg","robots.txt"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.plnrPCXc.js",app:"_app/immutable/entry/app.B1i9l-pW.js",imports:["_app/immutable/entry/start.plnrPCXc.js","_app/immutable/chunks/ppCbhm-l.js","_app/immutable/chunks/BQ-8odts.js","_app/immutable/chunks/BoNEu6__.js","_app/immutable/chunks/VkehP8I8.js","_app/immutable/chunks/B6Yiry-_.js","_app/immutable/entry/app.B1i9l-pW.js","_app/immutable/chunks/BoNEu6__.js","_app/immutable/chunks/VkehP8I8.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BQ-8odts.js","_app/immutable/chunks/B6Yiry-_.js","_app/immutable/chunks/DofdESeO.js","_app/immutable/chunks/BEYkUxaj.js","_app/immutable/chunks/DUt7M4K0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cases/alphacompanyads",
				pattern: /^\/cases\/alphacompanyads\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cases/buenoswatertechnology",
				pattern: /^\/cases\/buenoswatertechnology\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/cases/esquadriasmartins",
				pattern: /^\/cases\/esquadriasmartins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/cases/grupooc",
				pattern: /^\/cases\/grupooc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/cases/internetfibraagora",
				pattern: /^\/cases\/internetfibraagora\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/cases/leadplanodesaude",
				pattern: /^\/cases\/leadplanodesaude\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/cases/linkdedicada",
				pattern: /^\/cases\/linkdedicada\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/cases/meupabxemnuvem",
				pattern: /^\/cases\/meupabxemnuvem\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/cases/planotimempresa",
				pattern: /^\/cases\/planotimempresa\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/contato",
				pattern: /^\/contato\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/experiencia",
				pattern: /^\/experiencia\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/projetos",
				pattern: /^\/projetos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/servicos",
				pattern: /^\/servicos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/sobre",
				pattern: /^\/sobre\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/solicitar-projeto",
				pattern: /^\/solicitar-projeto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/solicitar-projeto/redirect",
				pattern: /^\/solicitar-projeto\/redirect\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
