<script lang="ts">
  // Hero component - design moderno e destacado
</script>

<section class="hero-section" data-scroll data-parallax="0.15">
  <div class="hero-background">
    <div class="bg-gradient gradient-1"></div>
    <div class="bg-gradient gradient-2"></div>
    <div class="bg-grid"></div>
  </div>
  
  <div class="hero-container">
    <div class="hero-wrapper">
      <div class="hero-content">
        <div class="hero-badge" data-aos="fade-up">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6l2-6z" fill="currentColor"/>
          </svg>
          <span>Desenvolvedor Full-Stack & Gestor de Tráfego</span>
        </div>
        
        <h1 data-aos="fade-up" data-aos-delay="100">
          Criando experiências
          <span class="gradient-text">digitais que</span>
          transformam negócios
        </h1>
        
        <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
          Combino desenvolvimento web de ponta com estratégias de marketing digital para criar soluções que não apenas impressionam, mas geram resultados reais e mensuráveis.
        </p>
        
        <div class="hero-stats" data-aos="fade-up" data-aos-delay="300">
          <div class="stat-item">
            <div class="stat-number">5+</div>
            <div class="stat-label">Anos de Experiência</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">Projetos Entregues</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Clientes Satisfeitos</div>
          </div>
        </div>
        
        <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
          <a href="/solicitar-projeto" class="primary-cta">
            <span>Iniciar Meu Projeto</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#projects" class="secondary-cta">
            <span>Ver Portfólio</span>
          </a>
        </div>
      </div>
      
      <div class="hero-visual" data-aos="fade-left" data-aos-delay="500">
        <div class="visual-card">
          <div class="card-glow"></div>
          <img src="/ProfileFoto.jpeg" alt="Calebe Araújo - Desenvolvedor" />
          <div class="card-overlay">
            <div class="tech-badge">Svelte</div>
            <div class="tech-badge">React</div>
            <div class="tech-badge">Angular</div>
            <div class="tech-badge">Meta Ads</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="600">
    <span>Role para explorar</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</section>

<style lang="scss">
$apple-blue: #0071e3;
$primary-color: var(--primary-color);
$secondary-color: var(--secondary-color);

.hero-section {
  min-height: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem 6rem;
  position: relative;
  overflow: hidden;
  background: #f5f5f7;

  @media (max-width: 768px) {
    /* Reduce top padding so fixed navbar doesn't create a large gap
       and let the navbar visually sit on top of the hero container. */
    padding: 0.5rem 1rem 1.5rem;

    /* Ensure the hero container isn't offset by extra margins */
    .hero-container {
      margin-top: 0;
    }
  }
}

.hero-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.6;
  animation: float 20s ease-in-out infinite;
}

.gradient-1 {
  top: -20%;
  right: -8%;
  width: min(60vw, 600px);
  height: min(60vw, 600px);
  background: radial-gradient(circle, rgba(0, 113, 227, 0.3), transparent 70%);
}

.gradient-2 {
  bottom: -20%;
  left: -8%;
  width: min(50vw, 500px);
  height: min(50vw, 500px);
  background: radial-gradient(circle, rgba(0, 198, 255, 0.25), transparent 70%);
  animation-delay: -10s;
  animation-duration: 25s;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(0, 113, 227, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 113, 227, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 80%);
}

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-40px, 40px) scale(1.1); }
}

.hero-container {
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    0 8px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  padding: 4rem;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.15),
      0 12px 30px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 968px) {
    padding: 3rem 0.1rem;
    border-radius: 32px;
  }

  @media (max-width: 568px) {
    padding: 2rem 0.1rem;
    border-radius: 24px;
  }

  /* Lift the hero container up so the fixed navbar visually overlaps it */
  @media (min-width: 769px) {
    margin-top: calc(-1 * var(--navbar-overlap, 28px));
  }
}

.hero-wrapper {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 1.25rem;
  background: rgba(0, 113, 227, 0.08);
  border: 1px solid rgba(0, 113, 227, 0.15);
  border-radius: 100px;
  color: $apple-blue;
  font-size: 0.875rem;
  font-weight: 600;
  width: fit-content;
  letter-spacing: 0.01em;

  @media (max-width: 968px) {
    margin: 0 auto;
  }

  svg {
    flex-shrink: 0;
  }
}

.hero-content h1 {
  font-size: clamp(2.5rem, 5.5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: $primary-color;
  margin: 0;

  .gradient-text {
    background: linear-gradient(135deg, $apple-blue, #00c6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.65;
  color: $secondary-color;
  max-width: 600px;
  margin: 0;

  @media (max-width: 968px) {
    margin: 0 auto;
    font-size: 1.05rem;
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 568px) {
    flex-direction: column;
    gap: 1.5rem;
  }
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: $apple-blue;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);

  @media (max-width: 568px) {
    display: none;
  }
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 568px) {
    flex-direction: column;
    width: 100%;
  }
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: $apple-blue;
  color: #fff;
  border-radius: 980px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0, 113, 227, 0.3);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: #0077ed;
    box-shadow: 0 8px 24px rgba(0, 113, 227, 0.4);
    transform: translateY(-2px);
    gap: 1rem;
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 568px) {
    width: 100%;
    justify-content: center;
  }
}

.secondary-cta {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: $apple-blue;
  border-radius: 980px;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    border-color: $apple-blue;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 568px) {
    width: 100%;
    justify-content: center;
  }
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    max-width: 500px;
    margin: 0 auto;
  }
}

.visual-card {
  position: relative;
  width: 100%;
  max-width: 520px;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
              0 8px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.2),
                0 12px 30px rgba(0, 0, 0, 0.15);

    .card-glow {
      opacity: 1;
    }

    .card-overlay {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, $apple-blue, #00c6ff);
  border-radius: 32px;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: -1;
  filter: blur(20px);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.tech-badge {
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.875rem;
  font-weight: 500;
  animation: bounce 2s ease-in-out infinite;

  @media (max-width: 768px) {
    display: none;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

@media (max-width: 768px) {
  .gradient-1,
  .gradient-2,
  .bg-grid {
    display: none;
  }
}
</style>
