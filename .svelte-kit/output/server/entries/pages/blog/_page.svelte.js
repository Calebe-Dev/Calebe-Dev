import { F as ensure_array_like, w as attr } from "../../../chunks/index.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer) {
  const posts = [
    {
      id: 1,
      title: "Como construir landing pages que convertem",
      excerpt: "Dicas práticas de design, performance e copywriting para melhorar conversões."
    },
    {
      id: 2,
      title: "Performance web: otimizações essenciais",
      excerpt: "Melhore LCP, TTFB e First Input Delay com passos aplicáveis."
    },
    {
      id: 3,
      title: "SEO técnico para SvelteKit",
      excerpt: "Boas práticas de SEO técnico aplicadas a apps SvelteKit estáticas."
    }
  ];
  $$renderer.push(`<section class="blog-hero svelte-u4k2t"><div class="blog-container svelte-u4k2t"><div class="section-header svelte-u4k2t"><h1 class="svelte-u4k2t">Blog</h1> <p class="section-subtitle svelte-u4k2t">Artigos, tutoriais e análises sobre desenvolvimento e marketing digital</p></div> <div class="posts-grid svelte-u4k2t"><!--[-->`);
  const each_array = ensure_array_like(posts);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let post = each_array[$$index];
    $$renderer.push(`<article class="post-card svelte-u4k2t"><h3 class="svelte-u4k2t">${escape_html(post.title)}</h3> <p class="svelte-u4k2t">${escape_html(post.excerpt)}</p> <a class="read-more svelte-u4k2t"${attr("href", `/blog/${post.id}`)}>Leia mais</a></article>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  _page as default
};
