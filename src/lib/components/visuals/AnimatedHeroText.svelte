<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { environment } from '$lib/state/environment.svelte';

	let { messages = [] } = $props();

	let currentIndex = $state(0);
	let isFinished = $state(false);
	let textElement: HTMLElement;
	let offscreenCanvas: HTMLCanvasElement;
	let offscreenCtx: CanvasRenderingContext2D;

	let subtitleElement = $state<HTMLElement | null>(null);

	function updateCollisionMask() {
		if (!textElement || !offscreenCanvas || !offscreenCtx) return;

		const mainBounds = textElement.getBoundingClientRect();
		const subtitleBounds = isFinished && subtitleElement ? subtitleElement.getBoundingClientRect() : null;
		
		// Encontrar o bounding box total que engloba ambos os textos
		const left = Math.min(mainBounds.left, subtitleBounds?.left ?? mainBounds.left);
		const right = Math.max(mainBounds.right, subtitleBounds?.right ?? mainBounds.right);
		const top = Math.min(mainBounds.top, subtitleBounds?.top ?? mainBounds.top);
		const bottom = Math.max(mainBounds.bottom, subtitleBounds?.bottom ?? mainBounds.bottom);
		
		const totalWidth = right - left;
		const totalHeight = bottom - top;

		if (totalWidth === 0) return;

		const scale = 0.5;
		const w = Math.floor(totalWidth * scale);
		const h = Math.floor(totalHeight * scale);

		if (offscreenCanvas.width !== w || offscreenCanvas.height !== h) {
			offscreenCanvas.width = w;
			offscreenCanvas.height = h;
		}

		offscreenCtx.clearRect(0, 0, w, h);
		
		// Desenhar Texto Principal no Mask
		const mainFS = parseFloat(window.getComputedStyle(textElement.querySelector('h2') || textElement).fontSize);
		offscreenCtx.font = `bold ${mainFS * scale}px Inter, sans-serif`;
		offscreenCtx.textAlign = 'center';
		offscreenCtx.textBaseline = 'middle';
		offscreenCtx.fillStyle = 'white';
		
		// Posição relativa ao "total bounds"
		const mainCenterX = (mainBounds.left - left + mainBounds.width / 2) * scale;
		const mainCenterY = (mainBounds.top - top + mainBounds.height / 2) * scale;
		offscreenCtx.fillText(messages[currentIndex], mainCenterX, mainCenterY);

		// Desenhar Subtítulo no Mask (se visível)
		if (isFinished && subtitleElement) {
			const subFS = parseFloat(window.getComputedStyle(subtitleElement).fontSize);
			offscreenCtx.font = `300 ${subFS * scale}px Inter, sans-serif`;
			const subCenterX = (subtitleBounds!.left - left + subtitleBounds!.width / 2) * scale;
			const subCenterY = (subtitleBounds!.top - top + subtitleBounds!.height / 2) * scale;
			offscreenCtx.fillText("Desenvolvedor Fullstack Multi Plataforma", subCenterX, subCenterY);
		}

		const imageData = offscreenCtx.getImageData(0, 0, w, h);
		environment.collisionMask = {
			data: imageData.data,
			width: w,
			height: h
		};
		// Reportar a caixa total para o canvas de partículas saber onde procurar o erro
		environment.textBounds = {
			left, right, top, bottom,
			width: totalWidth,
			height: totalHeight,
			x: left,
			y: top,
			toJSON: () => {}
		} as DOMRect;
	}

	onMount(() => {
		offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true })!;

		// Verificar se o usuário já recarregou a página fora da Hero
		if (window.scrollY > 100) {
			isFinished = true;
			currentIndex = messages.length - 1;
			environment.isScrollLocked = false;
			updateCollisionMask();
		}

		const interval = setInterval(() => {
			if (isFinished) {
				clearInterval(interval);
				return;
			}
			
			if (currentIndex < messages.length - 1) {
				currentIndex++;
			} else {
				isFinished = true;
				environment.isScrollLocked = false;
				clearInterval(interval);
			}
		}, 4500);

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

<div class="text-container min-h-[400px] flex flex-col items-center justify-center relative">
	<!-- Canvas invisível para gerar o mapa de colisão -->
	<canvas bind:this={offscreenCanvas} class="hidden"></canvas>

	<div bind:this={textElement} class="relative w-full h-48 flex items-center justify-center">
		{#key currentIndex}
			<h2 
				in:fade={{ duration: 1000, delay: 500 }} 
				out:fade={{ duration: 1000 }}
				class="absolute text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-center px-4 transition-colors duration-1000
					{environment.dayCycle === 'day' ? 'text-slate-900 drop-shadow-sm' : 'text-white drop-shadow-2xl'}"
			>
				{messages[currentIndex]}
			</h2>
		{/key}
	</div>

	{#if isFinished}
		<div 
			bind:this={subtitleElement}
			in:fade={{ duration: 1500, delay: 200 }}
			class="mt-4 text-xl md:text-2xl font-light tracking-widest uppercase text-center transition-colors duration-1000
				{environment.dayCycle === 'day' ? 'text-slate-700' : 'text-blue-300/80'}"
		>
			Desenvolvedor Fullstack Multi Plataforma
		</div>

		<!-- Indicador de Scroll -->
		<div 
			in:fade={{ duration: 1000, delay: 1000 }}
			class="absolute bottom-[-100px] flex flex-col items-center gap-2 animate-bounce cursor-pointer transition-colors duration-1000
				{environment.dayCycle === 'day' ? 'text-slate-900/40' : 'text-white/40'}"
		>
			<span class="text-[10px] uppercase tracking-[0.3em] font-medium">Role para explorar</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
				<path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
			</svg>
		</div>
	{/if}
</div>

<style>
	.text-container {
		perspective: 1000px;
	}
</style>
