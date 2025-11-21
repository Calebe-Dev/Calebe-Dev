import "clsx";
import { P as Projects } from "../../../chunks/Projects.js";
function _page($$renderer) {
  $$renderer.push(`<main><section class="page-section"><div class="container">`);
  Projects($$renderer);
  $$renderer.push(`<!----></div></section></main>`);
}
export {
  _page as default
};
