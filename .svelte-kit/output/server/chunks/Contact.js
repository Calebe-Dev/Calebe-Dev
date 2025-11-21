import { z as head, F as ensure_array_like, w as attr, v as attr_class, y as stringify, G as clsx } from "./index2.js";
import { e as escape_html } from "./context.js";
function Contact($$renderer) {
  const contactCards = [
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description: "Vamos expandir nossa rede profissional",
      link: "https://www.linkedin.com/in/calebe-dev",
      linkLabel: "Conectar",
      cssClass: "linkedin"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      description: "Explore meus projetos e contribuições",
      link: "https://github.com/Calebe-Dev",
      linkLabel: "Ver Projetos",
      cssClass: "github"
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      description: "Acompanhe meu dia a dia profissional",
      link: "https://www.instagram.com/calebe_original/",
      linkLabel: "Seguir",
      cssClass: "instagram"
    },
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      description: "Vamos conversar sobre seu projeto",
      link: "mailto:seu-email@dominio.com",
      linkLabel: "Enviar mensagem",
      cssClass: "email"
    }
  ];
  head("wt4tt0", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>`);
  });
  $$renderer.push(`<section id="contact" class="contact-section svelte-wt4tt0"><div class="glass-overlay svelte-wt4tt0"></div> <div class="contact-container svelte-wt4tt0"><h2 data-aos="fade-up" class="svelte-wt4tt0">Vamos Conectar</h2> <div data-aos="fade-up" class="social-grid svelte-wt4tt0"><!--[-->`);
  const each_array = ensure_array_like(contactCards);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let card = each_array[i];
    $$renderer.push(`<a${attr("href", card.link)} target="_blank" rel="noopener"${attr_class(`social-card ${stringify(card.cssClass)}`, "svelte-wt4tt0")}${attr("data-aos-delay", i * 100)}><div class="card-content svelte-wt4tt0"><div class="icon-wrapper svelte-wt4tt0"><i${attr_class(clsx(card.icon), "svelte-wt4tt0")}></i></div> <h3 class="svelte-wt4tt0">${escape_html(card.title)}</h3> <p class="svelte-wt4tt0">${escape_html(card.description)}</p> <span class="arrow-link svelte-wt4tt0">${escape_html(card.linkLabel)} <i class="fas fa-arrow-right"></i></span></div> <div class="card-shine svelte-wt4tt0"></div></a>`);
  }
  $$renderer.push(`<!--]--></div> <div data-aos="fade-up" class="contact-footer svelte-wt4tt0"><div class="footer-glass svelte-wt4tt0"><p class="svelte-wt4tt0">Disponível para projetos freelance e oportunidades profissionais</p> <span class="availability svelte-wt4tt0">Atualmente disponível para novos projetos</span></div></div></div></section>`);
}
export {
  Contact as C
};
