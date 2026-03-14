<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import '../app.css';
	
	let { children } = $props();

	onMount(() => {
		const lenis = new Lenis({
			autoRaf: true,
		});

		return () => {
			lenis.destroy();
		};
	});
</script>

<div class="min-h-screen bg-black">
	{@render children()}
</div>
