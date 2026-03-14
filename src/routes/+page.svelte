<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Services from '$lib/components/Services.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import SplitDivider from '$lib/components/ui/SplitDivider.svelte';
</script>

<svelte:head>
	<title>Calebe Araújo | Design de Alta Performance & SEO Técnico</title>
	<meta
		name="description"
		content="Transformando visão em realidade com sites premium, SEO técnico e performance web avançada. Especialista em landing pages de alta conversão e aplicações web Apple-like."
	/>
	<meta
		name="keywords"
		content="desenvolvedor full stack, design premium, apple-like ui, seo técnico sorocaba, sites de alta performance, landing pages conversão"
	/>
</svelte:head>

<main class="bg-black">
	<Hero />

	<About />

	<Services />

	<SplitDivider
		title="Engenharia que converte."
		subtitle="Sua presença digital construída com precisão técnica e foco total em resultados de negócio."
	/>

	<Projects />

	<SplitDivider
		title="Velocidade é posicionamento."
		subtitle="Arquitetura moderna e Core Web Vitals otimizados para garantir a melhor experiência e ranking."
	/>

	<Skills />

	<Experience />

	<Testimonials />

	<Contact />
</main>
