<script lang="ts">
  import { goto } from '$app/navigation';

  let countdown = 5; // seconds
  let timerId: number | null = null;
  let autoRedirect = true;

  function proceed() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
    goto('/solicitar-projeto');
  }

  function cancel() {
    autoRedirect = false;
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  // start countdown on mount
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    countdown = 5;
    if (autoRedirect) {
      timerId = window.setInterval(() => {
        countdown -= 1;
        if (countdown <= 0) {
          proceed();
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
  <title>Solicitar Projeto — Redirecionamento</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="redirect-page">
  <div class="container">
    <h1>Quase lá — Solicitação de Projeto</h1>
    <p>Obrigado pelo interesse! Antes de redirecionar, verifique as informações do seu pedido. Clique no botão abaixo para continuar para o formulário de solicitação.</p>
    <div class="actions">
      <button class="primary" on:click={proceed}>Continuar para o formulário</button>
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
  background: rgba(255,255,255,0.85);
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
  background: #0071e3;
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
