export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/profile.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.QtcpNVSl.js",app:"_app/immutable/entry/app.DJRaSET1.js",imports:["_app/immutable/entry/start.QtcpNVSl.js","_app/immutable/chunks/Ds6vAfZE.js","_app/immutable/chunks/Cd-UuXQJ.js","_app/immutable/chunks/CuNB5c0I.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BypBvfie.js","_app/immutable/entry/app.DJRaSET1.js","_app/immutable/chunks/BQPGZ_nt.js","_app/immutable/chunks/Cd-UuXQJ.js","_app/immutable/chunks/DiogmMON.js","_app/immutable/chunks/B7HsS1pN.js","_app/immutable/chunks/BypBvfie.js","_app/immutable/chunks/C0DUxk-Q.js","_app/immutable/chunks/CPx0Kdyg.js","_app/immutable/chunks/CuNB5c0I.js","_app/immutable/chunks/DAwgNrOw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/sitemap.xml"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
