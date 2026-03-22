<script lang="ts">
	let scrollY = $state(0);
	let innerHeight = $state(1000);
	let innerWidth = $state(1000);
	let container = $state<HTMLElement | null>(null);
	let trackRef = $state<HTMLElement | null>(null);

	const experiences = [
		{
			period: '2017 - 2022',
			role: 'Freelancer / Profissional Autônomo',
			company: 'Projetos Independentes',
			desc: 'Serviços técnicos imersivos, manutenção de alta precisão e suporte corporativo com atendimento primoroso para clientes finais.',
			color: 'bg-amber-500',
			gradient: 'from-amber-600/30 to-amber-900/10',
			tag: 'Infra & Suporte'
		},
		{
			period: 'Mai 2024 - Fev 2025',
			role: 'Estagiário de Desenvolvimento',
			company: 'QIplus',
			desc: 'Criação intensa e gestão de páginas web responsivas. Customização profunda de plugins WordPress e automações.',
			color: 'bg-emerald-500',
			gradient: 'from-emerald-600/30 to-emerald-900/10',
			tag: 'Front-end & Automação'
		},
		{
			period: 'Fev 2025 - Ago 2025',
			role: 'Desenvolvedor Web',
			company: 'Alpha Company Ads',
			desc: 'Arquitetura de soluções WordPress otimizadas, focadas em usabilidade corporativa e alicerçadas em métricas de BI.',
			color: 'bg-cyan-500',
			gradient: 'from-cyan-600/30 to-cyan-900/10',
			tag: 'WordPress & Growth'
		},
		{
			period: 'Ago 2025 - Atual',
			role: 'Líder Técnico & Full Stack',
			company: 'Grupo OC',
			desc: 'Desenvolvimento corporativo, SEO Avançado e integrações complexas. Reconstruí e otimizei toda a lógica de palavras-chave, sincronizando nossa rede de páginas operacionais com CRM e CMS proprietários.',
			color: 'bg-fuchsia-600',
			gradient: 'from-fuchsia-600/30 to-fuchsia-900/10',
			tag: 'Tech Lead',
			sites: [
				'timcorporativo.com.br', 'esquadriasmartins.com.br', 'bellemodaintima.com.br', 
				'internetfibraagora.com.br', 'planoempresarialtim.com.br', 'planoempresarialc.com.br', 
				'planoempresac.com.br', 'leadplanodesaude.com.br', 'grupooc.com.br', 
				'sorocabaindica.com.br', 'campinasindica.com.br', 'guarulhosindica.com.br', 
				'osascoindica.com.br', 'saopauloindica.com.br', 'prajáimoveis.com.br', 
				'planovivoempresarial.com.br', 'linkdedicada.com.br', 'planotimcorporativo.com.br', 
				'planotimempresa.com.br'
			]
		},
		{
			period: 'Ago 2025 - Atual',
			role: 'Engenheiro de Infraestrutura',
			company: 'Grupo OC',
			desc: 'Setup autônomo de um servidor físico (Ubuntu Server) com IP Fixo público e túnel Cloudflare para hospedagem da rede de sites. Desenvolvimento full-stack de robusto sistema CRM+CMS para a gestão interna dos projetos.',
			color: 'bg-indigo-600',
			gradient: 'from-indigo-600/30 to-indigo-900/10',
			tag: 'Infraestrutura & CRM'
		}
	];

	let globalProgress = $derived.by(() => {
		// Register dependencies for Svelte reactivity
		const _ = scrollY;
		if (!container) return 0;
		const rect = container.getBoundingClientRect();
		const maxScroll = Math.max(1, rect.height - innerHeight);
		const scrolled = -rect.top;
		if (scrolled <= 0) return 0;
		if (scrolled >= maxScroll) return 1;
		return scrolled / maxScroll;
	});

	let trackWidth = $derived(trackRef ? trackRef.scrollWidth : 2000);
	
	let activeIndex = $derived(Math.min(experiences.length - 1, Math.floor(globalProgress * experiences.length)));
	let activeColor = $derived(experiences[activeIndex]?.color || 'bg-blue-600');
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<!-- Seção alta (4x a altura da tela) para gerar área de scroll -->
<section bind:this={container} class="relative w-full h-[400vh] bg-neutral-950">
	
	<!-- Wrapper Fixo na tela -->
	<div class="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-neutral-950 transition-colors duration-1000">
		
		<!-- Dynamic Background Orb (Clean/Focado) -->
		<div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full max-w-4xl mx-auto {activeColor} opacity-10 blur-[150px] transition-colors duration-[1500ms] rounded-full pointer-events-none"></div>

		<!-- Título estático da seção -->
		<div class="absolute top-12 left-8 md:top-24 md:left-24 z-20">
			<span class="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block animate-pulse">Evolution</span>
			<h2 class="text-5xl md:text-7xl font-black text-white mix-blend-exclusion">Trajetória</h2>
		</div>

		<div 
			bind:this={trackRef} 
			class="flex items-center gap-12 md:gap-32 px-[10vw] md:px-[30vw] min-w-max transition-transform duration-75 ease-out relative z-10" 
			style="transform: translateX(-{trackWidth > innerWidth ? (trackWidth - innerWidth) * globalProgress : 0}px);"
		>
			{#each experiences as exp, i}
				<!-- Componente de Card Clean Premium -->
				<div class="w-[85vw] md:w-[600px] shrink-0 p-10 md:p-14 rounded-[3rem] border border-white/[0.08] backdrop-blur-2xl transition-all duration-[800ms] ease-out shadow-2xl relative overflow-hidden group
					{i === activeIndex ? 'scale-100 opacity-100 border-white/[0.2] shadow-[' + exp.color + '/40]' : 'scale-90 opacity-40 grayscale-[50%]'}
				">
					<!-- Fundo de Gradiente Interno (intensidade baseada no GlobalProgress do scroll) -->
					<div 
						class="absolute inset-0 bg-gradient-to-br {exp.gradient} transition-opacity duration-300"
						style="opacity: {0.1 + (globalProgress * 0.9)};"
					></div>

					<!-- Efeito especial do final (Último card com explosão de luz quando atingir 98% do scroll) -->
					{#if i === experiences.length - 1 && globalProgress > 0.98}
						<div class="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse blur-md"></div>
						<div class="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/40 via-purple-500/10 to-transparent blur-3xl rounded-full animate-spin-slow pointer-events-none"></div>
					{/if}

					<!-- Conteúdo em Camada Superior -->
					<div class="relative z-10">
						<div class="flex flex-wrap items-center justify-between gap-4 mb-10">
							<span class="px-4 py-2 rounded-full border border-white/20 text-xs font-bold tracking-widest text-white/90 uppercase bg-black/20 backdrop-blur-md">
								{exp.period}
							</span>
							<span class={`w-3 h-3 rounded-full ${exp.color} transition-all duration-300 shadow-[0_0_20px_currentColor] ${i === activeIndex ? 'animate-ping' : ''}`}></span>
						</div>
						
						<h3 class="text-4xl md:text-5xl font-black text-white mb-3 text-balance leading-tight drop-shadow-lg">{exp.role}</h3>
						<div class="text-white/60 text-base md:text-lg font-bold tracking-widest uppercase mb-8 mix-blend-screen">{exp.company}</div>
						
						<p class="text-white/80 text-lg md:text-xl font-light leading-relaxed text-balance">
							{exp.desc}
						</p>

						{#if exp.sites}
							<div class="mt-6 flex flex-wrap gap-2 max-h-24 md:max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
								{#each exp.sites as site}
									<a href={`https://${site}`} target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-md text-[10px] sm:text-xs font-mono text-white/70 hover:text-white transition-all cursor-pointer">
										{site}
									</a>
								{/each}
							</div>
						{/if}

						<div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
							<span class="text-[10px] text-white/40 font-semibold tracking-widest uppercase">Foco Principal: </span>
							<span class="px-3 py-1 bg-white/10 rounded border border-white/5 text-white/90 text-xs font-bold tracking-wide">{exp.tag}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Indicador de progresso no rodapé -->
		<div class="absolute bottom-12 left-8 right-8 md:left-24 md:right-24 z-20 flex items-center justify-between">
			<div class="text-white/40 text-xs font-mono font-bold tracking-widest">
				{String(activeIndex + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
			</div>
			
			<div class="w-full max-w-sm h-1 bg-white/10 rounded-full overflow-hidden ml-6">
				<div class="h-full {activeColor} transition-all duration-[50ms] ease-linear" style="width: {globalProgress * 100}%"></div>
			</div>
		</div>

	</div>
</section>
