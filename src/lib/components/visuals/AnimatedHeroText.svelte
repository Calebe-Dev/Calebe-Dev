<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { environment } from '$lib/state/environment.svelte';

	let { messages = [] } = $props();

	let currentIndex = $state(0);
	let isFinished = $state(false);
	let textElement: HTMLElewment;
	let offscreenCanvas: HTMLCanvasElement;
	let offscreenCtx: CanvasRenderingContext2D;

	function updateCollisionMask() {
		if (!textElement || !offscreenCanvas || !offscreenCtx) return;

		const bounds = textElement.getBoundingClientRect();
		if (bounds.width === 0) return;

		// Sincronizar tamanho do canvas com o elemento (em baixa resolução para performance)
		const scale = 0.5;
		const w = Math.floor(bounds.width * scale);
		const h = Math.floor(bounds.height * scale);

		if (offscreenCanvas.width !== w || offscreenCanvas.height !== h) {
			offscreenCanvas.width = w;
			offscreenCanvas.height = h;
		}

		offscreenCtx.clearRect(0, 0, w, h);

		// Estilizar o canvas para bater com o CSS
		const fontSize = parseFloat(
			window.getComputedStyle(textElement.querySelector('h2') || textElement).fontSize
		);
		offscreenCtx.font = `bold ${fontSize * scale}px Inter, sans-serif`;
		offscreenCtx.textAlign = 'center';
		offscreenCtx.textBaseline = 'middle';
		offscreenCtx.fillStyle = 'white';

		// Desenhar a mensagem atual
		offscreenCtx.fillText(messages[currentIndex], w / 2, h / 2);

		// Capturar dados de pixel
		const imageData = offscreenCtx.getImageData(0, 0, w, h);
		environment.collisionMask = {
			data: imageData.data,
			width: w,
			height: h
		};
		environment.textBounds = bounds;
	}

	onMount(() => {
		offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true })!;

		const interval = setInterval(() => {
			if (currentIndex < messages.length - 1) {
				currentIndex++;
			} else {
				isFinished = true;
				clearInterval(interval);
			}
		}, 4500); // Duração reduzida para 4.5s

		// Loop de atualização constante para física (inclusive durante animações)
		let animId: number;
		const loop = () => {
			if (browser) updateCollisionMask();
			animId = requestAnimationFrame(loop);
		};
		loop();

		return () => {
			clearInterval(interval);
			cancelAnimationFrame(animId);
		};
	});
</script>

<div class="text-container min-h-[500px] flex flex-col items-center justify-center relative">
	<!-- Canvas invisível para gerar o mapa de colisão -->
	<canvas bind:this={offscreenCanvas} class="hidden"></canvas>

	<div bind:this={textElement} class="relative w-full h-64 flex items-center justify-center">
		{#key currentIndex}
			<h2 
				in:fade={{ duration: 1000, delay: 500 }} 
				out:fade={{ duration: 1000 }}
				class="absolute text-5xl md:text-7xl font-bold text-white tracking-tight text-center drop-shadow-2xl px-4"
			>
				{messages[currentIndex]}
			</h2>
		{/key}
	</div>

	{#if isFinished}
		<div 
			in:fade={{ duration: 1500, delay: 500 }}
			class="mt-24 text-xl md:text-2xl font-light text-blue-300/80 tracking-widest uppercase animate-pulse text-center"
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
