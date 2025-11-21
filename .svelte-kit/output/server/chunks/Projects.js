import { z as head, F as ensure_array_like, w as attr } from "./index2.js";
import { e as escape_html } from "./context.js";
const thumbs = {
  "https://alphacompanyads.com.br/": "/projects/alphacompanyads.com.br.png",
  "https://blog.bellemodaintima.com.br/": "/projects/blog.bellemodaintima.com.br.png",
  "https://planotimempresa.com.br/": "/projects/planotimempresa.com.br.png",
  "https://esquadriasmartins.com.br/": "/projects/esquadriasmartins.com.br.png",
  "https://internetfibraagora.com.br/": "/projects/internetfibraagora.com.br.png",
  "https://buenoswatertechnology.com.br/": "/projects/buenoswatertechnology.com.br.png",
  "https://grupooc.com.br/": "/projects/grupooc.com.br.ico",
  "https://linkdedicada.com.br/": "/projects/linkdedicada.com.br.png",
  "https://meupabxemnuvem.com.br/": "/projects/meupabxemnuvem.com.br.png",
  "https://leadplanodesaude.com.br/": "/projects/leadplanodesaude.com.br.png"
};
function Projects($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const projects = [
      {
        category: "Ads / Marketing",
        title: "alphacompanyads.com.br",
        description: "Desenvolvido totalmente por Calebe — plataforma de anúncios e gestão de campanhas, com foco em performance e conversões. Inclui trabalho de SEO técnico e estratégico.",
        date: "2025",
        context: "Desenvolvimento full — front-end e integrações",
        url: "https://alphacompanyads.com.br/",
        aosDelay: ""
      },
      {
        category: "Diretório Local",
        title: "sorocabaindica.com.br",
        description: "Portal local desenvolvido para Sorocaba — listas e recomendações de serviços e negócios locais, com foco em encontrar fornecedores e parceiros na região. Inclui trabalho de SEO técnico e estratégico.",
        date: "2025",
        context: "Desenvolvimento e manutenção — projeto local",
        url: "https://sorocabaindica.com.br/",
        aosDelay: "50"
      },
      {
        category: "Blog / E-commerce",
        title: "blog.bellemodaintima.com.br",
        description: "Blog da Belle Moda Íntima — conteúdo editorial, artigos e atualizações de produtos; integração com plataforma de e-commerce e estratégias de SEO. Inclui trabalho de SEO técnico e estratégico.",
        date: "2025",
        context: "Desenvolvimento front-end e integração com CMS",
        url: "https://blog.bellemodaintima.com.br/",
        aosDelay: "100"
      },
      {
        category: "Grupo OC — Telecom",
        title: "planotimempresa.com.br",
        description: "Desenvolvido para Grupo OC. SPA em Angular que promove planos de telefonia e internet TIM para empresas, com foco em TIM Black Empresa, ligações ilimitadas e benefícios de apps sem consumir franquia. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Desenvolvido para Grupo OC (Angular SPA)",
        url: "https://planotimempresa.com.br/",
        aosDelay: ""
      },
      {
        category: "Esquadrias",
        title: "esquadriasmartins.com.br",
        description: "Site da Esquadrias Martins — mais de 30 anos de experiência em esquadrias de alumínio em Sorocaba. Portas, portões, janelas e brises para residências e edifícios. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Desenvolvido para Esquadrias Martins",
        url: "https://esquadriasmartins.com.br/",
        aosDelay: "100"
      },
      {
        category: "Grupo OC — Internet",
        title: "internetfibraagora.com.br",
        description: "Site para venda de planos fibra óptica (PF/PJ) com ofertas e opções para empresas e residências. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Desenvolvido para Grupo OC",
        url: "https://internetfibraagora.com.br/",
        aosDelay: "200"
      },
      {
        category: "Serviços",
        title: "buenoswatertechnology.com.br",
        description: "Site de serviços: atualização e manutenção — projeto de prestação de serviços técnicos e manutenção industrial. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Atualização e manutenção",
        url: "https://buenoswatertechnology.com.br/",
        aosDelay: "300"
      },
      {
        category: "Grupo OC — Institucional",
        title: "grupooc.com.br",
        description: "Site institucional do Grupo OC: OC Tel (telecom), OC Digital (marketing) e OC Saúde (planos de saúde) — soluções de assessoria e consultoria empresarial. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Projeto institucional do Grupo OC",
        url: "https://grupooc.com.br/",
        aosDelay: "400"
      },
      {
        category: "Grupo OC — Conectividade",
        title: "linkdedicada.com.br",
        description: "Oferta de Link Dedicado de internet para empresas: conexões estáveis com mesma taxa de download/upload e SLA dedicado. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Projeto Grupo OC",
        url: "https://linkdedicada.com.br/",
        aosDelay: "500"
      },
      {
        category: "Grupo OC — Telecom",
        title: "meupabxemnuvem.com.br",
        description: "Promoção de soluções de PABX em nuvem (GoTo) com mais de 100 recursos para comunicação empresarial moderna e escalável. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Projeto Grupo OC",
        url: "https://meupabxemnuvem.com.br/",
        aosDelay: "600"
      },
      {
        category: "Saúde Empresarial",
        title: "leadplanodesaude.com.br",
        description: "Site focado em planos de saúde empresariais, consultoria para otimização de custos com operadoras como Amil, Bradesco Saúde e outras. Inclui trabalho de SEO técnico e estratégico.",
        date: "Atualizado 2025",
        context: "Grupo OC — Planos de Saúde",
        url: "https://leadplanodesaude.com.br/",
        aosDelay: "700"
      }
    ];
    function getFaviconUrl(siteUrl, size = 128) {
      try {
        const url = new URL(siteUrl);
        return `https://www.google.com/s2/favicons?sz=${size}&domain_url=${encodeURIComponent(url.origin)}`;
      } catch (e) {
        return `/projects/default.svg`;
      }
    }
    head("1tes396", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>`);
    });
    $$renderer2.push(`<section class="projects-section svelte-1tes396" id="projects"><div class="projects-container svelte-1tes396"><div class="section-header svelte-1tes396" data-aos="fade-up"><span class="section-badge svelte-1tes396">Portfólio</span> <h2 class="svelte-1tes396">Projetos que fazem a diferença</h2> <p class="section-subtitle svelte-1tes396">Experiências digitais criadas com paixão, precisão e propósito</p></div> <div class="projects-grid svelte-1tes396"><!--[-->`);
    const each_array = ensure_array_like(projects);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let project = each_array[i];
      $$renderer2.push(`<article class="project-card svelte-1tes396" data-aos="fade-up"${attr("data-aos-delay", i * 100)}><div class="project-header svelte-1tes396"><div class="project-thumb-bg svelte-1tes396" aria-hidden="true">`);
      if (project.thumbnail) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img class="project-thumb svelte-1tes396"${attr("src", project.thumbnail)}${attr("alt", `${project.title} thumbnail`)}/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (thumbs && thumbs[project.url]) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<img class="project-thumb svelte-1tes396"${attr("src", thumbs[project.url])}${attr("alt", `${project.title} thumbnail`)}/>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<img class="project-thumb svelte-1tes396"${attr("src", getFaviconUrl(project.url, 128))}${attr("alt", `${project.title} favicon`)}/>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></div> <span class="project-category svelte-1tes396">${escape_html(project.category)}</span> <div class="project-icon svelte-1tes396"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="svelte-1tes396"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div> <div class="project-body svelte-1tes396"><h3 class="svelte-1tes396">${escape_html(project.title)}</h3> <span class="seo-badge svelte-1tes396">SEO técnico</span> <p class="project-description svelte-1tes396">${escape_html(project.description)}</p> <div class="project-meta svelte-1tes396">`);
      if (project.context) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="meta-item svelte-1tes396"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="svelte-1tes396"><path d="M8 2v12M12 6l-4-4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> ${escape_html(project.context)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <span class="meta-item svelte-1tes396"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="svelte-1tes396"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"></circle><path d="M8 4v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg> ${escape_html(project.date)}</span></div></div> <div class="project-footer svelte-1tes396"><a${attr("href", project.url)} target="_blank" rel="noopener" class="project-link svelte-1tes396"><span class="svelte-1tes396">Visitar site</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="svelte-1tes396"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></article>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
export {
  Projects as P
};
