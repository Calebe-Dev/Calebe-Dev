<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { 
		scrollAnimation, 
		parallaxScroll, 
		scrollProgress
	} from '$lib/utils/scrollAnimation';

	const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://calebearaujo.com.br';
	const DEFAULT_TITLE = 'Calebe Araújo | Desenvolvedor Full Stack, SEO Técnico e Performance Web';
	const DEFAULT_DESCRIPTION = 'Desenvolvedor Full Stack em Sorocaba: criação de sites profissionais, landing pages e aplicações web rápidas, com SEO técnico, Core Web Vitals e foco em conversão.';
	const DEFAULT_IMAGE = '/meta/og-image.png';

	let { children } = $props();
	
	onMount(() => {
		if (browser) {
			// Legacy animation support for non-refactored sections
			AOS.init({
				duration: 800,
				once: true,
				offset: 50,
				easing: 'ease-out-cubic',
				mirror: false
			});

			// Initialize only safe scroll animations
			scrollAnimation();
			const cleanupParallax = parallaxScroll();
			const cleanupProgress = scrollProgress();

			// Ensure smooth scroll to section when navigating to a hash (works in SPA and static builds)
			afterNavigate(() => {
				if (!browser) return;
				const hash = window.location.hash;
				if (hash) {
					const id = hash.replace('#', '');
					setTimeout(() => {
						const el = document.getElementById(id);
						if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}, 50);
				}
			});

			return () => {
				if (cleanupParallax) cleanupParallax();
				if (cleanupProgress) cleanupProgress();
			};
		}
	});
</script>

<svelte:head>
	<title>{DEFAULT_TITLE}</title>
	<meta name="description" content={DEFAULT_DESCRIPTION} />
	<meta
		name="keywords"
		content="desenvolvedor full stack, criação de sites, site profissional, landing page, seo técnico, performance web, core web vitals, sveltekit, tráfego pago"
	/>
	<meta name="robots" content="index,follow,max-image-preview:large" />
	<link rel="canonical" href={SITE_URL + $page.url.pathname + ($page.url.search || '')} />

	<!-- Open Graph / Facebook -->
	<meta property="og:site_name" content="Calebe Araújo" />
	<meta property="og:title" content={DEFAULT_TITLE} />
	<meta property="og:description" content={DEFAULT_DESCRIPTION} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE_URL + $page.url.pathname} />
	<meta property="og:image" content={SITE_URL + DEFAULT_IMAGE} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={DEFAULT_TITLE} />
	<meta name="twitter:description" content={DEFAULT_DESCRIPTION} />
	<meta name="twitter:image" content={SITE_URL + DEFAULT_IMAGE} />

	<!-- Theme Color for Browser Chrome (Apple Pro Black) -->
	<meta name="theme-color" content="#000000" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Calebe Araújo',
		url: SITE_URL,
		jobTitle: 'Desenvolvedor Full Stack e Especialista em SEO Técnico',
		sameAs: [
			'https://www.linkedin.com/in/calebe-dev',
			'https://github.com/Calebe-Dev',
			'https://instagram.com/calebe_original'
		],
		description: DEFAULT_DESCRIPTION,
		image: SITE_URL + '/meta/og-image.png',
		knowsAbout: ['Desenvolvimento Full Stack', 'SvelteKit', 'React', 'SEO técnico', 'Core Web Vitals', 'Meta Ads'],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Sorocaba',
			addressRegion: 'SP',
			addressCountry: 'BR'
		}
	})}</script>
</svelte:head>

<Navbar />
<!-- Fixed z-index for ThemeToggle to ensure it stays above new layers if needed -->
<div class="relative z-50">
	<ThemeToggle />
</div>
{@render children()}
<Footer />
