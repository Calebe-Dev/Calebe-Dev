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
		client: {start:"_app/immutable/entry/start.rcrZJd4f.js",app:"_app/immutable/entry/app.kYfs43bq.js",imports:["_app/immutable/entry/start.rcrZJd4f.js","_app/immutable/chunks/Cnfmj6C7.js","_app/immutable/chunks/DsR64dm0.js","_app/immutable/chunks/E_I7iHqW.js","_app/immutable/entry/app.kYfs43bq.js","_app/immutable/chunks/DsR64dm0.js","_app/immutable/chunks/LyQ2TcY6.js","_app/immutable/chunks/BKlSmntK.js","_app/immutable/chunks/E_I7iHqW.js","_app/immutable/chunks/DJvLX6rW.js","_app/immutable/chunks/DahjK_0b.js","_app/immutable/chunks/CS8QwOui.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/solicitar-projeto","/solicitar-projeto/redirect"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
