<script lang="ts">
  // Componente About - Sobre mim
</script>

<div class="about-section" id="about" data-scroll-progress>
  <div class="about-container">
    <div class="about-hero" data-aos="fade-up">
      <div class="hero-image">
        <img src="/ilustration.png" alt="Ilustração notebook com café">
      </div>
    </div>
    
    <div class="about-content">
      <div class="intro-card" data-aos="fade-up" data-aos-delay="100">
        <span class="badge">Desenvolvedor Full-Stack</span>
        <h2>Transformando ideias em experiências digitais extraordinárias</h2>
        <p class="lead">
          Olá! Sou Calebe, apaixonado por criar soluções que combinam código limpo, design intuitivo e estratégias de crescimento comprovadas.
        </p>
      </div>

      <div class="story-grid">
        <div class="story-card" data-aos="fade-up" data-aos-delay="200">
          <div class="story-icon">💡</div>
          <h3>A Jornada</h3>
          <p>
            Minha paixão por tecnologia começou aos 12 anos com Scratch-MIT. Desde então, venho construindo uma trajetória que une desenvolvimento web, design e estratégia digital - sempre focado em criar impacto real.
          </p>
        </div>

        <div class="story-card" data-aos="fade-up" data-aos-delay="300">
          <div class="story-icon">🎯</div>
          <h3>Visão 360°</h3>
          <p>
            Como desenvolvedor Full-Stack e Gestor de Tráfego certificado, não apenas construo sistemas robustos e landing pages convertedoras - garanto que eles alcancem seu público através de campanhas estratégicas no Meta Ads.
          </p>
        </div>

        <div class="story-card" data-aos="fade-up" data-aos-delay="400">
          <div class="story-icon">🚀</div>
          <h3>Excelência Técnica</h3>
          <p>
            Cursando Análise e Desenvolvimento de Sistemas, combino conhecimento acadêmico com experiência prática. Cada projeto é uma oportunidade de entregar soluções tecnicamente superiores.
          </p>
        </div>

        <div class="story-card" data-aos="fade-up" data-aos-delay="500">
          <div class="story-icon">🤝</div>
          <h3>Liderança & Comunicação</h3>
          <p>
            Minha experiência como representante estudantil e organizador de eventos desenvolveu habilidades essenciais de liderança - fundamentais para transformar requisitos em soluções precisas.
          </p>
        </div>
      </div>

      <div class="mission-card" data-aos="fade-up" data-aos-delay="600">
        <p class="mission-text">
          Minha missão é transformar sua visão em realidade digital, entregando não apenas código, mas experiências que geram resultados.
        </p>
        <a href="#contact" class="cta-button">
          Vamos Conversar Sobre Seu Projeto
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
$primary-color: var(--primary-color);
$secondary-color: var(--secondary-color);
$apple-blue: #0071e3;

.about-section {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
}

.about-section::before {
  content: '';
  position: absolute;
  top: -20%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.08), transparent 70%);
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}

.about-hero {
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
}

.hero-image {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12),
              0 8px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.16),
                0 12px 30px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }
}

.intro-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 3.5rem;
  border-radius: 28px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.12);
  text-align: center;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(31, 38, 135, 0.18);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
}

.badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(0, 113, 227, 0.1);
  color: $apple-blue;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}

.intro-card h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: $primary-color;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.lead {
  font-size: 1.125rem;
  line-height: 1.7;
  color: $secondary-color;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.story-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.story-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 2rem;
  border-radius: 24px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.16);
  }
}

.story-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.story-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: $primary-color;
  letter-spacing: -0.01em;
}

.story-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: $secondary-color;
  margin: 0;
}

.mission-card {
  background: linear-gradient(135deg, rgba(0, 113, 227, 0.08), rgba(0, 198, 255, 0.08));
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 3rem;
  border-radius: 28px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.12);
  text-align: center;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(31, 38, 135, 0.18);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
}

.mission-text {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  color: $primary-color;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem;
  background: $apple-blue;
  color: #fff;
  border-radius: 980px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
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

  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.95rem;
  }
}
</style>
