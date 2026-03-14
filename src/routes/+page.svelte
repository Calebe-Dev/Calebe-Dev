<script lang="ts">
	import DynamicHeroBackground from '$lib/components/visuals/DynamicHeroBackground.svelte';
w	import AnimatedHeroText from '$lib/components/visuals/AnimatedHeroText.svelte';
	import { environment } from '$lib/state/environment.svelte';

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

	<!-- Botão de Showcase (Review Experience) -->
	<div class="absolute bottom-12 z-30 flex flex-col items-center w-full gap-4">
		{#if environment.isShowcaseRunning && environment.showcaseLabel}
			<div 
				in:fade={{ duration: 500 }} 
				out:fade={{ duration: 500 }}
				class="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full text-[10px] text-blue-400 uppercase tracking-[0.2em] font-bold backdrop-blur-md"
			>
				Mostrando: {environment.showcaseLabel}
			</div>
		{/if}

		<button 
			on:click={() => environment.startShowcase()} 
			disabled={environment.isShowcaseRunning}
			class="group px-8 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full text-xs transition-all duration-500 uppercase tracking-[0.4em] border border-white/10 hover:border-white/30 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed
				{environment.dayCycle === 'day'
				? 'text-slate-900 border-slate-900/10'
				: 'text-white border-white/20'}"
		>
			{#if environment.isShowcaseRunning}
				<span class="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
				Sincronizando...
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="group-hover:rotate-180 transition-transform duration-700"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
				Review Experience
			{/if}
		</button>
	</div>
</section>

<section class="p-20 bg-black text-white">
	<p class="text-center opacity-50">Role para explorar o novo projeto...</p>
</section>
