<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Services from '$lib/components/Services.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import CallToAction from '$lib/components/CallToAction.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
  <title>Portfolio - Calebe Araújo</title>
  <meta name="description" content="Portfolio profissional de Calebe Araújo - Desenvolvedor Full Stack e Gestor de Tráfego" />
</svelte:head>

<main>
  <section id="home" data-scroll-progress>
    <Hero />
  </section>
  
  <section id="about" data-scroll data-scroll-progress>
    <About />
  </section>
  
  <section id="skills" data-scroll data-scroll-progress>
    <Skills />
  </section>
  
  <section id="services" data-scroll data-scroll-progress>
    <Services />
  </section>
  
  <section id="experience" data-scroll data-scroll-progress>
    <Experience />
  </section>
  
  <section id="projects" data-scroll data-scroll-progress>
    <Projects />
  </section>
  
  <section id="testimonials" data-scroll data-scroll-progress>
    <Testimonials />
  </section>
  
  <section id="cta" data-scroll data-scroll-progress>
    <CallToAction />
  </section>
  
  <section id="contact" data-scroll data-scroll-progress>
    <Contact />
  </section>
</main>

<style>
main {
  min-height: 100vh;
  padding-top: 80px;
}

section {
  padding: 2rem 0;
}

section:first-child {
  padding-top: 0;
}
</style>
