<script lang="ts">
	import { onMount } from 'svelte';

	let container = $state<HTMLElement | null>(null);
	let scrollY = $state(0);
	let innerHeight = $state(1000);

	const stack = [
		{ id: '01', name: 'SvelteKit', icon: '⚡', color: '#ff3e00', desc: 'Performance SSR nativa para interfaces fluidas.', comment: 'Minha principal arma para interfaces web ultra-rápidas. A ausência de Virtual DOM muda absolutamente tudo.' },
		{ id: '02', name: 'Angular', icon: '🅰️', color: '#dd0031', desc: 'Estruturas de alta complexidade e escalabilidade.', comment: 'Essencial quando o projeto exige arquitetura rigorosa, injeção de dependências pesadas e escalabilidade em nível corporativo.' },
		{ id: '03', name: 'JavaScript', icon: 'JS', color: '#f7df1e', desc: 'Padrões modernos e execução de alto impacto.', comment: 'O oxigênio da web. Tenho proficiência profunda nas entranhas funcionais do JS moderno e ecossistemas assíncronos.' },
		{ id: '04', name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Segurança e integridade na persistência de dados.', comment: 'Meu banco de dados relacional favorito. Uso intensivo para garantir que a fundação de dados do sistema jamais ceda.' },
		{ id: '05', name: 'Ruby', icon: '💎', color: '#701516', desc: 'Elegância e agilidade no desenvolvimento backend.', comment: 'A produtividade que o Ruby nos traz não tem igual para automações corporativas robustas e scripts elegantemente bem estruturados.' },
		{ id: '06', name: 'Python', icon: '🐍', color: '#3776ab', desc: 'Processamento eficiente e inteligência aplicada.', comment: 'Excepcional para tarefas pesadas envolvendo integração de dados complexos, I.A e rotinas de automação em background.' },
		{ id: '07', name: 'Go', icon: '🐹', color: '#00add8', desc: 'Concorrência e eficiência em sistemas distribuídos.', comment: 'A minha escolha definitiva quando a latência obrigatoriamente tem que ser quase nula. Confiável como um relógio suíço.' }
	];

	let cardsOffset = $state<{ [key: string]: { x: number, y: number } }>({});
	let hoveredCardId = $state<string | null>(null);
	let activeItem = $derived(stack.find(s => s.id === hoveredCardId));

	// Progressão local da seção para o efeito de entrada
	let sectionProgress = $derived.by(() => {
		const _ = scrollY;
		if (!container) return 0;
		const rect = container.getBoundingClientRect();
		const start = innerHeight * 0.8;
		const end = 0;
		const p = (rect.top - end) / (start - end);
		return Math.max(0, Math.min(1, 1 - p));
	});

	// Sistema de partículas
	const particles = Array.from({ length: 40 }).map((_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 3 + 1,
		duration: Math.random() * 15 + 10,
		delay: Math.random() * -20,
		drift: (Math.random() - 0.5) * 40
	}));

	function handleMouseMove(e: MouseEvent, id: string) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		cardsOffset[id] = { x: x * 15, y: y * -15 }; 
	}

	function resetHover(id: string) {
		hoveredCardId = null;
		cardsOffset[id] = { x: 0, y: 0 };
	}

	// Helper para 3D Character Assembly (Títulos)
	function getCharStyle(char: string, charIdx: number, p: number) {
		if (char === ' ') return 'display: inline-block; width: 0.25em;';
		const intensity = Math.max(0, 1 - (p * 2)); // Monta nos primeiros 50% de visibilidade
		
		const seed = charIdx * 100;
		const random = (s: number) => {
			const x = Math.sin(s) * 10000;
			return x - Math.floor(x);
		};

		const offsetX = (random(seed) - 0.5) * 1000 * intensity;
		const offsetY = (random(seed + 1) - 0.5) * 800 * intensity;
		const offsetZ = (random(seed + 2) - 0.5) * 2000 * intensity;
		const rotate = (random(seed + 3) - 0.5) * 360 * intensity;

		return `
			display: inline-block;
			transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotate(${rotate}deg);
			opacity: ${1 - intensity};
			transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out;
			will-change: transform, opacity;
		`;
	}

	// Helper para entrada 3D dos cards
	function getCardEntryStyle(idx: number, p: number) {
		const intensity = Math.max(0, 1 - (p - 0.2) * 2); // Começa depois de 20% do scroll
		if (p < 0.2) return 'opacity: 0; transform: scale(0.8) translateZ(-1000px);';

		const seed = idx * 200;
		const random = (s: number) => Math.sin(s) * 10000 - Math.floor(Math.sin(s) * 10000);
		
		const offsetX = (random(seed) - 0.5) * 500 * intensity;
		const offsetY = (random(seed + 1) ) * 400 * intensity;
		const rotate = (random(seed + 2) - 0.5) * 45 * intensity;

		return `
			opacity: ${1 - intensity};
			transform: translate3d(${offsetX}px, ${offsetY}px, ${-intensity * 1000}px) rotate(${rotate}deg);
			transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease-out;
		`;
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
	bind:this={container}
	class="relative py-48 transition-colors duration-1000 border-t overflow-hidden perspective-[3000px]" 
	style="background-color: {activeItem ? activeItem.color : '#fafafa'}; border-color: {activeItem ? activeItem.color : 'rgba(241, 245, 249, 0.5)'};"
>
	<!-- Sistema de Partículas -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-1000 {activeItem ? 'opacity-100' : 'opacity-30'}">
		{#each particles as p}
			<div 
				class="absolute rounded-full transition-colors duration-700 {activeItem ? 'bg-white/40' : 'bg-blue-600/20'}"
				style="
					left: {p.x}%; 
					top: {p.y}%; 
					width: {p.size}px; 
					height: {p.size}px; 
					--drift: {p.drift}px;
					animation: float {p.duration}s ease-in-out {p.delay}s infinite alternate;
				"
			></div>
		{/each}
	</div>

	<div class="max-w-7xl mx-auto px-8 relative z-10">
		
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-40 transition-colors duration-700 {activeItem ? 'text-white' : 'text-slate-900'}">
			<div class="max-w-2xl">
				<h2 class="text-6xl md:text-9xl font-black tracking-tighter mb-4">
					{#each "Minha Stack".split('') as char, i}
						<span style={getCharStyle(char, i, sectionProgress)}>{char}</span>
					{/each}
				</h2>
				<div class="h-1.5 w-24 mb-10 {activeItem ? 'bg-white/40' : 'bg-blue-600'} transition-all duration-700" style="transform: scaleX({sectionProgress}); transform-origin: left;"></div>
			</div>
			<div class="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
				<span class="font-black uppercase tracking-[0.5em] text-[10px] mb-6 {activeItem ? 'text-white/60' : 'text-blue-600'} transition-all duration-1000" style="opacity: {sectionProgress}; transform: translateX({(1-sectionProgress)*20}px);">Arsenal Técnico</span>
				<h3 class="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
					{#each "Dominância Tecnológica".split('') as char, i}
						<span style={getCharStyle(char, i + 20, sectionProgress)}>{char}</span>
					{/each}
				</h3>
				<p class="text-lg font-light leading-relaxed {activeItem ? 'text-white/80' : 'text-slate-500'} transition-opacity duration-1000" style="opacity: {sectionProgress};">
					Uma seleção rigorosa de tecnologias desenhadas para performance extrema e experiência do usuário impecável.
				</p>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40 perspective-[2000px]">
			{#each stack as item, i}
				<div 
					role="presentation"
					class="group relative bg-white p-12 rounded-[3.5rem] transition-all duration-[800ms] ease-out shadow-2xl overflow-hidden
						{hoveredCardId && hoveredCardId !== item.id ? 'blur-[10px] opacity-30 scale-[0.9] grayscale' : 'scale-100 opacity-100'}"
					style="
						{getCardEntryStyle(i, sectionProgress)}
						transform: {getCardEntryStyle(i, sectionProgress).includes('transform') ? '' : `rotateX(${cardsOffset[item.id]?.y || 0}deg) rotateY(${cardsOffset[item.id]?.x || 0}deg)`};
						transform-style: preserve-3d;
					"
					onmouseenter={() => hoveredCardId = item.id}
					onmouseleave={() => resetHover(item.id)}
					onmousemove={(e) => handleMouseMove(e, item.id)}
				>
					<div class="relative z-10 flex flex-col h-full pointer-events-none">
						<div 
							class="w-16 h-16 mb-12 rounded-3xl bg-slate-50 flex items-center justify-center text-4xl shadow-inner transition-all duration-700 group-hover:scale-110 group-hover:bg-white group-hover:shadow-2xl"
							style="color: {item.color};"
						>
							{item.icon}
						</div>
						
						<h4 class="text-3xl font-black tracking-tighter text-slate-900 mb-6">{item.name}</h4>
						<p class="text-slate-500 text-lg font-light leading-snug mb-16">
							{item.desc}
						</p>

						<div class="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
							<span class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-300">Seniority</span>
							<div class="flex gap-1.5">
								{#each Array(5) as _, starIdx}
									<div 
										class="w-2 h-2 rounded-full transition-colors duration-700" 
										style="background-color: {starIdx < 4 ? item.color : '#f1f5f9'}; opacity: {starIdx < 4 ? 1 : 0.2};"
									></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Industry Section -->
		<div class="mt-48 pt-32 border-t border-slate-200/50 transition-colors duration-1000 {activeItem ? 'border-white/10' : ''}">
			<div class="text-center mb-24 max-w-4xl mx-auto">
				<span class="font-black uppercase tracking-[0.6em] text-[10px] mb-8 block {activeItem ? 'text-white/60' : 'text-blue-600'} animate-pulse">Padrão Corporativo</span>
				<h3 class="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] transition-colors duration-700 {activeItem ? 'text-white' : 'text-slate-950'}">
					As tecnologias que <br/> movem a <span class="italic font-serif font-light text-blue-500">elite</span>.
				</h3>
				<p class="text-xl font-light leading-relaxed {activeItem ? 'text-white/70' : 'text-slate-500'} transition-colors duration-700">
					Minha stack não é decidida por tendências passageiras. É a mesma infraestrutura validada e utilizada pelas maiores corporações do planeta.
				</p>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div class="col-span-2 md:col-span-2 row-span-2 relative p-12 rounded-[4rem] flex flex-col items-center justify-center gap-8 overflow-hidden transition-all duration-1000 group/apple
					{activeItem ? 'bg-white/5 border border-white/10 shadow-2xl' : 'bg-white border border-slate-100 shadow-sm'}
				">
					<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor" class="transition-all duration-700 group-hover/apple:scale-125 {activeItem ? 'text-white' : 'text-slate-900'}">
						<path d="M17.05 20.28c-.96.95-2.04 1.72-3.12 1.72-1.12 0-1.47-.69-2.73-.69-1.28 0-1.68.67-2.73.69-1.07.02-2.2-.82-3.21-1.85C3.18 18.06 1.75 14.54 1.75 11.4c0-3.32 2.15-5.07 4.2-5.07 1.05 0 2.05.6 2.67.6.62 0 1.74-.68 2.92-.68 1.55 0 2.68.82 3.39 1.83-2.9 1.4-2.43 5.4 1.15 6.47-.7 1.83-1.6 3.66-3.03 5.73zM12.03 5.48c0-2.3 2.02-4.14 4.56-4.23.14 2.87-3.08 5.76-4.56 4.23z"/>
					</svg>
					<div class="text-center relative z-10">
						<span class="block text-3xl font-black mb-2 {activeItem ? 'text-white' : 'text-slate-900'} tracking-tighter">Apple</span>
						<span class="block text-[10px] font-black tracking-[0.4em] uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">Svelte & Core UI</span>
					</div>
				</div>

				{#each ['Angular', 'TypeScript', 'Netflix', 'Meta'] as tech}
					<div class="p-8 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl
						{activeItem ? 'bg-white/[0.03] border border-white/5' : 'bg-slate-50 border border-slate-100/50 shadow-sm'}
					">
						<div class="opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">
							{#if tech === 'Angular'}
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48"><path fill="#dd0031" d="M24 4L6.9 10.1l2.5 21.6L24 44l14.6-12.3 2.5-21.6L24 4z"/><path fill="#c3002f" d="M24 4v35.7l11.4-9.6 2.3-19.4L24 4z"/><path fill="#fff" d="M24 10.3l-9.5 21.4h3.7l2.2-5.4h7.2l2.2 5.4h3.7L24 10.3zm3 13.1h-6l3-7.3 3 7.3z"/></svg>
							{:else if tech === 'TypeScript'}
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#3178c6" d="M0 0h24v24H0V0z"/><path fill="#fff" d="M12.9 15.1c0 2.2 1.6 3.2 4.1 3.2 1.2 0 2.5-.3 3.4-.9v-2.3c-.8.6-1.8.8-2.6.8-1.3 0-1.9-.5-1.9-1.4V8.4h4.5V6H13v9.1zM5 18c1.5 0 2.6-.4 3.4-1.1s1.3-1.8 1.3-3.4h-2.1c0 1.6-.7 2.2-2.3 2.2-1.3 0-1.9-.5-1.9-1.4V8.4h4.5V6H5v12z"/></svg>
							{:else if tech === 'Netflix'}
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32"><path fill="#E50914" d="M24 0h3.6L21.4 32H18zM4.4 0H8l5.8 32H10z"/><path d="M7 0h3v32H7z" fill="#B20710"/><path fill="#E50914" d="M7 0l16 32h-3L4 0h3z"/></svg>
							{:else}
								<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#0668E1"><path d="M12 21.5c-2.4 0-4.7-.6-6.6-1.5-3.3-1.6-4.9-4.3-4.9-6.3 0-2 1.6-4.7 4.9-6.3 1.9-1 4.2-1.5 6.6-1.5s4.7.6 6.6 1.5c3.3 1.6 4.9 4.3 4.9 6.3 0 2-1.6 4.7-4.9 6.3-1.9 1-4.2 1.5-6.6 1.5Zm0-13C9 8.5 6 9.3 4 10.3c-2.2 1-3.2 2.6-3.2 3.4 0 .9 1 2.4 3.2 3.4 2 1 5 1.8 8 1.8s6-.8 8-1.8c2.2-1 3.2-2.6 3.2-3.4 0-.9-1-2.4-3.2-3.4-2-1-5-1.8-8-1.8Z"/><path d="M12 17.2c-1.3 0-2.6-.5-3.5-1.5-2-2-2-5.1 0-7.1 1-.9 2.2-1.5 3.5-1.5s2.6.5 3.5 1.5c2 2 2 5.1 0 7.1-1 1-2.2 1.5-3.5 1.5Zm0-8.6c-1 0-1.8.4-2.5 1.1-1.4 1.4-1.4 3.6 0 5 1.4 1.4 3.5 1.4 4.9 0 1.4-1.4 1.4-3.6 0-5-.6-.7-1.5-1.1-2.4-1.1Z"/></svg>
							{/if}
						</div>
						<span class="text-[10px] font-black tracking-[0.4em] uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">{tech}</span>
					</div>
				{/each}
			</div>
		</div>

	</div>

	<!-- Translucent Comment Balloon -->
	<div class="fixed bottom-8 right-8 z-[100] transition-all duration-700 ease-out {activeItem ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}">
		{#if activeItem}
			<div class="max-w-xs p-8 bg-white/40 backdrop-blur-3xl border shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] rounded-[3rem]" style="border-color: {activeItem.color}66;">
				<div class="flex items-center gap-4 mb-6">
					<span class="text-3xl drop-shadow-2xl">{activeItem.icon}</span>
					<span class="font-black tracking-tighter text-2xl" style="color: {activeItem.color}">{activeItem.name}</span>
				</div>
				<p class="text-slate-950 text-base font-medium leading-relaxed italic">
					"{activeItem.comment}"
				</p>
			</div>
		{/if}
	</div>
</section>

<style>
	h2, h3, h4 {
		text-wrap: balance;
		word-break: keep-all;
	}

	@keyframes float {
		0% { transform: translate(0, 0) scale(1); opacity: 0.1; }
		50% { opacity: 0.5; }
		100% { transform: translate(var(--drift), -200px) scale(1.5); opacity: 0; }
	}
</style>
