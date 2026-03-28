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

	// Logica de assembly 3D (Chaos to Order) para as mensagens do Hero
	let messageProgress = $state(1); // 0 = assembled, 1 = chaotic

    $effect(() => {
        // Quando muda a mensagem, reinicia o caos
        const _ = currentIndex;
        messageProgress = 1;
        setTimeout(() => messageProgress = 0, 50);
    });

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

    function getCharStyle(char: string, index: number) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        const intensity = messageProgress;
        const seed = (currentIndex * 100) + index;
        const random = (s: number) => Math.sin(s) * 10000 - Math.floor(Math.sin(s) * 10000);
        
        const offsetX = (random(seed) - 0.5) * 2000 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 1500 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 4000 * intensity;
        const rotateX = (random(seed + 3) - 0.5) * 720 * intensity;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${rotateX}deg);
            opacity: ${1 - intensity};
            filter: blur(${intensity * 15}px);
            transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease, filter 0.8s ease;
            will-change: transform, opacity;
        `;
    }

	onMount(() => {
		offscreenCtx = offscreenCanvas.getContext('2d', { willReadFrequently: true })!;

		if (window.scrollY > 100) {
			isFinished = true;
			currentIndex = messages.length - 1;
			environment.isScrollLocked = false;
			messageProgress = 0;
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

	<div bind:this={textElement} class="relative w-full h-48 flex items-center justify-center transform-style-3d">
		{#key currentIndex}
			<h3 
				class="absolute text-fluid-hero font-black tracking-tighter text-center px-4 transition-colors duration-1000 whitespace-nowrap
					{environment.dayCycle === 'day' ? 'text-slate-900 drop-shadow-sm' : 'text-white'}"
			>
                {#each messages[currentIndex].split('') as char, i}
                    <span style={getCharStyle(char, i)}>{char}</span>
                {/each}
			</h3>
		{/key}
	</div>

	{#if isFinished}
		<div 
			bind:this={subtitleElement}
			in:fade={{ duration: 1500, delay: 400 }}
			class="mt-6 text-xl md:text-3xl font-black tracking-[0.4em] uppercase text-center transition-all duration-1000 mix-blend-difference
				{environment.dayCycle === 'day' ? 'text-slate-700' : 'text-blue-500/80 animate-shimmer'}"
		>
			Desenvolvedor Fullstack Multi Plataforma
		</div>

		<!-- Animated Scroll Indicator -->
		<div 
			in:fade={{ duration: 1000, delay: 1000 }}
			class="absolute bottom-[-140px] flex flex-col items-center gap-4 transition-all duration-1000
				{environment.dayCycle === 'day' ? 'text-slate-900/30' : 'text-white/20'}"
		>
			<span class="text-[9px] uppercase tracking-[0.6em] font-black animate-pulse">Inicie a Jornada</span>
			<div class="w-[1px] h-20 bg-gradient-to-b from-blue-500/50 to-transparent relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1/2 bg-blue-400/80 animate-scroll-dash"></div>
            </div>
		</div>
	{/if}
</div>

<style>
	.text-container {
		transform-style: preserve-3d;
	}

    .animate-shimmer {
        animation: shimmer 3s ease-in-out infinite alternate;
    }

    @keyframes shimmer {
        from { opacity: 0.4; filter: blur(2px); text-shadow: 0 0 10px transparent; }
        to { opacity: 1; filter: blur(0); text-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
    }

    @keyframes scroll-dash {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(200%); }
    }

    .animate-scroll-dash {
        animation: scroll-dash 2s ease-in-out infinite;
    }
</style>
