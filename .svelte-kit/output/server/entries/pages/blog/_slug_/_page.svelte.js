import { G as head, F as attr, J as bind_props } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} - Calebe Araujo Blog</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.meta.excerpt)}/> `);
      if (data.meta.coverImage) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta property="og:image"${attr("content", data.meta.coverImage)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<article class="min-h-screen pt-32 pb-24 relative bg-slate-900 overflow-hidden"><div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div> <div class="container mx-auto px-6 max-w-4xl relative z-10"><a href="/blog" class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-widest font-medium"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg> Todos os Artigos</a> <header class="mb-12"><div class="flex flex-wrap items-center gap-4 text-xs text-white/60 uppercase tracking-widest font-medium mb-6"><span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">${escape_html(new Date(data.meta.date).toLocaleDateString("pt-BR", { month: "long", day: "numeric", year: "numeric" }))}</span> `);
    if (data.meta.readTime) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${escape_html(data.meta.readTime)}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-100 mb-6 tracking-tight leading-tight">${escape_html(data.meta.title)}</h1> `);
    if (data.meta.coverImage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mt-10 relative border border-white/5"><img${attr("src", data.meta.coverImage)}${attr("alt", data.meta.title)} class="w-full h-full object-cover"/> <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent mix-blend-overlay"></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> <div class="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-2xl prose-pre:bg-slate-800/50 prose-pre:border prose-pre:border-white/10"><!---->`);
    data.content?.($$renderer2, {});
    $$renderer2.push(`<!----></div></div></article>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
