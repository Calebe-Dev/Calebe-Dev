<script lang="ts">
  export let visible: boolean = false;
</script>

{#if visible}
  <div class="loader-overlay">
    <div class="loader">
      <div class="spinner"></div>
      <p>Carregando...</p>
    </div>
  </div>
{/if}

<style lang="scss">
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.loader {
  text-align: center;

  p {
    margin-top: 1rem;
    color: var(--primary-color);
    font-weight: 500;
  }
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 122, 255, 0.2);
  border-top-color: #007aff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
