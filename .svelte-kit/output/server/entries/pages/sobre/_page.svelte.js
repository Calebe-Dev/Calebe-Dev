import { a1 as head } from "../../../chunks/index2.js";
import { A as About } from "../../../chunks/About.js";
function _page($$renderer) {
  head("x824lu", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Sobre | Calebe Araújo - Desenvolvedor Full Stack</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Conheça Calebe Araújo: desenvolvedor full stack com foco em SEO técnico, performance web e criação de sites de alta conversão."/>`);
  });
  About($$renderer);
}
export {
  _page as default
};
