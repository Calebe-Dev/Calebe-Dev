<script lang="ts">
	import { onMount } from 'svelte';
	import { environment } from '$lib/state/environment.svelte';

	let container: HTMLElement;
	let scrollY = $state(0);
	let sectionTop = $state(0);
	let sectionHeight = $state(0);
	let viewportHeight = $state(0);
	
	let globalProgress = $derived.by(() => {
		if (sectionHeight <= viewportHeight) return 0;
		const start = sectionTop;
		const end = sectionTop + sectionHeight - viewportHeight;
		const p = (scrollY - start) / (end - start);
		return Math.max(0, Math.min(1, p));
	});

	// Helper para 3D Character Assembly (Unificado)
	function getCharStyle(char: string, slideIdx: number, charOffset: number, progress: number, start: number, end: number) {
		if (char === ' ') return 'display: inline-block; width: 0.25em;';
		
		const range = end - start;
		const localProgress = (progress - start) / range;
		
		// Lógica de "Lock" (Plateau): entre 0.3 e 0.7 o texto está estático
		const plateauStart = 0.3;
		const plateauEnd = 0.7;
		
		let intensity = 0;
		if (localProgress < plateauStart) {
			intensity = 1 - (localProgress / plateauStart);
		} else if (localProgress > plateauEnd) {
			intensity = (localProgress - plateauEnd) / (1 - plateauEnd);
		}

		if (progress < start || progress > end) intensity = 1;

		const seed = (slideIdx * 1000) + charOffset;
		const random = (s: number) => {
			const x = Math.sin(s) * 10000;
			return x - Math.floor(x);
		};

		const offsetX = (random(seed) - 0.5) * 1500 * intensity;
		const offsetY = (random(seed + 1) - 0.5) * 1000 * intensity;
		const offsetZ = (random(seed + 2) - 0.5) * 3000 * intensity;
		const rotate = (random(seed + 3) - 0.5) * 720 * intensity;

		return `
			display: inline-block;
			transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotate(${rotate}deg);
			opacity: ${1 - intensity};
			filter: blur(${intensity * 12}px);
			transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;
			will-change: transform, opacity;
		`;
	}

	let snapTimeout: number;
	const snapPoints = [0.15, 0.5, 0.85];

	onMount(() => {
		const updateDimensions = () => {
			if (container) {
				const rect = container.getBoundingClientRect();
				sectionTop = rect.top + window.scrollY;
				sectionHeight = rect.height;
				viewportHeight = window.innerHeight;
			}
		};

		const snapToNearest = () => {
			if (environment.isScrollLocked) return;
			const nearest = snapPoints.reduce((prev, curr) => 
				Math.abs(curr - globalProgress) < Math.abs(prev - globalProgress) ? curr : prev
			);

			if (Math.abs(nearest - globalProgress) < 0.15) {
				const targetScroll = sectionTop + (nearest * (sectionHeight - viewportHeight));
				window.scrollTo({ top: targetScroll, behavior: 'smooth' });
			}
		};

		const onScroll = () => {
			scrollY = window.scrollY;
			clearTimeout(snapTimeout);
			snapTimeout = window.setTimeout(snapToNearest, 150);
		};

		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('resize', updateDimensions);
			window.removeEventListener('scroll', onScroll);
		};
	});

	const slides = [
		{
			tag: "Storytelling Digital",
			title: "Porque a Experiência faz diferença?",
			color: "from-white to-slate-500",
			range: [0, 0.35]
		},
		{
			tag: "Autoridade Visual",
			title: "O primeiro contato com sua marca é o limite entre autoridade e dúvida.",
			color: "from-white to-blue-400",
			range: [0.32, 0.68]
		},
		{
			tag: "Tecnologia de Elite",
			title: "Mais que um artefato técnico.",
			color: "from-blue-400 to-blue-700",
			range: [0.65, 1.0]
		}
	];
</script>

<div bind:this={container} class="relative w-full h-[600vh] bg-black">
	<div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
		
		<!-- Fundo Progressivo -->
		<div class="absolute inset-0 transition-colors duration-1000"
			style="background: linear-gradient(180deg, #000 0%, hsl(220, 30%, {10 + (globalProgress * 25)}%) 100%)"
		></div>
		
		<!-- Brilho Dinâmico Centrado -->
		<div class="absolute inset-0 opacity-20"
			style="background: radial-gradient(circle at 50% 50%, #3b82f6 0%, transparent 70%)"
		></div>

		<div class="relative z-10 w-full h-full max-w-7xl px-8 flex flex-col items-center justify-center text-center perspective-[3000px]">
			
			{#each slides as slide, i}
				{@const [start, end] = slide.range}
				{@const isActive = globalProgress >= start && globalProgress <= end}
				
				<div 
					class="absolute inset-0 flex flex-col items-center justify-center px-8 transition-opacity duration-500"
					style="opacity: {isActive ? 1 : 0}; pointer-events: {isActive ? 'all' : 'none'};"
				>
					<span class="text-blue-500 font-black tracking-[0.6em] uppercase text-[10px] md:text-sm mb-12 block">
						{slide.tag}
					</span>

					<h2 class="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter text-balance mb-12">
						{#each slide.title.split(' ') as word, wIdx}
							<span class="inline-block mr-[0.3em] whitespace-nowrap">
								{#each word.split('') as char, cIdx}
									<span style={getCharStyle(char, i, wIdx * 20 + cIdx, globalProgress, start, end)}>{char}</span>
								{/each}
							</span>
						{/each}
					</h2>

					{#if i === 1}
						<p class="text-white/40 text-xl md:text-3xl font-light max-w-3xl leading-relaxed mt-4 transition-all duration-1000"
							style="opacity: {isActive ? 1 : 0}; transform: translateY({isActive ? 0 : 20}px);"
						>
							Dúvidas silenciosas afetam sua credibilidade antes mesmo do primeiro clique.
						</p>
					{/if}

					{#if i === 2}
						<div class="mt-16 w-32 h-32 mx-auto relative scale-75 md:scale-100 group">
							<div class="absolute inset-0 border border-blue-500/50 rounded-full animate-ping"></div>
							<div class="absolute inset-8 bg-blue-600 rounded-full shadow-[0_0_80px_rgba(37,99,235,0.8)] group-hover:scale-110 transition-transform duration-500"></div>
						</div>
					{/if}
				</div>
			{/each}

		</div>
	</div>
</div>

<style>
	h2 {
		text-wrap: balance;
		word-break: keep-all;
	}
	
	:global(body) {
		perspective: 2500px;
	}
</style>
