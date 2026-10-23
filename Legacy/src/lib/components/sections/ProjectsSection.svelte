<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	const projects = [
		{ name: 'Plano TIM Empresa', url: 'https://planotimempresa.com.br/', desc: 'Integração nativa a CRM, sistema interno de gestão e arquitetura otimizada para SEO agressivo.', tags: ['Tech Lead', 'SEO'], color: 'from-blue-500 to-indigo-600' },
		{ name: 'Link Dedicada', url: 'https://linkdedicada.com.br/', desc: 'Landings de conversão para telecom, desenhadas para captura de leads e pipeline de vendas.', tags: ['Landing Page', 'Lead Gen'], color: 'from-emerald-400 to-teal-600' },
		{ name: 'Belle Moda Íntima', url: 'https://bellemodaintima.com.br/', desc: 'Plataforma e-commerce. Sincronização avançada de catálogos via CRM para posts.', tags: ['WooCommerce', 'CMS'], color: 'from-pink-500 to-rose-600' },
		{ name: 'Alpha Company Ads', url: 'https://alphacompanyads.com.br/', desc: 'Site institucional corporativo focado na apresentação e autoridade em performance.', tags: ['Instuticional', 'Agency'], color: 'from-slate-700 to-slate-900' },
		{ name: 'Buenos Water Tech', url: 'https://buenoswatertechnology.com.br/', desc: 'Aplicações tecnológicas de tratamentos industriais, destacando serviços premium.', tags: ['Web App', 'Industrial'], color: 'from-cyan-400 to-blue-500' },
		{ name: 'Esquadrias Martins', url: 'https://esquadriasmartins.com.br/', desc: 'Vitrine digital para projetos arquitetônicos de alto padrão focado em experiência unificada.', tags: ['UX/UI', 'Premium'], color: 'from-amber-400 to-orange-500' },
		{ name: 'TIM Corporativo', url: 'https://timcorporativo.com.br/', desc: 'Otimização com lógica avançada de palavras-chave ranqueando nos principais índices.', tags: ['Performance', 'SEO'], color: 'from-blue-600 to-blue-800' },
		{ name: 'Internet Fibra Agora', url: 'https://internetfibraagora.com.br/', desc: 'Desenvolvimento e design focado em tráfego qualificado e resposta rápida.', tags: ['Lead Gen', 'Optimization'], color: 'from-violet-500 to-fuchsia-500' },
		{ name: 'Plano Empresarial TIM', url: 'https://planoempresarialtim.com.br/', desc: 'Reconstrução técnica completa integrando sistemas internos do Grupo OC.', tags: ['Tech Lead', 'Corporate'], color: 'from-blue-500 to-cyan-500' },
		{ name: 'Plano Empresarial C', url: 'https://planoempresarialc.com.br/', desc: 'Gestão técnica B2B desenhada em sincronia severa e constante com nosso CMS.', tags: ['Full Stack', 'CRM'], color: 'from-teal-400 to-emerald-600' },
		{ name: 'Plano Empresa C', url: 'https://planoempresac.com.br/', desc: 'Desenvolvimento dinâmico de aquisição em escala e gerenciamento das páginas B2C.', tags: ['Web Design', 'Growth'], color: 'from-emerald-500 to-green-700' },
		{ name: 'Lead Plano de Saúde', url: 'https://leadplanodesaude.com.br/', desc: 'Sistemas de validação desenhados para filtragem de leads complexos do setor médico.', tags: ['Funnels', 'Health'], color: 'from-cyan-500 to-blue-600' },
		{ name: 'Grupo OC', url: 'https://grupooc.com.br/', desc: 'Portal oficial matriz espelhando toda a vanguarda e a autoridade técnica do hub.', tags: ['Enterprise', 'Core System'], color: 'from-fuchsia-600 to-purple-800' },
		{ name: 'Sorocaba Indica', url: 'https://sorocabaindica.com.br/', desc: 'Lógica SEO voltada a buscas locais e categorização de páginas estáticas e dinâmicas.', tags: ['Geo SEO', 'Portal'], color: 'from-orange-400 to-red-500' },
		{ name: 'Campinas Indica', url: 'https://campinasindica.com.br/', desc: 'Ajuste de performance e distribuição semântica de entidades de busca.', tags: ['B2C', 'Data'], color: 'from-orange-500 to-red-600' },
		{ name: 'Guarulhos Indica', url: 'https://guarulhosindica.com.br/', desc: 'Plataforma B2C sincronizada com clusters de dados regionais de alto impacto.', tags: ['Scale', 'CMS'], color: 'from-orange-600 to-red-700' },
		{ name: 'Osasco Indica', url: 'https://osascoindica.com.br/', desc: 'Indexação agressiva de múltiplas rotas garantindo presença topo na região metropolitana.', tags: ['Index Tracking', 'Performance'], color: 'from-red-500 to-rose-700' },
		{ name: 'SP Indica', url: 'https://saopauloindica.com.br/', desc: 'Core do cluster metropolitano, construído para sustentar volumetria robusta de buscas.', tags: ['High Traffic', 'Infra'], color: 'from-rose-600 to-pink-700' },
		{ name: 'Prajá Imóveis', url: 'https://prajaimoveis.com.br/', desc: 'Integração imobiliária completa cruzando dados e segmentando lógicas complexas de busca.', tags: ['Real Estate', 'CRM'], color: 'from-indigo-400 to-purple-600' },
		{ name: 'Plano Vivo Empresarial', url: 'https://planovivoempresarial.com.br/', desc: 'Otimização ponta a ponta focado em vendas dedicadas para pipelines da Vivo.', tags: ['Sales Pipeline', 'Tele'], color: 'from-purple-600 to-violet-800' },
		{ name: 'Plano TIM Corporativo', url: 'https://planotimcorporativo.com.br/', desc: 'Reconstrução focada e sincronizada diretamente como parte da base de lead systems.', tags: ['Lead Gen', 'Optimization'], color: 'from-blue-700 to-indigo-900' }
	];

	let selectedProject = projects[0];

	function selectProject(project: typeof projects[0]) {
		selectedProject = project;
	}
