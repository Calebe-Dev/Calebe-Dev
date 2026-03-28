<script lang="ts">
	import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';

	const projects = [
		{ name: 'Plano TIM Empresa', url: 'https://planotimempresa.com.br/', desc: 'Arquitetura SvelteKit integrada a CRM proprietário. Otimização SEO agressiva resultando em rankeamento topo para termos de alta competitividade.', tags: ['SvelteKit', 'SEO Tech'], color: 'from-blue-500 to-indigo-600' },
		{ name: 'Link Dedicada', url: 'https://linkdedicada.com.br/', desc: 'Landings de conversão de alta fidelidade para o setor de Telecom. Foco em UX premium e fluxos de captura de leads otimizados.', tags: ['Performance', 'Lead Gen'], color: 'from-emerald-400 to-teal-600' },
		{ name: 'Belle Moda Íntima', url: 'https://bellemodaintima.com.br/', desc: 'E-commerce robusto com sincronização dinâmica de catálogo via API e gestão de posts automatizada.', tags: ['WooCommerce', 'API Sync'], color: 'from-pink-500 to-rose-600' },
		{ name: 'Alpha Company Ads', url: 'https://alphacompanyads.com.br/', desc: 'Plataforma oficial de agência de performance. Design focado em autoridade técnica e carregamento ultra-rápido.', tags: ['Corporate', 'Speed'], color: 'from-slate-700 to-slate-900' },
		{ name: 'Sorocaba Indica', url: 'https://sorocabaindica.com.br/', desc: 'Portal dinâmico com lógica de busca local e indexação massiva de páginas via CMS proprietário em Node.js.', tags: ['Node.js', 'Geo SEO'], color: 'from-orange-400 to-red-500' },
		{ name: 'Campinas Indica', url: 'https://campinasindica.com.br/', desc: 'Extensão do cluster de busca local focado em distribuição semântica de entidades regionais.', tags: ['Data Mining', 'B2C'], color: 'from-orange-500 to-red-600' },
		{ name: 'Prajá Imóveis', url: 'https://prajaimoveis.com.br/', desc: 'Ecossistema imobiliário completo com cruzamento de dados complexos e segmentação inteligente de buscas.', tags: ['Real Estate', 'CRM'], color: 'from-indigo-400 to-purple-600' },
		{ name: 'Grupo OC', url: 'https://grupooc.com.br/', desc: 'Portal matriz que orquestra toda a rede de sites e infraestrutura do hub tecnológico.', tags: ['Core System', 'Infra'], color: 'from-fuchsia-600 to-purple-800' }
	];

	let selectedProject = $state(projects[0]);
    let scrollY = $state(0);
    let container = $state<HTMLElement | null>(null);
    let isVisible = $state(false);

    $effect(() => {
        const _ = scrollY;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            isVisible = true;
        }
    });

	function selectProject(project: typeof projects[0]) {
		selectedProject = project;
	}

    function getCharStyle(char: string, index: number, isAssembled: boolean) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        if (isAssembled) return 'display: inline-block;';
        
        const seed = index * 41;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };
        
        const intensity = 1;
        const offsetX = (random(seed) - 0.5) * 800 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 600 * intensity;
        const offsetZ = -1500 * intensity;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${random(seed+2)*360}deg);
            opacity: 0;
            filter: blur(15px);
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
            transition-delay: ${index * 0.02}s;
        `;
    }
</script>

<section 
    bind:this={container}
    class="relative py-40 bg-black text-white overflow-hidden selection:bg-blue-500/30"
>
    <!-- Modern Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none opacity-40"></div>

	<div class="max-w-7xl mx-auto px-8 relative z-10">
		
        <!-- Animated Main Title -->
		<div class="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
			<div class="max-w-2xl">
				<span class="text-blue-500 font-bold uppercase tracking-[0.8em] text-[10px] mb-8 block transition-all duration-1000" style="opacity: {isVisible ? 0.6 : 0}; transform: translateY({isVisible ? 0 : 20}px);">Portfólio de Elite</span>
				
                <h2 class="text-fluid-title font-black tracking-tighter mb-4 leading-none">
                    {#each "NÍVEL DE".split('') as char, i}
                        <span style={getCharStyle(char, i, isVisible)}>{char}</span>
                    {/each}
                    <br/>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                        {#each "PRODUÇÃO".split('') as char, i}
                            <span style={getCharStyle(char, i + 10, isVisible)}>{char}</span>
                        {/each}
                    </span>
                </h2>
			</div>
			<p class="text-slate-500 max-w-sm font-light leading-relaxed text-lg transition-all duration-1000 delay-500" style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 30}px);">
				Aplicações escaláveis desenhadas para conversão extrema e autoridade técnica absoluta.
			</p>
		</div>

		<!-- Unified Multi-View Portfolio Grid -->
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 transition-all duration-1000 delay-700" style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 60}px);">
			
			<!-- Side Selection Bar -->
			<div class="lg:col-span-5 flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-6 custom-scrollbar">
				{#each projects as project, i}
					<button 
						onclick={() => selectProject(project)}
						class="w-full text-left p-8 rounded-[2.5rem] transition-all duration-700 flex items-center justify-between group relative overflow-hidden border
							{selectedProject === project 
								? 'bg-white/[0.04] border-white/10 shadow-2xl scale-[1.03] backdrop-blur-3xl' 
								: 'bg-transparent border-transparent opacity-30 hover:opacity-100 hover:bg-white/[0.01]'}"
					>
                        <div class="flex flex-col gap-1.5 relative z-10">
                            <span class="text-2xl font-black tracking-tight {selectedProject === project ? 'text-white' : 'text-slate-400'}">{project.name}</span>
                            <div class="flex gap-3">
                                {#each project.tags as tag}
                                    <span class="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">{tag}</span>
                                {/each}
                            </div>
                        </div>
                        <div class="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 {selectedProject === project ? 'bg-blue-500 text-white shadow-lg' : 'bg-white/5 text-slate-800 rotate-45'}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
					</button>
				{/each}
			</div>

			<!-- Dynamic Focus Area -->
			<div class="lg:col-span-7 sticky top-32">
				{#key selectedProject.name}
					<div 
						in:fly={{ y: 60, duration: 800, delay: 100 }} 
						out:fade={{ duration: 200 }}
						class="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-16 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between min-h-[600px] lg:min-h-[700px] transition-all duration-1000"
                        itemscope itemtype="https://schema.org/SoftwareApplication"
					>
						<!-- Meta / Background Decorations -->
                        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br {selectedProject.color} opacity-10 blur-[150px] rounded-full"></div>
						
                        <div class="relative z-10 flex flex-col h-full items-start">
							<div class="mb-auto">
								<div class="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-gradient-to-br {selectedProject.color} p-[1px] shadow-2xl">
									<div class="w-full h-full rounded-[2.5rem] bg-black/80 backdrop-blur-3xl flex items-center justify-center border border-white/10">
										<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="text-white opacity-80">
											<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
											<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
										</svg>
									</div>
								</div>
							</div>

							<div class="mt-16 mb-12">
								<h3 class="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter leading-none" itemprop="name">{selectedProject.name}</h3>
								<p class="text-xl md:text-2xl text-slate-400 font-light leading-snug max-w-lg text-balance" itemprop="description">{selectedProject.desc}</p>
							</div>

							<div class="flex flex-wrap gap-4 mb-16">
								{#each selectedProject.tags as tag}
									<span class="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-widest text-white/60 uppercase">{tag}</span>
								{/each}
							</div>

							<a 
                                href={selectedProject.url} 
                                target="_blank" 
                                class="inline-flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.3em] hover:scale-105 transition-transform duration-500 shadow-2xl"
                            >
                                Inspecionar Projeto
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </a>
						</div>
					</div>
				{/key}
			</div>
		</div>
	</div>
</section>

<style>
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.05);
        border-radius: 10px;
    }
    .custom-scrollbar:hover::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.1);
    }
</style>
