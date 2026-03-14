<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let { messages = [] } = $props();
	
	let currentIndex = $state(0);

	onMount(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % messages.length;
		}, 4000);

		return () => clearInterval(interval);
	});
</script>

<div class="text-container h-32 flex items-center justify-center relative">
	{#key currentIndex}
		<h2 
			in:fade={{ duration: 1000, delay: 400 }} 
			out:fade={{ duration: 1000 }}
			class="absolute text-4xl md:text-6xl font-bold text-white tracking-tight text-center drop-shadow-2xl"
		>
			{messages[currentIndex]}
		</h2>
	{/key}
</div>

<style>
	.text-container {
		perspective: 1000px;
	}
</style>
