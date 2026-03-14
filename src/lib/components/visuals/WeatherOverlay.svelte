<script lang="ts">
	import { environment } from '$lib/state/environment.svelte';
	import { fade } from 'svelte/transition';
	
	let isRainy = $derived(environment.weather === 'rainy');
	let isSunny = $derived(environment.weather === 'sunny');
</script>

{#if isRainy}
	<div transition:fade={{ duration: 1000 }} class="rain-container">
		{#each Array(50) as _}
			<div class="drop" style="left: {Math.random() * 100}%; animation-delay: {Math.random() * 2}s; animation-duration: {Math.random() * 1 + 0.5}s;"></div>
		{/each}
	</div>
{/if}

{#if isSunny}
	<div transition:fade={{ duration: 1000 }}>
		<div class="sun-flare"></div>
		<div class="god-rays"></div>
	</div>
{/if}

<style>
	.rain-container {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
		z-index: -1;
	}

	.drop {
		position: absolute;
		top: -20px;
		width: 1px;
		height: 30px;
		background: rgba(255, 255, 255, 0.3);
		filter: blur(1px);
		animation: fall 1s linear infinite;
	}

	@keyframes fall {
		to { transform: translateY(100vh); }
	}

	.sun-flare {
		position: absolute;
		top: 10%;
		right: 15%;
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, rgba(255, 255, 240, 0.15), transparent 70%);
		border-radius: 50%;
		pointer-events: none;
		z-index: -1;
		filter: blur(40px);
	}

	.god-rays {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: repeating-linear-gradient(
			135deg,
			transparent,
			transparent 80px,
			rgba(255, 255, 240, 0.03) 100px,
			rgba(255, 255, 240, 0.03) 120px
		);
		pointer-events: none;
		z-index: -1;
		mask-image: radial-gradient(circle at 85% 15%, black, transparent 70%);
	}
</style>
