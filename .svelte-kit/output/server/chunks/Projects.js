import { a4 as ensure_array_like, Z as attr_class, _ as attr } from "./index2.js";
import { S as SectionSlide, A as AnimatedBlock } from "./AnimatedBlock.js";
import { e as escape_html } from "./context.js";
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const projects = [
      {
        category: "Telecom + Growth",
        title: "Grupo OC",
        desc: "Portal institucional com foco em SEO técnico, arquitetura de conteúdo e captação de leads.",
        result: "Melhor posicionamento orgânico e jornada mais clara para contato comercial.",
        stack: ["SvelteKit", "SEO", "Performance"],
        url: "https://grupooc.com.br/",
        tone: "from-blue-500/30 via-cyan-300/10 to-transparent"
      },
      {
        category: "SaaS B2B",
        title: "Meu PABX em Nuvem",
        desc: "Landing page comercial para aquisição com copy orientada à conversão e alta velocidade.",
        result: "Estrutura enxuta para campanhas pagas e melhor qualidade de lead.",
        stack: ["UX", "Meta Ads", "Core Web Vitals"],
        url: "https://meupabxemnuvem.com.br/",
        tone: "from-violet-500/30 via-indigo-300/10 to-transparent"
      },
      {
        category: "Portal Local",
        title: "Sorocaba Indica",
        desc: "Diretório de serviços com estratégia de conteúdo local e otimização para busca.",
        result: "Escalabilidade editorial com base técnica sólida para SEO regional.",
        stack: ["Arquitetura", "Schema", "Conteúdo"],
        url: "https://sorocabaindica.com.br/",
        tone: "from-emerald-500/30 via-lime-300/10 to-transparent"
      },
      {
        category: "Marketing Platform",
        title: "Alpha Ads",
        desc: "Plataforma de marketing orientada a dados, com painel e visão de performance.",
        result: "Fluxo mais eficiente entre mídia paga, mensuração e tomada de decisão.",
        stack: ["Dashboard", "Analytics", "CRO"],
        url: "https://alphacompanyads.com.br/",
        tone: "from-pink-500/30 via-rose-300/10 to-transparent"
      }
    ];
    SectionSlide($$renderer2, {
      id: "projects",
      class: "relative overflow-hidden bg-zinc-950",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="pointer-events-none absolute left-0 top-16 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[90px]"></div> <div class="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[90px]"></div> <div class="container relative z-10 mx-auto px-6"><div class="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div class="max-w-3xl">`);
        AnimatedBlock($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<span class="text-xs uppercase tracking-[0.22em] text-indigo-300">Estudos de caso</span>`);
          }
        });
        $$renderer3.push(`<!----> `);
        AnimatedBlock($$renderer3, {
          delay: 80,
          children: ($$renderer4) => {
            $$renderer4.push(`<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">Projetos reais com impacto em SEO, performance e vendas.</h2>`);
          }
        });
        $$renderer3.push(`<!----> `);
        AnimatedBlock($$renderer3, {
          delay: 160,
          children: ($$renderer4) => {
            $$renderer4.push(`<p class="mt-4 text-lg leading-relaxed text-slate-300">Cada projeto foi pensado como um produto digital completo: estratégia, construção
						técnica e evolução contínua com dados.</p>`);
          }
        });
        $$renderer3.push(`<!----></div> <div class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300">Role para explorar</div></div> <div class="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 no-scrollbar"><!--[-->`);
        const each_array = ensure_array_like(projects);
        for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
          let project = each_array[$$index_1];
          $$renderer3.push(`<article class="apple-shell group relative h-[420px] w-[85vw] max-w-[500px] flex-shrink-0 snap-center overflow-hidden rounded-[32px] transition-all duration-500 hover:scale-[1.01]"><div${attr_class(`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-40 group-hover:opacity-60 transition-opacity`)}></div> <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent"></div> <div class="absolute inset-0 flex flex-col justify-between p-8"><div><span class="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">${escape_html(project.category)}</span> <h3 class="mt-2 text-3xl font-bold tracking-tight text-white">${escape_html(project.title)}</h3> <p class="mt-4 max-w-sm text-sm font-medium leading-relaxed text-zinc-300">${escape_html(project.desc)}</p></div> <div class="space-y-6"><div class="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4"><p class="text-xs font-semibold text-white/90 leading-relaxed">${escape_html(project.result)}</p></div> <div class="flex items-center justify-between"><div class="flex gap-1.5"><!--[-->`);
          const each_array_1 = ensure_array_like(project.stack.slice(0, 2));
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let item = each_array_1[$$index];
            $$renderer3.push(`<span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500">${escape_html(item)}</span> `);
            if (item !== project.stack.slice(0, 2)[project.stack.slice(0, 2).length - 1]) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<span class="text-zinc-800">•</span>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--></div> <a${attr("href", project.url)} target="_blank" rel="noopener noreferrer" class="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-black transition-transform active:scale-95">Ver</a></div></div></div></article>`);
        }
        $$renderer3.push(`<!--]--></div></div>`);
      }
    });
  });
}
export {
  Projects as P
};
