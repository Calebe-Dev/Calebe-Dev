// Todo o conteúdo é estático (posts em markdown), então pré-renderizamos as páginas
// no build: o Cloudflare Pages serve o HTML direto da CDN, sem invocar a Function.
export const prerender = true;
