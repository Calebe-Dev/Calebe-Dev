export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".htaccess","ProfileFoto.jpeg","ilustation2.png","ilustration.png","ilustration3.png","logo.png","meta/ favicon.ico","meta/.DS_Store","meta/Logo_icon.png","meta/fallback-square.jpeg","meta/fallback-square.png","meta/google-image.jpeg","meta/google-image.png","meta/og-image.jpeg","meta/og-image.png","meta/twitter-image.jpeg","meta/twitter-image.png","mocap.png","projects/alphacompanyads.com.br.png","projects/blog.bellemodaintima.com.br.png","projects/buenoswatertechnology.com.br.png","projects/esquadriasmartins.com.br.png","projects/grupooc.com.br.ico","projects/internetfibraagora.com.br.png","projects/leadplanodesaude.com.br.png","projects/linkdedicada.com.br.png","projects/meupabxemnuvem.com.br.png","projects/planotimempresa.com.br.png","robots.txt","sitemap.xml"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CBYuSgVl.js",app:"_app/immutable/entry/app.VVbbOdWS.js",imports:["_app/immutable/entry/start.CBYuSgVl.js","_app/immutable/chunks/D7bDE7s5.js","_app/immutable/chunks/DkeT_iWF.js","_app/immutable/chunks/vrsCPnT0.js","_app/immutable/chunks/FiylZbA1.js","_app/immutable/chunks/D5pPKzSo.js","_app/immutable/entry/app.VVbbOdWS.js","_app/immutable/chunks/vrsCPnT0.js","_app/immutable/chunks/FiylZbA1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DkeT_iWF.js","_app/immutable/chunks/CPJ8bTrX.js","_app/immutable/chunks/DL-Tp0oz.js","_app/immutable/chunks/BIJZ0H6C.js","_app/immutable/chunks/D5pPKzSo.js","_app/immutable/chunks/DeyMtwpE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
