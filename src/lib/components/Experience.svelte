<script lang="ts">
  // Experience component - timeline profissional
</script>

<section id="experience" class="experience-section" data-scroll-progress>
  <div class="experience-container">
    <h2 data-aos="fade-up">Experiência Profissional</h2>
    <div class="timeline">

      <div data-aos="fade-up" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="experience-card">
            <div class="date">Junho 2025 - Presente</div>
            <h3>Analista de Tráfego</h3>
            <h4>Grupo OC Sorocaba</h4>
            <p class="location">Sorocaba, São Paulo, Brasil</p>
            <div class="skills-tags">
              <span>SEO</span>
              <span>Tráfego Orgânico</span>
              <span>Meta Ads</span>
              <span>Google Ads</span>
              <span>Analytics</span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="50" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="experience-card">
            <div class="date">2025 - Junho 2025</div>
            <h3>Gestor de Tráfego Pago</h3>
            <h4>Alpha Company ADS</h4>
            <p class="location">Salto, São Paulo, Brasil · Presencial</p>
            <div class="skills-tags">
              <span>WordPress</span>
              <span>Google Ads</span>
              <span>Meta Ads</span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="experience-card">
            <div class="date">2024 - 2025</div>
            <h3>Estagiário de TI</h3>
            <h4>QIplus</h4>
            <p class="location">Remota</p>
            <div class="skills-tags">
              <span>Marketing Digital</span>
              <span>Web Analytics</span>
              <span>Desenvolvimento Web</span>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200" class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="experience-card">
            <div class="date">2017 - 2022</div>
            <h3>Freelancer Multidisciplinar</h3>
            <p class="description">
              Atuação versátil em diversas áreas, desenvolvendo habilidades práticas e adaptabilidade:
            </p>
            <ul>
              <li>Edição de conteúdo para redes sociais</li>
              <li>Manutenção de equipamentos eletrônicos</li>
              <li>Suporte técnico em informática</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<style lang="scss">
.experience-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #ffffff1a, #0000001a);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  max-width: 1400px;
  margin: 0 auto;
}

.experience-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 3.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #000;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
  }
}

.timeline {
  position: relative;
  padding: 2rem 0;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: #ffffff4d;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    animation: growLine 1.5s ease-in-out;
  }

  @media (min-width: 768px) {
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.timeline-item {
  padding: 2rem 0;
  position: relative;
  width: 100%;
  animation: fadeInUp 1s ease-in-out;

  @media (min-width: 768px) {
    width: 50%;
    padding-right: 2rem;

    &:nth-child(2n) {
      margin-left: 50%;
      padding-left: 2rem;
      padding-right: 0;

      .timeline-marker {
        right: auto;
        left: -8px;
      }
    }
  }
}

.timeline-marker {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff80;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  left: -7px;
  top: 2.5rem;
  box-shadow: 0 4px 10px #0000004d;
  animation: pulse 1.5s infinite;

  @media (min-width: 768px) {
    left: auto;
    right: -8px;
  }
}

.experience-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  border-left: 3px solid #0071e3;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;

  .date {
    color: #000c;
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #000c;
  }

  h4 {
    font-size: 1rem;
    color: #0000004d;
    margin-bottom: 0.5rem;
  }

  .location {
    font-size: 0.875rem;
    color: #000;
    margin-bottom: 1rem;
  }

  .description {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: #0009;
    font-size: 0.95rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    
    li {
      margin-bottom: 0.5rem;
      color: #0000001a;
      font-size: 0.9rem;
      
      &::before {
        content: "•";
        color: #0003;
        margin-right: 0.5rem;
      }
    }
  }
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.2);
}

.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    background: #0000001a;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    padding: 0.25rem 0.75rem;
    border-radius: 100px;
    font-size: 0.8rem;
    color: var(--secondary-color);
  }
}

@media (max-width: 768px) {
  .experience-section {
    padding: 3rem 1rem;
  }
  .experience-container h2 {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }
  .experience-card {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.2rem;
    }
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes growLine {
  0% {
    height: 0;
  }
  to {
    height: 100%;
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}
</style>
