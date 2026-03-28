<script lang="ts">
	const stack = [
		{ id: '01', name: 'SvelteKit', icon: '⚡', color: '#ff3e00', desc: 'Performance SSR nativa para interfaces fluidas.', comment: 'Minha principal arma para interfaces web ultra-rápidas. A ausência de Virtual DOM muda absolutamente tudo.' },
		{ id: '02', name: 'Angular', icon: '🅰️', color: '#dd0031', desc: 'Estruturas de alta complexidade e escalabilidade.', comment: 'Essencial quando o projeto exige arquitetura rigorosa, injeção de dependências pesadas e escalabilidade em nível corporativo.' },
		{ id: '03', name: 'JavaScript', icon: 'JS', color: '#f7df1e', desc: 'Padrões modernos e execução de alto impacto.', comment: 'O oxigênio da web. Tenho proficiência profunda nas entranhas funcionais do JS moderno e ecossistemas assíncronos.' },
		{ id: '04', name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Segurança e integridade na persistência de dados.', comment: 'Meu banco de dados relacional favorito. Uso intensivo para garantir que a fundação de dados do sistema jamais ceda.' },
		{ id: '05', name: 'Ruby', icon: '💎', color: '#701516', desc: 'Elegância e agilidade no desenvolvimento backend.', comment: 'A produtividade que o Ruby nos traz não tem igual para automações corporativas robustas e scripts elegantemente bem estruturados.' },
		{ id: '06', name: 'Python', icon: '🐍', color: '#3776ab', desc: 'Processamento eficiente e inteligência aplicada.', comment: 'Excepcional para tarefas pesadas envolvendo integração de dados complexos, I.A e rotinas de automação em background.' },
		{ id: '07', name: 'Go', icon: '🐹', color: '#00add8', desc: 'Concorrência e eficiência em sistemas distribuídos.', comment: 'A minha escolha definitiva quando a latência obrigatoriamente tem que ser quase nula. Confiável como um relógio suíço.' }
	];

	let cards = $state<{ [key: string]: { x: number, y: number } }>({});
	let hoveredCardId = $state<string | null>(null);
	let activeItem = $derived(stack.find(s => s.id === hoveredCardId));

	// Sistema de partículas dinâmicas
	const particles = Array.from({ length: 50 }).map((_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 4 + 1,
		duration: Math.random() * 20 + 10,
		delay: Math.random() * -20,
		drift: (Math.random() - 0.5) * 50
	}));

	function handleMouseMove(e: MouseEvent, id: string) {
		const target = e.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		// Rotação sutil ampliada ao hover real
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		cards[id] = { x: x * 15, y: y * -15 }; 
	}

	function resetHover(id: string) {
		hoveredCardId = null;
		cards[id] = { x: 0, y: 0 };
	}
</script>

<section 
	class="relative py-40 transition-colors duration-[800ms] border-t overflow-hidden" 
	style="background-color: {activeItem ? activeItem.color : '#fafafa'}; border-color: {activeItem ? activeItem.color : 'rgba(241, 245, 249, 0.5)'};"
