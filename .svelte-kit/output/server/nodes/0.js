

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.JgX9FcnV.js","_app/immutable/chunks/BKlSmntK.js","_app/immutable/chunks/DsR64dm0.js","_app/immutable/chunks/E_I7iHqW.js","_app/immutable/chunks/DahjK_0b.js","_app/immutable/chunks/BTCdwoGo.js","_app/immutable/chunks/DXV0Ug08.js","_app/immutable/chunks/BjGZItPF.js","_app/immutable/chunks/D83-0Uwe.js","_app/immutable/chunks/CS8QwOui.js","_app/immutable/chunks/BnIAhZJw.js","_app/immutable/chunks/dU7khYdp.js"];
export const stylesheets = ["_app/immutable/assets/0.DAROnu7V.css"];
export const fonts = [];
