<script lang="ts">
  interface ContactCard {
    icon: string;
    title: string;
    description: string;
    link: string;
    linkLabel: string;
    cssClass: string;
  }

  const contactCards: ContactCard[] = [
    {
      icon: "fab fa-linkedin",
      title: "LinkedIn",
      description: "Vamos expandir nossa rede profissional",
      link: "https://www.linkedin.com/in/calebe-dev",
      linkLabel: "Conectar",
      cssClass: "linkedin"
    },
    {
      icon: "fab fa-github",
      title: "GitHub",
      description: "Explore meus projetos e contribuições",
      link: "https://github.com/Calebe-Dev",
      linkLabel: "Ver Projetos",
      cssClass: "github"
    },
    {
      icon: "fab fa-instagram",
      title: "Instagram",
      description: "Acompanhe meu dia a dia profissional",
      link: "https://www.instagram.com/calebe_original/",
      linkLabel: "Seguir",
      cssClass: "instagram"
    },
    {
      icon: "fas fa-envelope",
      title: "E-mail",
      description: "Vamos conversar sobre seu projeto",
      link: "mailto:seu-email@dominio.com",
      linkLabel: "Enviar mensagem",
      cssClass: "email"
    }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<section id="contact" class="contact-section">
  <div class="glass-overlay"></div>
  <div class="contact-container">
    <h2 data-aos="fade-up">Vamos Conectar</h2>
    <div data-aos="fade-up" class="social-grid">
      {#each contactCards as card, i}
        <a
          href={card.link}
          target="_blank"
          rel="noopener"
          class="social-card {card.cssClass}"
          data-aos-delay={i * 100}
        >
          <div class="card-content">
            <div class="icon-wrapper">
              <i class={card.icon}></i>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <span class="arrow-link">
              {card.linkLabel}
              <i class="fas fa-arrow-right"></i>
            </span>
          </div>
          <div class="card-shine"></div>
        </a>
      {/each}
    </div>
    <div data-aos="fade-up" class="contact-footer">
      <div class="footer-glass">
        <p>Disponível para projetos freelance e oportunidades profissionais</p>
        <span class="availability">Atualmente disponível para novos projetos</span>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.contact-section {
  padding: 5rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 20%;
  left: -4%;
  width: min(50vw, 450px);
  height: min(50vw, 450px);
  background: radial-gradient(circle, rgba(0, 113, 227, 0.11), transparent 70%);
  filter: blur(100px);
  pointer-events: none;
}

@media (max-width: 768px) {
  .contact-section::before { display: none; }
}

.glass-overlay {
  display: none;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.contact-container h2 {
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.social-card {
  position: relative;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  min-height: 220px;
  display: flex;
  flex-direction: column;
}

.social-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.2);
}

.card-content {
  position: relative;
  z-index: 2;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.icon-wrapper {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  color: #0071e3;
}

.social-card h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.social-card p {
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-size: 0.95rem;
  flex-grow: 1;
}

.arrow-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #0071e3;
  font-weight: 500;
  transition: gap 0.3s ease;
  font-size: 0.95rem;
  margin-top: auto;
}

.social-card:hover .arrow-link {
  gap: 0.75rem;
}

.card-shine {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.social-card:hover .card-shine {
  opacity: 1;
}

.contact-footer {
  text-align: center;
}

.footer-glass {
  display: inline-block;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 1.75rem 2.5rem;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

.footer-glass p {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: rgba(0, 0, 0, 0.8);
}

.availability {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(0, 113, 227, 0.1);
  color: #0071e3;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .contact-container h2 {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    margin-bottom: 3rem;
  }
  
  .social-card {
    min-height: 200px;
  }
  
  .footer-glass {
    padding: 1.5rem 2rem;
  }
  
  .footer-glass p {
    font-size: 0.95rem;
  }
}
</style>
