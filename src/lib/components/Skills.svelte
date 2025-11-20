<script lang="ts">
  interface Skill {
    icon: string;
    title: string;
    description: string;
  }

  interface SkillCategory {
    name: string;
    aosDelay?: string;
    skills: Skill[];
  }

  const skillCategories: SkillCategory[] = [
    {
      name: 'Desenvolvimento Web',
      skills: [
        { icon: 'devicon-html5-plain', title: 'HTML5', description: 'Estruturação semântica e acessível para melhor SEO' },
        { icon: 'devicon-css3-plain', title: 'CSS3', description: 'Layouts responsivos com Flexbox, Grid e SASS' },
        { icon: 'devicon-javascript-plain', title: 'JavaScript', description: 'ES6+, APIs modernas e desenvolvimento interativo' },
        { icon: 'devicon-svelte-plain', title: 'Svelte', description: 'Framework reativo e performático com SvelteKit' },
        { icon: 'devicon-angular-plain', title: 'Angular', description: 'Aplicações escaláveis com TypeScript e RxJS' },
        { icon: 'devicon-react-plain', title: 'React', description: 'Interfaces dinâmicas com Hooks e Context API' }
      ]
    },
    {
      name: 'Marketing Digital',
      aosDelay: '100',
      skills: [
        { icon: 'fas fa-chart-line', title: 'Meta Ads', description: 'Gestão de campanhas e otimização de conversão' },
        { icon: 'fas fa-bullseye', title: 'Tráfego Pago', description: 'Estratégias de aquisição e remarketing' },
        { icon: 'fas fa-chart-bar', title: 'Analytics', description: 'Análise de dados e otimização de campanhas' }
      ]
    },
    {
      name: 'Tecnologias Emergentes',
      aosDelay: '200',
      skills: [
        { icon: 'fas fa-robot', title: 'IA Generativa', description: 'Integração de LLMs e ferramentas de IA' },
        { icon: 'fas fa-camera', title: 'Fotografia', description: 'Produção visual para marketing digital' },
        { icon: 'fas fa-mobile-alt', title: 'Mobile Dev', description: 'Flutter e Kotlin para apps multiplataforma' }
      ]
    },
    {
      name: 'Back-end & Dados',
      aosDelay: '300',
      skills: [
        { icon: 'devicon-python-plain', title: 'Python', description: 'Django, Flask e automação de processos' },
        { icon: 'devicon-java-plain', title: 'Java', description: 'Spring Boot e desenvolvimento robusto' },
        { icon: 'devicon-mysql-plain', title: 'SQL', description: 'Modelagem e gestão de dados relacionais' }
      ]
    }
  ];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<section id="skills" class="skills-section" data-scroll-progress>
  <div class="skills-container">
    <h2 data-aos="fade-up">Habilidades Técnicas</h2>
    <div class="skills-categories">
      {#each skillCategories as category}
        <div 
          class="category" 
          data-aos="fade-up"
          data-aos-delay={category.aosDelay || '0'}
        >
          <h3>{category.name}</h3>
          <div class="skills-grid">
            {#each category.skills as skill, i}
              <div class="skill-card" data-aos="fade-up" data-aos-delay={i * 50}>
                <div class="skill-icon">
                  <i class={skill.icon}></i>
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style lang="scss">
.skills-section {
  padding: 5rem 2rem;
  background: transparent;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
}

.skills-section::after {
  content: '';
  position: absolute;
  bottom: -20%;
  right: -15%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0, 113, 227, 0.08), transparent 70%);
  filter: blur(120px);
  pointer-events: none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skills-container {
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

.skills-categories {
  display: grid;
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  .category {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    padding: 2.5rem;
    border-radius: 20px;
    border: 0.5px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 48px rgba(31, 38, 135, 0.2);
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      font-weight: 500;
      letter-spacing: -0.01em;

      @media (max-width: 768px) {
        font-size: 1.35rem;
        margin-bottom: 1.5rem;
      }
    }
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .skill-card {
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: saturate(180%) blur(10px);
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    padding: 1.75rem;
    border-radius: 16px;
    border: 0.5px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 4px 16px rgba(31, 38, 135, 0.1);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    min-height: 180px;
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(31, 38, 135, 0.15);
      background: rgba(255, 255, 255, 0.65);
    }

    i {
      font-size: 2.25rem;
      margin-bottom: 1rem;
      color: var(--primary-color);
    }

    h4 {
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    p {
      color: var(--secondary-color);
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
}
</style>

