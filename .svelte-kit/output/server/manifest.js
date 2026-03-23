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
		client: {start:"_app/immutable/entry/start.hpde9D6o.js",app:"_app/immutable/entry/app.Bh0FSrSK.js",imports:["_app/immutable/entry/start.hpde9D6o.js","_app/immutable/chunks/h5M4bC16.js","_app/immutable/chunks/BqZ4PB0F.js","_app/immutable/chunks/DVo-wBgY.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/BZ-t1UF3.js","_app/immutable/entry/app.Bh0FSrSK.js","_app/immutable/chunks/BFFpLJ0y.js","_app/immutable/chunks/BqZ4PB0F.js","_app/immutable/chunks/DyCXBryD.js","_app/immutable/chunks/4vlF8PZU.js","_app/immutable/chunks/BZ-t1UF3.js","_app/immutable/chunks/DPX2TOQM.js","_app/immutable/chunks/CqZo5WDi.js","_app/immutable/chunks/DVo-wBgY.js","_app/immutable/chunks/CSzjZZ41.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
