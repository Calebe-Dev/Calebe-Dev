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
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/cases/alphacompanyads","/cases/buenoswatertechnology","/cases/esquadriasmartins","/cases/grupooc","/cases/internetfibraagora","/cases/leadplanodesaude","/cases/linkdedicada","/cases/meupabxemnuvem","/cases/planotimempresa","/contato","/experiencia","/projetos","/servicos","/sobre","/solicitar-projeto","/solicitar-projeto/redirect"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
