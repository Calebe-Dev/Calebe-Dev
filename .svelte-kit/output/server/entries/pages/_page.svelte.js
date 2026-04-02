import { w as attr_class, x as ensure_array_like, y as attr_style, z as stringify, F as attr, G as head } from "../../chunks/index2.js";
import "clsx";
import { a as ssr_context, e as escape_html } from "../../chunks/context.js";
import { B as BlogCard } from "../../chunks/BlogCard.js";
import { w as writable } from "../../chunks/index.js";
import { n as noop } from "../../chunks/equality.js";
const now = () => Date.now();
const raf = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (_) => noop()
  ),
  now: () => now(),
  tasks: /* @__PURE__ */ new Set()
};
function loop(callback) {
  let task;
  if (raf.tasks.size === 0) ;
  return {
    promise: new Promise((fulfill) => {
      raf.tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      raf.tasks.delete(task);
    }
  };
}
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
class EnvironmentState {
  dayCycle = "day";
  weather = "sunny";
  mouse = { x: 0, y: 0 };
  scrollProgress = 0;
  isLeftClickActive = false;
  shakeIntensity = 0;
  textBounds = null;
  isScrollLocked = true;
  isShowcaseRunning = false;
  showcaseLabel = "";
  lenis = null;
  collisionMask = { data: null, width: 0, height: 0 };
  async startShowcase() {
    if (this.isShowcaseRunning) return;
    this.isShowcaseRunning = true;
    const steps = [
      { dayCycle: "day", weather: "sunny", label: "Dia Ensolarado" },
      { dayCycle: "day", weather: "rainy", label: "Chuva na Tarde" },
      {
        dayCycle: "night",
        weather: "rainy",
        label: "Noite de Tempestade"
      },
      {
        dayCycle: "night",
        weather: "sunny",
        label: "Noite Estrelada"
      }
    ];
    for (const step of steps) {
      this.showcaseLabel = step.label;
      this.dayCycle = step.dayCycle;
      this.weather = step.weather;
      await new Promise((resolve) => setTimeout(resolve, 3e3));
    }
    this.showcaseLabel = "Sincronizando com seu horário...";
    await new Promise((resolve) => setTimeout(resolve, 1500));
    this.updateCycle();
    this.showcaseLabel = "";
    this.isShowcaseRunning = false;
  }
  constructor() {
  }
  triggerShake() {
    this.shakeIntensity = 15;
  }
  updateCycle() {
    const hour = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getHours();
    this.dayCycle = hour >= 6 && hour < 18 ? "day" : "night";
  }
  registerLenis(instance) {
    this.lenis = instance;
  }
  unregisterLenis() {
    this.lenis = null;
  }
  scrollTo(targetY, durationMs = 1e3) {
    if (this.lenis) {
      this.lenis.scrollTo(targetY, { duration: Math.max(0.15, durationMs / 1e3) });
      return;
    }
    window.scrollTo({ top: targetY, behavior: "auto" });
  }
}
const environment = new EnvironmentState();
function MeshGradient($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isNight = environment.dayCycle === "night";
    $$renderer2.push(`<div${attr_class("mesh-container svelte-ti9d1t", void 0, { "night": isNight })}><div class="blob blob-1 svelte-ti9d1t"></div> <div class="blob blob-2 svelte-ti9d1t"></div> <div class="blob blob-3 svelte-ti9d1t"></div> <div class="blob blob-4 svelte-ti9d1t"></div></div>`);
  });
}
function InteractiveParticles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    onDestroy(() => {
    });
    $$renderer2.push(`<canvas class="particles-canvas svelte-1py22af"></canvas>`);
  });
}
function WeatherOverlay($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let isRainy = environment.weather === "rainy";
    let isSunny = environment.weather === "sunny";
    if (environment.dayCycle === "night" && !isRainy) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="star-field svelte-aaiqny"><!--[-->`);
      const each_array = ensure_array_like(Array(100));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        each_array[$$index];
        $$renderer2.push(`<div class="star svelte-aaiqny"${attr_style(` left: ${stringify(Math.random() * 100)}%; top: ${stringify(Math.random() * 100)}%; transform: scale(${stringify(Math.random() * 0.7 + 0.3)}); animation-delay: ${stringify(Math.random() * 5)}s; `)}></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isRainy) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="rain-container svelte-aaiqny"><!--[-->`);
      const each_array_1 = ensure_array_like(Array(50));
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        each_array_1[$$index_1];
        $$renderer2.push(`<div class="drop svelte-aaiqny"${attr_style(`left: ${stringify(Math.random() * 100)}%; animation-delay: ${stringify(Math.random() * 2)}s; animation-duration: ${stringify(Math.random() * 1 + 0.5)}s;`)}></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isSunny) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="svelte-aaiqny"><div class="sun-flare svelte-aaiqny"></div> <div class="god-rays svelte-aaiqny"></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function DynamicHeroBackground($$renderer) {
  $$renderer.push(`<div class="dynamic-bg svelte-2tp98v">`);
  MeshGradient($$renderer);
  $$renderer.push(`<!----> `);
  InteractiveParticles($$renderer);
  $$renderer.push(`<!----> `);
  WeatherOverlay($$renderer);
  $$renderer.push(`<!----></div>`);
}
function AnimatedHeroText($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { messages = [] } = $$props;
    let currentIndex = 0;
    $$renderer2.push(`<div class="text-container min-h-[400px] flex flex-col items-center justify-center relative svelte-otm1ho"><canvas class="hidden"></canvas> <div class="relative w-full h-48 flex items-center justify-center"><!---->`);
    {
      $$renderer2.push(`<h2${attr_class(`absolute text-fluid-hero font-bold tracking-tight text-center px-4 transition-colors duration-1000 ${stringify(environment.dayCycle === "day" ? "text-slate-900 drop-shadow-sm" : "text-white drop-shadow-2xl")}`)}>${escape_html(messages[currentIndex])}</h2>`);
    }
    $$renderer2.push(`<!----></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function AboutSection($$renderer) {
  $$renderer.push(`<section class="relative py-40 bg-black text-white overflow-hidden" itemscope="" itemtype="https://schema.org/AboutPage"><div class="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(59,130,246,0.1),_transparent_50%)]"></div> <div class="max-w-7xl mx-auto px-8 relative z-10"><div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center"><div class="text-left"><span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Resumo Profissional</span> <h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight text-balance" itemprop="name">Engenharia de Software &amp; <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">Arte Digital</span></h2> <div class="h-1 w-24 bg-blue-600 mb-8"></div></div> <div class="flex flex-col gap-6"><article class="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-all duration-500" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Person"><p class="text-slate-300 font-light leading-relaxed text-lg" itemprop="description">Desenvolvedor Full Stack especializado em ecossistemas **SvelteKit**, **TypeScript** e infraestrutura **Cloudflare**. Atuo na arquitetura de soluções robustas, conectando front-end premium, back-end escalável em **Node.js** e sistemas de **CRM proprietários**. Foco total em performance, **SEO Técnico** e otimização para Answer Engines (**AEO**).</p></article> <div class="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-all duration-500 flex items-center justify-between" itemprop="hasCredential" itemscope="" itemtype="https://schema.org/EducationalOccupationalCredential"><div><h4 class="text-white font-bold text-xl mb-1" itemprop="name">Análise e Desenvolvimento de Sistemas</h4> <p class="text-slate-400 text-sm">Formação Acadêmica (Cursando)</p></div> <div class="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div></div></div></div></div></section>`);
}
function AccessibilitySection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const blocks = [
      {
        tag: "Perspectiva - CID H54",
        title: "O Olhar Clínico para o Contraste",
        text: "Ter baixa visão não é um obstáculo, mas minha maior ferramenta de QA. Isso me força a projetar com uma obsessão natural pela legibilidade e pelo contraste perfeito em qualquer condição de iluminação.",
        icon: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z",
        color: "#3b82f6",
        bgColor: "#020617"
      },
      {
        tag: "Arquitetura Semântica",
        title: "Código que Fala e se Expressa",
        text: "Acessibilidade começa no HTML. Construo aplicações onde a estrutura de dados e a semântica são tão priorizadas quanto a interface visual, garantindo que leitores de tela e tecnologias assistivas naveguem com fluidez.",
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        color: "#10b981",
        bgColor: "#06100c"
      },
      {
        tag: "UX Universal",
        title: "Interfaces Sem Barreiras Digitais",
        text: "Um design de elite é aquele que todos conseguem usar. Foco em interfaces que respeitam a diversidade humana, com foco em navegação por teclado, hierarquia visual clara e padrões de interação intuitivos.",
        icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
        color: "#6366f1",
        bgColor: "#080b1a"
      },
      {
        tag: "Inclusão & Velocidade",
        title: "Acessibilidade é Performance",
        text: "Código acessível é código otimizado. Ao seguir rigorosamente os padrões W3C, minhas aplicações não são apenas inclusivas, mas também mais rápidas, fáceis de indexar pelo Google e sustentáveis a longo prazo.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        color: "#f59e0b",
        bgColor: "#100902"
      }
    ];
    let progress = /* @__PURE__ */ (() => {
      return 0;
    })();
    function getPlateauIntensity(blockIndex, prog) {
      const step = 1 / blocks.length;
      const start = blockIndex * step;
      const end = (blockIndex + 1) * step;
      const center = start + step / 2;
      if (prog < start || prog > end) return 1;
      const dist = Math.abs(prog - center);
      const normDist = dist / (step / 2);
      if (normDist < 0.4) return 0;
      return (normDist - 0.4) / 0.6;
    }
    let currentBgColor = (() => {
      const p = progress;
      const step = 1 / blocks.length;
      const index = Math.min(blocks.length - 2, Math.floor(p / step));
      const localProgress = p % step / step;
      return `color-mix(in srgb, ${blocks[index + 1].bgColor}, ${blocks[index].bgColor} ${100 - localProgress * 100}%)`;
    })();
    let titleIntensity = (() => {
      const p = progress;
      if (p < 0.08) return (0.08 - p) / 0.08;
      if (p > 0.92) return (p - 0.92) / 0.08;
      return 0;
    })();
    function getStableCharVars(charIndex, uniqueSeed = 0) {
      const seed = (charIndex + uniqueSeed) * 41;
      const random = (s) => {
        const x = Math.sin(s) * 1e4;
        return x - Math.floor(x);
      };
      const respMult = 1;
      return `
            --ox: ${(random(seed) - 0.5) * 1400 * respMult}px;
            --oy: ${(random(seed + 1) - 0.5) * 1e3 * respMult}px;
            --oz: ${(random(seed + 2) - 0.5) * 2e3 * respMult}px;
            --rot: ${(random(seed + 3) - 0.5) * 720}deg;
        `;
    }
    $$renderer2.push(`<section class="relative w-full h-[500vh]"${attr_style(`background-color: ${stringify(currentBgColor)};`)}><div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6"><div class="absolute top-12 md:top-20 text-center z-50"><span class="text-blue-500 font-bold uppercase tracking-[0.6em] text-[8px] md:text-[10px] mb-4 block opacity-50">Inclusion by Design</span> <h2 class="text-fluid-section font-black text-white/90 tracking-tighter perspective-[2000px] transform-style-[preserve-3d]"><!--[-->`);
    const each_array = ensure_array_like("Visão Além dos Limites".split(""));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let char = each_array[i];
      $$renderer2.push(`<span class="char svelte-1x8va0i"${attr_style(`${stringify(getStableCharVars(i, 999))} --intensity: ${stringify(titleIntensity)};`)}>${escape_html(char === " " ? " " : char)}</span>`);
    }
    $$renderer2.push(`<!--]--></h2></div> <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"><div class="w-full h-full max-w-6xl max-h-[600px] border border-white/[0.03] rounded-[4rem] flex flex-col items-center justify-center opacity-40"><div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div> <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div></div></div> <div class="relative w-full max-w-6xl aspect-video flex items-center justify-center"><!--[-->`);
    const each_array_1 = ensure_array_like(blocks);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let block = each_array_1[i];
      const intensity = getPlateauIntensity(i, progress);
      const centerAt = i / blocks.length + 1 / (blocks.length * 2);
      const dist = progress - centerAt;
      const absDist = Math.abs(dist);
      const isActive = absDist < 0.12;
      $$renderer2.push(`<div class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-0"${attr_style(` opacity: ${stringify(1 - intensity)}; transform: perspective(2500px) translate3d(0, 0, ${stringify(-absDist * 4e3)}px); filter: blur(${stringify(intensity * 10)}px); pointer-events: ${stringify(isActive ? "all" : "none")}; z-index: ${stringify(Math.floor(100 - absDist * 100))}; `)}><div class="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-3xl shadow-2xl transition-all duration-700"${attr_style(`color: ${stringify(block.color)}; transform: rotate(${stringify(intensity * 45)}deg) scale(${stringify(1 - intensity * 0.5)});`)}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path${attr("d", block.icon)}></path>`);
      if (i === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<circle cx="12" cy="12" r="3"></circle>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></svg></div> <span class="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4">${escape_html(block.tag)}</span> <h3 class="text-fluid-title font-black text-white mb-6 leading-[0.9] tracking-tighter perspective-[1500px] transform-style-[preserve-3d]"><!--[-->`);
      const each_array_2 = ensure_array_like(block.title.split(""));
      for (let idx = 0, $$length2 = each_array_2.length; idx < $$length2; idx++) {
        let char = each_array_2[idx];
        $$renderer2.push(`<span class="char svelte-1x8va0i"${attr_style(`${stringify(getStableCharVars(idx, (i + 1) * 100))} --intensity: ${stringify(intensity)};`)}>${escape_html(char === " " ? " " : char)}</span>`);
      }
      $$renderer2.push(`<!--]--></h3> <p class="text-white/70 text-fluid-body font-light max-w-2xl leading-relaxed text-balance transition-all duration-700"${attr_style(`opacity: ${stringify(1 - intensity)}; transform: translateY(${stringify(intensity * 20)}px);`)}>${escape_html(block.text)}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="absolute bottom-16 flex flex-col items-center gap-4 transition-opacity duration-500"${attr_style(`opacity: ${stringify(progress > 0.05 && progress < 0.95 ? 0.6 : 0)};`)}><div class="w-[1px] h-20 bg-white/5 relative overflow-hidden"><div class="absolute inset-0 bg-blue-500/30 transition-all duration-300 ease-linear shadow-[0_0_15px_#3b82f6]"${attr_style(`height: ${stringify(progress * 100)}%;`)}></div></div> <span class="text-[8px] uppercase tracking-[0.6em] font-black text-white/20 tabular-nums">Inclusão ${escape_html(Math.floor(progress * 100))}%</span></div></div></section>`);
  });
}
function ExperienceSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let innerWidth = 1e3;
    const experiences = [
      {
        period: "2017 - 2022",
        startDate: "2017-01-01",
        endDate: "2022-12-31",
        role: "Consultor de TI & Infraestrutura",
        company: "Projetos Independentes",
        desc: "Liderança técnica em suporte corporativo Nível 2 e 3. Implementação de arquitetura de rede, manutenção de servidores Windows/Linux e consultoria de segurança para clientes finais.",
        color: "bg-amber-500",
        gradient: "from-amber-600/30 to-amber-900/10",
        tag: "Infra & Sec",
        skills: "Networking, Server Management, IT Support"
      },
      {
        period: "Mai 2024 - Fev 2025",
        startDate: "2024-05-01",
        endDate: "2025-02-01",
        role: "Desenvolvedor Full Stack (Estagiário)",
        company: "QIplus",
        desc: "Desenvolvimento de interfaces de alta conversão com SvelteKit e TypeScript, além da criação de documentação técnica. Automação de fluxos de marketing e desenvolvimento de plugins personalizados para ecossistemas WordPress.",
        color: "bg-emerald-500",
        gradient: "from-emerald-600/30 to-emerald-900/10",
        tag: "SvelteKit & Bot",
        skills: "SvelteKit, TypeScript, WordPress, Marketing Automation"
      },
      {
        period: "Fev 2025 - Ago 2025",
        startDate: "2025-02-01",
        endDate: "2025-08-01",
        role: "Web Developer",
        company: "Alpha Company Ads",
        desc: "Arquitetura de soluções web focadas em Business Intelligence (BI). Implementação de SEO técnico avançado e integração de APIs de terceiros para monitoramento de métricas em tempo real.",
        color: "bg-cyan-500",
        gradient: "from-cyan-600/30 to-cyan-900/10",
        tag: "SEO & BI",
        skills: "Technical SEO, BI, API Integration, Analytics"
      },
      {
        period: "Ago 2025 - Atual",
        startDate: "2025-08-01",
        role: "Chief Technology Officer (CTO) / Lead Developer",
        company: "Grupo OC",
        desc: "Gestão da arquitetura de sistemas e liderança técnica. Implementação de ecossistema de microserviços em Node.js e integração profunda com CRM proprietário para escala de leads.",
        color: "bg-fuchsia-600",
        gradient: "from-fuchsia-600/30 to-fuchsia-900/10",
        tag: "Tech Lead / CRM",
        skills: "Node.js, Microservices, System Architecture, Lead Ops"
      },
      {
        period: "Ago 2025 - Atual",
        startDate: "2025-08-01",
        role: "Full Stack Infrastructure Engineer",
        company: "Grupo OC",
        desc: "Engenharia de Cloud e On-premise. Deploy e manutenção de servidores Ubuntu com Cloudflare Tunnel (Zero Trust). Desenvolvimento de sistema CRM+CMS robusto com banco de dados PostgreSQL.",
        color: "bg-indigo-600",
        gradient: "from-indigo-600/30 to-indigo-900/10",
        tag: "DevOps & CRM",
        skills: "Ubuntu Server, Cloudflare Tunnel, Docker, PostgreSQL"
      }
    ];
    let globalProgress = /* @__PURE__ */ (() => {
      return 0;
    })();
    let trackWidth = 2e3;
    let activeIndex = Math.min(experiences.length - 1, Math.floor(globalProgress * experiences.length));
    let activeColor = experiences[activeIndex]?.color || "bg-blue-600";
    $$renderer2.push(`<section class="relative w-full h-[400dvh] bg-neutral-950" itemscope="" itemtype="https://schema.org/Person"><meta itemprop="name" content="Calebe Araujo"/> <div class="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-center bg-neutral-950 transition-colors duration-1000"><div${attr_class(`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full max-w-4xl mx-auto ${stringify(activeColor)} opacity-10 blur-[150px] transition-colors duration-[1500ms] rounded-full pointer-events-none`, "svelte-1fm67og")}></div> <div class="absolute top-4 left-6 md:top-12 md:left-24 z-20"><span class="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block animate-pulse">Evolution</span> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black text-white mix-blend-exclusion">Trajetória</h2></div> <div class="experience-track flex items-center gap-12 md:gap-32 px-[10vw] md:px-[30vw] min-w-max relative z-10 svelte-1fm67og"${attr_style(`--progress: ${stringify(globalProgress)}; --track-diff: ${stringify(trackWidth - innerWidth)}px;`)}><!--[-->`);
    const each_array = ensure_array_like(experiences);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let exp = each_array[i];
      $$renderer2.push(`<div${attr_class(
        `experience-card w-[85vw] md:w-[600px] shrink-0 p-10 md:p-14 rounded-[3rem] border border-white/[0.08] backdrop-blur-2xl transition-all duration-700 ease-out shadow-2xl relative overflow-hidden group ${stringify(i === activeIndex ? "active scale-100 opacity-100 border-white/[0.2]" : "scale-90 opacity-40 grayscale-[50%]")} `,
        "svelte-1fm67og"
      )} itemscope="" itemtype="https://schema.org/WorkExperience" itemprop="hasOccupation"><div${attr_class(`absolute inset-0 bg-gradient-to-br ${stringify(exp.gradient)} transition-opacity duration-300`, "svelte-1fm67og")}${attr_style(`opacity: ${stringify(0.05 + (i === activeIndex ? 0.9 : 0))};`)}></div> `);
      if (i === experiences.length - 1 && globalProgress > 0.98) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse blur-md text-fluid-body"></div> <div class="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/40 via-purple-500/10 to-transparent blur-3xl rounded-full animate-spin-slow pointer-events-none"></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="relative z-10"><div class="flex flex-wrap items-center justify-between gap-4 mb-10"><span class="px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase bg-black/20 backdrop-blur-md"><time${attr("datetime", exp.startDate)}>${escape_html(exp.period.split(" - ")[0])}</time> - `);
      if (exp.endDate) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<time${attr("datetime", exp.endDate)}>${escape_html(exp.period.split(" - ")[1])}</time>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span>Atual</span>`);
      }
      $$renderer2.push(`<!--]--></span> <span${attr_class(`w-3 h-3 rounded-full ${exp.color} transition-all duration-300 shadow-[0_0_20px_currentColor] ${i === activeIndex ? "animate-ping" : ""}`, "svelte-1fm67og")}></span></div> <h3 class="text-fluid-section font-black text-white mb-3 text-balance leading-tight drop-shadow-lg" itemprop="name">${escape_html(exp.role)}</h3> <div class="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8 mix-blend-screen" itemprop="hiringOrganization">${escape_html(exp.company)}</div> <p class="text-white/80 text-fluid-body font-light leading-relaxed text-balance" itemprop="description">${escape_html(exp.desc)}</p> <meta itemprop="skills"${attr("content", exp.skills)}/> <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between"><span class="text-[10px] text-white/40 font-semibold tracking-widest uppercase">Foco Principal:</span> <span class="px-3 py-1 bg-white/10 rounded border border-white/5 text-white/90 text-[10px] font-bold tracking-wide">${escape_html(exp.tag)}</span></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="absolute bottom-12 left-8 right-8 md:left-24 md:right-24 z-20 flex items-center justify-between"><div class="text-white/40 text-[10px] font-mono font-bold tracking-[0.2em]">${escape_html(String(activeIndex + 1).padStart(2, "0"))} / ${escape_html(String(experiences.length).padStart(2, "0"))}</div> <div class="w-full max-w-sm h-1 bg-white/10 rounded-full overflow-hidden ml-6"><div${attr_class(`h-full ${stringify(activeColor)} transition-all duration-300 ease-out`, "svelte-1fm67og")}${attr_style(`width: ${stringify(globalProgress * 100)}%`)}></div></div></div></div></section>`);
  });
}
function InteractiveSlides($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let globalProgress = /* @__PURE__ */ (() => {
      return 0;
    })();
    function getInterpolation(progress, start, end) {
      if (progress < start || progress > end) return { opacity: 0, y: 40, blur: 10, scale: 0.95 };
      const range = end - start;
      const localProgress = (progress - start) / range;
      let opacity = 1;
      let y = 0;
      let blur = 0;
      let scale = 1;
      if (localProgress < 0.3) {
        const ease = localProgress / 0.3;
        opacity = ease;
        y = 40 * (1 - ease);
        blur = 10 * (1 - ease);
        scale = 0.95 + 0.05 * ease;
      } else if (localProgress > 0.7) {
        const ease = (1 - localProgress) / 0.3;
        opacity = ease;
        y = -40 * (1 - ease);
        blur = 10 * (1 - ease);
        scale = 1 + 0.05 * (1 - ease);
      }
      return { opacity, y, blur, scale };
    }
    const slide1 = getInterpolation(globalProgress, 0, 0.35);
    const slide2 = getInterpolation(globalProgress, 0.32, 0.68);
    const slide3 = getInterpolation(globalProgress, 0.65, 1);
    $$renderer2.push(`<div class="relative w-full h-[600vh] bg-black"><div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black"><div class="absolute inset-0 transition-colors duration-1000"${attr_style(`background: linear-gradient(180deg, #000 0%, hsl(220, 30%, ${stringify(10 + globalProgress * 25)}%) 100% )`)}></div> <div class="absolute inset-0 opacity-30"${attr_style(`background: radial-gradient(circle at ${stringify(50 + globalProgress * 10)}% ${stringify(50 - globalProgress * 10)}%, #3b82f6 0%, transparent 70%)`)}></div> <div class="relative z-10 w-full h-full max-w-5xl px-8 text-center"><div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"${attr_style(`opacity: ${stringify(slide1.opacity)}; transform: translate(0, calc(-50% + ${stringify(slide1.y)}px)) scale(${stringify(slide1.scale)}); filter: blur(${stringify(slide1.blur)}px)`)}><span class="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 block">Storytelling Digital</span> <h2 class="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter svelte-zppmc7">Porque a <br/> <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Experiência</span> <br/> faz diferença?</h2></div> <div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"${attr_style(`opacity: ${stringify(slide2.opacity)}; transform: translate(0, calc(-50% + ${stringify(slide2.y)}px)) scale(${stringify(slide2.scale)}); filter: blur(${stringify(slide2.blur)}px)`)}><h2 class="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto svelte-zppmc7">O primeiro contato com sua marca é o limite entre <span class="bg-blue-600/20 px-4 py-1 rounded-lg border border-blue-500/30">autoridade</span> e dúvida.</h2> <p class="mt-8 text-xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">Dúvidas silenciosas afetam sua credibilidade antes mesmo do primeiro clique.</p></div> <div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"${attr_style(`opacity: ${stringify(slide3.opacity)}; transform: translate(0, calc(-50% + ${stringify(slide3.y)}px)) scale(${stringify(slide3.scale)}); filter: blur(${stringify(slide3.blur)}px)`)}><h2 class="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-10 svelte-zppmc7">Mais que um <br/> <span class="text-blue-500">artefato</span>.</h2> <p class="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">Usando as mesmas tecnologias que as maiores Big Techs para tornar qualquer projeto uma obra de arte em destaque.</p> <div class="mt-12 w-24 h-24 md:w-32 md:h-32 mx-auto relative scale-75 md:scale-100"><div class="absolute inset-0 border border-blue-500/50 rounded-full animate-ping"></div> <div class="absolute inset-4 border border-blue-400/30 rounded-full animate-pulse delay-75"></div> <div class="absolute inset-8 bg-blue-600 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.6)]"></div></div></div></div></div></div>`);
  });
}
function StackSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const stack = [
      {
        id: "01",
        name: "SvelteKit",
        icon: "⚡",
        color: "#ff3e00",
        desc: "Performance SSR nativa para interfaces fluidas.",
        comment: "Minha principal arma para interfaces web ultra-rápidas. A ausência de Virtual DOM muda absolutamente tudo."
      },
      {
        id: "02",
        name: "Angular",
        icon: "🅰️",
        color: "#dd0031",
        desc: "Estruturas de alta complexidade e escalabilidade.",
        comment: "Essencial quando o projeto exige arquitetura rigorosa, injeção de dependências pesadas e escalabilidade em nível corporativo."
      },
      {
        id: "03",
        name: "JavaScript",
        icon: "JS",
        color: "#f7df1e",
        desc: "Padrões modernos e execução de alto impacto.",
        comment: "O oxigênio da web. Tenho proficiência profunda nas entranhas funcionais do JS moderno e ecossistemas assíncronos."
      },
      {
        id: "04",
        name: "PostgreSQL",
        icon: "🐘",
        color: "#336791",
        desc: "Segurança e integridade na persistência de dados.",
        comment: "Meu banco de dados relacional favorito. Uso intensivo para garantir que a fundação de dados do sistema jamais ceda."
      },
      {
        id: "05",
        name: "Ruby",
        icon: "💎",
        color: "#701516",
        desc: "Elegância e agilidade no desenvolvimento backend.",
        comment: "A produtividade que o Ruby nos traz não tem igual para automações corporativas robustas e scripts elegantemente bem estruturados."
      },
      {
        id: "06",
        name: "Python",
        icon: "🐍",
        color: "#3776ab",
        desc: "Processamento eficiente e inteligência aplicada.",
        comment: "Excepcional para tarefas pesadas envolvendo integração de dados complexos, I.A e rotinas de automação em background."
      },
      {
        id: "07",
        name: "Go",
        icon: "🐹",
        color: "#00add8",
        desc: "Concorrência e eficiência em sistemas distribuídos.",
        comment: "A minha escolha definitiva quando a latência obrigatoriamente tem que ser quase nula. Confiável como um relógio suíço."
      }
    ];
    let cards = {};
    let hoveredCardId = null;
    let activeItem = stack.find((s) => s.id === hoveredCardId);
    const particles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * -20,
      drift: (Math.random() - 0.5) * 50
    }));
    $$renderer2.push(`<section class="relative py-40 transition-colors duration-[800ms] border-t overflow-hidden svelte-1jgstg2"${attr_style(`background-color: ${stringify(activeItem ? activeItem.color : "#fafafa")}; border-color: ${stringify(activeItem ? activeItem.color : "rgba(241, 245, 249, 0.5)")};`)}><div${attr_class(`absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-1000 ${stringify(activeItem ? "opacity-100" : "opacity-30")}`, "svelte-1jgstg2")}><!--[-->`);
    const each_array = ensure_array_like(particles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let p = each_array[$$index];
      $$renderer2.push(`<div${attr_class(`absolute rounded-full transition-colors duration-700 ${stringify(activeItem ? "bg-white/40" : "bg-blue-600/20")}`, "svelte-1jgstg2")}${attr_style(` left: ${stringify(p.x)}%; top: ${stringify(p.y)}%; width: ${stringify(p.size)}px; height: ${stringify(p.size)}px; --drift: ${stringify(p.drift)}px; animation: float ${stringify(p.duration)}s ease-in-out ${stringify(p.delay)}s infinite alternate; `)}></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="max-w-7xl mx-auto px-8 relative z-10 svelte-1jgstg2"><div${attr_class(`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 transition-colors duration-700 ${stringify(activeItem ? "text-white" : "text-slate-900")}`, "svelte-1jgstg2")}><div class="max-w-2xl svelte-1jgstg2"><h2 class="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4 text-balance svelte-1jgstg2">Minha <br class="svelte-1jgstg2"/><span${attr_class(
      `text-transparent bg-clip-text transition-all duration-700 ${stringify(activeItem ? "bg-white/90" : "bg-gradient-to-r from-slate-950 to-slate-500")}`,
      "svelte-1jgstg2"
    )}>Stack</span></h2> <div${attr_class(`h-1 w-24 mb-8 ${stringify(activeItem ? "bg-white/40" : "bg-blue-600")} transition-colors duration-700`, "svelte-1jgstg2")}></div></div> <div class="flex flex-col items-start md:items-end text-left md:text-right max-w-sm svelte-1jgstg2"><span${attr_class(`font-bold uppercase tracking-[0.3em] text-[10px] mb-4 ${stringify(activeItem ? "text-white/60" : "text-blue-600")} transition-colors duration-700`, "svelte-1jgstg2")}>Apresentação Estratégica</span> <h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight svelte-1jgstg2">Arsenal Técnico</h3> <p${attr_class(`text-sm font-light leading-relaxed ${stringify(activeItem ? "text-white/80" : "text-slate-500")} transition-colors duration-700`, "svelte-1jgstg2")}>Uma seleção rigorosa de tecnologias desenhadas para performance extrema e experiência do usuário impecável.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40 svelte-1jgstg2"><!--[-->`);
    const each_array_1 = ensure_array_like(stack);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let item = each_array_1[$$index_2];
      $$renderer2.push(`<div role="presentation"${attr_class(
        `group relative bg-white p-10 rounded-[2.5rem] transition-all duration-[600ms] ease-out shadow-xl ${stringify("scale-100 opacity-100")}`,
        "svelte-1jgstg2"
      )}${attr_style(`transform: rotateX(${stringify(cards[item.id]?.y || 0)}deg) rotateY(${stringify(cards[item.id]?.x || 0)}deg) translateZ(${stringify(hoveredCardId === item.id ? "30px" : "0")}); transform-style: preserve-3d; ${stringify(hoveredCardId === item.id ? "box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); border-color: transparent;" : "border: 1px solid rgba(241,245,249,1);")}`)}><div class="relative z-10 flex flex-col h-full pointer-events-none svelte-1jgstg2"><div class="w-14 h-14 mb-10 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg svelte-1jgstg2">${escape_html(item.icon)}</div> <h4 class="text-2xl font-bold tracking-tight text-slate-900 mb-4 svelte-1jgstg2">${escape_html(item.name)}</h4> <p class="text-slate-500 font-light leading-relaxed mb-12 svelte-1jgstg2">${escape_html(item.desc)}</p> <div class="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between svelte-1jgstg2"><span class="text-[10px] font-bold uppercase tracking-widest text-slate-300 svelte-1jgstg2">Dominance Level</span> <div class="flex gap-1 svelte-1jgstg2"><!--[-->`);
      const each_array_2 = ensure_array_like(Array(5));
      for (let i = 0, $$length2 = each_array_2.length; i < $$length2; i++) {
        each_array_2[i];
        $$renderer2.push(`<div${attr_class(`w-1.5 h-1.5 rounded-full ${stringify(i < 4 ? "bg-slate-800" : "bg-slate-100")}`, "svelte-1jgstg2")}${attr_style(i < 4 ? `background-color: ${item.color};` : "")}></div>`);
      }
      $$renderer2.push(`<!--]--></div></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div${attr_class(`mt-40 pt-24 border-t border-slate-200/50 transition-colors duration-700 ${stringify(activeItem ? "border-white/10" : "")}`, "svelte-1jgstg2")}><div class="text-center mb-20 svelte-1jgstg2"><span${attr_class(`font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block ${stringify(activeItem ? "text-white/60" : "text-blue-600")} transition-colors duration-700`, "svelte-1jgstg2")}>Ecossistema Global</span> <h3${attr_class(`text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight transition-colors duration-700 ${stringify(activeItem ? "text-white" : "text-slate-900")}`, "svelte-1jgstg2")}>As tecnologias que <br class="hidden md:block svelte-1jgstg2"/> movem a <span class="italic font-serif font-light opacity-80 svelte-1jgstg2">indústria líder</span>.</h3> <p${attr_class(`font-light leading-relaxed max-w-2xl mx-auto ${stringify(activeItem ? "text-white/70" : "text-slate-500")} transition-colors duration-700`, "svelte-1jgstg2")}>Minha stack não é decidida por tendências passageiras. É a mesma infraestrutura validada e utilizada pelas maiores corporações de tecnologia do planeta.</p></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 svelte-1jgstg2"><div${attr_class(
      `col-span-2 md:col-span-2 row-span-2 relative p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 overflow-hidden transition-all duration-700 shadow-sm hover:shadow-xl group/apple ${stringify(activeItem ? "bg-white/5 border border-white/10" : "bg-white border border-slate-100")} `,
      "svelte-1jgstg2"
    )}><div${attr_class(`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-100/50 to-transparent ${stringify(activeItem ? "hidden" : "block")} pointer-events-none`, "svelte-1jgstg2")}></div> <div${attr_class(`absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.05] to-transparent ${stringify(activeItem ? "block" : "hidden")} pointer-events-none`, "svelte-1jgstg2")}></div> <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"${attr_class(`transition-all duration-500 group-hover/apple:scale-110 ${stringify(activeItem ? "text-white" : "text-slate-900")}`, "svelte-1jgstg2")}><path d="M17.05 20.28c-.96.95-2.04 1.72-3.12 1.72-1.12 0-1.47-.69-2.73-.69-1.28 0-1.68.67-2.73.69-1.07.02-2.2-.82-3.21-1.85C3.18 18.06 1.75 14.54 1.75 11.4c0-3.32 2.15-5.07 4.2-5.07 1.05 0 2.05.6 2.67.6.62 0 1.74-.68 2.92-.68 1.55 0 2.68.82 3.39 1.83-2.9 1.4-2.43 5.4 1.15 6.47-.7 1.83-1.6 3.66-3.03 5.73zM12.03 5.48c0-2.3 2.02-4.14 4.56-4.23.14 2.87-3.08 5.76-4.56 4.23z" class="svelte-1jgstg2"></path></svg> <div class="text-center relative z-10 svelte-1jgstg2"><span${attr_class(`block text-2xl font-black mb-2 ${stringify(activeItem ? "text-white" : "text-slate-900")}`, "svelte-1jgstg2")}>Apple</span> <span${attr_class(`block text-xs font-bold tracking-widest uppercase ${stringify(activeItem ? "text-white/50" : "text-slate-400")}`, "svelte-1jgstg2")}>Svelte &amp; Edge Apps</span></div></div> <div${attr_class(
      `p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 ${stringify(activeItem ? "bg-white/[0.02] border border-white/5" : "bg-slate-50 border border-slate-100/50")} `,
      "svelte-1jgstg2"
    )}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48" class="svelte-1jgstg2"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" class="svelte-1jgstg2"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" class="svelte-1jgstg2"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" class="svelte-1jgstg2"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" class="svelte-1jgstg2"></path></svg> <span${attr_class(`text-[10px] font-bold tracking-widest uppercase ${stringify(activeItem ? "text-white/40" : "text-slate-400")}`, "svelte-1jgstg2")}>Angular / GO</span></div> <div${attr_class(
      `p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 ${stringify(activeItem ? "bg-white/[0.02] border border-white/5" : "bg-slate-50 border border-slate-100/50")} `,
      "svelte-1jgstg2"
    )}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="svelte-1jgstg2"><path fill="#f35325" d="M0 0h11.4v11.4H0z" class="svelte-1jgstg2"></path><path fill="#81bc06" d="M12.6 0H24v11.4H12.6z" class="svelte-1jgstg2"></path><path fill="#05a6f0" d="M0 12.6h11.4V24H0z" class="svelte-1jgstg2"></path><path fill="#ffba08" d="M12.6 12.6H24V24H12.6z" class="svelte-1jgstg2"></path></svg> <span${attr_class(`text-[10px] font-bold tracking-widest uppercase ${stringify(activeItem ? "text-white/40" : "text-slate-400")}`, "svelte-1jgstg2")}>TypeScript</span></div> <div${attr_class(
      `p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 ${stringify(activeItem ? "bg-white/[0.02] border border-white/5" : "bg-slate-50 border border-slate-100/50")} `,
      "svelte-1jgstg2"
    )}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" class="svelte-1jgstg2"><path fill="#E50914" d="M24 0h3.6L21.4 32H18zM4.4 0H8l5.8 32H10z" class="svelte-1jgstg2"></path><path d="M7 0h3v32H7z" fill="#B20710" class="svelte-1jgstg2"></path><path fill="#E50914" d="M7 0l16 32h-3L4 0h3z" class="svelte-1jgstg2"></path></svg> <span${attr_class(`text-[10px] font-bold tracking-widest uppercase ${stringify(activeItem ? "text-white/40" : "text-slate-400")}`, "svelte-1jgstg2")}>Python / JS</span></div> <div${attr_class(
      `p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 ${stringify(activeItem ? "bg-white/[0.02] border border-white/5" : "bg-slate-50 border border-slate-100/50")} `,
      "svelte-1jgstg2"
    )}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0668E1" class="svelte-1jgstg2"><path d="M12 21.5c-2.4 0-4.7-.6-6.6-1.5-3.3-1.6-4.9-4.3-4.9-6.3 0-2 1.6-4.7 4.9-6.3 1.9-1 4.2-1.5 6.6-1.5s4.7.6 6.6 1.5c3.3 1.6 4.9 4.3 4.9 6.3 0 2-1.6 4.7-4.9 6.3-1.9 1-4.2 1.5-6.6 1.5Zm0-13C9 8.5 6 9.3 4 10.3c-2.2 1-3.2 2.6-3.2 3.4 0 .9 1 2.4 3.2 3.4 2 1 5 1.8 8 1.8s6-.8 8-1.8c2.2-1 3.2-2.6 3.2-3.4 0-.9-1-2.4-3.2-3.4-2-1-5-1.8-8-1.8Z" class="svelte-1jgstg2"></path><path d="M12 17.2c-1.3 0-2.6-.5-3.5-1.5-2-2-2-5.1 0-7.1 1-.9 2.2-1.5 3.5-1.5s2.6.5 3.5 1.5c2 2 2 5.1 0 7.1-1 1-2.2 1.5-3.5 1.5Zm0-8.6c-1 0-1.8.4-2.5 1.1-1.4 1.4-1.4 3.6 0 5 1.4 1.4 3.5 1.4 4.9 0 1.4-1.4 1.4-3.6 0-5-.6-.7-1.5-1.1-2.4-1.1Z" class="svelte-1jgstg2"></path></svg> <span${attr_class(`text-[10px] font-bold tracking-widest uppercase ${stringify(activeItem ? "text-white/40" : "text-slate-400")}`, "svelte-1jgstg2")}>Ruby / React</span></div></div></div></div> <div${attr_class(
      `fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-out ${stringify(activeItem ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90 pointer-events-none")}`,
      "svelte-1jgstg2"
    )}>`);
    if (activeItem) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="max-w-xs p-6 bg-white/50 backdrop-blur-2xl border shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] rounded-[2.5rem] svelte-1jgstg2"${attr_style(`border-color: ${stringify(activeItem.color)}55;`)}><div class="flex items-center gap-3 mb-4 svelte-1jgstg2"><span class="text-2xl drop-shadow-md svelte-1jgstg2">${escape_html(activeItem.icon)}</span> <span class="font-bold tracking-tight text-xl svelte-1jgstg2"${attr_style(`color: ${stringify(activeItem.color)}`)}>${escape_html(activeItem.name)}</span></div> <p class="text-slate-900 text-sm font-medium leading-relaxed svelte-1jgstg2">"${escape_html(activeItem.comment)}"</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function ProjectsSection($$renderer) {
  const projects = [
    {
      name: "Plano TIM Empresa",
      url: "https://planotimempresa.com.br/",
      desc: "Integração nativa a CRM, sistema interno de gestão e arquitetura otimizada para SEO agressivo.",
      tags: ["Tech Lead", "SEO"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Link Dedicada",
      url: "https://linkdedicada.com.br/",
      desc: "Landings de conversão para telecom, desenhadas para captura de leads e pipeline de vendas.",
      tags: ["Landing Page", "Lead Gen"],
      color: "from-emerald-400 to-teal-600"
    },
    {
      name: "Belle Moda Íntima",
      url: "https://bellemodaintima.com.br/",
      desc: "Plataforma e-commerce. Sincronização avançada de catálogos via CRM para posts.",
      tags: ["WooCommerce", "CMS"],
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Alpha Company Ads",
      url: "https://alphacompanyads.com.br/",
      desc: "Site institucional corporativo focado na apresentação e autoridade em performance.",
      tags: ["Instuticional", "Agency"],
      color: "from-slate-700 to-slate-900"
    },
    {
      name: "Buenos Water Tech",
      url: "https://buenoswatertechnology.com.br/",
      desc: "Aplicações tecnológicas de tratamentos industriais, destacando serviços premium.",
      tags: ["Web App", "Industrial"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      name: "Esquadrias Martins",
      url: "https://esquadriasmartins.com.br/",
      desc: "Vitrine digital para projetos arquitetônicos de alto padrão focado em experiência unificada.",
      tags: ["UX/UI", "Premium"],
      color: "from-amber-400 to-orange-500"
    },
    {
      name: "TIM Corporativo",
      url: "https://timcorporativo.com.br/",
      desc: "Otimização com lógica avançada de palavras-chave ranqueando nos principais índices.",
      tags: ["Performance", "SEO"],
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Internet Fibra Agora",
      url: "https://internetfibraagora.com.br/",
      desc: "Desenvolvimento e design focado em tráfego qualificado e resposta rápida.",
      tags: ["Lead Gen", "Optimization"],
      color: "from-violet-500 to-fuchsia-500"
    },
    {
      name: "Plano Empresarial TIM",
      url: "https://planoempresarialtim.com.br/",
      desc: "Reconstrução técnica completa integrando sistemas internos do Grupo OC.",
      tags: ["Tech Lead", "Corporate"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Plano Empresarial C",
      url: "https://planoempresarialc.com.br/",
      desc: "Gestão técnica B2B desenhada em sincronia severa e constante com nosso CMS.",
      tags: ["Full Stack", "CRM"],
      color: "from-teal-400 to-emerald-600"
    },
    {
      name: "Plano Empresa C",
      url: "https://planoempresac.com.br/",
      desc: "Desenvolvimento dinâmico de aquisição em escala e gerenciamento das páginas B2C.",
      tags: ["Web Design", "Growth"],
      color: "from-emerald-500 to-green-700"
    },
    {
      name: "Lead Plano de Saúde",
      url: "https://leadplanodesaude.com.br/",
      desc: "Sistemas de validação desenhados para filtragem de leads complexos do setor médico.",
      tags: ["Funnels", "Health"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Grupo OC",
      url: "https://grupooc.com.br/",
      desc: "Portal oficial matriz espelhando toda a vanguarda e a autoridade técnica do hub.",
      tags: ["Enterprise", "Core System"],
      color: "from-fuchsia-600 to-purple-800"
    },
    {
      name: "Sorocaba Indica",
      url: "https://sorocabaindica.com.br/",
      desc: "Lógica SEO voltada a buscas locais e categorização de páginas estáticas e dinâmicas.",
      tags: ["Geo SEO", "Portal"],
      color: "from-orange-400 to-red-500"
    },
    {
      name: "Campinas Indica",
      url: "https://campinasindica.com.br/",
      desc: "Ajuste de performance e distribuição semântica de entidades de busca.",
      tags: ["B2C", "Data"],
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Guarulhos Indica",
      url: "https://guarulhosindica.com.br/",
      desc: "Plataforma B2C sincronizada com clusters de dados regionais de alto impacto.",
      tags: ["Scale", "CMS"],
      color: "from-orange-600 to-red-700"
    },
    {
      name: "Osasco Indica",
      url: "https://osascoindica.com.br/",
      desc: "Indexação agressiva de múltiplas rotas garantindo presença topo na região metropolitana.",
      tags: ["Index Tracking", "Performance"],
      color: "from-red-500 to-rose-700"
    },
    {
      name: "SP Indica",
      url: "https://saopauloindica.com.br/",
      desc: "Core do cluster metropolitano, construído para sustentar volumetria robusta de buscas.",
      tags: ["High Traffic", "Infra"],
      color: "from-rose-600 to-pink-700"
    },
    {
      name: "Prajá Imóveis",
      url: "https://prajaimoveis.com.br/",
      desc: "Integração imobiliária completa cruzando dados e segmentando lógicas complexas de busca.",
      tags: ["Real Estate", "CRM"],
      color: "from-indigo-400 to-purple-600"
    },
    {
      name: "Plano Vivo Empresarial",
      url: "https://planovivoempresarial.com.br/",
      desc: "Otimização ponta a ponta focado em vendas dedicadas para pipelines da Vivo.",
      tags: ["Sales Pipeline", "Tele"],
      color: "from-purple-600 to-violet-800"
    },
    {
      name: "Plano TIM Corporativo",
      url: "https://planotimcorporativo.com.br/",
      desc: "Reconstrução focada e sincronizada diretamente como parte da base de lead systems.",
      tags: ["Lead Gen", "Optimization"],
      color: "from-blue-700 to-indigo-900"
    }
  ];
  let selectedProject = projects[0];
  $$renderer.push(`<section class="py-40 bg-black text-white relative overflow-hidden selection:bg-blue-500/30"><div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10"><div class="mb-20 md:flex items-end justify-between"><div class="max-w-xl"><span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block" data-aos="fade-up">Portfólio</span> <h2 class="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-balance drop-shadow-sm" data-aos="fade-up" data-aos-delay="100">Nível de <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Produção</span></h2></div> <p class="text-slate-400 max-w-sm font-light leading-relaxed mb-4 md:text-right" data-aos="fade-up" data-aos-delay="200">Aplicações reais focadas em conversão, tráfego qualificado e experiência estética de ponta. Selecione um projeto para ver mais detalhes.</p></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start" data-aos="fade-up" data-aos-delay="300"><div class="lg:col-span-5 w-full flex flex-col gap-3 max-h-[500px] lg:max-h-[640px] overflow-y-auto project-list-scroll pr-3 pb-8 svelte-a72wie"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    $$renderer.push(`<button${attr_class(`w-full text-left p-6 rounded-[2rem] transition-all duration-500 flex items-center justify-between group relative overflow-hidden border ${stringify(selectedProject === project ? "bg-white/[0.04] border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md scale-[1.02]" : "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5 opacity-50 hover:opacity-100")}`)}>`);
    if (selectedProject === project) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<div${attr_class(`absolute inset-0 bg-gradient-to-r ${stringify(project.color)} opacity-[0.05]`, "svelte-a72wie")}></div> <div${attr_class(`absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-gradient-to-b ${stringify(project.color)} rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.5)]`, "svelte-a72wie")}></div>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> <div class="flex flex-col gap-1.5 relative z-10 w-full overflow-hidden shrink pr-2"><span${attr_class(`text-xl md:text-2xl font-bold truncate block ${stringify(selectedProject === project ? "text-white" : "text-slate-300")} transition-colors duration-300`)}>${escape_html(project.name)}</span> <div class="flex flex-wrap gap-2 mt-1"><!--[-->`);
    const each_array_1 = ensure_array_like(project.tags);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let tag = each_array_1[$$index];
      $$renderer.push(`<span class="text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">${escape_html(tag)}</span>`);
    }
    $$renderer.push(`<!--]--></div></div> <div${attr_class(`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 relative z-10 ${stringify(selectedProject === project ? "bg-white/10 text-white shadow-xl rotate-0 scale-110" : "bg-white/[0.02] text-slate-600 -rotate-45 group-hover:bg-white/5 group-hover:text-slate-400")}`)}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div></button>`);
  }
  $$renderer.push(`<!--]--></div> <div class="lg:col-span-7 w-full sticky top-32 perspective-1000 svelte-a72wie"><!---->`);
  {
    $$renderer.push(`<div class="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-14 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between min-h-[500px] lg:min-h-[640px] transform-3d hover:-translate-y-2 transition-transform duration-700 group svelte-a72wie" itemscope="" itemtype="https://schema.org/SoftwareApplication"><meta itemprop="applicationCategory" content="BusinessApplication"/> <meta itemprop="operatingSystem" content="Web"/> <div${attr_class(`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${stringify(selectedProject.color)} opacity-10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-700`, "svelte-a72wie")}></div> <div${attr_class(`absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr ${stringify(selectedProject.color)} opacity-[0.05] blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity duration-700`, "svelte-a72wie")}></div> <div class="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none rounded-[3.5rem]"></div> <div class="relative z-10 flex flex-col h-full items-start"><div class="mb-auto flex items-start justify-between w-full"><div${attr_class(`w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br ${stringify(selectedProject.color)} p-[1px] shadow-2xl relative transform group-hover:scale-105 transition-transform duration-500`, "svelte-a72wie")}><div class="w-full h-full rounded-[2rem] bg-slate-950/80 backdrop-blur-2xl flex items-center justify-center border border-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white drop-shadow-md"><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path></svg></div></div></div> <div class="mt-12 mb-12"><h3 class="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter drop-shadow-lg leading-none" itemprop="name">${escape_html(selectedProject.name)}</h3> <p class="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-md text-balance" itemprop="description">${escape_html(selectedProject.desc)}</p></div> <div class="flex flex-wrap gap-3 mb-12"><!--[-->`);
    const each_array_2 = ensure_array_like(selectedProject.tags);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let tag = each_array_2[$$index_2];
      $$renderer.push(`<span class="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-white/80 uppercase shadow-lg backdrop-blur-xl">${escape_html(tag)}</span>`);
    }
    $$renderer.push(`<!--]--></div> <div class="mt-auto w-full"><a${attr("href", selectedProject.url)} itemprop="url" target="_blank" rel="noopener noreferrer" class="relative inline-flex items-center justify-center w-full md:w-auto overflow-hidden rounded-full p-[1px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] group/btn hover:scale-105 transition-transform duration-500"><span${attr_class(`absolute inset-0 bg-gradient-to-r ${stringify(selectedProject.color)} opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full blur-[4px]`, "svelte-a72wie")}></span> <span${attr_class(`absolute inset-0 bg-gradient-to-r ${stringify(selectedProject.color)} rounded-full`, "svelte-a72wie")}></span> <div class="relative bg-slate-950/80 backdrop-blur-2xl px-10 py-5 md:px-12 md:py-6 rounded-full flex items-center gap-4 transition-all duration-500 group-hover/btn:bg-slate-950/40 w-full md:w-auto justify-center"><span class="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white">Abrir Projeto</span> <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover/btn:rotate-45 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a></div></div></div>`);
  }
  $$renderer.push(`<!----></div></div></div></section>`);
}
function BlogSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let posts = [];
    $$renderer2.push(`<section id="blog" class="py-32 relative overflow-hidden text-center md:text-left text-white max-w-7xl mx-auto px-4 sm:px-6"><div class="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-16 lg:p-20 relative shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"></div> <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 relative z-10"><div class="max-w-2xl"><div class="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6"><span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/60 tracking-widest uppercase flex items-center gap-2"><span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span> SvelteKit Natively</span> <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/60 tracking-widest uppercase flex items-center gap-2"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Markdown Render (.md)</span></div> <h2 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter" data-aos="fade-up">Insights &amp; <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Artigos</span></h2> <p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed text-balance" data-aos="fade-up" data-aos-delay="100">Explorando arquitetura frontend, design premium e tecnologias reais que rodam na base da minha infraestrutura.</p></div> <div data-aos="fade-left" data-aos-delay="200"><a href="/blog" class="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-xs font-bold transition-all duration-500 uppercase tracking-widest border border-white/10 hover:border-white/30 flex items-center justify-center md:justify-start gap-3 shrink-0 text-white shadow-lg mx-auto md:mx-0">Ver Todos os Artigos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1.5 transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div></div> `);
    if (posts.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"><!--[-->`);
      const each_array = ensure_array_like(posts);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let post = each_array[i];
        $$renderer2.push(`<div data-aos="fade-up"${attr("data-aos-delay", 300 + i * 100)} class="h-full">`);
        BlogCard($$renderer2, { post });
        $$renderer2.push(`<!----></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="py-20 text-center border border-dashed border-white/10 rounded-[2.5rem] bg-white/5 relative z-10"><p class="text-slate-400">Carregando artigos do sistema...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function linear(t) {
  return t;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function get_interpolator(a, b) {
  if (a === b || a !== a) return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = (
      /** @type {Array<any>} */
      b.map((bi, i) => {
        return get_interpolator(
          /** @type {Array<any>} */
          a[i],
          bi
        );
      })
    );
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b) {
      throw new Error("Object cannot be null");
    }
    if (is_date(a) && is_date(b)) {
      const an = a.getTime();
      const bn = b.getTime();
      const delta = bn - an;
      return (t) => new Date(an + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = (
      /** @type {number} */
      b - /** @type {number} */
      a
    );
    return (t) => a + t * delta;
  }
  return () => b;
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    target_value = new_value;
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = linear,
      interpolate = get_interpolator
    } = { ...defaults, ...opts };
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = raf.now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start) return true;
      if (!started) {
        fn = interpolate(
          /** @type {any} */
          value,
          new_value
        );
        if (typeof duration === "function")
          duration = duration(
            /** @type {any} */
            value,
            new_value
          );
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(
      /** @type {any} */
      target_value,
      /** @type {any} */
      value
    ), opts),
    subscribe: store.subscribe
  };
}
function GithubStatsSection($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const GITHUB_USERNAME = "Calebe-Dev";
    tweened(0, { duration: 2500, easing: cubicOut });
    tweened(0, { duration: 2500, easing: cubicOut });
    tweened(0, { duration: 2500, easing: cubicOut });
    $$renderer2.push(`<section class="py-32 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden"><div class="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_100%)] pointer-events-none"></div> <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.1)_0%,transparent_50%)] pointer-events-none"></div> <div class="max-w-7xl mx-auto px-8 relative z-10"><div class="flex flex-col md:flex-row items-center gap-16 justify-between"><div class="text-center md:text-left max-w-xl"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.1)]"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> <span class="w-2 h-2 rounded-full bg-emerald-500 absolute"></span> <span class="text-xs font-mono text-emerald-400 font-bold tracking-widest pl-2">api.github.com/sync</span></div> <h2 class="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white text-balance drop-shadow-sm">Código <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Aberto</span>.</h2> <p class="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg md:mx-0 mx-auto">Acompanhamento em <span class="font-bold text-white">tempo real</span> das minhas contribuições, projetos públicos e do impacto gerado no ecossistema open-source.</p> <a${attr("href", `https://github.com/${GITHUB_USERNAME}`)} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400 rounded-full transition-all duration-300 font-bold tracking-wide group"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg> Acessar Perfil <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a></div> <div class="w-full md:w-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"><div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-emerald-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"><div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-emerald-400 border border-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.0)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div> <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-emerald-400 transition-colors drop-shadow-sm">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`...`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-emerald-500/80 text-xs font-bold tracking-[0.2em] uppercase">Repositórios</div></div> <div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"><div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-cyan-400 border border-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div> <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors drop-shadow-sm">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`...`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-cyan-500/80 text-xs font-bold tracking-[0.2em] uppercase">Estrelas</div></div> <div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-fuchsia-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left sm:col-span-2 md:col-span-1 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"><div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-fuchsia-400 border border-fuchsia-500/10 shadow-[0_0_15px_rgba(232,121,249,0.0)] group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div> <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-fuchsia-400 transition-colors drop-shadow-sm">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`...`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-fuchsia-500/80 text-xs font-bold tracking-[0.2em] uppercase">Seguidores</div></div></div></div></div></section>`);
  });
}
function SocialInviteSection($$renderer) {
  $$renderer.push(`<section class="py-32 bg-[#fafafa] relative overflow-hidden border-t border-slate-100"><div class="max-w-7xl mx-auto px-8 relative z-10"><div class="text-center mb-20"><span class="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Networking</span> <h2 class="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 text-balance">Redes <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profissionais</span></h2> <p class="text-slate-500 max-w-xl mx-auto text-lg font-light leading-relaxed">Mantenha-se conectado para acompanhar insights técnicos corporativos, bastidores de infraestrutura e meu lifestyle dev de perto.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"><a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="group relative bg-[#0a66c2] p-12 rounded-[3.5rem] overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(10,102,194,0.4)] hover:-translate-y-2 transition-all duration-700 ease-out"><div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div> <div class="absolute -top-24 -right-24 w-80 h-80 bg-white opacity-5 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-[1500ms] pointer-events-none"></div> <div class="relative z-10 text-white"><div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 group-hover:scale-110 transition-transform duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></div> <h3 class="text-4xl font-black mb-4 drop-shadow-sm">Conecte-se</h3> <p class="text-white/80 font-light leading-relaxed max-w-sm text-lg">Acompanhe minha trajetória B2B, artigos técnicos aprofundados e faça parte de um networking corporativo de alto nível.</p></div> <div class="relative z-10 flex items-center justify-between mt-12 w-full pt-8 border-t border-white/10"><span class="text-white/70 font-bold uppercase tracking-widest text-xs">Acessar LinkedIn</span> <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#0a66c2] text-white transition-colors duration-500 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a> <a href="https://www.instagram.com/calebe.dev" target="_blank" rel="noopener noreferrer" class="group relative p-12 rounded-[3.5rem] overflow-hidden flex flex-col justify-between min-h-[360px] shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(225,48,108,0.4)] hover:-translate-y-2 transition-all duration-700 ease-out"><div class="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] pointer-events-none transition-transform duration-[2000ms] group-hover:scale-110"></div> <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-white opacity-20 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-[1500ms] pointer-events-none"></div> <div class="relative z-10 text-white"><div class="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 group-hover:scale-110 transition-transform duration-500"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div> <h3 class="text-4xl font-black mb-4 drop-shadow-sm">Bastidores</h3> <p class="text-white/90 font-light leading-relaxed max-w-sm text-lg drop-shadow-md">O lado humano do código. Acompanhe meu setup físico, dia a dia na criação ágil e o lifestyle por trás da tela escura.</p></div> <div class="relative z-10 flex items-center justify-between mt-12 w-full pt-8 border-t border-white/20"><span class="text-white/80 font-bold uppercase tracking-widest text-xs drop-shadow-sm">Acessar Instagram</span> <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#dc2743] text-white transition-colors duration-500 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div></div></a></div></div></section>`);
}
function ContactSection($$renderer) {
  $$renderer.push(`<section class="py-40 bg-black text-white relative overflow-hidden border-t border-white/5"><div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] pointer-events-none"></div> <div class="absolute -bottom-[400px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[150px] pointer-events-none"></div> <div class="max-w-6xl mx-auto px-6 relative z-10 w-full"><div class="bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-10 md:p-24 text-center shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden group"><div class="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div> <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div> <div class="w-24 h-24 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-[2rem] flex items-center justify-center mb-12 relative group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700"><div class="absolute inset-0 bg-blue-400/20 rounded-[2rem] animate-ping opacity-50"></div> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-blue-400 drop-shadow-lg" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div> <h2 class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 text-white drop-shadow-sm">Vamos Construir <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Juntos.</span></h2> <p class="text-lg md:text-xl text-slate-400 font-light mb-16 max-w-2xl mx-auto text-balance">Seu projeto precisa de escalabilidade técnica, alta conversão e infraestrutura de ponta? Dê o próximo passo hoje mesmo.</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-6"><a href="mailto:calebe.araujo101@gmail.com" class="group/btn relative px-8 md:px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 w-full sm:w-auto overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.3)]"><div class="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> <span>calebe.araujo101@gmail.com</span></a> <a href="https://wa.me/5511988385247" target="_blank" rel="noopener noreferrer" class="group/wa px-8 md:px-10 py-5 bg-white/5 hover:bg-[#25D366]/20 text-white hover:text-[#25D366] hover:border-[#25D366]/50 rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.3)]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> <span>WhatsApp</span></a> <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="group/in px-8 md:px-10 py-5 bg-white/5 hover:bg-[#0a66c2]/20 text-white hover:text-[#0a66c2] hover:border-[#0a66c2]/50 rounded-full font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-500 flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg> <span>LinkedIn</span></a></div></div></div></section>`);
}
function FloatingWhatsApp($$renderer) {
  $$renderer.push(`<a href="https://wa.me/5511988385247" target="_blank" rel="noopener noreferrer" class="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 group flex items-center gap-3 scale-[0.70] md:scale-100 origin-bottom-left" aria-label="Fale comigo no WhatsApp"><div class="px-4 py-2 bg-white rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block"><span class="text-sm font-bold text-slate-800">Precisa de um projeto?</span> <span class="text-[10px] block text-slate-500 font-medium tracking-wide">Me chame no WhatsApp</span></div> <div class="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-all duration-500 relative"><div class="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-40"></div> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div></a>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const messages = [
      "Olá, tudo bem?",
      "Eu sou Calebe",
      "Bem Vindo a meu portfólio!!"
    ];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Calebe Araujo | Líder Técnico &amp; Desenvolvedor Full Stack</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Calebe Araujo é Líder Técnico e Engenheiro Full Stack especializado em SvelteKit, infraestrutura Cloudflare e sistemas CRM de alta performance. Focado em UX premium e SEO agressivo."/> <link rel="canonical" href="https://calebe.dev"/> <meta property="og:type" content="website"/> <meta property="og:url" content="https://calebe.dev"/> <meta property="og:title" content="Calebe Araujo | Líder Técnico &amp; Desenvolvedor Full Stack"/> <meta property="og:description" content="Engenharia de software robusta, UX premium e otimização para Answer Engines (AEO)."/> <meta property="og:image" content="https://calebe.dev/og-image.png"/> <meta property="twitter:card" content="summary_large_image"/> <meta property="twitter:url" content="https://calebe.dev"/> <meta property="twitter:title" content="Calebe Araujo | Líder Técnico &amp; Desenvolvedor Full Stack"/> <meta property="twitter:description" content="Especialista em ecossistemas Svelte e infraestrutura de alta precisão."/> <meta property="twitter:image" content="https://calebe.dev/og-image.png"/> <meta name="keywords" content="Desenvolvedor Full Stack, Tech Lead, SvelteKit, TypeScript, Node.js, Cloudflare Tunnel, SEO, AEO, CRM Development, Engenheiro de Software"/> <script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Calebe Araujo",
			"gender": "Male",
			"jobTitle": "Líder Técnico & Desenvolvedor Full Stack",
			"knowsAbout": ["SvelteKit", "TypeScript", "Node.js", "SEO", "Cloudflare", "Infrastructure", "CRM Development", "AEO"],
			"url": "https://calebe.dev",
			"sameAs": [
				"https://github.com/calebearaujo"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Grupo OC",
				"description": "Agência de Marketing e Tecnologia"
			},
			"description": "Desenvolvedor focado em ecossistemas de alta performance e sincronização de dados complexos."
		}
	<\/script>`);
    });
    $$renderer2.push(`<section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">`);
    DynamicHeroBackground($$renderer2);
    $$renderer2.push(`<!----> <div class="absolute top-8 right-8 z-50"><a href="/blog"${attr_class(`group px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-[11px] transition-all duration-500 uppercase tracking-widest border border-white/5 hover:border-white/20 flex items-center gap-2 ${stringify(environment.dayCycle === "day" ? "text-slate-900/60 border-slate-900/5 hover:text-slate-900" : "text-white/60 border-white/10 hover:text-white")}`)}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 group-hover:opacity-100 transition-opacity duration-500"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> Blog</a></div> <div class="relative z-20 text-center px-6 w-full max-w-4xl">`);
    AnimatedHeroText($$renderer2, { messages });
    $$renderer2.push(`<!----></div> <div class="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-3">`);
    if (environment.isShowcaseRunning && environment.showcaseLabel) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[9px] text-blue-400/80 uppercase tracking-widest font-medium backdrop-blur-md">Mostrando: ${escape_html(environment.showcaseLabel)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button${attr("disabled", environment.isShowcaseRunning, true)}${attr_class(`group px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-[10px] transition-all duration-500 uppercase tracking-widest border border-white/5 hover:border-white/20 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed ${stringify(environment.dayCycle === "day" ? "text-slate-900/60 border-slate-900/5" : "text-white/60 border-white/10 hover:text-white")}`)}>`);
    if (environment.isShowcaseRunning) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span> Sincronizando...`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> Review Experience`);
    }
    $$renderer2.push(`<!--]--></button></div></section> <div class="relative z-10 bg-black"><div id="about" data-magnet="">`);
    AboutSection($$renderer2);
    $$renderer2.push(`<!----></div> <div id="accessibility" data-magnet="">`);
    AccessibilitySection($$renderer2);
    $$renderer2.push(`<!----></div> <div id="experience" data-magnet="">`);
    ExperienceSection($$renderer2);
    $$renderer2.push(`<!----></div> `);
    InteractiveSlides($$renderer2);
    $$renderer2.push(`<!----> <div id="stack" data-magnet="">`);
    StackSection($$renderer2);
    $$renderer2.push(`<!----></div> <div id="projects" data-magnet="">`);
    ProjectsSection($$renderer2);
    $$renderer2.push(`<!----></div> `);
    BlogSection($$renderer2);
    $$renderer2.push(`<!----> `);
    GithubStatsSection($$renderer2);
    $$renderer2.push(`<!----> `);
    SocialInviteSection($$renderer2);
    $$renderer2.push(`<!----> `);
    ContactSection($$renderer2);
    $$renderer2.push(`<!----></div> `);
    FloatingWhatsApp($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
