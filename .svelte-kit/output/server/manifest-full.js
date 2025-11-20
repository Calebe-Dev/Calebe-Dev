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
		client: {start:"_app/immutable/entry/start.CcaxysrZ.js",app:"_app/immutable/entry/app.CMeB0IFW.js",imports:["_app/immutable/entry/start.CcaxysrZ.js","_app/immutable/chunks/D4__UVfL.js","_app/immutable/chunks/RnlN0VLI.js","_app/immutable/chunks/DUPYk0EA.js","_app/immutable/entry/app.CMeB0IFW.js","_app/immutable/chunks/RnlN0VLI.js","_app/immutable/chunks/DXIsgkxr.js","_app/immutable/chunks/meCwCsT7.js","_app/immutable/chunks/DUPYk0EA.js","_app/immutable/chunks/DiYXVWT5.js","_app/immutable/chunks/DLVJYp8e.js","_app/immutable/chunks/DcEMsUhg.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/solicitar-projeto",
				pattern: /^\/solicitar-projeto\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
