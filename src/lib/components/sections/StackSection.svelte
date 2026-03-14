<script lang="ts">
	import { onMount } from 'svelte';

	const stack = [
		{ id: '01', name: 'SvelteKit', icon: '⚡', color: '#ff3e00', desc: 'Interfaces reativas com performance SSR nativa.' },
		{ id: '02', name: 'Angular', icon: '🅰️', color: '#dd0031', desc: 'Arquiteturas robustas para sistemas enterprise.' },
		{ id: '03', name: 'JavaScript', icon: 'JS', color: '#f7df1e', desc: 'Ecossistema moderno e lógica de alto nível.' },
		{ id: '04', name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Modelagem relacional e integridade de dados.' },
		{ id: '05', name: 'Ruby', icon: '💎', color: '#701516', desc: 'Desenvolvimento ágil focado em Clean Code.' },
		{ id: '06', name: 'Python', icon: '🐍', color: '#3776ab', desc: 'Sistemas inteligentes e automação escalável.' },
		{ id: '07', name: 'Go', icon: '🐹', color: '#00add8', desc: 'Sistemas distribuídos de ultra-baixa latência.' }
	];

	// Duplicar para carrossel infinito
	const carouselItems = [...stack, ...stack, ...stack];

	// Lógica de Tilt 3D
	let cards = $state<{ [key: string]: { x: number, y: number } }>({});

	function handleMouseMove(e: MouseEvent, id: string) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		cards[id] = { x: x * 20, y: y * -20 };
	}

	function resetTilt(id: string) {
		cards[id] = { x: 0, y: 0 };
	}
</script>

