<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let currentTheme: 'light' | 'dark' = 'dark';

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
      currentTheme = saved === 'light' || saved === 'dark' ? saved : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
    }
  });
</script>

<button 
  class="theme-toggle" 
  on:click={toggleTheme}
  aria-pressed={currentTheme === 'dark'}
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
  top: 1rem;
  right: 1rem;
  z-index: 2200;
  overflow: hidden;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: var(--glass-border-width) solid var(--glass-border);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--glass-shadow);
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform-style: preserve-3d;
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
    transform: scale(1.08);
    box-shadow: 0 12px 28px -16px rgba(0, 0, 0, 0.7);
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
    transform: translateZ(0);
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
    top: 0.85rem;
    right: 0.85rem;
    width: 42px;
    height: 42px;
  }
}

/* Force definitive dark-mode appearance to avoid UA/compositing artifacts */
:global(html[data-theme="dark"]) .theme-toggle {
  background: rgba(10, 16, 30, 0.88) !important;
  background-color: rgba(10, 16, 30, 0.88) !important;
  border-color: rgba(173, 191, 235, 0.3) !important;
  box-shadow: 0 12px 28px -16px rgba(3, 8, 20, 0.8) !important;
}

:global(html[data-theme="dark"]) .theme-toggle .icon svg {
  color: #f1f6ff !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}

:global(html[data-theme="light"]) .theme-toggle .icon svg {
  color: #123060 !important;
  fill: currentColor !important;
  stroke: currentColor !important;
}

</style>
