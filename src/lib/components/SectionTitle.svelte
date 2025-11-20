<script lang="ts">
  export let title: string = '';
  export let subtitle: string = '';
</script>

{#if title || subtitle}
  <div class="section-title" data-aos="fade-up">
    {#if title}
      <h2>{title}</h2>
    {/if}
    {#if subtitle}
      <p class="subtitle">{subtitle}</p>
    {/if}
  </div>
{/if}

<style lang="scss">
.section-title {
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    color: var(--primary-color);
  }

  .subtitle {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--secondary-color);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
}
</style>
