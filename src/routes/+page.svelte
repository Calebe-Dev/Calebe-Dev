<script lang="ts">
	import DynamicHeroBackground from '$lib/components/visuals/DynamicHeroBackground.svelte';
	import AnimatedHeroText from '$lib/components/visuals/AnimatedHeroText.svelte';
	import InteractiveSlides from '$lib/components/sections/InteractiveSlides.svelte';
	import StackSection from '$lib/components/sections/StackSection.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import BlogSection from '$lib/components/sections/BlogSection.svelte';
	import GithubStatsSection from '$lib/components/sections/GithubStatsSection.svelte';
	import SocialInviteSection from '$lib/components/sections/SocialInviteSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FloatingWhatsApp from '$lib/components/ui/FloatingWhatsApp.svelte';
	import { environment } from '$lib/state/environment.svelte';
	import { fade } from 'svelte/transition';

	const messages = [
		"Olá, tudo bem?",
		"Eu sou Calebe",
		"Bem Vindo a meu portfólio!!"
	];
</script>

<svelte:head>
	<title>Calebe | Desenvolvedor Full Stack</title>
	<meta name="description" content="Portfólio de Calebe Araujo, Desenvolvedor Full Stack especializado em experiências web de alta performance, UX premium e engenharia de software robusta." />
	<meta property="og:title" content="Calebe | Desenvolvedor Full Stack" />
	<meta property="og:description" content="Experiências web de alta performance, UX premium e engenharia de software robusta." />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">
	<DynamicHeroBackground />

	<!-- Botão para o Blog no Topo -->
	<div class="absolute top-8 right-8 z-50">
		<a 
			href="/blog"
			class="group px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-[11px] transition-all duration-500 uppercase tracking-widest border border-white/5 hover:border-white/20 flex items-center gap-2
				{environment.dayCycle === 'day' ? 'text-slate-900/60 border-slate-900/5 hover:text-slate-900' : 'text-white/60 border-white/10 hover:text-white'}"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 group-hover:opacity-100 transition-opacity duration-500">
				<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
				<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
			</svg>
			Blog
		</a>
	</div>

	<div class="relative z-20 text-center px-6 w-full max-w-4xl">
		<AnimatedHeroText {messages} />
	</div>

	<!-- Botão de Showcase (Review Experience) - Mais discreto no canto -->
	<div class="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-3">
		{#if environment.isShowcaseRunning && environment.showcaseLabel}
			<div 
				in:fade={{ duration: 500 }} 
				out:fade={{ duration: 500 }}
				class="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[9px] text-blue-400/80 uppercase tracking-widest font-medium backdrop-blur-md"
			>
				Mostrando: {environment.showcaseLabel}
			</div>
		{/if}

		<button 
			on:click={() => environment.startShowcase()} 
			disabled={environment.isShowcaseRunning}
			class="group px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-[10px] transition-all duration-500 uppercase tracking-widest border border-white/5 hover:border-white/20 flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed
				{environment.dayCycle === 'day' ? 'text-slate-900/60 border-slate-900/5' : 'text-white/60 border-white/10 hover:text-white'}"
		>
			{#if environment.isShowcaseRunning}
				<span class="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
				Sincronizando...
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
				Review Experience
			{/if}
		</button>
	</div>
</section>

<AboutSection />

<ExperienceSection />

<InteractiveSlides />

<StackSection />

<ProjectsSection />

<BlogSection />

<GithubStatsSection />

<SocialInviteSection />

<ContactSection />

<FloatingWhatsApp />
