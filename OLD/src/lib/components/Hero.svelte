<script lang="ts">
	import SectionSlide from './ui/SectionSlide.svelte';
	import AnimatedBlock from './ui/AnimatedBlock.svelte';
	import ParticleBackground from './ui/ParticleBackground.svelte';
	import MeshGradient from './ui/MeshGradient.svelte';

	const highlights = [
		'SEO técnico orientado a resultado',
		'Core Web Vitals acima da média',
		'Design premium com foco em conversão'
	];
</script>

<SectionSlide id="hero" class="relative z-10 overflow-hidden">
	<MeshGradient />
	<ParticleBackground />

	<div class="hero-stage container relative z-10 mx-auto px-6 py-8 text-center">
		<AnimatedBlock>
			<span
				class="hero-chip inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-200"
			>
				<span class="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(41,151,255,0.9)]"></span>
				Desenvolvedor Full Stack em Sorocaba
			</span>
		</AnimatedBlock>

		<AnimatedBlock delay={90}>
			<h1
				class="mx-auto mt-8 max-w-5xl text-balance text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl"
			>
				Design de alta performance
				<span class="block text-zinc-500"
					>para quem busca resultados reais.</span
				>
			</h1>
		</AnimatedBlock>

		<AnimatedBlock delay={170}>
			<p class="mx-auto mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 sm:text-xl">
				Crio experiências digitais <strong class="text-white">premium</strong> com 
				SEO técnico e performance web avançada para empresas que não aceitam o básico.
			</p>
		</AnimatedBlock>

		<AnimatedBlock delay={240}>
			<div class="mx-auto mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3">
				{#each highlights as item}
					<div
						class="rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.14] to-white/[0.03] px-4 py-4 text-sm font-medium text-slate-200 backdrop-blur-xl"
					>
						{item}
					</div>
				{/each}
			</div>
		</AnimatedBlock>

		<AnimatedBlock delay={300}>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<a
					href="/solicitar-projeto"
					class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:scale-[1.02] sm:w-auto"
				>
					Solicitar Projeto
					<svg aria-hidden="true" viewBox="0 0 20 20" class="h-4 w-4">
						<path d="M4 10h12M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" />
					</svg>
				</a>
				<a
					href="#projects"
					class="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-base font-medium text-white transition hover:bg-white/12 sm:w-auto"
				>
					Ver estudos de caso
				</a>
			</div>
		</AnimatedBlock>

		<AnimatedBlock delay={360}>
			<div class="mx-auto mt-14 w-full max-w-5xl">
				<div class="hero-device-wrap relative overflow-hidden rounded-[34px] border border-white/12 bg-gradient-to-b from-slate-300/[0.16] via-slate-900/30 to-black/70 p-6 md:p-8">
					<div
						class="pointer-events-none absolute -left-20 top-4 h-48 w-48 rounded-full bg-blue-400/20 blur-[70px]"
					></div>
					<div
						class="pointer-events-none absolute -right-24 bottom-2 h-52 w-52 rounded-full bg-indigo-400/20 blur-[80px]"
					></div>

					<div class="relative grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
						<div class="rounded-2xl border border-white/10 bg-black/35 p-5 text-left md:p-6">
							<p class="text-xs uppercase tracking-[0.24em] text-slate-400">Processo</p>
							<h2 class="mt-2 text-2xl font-semibold text-white md:text-3xl">
								Do briefing ao lançamento com precisão cirúrgica.
							</h2>
							<p class="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
								Planejamento estratégico, prototipagem, desenvolvimento full stack, otimização SEO e
								monitoramento de performance desde o primeiro deploy.
							</p>
						</div>

						<div class="hero-phone-shell mx-auto flex w-full max-w-[260px] flex-col justify-between rounded-[2rem] border border-white/15 bg-black/45 p-4 shadow-[0_25px_55px_-25px_rgba(0,0,0,0.95)]">
							<div class="mx-auto h-1.5 w-16 rounded-full bg-white/20"></div>
							<div class="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-blue-300/35 to-indigo-500/10 p-4">
								<p class="text-xs uppercase tracking-[0.18em] text-slate-200">Média de entrega</p>
								<p class="mt-1 text-3xl font-semibold text-white">95+</p>
								<p class="text-xs text-slate-300">Lighthouse em projetos otimizados</p>
							</div>
							<div class="mt-3 grid grid-cols-2 gap-2 text-left text-xs text-slate-300">
								<div class="rounded-xl border border-white/10 bg-black/35 p-2">CWV</div>
								<div class="rounded-xl border border-white/10 bg-black/35 p-2">SEO</div>
								<div class="rounded-xl border border-white/10 bg-black/35 p-2">UX</div>
								<div class="rounded-xl border border-white/10 bg-black/35 p-2">CRO</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AnimatedBlock>
	</div>
</SectionSlide>

<style>
	.hero-stage {
		position: relative;
	}

	.hero-stage::before {
		content: '';
		position: absolute;
		left: 50%;
		top: 8%;
		width: min(880px, 90vw);
		height: 1px;
		transform: translateX(-50%);
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.42), transparent);
		opacity: 0.5;
	}

	.hero-chip {
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32), 0 16px 28px -24px rgba(0, 0, 0, 0.9);
	}

	.hero-device-wrap::after {
		content: '';
		position: absolute;
		inset: -120% -40%;
		background: linear-gradient(112deg, transparent 40%, rgba(255, 255, 255, 0.18) 51%, transparent 62%);
		animation: heroSheen 10s ease-in-out infinite;
		pointer-events: none;
	}

	.hero-phone-shell {
		position: relative;
		animation: phoneFloat 8s ease-in-out infinite;
	}

	@keyframes heroSheen {
		0%,
		70%,
		100% {
			transform: translateX(-42%);
			opacity: 0;
		}
		76%,
		92% {
			transform: translateX(46%);
			opacity: 1;
		}
	}

	@keyframes phoneFloat {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-device-wrap::after,
		.hero-phone-shell {
			animation: none;
		}
	}
</style>
