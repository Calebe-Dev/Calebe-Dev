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
