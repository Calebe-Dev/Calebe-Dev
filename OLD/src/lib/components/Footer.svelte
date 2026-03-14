<script lang="ts">
  // Footer component
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Calebe Araújo</h3>
        <p>Full Stack, performance web e growth para produtos digitais de alto impacto.</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h4>Navegação</h4>
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/servicos">Serviços</a>
          <a href="/projetos">Projetos</a>
        </div>
        <div class="link-group">
          <h4>Social</h4>
          <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Calebe-Dev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/calebe_original/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div class="link-group">
          <h4>Contato</h4>
          <a href="mailto:contato@calebearaujo.com.br">Email</a>
          <a href="/contato">Contato</a>
          <a href="/solicitar-projeto">Solicitar projeto</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {new Date().getFullYear()} Calebe Araújo. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

<style lang="scss">
.footer {
  margin-top: 0;
  border-top: 1px solid rgba(166, 191, 244, 0.2);
  background:
    radial-gradient(circle at 15% 0%, rgba(41, 151, 255, 0.12), transparent 35%),
    radial-gradient(circle at 85% 0%, rgba(159, 123, 247, 0.1), transparent 30%),
    rgba(6, 10, 20, 0.85);
  padding: clamp(2.5rem, 6vw, 4rem) 0 1.5rem;
}

.footer-container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 1.5rem;
  border: 1px solid rgba(184, 198, 225, 0.14);
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.015));
  backdrop-filter: blur(14px) saturate(130%);
  -webkit-backdrop-filter: blur(14px) saturate(130%);
}

.footer-content {
  display: grid;
  grid-template-columns: minmax(240px, 1fr) minmax(0, 2fr);
  gap: clamp(1.75rem, 4vw, 3.5rem);
  margin-bottom: 2rem;
  padding: 2rem 1.2rem 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.footer-brand {
  h3 {
    margin: 0 0 0.75rem;
    font-size: clamp(1.25rem, 3.2vw, 1.6rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--primary-color);
  }

  p {
    margin: 0;
    color: var(--secondary-color);
    line-height: 1.7;
    max-width: 46ch;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2.5vw, 2rem);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
}

.link-group {
  h4 {
    margin: 0 0 0.9rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--primary-color);
  }

  a {
    display: block;
    color: var(--secondary-color);
    text-decoration: none;
    margin-bottom: 0.65rem;
    transition: color 0.3s ease;
    font-size: 0.95rem;

    &:hover {
      color: #ffffff;
    }
  }
}

.footer-bottom {
  padding: 1.25rem 1.2rem 1.2rem;
  border-top: 1px solid rgba(166, 191, 244, 0.15);
  text-align: center;

  p {
    margin: 0;
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
}
</style>
