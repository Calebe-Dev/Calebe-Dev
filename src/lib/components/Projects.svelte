<script lang="ts">
  interface Project {
    category: string;
    title: string;
    description: string;
    date: string;
    context: string;
    github: string;
    aosDelay: string;
  }

  const projects: Project[] = [
    {
      category: "Angular & JSON Server",
      title: "Lista de Músicas",
      description: "Aplicação web para exibição de músicas com informações detalhadas, desenvolvida com Angular e Bootstrap, consumindo dados via JSON Server.",
      date: "11 Set 2023",
      context: "ADS 3º Semestre - Programação Web",
      github: "#",
      aosDelay: ""
    },
    {
      category: "Spring Boot",
      title: "API Agenda de Compromissos",
      description: "Back-end de uma agenda desenvolvida com Spring Boot, implementando REST APIs e boas práticas de desenvolvimento.",
      date: "12 Nov 2023",
      context: "Projeto Final - Programação Web",
      github: "#",
      aosDelay: "100"
    },
    {
      category: "HTML, CSS & JS",
      title: "Portfólio Interativo",
      description: "Projeto de demonstração criando uma experiência única e interativa para o usuário utilizando tecnologias web fundamentais.",
      date: "15 Fev 2023",
      context: "",
      github: "#",
      aosDelay: "200"
    },
    {
      category: "Landing Page",
      title: "Douglas Castro",
      description: "Página de vendas otimizada para conversão, com design moderno e foco em experiência do usuário.",
      date: "15 Fev 2023",
      context: "",
      github: "#",
      aosDelay: "300"
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
            <a href={project.github} target="_blank" rel="noopener" class="project-link">
              <span>Ver no GitHub</span>
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
