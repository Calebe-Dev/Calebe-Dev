<script lang="ts">
  interface Testimonial {
    name: string;
    role: string;
    company: string;
    text: string;
    avatar?: string;
  }

  const testimonials: Testimonial[] = [
    {
      name: 'João Silva',
      role: 'CEO',
      company: 'Tech Solutions',
      text: 'Excelente profissional! Entregou um trabalho impecável e superou todas as expectativas.'
    },
    {
      name: 'Maria Santos',
      role: 'Gerente de Marketing',
      company: 'Digital Agency',
      text: 'A combinação de habilidades técnicas e de marketing fez toda a diferença no nosso projeto.'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Founder',
      company: 'StartupXYZ',
      text: 'Profissionalismo e qualidade incomparáveis. Recomendo fortemente!'
    }
  ];
</script>

<section class="testimonials-section">
  <div class="testimonials-container">
    <h2 data-aos="fade-up">Depoimentos</h2>
    <div class="testimonials-grid">
      {#each testimonials as testimonial, i}
        <div 
          class="testimonial-card" 
          data-aos="fade-up" 
          data-aos-delay={i * 100}
        >
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{testimonial.text}</p>
          <div class="testimonial-author">
            <div class="author-info">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role} · {testimonial.company}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
.testimonials-section {
  padding: 5rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.testimonials-section::after {
  content: '';
  position: absolute;
  bottom: -10%;
  right: -6%;
  width: min(50vw, 500px);
  height: min(50vw, 500px);
  background: radial-gradient(circle, rgba(0, 113, 227, 0.09), transparent 70%);
  filter: blur(105px);
  pointer-events: none;
}

@media (max-width: 768px) {
  .testimonials-section::after { display: none; }
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  h2 {
    text-align: center;
    font-size: 2.25rem;
    margin-bottom: 3.5rem;
    font-weight: 600;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
      font-size: 1.75rem;
      margin-bottom: 2.5rem;
    }
  }
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.2);
}

.quote-icon {
  font-size: 3.5rem;
  color: rgba(0, 113, 227, 0.2);
  line-height: 1;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--secondary-color);
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.testimonial-author {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 1rem;
  margin-top: auto;

  .author-info {
    h4 {
      font-weight: 600;
      margin-bottom: 0.25rem;
      color: var(--primary-color);
      font-size: 1.05rem;
    }

    p {
      font-size: 0.875rem;
      color: var(--secondary-color);
    }
  }
}

@media (max-width: 768px) {
  .testimonial-card {
    min-height: 260px;
  }
}
</style>
