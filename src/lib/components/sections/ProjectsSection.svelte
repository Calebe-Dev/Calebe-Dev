<script lang="ts">
	const projects = [
		{
			name: 'Plano TIM Empresa',
			url: 'https://planotimempresa.com.br/',
			desc: 'Desenvolvimento de site com integração nativa a CRM, sistema interno de gestão de ofertas e arquitetura headless otimizada para SEO agressivo.',
			tags: ['Next.js', 'CRM', 'SEO'],
			color: 'from-blue-500 to-indigo-600'
		},
		{
			name: 'Link Dedicada',
			url: 'https://linkdedicada.com.br/',
			desc: 'Landings de altíssima conversão para telecom, desenhadas para captura otimizada de leads B2B e distribuição para o pipeline de vendas.',
			tags: ['Landing Page', 'Lead Gen'],
			color: 'from-emerald-400 to-teal-600'
		},
		{
			name: 'Belle Moda Íntima',
			url: 'https://bellemodaintima.com.br/',
			desc: 'Plataforma de e-commerce sobre WooCommerce, gerenciamento do catálogo e sincronização via CRM para posts.',
			tags: ['WooCommerce', 'E-commerce'],
			color: 'from-pink-500 to-rose-600'
		},
		{
			name: 'Alpha Company Ads',
			url: 'https://alphacompanyads.com.br/',
			desc: 'Site institucional corporativo focado na apresentação da agência como autoridade no ecossistema de performance.',
			tags: ['Corporate', 'Agency'],
			color: 'from-slate-700 to-slate-900'
		},
		{
			name: 'Buenos Water Tech',
			url: 'https://buenoswatertechnology.com.br/',
			desc: 'Página Web focada nas soluções tecnológicas de tratamentos industriais, destacando serviços premium e contato.',
			tags: ['Web App', 'Industrial'],
			color: 'from-cyan-400 to-blue-500'
		},
		{
			name: 'Esquadrias Martins',
			url: 'https://esquadriasmartins.com.br/',
			desc: 'Vitrine digital para orçamento de materiais de alto padrão, reforçando a experiência premium no setor de arquitetura.',
			tags: ['UX/UI', 'Premium'],
			color: 'from-amber-400 to-orange-500'
		}
	];
</script>

<section class="py-40 bg-black text-white relative overflow-hidden">
    <!-- Grid pattern background subtle -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

	<div class="max-w-7xl mx-auto px-8 relative z-10">
		<div class="mb-24 md:flex items-end justify-between">
			<div class="max-w-xl">
				<span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Portfólio</span>
				<h2 class="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-balance">
					Nível de <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Produção</span>
				</h2>
			</div>
			<p class="text-slate-400 max-w-sm font-light leading-relaxed mb-4 md:text-right">
				Aplicações reais focadas em conversão, tráfego qualificado e experiência estética de ponta.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<a href={project.url} target="_blank" rel="noopener noreferrer" class="group block p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r {project.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
					<div class="flex justify-between items-start mb-12">
						<div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
						</div>
						<div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
						</div>
					</div>

					<h3 class="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
					<p class="text-slate-400 text-sm font-light leading-relaxed mb-8 h-20 text-balance">
						{project.desc}
					</p>

					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wide text-slate-300">
								{tag}
							</span>
						{/each}
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