</script>

<style>
	/* Scrollbar customizada e moderna */
	.project-list-scroll::-webkit-scrollbar {
		width: 4px;
	}
	.project-list-scroll::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.02);
		border-radius: 4px;
	}
	.project-list-scroll::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 4px;
	}
	.project-list-scroll::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	.perspective-1000 {
		perspective: 1000px;
	}
	.transform-3d {
		transform-style: preserve-3d;
	}
</style>

<section class="py-40 bg-black text-white relative overflow-hidden selection:bg-blue-500/30">
    <!-- Grid pattern background subtle -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

	<div class="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
		<div class="mb-20 md:flex items-end justify-between">
			<div class="max-w-xl">
				<span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block" data-aos="fade-up">Portfólio</span>
				<h2 class="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 text-balance drop-shadow-sm" data-aos="fade-up" data-aos-delay="100">
					Nível de <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Produção</span>
				</h2>
			</div>
			<p class="text-slate-400 max-w-sm font-light leading-relaxed mb-4 md:text-right" data-aos="fade-up" data-aos-delay="200">
				Aplicações reais focadas em conversão, tráfego qualificado e experiência estética de ponta. Selecione um projeto para ver mais detalhes.
			</p>
		</div>

		<!-- Layout Split View -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start" data-aos="fade-up" data-aos-delay="300">
			
			<!-- Lista Lateral -->
			<div class="lg:col-span-5 w-full flex flex-col gap-3 max-h-[500px] lg:max-h-[640px] overflow-y-auto project-list-scroll pr-3 pb-8">
				{#each projects as project}
					<button 
						on:click={() => selectProject(project)}
						class="w-full text-left p-6 rounded-[2rem] transition-all duration-500 flex items-center justify-between group relative overflow-hidden border
							{selectedProject === project 
								? 'bg-white/[0.04] border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] backdrop-blur-md scale-[1.02]' 
								: 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5 opacity-50 hover:opacity-100'}"
					>
						<!-- Highlight Indicator na tab ativa -->
						{#if selectedProject === project}
							<div class="absolute inset-0 bg-gradient-to-r {project.color} opacity-[0.05]"></div>
							<div class="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-gradient-to-b {project.color} rounded-r-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
						{/if}

						<div class="flex flex-col gap-1.5 relative z-10 w-full overflow-hidden shrink pr-2">
							<span class="text-xl md:text-2xl font-bold truncate block {selectedProject === project ? 'text-white' : 'text-slate-300'} transition-colors duration-300">
								{project.name}
							</span>
							<div class="flex flex-wrap gap-2 mt-1">
								{#each project.tags as tag}
									<span class="text-[10px] uppercase tracking-widest text-slate-500 font-bold whitespace-nowrap">
										{tag}
									</span>
								{/each}
							</div>
						</div>

						<div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 relative z-10
							{selectedProject === project ? 'bg-white/10 text-white shadow-xl rotate-0 scale-110' : 'bg-white/[0.02] text-slate-600 -rotate-45 group-hover:bg-white/5 group-hover:text-slate-400'}">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
						</div>
					</button>
				{/each}
			</div>

			<!-- Painel de Detalhes Principal (3D/Glassmorphism) -->
			<div class="lg:col-span-7 w-full sticky top-32 perspective-1000">
				{#key selectedProject.name}
					<div 
						in:fly={{ y: 40, duration: 600, delay: 50 }} 
						out:fade={{ duration: 150 }}
						class="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-14 relative shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between min-h-[500px] lg:min-h-[640px] transform-3d hover:-translate-y-2 transition-transform duration-700 group"
						itemscope 
						itemtype="https://schema.org/SoftwareApplication"
					>
						<!-- Schema Metadata -->
						<meta itemprop="applicationCategory" content="BusinessApplication" />
						<meta itemprop="operatingSystem" content="Web" />
						
						<!-- Glossy Glow Backgrounds -->
						<div class="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br {selectedProject.color} opacity-10 blur-[100px] rounded-full pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
						<div class="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-gradient-to-tr {selectedProject.color} opacity-[0.05] blur-[80px] rounded-full pointer-events-none group-hover:opacity-10 transition-opacity duration-700"></div>
						<div class="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none rounded-[3.5rem]"></div>

						<div class="relative z-10 flex flex-col h-full items-start">
							<!-- Header of the Card -->
							<div class="mb-auto flex items-start justify-between w-full">
								<!-- Ícone/Logo Placeholder com Glassmorphism Dinâmico -->
								<div class="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br {selectedProject.color} p-[1px] shadow-2xl relative transform group-hover:scale-105 transition-transform duration-500">
									<div class="w-full h-full rounded-[2rem] bg-slate-950/80 backdrop-blur-2xl flex items-center justify-center border border-white/10">
										<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-white drop-shadow-md">
											<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
											<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										</svg>
									</div>
								</div>
							</div>

							<!-- Body -->
							<div class="mt-12 mb-12">
								<h3 class="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tighter drop-shadow-lg leading-none" itemprop="name">
									{selectedProject.name}
								</h3>
								<p class="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-md text-balance" itemprop="description">
									{selectedProject.desc}
								</p>
							</div>

							<div class="flex flex-wrap gap-3 mb-12">
								{#each selectedProject.tags as tag}
									<span class="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest text-white/80 uppercase shadow-lg backdrop-blur-xl">
										{tag}
									</span>
								{/each}
							</div>

							<!-- CTA Footer -->
							<div class="mt-auto w-full">
								<a 
									href={selectedProject.url} 
									itemprop="url"
									target="_blank" 
									rel="noopener noreferrer" 
									class="relative inline-flex items-center justify-center w-full md:w-auto overflow-hidden rounded-full p-[1px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] group/btn hover:scale-105 transition-transform duration-500"
								>
									<!-- Animated Border Glow -->
									<span class="absolute inset-0 bg-gradient-to-r {selectedProject.color} opacity-60 group-hover/btn:opacity-100 transition-opacity duration-500 rounded-full blur-[4px]"></span>
									<span class="absolute inset-0 bg-gradient-to-r {selectedProject.color} rounded-full"></span>
									
									<div class="relative bg-slate-950/80 backdrop-blur-2xl px-10 py-5 md:px-12 md:py-6 rounded-full flex items-center gap-4 transition-all duration-500 group-hover/btn:bg-slate-950/40 w-full md:w-auto justify-center">
										<span class="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white">Abrir Projeto</span>
										<div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover/btn:rotate-45 transition-transform duration-300">
											<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				{/key}
			</div>
			
		</div>
	</div>
</section>
