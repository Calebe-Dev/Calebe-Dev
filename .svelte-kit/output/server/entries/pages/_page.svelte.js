import { z as head, F as ensure_array_like, w as attr, v as attr_class, G as clsx } from "../../chunks/index2.js";
import "clsx";
import { A as About } from "../../chunks/About.js";
import { e as escape_html } from "../../chunks/context.js";
import { S as Services } from "../../chunks/Services.js";
import { E as Experience } from "../../chunks/Experience.js";
import { P as Projects } from "../../chunks/Projects.js";
import { C as Contact } from "../../chunks/Contact.js";
function Hero($$renderer) {
  $$renderer.push(`<section class="hero-section svelte-1q37ri0" data-scroll="" data-parallax="0.15"><div class="hero-background svelte-1q37ri0"><div class="bg-gradient gradient-1 svelte-1q37ri0"></div> <div class="bg-gradient gradient-2 svelte-1q37ri0"></div> <div class="bg-grid svelte-1q37ri0"></div></div> <div class="hero-container svelte-1q37ri0"><div class="hero-wrapper svelte-1q37ri0"><div class="hero-content svelte-1q37ri0"><div class="hero-badge svelte-1q37ri0" data-aos="fade-up"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="svelte-1q37ri0"><path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" fill="currentColor" class="svelte-1q37ri0"></path></svg> <span class="svelte-1q37ri0">Desenvolvedor Full-Stack &amp; Gestor de Tráfego</span></div> <h1 data-aos="fade-up" data-aos-delay="100" class="svelte-1q37ri0">Criando experiências <span class="gradient-text svelte-1q37ri0">digitais que</span> transformam negócios</h1> <p class="hero-description svelte-1q37ri0" data-aos="fade-up" data-aos-delay="200">Combino desenvolvimento web de ponta com estratégias de marketing digital para criar soluções que não apenas impressionam, mas geram resultados reais e mensuráveis.</p> <div class="hero-stats svelte-1q37ri0" data-aos="fade-up" data-aos-delay="300"><div class="stat-item svelte-1q37ri0"><div class="stat-number svelte-1q37ri0">5+</div> <div class="stat-label svelte-1q37ri0">Anos de Experiência</div></div> <div class="stat-divider svelte-1q37ri0"></div> <div class="stat-item svelte-1q37ri0"><div class="stat-number svelte-1q37ri0">20+</div> <div class="stat-label svelte-1q37ri0">Projetos Entregues</div></div> <div class="stat-divider svelte-1q37ri0"></div> <div class="stat-item svelte-1q37ri0"><div class="stat-number svelte-1q37ri0">100%</div> <div class="stat-label svelte-1q37ri0">Clientes Satisfeitos</div></div></div> <div class="hero-cta svelte-1q37ri0" data-aos="fade-up" data-aos-delay="400"><a href="/solicitar-projeto" class="primary-cta svelte-1q37ri0"><span class="svelte-1q37ri0">Iniciar Meu Projeto</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="svelte-1q37ri0"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1q37ri0"></path></svg></a> <a href="#projects" class="secondary-cta svelte-1q37ri0"><span class="svelte-1q37ri0">Ver Portfólio</span></a></div></div> <div class="hero-visual svelte-1q37ri0" data-aos="fade-left" data-aos-delay="500"><div class="visual-card svelte-1q37ri0"><div class="card-glow svelte-1q37ri0"></div> <img src="/ProfileFoto.jpeg" alt="Calebe Araújo - Desenvolvedor" class="svelte-1q37ri0"/> <div class="card-overlay svelte-1q37ri0"><div class="tech-badge svelte-1q37ri0">Svelte</div> <div class="tech-badge svelte-1q37ri0">React</div> <div class="tech-badge svelte-1q37ri0">Angular</div> <div class="tech-badge svelte-1q37ri0">Meta Ads</div></div></div></div></div></div> <div class="scroll-indicator svelte-1q37ri0" data-aos="fade-up" data-aos-delay="600"><span class="svelte-1q37ri0">Role para explorar</span> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="svelte-1q37ri0"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-1q37ri0"></path></svg></div></section>`);
}
function Skills($$renderer) {
  const skillCategories = [
    {
      name: "Desenvolvimento Web",
      skills: [
        {
          icon: "devicon-html5-plain",
          title: "HTML5",
          description: "Estruturação semântica e acessível para melhor SEO"
        },
        {
          icon: "devicon-css3-plain",
          title: "CSS3",
          description: "Layouts responsivos com Flexbox, Grid e SASS"
        },
        {
          icon: "devicon-javascript-plain",
          title: "JavaScript",
          description: "ES6+, APIs modernas e desenvolvimento interativo"
        },
        {
          icon: "devicon-svelte-plain",
          title: "Svelte",
          description: "Framework reativo e performático com SvelteKit"
        },
        {
          icon: "devicon-angular-plain",
          title: "Angular",
          description: "Aplicações escaláveis com TypeScript e RxJS"
        },
        {
          icon: "devicon-react-plain",
          title: "React",
          description: "Interfaces dinâmicas com Hooks e Context API"
        }
      ]
    },
    {
      name: "Marketing Digital",
      aosDelay: "100",
      skills: [
        {
          icon: "fas fa-chart-line",
          title: "Meta Ads",
          description: "Gestão de campanhas e otimização de conversão"
        },
        {
          icon: "fas fa-bullseye",
          title: "Tráfego Pago",
          description: "Estratégias de aquisição e remarketing"
        },
        {
          icon: "fas fa-chart-bar",
          title: "Analytics",
          description: "Análise de dados e otimização de campanhas"
        }
      ]
    },
    {
      name: "Tecnologias Emergentes",
      aosDelay: "200",
      skills: [
        {
          icon: "fas fa-robot",
          title: "IA Generativa",
          description: "Integração de LLMs e ferramentas de IA"
        },
        {
          icon: "fas fa-camera",
          title: "Fotografia",
          description: "Produção visual para marketing digital"
        },
        {
          icon: "fas fa-mobile-alt",
          title: "Mobile Dev",
          description: "Flutter e Kotlin para apps multiplataforma"
        }
      ]
    },
    {
      name: "Back-end & Dados",
      aosDelay: "300",
      skills: [
        {
          icon: "devicon-python-plain",
          title: "Python",
          description: "Django, Flask e automação de processos"
        },
        {
          icon: "devicon-java-plain",
          title: "Java",
          description: "Spring Boot e desenvolvimento robusto"
        },
        {
          icon: "devicon-mysql-plain",
          title: "SQL",
          description: "Modelagem e gestão de dados relacionais"
        }
      ]
    }
  ];
  head("1f1pl16", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" class="svelte-1f1pl16"/> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" class="svelte-1f1pl16"/>`);
  });
  $$renderer.push(`<section id="skills" class="skills-section svelte-1f1pl16" data-scroll-progress=""><div class="skills-container svelte-1f1pl16"><h2 data-aos="fade-up" class="svelte-1f1pl16">Habilidades Técnicas</h2> <div class="skills-categories svelte-1f1pl16"><!--[-->`);
  const each_array = ensure_array_like(skillCategories);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let category = each_array[$$index_1];
    $$renderer.push(`<div class="category svelte-1f1pl16" data-aos="fade-up"${attr("data-aos-delay", category.aosDelay || "0")}><h3 class="svelte-1f1pl16">${escape_html(category.name)}</h3> <div class="skills-grid svelte-1f1pl16"><!--[-->`);
    const each_array_1 = ensure_array_like(category.skills);
    for (let i = 0, $$length2 = each_array_1.length; i < $$length2; i++) {
      let skill = each_array_1[i];
      $$renderer.push(`<div class="skill-card svelte-1f1pl16" data-aos="fade-up"${attr("data-aos-delay", i * 50)}><div class="skill-icon svelte-1f1pl16"><i${attr_class(clsx(skill.icon), "svelte-1f1pl16")}></i></div> <h4 class="svelte-1f1pl16">${escape_html(skill.title)}</h4> <p class="svelte-1f1pl16">${escape_html(skill.description)}</p></div>`);
    }
    $$renderer.push(`<!--]--></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function Testimonials($$renderer) {
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO",
      company: "Tech Solutions",
      text: "Excelente profissional! Entregou um trabalho impecável e superou todas as expectativas."
    },
    {
      name: "Maria Santos",
      role: "Gerente de Marketing",
      company: "Digital Agency",
      text: "A combinação de habilidades técnicas e de marketing fez toda a diferença no nosso projeto."
    },
    {
      name: "Carlos Oliveira",
      role: "Founder",
      company: "StartupXYZ",
      text: "Profissionalismo e qualidade incomparáveis. Recomendo fortemente!"
    }
  ];
  $$renderer.push(`<section class="testimonials-section svelte-1jhcrt0"><div class="testimonials-container svelte-1jhcrt0"><h2 data-aos="fade-up" class="svelte-1jhcrt0">Depoimentos</h2> <div class="testimonials-grid svelte-1jhcrt0"><!--[-->`);
  const each_array = ensure_array_like(testimonials);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let testimonial = each_array[i];
    $$renderer.push(`<div class="testimonial-card svelte-1jhcrt0" data-aos="fade-up"${attr("data-aos-delay", i * 100)}><div class="quote-icon svelte-1jhcrt0">"</div> <p class="testimonial-text svelte-1jhcrt0">${escape_html(testimonial.text)}</p> <div class="testimonial-author svelte-1jhcrt0"><div class="author-info svelte-1jhcrt0"><h4 class="svelte-1jhcrt0">${escape_html(testimonial.name)}</h4> <p class="svelte-1jhcrt0">${escape_html(testimonial.role)} · ${escape_html(testimonial.company)}</p></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function CallToAction($$renderer) {
  $$renderer.push(`<section class="cta-section svelte-153nv9l"><div class="parallax-container svelte-153nv9l"><div class="cta-content svelte-153nv9l" data-aos="fade-up"><h2 class="svelte-153nv9l">Vamos Transformar sua Visão em Realidade</h2> <p class="svelte-153nv9l">Combine desenvolvimento web de alta qualidade com estratégias de marketing digital eficientes</p> <div class="cta-buttons svelte-153nv9l"><a href="#contact" class="primary-button svelte-153nv9l">Iniciar Projeto</a> <a href="#projects" class="secondary-button svelte-153nv9l">Ver Portfólio</a></div></div></div></section>`);
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Portfolio - Calebe Araújo</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Portfolio profissional de Calebe Araújo - Desenvolvedor Full Stack e Gestor de Tráfego"/>`);
  });
  $$renderer.push(`<main class="svelte-1uha8ag"><section id="home" data-scroll-progress="" class="svelte-1uha8ag">`);
  Hero($$renderer);
  $$renderer.push(`<!----></section> <section id="about" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  About($$renderer);
  $$renderer.push(`<!----></section> <section id="skills" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Skills($$renderer);
  $$renderer.push(`<!----></section> <section id="services" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Services($$renderer);
  $$renderer.push(`<!----></section> <section id="experience" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Experience($$renderer);
  $$renderer.push(`<!----></section> <section id="projects" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Projects($$renderer);
  $$renderer.push(`<!----></section> <section id="testimonials" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Testimonials($$renderer);
  $$renderer.push(`<!----></section> <section id="cta" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  CallToAction($$renderer);
  $$renderer.push(`<!----></section> <section id="contact" data-scroll="" data-scroll-progress="" class="svelte-1uha8ag">`);
  Contact($$renderer);
  $$renderer.push(`<!----></section></main>`);
}
export {
  _page as default
};
