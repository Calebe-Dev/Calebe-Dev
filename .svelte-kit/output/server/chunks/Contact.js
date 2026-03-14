import "clsx";
import { S as SectionSlide, A as AnimatedBlock } from "./AnimatedBlock.js";
function Contact($$renderer) {
  SectionSlide($$renderer, {
    id: "contact",
    class: "relative overflow-hidden bg-black text-white",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="pointer-events-none absolute -bottom-32 -left-20 h-[500px] w-[500px] rounded-full bg-blue-500/12 blur-[120px]"></div> <div class="pointer-events-none absolute -top-28 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/12 blur-[110px]"></div> <div class="container relative z-10 mx-auto px-6 text-center">`);
      AnimatedBlock($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="text-xs uppercase tracking-[0.24em] text-slate-300">Vamos tirar seu projeto do papel</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 80,
        children: ($$renderer3) => {
          $$renderer3.push(`<h2 class="mx-auto mt-4 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">Precisa de um site profissional com SEO técnico e alta performance?</h2>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 150,
        children: ($$renderer3) => {
          $$renderer3.push(`<p class="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Fale comigo para planejar uma solução sob medida para sua empresa, com foco em posicionamento no
				Google, experiência premium e geração de leads qualificados.</p>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 220,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/solicitar-projeto" class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_20px_38px_-22px_rgba(255,255,255,0.95)] transition hover:scale-[1.02]">Solicitar Projeto</a> <a href="mailto:contato@calebearaujo.com.br" class="apple-shell inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/12">contato@calebearaujo.com.br</a></div>`);
        }
      });
      $$renderer2.push(`<!----> `);
      AnimatedBlock($$renderer2, {
        delay: 280,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-300"><a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10">LinkedIn</a> <a href="https://github.com/Calebe-Dev" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10">GitHub</a> <a href="https://instagram.com/calebe_original" target="_blank" rel="noopener noreferrer" class="rounded-full border border-white/15 bg-black/30 px-4 py-2 transition hover:bg-white/10">Instagram</a></div>`);
        }
      });
      $$renderer2.push(`<!----></div>`);
    }
  });
}
export {
  Contact as C
};
