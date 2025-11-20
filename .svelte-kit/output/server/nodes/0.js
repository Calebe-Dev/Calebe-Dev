

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C-_xvu9w.js","_app/immutable/chunks/meCwCsT7.js","_app/immutable/chunks/RnlN0VLI.js","_app/immutable/chunks/DUPYk0EA.js","_app/immutable/chunks/DLVJYp8e.js","_app/immutable/chunks/BJfh5lFK.js","_app/immutable/chunks/CKtjK3Kq.js","_app/immutable/chunks/DOYjUfjD.js","_app/immutable/chunks/BQhQx1FZ.js","_app/immutable/chunks/DcEMsUhg.js","_app/immutable/chunks/BA3XDd1H.js"];
export const stylesheets = ["_app/immutable/assets/0.DAROnu7V.css"];
export const fonts = [];
