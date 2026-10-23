<script lang="ts">
	import SectionSlide from './ui/SectionSlide.svelte';
	import AnimatedBlock from './ui/AnimatedBlock.svelte';
	import ScrollReveal from './ui/ScrollReveal.svelte';

	const services = [
		{
			id: '01',
			title: 'Desenvolvimento Full Stack',
			desc: 'Criação de sites institucionais, landing pages e aplicações web sob medida com arquitetura limpa, código escalável e experiência premium.',
			tags: ['SvelteKit', 'TypeScript', 'Node.js']
		},
		{
			id: '02',
			title: 'SEO Técnico e Core Web Vitals',
			desc: 'Estrutura técnica para ranquear melhor no Google: performance, semântica, metadados, dados estruturados e rastreabilidade.',
			tags: ['SEO On-Page', 'Schema.org', 'Lighthouse']
		},
		{
			id: '03',
			title: 'UX + Conversão',
			desc: 'Design orientado a decisão: copy, hierarquia visual e fluxo de navegação para aumentar geração de leads e vendas.',
			tags: ['UX Strategy', 'CRO', 'A/B Hypothesis']
		},
		{
			id: '04',
			title: 'Growth e Tráfego Pago',
			desc: 'Integração entre produto e aquisição com campanhas em Meta Ads/Google Ads, mensuração completa e melhoria contínua.',
			tags: ['Meta Ads', 'Analytics', 'Funil de Vendas']
		}
	];
</script>

<SectionSlide id="services" class="relative overflow-hidden bg-black">
	<div
		class="pointer-events-none absolute -right-32 top-0 h-[540px] w-[540px] rounded-full bg-blue-400/10 blur-[120px]"
	></div>
	<div
		class="pointer-events-none absolute -left-32 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]"
	></div>

	<div class="container relative z-10 mx-auto px-6">
		<div class="mx-auto mb-14 max-w-4xl text-center">
			<AnimatedBlock>
				<span class="text-xs uppercase tracking-[0.22em] text-sky-300">Serviços estratégicos</span>
			</AnimatedBlock>
			<AnimatedBlock delay={80}>
				<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
					Desenvolvimento web com foco em tráfego, performance e conversão.
				</h2>
			</AnimatedBlock>
			<AnimatedBlock delay={160}>
				<p class="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
					Cada entrega combina engenharia robusta com visão de negócio para posicionar sua marca,
					melhorar seu SEO e transformar visitantes em oportunidades comerciais.
				</p>
			</AnimatedBlock>
		</div>

		<div class="grid gap-6 md:grid-cols-2">
			{#each services as service, i}
				<article
					class="apple-shell group relative h-full overflow-hidden rounded-[32px] p-8 transition-all duration-300 hover:scale-[1.01]"
				>
					<div class="flex items-start justify-between gap-6">
						<div>
							<span class="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500"
								>{service.id}</span
							>
							<h3 class="mt-2 text-2xl font-bold tracking-tight text-white">{service.title}</h3>
						</div>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-zinc-400"
						>
							{service.id}
						</div>
					</div>

					<p class="mt-6 text-base font-medium leading-relaxed text-zinc-400">
						{service.desc}
					</p>

					<div class="mt-8 flex flex-wrap gap-2">
						{#each service.tags as tag}
							<span
								class="rounded-full bg-white/5 border border-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-500"
							>
								{tag}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionSlide>
