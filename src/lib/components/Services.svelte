<script lang="ts">
  interface Service {
    icon: string;
    title: string;
    description: string;
  }

  interface ServiceGroup {
    name: string;
    aosDelay?: string;
    services: Service[];
  }

  const serviceGroups: ServiceGroup[] = [
    {
      name: "Desenvolvimento Web",
      services: [
        { icon: "fas fa-laptop-code", title: "Sites Profissionais", description: "Websites responsivos e otimizados para performance e SEO" },
        { icon: "fas fa-palette", title: "Design de Interfaces", description: "Experiências visuais intuitivas e envolventes" },
        { icon: "fas fa-search", title: "Otimização SEO", description: "Melhore sua visibilidade nos motores de busca" },
        { icon: "fas fa-basket-shopping", title: "Lojas Virtuais", description: "E-commerce completo e integrado para seu negócio" },
        { icon: "fas fa-bolt", title: "Landing Pages", description: "Páginas otimizadas para alta conversão" }
      ]
    },
    {
      name: "Marketing Digital",
      aosDelay: "100",
      services: [
        { icon: "fas fa-bullhorn", title: "Gestão de Tráfego", description: "Campanhas otimizadas para Meta Ads com foco em conversão" },
        { icon: "fas fa-chart-line", title: "Performance Digital", description: "Estratégias data-driven para maximizar seu ROI" },
        { icon: "fas fa-rocket", title: "Lançamentos", description: "Estratégias para lançamentos digitais de sucesso" },
        { icon: "fas fa-envelope", title: "Email Marketing", description: "Automação e campanhas de email para engajamento e conversão" },
        { icon: "fas fa-comments", title: "Social Media", description: "Gestão de redes sociais para engajamento e crescimento" }
      ]
    }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<section id="services" class="services-section">
  <div class="services-container">
    <h2 data-aos="fade-up">Soluções Digitais Completas</h2>
    <div class="services-categories">
      {#each serviceGroups as group}
        <div class="services-group" data-aos="fade-up" data-aos-delay={group.aosDelay || '0'}>
          <div class="cards-container">
            <h3>{group.name}</h3>
            <div class="services-grid">
              {#each group.services as service}
                <div class="service-card">
                  <div class="icon-wrapper">
                    <i class={service.icon}></i>
                  </div>
                  <div class="card-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                  <div class="service-footer">
                    <a href="#contact" class="learn-more">
                      Saiba mais
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
.services-section {
  padding: 5rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.services-section::before {
  content: '';
  position: absolute;
  top: 10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.12), transparent 65%);
  filter: blur(90px);
  pointer-events: none;
}

.services-section h2 {
  text-align: center;
  font-size: 2.25rem;
  margin-bottom: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #000;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.services-container {
  max-width: 1300px;
  margin: 0 auto;
}

.services-categories {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.cards-container {
  margin: 1rem 0;
  padding: 2.25rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cards-container:hover {
  transform: scale(1.005);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.25);
}

.cards-container h3 {
  text-align: center;
  font-size: 1.65rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: #000;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.service-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 320px;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(31, 38, 135, 0.2);
}

.icon-wrapper {
  font-size: 2.25rem;
  color: #0071e3;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  background: rgba(0, 122, 255, 0.1);
  border-radius: 12px;
}

.card-content h4 {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #000;
}

.card-content p {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;
  font-size: 0.9rem;
  flex-grow: 1;
}

.service-footer {
  margin-top: auto;
  padding-top: 1.5rem;
}

.learn-more {
  color: #007aff;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;
}

.learn-more:hover {
  gap: 0.75rem;
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 1rem;
    border-radius: 30px;
  }
  
  .services-section h2 {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
  }
  
  .cards-container {
    padding: 1.5rem;
    border-radius: 20px;
  }
  
  .cards-container h3 {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
  
  .service-card {
    min-height: 200px;
  }
}
</style>
