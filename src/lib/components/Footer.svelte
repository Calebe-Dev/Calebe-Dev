<script lang="ts">
  // Footer component
</script>

<footer class="footer">
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-brand">
        <h3>Calebe Araújo</h3>
        <p>Desenvolvedor Full Stack &amp; Gestor de Tráfego</p>
      </div>
      <div class="footer-links">
        <div class="link-group">
          <h4>Navegação</h4>
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#projects">Projetos</a>
        </div>
        <div class="link-group">
          <h4>Social</h4>
          <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/calebe_original" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/calebe_original/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div class="link-group">
          <h4>Contato</h4>
          <a href="mailto:seu-email@dominio.com">Email</a>
          <a href="#contact">Formulário</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Calebe Araújo. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

<style lang="scss">
.footer {
  background: var(--background-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 4rem 0 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  p {
    color: var(--secondary-color);
    line-height: 1.5;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.link-group {
  h4 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  a {
    display: block;
    color: var(--secondary-color);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
    font-size: 0.9rem;

    &:hover {
      color: var(--primary-color);
    }
  }
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    color: var(--secondary-color);
    font-size: 0.875rem;
  }
}
</style>
