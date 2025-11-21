import { z as head, w as attr } from "../../../../chunks/index2.js";
import { o as onDestroy } from "../../../../chunks/index-server.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let countdown = 5;
    onDestroy(() => {
    });
    head("1v4kp2c", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Redirecionando para WhatsApp</title>`);
      });
      $$renderer3.push(`<meta name="robots" content="noindex"/>`);
    });
    $$renderer2.push(`<section class="redirect-page svelte-1v4kp2c"><div class="container svelte-1v4kp2c"><h1 class="svelte-1v4kp2c">Entrando em contato via WhatsApp</h1> <p class="svelte-1v4kp2c">Você será redirecionado para o WhatsApp em <strong>${escape_html(countdown)}s</strong>. Caso queira, clique no botão abaixo para ir agora.</p> <div class="actions svelte-1v4kp2c"><button class="primary svelte-1v4kp2c">Ir para o WhatsApp</button> <button class="secondary"${attr("aria-pressed", false)}>`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Cancelar redirecionamento (${escape_html(countdown)}s)`);
    }
    $$renderer2.push(`<!--]--></button> <a href="/" class="muted svelte-1v4kp2c">Voltar à página inicial</a></div></div></section>`);
  });
}
export {
  _page as default
};
