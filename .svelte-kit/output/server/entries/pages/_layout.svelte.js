import { Z as attr_class, _ as attr, $ as attr_style, a0 as stringify, a1 as head, a2 as store_get, a3 as unsubscribe_stores } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { g as getContext, e as escape_html } from "../../chunks/context.js";
import "clsx";
import "aos";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let lensPosition = 0;
    let lensWidth = 0;
    let mobileMenuOpen = false;
    let isScrolled = false;
    $$renderer2.push(`<header${attr_class("navbar svelte-rfuq4y", void 0, {
      "menu-open": (
        // Initialize lens on first link (desktop)
        mobileMenuOpen
      ),
      "scrolled": isScrolled
    })}><div class="navbar-container svelte-rfuq4y"><button aria-label="Menu"${attr("aria-expanded", mobileMenuOpen)} aria-controls="mobile-menu" class="hamburger svelte-rfuq4y"><span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span> <span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span> <span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span></button> <nav id="mobile-menu"${attr("aria-hidden", !mobileMenuOpen)}${attr_class("navbar-content svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}><div class="lens svelte-rfuq4y"${attr_style(`left: ${stringify(lensPosition)}px; width: ${stringify(lensWidth)}px;`)}></div> <button aria-label="Fechar" class="close-btn svelte-rfuq4y">×</button> <a href="/" class="home-link svelte-rfuq4y">Início</a> <a href="/sobre" class="svelte-rfuq4y">Sobre</a> <a href="/servicos" class="svelte-rfuq4y">Serviços</a> <a href="/projetos" class="svelte-rfuq4y">Projetos</a> <a href="/experiencia" class="svelte-rfuq4y">Experiência</a> <a href="/blog" class="svelte-rfuq4y">Blog</a> <a class="btnSolicitarProjeto svelte-rfuq4y" href="/solicitar-projeto">Solicitar Projeto</a> <a href="/solicitar-projeto/redirect" class="highlight svelte-rfuq4y">Whatsapp</a></nav></div></header>`);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<footer class="footer svelte-jz8lnl"><div class="footer-container svelte-jz8lnl"><div class="footer-content svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><h3 class="svelte-jz8lnl">Calebe Araújo</h3> <p class="svelte-jz8lnl">Full Stack, performance web e growth para produtos digitais de alto impacto.</p></div> <div class="footer-links svelte-jz8lnl"><div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Navegação</h4> <a href="/" class="svelte-jz8lnl">Início</a> <a href="/sobre" class="svelte-jz8lnl">Sobre</a> <a href="/servicos" class="svelte-jz8lnl">Serviços</a> <a href="/projetos" class="svelte-jz8lnl">Projetos</a></div> <div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Social</h4> <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">LinkedIn</a> <a href="https://github.com/Calebe-Dev" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">GitHub</a> <a href="https://www.instagram.com/calebe_original/" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">Instagram</a></div> <div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Contato</h4> <a href="mailto:contato@calebearaujo.com.br" class="svelte-jz8lnl">Email</a> <a href="/contato" class="svelte-jz8lnl">Contato</a> <a href="/solicitar-projeto" class="svelte-jz8lnl">Solicitar projeto</a></div></div></div> <div class="footer-bottom svelte-jz8lnl"><p class="svelte-jz8lnl">© ${escape_html(
      // Footer component
      (/* @__PURE__ */ new Date()).getFullYear()
    )} Calebe Araújo. Todos os direitos reservados.</p></div></div></footer>`);
  });
}
function ThemeToggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentTheme = "dark";
    $$renderer2.push(`<button class="theme-toggle svelte-1cmi4dh"${attr("aria-pressed", currentTheme === "dark")} aria-label="Toggle theme"${attr("title", "Mudar para tema claro")}><span class="bg svelte-1cmi4dh" aria-hidden="true"></span> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span class="icon svelte-1cmi4dh" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-1cmi4dh"><circle cx="12" cy="12" r="4" fill="currentColor"></circle><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M4.93 4.93l1.41 1.41"></path><path d="M17.66 17.66l1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M4.93 19.07l1.41-1.41"></path><path d="M17.66 6.34l1.41-1.41"></path></g></svg></span>`);
    }
    $$renderer2.push(`<!--]--></button>`);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const SITE_URL = "https://calebearaujo.com.br";
    const DEFAULT_TITLE = "Calebe Araújo | Desenvolvedor Full Stack, SEO Técnico e Performance Web";
    const DEFAULT_DESCRIPTION = "Desenvolvedor Full Stack em Sorocaba: criação de sites profissionais, landing pages e aplicações web rápidas, com SEO técnico, Core Web Vitals e foco em conversão.";
    const DEFAULT_IMAGE = "/meta/og-image.png";
    let { children } = $$props;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Calebe Araújo | Desenvolvedor Full Stack, SEO Técnico e Performance Web</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", DEFAULT_DESCRIPTION)}/> <meta name="keywords" content="desenvolvedor full stack, criação de sites, site profissional, landing page, seo técnico, performance web, core web vitals, sveltekit, tráfego pago"/> <meta name="robots" content="index,follow,max-image-preview:large"/> <link rel="canonical"${attr("href", SITE_URL + store_get($$store_subs ??= {}, "$page", page).url.pathname + (store_get($$store_subs ??= {}, "$page", page).url.search || ""))}/> <meta property="og:site_name" content="Calebe Araújo"/> <meta property="og:title"${attr("content", DEFAULT_TITLE)}/> <meta property="og:description"${attr("content", DEFAULT_DESCRIPTION)}/> <meta property="og:type" content="website"/> <meta property="og:url"${attr("content", SITE_URL + store_get($$store_subs ??= {}, "$page", page).url.pathname)}/> <meta property="og:image"${attr("content", SITE_URL + DEFAULT_IMAGE)}/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", DEFAULT_TITLE)}/> <meta name="twitter:description"${attr("content", DEFAULT_DESCRIPTION)}/> <meta name="twitter:image"${attr("content", SITE_URL + DEFAULT_IMAGE)}/> <meta name="theme-color" content="#000000"/> <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/> <script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Calebe Araújo',
		url: SITE_URL,
		jobTitle: 'Desenvolvedor Full Stack e Especialista em SEO Técnico',
		sameAs: [
			'https://www.linkedin.com/in/calebe-dev',
			'https://github.com/Calebe-Dev',
			'https://instagram.com/calebe_original'
		],
		description: DEFAULT_DESCRIPTION,
		image: SITE_URL + '/meta/og-image.png',
		knowsAbout: ['Desenvolvimento Full Stack', 'SvelteKit', 'React', 'SEO técnico', 'Core Web Vitals', 'Meta Ads'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Sorocaba',
			addressRegion: 'SP',
			addressCountry: 'BR'
		}
	})}<\/script>`);
    });
    Navbar($$renderer2);
    $$renderer2.push(`<!----> <div class="relative z-50">`);
    ThemeToggle($$renderer2);
    $$renderer2.push(`<!----></div> `);
    children($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
