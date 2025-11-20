<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let currentTheme: 'light' | 'dark' = 'light';

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    if (browser) {
      localStorage.setItem('theme', currentTheme);
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }

  onMount(() => {
    if (browser) {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (saved) {
        currentTheme = saved;
        document.documentElement.setAttribute('data-theme', currentTheme);
      }
    }
  });
</script>

<button 
  class="theme-toggle" 
  on:click={toggleTheme}
  aria-label="Toggle theme"
  title={currentTheme === 'light' ? 'Mudar para tema escuro' : 'Mudar para tema claro'}
>
  {#if currentTheme === 'light'}
    <span class="icon">🌙</span>
  {:else}
    <span class="icon">☀️</span>
  {/if}
</button>

<style lang="scss">
.theme-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  &:active .icon {
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
  }
}
</style>
