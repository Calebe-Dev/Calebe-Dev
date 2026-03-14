import { a1 as head } from "../../../chunks/index2.js";
import { P as Projects } from "../../../chunks/Projects.js";
function _page($$renderer) {
  head("16dim71", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Projetos | Cases de SEO, Performance e Conversão</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Veja projetos desenvolvidos com foco em performance web, SEO técnico e aumento de conversão para negócios digitais."/>`);
  });
  Projects($$renderer);
}
export {
  _page as default
};
