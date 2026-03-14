<script lang="ts">
	import DynamicHeroBackground from '$lib/components/visuals/DynamicHeroBackground.svelte';
	import AnimatedHeroText from '$lib/components/visuals/AnimatedHeroText.svelte';
	import { environment } from '$lib/state/environment.svelte';

	const messages = [
		"Olá, tudo bem?",
		"Eu sou Calebe",
		"Bem Vindo a meu portfólio!!"
	];

	// Toggle helper for testing
	function toggleWeather() {
		environment.weather = environment.weather === 'sunny' ? 'rainy' : 'sunny';
	}
	
	function toggleTime() {
		environment.dayCycle = environment.dayCycle === 'day' ? 'night' : 'day';
	}
</script>

<section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">
	<DynamicHeroBackground />
	
	<div class="relative z-10 text-center px-6 w-full max-w-4xl">
		<AnimatedHeroText {messages} />
		<p class="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto font-light leading-relaxed mt-6 opacity-0 animate-[fadeIn_1.5s_ease-out_forwards] delay-1000">
			Engenharia Digital Premium & Design de Alta Performance
		</p>
	</div>

	<!-- Debug controls (temporary for user verification) -->
	<div class="absolute bottom-8 right-8 z-20 flex gap-4">
		<button on:click={toggleTime} class="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-xs transition-all uppercase tracking-widest border border-white/20">
			Alternar Ciclo (Dia/Noite)
		</button>
		<button on:click={toggleWeather} class="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur rounded-full text-xs transition-all uppercase tracking-widest border border-white/20">
			Alternar Clima (Sol/Chuva)
		</button>
	</div>
</section>

<section class="p-20 bg-black text-white">
	<p class="text-center opacity-50">Role para explorar o novo projeto...</p>
</section>
