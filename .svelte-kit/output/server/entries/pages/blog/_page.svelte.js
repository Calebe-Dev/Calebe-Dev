import { a1 as head, a4 as ensure_array_like, _ as attr } from "../../../chunks/index2.js";
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
  head("u4k2t", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Blog | SEO, Performance Web e Desenvolvimento</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Artigos sobre desenvolvimento full stack, SEO técnico, performance web e estratégias de conversão para projetos digitais."/>`);
  });
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