<section class="relative py-32 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
	<!-- Technical Grid Background -->
	<div class="absolute inset-0 z-0 opacity-[0.03]" 
		style="background-image: radial-gradient(#000 0.5px, transparent 0.5px), linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px); background-size: 20px 20px; mask-image: radial-gradient(circle at center, black, transparent 80%);">
	</div>

	<div class="relative z-10 max-w-7xl mx-auto px-8">
		
		<!-- Título Técnico -->
		<div class="flex flex-col items-center mb-28 text-center">
			<div class="flex items-center gap-3 mb-6">
				<div class="h-[1px] w-8 bg-blue-600"></div>
				<span class="text-blue-600 font-mono text-[10px] uppercase tracking-[0.5em]">System.Stack_Registry</span>
				<div class="h-[1px] w-8 bg-blue-600"></div>
			</div>
			<h2 class="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8">
				Arsenal <span class="text-blue-600">Técnico</span>
			</h2>
			<div class="bg-slate-200/50 h-[1px] w-full max-w-md mb-8"></div>
			<p class="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
				Engenharia de software aplicada com as ferramentas mais performáticas do mercado global.
			</p>
		</div>

		<!-- Infinite Carousel Refinado -->
		<div class="relative w-full mb-36 group">
			<div class="absolute inset-0 z-10 pointer-events-none flex justify-between">
				<div class="w-40 bg-gradient-to-r from-slate-50 to-transparent"></div>
				<div class="w-40 bg-gradient-to-l from-slate-50 to-transparent"></div>
			</div>

			<div class="flex overflow-hidden">
				<div class="flex animate-infinite-scroll gap-16 py-8">
					{#each carouselItems as item}
						<div class="flex flex-col items-center gap-4 transition-all duration-500 opacity-40 hover:opacity-100">
							<div class="text-4xl filter saturate-0 hover:saturate-100 transition-all duration-500 drop-shadow-sm">
								{item.icon}
							</div>
							<span class="font-mono text-[9px] font-bold text-slate-400 tracking-tighter">{item.name} v2.0</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Grid 3D Interativo -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
			{#each stack as item}
				<div 
					role="presentation"
					class="group relative p-8 bg-white border border-slate-200 rounded-2xl transition-all duration-200 ease-out hover:shadow-2xl hover:border-blue-500/30 overflow-hidden"
					style="transform: rotateX({cards[item.id]?.y || 0}deg) rotateY({cards[item.id]?.x || 0}deg); transform-style: preserve-3d;"
					onmousemove={(e) => handleMouseMove(e, item.id)}
					onmouseleave={() => resetTilt(item.id)}
				>
					<!-- Technical Decorators -->
					<div class="absolute top-4 right-4 font-mono text-[9px] text-slate-300 tracking-widest">
						UID_{item.id}
					</div>
					<div class="absolute bottom-0 left-0 w-full h-[2px] bg-slate-100 group-hover:bg-blue-600 transition-colors duration-500"></div>

					<div class="relative z-10 flex flex-col h-full translate-z-20">
						<div class="w-10 h-10 mb-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shadow-inner group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
							{item.icon}
						</div>
						
						<h4 class="text-2xl font-bold tracking-tight text-slate-900 mb-4 flex items-baseline gap-2">
							{item.name}
							<span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse opacity-0 group-hover:opacity-100"></span>
						</h4>
						
						<p class="text-slate-500 text-sm font-light leading-relaxed mb-8">
							{item.desc}
						</p>

						<div class="mt-auto flex items-center justify-between font-mono text-[8px] text-slate-400 uppercase tracking-widest">
							<span>Status: Online</span>
							<span class="text-blue-600/50">Core_Module</span>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Empresas que utilizam a Stack -->
		<div class="mt-40 pt-20 border-t border-slate-200">
			<div class="flex flex-col items-center">
				<div class="flex items-center gap-2 mb-12 opacity-50">
					<div class="h-[1px] w-4 bg-slate-400"></div>
					<span class="font-mono text-[9px] uppercase tracking-widest">Industry_Verification.Log</span>
					<div class="h-[1px] w-4 bg-slate-400"></div>
				</div>
				
				<div class="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-50 hover:opacity-100 transition-opacity duration-700">
					<!-- Apple Highlight -->
					<div class="group relative flex flex-col items-center gap-3 scale-110">
						<div class="absolute -inset-4 bg-blue-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" class="text-slate-900 transition-colors group-hover:text-blue-600">
							<path d="M17.05 20.28c-.96.95-2.04 1.72-3.12 1.72-1.12 0-1.47-.69-2.73-.69-1.28 0-1.68.67-2.73.69-1.07.02-2.2-.82-3.21-1.85C3.18 18.06 1.75 14.54 1.75 11.4c0-3.32 2.15-5.07 4.2-5.07 1.05 0 2.05.6 2.67.6.62 0 1.74-.68 2.92-.68 1.55 0 2.68.82 3.39 1.83-2.9 1.4-2.43 5.4 1.15 6.47-.7 1.83-1.6 3.66-3.03 5.73zM12.03 5.48c0-2.3 2.02-4.14 4.56-4.23.14 2.87-3.08 5.76-4.56 4.23z"/>
						</svg>
						<span class="font-mono text-[8px] uppercase tracking-tighter text-blue-600 font-bold">Uses Svelte</span>
					</div>

					<!-- Google -->
					<div class="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12.48 10.92v3.28h7.84c-.24 1.84-2.12 5.36-7.84 5.36-4.92 0-8.92-4.08-8.92-9.12s4-9.12 8.92-9.12c2.8 0 4.68 1.16 5.76 2.2l2.6-2.6C19.16 1.12 16.12 0 12.48 0 5.8 0 0 5.36 0 12s5.8 12 12.48 12c6.96 0 11.6-4.88 11.6-11.8 0-.8-.08-1.4-.2-2.08h-11.4z"/>
						</svg>
						<span class="font-mono text-[7px] uppercase tracking-widest text-slate-400">Angular</span>
					</div>

					<!-- Meta -->
					<div class="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
							<path d="M11.666 18.006c-1.496-.067-2.096-.28-3.012-1.334-1.12-1.285-1.144-3.565-.054-4.881 1.055-1.274 2.454-1.274 3.511 0 1.09 1.316 1.066 3.596-.054 4.881-.46.528-.962.883-1.64.986l-.751.348zm9.534-17.706c-1.077 0-2.13.238-3.109.689-1.205.556-2.316 1.365-3.308 2.417-.993 1.052-1.846 2.275-2.54 3.636-.694 1.362-1.24 2.853-1.624 4.434-.384 1.581-.617 3.256-.695 4.97-.078 1.714.025 3.48.307 5.234.282 1.754.743 3.523 1.373 5.25.158.432.427.797.777 1.063a1.95 1.95 0 001.375.407c.504 0 .972-.149 1.375-.407.35-.266.619-.631.777-1.063.63-1.727 1.091-3.496 1.373-5.25.282-1.754.385-3.52.307-5.234a41.04 41.04 0 00-.695-4.97c-.384-1.581-.93-3.072-1.624-4.434-.694-1.361-1.547-2.584-2.54-3.636-.992-1.052-2.103-1.861-3.308-2.417A6.873 6.873 0 002.8 12c-.156.96.06 1.95.602 2.76.541.811 1.374 1.34 2.32 1.48a4.34 4.34 0 003.54-1.13c1.1-1.2 1.14-3.55.1-4.8a4.11 4.11 0 00-3.35-1.12 5.08 5.08 0 00-3.91 10.3c.96.156 1.95-.06 2.76-.602s1.34-1.374 1.48-2.32c.16-.96-.06-1.95-.602-2.76s-1.374-1.34-2.32-1.48a4.34 4.34 0 00-3.54 1.13c-1.1 1.2-1.14 3.55-.1 4.8 1 1.2 2.45 1.2 3.35 1.12 2.1-.2 3.7-1.8 3.9-10.3z"/>
						</svg>
						<span class="font-mono text-[7px] uppercase tracking-widest text-slate-400">PostgreSQL</span>
					</div>

					<!-- Netflix -->
					<div class="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all">
						<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
							<path d="M14.998 0l-3 10.963L8.998 0H5.566v24h3.432V9.96l2.84 14.04h3.5l2.84-14.04V24h3.432V0z"/>
						</svg>
						<span class="font-mono text-[7px] uppercase tracking-widest text-slate-400">Python/Go</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</section>

<style>
	@keyframes infinite-scroll {
		from { transform: translateX(0); }
		to { transform: translateX(-33.33%); }
	}

	.animate-infinite-scroll {
		animation: infinite-scroll 35s linear infinite;
	}

	.perspective-1000 {
		perspective: 1500px;
	}

	.translate-z-20 {
		transform: translateZ(50px);
	}

	h2 {
		text-wrap: balance;
		word-break: keep-all;
	}
</style>
