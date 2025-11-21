

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DtVInJjy.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D7CRARJe.js","_app/immutable/chunks/Dtm3k29A.js","_app/immutable/chunks/rYZSpf_h.js","_app/immutable/chunks/CW5j-4AU.js","_app/immutable/chunks/CDLVMZBJ.js","_app/immutable/chunks/BbGkjn4C.js","_app/immutable/chunks/CDohNHBW.js","_app/immutable/chunks/zx29r9yN.js","_app/immutable/chunks/DrAw2cM1.js","_app/immutable/chunks/BX5q8Kok.js","_app/immutable/chunks/C85HVndP.js","_app/immutable/chunks/54raK1O2.js"];
export const stylesheets = ["_app/immutable/assets/0.Bv_jKQN5.css"];
export const fonts = [];
