import "clsx";
import "aos";
import { v as attr_class, w as attr, x as attr_style, y as stringify } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
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
    })}><div class="navbar-container svelte-rfuq4y"><button aria-label="Menu"${attr("aria-expanded", mobileMenuOpen)} aria-controls="mobile-menu" class="hamburger svelte-rfuq4y"><span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span> <span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span> <span${attr_class("svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}></span></button> <nav id="mobile-menu"${attr("aria-hidden", !mobileMenuOpen)}${attr_class("navbar-content svelte-rfuq4y", void 0, { "open": mobileMenuOpen })}><div class="lens svelte-rfuq4y"${attr_style(`left: ${stringify(lensPosition)}px; width: ${stringify(lensWidth)}px;`)}></div> <button aria-label="Fechar" class="close-btn svelte-rfuq4y">×</button> <a href="/" class="home-link svelte-rfuq4y">Início</a> <a href="https://calebearaujo.com.br/#about" class="svelte-rfuq4y">Sobre</a> <a href="https://calebearaujo.com.br/#services" class="svelte-rfuq4y">Serviços</a> <a href="https://calebearaujo.com.br/#projects" class="svelte-rfuq4y">Projetos</a> <a href="https://calebearaujo.com.br/#experience" class="svelte-rfuq4y">Experiência</a> <a href="/blog" class="svelte-rfuq4y">Blog</a> <a class="btnSolicitarProjeto svelte-rfuq4y" href="/solicitar-projeto/redirect">Solicitar Projeto</a> <a href="https://wa.me/5511988385247" target="_blank" rel="noopener" class="highlight svelte-rfuq4y">Whatsapp</a></nav></div></header>`);
  });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="footer svelte-jz8lnl"><div class="footer-container svelte-jz8lnl"><div class="footer-content svelte-jz8lnl"><div class="footer-brand svelte-jz8lnl"><h3 class="svelte-jz8lnl">Calebe Araújo</h3> <p class="svelte-jz8lnl">Desenvolvedor Full Stack &amp; Gestor de Tráfego</p></div> <div class="footer-links svelte-jz8lnl"><div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Navegação</h4> <a href="#home" class="svelte-jz8lnl">Início</a> <a href="#about" class="svelte-jz8lnl">Sobre</a> <a href="#services" class="svelte-jz8lnl">Serviços</a> <a href="#projects" class="svelte-jz8lnl">Projetos</a></div> <div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Social</h4> <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">LinkedIn</a> <a href="https://github.com/calebe_original" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">GitHub</a> <a href="https://www.instagram.com/calebe_original/" target="_blank" rel="noopener noreferrer" class="svelte-jz8lnl">Instagram</a></div> <div class="link-group svelte-jz8lnl"><h4 class="svelte-jz8lnl">Contato</h4> <a href="mailto:seu-email@dominio.com" class="svelte-jz8lnl">Email</a> <a href="#contact" class="svelte-jz8lnl">Formulário</a></div></div></div> <div class="footer-bottom svelte-jz8lnl"><p class="svelte-jz8lnl">© 2024 Calebe Araújo. Todos os direitos reservados.</p></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    Navbar($$renderer2);
    $$renderer2.push(`<!----> `);
    children($$renderer2);
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _layout as default
};
