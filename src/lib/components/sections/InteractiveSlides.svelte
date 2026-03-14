<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { environment } from '$lib/state/environment.svelte';

	let container: HTMLElement;
	let scrollY = $state(0);
	let sectionTop = $state(0);
	let sectionHeight = $state(0);
	
	// Calcular progresso interno da seção (0 a 1)
	let progress = $derived.by(() => {
		if (sectionHeight === 0) return 0;
		const p = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
		return Math.max(0, Math.min(1, p));
	});

	// Determinar slide atual com base no progresso
	let currentSlide = $derived.by(() => {
		if (progress < 0.33) return 0;
		if (progress < 0.66) return 1;
		return 2;
	});

	onMount(() => {
		const updateDimensions = () => {
			if (container) {
				const rect = container.getBoundingClientRect();
				sectionTop = rect.top + window.scrollY;
				sectionHeight = rect.height;
			}
		};

		const onScroll = () => {
			scrollY = window.scrollY;
		};

		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		window.addEventListener('scroll', onScroll, { passive: true });

		return () => {
			window.removeEventListener('resize', updateDimensions);
			window.removeEventListener('scroll', onScroll);
		};
	});
</script>

<div bind:this={container} class="relative w-full h-[300vh] bg-black">
	<!-- Sticky Wrapper -->
	<div class="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
		
		<!-- Slide Backgrounds (Dinâmicos) -->
		<div class="absolute inset-0 transition-all duration-1000 ease-in-out"
			style="background: {
				currentSlide === 0 ? 'radial-gradient(circle at 50% 50%, #0f172a 0%, #000 100%)' :
				currentSlide === 1 ? 'radial-gradient(circle at 10% 90%, #1e1b4b 0%, #000 100%)' :
				'radial-gradient(circle at 90% 10%, #312e81 0%, #000 100%)'
			}"
		></div>

		<!-- Conteúdo dos Slides -->
		<div class="relative z-10 w-full max-w-6xl px-8">
			{#if currentSlide === 0}
				<div in:fly={{ y: 50, duration: 1000 }} out:fade class="flex flex-col gap-6">
					<span class="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">Design & Estratégia</span>
					<h2 class="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter">
						Porque a <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Experiência do Usuário</span> faz diferença?
					</h2>
				</div>
			{:else if currentSlide === 1}
				<div in:fly={{ y: 50, duration: 1000 }} out:fade class="flex flex-col gap-8 max-w-4xl">
					<h3 class="text-4xl md:text-6xl font-bold text-white leading-snug">
						O primeiro contato com sua marca pode ser a diferença entre 
						<span class="text-indigo-400 italic">confiança e autoridade</span>
					</h3>
					<p class="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
						Dúvidas ocultas afetam sua credibilidade antes mesmo do primeiro clique.
					</p>
				</div>
			{:else if currentSlide === 2}
				<div in:fly={{ y: 50, duration: 1000 }} out:fade class="flex flex-col gap-8">
					<h2 class="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter">
						Mais que um <br/> <span class="text-blue-500 underline decoration-blue-500/30">artefato</span>.
					</h2>
					<p class="text-2xl md:text-3xl text-slate-300 max-w-2xl font-medium">
						Usando as mesmas tecnologias que as maiores empresas de tecnologia para tornar qualquer projeto excepcional.
					</p>
					
					<!-- Arte em Destaque (Placeholder Animado) -->
					<div class="mt-8 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 transition-transform duration-1000"
						style="transform: scaleX({progress > 0.9 ? 1 : 0})"
					></div>
				</div>
			{/if}
		</div>

		<!-- Indicador de Progresso Lateral -->
		<div class="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
			{#each [0, 1, 2] as i}
				<div class="w-1.5 h-12 rounded-full transition-all duration-500 {currentSlide === i ? 'bg-blue-500 scale-y-125' : 'bg-white/10'}"></div>
			{/each}
		</div>
	</div>
</div>

<style>
	h2, h3 {
		text-wrap: balance;
	}
</style>
