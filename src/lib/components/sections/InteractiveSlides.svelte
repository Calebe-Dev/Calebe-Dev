<script lang="ts">
	import { onMount } from 'svelte';
	import { environment } from '$lib/state/environment.svelte';

	let container: HTMLElement;
	let scrollY = $state(0);
	let sectionTop = $state(0);
	let sectionHeight = $state(0);
	let viewportHeight = $state(0);
	
	// Progresso global da seção (0 a 1)
	let globalProgress = $derived.by(() => {
		if (sectionHeight <= viewportHeight) return 0;
		const start = sectionTop;
		const end = sectionTop + sectionHeight - viewportHeight;
		const p = (scrollY - start) / (end - start);
		return Math.max(0, Math.min(1, p));
	});

	// Helper para calcular a opacidade/transform baseada num range específico
	function getInterpolation(progress: number, start: number, end: number, fadeOutStart: number = 0.8) {
		if (progress < start || progress > end) return { opacity: 0, y: 40, blur: 10, scale: 0.95 };
		
		const range = end - start;
		const localProgress = (progress - start) / range;
		
		let opacity = 1;
		let y = 0;
		let blur = 0;
		let scale = 1;

		// Fade In (primeiros 20% do range local)
		if (localProgress < 0.2) {
			const ease = localProgress / 0.2;
			opacity = ease;
			y = 40 * (1 - ease);
			blur = 10 * (1 - ease);
			scale = 0.95 + (0.05 * ease);
		} 
		// Fade Out (últimos 20% do range local)
		else if (localProgress > fadeOutStart) {
			const ease = (1 - localProgress) / (1 - fadeOutStart);
			opacity = ease;
			y = -40 * (1 - ease);
			blur = 10 * (1 - ease);
			scale = 1 + (0.05 * (1 - ease));
		}

		return { opacity, y, blur, scale };
	}

	let hasAutoScrolled = $state(false);

	onMount(() => {
		const updateDimensions = () => {
			if (container) {
				const rect = container.getBoundingClientRect();
				sectionTop = rect.top + window.scrollY;
				sectionHeight = rect.height;
				viewportHeight = window.innerHeight;
			}
		};

		const onScroll = () => {
			scrollY = window.scrollY;
			
			// Detectar se a seção ocupa mais de 60% da tela
			const rect = container.getBoundingClientRect();
			const visibility = Math.abs(rect.top) / viewportHeight;
			
			// Trigger do auto-scroll (60% da tela ocupada e ainda não scrollou auto)
			if (rect.top < viewportHeight * 0.4 && !hasAutoScrolled && !environment.isScrollLocked) {
				hasAutoScrolled = true;
				const targetScroll = sectionTop + sectionHeight - viewportHeight;
				
				window.scrollTo({
					top: targetScroll,
					behavior: 'smooth'
				});
			}
		};

		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('resize', updateDimensions);
			window.removeEventListener('scroll', onScroll);
		};
	});

	const slide1 = $derived(getInterpolation(globalProgress, 0, 0.35));
	const slide2 = $derived(getInterpolation(globalProgress, 0.32, 0.68));
	const slide3 = $derived(getInterpolation(globalProgress, 0.65, 1.0, 1.0)); // Não faz fadeOut no fim
</script>

<div bind:this={container} class="relative w-full h-[600vh] bg-black">
	<!-- Sticky Wrapper -->
	<div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
		
		<!-- Fundo Progressivo (Escuro para Claro) -->
		<div class="absolute inset-0 transition-colors duration-1000"
			style="background: linear-gradient(180deg, 
				#000 0%, 
				hsl(220, 30%, {10 + (globalProgress * 25)}%) 100%
			)"
		></div>
		
		<!-- Overlay de Brilho Dinâmico -->
		<div class="absolute inset-0 opacity-30"
			style="background: radial-gradient(circle at {50 + (globalProgress * 10)}% {50 - (globalProgress * 10)}%, #3b82f6 0%, transparent 70%)"
		></div>

		<!-- Conteúdo Interpolado -->
		<div class="relative z-10 w-full h-full max-w-5xl px-8 text-center">
			
			<!-- Slide 1 -->
			<div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"
				style="opacity: {slide1.opacity}; transform: translate(0, calc(-50% + {slide1.y}px)) scale({slide1.scale}); filter: blur({slide1.blur}px)"
			>
				<span class="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-8 block">Storytelling Digital</span>
				<h2 class="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
					Porque a <br/> <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">Experiência</span> <br/> faz diferença?
				</h2>
			</div>

			<!-- Slide 2 -->
			<div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"
				style="opacity: {slide2.opacity}; transform: translate(0, calc(-50% + {slide2.y}px)) scale({slide2.scale}); filter: blur({slide2.blur}px)"
			>
				<h2 class="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
					O primeiro contato com sua marca é o limite entre 
					<span class="bg-blue-600/20 px-4 py-1 rounded-lg border border-blue-500/30">autoridade</span> e dúvida.
				</h2>
				<p class="mt-8 text-xl md:text-3xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
					Dúvidas silenciosas afetam sua credibilidade antes mesmo do primeiro clique.
				</p>
			</div>

			<!-- Slide 3 -->
			<div class="absolute inset-x-0 top-1/2 transition-all duration-75 ease-out pointer-events-none px-8"
				style="opacity: {slide3.opacity}; transform: translate(0, calc(-50% + {slide3.y}px)) scale({slide3.scale}); filter: blur({slide3.blur}px)"
			>
				<h2 class="text-6xl md:text-9xl font-black text-white leading-none tracking-tighter mb-10">
					Mais que um <br/> <span class="text-blue-500">artefato</span>.
				</h2>
				<p class="text-xl md:text-3xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
					Usando as mesmas tecnologias que as maiores Big Techs para tornar qualquer projeto uma obra de arte em destaque.
				</p>
				
				<!-- Detalhe Visual (Arte) -->
				<div class="mt-12 w-24 h-24 md:w-32 md:h-32 mx-auto relative scale-75 md:scale-100">
					<div class="absolute inset-0 border border-blue-500/50 rounded-full animate-ping"></div>
					<div class="absolute inset-4 border border-blue-400/30 rounded-full animate-pulse delay-75"></div>
					<div class="absolute inset-8 bg-blue-600 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.6)]"></div>
				</div>
			</div>

		</div>
	</div>
</div>

<style>
	h2 {
		text-wrap: balance;
		word-break: keep-all;
	}
</style>
