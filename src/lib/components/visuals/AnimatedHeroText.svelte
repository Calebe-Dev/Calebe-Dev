<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { messages = [] } = $props();
	
	let currentIndex = $state(0);
	let visible = $state(true);

	onMount(() => {
		const interval = setInterval(() => {
			visible = false;
			setTimeout(() => {
				currentIndex = (currentIndex + 1) % messages.length;
				visible = true;
			}, 1000); // Tempo do fade-out antes de trocar
		}, 4000); // Duração total de cada frase

		return () => clearInterval(interval);
	});
</script>

<div class="text-container h-24 flex items-center justify-center">
	{#if visible}
		<h2 
			in:fade={{ duration: 800 }} 
			out:fade={{ duration: 800 }}
			class="text-4xl md:text-6xl font-bold text-white tracking-tight text-center drop-shadow-2xl"
		>
			{messages[currentIndex]}
		</h2>
	{/if}
</div>

<style>
	.text-container {
		perspective: 1000px;
	}
</style>
