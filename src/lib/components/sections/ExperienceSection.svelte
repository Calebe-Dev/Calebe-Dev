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
			color: 'rgba(245, 158, 11, 0.5)', // Amber
			gradient: 'from-amber-600/30 to-amber-900/10',
			tag: 'Infra & Sec',
			skills: 'Networking, Server Management, IT Support'
		},
		{
			period: 'Mai 2024 - Fev 2025',
			startDate: '2024-05-01',
			endDate: '2025-02-01',
			role: 'Desenvolvedor Full Stack (Intern)',
			company: 'QIplus',
			desc: 'Desenvolvimento de interfaces de alta conversão com SvelteKit e TypeScript. Automação de fluxos de marketing e desenvolvimento de plugins personalizados para ecossistemas WordPress.',
			color: 'rgba(16, 185, 129, 0.5)', // Emerald
			gradient: 'from-emerald-600/30 to-emerald-900/10',
			tag: 'SvelteKit & Bot',
			skills: 'SvelteKit, TypeScript, WordPress, Marketing Automation'
		},
		{
			period: 'Fev 2025 - Ago 2025',
			startDate: '2025-02-01',
			endDate: '2025-08-01',
			role: 'Senior Web Developer',
			company: 'Alpha Company Ads',
			desc: 'Arquitetura de soluções web focadas em Business Intelligence (BI). Implementação de SEO técnico avançado e integração de APIs de terceiros para monitoramento de métricas em tempo real.',
			color: 'rgba(6, 182, 212, 0.5)', // Cyan
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
			color: 'rgba(192, 38, 211, 0.5)', // Fuchsia
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
			color: 'rgba(79, 70, 229, 0.5)', // Indigo
			gradient: 'from-indigo-600/30 to-indigo-900/10',
			tag: 'DevOps & CRM',
			skills: 'Ubuntu Server, Cloudflare Tunnel, Docker, PostgreSQL'
		}
	];

	let globalProgress = $derived.by(() => {
		const _ = scrollY;
		if (!container) return 0;
		const rect = container.getBoundingClientRect();
		const maxScroll = Math.max(1, rect.height - innerHeight);
		const scrolled = -rect.top;
		if (scrolled <= 0) return 0;
		if (scrolled >= maxScroll) return 1;
		return scrolled / maxScroll;
	});

	// Lógica de "Plateau" (Scroll Lock) para o track horizontal
	// Mapeia o progresso linear para saltos discretos com pausar no centro.
	let lockedProgress = $derived.by(() => {
		const step = 1 / experiences.length;
		const itemIndex = Math.floor(globalProgress / step);
		const localProg = (globalProgress % step) / step;
		
		// Interpolador com curva "S" para o lock (Platô central em 25%-75%)
		let easedProgress;
		if (localProg < 0.25) {
			easedProgress = 0; 
		} else if (localProg > 0.75) {
			easedProgress = 1;
		} else {
			easedProgress = (localProg - 0.25) / 0.5;
		}

		return (itemIndex + easedProgress) * step;
	});

	let trackWidth = $derived(trackRef ? trackRef.scrollWidth : 2000);
	let activeIndex = $derived(Math.min(experiences.length - 1, Math.floor(globalProgress * experiences.length)));
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<section bind:this={container} class="relative w-full h-[600dvh] bg-black overflow-clip selection:bg-blue-500/30" itemscope itemtype="https://schema.org/Person">
	<div class="sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-center bg-black transition-colors duration-1000">
		
		<!-- Atmospheric Lighting -->
		<div 
			class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[800px] w-full max-w-5xl mx-auto opacity-[0.08] blur-[180px] transition-colors duration-[1500ms] rounded-full pointer-events-none"
			style="background-color: {experiences[activeIndex].color};"
		></div>

		<!-- Title Entrance (Immersive Style) -->
		<div class="absolute top-12 left-8 md:top-24 md:left-24 z-20">
			<span class="text-blue-500 font-bold uppercase tracking-[0.6em] text-[9px] mb-4 block opacity-50">Evolution Timeline</span>
			<h2 class="text-5xl md:text-8xl font-black text-white mix-blend-difference tracking-tighter uppercase">Trajetória</h2>
		</div>

		<div 
			bind:this={trackRef} 
			class="experience-track flex items-center gap-16 md:gap-40 px-[15vw] md:px-[35vw] min-w-max relative z-10" 
			style="--progress: {lockedProgress}; --track-diff: {trackWidth > innerWidth ? trackWidth - innerWidth : 0}px;"
		>
			{#each experiences as exp, i}
				{@const itemProgress = (globalProgress * experiences.length) - i}
				{@const absItemProg = Math.abs(itemProgress)}
				{@const isActive = absItemProg < 0.5}

				<!-- Experience Card with 3D Interaction -->
				<div 
					class="experience-card w-[80vw] md:w-[720px] shrink-0 p-12 md:p-24 rounded-[4rem] border border-white/[0.05] backdrop-blur-3xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)] relative overflow-hidden group
					{isActive ? 'is-active opacity-100 border-white/[0.15] scale-100' : 'opacity-10 scale-90 blur-sm'}
				"
				style="transform: translate3d(0, 0, {isActive ? 0 : -200}px);"
				itemscope 
				itemtype="https://schema.org/WorkExperience"
				itemprop="hasOccupation"
				>
					<div class="absolute inset-0 bg-gradient-to-br {exp.gradient} opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-700"></div>

					<div class="relative z-10">
						<div class="flex items-center justify-between mb-16">
							<span class="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black tracking-[0.4em] text-white/60 uppercase bg-white/5 backdrop-blur-3xl">
								{exp.period}
							</span>
							<div class={`w-5 h-5 rounded-full transition-all duration-700 shadow-[0_0_30px_rgba(255,255,255,0.2)]`} style="background-color: {exp.color};"></div>
						</div>
						
						<h3 class="text-4xl md:text-6xl font-black text-white mb-8 leading-none tracking-tighter" itemprop="name">{exp.role}</h3>
						<div class="text-white/40 text-[12px] font-black tracking-[0.5em] uppercase mb-12" itemprop="hiringOrganization">{exp.company}</div>
						
						<p class="text-white/80 text-xl md:text-3xl font-light leading-snug text-balance" itemprop="description">
							{exp.desc}
						</p>

						<div class="mt-16 pt-10 border-t border-white/5 flex flex-wrap gap-4">
							{#each exp.skills.split(', ') as skill}
								<span class="px-5 py-2 bg-white/5 rounded-xl border border-white/5 text-white/30 text-[10px] font-bold uppercase tracking-widest">{skill}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Footer Tracking -->
		<div class="absolute bottom-16 left-8 right-8 md:left-24 md:right-24 z-20 flex items-center justify-between">
			<div class="text-white/30 text-[12px] font-black tracking-[0.6em] tabular-nums uppercase">
				Checkpoint {String(activeIndex + 1).padStart(2, '0')} — {String(experiences.length).padStart(2, '0')}
			</div>
			
			<div class="w-full max-w-[300px] flex gap-3 ml-12">
				{#each experiences as _, i}
					<div 
						class="h-1 rounded-full transition-all duration-700 ease-out" 
						style="
							width: {i === activeIndex ? '80px' : '20px'};
							background: {i === activeIndex ? experiences[i].color : 'rgba(255,255,255,0.05)'};
							box-shadow: {i === activeIndex ? '0 0 15px currentColor' : 'none'};
						"
					></div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.experience-track {
		transform: translateX(calc(-1 * var(--track-diff, 0) * var(--progress, 0)));
		will-change: transform;
		transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.experience-card {
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}

	.is-active {
		animation: card-focus 4s ease-in-out infinite alternate;
	}

	@keyframes card-focus {
		from { border-color: rgba(255,255,255,0.1); }
		to { border-color: rgba(255,255,255,0.25); }
	}
</style>
