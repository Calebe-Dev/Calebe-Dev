<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				visible = true;
			}
		}, { threshold: 0.2 });

		if (element) observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<section 
	bind:this={element}
	class="py-32 px-6 relative bg-black overflow-hidden flex flex-col items-center"
	id="about"
>
	<!-- Background subtle element -->
	<div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
	
	<div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
		{#if visible}
			<div in:fly={{ x: -50, duration: 1000 }} class="space-y-8">
				<div class="space-y-2">
					<span class="text-blue-400 text-xs font-bold uppercase tracking-[0.3em]">Calebe Araujo</span>
					<h2 class="text-4xl md:text-5xl font-bold text-white tracking-tight">Engenharia Digital com Propósito</h2>
				</div>
				
				<div class="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
					<p>
						Com foco em performance e estética premium, ajudo empresas a transformarem visões complexas em experiências digitais fluidas e memoráveis.
					</p>
					<p>
						Minha abordagem une a precisão da engenharia fullstack com a sensibilidade do design de alto nível, resultando em interfaces que não apenas funcionam, mas encantam.
					</p>
				</div>

				<div class="flex gap-4 pt-4">
					<div class="flex flex-col">
						<span class="text-white text-3xl font-bold">5+</span>
						<span class="text-slate-500 text-xs uppercase tracking-widest mt-1">Anos de XP</span>
					</div>
					<div class="w-px h-12 bg-white/10 mx-4"></div>
					<div class="flex flex-col">
						<span class="text-white text-3xl font-bold">50+</span>
						<span class="text-slate-500 text-xs uppercase tracking-widest mt-1">Projetos Entregues</span>
					</div>
				</div>
			</div>

			<div in:fly={{ x: 50, duration: 1000, delay: 200 }} class="relative group">
				<div class="aspect-square rounded-2xl overflow-hidden border border-white/10 relative transition-transform duration-700 group-hover:scale-[1.02]">
					<!-- Placeholder for image - generate later -->
					<div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-12">
						<div class="w-full h-full border border-dashed border-white/20 rounded-xl flex items-center justify-center">
							<span class="text-white/20 uppercase tracking-widest text-xs">Aesthetic Portrait Placeholder</span>
						</div>
					</div>
					
					<!-- Glow effect -->
					<div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 -z-10"></div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	/* Custom animations if needed */
</style>
