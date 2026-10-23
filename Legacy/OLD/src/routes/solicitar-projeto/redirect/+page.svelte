<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // WhatsApp contact
  const PHONE = '5511988385247';
  const DEFAULT_MESSAGE = encodeURIComponent('Olá, gostaria de solicitar um projeto.');
  const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${DEFAULT_MESSAGE}`;

  let countdown = 5;
  let timerId: number | null = null;
  let autoRedirect = true;

  function goToWhatsapp() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    window.location.href = WHATSAPP_URL;
  }

  function cancel() {
    autoRedirect = false;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  onMount(() => {
    countdown = 5;
    if (autoRedirect) {
      timerId = window.setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          goToWhatsapp();
        }
      }, 1000);
    }
  });

  onDestroy(() => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  });
</script>

<svelte:head>
  <title>Redirecionando para WhatsApp</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="redirect-page">
  <div class="container">
    <h1>Entrando em contato via WhatsApp</h1>
    <p>Você será redirecionado para o WhatsApp em <strong>{countdown}s</strong>. Caso queira, clique no botão abaixo para ir agora.</p>
    <div class="actions">
      <button class="primary" on:click={goToWhatsapp}>Ir para o WhatsApp</button>
      <button class="secondary" on:click={cancel} aria-pressed={!autoRedirect}>
        {#if autoRedirect}
          Cancelar redirecionamento ({countdown}s)
        {:else}
          Redirecionamento cancelado
        {/if}
      </button>
      <a href="/" class="muted">Voltar à página inicial</a>
    </div>
  </div>
</section>

<style>
.redirect-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70svh;
  padding: 6rem 1rem 3rem;
}

.container {
  width: min(720px, 100%);
  background: rgba(8, 13, 26, 0.76);
  border: 1px solid rgba(166, 191, 244, 0.24);
  backdrop-filter: blur(12px) saturate(160%);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.75);
  text-align: center;
}

h1 {
  margin: 0 0 0.75rem 0;
  font-size: clamp(1.5rem, 3.4vw, 2rem);
  color: #f4f7ff;
}

p {
  color: #c4cde0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

button.primary {
  background: #25D366; /* WhatsApp green */
  color: #fff;
  border: 0;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

button.secondary {
  background: rgba(255, 255, 255, 0.08);
  color: #f4f7ff;
  border: 1px solid rgba(166, 191, 244, 0.24);
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
}

a.muted {
  color: #a9b6d4;
  text-decoration: underline;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  button.primary,
  button.secondary,
  a.muted {
    width: 100%;
    text-align: center;
  }
}
</style>
