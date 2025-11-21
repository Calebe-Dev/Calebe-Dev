

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DUW0XrdH.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DwAkts8l.js","_app/immutable/chunks/Jq-9NrJ-.js","_app/immutable/chunks/DJr5V1Lj.js","_app/immutable/chunks/CExBg1Xz.js","_app/immutable/chunks/9RkQud94.js","_app/immutable/chunks/DyducZTZ.js","_app/immutable/chunks/DZ0HL6fQ.js","_app/immutable/chunks/BHuBF3J2.js","_app/immutable/chunks/BK9bXRCP.js","_app/immutable/chunks/BWR3cmU0.js","_app/immutable/chunks/B8WW7rjd.js"];
export const stylesheets = ["_app/immutable/assets/0.B-e5aC9k.css"];
export const fonts = [];
