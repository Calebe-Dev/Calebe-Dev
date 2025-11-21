

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DD1esHz1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BQ-8odts.js","_app/immutable/chunks/BoNEu6__.js","_app/immutable/chunks/VkehP8I8.js","_app/immutable/chunks/B6Yiry-_.js","_app/immutable/chunks/ppCbhm-l.js","_app/immutable/chunks/BR16yfuT.js","_app/immutable/chunks/Bb_mpvo4.js","_app/immutable/chunks/CZyee-Ls.js","_app/immutable/chunks/9ec_coSU.js","_app/immutable/chunks/BEYkUxaj.js","_app/immutable/chunks/C58IRxks.js","_app/immutable/chunks/DofdESeO.js"];
export const stylesheets = ["_app/immutable/assets/0.U022rNul.css"];
export const fonts = [];
