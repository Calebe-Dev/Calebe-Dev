<script lang="ts">
  // Sample static posts list (placeholders) - replace with real content files later
  const posts = [
    { id: 1, title: 'Como construir landing pages que convertem', excerpt: 'Dicas práticas de design, performance e copywriting para melhorar conversões.' },
    { id: 2, title: 'Performance web: otimizações essenciais', excerpt: 'Melhore LCP, TTFB e First Input Delay com passos aplicáveis.' },
    { id: 3, title: 'SEO técnico para SvelteKit', excerpt: 'Boas práticas de SEO técnico aplicadas a apps SvelteKit estáticas.' }
  ];
</script>

<svelte:head>
  <title>Blog | SEO, Performance Web e Desenvolvimento</title>
  <meta
    name="description"
    content="Artigos sobre desenvolvimento full stack, SEO técnico, performance web e estratégias de conversão para projetos digitais."
  />
</svelte:head>

<section class="blog-hero">
  <div class="blog-container">
    <div class="section-header">
      <h1>Blog</h1>
      <p class="section-subtitle">Artigos, tutoriais e análises sobre desenvolvimento e marketing digital</p>
    </div>

    <div class="posts-grid">
      {#each posts as post}
        <article class="post-card">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <a class="read-more" href={`/blog/${post.id}`}>Leia mais</a>
        </article>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
.blog-hero {
  padding: clamp(5.8rem, 10vw, 7.5rem) 1rem 3rem;
  background: transparent;
}

.blog-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2.25rem);
  background: rgba(8, 13, 26, 0.74);
  border: 1px solid rgba(166, 191, 244, 0.2);
  backdrop-filter: saturate(160%) blur(16px);
  border-radius: 24px;
  box-shadow: 0 20px 45px -22px rgba(2, 6, 18, 0.9);
}

.section-header h1 {
  margin: 0 0 0.5rem;
  font-size: clamp(2rem, 5vw, 3rem);
  color: #f4f7ff;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #b8c4de;
  margin-bottom: 2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.post-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(166, 191, 244, 0.18);
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 12px 25px -16px rgba(5, 10, 24, 0.9);
}

.post-card h3 {
  margin: 0 0 0.7rem;
  color: #f4f7ff;
}

.post-card p {
  color: #b8c4de;
  margin: 0 0 1rem;
}

.read-more {
  display: inline-block;
  padding: 0.55rem 1rem;
  background: linear-gradient(135deg, #0f7ce9, #1d95ff);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .posts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
