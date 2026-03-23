import { F as attr, z as stringify, J as bind_props } from "./index2.js";
import { e as escape_html } from "./context.js";
function BlogCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let post = $$props["post"];
    $$renderer2.push(`<a${attr("href", `/blog/${stringify(post.slug)}`)} class="group relative flex flex-col h-full bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 rounded-[2.5rem] p-3 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md"><div class="relative h-60 w-full rounded-[2rem] overflow-hidden">`);
    if (post.coverImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", post.coverImage)}${attr("alt", post.title)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="w-full h-full bg-gradient-to-br from-blue-900/40 to-slate-900/80 backdrop-blur-md"></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div> <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10"><span class="px-4 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-md text-[10px] text-blue-200 border border-blue-500/20 uppercase tracking-widest font-bold shadow-lg">${escape_html(new Date(post.date).toLocaleDateString("pt-BR", { month: "short", day: "2-digit", year: "numeric" }))}</span> `);
    if (post.readTime) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="px-4 py-1.5 rounded-full bg-purple-500/20 backdrop-blur-md text-[10px] text-purple-200 border border-purple-500/20 flex items-center gap-1.5 uppercase tracking-widest font-bold shadow-lg"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${escape_html(post.readTime)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div> <div class="p-6 md:p-8 flex flex-col flex-grow bg-transparent rounded-b-[2rem]"><h3 class="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">${escape_html(post.title)}</h3> <p class="text-sm md:text-base text-slate-400 font-light leading-relaxed mb-6 line-clamp-3">${escape_html(post.excerpt)}</p> <div class="mt-auto pt-4 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest font-bold"><span class="flex items-center gap-2">Ler Artigo Aberto <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-2 transition-transform duration-300 text-blue-400 group-hover:text-white"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span></div></div></a>`);
    bind_props($$props, { post });
  });
}
export {
  BlogCard as B
};
