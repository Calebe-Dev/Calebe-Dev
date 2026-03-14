import { a4 as ensure_array_like, Z as attr_class } from "./index2.js";
import { S as SectionSlide, A as AnimatedBlock } from "./AnimatedBlock.js";
import { S as ScrollReveal } from "./ScrollReveal.js";
import { e as escape_html } from "./context.js";
function Experience($$renderer) {
  const experiences = [
    {
      period: "2025 - Presente",
      role: "Especialista em SEO Técnico e Growth",
      company: "Grupo OC",
      location: "Sorocaba, SP",
      desc: "Lidero estratégia digital para múltiplos produtos, com foco em posicionamento orgânico, performance web e geração de leads."
    },
    {
      period: "2024 - 2025",
      role: "Full Stack Developer",
      company: "Alpha Company",
      location: "Salto, SP",
      desc: "Desenvolvimento de plataformas web com foco em velocidade, arquitetura escalável e integração com mídia paga."
    },
    {
      period: "2023 - 2024",
      role: "Web Developer",
      company: "Freelance",
      location: "Remoto",
      desc: "Criação de sites institucionais, landing pages e e-commerces voltados para conversão e crescimento de receita."
    }
  ];
  SectionSlide($$renderer, {
    id: "experience",
    class: "bg-zinc-950",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="container relative z-10 px-6 mx-auto h-full flex flex-col justify-center">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-16">Experiência em desenvolvimento web e performance digital</h2>`);
        }
      });
      $$renderer2.push(`<!----> <div class="relative max-w-4xl mx-auto"><div class="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2"></div> <!--[-->`);
      const each_array = ensure_array_like(experiences);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let exp = each_array[i];
        ScrollReveal($$renderer2, {
          animation: "fade-up",
          delay: i * 100,
          children: ($$renderer3) => {
            $$renderer3.push(`<div${attr_class(`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${i % 2 === 0 ? "md:text-right" : "md:flex-row-reverse md:text-left"}`)}><div class="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-4 border-black z-10 top-2 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> <div class="md:w-1/2 pl-8 md:pl-0 md:pr-12 group"><span class="text-sm font-mono text-blue-400 mb-2 block">${escape_html(exp.period)}</span> <h3 class="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">${escape_html(exp.role)}</h3> <p class="text-gray-400 font-medium mb-4">${escape_html(exp.company)} · <span class="text-gray-500">${escape_html(exp.location)}</span></p> <p class="text-gray-300 text-sm leading-relaxed">${escape_html(exp.desc)}</p></div> <div class="md:w-1/2"></div></div>`);
          }
        });
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
  });
}
export {
  Experience as E
};
