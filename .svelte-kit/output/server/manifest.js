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
		client: {start:"_app/immutable/entry/start.D00ma3XU.js",app:"_app/immutable/entry/app.Cdi2rLSF.js",imports:["_app/immutable/entry/start.D00ma3XU.js","_app/immutable/chunks/BQ8J2FXL.js","_app/immutable/chunks/BBeyxQVz.js","_app/immutable/chunks/xnhaWRN-.js","_app/immutable/chunks/D-12RO6n.js","_app/immutable/entry/app.Cdi2rLSF.js","_app/immutable/chunks/xnhaWRN-.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BBeyxQVz.js","_app/immutable/chunks/D-12RO6n.js","_app/immutable/chunks/DWsjRxKS.js","_app/immutable/chunks/Ri3DUmfy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
