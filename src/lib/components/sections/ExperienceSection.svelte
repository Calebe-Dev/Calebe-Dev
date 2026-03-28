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
			color: '#f59e0b',
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
			color: '#10b981',
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
			color: '#06b6d4',
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
			color: '#c026d3',
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
			color: '#4f46e5',
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
		return Math.max(0, Math.min(1, scrolled / maxScroll));
	});

	// Lógica de "Plateau" para o Track: cada card tem um tempo de parada
	let plateauProgress = $derived.by(() => {
		const steps = experiences.length;
		const stepSize = 1 / steps;
		const index = Math.floor(globalProgress / stepSize);
		const localP = (globalProgress % stepSize) / stepSize;
		
		// 60% do tempo de cada step é "travado" no centro
		const plateauRange = 0.6; 
		const transitionRange = (1 - plateauRange) / 2;
		
		let smoothedLocal;
		if (localP < transitionRange) {
			// Entrada: interpola de index-1 para index
			smoothedLocal = localP / transitionRange * 0.5;
		} else if (localP > 1 - transitionRange) {
			// Saída: interpola de index para index+1
			smoothedLocal = 0.5 + (localP - (1 - transitionRange)) / transitionRange * 0.5;
		} else {
			// Platô: fixo no centro do step
			smoothedLocal = 0.5;
		}
		
		return (index + smoothedLocal) / steps;
	});

	let trackWidth = $derived(trackRef ? trackRef.scrollWidth : 2000);
	let activeIndex = $derived(Math.min(experiences.length - 1, Math.floor(globalProgress * experiences.length)));
	let activeColor = $derived(experiences[activeIndex]?.color || '#3b82f6');

	// Helper para 3D Assembly de Caracteres
	function getCharStyle(char: string, blockIndex: number, charOffset: number, globalP: number) {
		if (char === ' ') return 'display: inline-block; width: 0.25em;';
		
		const stepSize = 1 / experiences.length;
		const centerAt = (blockIndex * stepSize) + (stepSize / 2);
		const dist = globalP - centerAt;
		const absDist = Math.abs(dist);

		// Intensidade baseada na distância do foco (0.05 é o plateau)
		const plateau = 0.05;
		let intensity = 0;
		if (absDist > plateau) {
			intensity = Math.min(1, (absDist - plateau) * 15);
		}

		const seed = (blockIndex * 500) + charOffset;
		const random = (s: number) => {
			const x = Math.sin(s) * 10000;
			return x - Math.floor(x);
		};

		const offsetX = (random(seed) - 0.5) * 1000 * intensity;
		const offsetY = (random(seed + 1) - 0.5) * 1000 * intensity;
		const offsetZ = (random(seed + 2) - 0.5) * 2000 * intensity;
		const rotate = (random(seed + 3) - 0.5) * 720 * intensity;

		return `
			display: inline-block;
			transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotate(${rotate}deg);
			opacity: ${1 - intensity};
			filter: blur(${intensity * 10}px);
			transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;
			will-change: transform, opacity;
		`;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<section bind:this={container} class="relative w-full h-[600dvh] bg-neutral-950" itemscope itemtype="https://schema.org/Person">
	<meta itemprop="name" content="Calebe Araujo" />
	
	<div class="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-neutral-950">
		
		<!-- Dynamic Background Orb -->
		<div 
			class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] w-full max-w-4xl mx-auto opacity-10 blur-[150px] transition-colors duration-[1500ms] rounded-full pointer-events-none"
			style="background-color: {activeColor};"
		></div>

		<div class="absolute top-12 left-6 md:left-24 z-20">
			<span class="text-white/40 font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Evolução Técnica</span>
			<h2 class="text-4xl md:text-7xl font-black text-white mix-blend-exclusion tracking-tighter uppercase">Trajetória</h2>
		</div>

		<div 
			bind:this={trackRef} 
			class="experience-track flex items-center gap-20 md:gap-40 px-[15vw] md:px-[35vw] min-w-max relative z-10 transition-transform duration-700 ease-out" 
			style="transform: translateX(calc(-1 * (var(--track-diff) * var(--p-progress)))); --p-progress: {plateauProgress}; --track-diff: {trackWidth > innerWidth ? (trackWidth - innerWidth / 2) : 0}px;"
		>
			{#each experiences as exp, i}
				{@const isFocused = activeIndex === i}
				
				<div 
					class="experience-card w-[85vw] md:w-[650px] shrink-0 p-12 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-3xl transition-all duration-1000 shadow-2xl relative overflow-hidden group perspective-[2000px]"
					class:focused={isFocused}
					style="
						transform: scale({isFocused ? 1 : 0.85}) rotateY({(globalProgress * experiences.length - i - 0.5) * -15}deg);
						opacity: {isFocused ? 1 : 0.3};
					"
					itemscope itemtype="https://schema.org/WorkExperience" itemprop="hasOccupation"
				>
					<div 
						class="absolute inset-0 bg-gradient-to-br {exp.gradient} transition-opacity duration-1000"
						style="opacity: {isFocused ? 0.8 : 0.05};"
					></div>

					<div class="relative z-10">
						<div class="flex items-center justify-between mb-12">
							<span class="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black tracking-[0.3em] text-white/80 uppercase bg-black/40 backdrop-blur-xl">
								{exp.period}
							</span>
							<div 
								class="w-4 h-4 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
								style="background-color: {exp.color};"
							></div>
						</div>
						
						<!-- 3D Assembled Role Title -->
						<h3 class="text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter text-balance">
							{#each exp.role.split(' ') as word, wIdx}
								<span class="inline-block mr-[0.3em] whitespace-nowrap">
									{#each word.split('') as char, cIdx}
										<span style={getCharStyle(char, i, wIdx * 10 + cIdx, globalProgress)}>{char}</span>
									{/each}
								</span>
							{/each}
						</h3>

						<div class="text-white/50 text-xs md:text-sm font-black tracking-[0.5em] uppercase mb-10 overflow-hidden">
							{#each exp.company.split('') as char, cIdx}
								<span style={getCharStyle(char, i, cIdx + 50, globalProgress)}>{char}</span>
							{/each}
						</div>
						
						<p class="text-white/80 text-lg md:text-xl font-light leading-relaxed text-balance" itemprop="description">
							{exp.desc}
						</p>

						<div class="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-60">
							<span class="text-[10px] text-white/30 font-bold uppercase tracking-widest">Especialidade</span>
							<span class="px-4 py-1.5 bg-white/5 rounded-lg border border-white/10 text-white text-[11px] font-black tracking-widest">{exp.tag}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Global Progress HUD -->
		<div class="absolute bottom-12 left-8 right-8 md:left-24 md:right-24 z-20 flex items-center justify-between group">
			<div class="flex items-center gap-4">
				<span class="text-white font-black text-2xl tabular-nums">0{activeIndex + 1}</span>
				<div class="w-12 h-[1px] bg-white/20"></div>
				<span class="text-white/40 font-bold text-xs uppercase tracking-[0.4em]">Marcos</span>
			</div>
			
			<div class="flex items-center gap-2">
				{#each experiences as _, i}
					<div 
						class="h-1 rounded-full transition-all duration-700"
						style="
							width: {activeIndex === i ? '60px' : '12px'};
							background-color: {activeIndex === i ? activeColor : 'rgba(255,255,255,0.1)'};
						"
					></div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.experience-track {
		transform-style: preserve-3d;
		/* Interpolação super suave pelo CSS transform */
		transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
	}
	
	.experience-card {
		transform-style: preserve-3d;
		backface-visibility: hidden;
	}
</style>
