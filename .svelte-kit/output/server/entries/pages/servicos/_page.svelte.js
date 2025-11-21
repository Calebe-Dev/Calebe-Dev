import "clsx";
import { S as Services } from "../../../chunks/Services.js";
function _page($$renderer) {
  $$renderer.push(`<main><section class="page-section"><div class="container">`);
  Services($$renderer);
  $$renderer.push(`<!----></div></section></main>`);
}
export {
  _page as default
};
