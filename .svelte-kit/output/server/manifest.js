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
		client: {start:"_app/immutable/entry/start.Cf-xX0Rm.js",app:"_app/immutable/entry/app.0yon5cwy.js",imports:["_app/immutable/entry/start.Cf-xX0Rm.js","_app/immutable/chunks/DfKr2ToK.js","_app/immutable/chunks/C1JimkIb.js","_app/immutable/chunks/DCp_0Vmr.js","_app/immutable/chunks/BUApaBEI.js","_app/immutable/chunks/D3jk8yKp.js","_app/immutable/entry/app.0yon5cwy.js","_app/immutable/chunks/BZvVX0rb.js","_app/immutable/chunks/C1JimkIb.js","_app/immutable/chunks/CEWRm6GV.js","_app/immutable/chunks/C6KZBwF0.js","_app/immutable/chunks/D3jk8yKp.js","_app/immutable/chunks/rQdzzDfm.js","_app/immutable/chunks/C6IsAgn-.js","_app/immutable/chunks/DCp_0Vmr.js","_app/immutable/chunks/DWitJPJ8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
