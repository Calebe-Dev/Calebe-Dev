<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);
	let element: HTMLElement;

	const services = [
		{
			icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
			title: 'Engenharia Fullstack',
			description: 'Desenvolvimento robusto com tecnologias modernas (Svelte, Node, Python) escaláveis e seguras.'
		},
		{
			icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
			title: 'Performance & SEO',
			description: 'Otimização técnica para carregamento instantâneo e visibilidade máxima nos motores de busca.'
		},
		{
			icon: 'M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.95M1 18h22M1 22h22M11 6l-4-4-4 4M11 12l-4-4-4 4',
			title: 'Design de Interface',
			description: 'Criação de interfaces premium, minimalistas e altamente intuitivas focadas na experiência do usuário.'
		},
		{
			icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z',
			title: 'Infraestrutura Cloud',
			description: 'Configuração de servidores, HestiaCP, Túneis Cloudflare e automação de deploy (CI/CD).'
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				visible = true;
			}
		}, { threshold: 0.1 });

		if (element) observer.observe(element);
		return () => observer.disconnect();
	});
</script>

<section 
	bind:this={element}
	class="py-32 px-6 bg-black relative"
	id="services"
>
	<div class="max-w-6xl w-full mx-auto space-y-20">
		<div class="text-center space-y-4">
			<h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">Soluções que Impulsionam seu Negócio</h2>
			<p class="text-slate-500 max-w-2xl mx-auto font-light">Especializado em entregar tecnologia de ponta com design de alta performance.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each services as service, i}
				{#if visible}
					<div 
						in:fly={{ y: 30, duration: 800, delay: i * 150 }}
						class="group p-8 bg-slate-900/40 border border-white/5 rounded-3xl hover:bg-slate-900/60 transition-all duration-500 hover:border-blue-500/30 relative"
					>
						<div class="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<path d={service.icon}></path>
							</svg>
						</div>
						
						<h3 class="text-xl font-bold text-white mb-4">{service.title}</h3>
						<p class="text-slate-400 text-sm leading-relaxed font-light">{service.description}</p>
						
						<!-- Bottom highlight line -->
						<div class="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
</style>
