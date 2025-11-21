

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Cl9Zdvhs.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D7CRARJe.js","_app/immutable/chunks/Dtm3k29A.js","_app/immutable/chunks/rYZSpf_h.js","_app/immutable/chunks/CW5j-4AU.js","_app/immutable/chunks/CcP5sIRM.js","_app/immutable/chunks/BbGkjn4C.js","_app/immutable/chunks/CDohNHBW.js","_app/immutable/chunks/zx29r9yN.js","_app/immutable/chunks/DrAw2cM1.js","_app/immutable/chunks/BX5q8Kok.js","_app/immutable/chunks/C85HVndP.js"];
export const stylesheets = ["_app/immutable/assets/0.B-e5aC9k.css"];
export const fonts = [];
