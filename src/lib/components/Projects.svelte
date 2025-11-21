<script lang="ts">
  interface Project {
    category: string;
    title: string;
    description: string;
    date: string;
    context: string;
    url: string;
    aosDelay: string;
  }

  const projects: Project[] = [
    {
      category: "Grupo OC — Telecom",
      title: "planotimempresa.com.br",
      description: "Desenvolvido para Grupo OC. SPA em Angular que promove planos de telefonia e internet TIM para empresas, com foco em TIM Black Empresa, ligações ilimitadas e benefícios de apps sem consumir franquia.",
      date: "Atualizado 2025",
      context: "Desenvolvido para Grupo OC (Angular SPA)",
      url: "https://planotimempresa.com.br/",
      aosDelay: ""
    },
    {
      category: "Esquadrias",
      title: "esquadriasmartins.com.br",
      description: "Site da Esquadrias Martins — mais de 30 anos de experiência em esquadrias de alumínio em Sorocaba. Portas, portões, janelas e brises para residências e edifícios.",
      date: "Atualizado 2025",
      context: "Desenvolvido para Esquadrias Martins",
      url: "https://esquadriasmartins.com.br/",
      aosDelay: "100"
    },
    {
      category: "Grupo OC — Internet",
      title: "internetfibraagora.com.br",
      description: "Site para venda de planos fibra óptica (PF/PJ) com ofertas e opções para empresas e residências.",
      date: "Atualizado 2025",
      context: "Desenvolvido para Grupo OC",
      url: "https://internetfibraagora.com.br/",
      aosDelay: "200"
    },
    {
      category: "Serviços",
      title: "buenoswatertechnology.com.br",
      description: "Site de serviços: atualização e manutenção — projeto de prestação de serviços técnicos e manutenção industrial.",
      date: "Atualizado 2025",
      context: "Atualização e manutenção",
      url: "https://buenoswatertechnology.com.br/",
      aosDelay: "300"
    },
    {
      category: "Grupo OC — Institucional",
      title: "grupooc.com.br",
      description: "Site institucional do Grupo OC: OC Tel (telecom), OC Digital (marketing) e OC Saúde (planos de saúde) — soluções de assessoria e consultoria empresarial.",
      date: "Atualizado 2025",
      context: "Projeto institucional do Grupo OC",
      url: "https://grupooc.com.br/",
      aosDelay: "400"
    },
    {
      category: "Grupo OC — Conectividade",
      title: "linkdedicada.com.br",
      description: "Oferta de Link Dedicado de internet para empresas: conexões estáveis com mesma taxa de download/upload e SLA dedicado.",
      date: "Atualizado 2025",
      context: "Projeto Grupo OC",
      url: "https://linkdedicada.com.br/",
      aosDelay: "500"
    },
    {
      category: "Grupo OC — Telecom",
      title: "meupabxemnuvem.com.br",
      description: "Promoção de soluções de PABX em nuvem (GoTo) com mais de 100 recursos para comunicação empresarial moderna e escalável.",
      date: "Atualizado 2025",
      context: "Projeto Grupo OC",
      url: "https://meupabxemnuvem.com.br/",
      aosDelay: "600"
    },
    {
      category: "Saúde Empresarial",
      title: "leadplanodesaude.com.br",
      description: "Site focado em planos de saúde empresariais, consultoria para otimização de custos com operadoras como Amil, Bradesco Saúde e outras.",
      date: "Atualizado 2025",
      context: "Grupo OC — Planos de Saúde",
      url: "https://leadplanodesaude.com.br/",
      aosDelay: "700"
    }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<section class="projects-section" id="projects">
  <div class="projects-container">
    <div class="section-header" data-aos="fade-up">
      <span class="section-badge">Portfólio</span>
      <h2>Projetos que fazem a diferença</h2>
      <p class="section-subtitle">Experiências digitais criadas com paixão, precisão e propósito</p>
    </div>
    
    <div class="projects-grid">
      {#each projects as project, i}
        <article class="project-card" data-aos="fade-up" data-aos-delay={i * 100}>
          <div class="project-header">
            <span class="project-category">{project.category}</span>
            <div class="project-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div class="project-body">
            <h3>{project.title}</h3>
            <p class="project-description">{project.description}</p>
            
            <div class="project-meta">
              {#if project.context}
                <span class="meta-item">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M12 6l-4-4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {project.context}
                </span>
              {/if}
              <span class="meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2"/>
                  <path d="M8 4v4l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                {project.date}
              </span>
            </div>
          </div>
          
          <div class="project-footer">
            <a href={project.url} target="_blank" rel="noopener" class="project-link">
              <span>Visitar site</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
$apple-blue: #0071e3;
$primary-color: var(--primary-color);
$secondary-color: var(--secondary-color);

.projects-section {
  padding: 6rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
}

.projects-section::after {
  content: '';
  position: absolute;
  bottom: -20%;
  right: -8%;
  width: min(55vw, 600px);
  height: min(55vw, 600px);
  background: radial-gradient(circle, rgba(0, 113, 227, 0.08), transparent 70%);
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 768px) {
  .projects-section::after { display: none; }
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
}

.section-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(0, 113, 227, 0.1);
  color: $apple-blue;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  letter-spacing: 0.02em;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: $primary-color;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.6;
  color: $secondary-color;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.75rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.project-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-radius: 24px;
  border: 0.5px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.1);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(31, 38, 135, 0.16);
  }
}

.project-header {
  padding: 1.75rem 1.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.project-category {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  background: rgba(0, 113, 227, 0.1);
  color: $apple-blue;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.project-icon {
  width: 48px;
  height: 48px;
  background: rgba(0, 113, 227, 0.08);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $apple-blue;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  .project-card:hover & {
    background: rgba(0, 113, 227, 0.12);
    transform: scale(1.05);
  }
}

.project-body {
  padding: 0 1.75rem 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-body h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: $primary-color;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.project-description {
  color: $secondary-color;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  flex-grow: 1;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.825rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  
  svg {
    opacity: 0.6;
  }
}

.project-footer {
  padding: 1.25rem 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(255, 255, 255, 0.3);
}

.project-link {
  color: $apple-blue;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    gap: 0.875rem;
    
    svg {
      transform: translateX(4px);
    }
  }

  svg {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
}
</style>
