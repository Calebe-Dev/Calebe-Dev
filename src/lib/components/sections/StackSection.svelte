<script lang="ts">
	import { onMount } from 'svelte';

	const stack = [
		{ id: '01', name: 'SvelteKit', icon: '⚡', color: '#ff3e00', desc: 'Performance SSR nativa para interfaces fluidas.' },
		{ id: '02', name: 'Angular', icon: '🅰️', color: '#dd0031', desc: 'Estruturas de alta complexidade e escalabilidade.' },
		{ id: '03', name: 'JavaScript', icon: 'JS', color: '#f7df1e', desc: 'Padrões modernos e execução de alto impacto.' },
		{ id: '04', name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Segurança e integridade na persistência de dados.' },
		{ id: '05', name: 'Ruby', icon: '💎', color: '#701516', desc: 'Elegância e agilidade no desenvolvimento backend.' },
		{ id: '06', name: 'Python', icon: '🐍', color: '#3776ab', desc: 'Processamento eficiente e inteligência aplicada.' },
		{ id: '07', name: 'Go', icon: '🐹', color: '#00add8', desc: 'Concorrência e eficiência em sistemas distribuídos.' }
	];

	// Duplicar para carrossel infinito suave
	const carouselItems = [...stack, ...stack, ...stack];

	// Lógica de Tilt Suave (Apple Style)
	let cards = $state<{ [key: string]: { x: number, y: number } }>({});

	function handleMouseMove(e: MouseEvent, id: string) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		// Rotação mais sutil para feeling premium
		cards[id] = { x: x * 12, y: y * -12 };
	}

	function resetTilt(id: string) {
		cards[id] = { x: 0, y: 0 };
	}
</script>

<section class="relative py-40 bg-[#fafafa] text-slate-900 border-t border-slate-100/50">
	<div class="max-w-7xl mx-auto px-8">
		
		<!-- Editorial Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32">
			<div class="max-w-2xl">
				<h2 class="text-7xl md:text-9xl font-black tracking-tight text-slate-900 mb-4">
					Minha <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-slate-500">Stack</span>
				</h2>
				<div class="h-1 w-24 bg-blue-600 mb-8"></div>
			</div>
			<div class="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
				<span class="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Apresentação Estratégica</span>
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">Arsenal Técnico</h3>
				<p class="text-sm text-slate-500 font-light leading-relaxed">
					Uma seleção rigorosa de tecnologias desenhadas para performance extrema e experiência do usuário impecável.
				</p>
			</div>
		</div>

		<!-- Grid Bento-Style com 3D Tilt Suave -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
			{#each stack as item}
				<div 
					role="presentation"
					class="group relative bg-white p-10 rounded-[2.5rem] transition-all duration-500 ease-out border border-slate-100 hover:border-blue-500/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
					style="transform: rotateX({cards[item.id]?.y || 0}deg) rotateY({cards[item.id]?.x || 0}deg); transform-style: preserve-3d;"
					onmousemove={(e) => handleMouseMove(e, item.id)}
					onmouseleave={() => resetTilt(item.id)}
				>
					<div class="relative z-10 flex flex-col h-full pointer-events-none">
						<div class="w-14 h-14 mb-10 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg">
							{item.icon}
						</div>
						
						<h4 class="text-2xl font-bold tracking-tight text-slate-900 mb-4">{item.name}</h4>
						<p class="text-slate-500 font-light leading-relaxed mb-12">
							{item.desc}
						</p>

						<div class="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
							<span class="text-[10px] font-bold uppercase tracking-widest text-slate-300">Dominance Level</span>
							<div class="flex gap-1">
								{#each Array(5) as _, i}
									<div class="w-1.5 h-1.5 rounded-full {i < 4 ? 'bg-blue-600' : 'bg-slate-100'}"></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Corporate Verification Section (Apple Highlight) -->
		<div class="py-24 px-12 bg-white rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)]">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
				<div>
					<span class="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Validação Global</span>
					<h3 class="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-8 leading-tight">
						Confiança das <span class="italic">maiores empresas</span> do mundo.
					</h3>
					<p class="text-slate-500 font-light leading-relaxed max-w-md">
						Minha stack não é apenas uma escolha técnica, é a mesma infraestrutura que sustenta bilhões de usuários diariamente.
					</p>
				</div>
				
				<div class="grid grid-cols-2 gap-10">
					<!-- Apple Highlight -->
					<div class="group relative p-8 rounded-3xl bg-slate-50/50 flex flex-col items-center justify-center gap-6 border border-transparent hover:border-slate-200 transition-all duration-700">
						<div class="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" class="text-slate-950 transition-transform group-hover:scale-110 duration-500">
							<path d="M17.05 20.28c-.96.95-2.04 1.72-3.12 1.72-1.12 0-1.47-.69-2.73-.69-1.28 0-1.68.67-2.73.69-1.07.02-2.2-.82-3.21-1.85C3.18 18.06 1.75 14.54 1.75 11.4c0-3.32 2.15-5.07 4.2-5.07 1.05 0 2.05.6 2.67.6.62 0 1.74-.68 2.92-.68 1.55 0 2.68.82 3.39 1.83-2.9 1.4-2.43 5.4 1.15 6.47-.7 1.83-1.6 3.66-3.03 5.73zM12.03 5.48c0-2.3 2.02-4.14 4.56-4.23.14 2.87-3.08 5.76-4.56 4.23z"/>
						</svg>
						<p class="text-center">
							<span class="block text-xs font-bold text-slate-900 mb-1">Apple Inc.</span>
							<span class="block text-[10px] text-blue-600 font-medium tracking-tight">Main Adopt of Svelte</span>
						</p>
					</div>

					<!-- Other Brands Container -->
					<div class="grid grid-rows-2 gap-4">
						<div class="bg-slate-50/30 rounded-3xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.36-7.84 5.36-4.92 0-8.92-4.08-8.92-9.12s4-9.12 8.92-9.12c2.8 0 4.68 1.16 5.76 2.2l2.6-2.6C19.16 1.12 16.12 0 12.48 0 5.8 0 0 5.36 0 12s5.8 12 12.48 12c6.96 0 11.6-4.88 11.6-11.8 0-.8-.08-1.4-.2-2.08h-11.4z"/></svg>
						</div>
						<div class="bg-slate-50/30 rounded-3xl flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.998 0l-3 10.963L8.998 0H5.566v24h3.432V9.96l2.84 14.04h3.5l2.84-14.04V24h3.432V0z"/></svg>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</section>

<style>
	h2, h3, h4 {
		text-wrap: balance;
		word-break: keep-all;
	}
</style>
