

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B2rk3jHM.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BBeyxQVz.js","_app/immutable/chunks/xnhaWRN-.js","_app/immutable/chunks/D-12RO6n.js","_app/immutable/chunks/BQ8J2FXL.js","_app/immutable/chunks/B7UogqnH.js","_app/immutable/chunks/BVk38b1s.js","_app/immutable/chunks/C-02fSCu.js","_app/immutable/chunks/C2bbulF5.js","_app/immutable/chunks/Ri3DUmfy.js","_app/immutable/chunks/DTl2xvRA.js"];
export const stylesheets = ["_app/immutable/assets/0.DTTzUtOX.css"];
export const fonts = [];
