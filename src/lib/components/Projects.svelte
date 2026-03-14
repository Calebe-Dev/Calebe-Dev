<script lang="ts">
	import SectionSlide from './ui/SectionSlide.svelte';
	import AnimatedBlock from './ui/AnimatedBlock.svelte';
	import ScrollReveal from './ui/ScrollReveal.svelte';

	const projects = [
		{
			category: 'Telecom + Growth',
			title: 'Grupo OC',
			desc: 'Portal institucional com foco em SEO técnico, arquitetura de conteúdo e captação de leads.',
			result: 'Melhor posicionamento orgânico e jornada mais clara para contato comercial.',
			stack: ['SvelteKit', 'SEO', 'Performance'],
			url: 'https://grupooc.com.br/',
			tone: 'from-blue-500/30 via-cyan-300/10 to-transparent'
		},
		{
			category: 'SaaS B2B',
			title: 'Meu PABX em Nuvem',
			desc: 'Landing page comercial para aquisição com copy orientada à conversão e alta velocidade.',
			result: 'Estrutura enxuta para campanhas pagas e melhor qualidade de lead.',
			stack: ['UX', 'Meta Ads', 'Core Web Vitals'],
			url: 'https://meupabxemnuvem.com.br/',
			tone: 'from-violet-500/30 via-indigo-300/10 to-transparent'
		},
		{
			category: 'Portal Local',
			title: 'Sorocaba Indica',
			desc: 'Diretório de serviços com estratégia de conteúdo local e otimização para busca.',
			result: 'Escalabilidade editorial com base técnica sólida para SEO regional.',
			stack: ['Arquitetura', 'Schema', 'Conteúdo'],
			url: 'https://sorocabaindica.com.br/',
			tone: 'from-emerald-500/30 via-lime-300/10 to-transparent'
		},
		{
			category: 'Marketing Platform',
			title: 'Alpha Ads',
			desc: 'Plataforma de marketing orientada a dados, com painel e visão de performance.',
			result: 'Fluxo mais eficiente entre mídia paga, mensuração e tomada de decisão.',
			stack: ['Dashboard', 'Analytics', 'CRO'],
			url: 'https://alphacompanyads.com.br/',
			tone: 'from-pink-500/30 via-rose-300/10 to-transparent'
		}
	];
</script>

<SectionSlide id="projects" class="relative overflow-hidden bg-zinc-950">
	<div
		class="pointer-events-none absolute left-0 top-16 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[90px]"
	></div>
	<div
		class="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-[90px]"
	></div>

	<div class="container relative z-10 mx-auto px-6">
		<div class="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
			<div class="max-w-3xl">
				<AnimatedBlock>
					<span class="text-xs uppercase tracking-[0.22em] text-indigo-300">Estudos de caso</span>
				</AnimatedBlock>
				<AnimatedBlock delay={80}>
					<h2 class="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
						Projetos reais com impacto em SEO, performance e vendas.
					</h2>
				</AnimatedBlock>
				<AnimatedBlock delay={160}>
					<p class="mt-4 text-lg leading-relaxed text-slate-300">
						Cada projeto foi pensado como um produto digital completo: estratégia, construção
						técnica e evolução contínua com dados.
					</p>
				</AnimatedBlock>
			</div>

			<div
				class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-300"
			>
				Role para explorar
			</div>
		</div>

		<div class="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 no-scrollbar">
			{#each projects as project}
				<article
					class="apple-shell group relative h-[420px] w-[85vw] max-w-[500px] flex-shrink-0 snap-center overflow-hidden rounded-[32px] transition-all duration-500 hover:scale-[1.01]"
				>
					<div
						class={`absolute inset-0 bg-gradient-to-br ${project.tone} opacity-40 group-hover:opacity-60 transition-opacity`}
					></div>

					<div
						class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent"
					></div>

					<div class="absolute inset-0 flex flex-col justify-between p-8">
						<div>
							<span class="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
								{project.category}
							</span>
							<h3 class="mt-2 text-3xl font-bold tracking-tight text-white">{project.title}</h3>
							<p class="mt-4 max-w-sm text-sm font-medium leading-relaxed text-zinc-300">
								{project.desc}
							</p>
						</div>

						<div class="space-y-6">
							<div class="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4">
								<p class="text-xs font-semibold text-white/90 leading-relaxed">
									{project.result}
								</p>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex gap-1.5">
									{#each project.stack.slice(0, 2) as item}
										<span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
											{item}
										</span>
										{#if item !== project.stack.slice(0, 2)[project.stack.slice(0, 2).length - 1]}
											<span class="text-zinc-800">•</span>
										{/if}
									{/each}
								</div>

								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex h-9 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-black transition-transform active:scale-95"
								>
									Ver
								</a>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</SectionSlide>
