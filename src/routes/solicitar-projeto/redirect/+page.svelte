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
  min-height: 60vh;
  padding: 3rem 1rem;
}

.container {
  max-width: 720px;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(12px) saturate(180%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  text-align: center;
}

h1 {
  margin: 0 0 0.75rem 0;
  font-size: 1.6rem;
}

p {
  color: rgba(0,0,0,0.75);
  margin-bottom: 1.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

button.primary {
  background: #25D366; /* WhatsApp green */
  color: #fff;
  border: 0;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
}

a.muted {
  color: rgba(0,0,0,0.6);
  text-decoration: underline;
  font-size: 0.95rem;
}
</style>
