<script lang="ts">
	import DynamicHeroBackground from '$lib/components/visuals/DynamicHeroBackground.svelte';
	import AnimatedHeroText from '$lib/components/visuals/AnimatedHeroText.svelte';
	import AboutSection from '$lib/components/sections/AboutSection.svelte';
	import AccessibilitySection from '$lib/components/sections/AccessibilitySection.svelte';
	import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
    import InteractiveSlides from '$lib/components/sections/InteractiveSlides.svelte';
	import StackSection from '$lib/components/sections/StackSection.svelte';
	import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
	import BlogSection from '$lib/components/sections/BlogSection.svelte';
    import GithubStatsSection from '$lib/components/sections/GithubStatsSection.svelte';
	import SocialInviteSection from '$lib/components/sections/SocialInviteSection.svelte';
	import ContactSection from '$lib/components/sections/ContactSection.svelte';
	import FloatingWhatsApp from '$lib/components/ui/FloatingWhatsApp.svelte';
	import { environment } from '$lib/state/environment.svelte';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const messages = [
		"Olá, tudo bem?",
		"Eu sou Calebe",
		"Bem Vindo a meu portfólio!!"
	];

    let isSnapping = false;
    let snapReleaseTimeout: number | undefined;
    let lastSectionId = '';

    function smoothSnap(targetY: number) {
        if (isSnapping) return;
        isSnapping = true;
        
        // Usa o mesmo motor do scroll principal (Lenis) para evitar jitter
        environment.scrollTo(targetY, 1200);

        // Lock snapping por um período curto para evitar disputa entre seções
        clearTimeout(snapReleaseTimeout);
        snapReleaseTimeout = window.setTimeout(() => {
            isSnapping = false;
        }, 1000);
    }

    onMount(() => {
        const handleScroll = () => {
            if (isSnapping) return;

            const sections = document.querySelectorAll('div[data-magnet]');
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top + window.scrollY;
                const sectionHeight = rect.height;
                const sectionId = section.id;

                if (sectionHeight < window.innerHeight * 1.5) return;

                // Threshold: Snap when section occupies 90% of viewport
                const viewRatio = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
                
                // Stickiness: If we are in the 'Trigger Zone' (top 15% of the massive section)
                if (viewRatio > 0.9 && window.scrollY > sectionTop && window.scrollY < sectionTop + sectionHeight * 0.18) {
                    if (lastSectionId !== sectionId) {
                        lastSectionId = sectionId;
                        // Snap precisely to the center sweet spot
                        smoothSnap(sectionTop + sectionHeight * 0.5 - window.innerHeight / 2);
                    }
                }
                
                // Reset tracking only if we leave definitively
                if (window.scrollY < sectionTop - 150 || window.scrollY > sectionTop + sectionHeight) {
                    if (lastSectionId === sectionId) lastSectionId = '';
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (snapReleaseTimeout) clearTimeout(snapReleaseTimeout);
        };
    });
</script>

<svelte:head>
	<title>Calebe Araujo | Líder Técnico & Desenvolvedor Full Stack</title>
	<meta name="description" content="Calebe Araujo é Líder Técnico e Engenheiro Full Stack especializado em SvelteKit, infraestrutura Cloudflare e sistemas CRM de alta performance. Focado em UX premium e SEO agressivo." />
	<link rel="canonical" href="https://calebe.dev" />
	
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://calebe.dev" />
	<meta property="og:title" content="Calebe Araujo | Líder Técnico & Desenvolvedor Full Stack" />
	<meta property="og:description" content="Engenharia de software robusta, UX premium e otimização para Answer Engines (AEO)." />
	<meta property="og:image" content="https://calebe.dev/og-image.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://calebe.dev" />
	<meta property="twitter:title" content="Calebe Araujo | Líder Técnico & Desenvolvedor Full Stack" />
	<meta property="twitter:description" content="Especialista em ecossistemas Svelte e infraestrutura de alta precisão." />
	<meta property="twitter:image" content="https://calebe.dev/og-image.png" />

	<!-- Keywords for SEO/ATS -->
	<meta name="keywords" content="Desenvolvedor Full Stack, Tech Lead, SvelteKit, TypeScript, Node.js, Cloudflare Tunnel, SEO, AEO, CRM Development, Engenheiro de Software" />

	<!-- JSON-LD for AEO/SEO -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Calebe Araujo",
			"gender": "Male",
			"jobTitle": "Líder Técnico & Desenvolvedor Full Stack",
			"knowsAbout": ["SvelteKit", "TypeScript", "Node.js", "SEO", "Cloudflare", "Infrastructure", "CRM Development", "AEO"],
			"url": "https://calebe.dev",
			"sameAs": [
				"https://github.com/calebearaujo"
			],
			"worksFor": {
				"@type": "Organization",
				"name": "Grupo OC",
				"description": "Agência de Marketing e Tecnologia"
			},
			"description": "Desenvolvedor focado em ecossistemas de alta performance e sincronização de dados complexos."
		}
	</script>
</svelte:head>

<section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">
	<DynamicHeroBackground />

	<!-- Blog Top Button -->
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

	<!-- Showcase / Review Experience -->
	<div class="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-3">
		{#if environment.isShowcaseRunning && environment.showcaseLabel}
			<div 
				in:fade={{ duration: 0.5 }} 
				out:fade={{ duration: 0.5 }}
				class="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[9px] text-blue-400/80 uppercase tracking-widest font-medium backdrop-blur-md"
			>
				Mostrando: {environment.showcaseLabel}
			</div>
		{/if}

		<button 
			onclick={() => environment.startShowcase()} 
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

<div class="relative z-10 bg-black">
    <div id="about" data-magnet>
        <AboutSection />
    </div>

    <div id="accessibility" data-magnet>
        <AccessibilitySection />
    </div>

    <div id="experience" data-magnet>
        <ExperienceSection />
    </div>

    <InteractiveSlides />

    <div id="stack" data-magnet>
        <StackSection />
    </div>

    <div id="projects" data-magnet>
        <ProjectsSection />
    </div>

    <BlogSection />

    <GithubStatsSection />

    <SocialInviteSection />

    <ContactSection />
</div>

<FloatingWhatsApp />

<style>
    :global(html) {
        scroll-behavior: auto !important;
    }
    :global(body) {
        background: #000;
        color: #fff;
    }
</style>
