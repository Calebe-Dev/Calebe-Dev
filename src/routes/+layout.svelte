<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { 
		scrollAnimation, 
		parallaxScroll, 
		scrollProgress
	} from '$lib/utils/scrollAnimation';

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

<Navbar />
{@render children()}
<Footer />
