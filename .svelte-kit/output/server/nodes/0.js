

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BIKI2ZLr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ZWcPRhRb.js","_app/immutable/chunks/DunzjtuI.js","_app/immutable/chunks/jj1Do_Im.js","_app/immutable/chunks/JNcXpKh0.js","_app/immutable/chunks/OhANNXqz.js","_app/immutable/chunks/CjSCXOaq.js","_app/immutable/chunks/CobMXeCp.js","_app/immutable/chunks/CTo9Cq_o.js","_app/immutable/chunks/B-szxd9y.js","_app/immutable/chunks/CBJoiQit.js","_app/immutable/chunks/CT1KYfTf.js","_app/immutable/chunks/CZrfVmbm.js"];
export const stylesheets = ["_app/immutable/assets/0.U022rNul.css"];
export const fonts = [];
