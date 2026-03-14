<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
import { environment } from '$lib/state/environment.svelte';

	let { messages = [] } = $props();
	
	let currentIndex = $state(0);
	let isFinished = $state(false);
	let textElement: HTMLElement;

	onMount(() => {
		const interval = setInterval(() => {
			if (currentIndex < messages.length - 1) {
				currentIndex++;
			} else {
				isFinished = true;
				clearInterval(interval);
			}
		}, 6000); // Duração aumentada para 6s

		// Observer para reportar os limites do texto para a física das partículas
		const observer = new ResizeObserver(() => {
			if (textElement) {
				environment.textBounds = textElement.getBoundingClientRect();
			}
		});

		if (textElement) observer.observe(textElement);

		return () => {
			clearInterval(interval);
			observer.disconnect();
		};
	});
</script>

<div class="text-container h-48 flex flex-col items-center justify-center relative">
	<div bind:this={textElement} class="relative w-full flex justify-center min-h-[1.5em]">
		{#key currentIndex}
			<h2 
				in:fade={{ duration: 1200, delay: 600 }} 
				out:fade={{ duration: 1200 }}
				class="absolute text-5xl md:text-7xl font-bold text-white tracking-tight text-center drop-shadow-2xl"
			>
				{messages[currentIndex]}
			</h2>
		{/key}
	</div>

	{#if isFinished}
		<div 
			in:fade={{ duration: 1500, delay: 1000 }}
			class="mt-12 text-2xl md:text-3xl font-light text-blue-300/90 tracking-widest uppercase animate-pulse"
		>
			Desenvolvedor Fullstack Multi Plataforma
		</div>
	{/if}
</div>

<style>
	.text-container {
		perspective: 1000px;
	}
</style>
