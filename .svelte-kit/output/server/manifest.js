export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ProfileFoto.jpeg","ilustation2.png","ilustration.png","ilustration3.png","logo.png","meta/ favicon.ico","meta/.DS_Store","meta/Logo_icon.png","meta/fallback-square.jpeg","meta/fallback-square.png","meta/google-image.jpeg","meta/google-image.png","meta/og-image.jpeg","meta/og-image.png","meta/twitter-image.jpeg","meta/twitter-image.png","mocap.png","robots.txt"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DBqhP7ty.js",app:"_app/immutable/entry/app.7Pm64REG.js",imports:["_app/immutable/entry/start.DBqhP7ty.js","_app/immutable/chunks/BPq6C9yf.js","_app/immutable/chunks/DoswvZFi.js","_app/immutable/chunks/Czn7PnwA.js","_app/immutable/entry/app.7Pm64REG.js","_app/immutable/chunks/DoswvZFi.js","_app/immutable/chunks/DQ6Jb7cp.js","_app/immutable/chunks/DYfATLB4.js","_app/immutable/chunks/Czn7PnwA.js","_app/immutable/chunks/DsCpMzb4.js","_app/immutable/chunks/B-6jMhys.js","_app/immutable/chunks/BPBu6kup.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/solicitar-projeto"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
