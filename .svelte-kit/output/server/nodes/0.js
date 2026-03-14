

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DqbS5yDo.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DkeT_iWF.js","_app/immutable/chunks/vrsCPnT0.js","_app/immutable/chunks/FiylZbA1.js","_app/immutable/chunks/B0QP_kd-.js","_app/immutable/chunks/DL-Tp0oz.js","_app/immutable/chunks/CqswSlH7.js","_app/immutable/chunks/BIJZ0H6C.js","_app/immutable/chunks/D5pPKzSo.js","_app/immutable/chunks/D7bDE7s5.js","_app/immutable/chunks/StBZpNyY.js","_app/immutable/chunks/BZ0Vb9P4.js","_app/immutable/chunks/BBgRIifC.js","_app/immutable/chunks/DVIZuOUe.js","_app/immutable/chunks/CPJ8bTrX.js"];
export const stylesheets = ["_app/immutable/assets/0.DBLGp6a6.css"];
export const fonts = [];
