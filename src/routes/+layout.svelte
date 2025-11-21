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
	const DEFAULT_TITLE = 'Calebe Araujo — Desenvolvimento web & SEO';
	const DEFAULT_DESCRIPTION = 'Desenvolvimento front-end, performance e SEO técnico. Portfólio de projetos e estudos de caso.';
	const DEFAULT_IMAGE = '/projects/default.png';

	let { children } = $props();
	
	onMount(() => {
		if (browser) {
			AOS.init({
				duration: 1000,
				once: false,
				offset: 100,
				easing: 'ease-out-cubic',
				mirror: true
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
					// Delay slightly to allow DOM updates
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
	<link rel="canonical" href={SITE_URL + $page.url.pathname + ($page.url.search || '')} />

	<!-- Open Graph -->
	<meta property="og:site_name" content="Calebe Araujo" />
	<meta property="og:title" content={DEFAULT_TITLE} />
	<meta property="og:description" content={DEFAULT_DESCRIPTION} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={SITE_URL + $page.url.pathname} />
	<meta property="og:image" content={SITE_URL + DEFAULT_IMAGE} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={DEFAULT_TITLE} />
	<meta name="twitter:description" content={DEFAULT_DESCRIPTION} />

	<meta name="theme-color" content="#0a0a0a" />

	<!-- JSON-LD Organization -->
	<script type="application/ld+json">{JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Calebe Araujo',
		url: SITE_URL,
		sameAs: [
			'https://www.linkedin.com',
			'https://github.com'
		]
	})}</script>
</svelte:head>

<Navbar />
<ThemeToggle />
{@render children()}
<Footer />
