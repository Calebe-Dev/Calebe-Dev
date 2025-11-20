

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "prerender": true,
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B7p4Pf1Q.js","_app/immutable/chunks/DYfATLB4.js","_app/immutable/chunks/DoswvZFi.js","_app/immutable/chunks/Czn7PnwA.js","_app/immutable/chunks/B-6jMhys.js","_app/immutable/chunks/Df6KOkd4.js","_app/immutable/chunks/CflfqPGO.js","_app/immutable/chunks/Dh1TNzdX.js","_app/immutable/chunks/BPBu6kup.js","_app/immutable/chunks/DY45TMSi.js"];
export const stylesheets = ["_app/immutable/assets/0.C4qIQabP.css"];
export const fonts = [];
