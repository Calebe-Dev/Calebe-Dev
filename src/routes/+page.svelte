<script lang="ts">
	import DynamicHeroBackground from '$lib/components/visuals/DynamicHeroBackground.svelte';
	import AnimatedHeroText from '$lib/components/visuals/AnimatedHeroText.svelte';
	import { environment } from '$lib/state/environment.svelte';
	import { fade } from 'svelte/transition';

	const messages = [
		"Olá, tudo bem?",
		"Eu sou Calebe",
		"Bem Vindo a meu portfólio!!"
	];
</script>

<section class="h-screen flex flex-col items-center justify-center relative overflow-hidden">
	<DynamicHeroBackground />

	<div class="relative z-20 text-center px-6 w-full max-w-4xl">
		<AnimatedHeroText {messages} />
	</div>

	<!-- Botão de Showcase (Review Experience) - Mais Discreto -->
	<div class="absolute bottom-6 right-6 z-30 flex flex-col items-end gap-2">
		{#if environment.isShowcaseRunning && environment.showcaseLabel}
			<div 
				in:fade={{ duration: 500 }} 
				out:fade={{ duration: 500 }}
				class="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-full text-[9px] text-blue-400/80 uppercase tracking-widest backdrop-blur-sm"
			>
				{environment.showcaseLabel}
			</div>
		{/if}

		<button 
			on:click={() => environment.startShowcase()} 
			disabled={environment.isShowcaseRunning}
			class="group p-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full transition-all duration-500 border border-white/10 hover:border-white/20 disabled:opacity-30
				{environment.dayCycle === 'day' ? 'text-slate-900/50 border-slate-900/5' : 'text-white/40 border-white/10'}"
			title="Review Experience"
		>
			{#if environment.isShowcaseRunning}
				<span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-60 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500">
					<circle cx="12" cy="12" r="3"></circle>
					<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
				</svg>
			{/if}
		</button>
	</div>
</section>

<section class="p-20 bg-black text-white">
	<p class="text-center opacity-50">Role para explorar o novo projeto...</p>
</section>
