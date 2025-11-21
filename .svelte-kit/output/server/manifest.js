export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","ProfileFoto.jpeg","ilustation2.png","ilustration.png","ilustration3.png","logo.png","meta/ favicon.ico","meta/.DS_Store","meta/Logo_icon.png","meta/fallback-square.jpeg","meta/fallback-square.png","meta/google-image.jpeg","meta/google-image.png","meta/og-image.jpeg","meta/og-image.png","meta/twitter-image.jpeg","meta/twitter-image.png","mocap.png","robots.txt"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BSe7r805.js",app:"_app/immutable/entry/app.C3W94GU4.js",imports:["_app/immutable/entry/start.BSe7r805.js","_app/immutable/chunks/BDExq4xP.js","_app/immutable/chunks/DwAkts8l.js","_app/immutable/chunks/Jq-9NrJ-.js","_app/immutable/chunks/DJr5V1Lj.js","_app/immutable/chunks/CExBg1Xz.js","_app/immutable/entry/app.C3W94GU4.js","_app/immutable/chunks/Jq-9NrJ-.js","_app/immutable/chunks/DJr5V1Lj.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DwAkts8l.js","_app/immutable/chunks/CExBg1Xz.js","_app/immutable/chunks/CAiVNhte.js","_app/immutable/chunks/BWR3cmU0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/contato","/experiencia","/projetos","/servicos","/sobre","/solicitar-projeto","/solicitar-projeto/redirect"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
