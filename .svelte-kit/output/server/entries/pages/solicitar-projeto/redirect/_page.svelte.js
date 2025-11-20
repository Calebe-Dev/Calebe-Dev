import { z as head, w as attr } from "../../../../chunks/index2.js";
import { o as onDestroy } from "../../../../chunks/index-server.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { e as escape_html } from "../../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let countdown = 5;
    onDestroy(() => {
    });
    head("1v4kp2c", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Solicitar Projeto — Redirecionamento</title>`);
      });
      $$renderer3.push(`<meta name="robots" content="noindex"/>`);
    });
    $$renderer2.push(`<section class="redirect-page svelte-1v4kp2c"><div class="container svelte-1v4kp2c"><h1 class="svelte-1v4kp2c">Quase lá — Solicitação de Projeto</h1> <p class="svelte-1v4kp2c">Obrigado pelo interesse! Antes de redirecionar, verifique as informações do seu pedido. Clique no botão abaixo para continuar para o formulário de solicitação.</p> <div class="actions svelte-1v4kp2c"><button class="primary svelte-1v4kp2c">Continuar para o formulário</button> <button class="secondary"${attr("aria-pressed", false)}>`);
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
