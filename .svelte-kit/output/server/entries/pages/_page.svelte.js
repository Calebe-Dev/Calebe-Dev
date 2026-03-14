import { a4 as ensure_array_like, _ as attr, a1 as head } from "../../chunks/index2.js";
import { S as SectionSlide, A as AnimatedBlock } from "../../chunks/AnimatedBlock.js";
import "clsx";
import { e as escape_html } from "../../chunks/context.js";
import { A as About } from "../../chunks/About.js";
import { S as ScrollReveal } from "../../chunks/ScrollReveal.js";
import { S as Services } from "../../chunks/Services.js";
import { E as Experience } from "../../chunks/Experience.js";
import { P as Projects } from "../../chunks/Projects.js";
import { C as Contact } from "../../chunks/Contact.js";
function ParticleBackground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<canvas class="fixed inset-0 pointer-events-none z-0 opacity-25 mix-blend-screen"></canvas>`);
  });
}
function MeshGradient($$renderer) {
  $$renderer.push(`<div class="mesh-wrap svelte-1uf2llu"><div class="mesh-orb orb-a svelte-1uf2llu"></div> <div class="mesh-orb orb-b svelte-1uf2llu"></div> <div class="mesh-orb orb-c svelte-1uf2llu"></div> <div class="mesh-vignette svelte-1uf2llu"></div></div>`);
}
function Hero($$renderer) {
  const highlights = [
    "SEO técnico orientado a resultado",
    "Core Web Vitals acima da média",
    "Design premium com foco em conversão"
  ];
  SectionSlide($$renderer, {
    id: "hero",
    class: "relative z-10 overflow-hidden",
    children: ($$renderer2) => {
      MeshGradient($$renderer2);
      $$renderer2.push(`<!----> `);
      ParticleBackground($$renderer2);
      $$renderer2.push(`<!----> <div class="hero-stage container relative z-10 mx-auto px-6 py-8 text-center svelte-1q37ri0">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<span class="hero-chip inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200 svelte-1q37ri0"><span class="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(41,151,255,0.9)] svelte-1q37ri0"></span> Desenvolvedor Full Stack em Sorocaba</span>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 90,
        children: ($$renderer3) => {
          $$renderer3.push(`<h1 class="mx-auto mt-8 max-w-5xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl svelte-1q37ri0">Design de alta performance <span class="block text-zinc-500 svelte-1q37ri0">para quem busca resultados reais.</span></h1>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 170,
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 sm:text-xl svelte-1q37ri0">Crio experiências digitais <strong class="text-white svelte-1q37ri0">premium</strong> com 
				SEO técnico e performance web avançada para empresas que não aceitam o básico.</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 240,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mx-auto mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3 svelte-1q37ri0"><!--[-->`);
          const each_array = ensure_array_like(highlights);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$renderer3.push(`<div class="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.14] to-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200 backdrop-blur-xl svelte-1q37ri0">${escape_html(item)}</div>`);
          }
          $$renderer3.push(`<!--]--></div>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 300,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row svelte-1q37ri0"><a href="/solicitar-projeto" class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:scale-[1.02] sm:w-auto svelte-1q37ri0">Solicitar Projeto <svg aria-hidden="true" viewBox="0 0 20 20" class="h-4 w-4 svelte-1q37ri0"><path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1q37ri0"></path></svg></a> <a href="#projects" class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-medium text-white transition hover:bg-white/12 sm:w-auto svelte-1q37ri0">Ver estudos de caso</a></div>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 360,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mx-auto mt-14 w-full max-w-5xl svelte-1q37ri0"><div class="hero-device-wrap relative overflow-hidden rounded-[34px] border border-white/12 bg-gradient-to-b from-slate-300/[0.16] via-slate-900/30 to-black/70 p-6 md:p-8 svelte-1q37ri0"><div class="pointer-events-none absolute -left-20 top-4 h-48 w-48 rounded-full bg-blue-400/20 blur-[70px] svelte-1q37ri0"></div> <div class="pointer-events-none absolute -right-24 bottom-2 h-52 w-52 rounded-full bg-indigo-400/20 blur-[80px] svelte-1q37ri0"></div> <div class="relative grid gap-5 md:grid-cols-[1.2fr_0.8fr] svelte-1q37ri0"><div class="rounded-2xl border border-white/10 bg-black/35 p-5 text-left md:p-6 svelte-1q37ri0"><p class="text-xs uppercase tracking-[0.24em] text-slate-400 svelte-1q37ri0">Processo</p> <h2 class="mt-2 text-2xl font-semibold text-white md:text-3xl svelte-1q37ri0">Do briefing ao lançamento com precisão cirúrgica.</h2> <p class="mt-3 text-sm leading-relaxed text-slate-300 md:text-base svelte-1q37ri0">Planejamento estratégico, prototipagem, desenvolvimento full stack, otimização SEO e
								monitoramento de performance desde o primeiro deploy.</p></div> <div class="hero-phone-shell mx-auto flex w-full max-w-[260px] flex-col justify-between rounded-[2rem] border border-white/15 bg-black/45 p-4 shadow-[0_25px_55px_-25px_rgba(0,0,0,0.95)] svelte-1q37ri0"><div class="mx-auto h-1.5 w-16 rounded-full bg-white/20 svelte-1q37ri0"></div> <div class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-blue-300/35 to-indigo-500/10 p-4 svelte-1q37ri0"><p class="text-xs uppercase tracking-[0.18em] text-slate-200 svelte-1q37ri0">Média de entrega</p> <p class="mt-1 text-3xl font-semibold text-white svelte-1q37ri0">95+</p> <p class="text-xs text-slate-300 svelte-1q37ri0">Lighthouse em projetos otimizados</p></div> <div class="mt-3 grid grid-cols-2 gap-2 text-left text-xs text-slate-300 svelte-1q37ri0"><div class="rounded-xl border border-white/10 bg-black/35 p-2 svelte-1q37ri0">CWV</div> <div class="rounded-xl border border-white/10 bg-black/35 p-2 svelte-1q37ri0">SEO</div> <div class="rounded-xl border border-white/10 bg-black/35 p-2 svelte-1q37ri0">UX</div> <div class="rounded-xl border border-white/10 bg-black/35 p-2 svelte-1q37ri0">CRO</div></div></div></div></div></div>`);
        }
      });
      $$renderer2.push(`<!----></div>`);
    }
  });
}
function Skills($$renderer) {
  const skillSets = [
    {
      category: "Frontend e Experiência",
      outcome: "Interfaces rápidas, claras e premium.",
      items: [
        "SvelteKit",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Design System",
        "Acessibilidade"
      ]
    },
    {
      category: "Backend e Dados",
      outcome: "Arquitetura confiável e escalável.",
      items: [
        "Node.js",
        "APIs REST",
        "SQL",
        "Firebase",
        "Observabilidade",
        "Segurança básica"
      ]
    },
    {
      category: "SEO e Growth",
      outcome: "Mais visibilidade e geração de leads.",
      items: [
        "SEO Técnico",
        "Schema.org",
        "Core Web Vitals",
        "Meta Ads",
        "Analytics",
        "CRO"
      ]
    }
  ];
  SectionSlide($$renderer, {
    id: "skills",
    class: "bg-black",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="container relative z-10 mx-auto px-6"><div class="mb-14 text-center">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<span class="text-xs uppercase tracking-[0.22em] text-sky-300">Stack e metodologia</span>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 80,
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Tecnologia aplicada para entregar resultado real.</h2>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 160,
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">Escolha de stack, SEO técnico e estratégia de produto funcionando juntos para aumentar
					performance, autoridade e conversão.</p>`);
        }
      });
      $$renderer2.push(`<!----></div> <div class="grid gap-6 lg:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(skillSets);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let set = each_array[i];
        ScrollReveal($$renderer2, {
          animation: "fade-up",
          delay: i * 100,
          children: ($$renderer3) => {
            $$renderer3.push(`<article class="apple-shell h-full rounded-[30px] p-7"><h3 class="text-2xl font-semibold text-white">${escape_html(set.category)}</h3> <p class="mt-2 text-sm leading-relaxed text-slate-300">${escape_html(set.outcome)}</p> <div class="mt-6 flex flex-wrap gap-2"><!--[-->`);
            const each_array_1 = ensure_array_like(set.items);
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              let item = each_array_1[$$index];
              $$renderer3.push(`<span class="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-slate-200">${escape_html(item)}</span>`);
            }
            $$renderer3.push(`<!--]--></div></article>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
  });
}
function Testimonials($$renderer) {
  const quotes = [
    {
      text: "A nova landing page reduziu ruído no funil e melhorou a qualidade dos leads que chegam ao comercial.",
      author: "Diretoria Comercial",
      role: "Empresa de Telecom"
    },
    {
      text: "Finalmente conseguimos alinhar SEO técnico, velocidade e conversão em uma única estrutura.",
      author: "Coordenação de Marketing",
      role: "Operação B2B"
    },
    {
      text: "Entrega rápida, código limpo e visão de negócio. Não foi só design bonito: trouxe resultado.",
      author: "Gestão de Produto",
      role: "Plataforma Digital"
    }
  ];
  SectionSlide($$renderer, {
    id: "testimonials",
    class: "bg-zinc-950",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="container relative z-10 mx-auto px-6">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mx-auto mb-12 max-w-3xl text-center"><span class="text-xs uppercase tracking-[0.22em] text-slate-300">Prova social</span> <h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Feedback de quem contratou estratégia + execução.</h2></div>`);
        }
      });
      $$renderer2.push(`<!----> <div class="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 no-scrollbar"><!--[-->`);
      const each_array = ensure_array_like(quotes);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let quote = each_array[i];
        $$renderer2.push(`<article class="apple-shell min-h-[220px] w-[80vw] max-w-[400px] flex-shrink-0 snap-center rounded-[32px] p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-[1.01]"><p class="text-lg font-medium leading-relaxed text-white">"${escape_html(quote.text)}"</p> <div class="mt-8 flex items-center gap-4"><div class="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10"></div> <div><p class="text-xs font-bold text-white tracking-wide">${escape_html(quote.author)}</p> <p class="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-0.5">${escape_html(quote.role)}</p></div></div></article>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
  });
}
function SplitDivider($$renderer, $$props) {
  let { title, subtitle, buttonText, href } = $$props;
  $$renderer.push(`<section class="apple-gridline relative flex min-h-[52svh] snap-start flex-col items-center justify-center overflow-hidden bg-zinc-950 py-16 text-white md:py-20"><div class="pointer-events-none absolute inset-0"><div class="absolute left-[16%] top-[18%] h-44 w-44 rounded-full bg-blue-300/12 blur-[90px]"></div> <div class="absolute right-[18%] bottom-[20%] h-40 w-40 rounded-full bg-indigo-300/12 blur-[86px]"></div></div> <div class="container relative z-10 px-6 text-center">`);
  AnimatedBlock($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-black/30 px-6 py-10 md:px-10"><h2 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl">${escape_html(title)}</h2> `);
      if (subtitle) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">${escape_html(subtitle)}</p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (buttonText && href) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mt-8"><a${attr("href", href)} class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/12">${escape_html(buttonText)} <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Calebe Araújo | Design de Alta Performance &amp; SEO Técnico</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Transformando visão em realidade com sites premium, SEO técnico e performance web avançada. Especialista em landing pages de alta conversão e aplicações web Apple-like."/> <meta name="keywords" content="desenvolvedor full stack, design premium, apple-like ui, seo técnico sorocaba, sites de alta performance, landing pages conversão"/>`);
  });
  $$renderer.push(`<main class="bg-black">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  About($$renderer);
  $$renderer.push(`<!----> `);
  Services($$renderer);
  $$renderer.push(`<!----> `);
  SplitDivider($$renderer, {
    title: "Engenharia que converte.",
    subtitle: "Sua presença digital construída com precisão técnica e foco total em resultados de negócio."
  });
  $$renderer.push(`<!----> `);
  Projects($$renderer);
  $$renderer.push(`<!----> `);
  SplitDivider($$renderer, {
    title: "Velocidade é posicionamento.",
    subtitle: "Arquitetura moderna e Core Web Vitals otimizados para garantir a melhor experiência e ranking."
  });
  $$renderer.push(`<!----> `);
  Skills($$renderer);
  $$renderer.push(`<!----> `);
  Experience($$renderer);
  $$renderer.push(`<!----> `);
  Testimonials($$renderer);
  $$renderer.push(`<!----> `);
  Contact($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
