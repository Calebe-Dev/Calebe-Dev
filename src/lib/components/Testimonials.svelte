<script lang="ts">
	import SectionSlide from './ui/SectionSlide.svelte';
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import AnimatedBlock from './ui/AnimatedBlock.svelte';

	const quotes = [
		{
			text: 'A nova landing page reduziu ruído no funil e melhorou a qualidade dos leads que chegam ao comercial.',
			author: 'Diretoria Comercial',
			role: 'Empresa de Telecom'
		},
		{
			text: 'Finalmente conseguimos alinhar SEO técnico, velocidade e conversão em uma única estrutura.',
			author: 'Coordenação de Marketing',
			role: 'Operação B2B'
		},
		{
			text: 'Entrega rápida, código limpo e visão de negócio. Não foi só design bonito: trouxe resultado.',
			author: 'Gestão de Produto',
			role: 'Plataforma Digital'
		}
	];
</script>

<SectionSlide id="testimonials" class="bg-zinc-950">
	<div class="container relative z-10 mx-auto px-6">
		<AnimatedBlock>
			<div class="mx-auto mb-12 max-w-3xl text-center">
				<span class="text-xs uppercase tracking-[0.22em] text-slate-300">Prova social</span>
				<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
					Feedback de quem contratou estratégia + execução.
				</h2>
			</div>
		</AnimatedBlock>

		<div class="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 no-scrollbar">
			{#each quotes as quote, i}
				<article
					class="apple-shell min-h-[220px] w-[80vw] max-w-[400px] flex-shrink-0 snap-center rounded-[32px] p-8 flex flex-col justify-between transition-transform duration-500 hover:scale-[1.01]"
				>
					<p class="text-lg font-medium leading-relaxed text-white">"{quote.text}"</p>
					<div class="mt-8 flex items-center gap-4">
						<div
							class="h-10 w-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10"
						></div>
						<div>
							<p class="text-xs font-bold text-white tracking-wide">{quote.author}</p>
							<p class="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-0.5">
								{quote.role}
							</p>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionSlide>
