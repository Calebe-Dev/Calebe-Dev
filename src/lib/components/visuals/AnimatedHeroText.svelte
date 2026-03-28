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

	// Logica de transição suave (Clean design)
	let messageVisible = $state(true);

	function updateCollisionMask() {
		if (!textElement || !offscreenCanvas || !offscreenCtx) return;

		const mainBounds = textElement.getBoundingClientRect();
		const subtitleBounds = isFinished && subtitleElement ? subtitleElement.getBoundingClientRect() : null;
		
		const left = Math.min(mainBounds.left, subtitleBounds?.left ?? mainBounds.left);
		const right = Math.max(mainBounds.right, subtitleBounds?.right ?? mainBounds.right);
		const top = Math.min(mainBounds.top, subtitleBounds?.top ?? mainBounds.top);
		const bottom = Math.max(mainBounds.bottom, subtitleBounds?.bottom ?? mainBounds.bottom);
		
		const totalWidth = right - left;
		const totalHeight = bottom - top;

		if (totalWidth <= 0) return;

		const scale = 0.5;
		const w = Math.floor(totalWidth * scale);
		const h = Math.floor(totalHeight * scale);

		if (offscreenCanvas.width !== w || offscreenCanvas.height !== h) {
			offscreenCanvas.width = w;
			offscreenCanvas.height = h;
		}

		offscreenCtx.clearRect(0, 0, w, h);
		
		const mainFS = parseFloat(window.getComputedStyle(textElement.querySelector('h3') || textElement).fontSize);
		offscreenCtx.font = `bold ${mainFS * scale}px Inter, sans-serif`;
		offscreenCtx.textAlign = 'center';
		offscreenCtx.textBaseline = 'middle';
		offscreenCtx.fillStyle = 'white';
		
		const mainCenterX = (mainBounds.left - left + mainBounds.width / 2) * scale;
		const mainCenterY = (mainBounds.top - top + mainBounds.height / 2) * scale;
		offscreenCtx.fillText(messages[currentIndex], mainCenterX, mainCenterY);

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

<div class="text-container min-h-[400px] flex flex-col items-center justify-center relative perspective-[2500px]">
	<canvas bind:this={offscreenCanvas} class="hidden"></canvas>

	<div bind:this={textElement} class="relative w-full h-48 flex items-center justify-center">
		{#key currentIndex}
			<h3 
				in:fade={{ duration: 1500, delay: 200 }}
				out:fade={{ duration: 800 }}
				class="absolute text-fluid-hero font-black tracking-tighter text-center px-4 transition-colors duration-1000 whitespace-nowrap blur-none
					{environment.dayCycle === 'day' ? 'text-slate-900' : 'text-white'}"
			>
                {messages[currentIndex]}
			</h3>
		{/key}
	</div>

	{#if isFinished}
		<div 
			bind:this={subtitleElement}
			in:fade={{ duration: 2000, delay: 600 }}
			class="mt-8 text-xl md:text-2xl font-black tracking-[0.5em] uppercase text-center transition-all duration-1000 mix-blend-difference
				{environment.dayCycle === 'day' ? 'text-slate-600' : 'text-blue-500/80'}"
		>
			Desenvolvedor Fullstack Multi Plataforma
		</div>

		<!-- Animated Scroll Indicator -->
		<div 
			in:fade={{ duration: 1000, delay: 1200 }}
			class="absolute bottom-[-160px] flex flex-col items-center gap-4 transition-all duration-1000
				{environment.dayCycle === 'day' ? 'text-slate-900/40' : 'text-white/20'}"
		>
			<span class="text-[9px] uppercase tracking-[0.6em] font-black opacity-50">Explore a Infraestrutura</span>
			<div class="w-[1px] h-24 bg-gradient-to-b from-blue-500/40 to-transparent relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1/2 bg-blue-400/80 animate-scroll-dash"></div>
            </div>
		</div>
	{/if}
</div>

<style>
	.text-container {
		transform-style: preserve-3d;
	}

    @keyframes scroll-dash {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(200%); }
    }

    .animate-scroll-dash {
        animation: scroll-dash 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
    }
</style>
