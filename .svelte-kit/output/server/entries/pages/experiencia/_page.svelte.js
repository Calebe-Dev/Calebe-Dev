import "clsx";
import { E as Experience } from "../../../chunks/Experience.js";
function _page($$renderer) {
  $$renderer.push(`<main><section class="page-section"><div class="container">`);
  Experience($$renderer);
  $$renderer.push(`<!----></div></section></main>`);
}
export {
  _page as default
};
