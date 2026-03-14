import { _ as attr, Z as attr_class } from "./index2.js";
function SectionSlide($$renderer, $$props) {
  let { children, class: className = "", id = "" } = $$props;
  $$renderer.push(`<div${attr("id", id)}${attr_class(`apple-gridline min-h-[100svh] w-full relative flex items-center justify-center snap-start overflow-x-hidden pt-24 pb-16 md:pt-28 md:pb-20 ${className}`)}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function AnimatedBlock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { delay = 0, class: className = "", children } = $$props;
    $$renderer2.push(`<div${attr_class(`transition-all duration-1000 ${"opacity-0 translate-y-8"} ${className}`)}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  AnimatedBlock as A,
  SectionSlide as S
};
