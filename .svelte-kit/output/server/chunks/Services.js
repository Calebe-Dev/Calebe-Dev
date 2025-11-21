import { z as head, F as ensure_array_like, w as attr, v as attr_class, G as clsx } from "./index2.js";
import { e as escape_html } from "./context.js";
function Services($$renderer) {
  const serviceGroups = [
    {
      name: "Desenvolvimento Web",
      services: [
        {
          icon: "fas fa-laptop-code",
          title: "Sites Profissionais",
          description: "Websites responsivos e otimizados para performance e SEO"
        },
        {
          icon: "fas fa-palette",
          title: "Design de Interfaces",
          description: "Experiências visuais intuitivas e envolventes"
        },
        {
          icon: "fas fa-search",
          title: "Otimização SEO",
          description: "Melhore sua visibilidade nos motores de busca"
        },
        {
          icon: "fas fa-basket-shopping",
          title: "Lojas Virtuais",
          description: "E-commerce completo e integrado para seu negócio"
        },
        {
          icon: "fas fa-bolt",
          title: "Landing Pages",
          description: "Páginas otimizadas para alta conversão"
        }
      ]
    },
    {
      name: "Marketing Digital",
      aosDelay: "100",
      services: [
        {
          icon: "fas fa-bullhorn",
          title: "Gestão de Tráfego",
          description: "Campanhas otimizadas para Meta Ads com foco em conversão"
        },
        {
          icon: "fas fa-chart-line",
          title: "Performance Digital",
          description: "Estratégias data-driven para maximizar seu ROI"
        },
        {
          icon: "fas fa-rocket",
          title: "Lançamentos",
          description: "Estratégias para lançamentos digitais de sucesso"
        },
        {
          icon: "fas fa-envelope",
          title: "Email Marketing",
          description: "Automação e campanhas de email para engajamento e conversão"
        },
        {
          icon: "fas fa-comments",
          title: "Social Media",
          description: "Gestão de redes sociais para engajamento e crescimento"
        }
      ]
    }
  ];
  head("hz61c4", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>`);
  });
  $$renderer.push(`<section id="services" class="services-section svelte-hz61c4"><div class="services-container svelte-hz61c4"><h2 data-aos="fade-up" class="svelte-hz61c4">Soluções Digitais Completas</h2> <div class="services-categories svelte-hz61c4"><!--[-->`);
  const each_array = ensure_array_like(serviceGroups);
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let group = each_array[$$index_1];
    $$renderer.push(`<div class="services-group" data-aos="fade-up"${attr("data-aos-delay", group.aosDelay || "0")}><div class="cards-container svelte-hz61c4"><h3 class="svelte-hz61c4">${escape_html(group.name)}</h3> <div class="services-grid svelte-hz61c4"><!--[-->`);
    const each_array_1 = ensure_array_like(group.services);
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let service = each_array_1[$$index];
      $$renderer.push(`<div class="service-card svelte-hz61c4"><div class="icon-wrapper svelte-hz61c4"><i${attr_class(clsx(service.icon), "svelte-hz61c4")}></i></div> <div class="card-content svelte-hz61c4"><h4 class="svelte-hz61c4">${escape_html(service.title)}</h4> <p class="svelte-hz61c4">${escape_html(service.description)}</p></div> <div class="service-footer svelte-hz61c4"><a href="#contact" class="learn-more svelte-hz61c4">Saiba mais <i class="fas fa-arrow-right"></i></a></div></div>`);
    }
    $$renderer.push(`<!--]--></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
export {
  Services as S
};
