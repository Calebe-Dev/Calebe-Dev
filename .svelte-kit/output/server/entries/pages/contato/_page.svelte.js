import { a1 as head } from "../../../chunks/index2.js";
import { C as Contact } from "../../../chunks/Contact.js";
function _page($$renderer) {
  head("uefrkt", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contato | Solicite seu Projeto Web</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Entre em contato para criar um site profissional com SEO técnico, performance web e foco em geração de leads."/>`);
  });
  Contact($$renderer);
}
export {
  _page as default
};
