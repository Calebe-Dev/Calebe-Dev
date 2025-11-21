import "clsx";
import { A as About } from "../../../chunks/About.js";
function _page($$renderer) {
  $$renderer.push(`<main><section class="page-section"><div class="container">`);
  About($$renderer);
  $$renderer.push(`<!----></div></section></main>`);
}
export {
  _page as default
};
