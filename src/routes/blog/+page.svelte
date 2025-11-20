<script lang="ts">
  // Sample static posts list (placeholders) - replace with real content files later
  const posts = [
    { id: 1, title: 'Como construir landing pages que convertem', excerpt: 'Dicas práticas de design, performance e copywriting para melhorar conversões.' },
    { id: 2, title: 'Performance web: otimizações essenciais', excerpt: 'Melhore LCP, TTFB e First Input Delay com passos aplicáveis.' },
    { id: 3, title: 'SEO técnico para SvelteKit', excerpt: 'Boas práticas de SEO técnico aplicadas a apps SvelteKit estáticas.' }
  ];
</script>

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
  padding: 4rem 2rem;
  background: transparent;
}

.blog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255,255,255,0.85);
  backdrop-filter: saturate(180%) blur(30px);
  border-radius: 20px;
}

.section-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: rgba(0,0,0,0.6);
  margin-bottom: 2rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.post-card {
  background: rgba(255,255,255,0.72);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
}

.post-card h3 { margin-bottom: 0.5rem; }
.post-card p { color: rgba(0,0,0,0.65); margin-bottom: 1rem; }
.read-more {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #0071e3;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
}

@media (max-width: 768px) {
  .blog-container { padding: 1.25rem; }
}
</style>
