<script lang="ts">
	import AnimatedBlock from './AnimatedBlock.svelte';

	let {
		title,
		subtitle,
		buttonText,
		href
	}: {
		title: string;
		subtitle?: string;
		buttonText?: string;
		href?: string;
	} = $props();
</script>

<section
	class="apple-gridline relative flex min-h-[52svh] snap-start flex-col items-center justify-center overflow-hidden bg-zinc-950 py-16 text-white md:py-20"
>
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute left-[16%] top-[18%] h-44 w-44 rounded-full bg-blue-300/12 blur-[90px]"></div>
		<div class="absolute right-[18%] bottom-[20%] h-40 w-40 rounded-full bg-indigo-300/12 blur-[86px]"></div>
	</div>

	<div class="container relative z-10 px-6 text-center">
		<AnimatedBlock>
			<div class="mx-auto max-w-4xl rounded-[32px] border border-white/12 bg-black/30 px-6 py-10 md:px-10">
				<h2
					class="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-6xl"
				>
					{title}
				</h2>
				{#if subtitle}
					<p class="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
						{subtitle}
					</p>
				{/if}

				{#if buttonText && href}
					<div class="mt-8">
						<a
							{href}
							class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/12"
						>
							{buttonText}
							<svg width="18" height="18" viewBox="0 0 20 20" fill="none">
								<path
									d="M4 10h12M11 5l5 5-5 5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a>
					</div>
				{/if}
			</div>
		</AnimatedBlock>
	</div>
</section>
