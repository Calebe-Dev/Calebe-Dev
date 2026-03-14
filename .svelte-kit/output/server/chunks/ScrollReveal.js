import { Z as attr_class, $ as attr_style } from "./index2.js";
function ScrollReveal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      animation = "fade-up",
      delay = 0,
      duration = 1e3,
      class: className = "",
      threshold = 0.15,
      once = true,
      children
    } = $$props;
    let scrollProgress = 0;
    const getTransform = () => {
      {
        switch (animation) {
          case "fade-up":
            return "translateY(60px)";
          case "fade-down":
            return "translateY(-60px)";
          case "scale":
            return "scale(0.8)";
          case "slide-left":
            return "translateX(-100px)";
          case "slide-right":
            return "translateX(100px)";
          case "rotate":
            return "rotate(-10deg) scale(0.9)";
          case "parallax":
            return `translateY(${scrollProgress * 100}px)`;
          case "blur":
            return "translateY(40px)";
          default:
            return "translateY(60px)";
        }
      }
    };
    const getOpacity = () => {
      return 0;
    };
    const getBlur = () => {
      if (animation === "blur" && true && true) return "blur(10px)";
      return "blur(0)";
    };
    $$renderer2.push(`<div${attr_class(`transition-all ease-out ${className}`)}${attr_style(`
		transform: ${getTransform()};
		opacity: ${getOpacity()};
		filter: ${getBlur()};
		transition-duration: ${duration}ms;
	`)}>`);
    children($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  ScrollReveal as S
};
