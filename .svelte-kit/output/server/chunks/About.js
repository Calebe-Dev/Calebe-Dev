import { a4 as ensure_array_like } from "./index2.js";
import { S as SectionSlide, A as AnimatedBlock } from "./AnimatedBlock.js";
import { S as ScrollReveal } from "./ScrollReveal.js";
import { e as escape_html } from "./context.js";
function About($$renderer) {
  const pillars = [
    {
      title: "Estratégia orientada a negócio",
      desc: "Cada linha de código existe para aumentar clareza da oferta, tráfego qualificado e taxa de conversão."
    },
    {
      title: "Engenharia de performance",
      desc: "Arquitetura leve, experiência fluida e otimizações contínuas para manter velocidade e escala."
    },
    {
      title: "SEO técnico na base",
      desc: "Semântica, dados estruturados e arquitetura de informação para ampliar alcance orgânico."
    }
  ];
  SectionSlide($$renderer, {
    id: "about",
    class: "relative overflow-hidden bg-zinc-950",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]"></div> <div class="container relative z-10 mx-auto px-6"><div class="grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="apple-shell relative overflow-hidden rounded-[34px] p-6 md:p-8"><div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,196,255,0.25),transparent_40%)]"></div> <div class="relative"><p class="text-xs uppercase tracking-[0.22em] text-slate-300">Perfil profissional</p> <h2 class="mt-3 text-3xl font-semibold text-white md:text-4xl">Desenvolvedor Full Stack com visão de produto e marketing.</h2> <p class="mt-4 text-base leading-relaxed text-slate-300">Sou o Calebe Araújo e atuo na interseção entre desenvolvimento web, SEO e growth. Meu foco é
							entregar projetos que performam bem no Google, carregam rápido e convertem melhor.</p> <div class="mt-6 grid gap-3 sm:grid-cols-3"><div class="apple-shell rounded-2xl p-4"><p class="text-xs uppercase tracking-[0.16em] text-slate-400">Especialidade</p> <p class="mt-2 text-lg font-semibold text-white">Sites de alta conversão</p></div> <div class="apple-shell rounded-2xl p-4"><p class="text-xs uppercase tracking-[0.16em] text-slate-400">Stack</p> <p class="mt-2 text-lg font-semibold text-white">SvelteKit + TypeScript</p></div> <div class="apple-shell rounded-2xl p-4"><p class="text-xs uppercase tracking-[0.16em] text-slate-400">Objetivo</p> <p class="mt-2 text-lg font-semibold text-white">Tráfego + Receita</p></div></div></div></div>`);
        }
      });
      $$renderer2.push(`<!----> <div class="space-y-4"><!--[-->`);
      const each_array = ensure_array_like(pillars);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let pillar = each_array[i];
        ScrollReveal($$renderer2, {
          animation: "fade-up",
          delay: i * 90,
          children: ($$renderer3) => {
            $$renderer3.push(`<article class="apple-shell rounded-3xl p-6"><h3 class="text-xl font-semibold text-white">${escape_html(pillar.title)}</h3> <p class="mt-3 text-base leading-relaxed text-slate-300">${escape_html(pillar.desc)}</p></article>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div></div>`);
    }
  });
}
export {
  About as A
};
