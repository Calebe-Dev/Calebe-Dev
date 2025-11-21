export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","ProfileFoto.jpeg","ilustation2.png","ilustration.png","ilustration3.png","logo.png","meta/ favicon.ico","meta/.DS_Store","meta/Logo_icon.png","meta/fallback-square.jpeg","meta/fallback-square.png","meta/google-image.jpeg","meta/google-image.png","meta/og-image.jpeg","meta/og-image.png","meta/twitter-image.jpeg","meta/twitter-image.png","mocap.png","projects/alphacompanyads.svg","projects/blog-bellemodaintima.svg","projects/buenoswatertechnology.svg","projects/esquadriasmartins.svg","projects/grupooc.svg","projects/internetfibraagora.svg","projects/leadplanodesaude.svg","projects/linkdedicada.svg","projects/meupabxemnuvem.svg","projects/planotimempresa.svg","projects/sorocabaindica.svg","robots.txt"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Cn5W5ewX.js",app:"_app/immutable/entry/app.Bgvgrf5C.js",imports:["_app/immutable/entry/start.Cn5W5ewX.js","_app/immutable/chunks/CcP5sIRM.js","_app/immutable/chunks/D7CRARJe.js","_app/immutable/chunks/Dtm3k29A.js","_app/immutable/chunks/rYZSpf_h.js","_app/immutable/chunks/CW5j-4AU.js","_app/immutable/entry/app.Bgvgrf5C.js","_app/immutable/chunks/Dtm3k29A.js","_app/immutable/chunks/rYZSpf_h.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D7CRARJe.js","_app/immutable/chunks/CW5j-4AU.js","_app/immutable/chunks/54raK1O2.js","_app/immutable/chunks/BX5q8Kok.js","_app/immutable/chunks/DIcAPZaR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
