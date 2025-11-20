<script lang="ts">
  // Call to Action component
</script>

<section class="cta-section">
  <div class="parallax-container">
    <div class="cta-content" data-aos="fade-up">
      <h2>Vamos Transformar sua Visão em Realidade</h2>
      <p>Combine desenvolvimento web de alta qualidade com estratégias de marketing digital eficientes</p>
      <div class="cta-buttons">
        <a href="#contact" class="primary-button">Iniciar Projeto</a>
        <a href="#projects" class="secondary-button">Ver Portfólio</a>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.cta-section {
  padding: 5rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  background: radial-gradient(circle, rgba(0, 113, 227, 0.13), transparent 65%);
  filter: blur(115px);
  pointer-events: none;
}

@media (max-width: 768px) {
  .cta-section::before { display: none; }
}

.parallax-container {
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), 
                    url('/ilustation2.png');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
    border-radius: 30px;
  }

  @media (max-width: 768px) {
    min-height: 50vh;
    background-attachment: scroll;
    flex-direction: column;
    gap: 2rem;
  }
}

.cta-content {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  color: white;
  z-index: 1;

  h2 {
    font-size: clamp(1.85rem, 4.5vw, 3rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: clamp(1rem, 1.8vw, 1.25rem);
    margin-bottom: 2.5rem;
    opacity: 0.9;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }
  }
}

.cta-buttons {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;

  a {
    padding: 0.9rem 2.25rem;
    border-radius: 14px;
    font-weight: 500;
    font-size: 1rem;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    text-decoration: none;

    &.primary-button {
      background: #0071e3;
      color: white;

      &:hover {
        background: #0077ed;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 113, 227, 0.3);
      }
    }

    &.secondary-button {
      border: 2px solid white;
      color: white;
      background: rgba(255, 255, 255, 0.1);

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      padding: 0.85rem 2rem;
    }
  }
}
</style>
