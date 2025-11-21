import { z as head, F as ensure_array_like, w as attr } from "./index2.js";
import { e as escape_html } from "./context.js";
function Projects($$renderer) {
  const projects = [
    {
      category: "Angular & JSON Server",
      title: "Lista de Músicas",
      description: "Aplicação web para exibição de músicas com informações detalhadas, desenvolvida com Angular e Bootstrap, consumindo dados via JSON Server.",
      date: "11 Set 2023",
      context: "ADS 3º Semestre - Programação Web",
      github: "#",
      aosDelay: ""
    },
    {
      category: "Spring Boot",
      title: "API Agenda de Compromissos",
      description: "Back-end de uma agenda desenvolvida com Spring Boot, implementando REST APIs e boas práticas de desenvolvimento.",
      date: "12 Nov 2023",
      context: "Projeto Final - Programação Web",
      github: "#",
      aosDelay: "100"
    },
    {
      category: "HTML, CSS & JS",
      title: "Portfólio Interativo",
      description: "Projeto de demonstração criando uma experiência única e interativa para o usuário utilizando tecnologias web fundamentais.",
      date: "15 Fev 2023",
      context: "",
      github: "#",
      aosDelay: "200"
    },
    {
      category: "Landing Page",
      title: "Douglas Castro",
      description: "Página de vendas otimizada para conversão, com design moderno e foco em experiência do usuário.",
      date: "15 Fev 2023",
      context: "",
      github: "#",
      aosDelay: "300"
    }
  ];
  head("1tes396", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>`);
  });
  $$renderer.push(`<section class="projects-section svelte-1tes396" id="projects"><div class="projects-container svelte-1tes396"><div class="section-header svelte-1tes396" data-aos="fade-up"><span class="section-badge svelte-1tes396">Portfólio</span> <h2 class="svelte-1tes396">Projetos que fazem a diferença</h2> <p class="section-subtitle svelte-1tes396">Experiências digitais criadas com paixão, precisão e propósito</p></div> <div class="projects-grid svelte-1tes396"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let project = each_array[i];
    $$renderer.push(`<article class="project-card svelte-1tes396" data-aos="fade-up"${attr("data-aos-delay", i * 100)}><div class="project-header svelte-1tes396"><span class="project-category svelte-1tes396">${escape_html(project.category)}</span> <div class="project-icon svelte-1tes396"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div> <div class="project-body svelte-1tes396"><h3 class="svelte-1tes396">${escape_html(project.title)}</h3> <p class="project-description svelte-1tes396">${escape_html(project.description)}</p> <div class="project-meta svelte-1tes396">`);
    if (project.context) {
      $$renderer.push("<!--[-->");
      $$renderer.push(`<span class="meta-item svelte-1tes396"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="svelte-1tes396"><path d="M8 2v12M12 6l-4-4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${escape_html(project.context)}</span>`);
    } else {
      $$renderer.push("<!--[!-->");
    }
    $$renderer.push(`<!--]--> <span class="meta-item svelte-1tes396"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="svelte-1tes396"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"></circle><path d="M8 4v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg> ${escape_html(project.date)}</span></div></div> <div class="project-footer svelte-1tes396"><a${attr("href", project.github)} target="_blank" rel="noopener" class="project-link svelte-1tes396"><span>Ver no GitHub</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="svelte-1tes396"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></article>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  Projects as P
};
