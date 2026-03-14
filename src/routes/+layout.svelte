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

<div class="min-h-screen bg-black">
	{@render children()}
</div>
