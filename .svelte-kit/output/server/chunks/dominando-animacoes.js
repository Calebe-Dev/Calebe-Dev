import "clsx";
function html(value) {
  var html2 = String(value);
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const metadata$2 = {
  "title": "Arquitetura Frontend Escalável",
  "date": "2026-03-20T00:00:00.000Z",
  "excerpt": "Descubra os padrões de arquitetura que utilizo para manter projetos frontend organizados, testáveis e fáceis de escalar a longo prazo.",
  "coverImage": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  "readTime": "7 min"
};
const { title: title$2, date: date$2, excerpt: excerpt$2, coverImage: coverImage$2, readTime: readTime$2 } = metadata$2;
function Arquitetura_frontend_md($$renderer) {
  $$renderer.push(`<h1>Arquitetura Escalável</h1> <p>Em grandes aplicações, a forma como organizamos os componentes, os estados e a lógica de negócios dita o quão fácil será manter o software no futuro.</p> <p>Aqui estão os três pilares que sigo:</p> <ol><li><strong>Componentes Puros vs. Conectados</strong>: Manter a lógica de negócio longe dos componentes visuais.</li> <li><strong>Separação de Preocupações</strong>: Estruturas de pastas como <code>/components</code>, <code>/lib/state</code>, <code>/services</code>.</li> <li><strong>Gerenciamento de Estado Centralizado</strong>: Usando <code>environment.svelte.ts</code> (Runes) no Svelte 5.</li></ol> <p>Estes pilares permitem escalar projetos rapidamente sem o problema de refatoração massiva no futuro.</p>`);
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Arquitetura_frontend_md,
  metadata: metadata$2
}, Symbol.toStringTag, { value: "Module" }));
const metadata$1 = {
  "title": "Design Premium com Tailwind CSS",
  "date": "2026-03-18T00:00:00.000Z",
  "excerpt": "Dicas práticas de como sair do básico e entregar interfaces com padrão global utilizando classes utilitárias.",
  "coverImage": "https://images.unsplash.com/photo-1561736796-0b1d3d62fb6a?auto=format&fit=crop&q=80&w=800",
  "readTime": "4 min"
};
const { title: title$1, date: date$1, excerpt: excerpt$1, coverImage: coverImage$1, readTime: readTime$1 } = metadata$1;
function Design_premium_tailwind_md($$renderer) {
  $$renderer.push(`<h1>Design Premium utilizando Tailwind</h1> <p>Tailwind não serve apenas para prototipar rápido. É possível entregar uma qualidade visual (aesthetics) de nível de agências globais combinando utilities de forma correta.</p> <h2>Segredos para o “Wow Effect”</h2> <ul><li><strong>Typography refinada</strong>: Não use apenas cores sólidas; experimente tons de <code>slate-400</code> para descrições.</li> <li><strong>Glassmorphism verdadeiro</strong>: Combine <code>bg-white/5</code> com <code>backdrop-blur-md</code> e bordas finas <code>border-white/10</code>.</li> <li><strong>Animações e Interações</strong>: Um simples <code>group-hover:translate-x-1</code> faz a diferença para o usuário.</li></ul> <p>Experimente aplicar essas classes no seu próximo painel e veja a diferença.</p>`);
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Design_premium_tailwind_md,
  metadata: metadata$1
}, Symbol.toStringTag, { value: "Module" }));
const metadata = {
  "title": "Dominando Animações no SvelteKit",
  "date": "2026-03-22T00:00:00.000Z",
  "excerpt": "Aprenda como criar interfaces premium com transições fluidas e micro-interações que encantam o usuário.",
  "coverImage": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  "readTime": "5 min"
};
const { title, date, excerpt, coverImage, readTime } = metadata;
function Dominando_animacoes_md($$renderer) {
  $$renderer.push(`<h1>Transições Fluidas no Svelte</h1> <p>Bem-vindo ao meu blog! Esta é uma demonstração de como o conteúdo em <strong>Markdown</strong> será renderizado no novo sistema.
Usando o SvelteKit com <code>mdsvex</code>, podemos facilmente criar posts ricos e fáceis de manter.</p> <h2>O Poder do <code>in:fade</code> e <code>out:fly</code></h2> <p>Svelte torna as animações simples e poderosas. Aqui está um pequeno exemplo:</p> <pre class="language-svelte">${html(`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> fade<span class="token punctuation">,</span> fly <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte/transition'</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> visible<span class="token punctuation">&#125;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">in:</span>fly=</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span> y<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> duration<span class="token operator">:</span> <span class="token number">500</span> <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span></span> <span class="token attr-name"><span class="token namespace">out:</span>fade</span><span class="token punctuation">></span></span>
        Sou um elemento animado!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>`)}</pre> <p>Obrigado por acompanhar! Logo trarei artigos reais sobre as tecnologias que mais uso.</p>`);
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dominando_animacoes_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_2 as _,
  __vite_glob_0_1 as a,
  __vite_glob_0_0 as b
};
