<script lang="ts">
	let scrollY = $state(0);
	let innerHeight = $state(1000);
	let innerWidth = $state(1000);
	let container = $state<HTMLElement | null>(null);
	let trackRef = $state<HTMLElement | null>(null);

	const experiences = [
		{
			period: '2017 - 2022',
			startDate: '2017-01-01',
			endDate: '2022-12-31',
			role: 'Consultor de TI & Infraestrutura',
			company: 'Projetos Independentes',
			desc: 'Liderança técnica em suporte corporativo Nível 2 e 3. Implementação de arquitetura de rede, manutenção de servidores Windows/Linux e consultoria de segurança para clientes finais.',
			color: 'bg-amber-500',
			gradient: 'from-amber-600/30 to-amber-900/10',
			tag: 'Infra & Sec',
			skills: 'Networking, Server Management, IT Support'
		},
		{
			period: 'Mai 2024 - Fev 2025',
			startDate: '2024-05-01',
			endDate: '2025-02-01',
			role: 'Desenvolvedor Full Stack (Estagiário)',
			company: 'QIplus',
			desc: 'Desenvolvimento de interfaces de alta conversão com SvelteKit e TypeScript, além da criação de documentação técnica. Automação de fluxos de marketing e desenvolvimento de plugins personalizados para ecossistemas WordPress.',
			color: 'bg-emerald-500',
			gradient: 'from-emerald-600/30 to-emerald-900/10',
			tag: 'SvelteKit & Bot',
			skills: 'SvelteKit, TypeScript, WordPress, Marketing Automation'
		},
		{
			period: 'Fev 2025 - Ago 2025',
			startDate: '2025-02-01',
			endDate: '2025-08-01',
			role: 'Web Developer',
			company: 'Alpha Company Ads',
			desc: 'Arquitetura de soluções web focadas em Business Intelligence (BI). Implementação de SEO técnico avançado e integração de APIs de terceiros para monitoramento de métricas em tempo real.',
			color: 'bg-cyan-500',
			gradient: 'from-cyan-600/30 to-cyan-900/10',
			tag: 'SEO & BI',
			skills: 'Technical SEO, BI, API Integration, Analytics'
		},
		{
			period: 'Ago 2025 - Atual',
			startDate: '2025-08-01',
			role: 'Chief Technology Officer (CTO) / Lead Developer',
			company: 'Grupo OC',
			desc: 'Gestão da arquitetura de sistemas e liderança técnica. Implementação de ecossistema de microserviços em Node.js e integração profunda com CRM proprietário para escala de leads.',
			color: 'bg-fuchsia-600',
			gradient: 'from-fuchsia-600/30 to-fuchsia-900/10',
			tag: 'Tech Lead / CRM',
			skills: 'Node.js, Microservices, System Architecture, Lead Ops'
		},
		{
			period: 'Ago 2025 - Atual',
			startDate: '2025-08-01',
			role: 'Full Stack Infrastructure Engineer',
			company: 'Grupo OC',
			desc: 'Engenharia de Cloud e On-premise. Deploy e manutenção de servidores Ubuntu com Cloudflare Tunnel (Zero Trust). Desenvolvimento de sistema CRM+CMS robusto com banco de dados PostgreSQL.',
			color: 'bg-indigo-600',
			gradient: 'from-indigo-600/30 to-indigo-900/10',
			tag: 'DevOps & CRM',
			skills: 'Ubuntu Server, Cloudflare Tunnel, Docker, PostgreSQL'
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
<section bind:this={container} class="relative w-full h-[400dvh] bg-neutral-950" itemscope itemtype="https://schema.org/Person">
	<meta itemprop="name" content="Calebe Araujo" />
	
	<!-- Wrapper Fixo na tela -->
	<div class="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-center bg-neutral-950 transition-colors duration-1000">
		
		<!-- Dynamic Background Orb (Clean/Focado) -->
		<div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full max-w-4xl mx-auto {activeColor} opacity-10 blur-[150px] transition-colors duration-[1500ms] rounded-full pointer-events-none"></div>

		<!-- Título estático da seção -->
		<div class="absolute top-4 left-6 md:top-12 md:left-24 z-20">
			<span class="text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block animate-pulse">Evolution</span>
			<h2 class="text-4xl md:text-5xl lg:text-7xl font-black text-white mix-blend-exclusion">Trajetória</h2>
		</div>

		<div 
			bind:this={trackRef} 
			class="experience-track flex items-center gap-12 md:gap-32 px-[10vw] md:px-[30vw] min-w-max relative z-10" 
			style="--progress: {globalProgress}; --track-diff: {trackWidth > innerWidth ? trackWidth - innerWidth : 0}px;"
		>
			{#each experiences as exp, i}
				<!-- Componente de Card Clean Premium -->
				<div 
					class="experience-card w-[85vw] md:w-[600px] shrink-0 p-10 md:p-14 rounded-[3rem] border border-white/[0.08] backdrop-blur-2xl transition-all duration-700 ease-out shadow-2xl relative overflow-hidden group
					{i === activeIndex ? 'active scale-100 opacity-100 border-white/[0.2]' : 'scale-90 opacity-40 grayscale-[50%]'}
				"
				itemscope 
				itemtype="https://schema.org/WorkExperience"
				itemprop="hasOccupation"
				>
					<!-- Fundo de Gradiente Interno -->
					<div 
						class="absolute inset-0 bg-gradient-to-br {exp.gradient} transition-opacity duration-300"
						style="opacity: {0.05 + (i === activeIndex ? 0.9 : 0)};"
					></div>

					<!-- Efeito especial do final -->
					{#if i === experiences.length - 1 && globalProgress > 0.98}
						<div class="absolute inset-0 bg-white/10 mix-blend-overlay animate-pulse blur-md text-fluid-body"></div>
						<div class="absolute -inset-10 bg-gradient-to-tr from-fuchsia-500/40 via-purple-500/10 to-transparent blur-3xl rounded-full animate-spin-slow pointer-events-none"></div>
					{/if}

					<!-- Conteúdo em Camada Superior -->
					<div class="relative z-10">
						<div class="flex flex-wrap items-center justify-between gap-4 mb-10">
							<span class="px-4 py-2 rounded-full border border-white/20 text-[10px] font-bold tracking-[0.2em] text-white/90 uppercase bg-black/20 backdrop-blur-md">
								<time datetime={exp.startDate}>{exp.period.split(' - ')[0]}</time> - 
								{#if exp.endDate}
									<time datetime={exp.endDate}>{exp.period.split(' - ')[1]}</time>
								{:else}
									<span>Atual</span>
								{/if}
							</span>
							<span class={`w-3 h-3 rounded-full ${exp.color} transition-all duration-300 shadow-[0_0_20px_currentColor] ${i === activeIndex ? 'animate-ping' : ''}`}></span>
						</div>
						
						<h3 class="text-fluid-section font-black text-white mb-3 text-balance leading-tight drop-shadow-lg" itemprop="name">{exp.role}</h3>
						<div class="text-white/60 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8 mix-blend-screen" itemprop="hiringOrganization">{exp.company}</div>
						
						<p class="text-white/80 text-fluid-body font-light leading-relaxed text-balance" itemprop="description">
							{exp.desc}
						</p>

						<!-- Hidden skills for ATS/SEO Parsers -->
						<meta itemprop="skills" content={exp.skills} />

						<div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
							<span class="text-[10px] text-white/40 font-semibold tracking-widest uppercase">Foco Principal: </span>
							<span class="px-3 py-1 bg-white/10 rounded border border-white/5 text-white/90 text-[10px] font-bold tracking-wide">{exp.tag}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Indicador de progresso no rodapé -->
		<div class="absolute bottom-12 left-8 right-8 md:left-24 md:right-24 z-20 flex items-center justify-between">
			<div class="text-white/40 text-[10px] font-mono font-bold tracking-[0.2em]">
				{String(activeIndex + 1).padStart(2, '0')} / {String(experiences.length).padStart(2, '0')}
			</div>
			
			<div class="w-full max-w-sm h-1 bg-white/10 rounded-full overflow-hidden ml-6">
				<div class="h-full {activeColor} transition-all duration-300 ease-out" style="width: {globalProgress * 100}%"></div>
			</div>
		</div>

	</div>
</section>

<style>
	.experience-track {
		transform: translateX(calc(-1 * var(--track-diff, 0) * var(--progress, 0)));
		will-change: transform;
		/* Suavização via CSS para complementar a reatividade do scroll */
		transition: transform 0.1s linear;
	}

	.experience-card {
		/* Subtile transition for scale/opacity when active */
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}
</style>
