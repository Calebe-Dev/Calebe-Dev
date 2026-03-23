<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { environment } from '$lib/state/environment.svelte';
	import '../app.css';
	
	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		});

		// Garantir que começamos no topo se o scroll estiver travado (intro)
		if (environment.isScrollLocked) {
			window.scrollTo(0, 0);
		}

		// Controle de Trava de Scroll
		$effect(() => {
			if (environment.isScrollLocked) {
				lenis.stop();
				document.body.style.overflow = 'hidden';
			} else {
				lenis.start();
				document.body.style.overflow = 'auto';
			}
		});

		return () => {
			lenis.destroy();
			document.body.style.overflow = 'auto';
		};
	});
</script>

<div class="min-h-screen bg-black overflow-x-hidden w-full">
	{@render children()}
</div>