>
	<!-- Sistema de Partículas em Background -->
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
		
		<!-- Editorial Header -->
		<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 transition-colors duration-700 {activeItem ? 'text-white' : 'text-slate-900'}">
			<div class="max-w-2xl">
				<h2 class="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-4 text-balance">
					Minha <br/><span class="text-transparent bg-clip-text transition-all duration-700 {activeItem ? 'bg-white/90' : 'bg-gradient-to-r from-slate-950 to-slate-500'}">Stack</span>
				</h2>
				<div class="h-1 w-24 mb-8 {activeItem ? 'bg-white/40' : 'bg-blue-600'} transition-colors duration-700"></div>
			</div>
			<div class="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
				<span class="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 {activeItem ? 'text-white/60' : 'text-blue-600'} transition-colors duration-700">Apresentação Estratégica</span>
				<h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight">Arsenal Técnico</h3>
				<p class="text-sm font-light leading-relaxed {activeItem ? 'text-white/80' : 'text-slate-500'} transition-colors duration-700">
					Uma seleção rigorosa de tecnologias desenhadas para performance extrema e experiência do usuário impecável.
				</p>
			</div>
		</div>

		<!-- Grid Bento-Style com 3D Tilt e Efeito Blur Dinâmico -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
			{#each stack as item}
				<div 
					role="presentation"
					class="group relative bg-white p-10 rounded-[2.5rem] transition-all duration-[600ms] ease-out shadow-xl
						{hoveredCardId && hoveredCardId !== item.id ? 'blur-[8px] opacity-40 scale-[0.93] grayscale-[80%]' : 'scale-100 opacity-100'}"
					style="transform: rotateX({cards[item.id]?.y || 0}deg) rotateY({cards[item.id]?.x || 0}deg) translateZ({hoveredCardId === item.id ? '30px' : '0'}); transform-style: preserve-3d; {hoveredCardId === item.id ? 'box-shadow: 0 50px 100px -20px rgba(0,0,0,0.5); border-color: transparent;' : 'border: 1px solid rgba(241,245,249,1);'}"
					onmouseenter={() => hoveredCardId = item.id}
					onmouseleave={() => resetHover(item.id)}
					onmousemove={(e) => handleMouseMove(e, item.id)}
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
									<div class="w-1.5 h-1.5 rounded-full {i < 4 ? 'bg-slate-800' : 'bg-slate-100'}" style="{i < 4 ? `background-color: ${item.color};` : ''}"></div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Corporate Verification Section -->
		<div class="mt-40 pt-24 border-t border-slate-200/50 transition-colors duration-700 {activeItem ? 'border-white/10' : ''}">
			<div class="text-center mb-20">
				<span class="font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block {activeItem ? 'text-white/60' : 'text-blue-600'} transition-colors duration-700">Ecossistema Global</span>
				<h3 class="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter mb-6 leading-tight transition-colors duration-700 {activeItem ? 'text-white' : 'text-slate-900'}">
					As tecnologias que <br class="hidden md:block" /> movem a <span class="italic font-serif font-light opacity-80">indústria líder</span>.
				</h3>
				<p class="font-light leading-relaxed max-w-2xl mx-auto {activeItem ? 'text-white/70' : 'text-slate-500'} transition-colors duration-700">
					Minha stack não é decidida por tendências passageiras. É a mesma infraestrutura validada e utilizada pelas maiores corporações de tecnologia do planeta.
				</p>
			</div>

			<!-- Bento Grid of Logos -->
			<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
				<!-- Apple Highlight -->
				<div class="col-span-2 md:col-span-2 row-span-2 relative p-8 md:p-12 rounded-[2.5rem] flex flex-col items-center justify-center gap-6 overflow-hidden transition-all duration-700 shadow-sm hover:shadow-xl group/apple
					{activeItem ? 'bg-white/5 border border-white/10' : 'bg-white border border-slate-100'}
				">
					<div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-100/50 to-transparent {activeItem ? 'hidden' : 'block'} pointer-events-none"></div>
					<div class="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white/[0.05] to-transparent {activeItem ? 'block' : 'hidden'} pointer-events-none"></div>
					
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" class="transition-all duration-500 group-hover/apple:scale-110 {activeItem ? 'text-white' : 'text-slate-900'}">
						<path d="M17.05 20.28c-.96.95-2.04 1.72-3.12 1.72-1.12 0-1.47-.69-2.73-.69-1.28 0-1.68.67-2.73.69-1.07.02-2.2-.82-3.21-1.85C3.18 18.06 1.75 14.54 1.75 11.4c0-3.32 2.15-5.07 4.2-5.07 1.05 0 2.05.6 2.67.6.62 0 1.74-.68 2.92-.68 1.55 0 2.68.82 3.39 1.83-2.9 1.4-2.43 5.4 1.15 6.47-.7 1.83-1.6 3.66-3.03 5.73zM12.03 5.48c0-2.3 2.02-4.14 4.56-4.23.14 2.87-3.08 5.76-4.56 4.23z"/>
					</svg>
					<div class="text-center relative z-10">
						<span class="block text-2xl font-black mb-2 {activeItem ? 'text-white' : 'text-slate-900'}">Apple</span>
						<span class="block text-xs font-bold tracking-widest uppercase {activeItem ? 'text-white/50' : 'text-slate-400'}">Svelte & Edge Apps</span>
					</div>
				</div>

				<!-- Google -->
				<div class="p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2
					{activeItem ? 'bg-white/[0.02] border border-white/5' : 'bg-slate-50 border border-slate-100/50'}
				">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
						<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
						<path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
						<path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
						<path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
					</svg>
					<span class="text-[10px] font-bold tracking-widest uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">Angular / GO</span>
				</div>

				<!-- Microsoft -->
				<div class="p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2
					{activeItem ? 'bg-white/[0.02] border border-white/5' : 'bg-slate-50 border border-slate-100/50'}
				">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
						<path fill="#f35325" d="M0 0h11.4v11.4H0z"/><path fill="#81bc06" d="M12.6 0H24v11.4H12.6z"/><path fill="#05a6f0" d="M0 12.6h11.4V24H0z"/><path fill="#ffba08" d="M12.6 12.6H24V24H12.6z"/>
					</svg>
					<span class="text-[10px] font-bold tracking-widest uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">TypeScript</span>
				</div>

				<!-- Netflix -->
				<div class="p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2
					{activeItem ? 'bg-white/[0.02] border border-white/5' : 'bg-slate-50 border border-slate-100/50'}
				">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
						<path fill="#E50914" d="M24 0h3.6L21.4 32H18zM4.4 0H8l5.8 32H10z"/><path d="M7 0h3v32H7z" fill="#B20710"/><path fill="#E50914" d="M7 0l16 32h-3L4 0h3z"/>
					</svg>
					<span class="text-[10px] font-bold tracking-widest uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">Python / JS</span>
				</div>

				<!-- Meta -->
				<div class="p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2
					{activeItem ? 'bg-white/[0.02] border border-white/5' : 'bg-slate-50 border border-slate-100/50'}
				">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#0668E1">
						<path d="M12 21.5c-2.4 0-4.7-.6-6.6-1.5-3.3-1.6-4.9-4.3-4.9-6.3 0-2 1.6-4.7 4.9-6.3 1.9-1 4.2-1.5 6.6-1.5s4.7.6 6.6 1.5c3.3 1.6 4.9 4.3 4.9 6.3 0 2-1.6 4.7-4.9 6.3-1.9 1-4.2 1.5-6.6 1.5Zm0-13C9 8.5 6 9.3 4 10.3c-2.2 1-3.2 2.6-3.2 3.4 0 .9 1 2.4 3.2 3.4 2 1 5 1.8 8 1.8s6-.8 8-1.8c2.2-1 3.2-2.6 3.2-3.4 0-.9-1-2.4-3.2-3.4-2-1-5-1.8-8-1.8Z"/><path d="M12 17.2c-1.3 0-2.6-.5-3.5-1.5-2-2-2-5.1 0-7.1 1-.9 2.2-1.5 3.5-1.5s2.6.5 3.5 1.5c2 2 2 5.1 0 7.1-1 1-2.2 1.5-3.5 1.5Zm0-8.6c-1 0-1.8.4-2.5 1.1-1.4 1.4-1.4 3.6 0 5 1.4 1.4 3.5 1.4 4.9 0 1.4-1.4 1.4-3.6 0-5-.6-.7-1.5-1.1-2.4-1.1Z"/>
					</svg>
					<span class="text-[10px] font-bold tracking-widest uppercase {activeItem ? 'text-white/40' : 'text-slate-400'}">Ruby / React</span>
				</div>
			</div>
		</div>

	</div>

	<!-- Translucent Comment Balloon (Fixed Corner) -->
	<div class="fixed bottom-8 right-8 z-[100] transition-all duration-500 ease-out {activeItem ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-90 pointer-events-none'}">
		{#if activeItem}
			<div class="max-w-xs p-6 bg-white/50 backdrop-blur-2xl border shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] rounded-[2.5rem]" style="border-color: {activeItem.color}55;">
				<div class="flex items-center gap-3 mb-4">
					<span class="text-2xl drop-shadow-md">{activeItem.icon}</span>
					<span class="font-bold tracking-tight text-xl" style="color: {activeItem.color}">{activeItem.name}</span>
				</div>
				<p class="text-slate-900 text-sm font-medium leading-relaxed">
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
		0% { 
			transform: translate(0, 0) scale(1); 
			opacity: 0.1; 
		}
		50% { 
			opacity: 0.6; 
		}
		100% { 
			transform: translate(var(--drift), -150px) scale(1.5); 
			opacity: 0; 
		}
	}
</style>
