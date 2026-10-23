<script lang="ts">
	import SectionSlide from './ui/SectionSlide.svelte';
	import ScrollReveal from './ui/ScrollReveal.svelte';
	import AnimatedBlock from './ui/AnimatedBlock.svelte';

	const skillSets = [
		{
			category: 'Frontend e Experiência',
			outcome: 'Interfaces rápidas, claras e premium.',
			items: ['SvelteKit', 'React', 'TypeScript', 'Tailwind CSS', 'Design System', 'Acessibilidade']
		},
		{
			category: 'Backend e Dados',
			outcome: 'Arquitetura confiável e escalável.',
			items: ['Node.js', 'APIs REST', 'SQL', 'Firebase', 'Observabilidade', 'Segurança básica']
		},
		{
			category: 'SEO e Growth',
			outcome: 'Mais visibilidade e geração de leads.',
			items: ['SEO Técnico', 'Schema.org', 'Core Web Vitals', 'Meta Ads', 'Analytics', 'CRO']
		}
	];
</script>

<SectionSlide id="skills" class="bg-black">
	<div class="container relative z-10 mx-auto px-6">
		<div class="mb-14 text-center">
			<AnimatedBlock>
				<span class="text-xs uppercase tracking-[0.22em] text-sky-300">Stack e metodologia</span>
			</AnimatedBlock>
			<AnimatedBlock delay={80}>
				<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
					Tecnologia aplicada para entregar resultado real.
				</h2>
			</AnimatedBlock>
			<AnimatedBlock delay={160}>
				<p class="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
					Escolha de stack, SEO técnico e estratégia de produto funcionando juntos para aumentar
					performance, autoridade e conversão.
				</p>
			</AnimatedBlock>
		</div>

		<div class="grid gap-6 lg:grid-cols-3">
			{#each skillSets as set, i}
				<ScrollReveal animation="fade-up" delay={i * 100}>
					<article class="apple-shell h-full rounded-[30px] p-7">
						<h3 class="text-2xl font-semibold text-white">{set.category}</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-300">{set.outcome}</p>

						<div class="mt-6 flex flex-wrap gap-2">
							{#each set.items as item}
								<span
									class="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-slate-200"
								>
									{item}
								</span>
							{/each}
						</div>
					</article>
				</ScrollReveal>
			{/each}
		</div>
	</div>
</SectionSlide>
