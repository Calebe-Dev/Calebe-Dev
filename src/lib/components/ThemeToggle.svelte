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
  <span class="bg" aria-hidden="true"></span>
  {#if currentTheme === 'light'}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/>
      </svg>
    </span>
  {:else}
    <span class="icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </g>
      </svg>
    </span>
  {/if}
</button>

<style lang="scss">
.theme-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  overflow: hidden;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border-width) solid var(--glass-border);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--glass-shadow);
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -webkit-transform-style: preserve-3d;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    outline: none;
    background-clip: padding-box;
    backface-visibility: hidden;
    will-change: transform, opacity;
    padding: 6px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .bg {
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: 0;
    background: var(--glass-bg);
    pointer-events: none;
    -webkit-transform: translateZ(0);
  }

  .icon svg {
    width: 20px;
    height: 20px;
    display: block;
    color: var(--primary-color);
    transition: transform 0.3s ease, color 0.2s ease;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(77,163,255,0.12);
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

/* Force definitive dark-mode appearance to avoid UA/compositing artifacts */
:global(html[data-theme="dark"]) .theme-toggle {
  background: rgba(0, 0, 0, 0.92) !important;
  background-color: rgba(0, 0, 0, 0.92) !important;
  border-color: rgba(255, 255, 255, 0.06) !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6) !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

:global(html[data-theme="dark"]) .theme-toggle .icon svg {
  color: #ffffff !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}

</style>
