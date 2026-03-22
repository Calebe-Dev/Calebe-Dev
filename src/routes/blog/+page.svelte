<script lang="ts">
	import type { PageData } from './$types';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog - Calebe Araujo</title>
	<meta name="description" content="Artigos sobre desenvolvimento, frontend e design." />
</svelte:head>

<section class="min-h-screen pt-40 pb-24 relative bg-slate-900 overflow-hidden">
	<div class="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
	<div class="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

	<div class="container mx-auto px-6 max-w-6xl relative z-10" in:fade={{ duration: 800, delay: 200 }}>
		<div class="mb-16">
			<a href="/" class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-300 mb-8 uppercase tracking-widest font-medium">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
				Voltar ao Portfólio
			</a>
			<h1 class="text-4xl md:text-6xl font-medium text-slate-100 mt-2 mb-6 tracking-tight">
				Todos os <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Artigos</span>
			</h1>
			<p class="text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
				Explore todos os meus conteúdos publicados sobre desenvolvimento web, SvelteKit, Tailwind e arquitetura de software.
			</p>
		</div>

		{#if data.posts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each data.posts as post}
					<BlogCard {post} />
				{/each}
			</div>
		{:else}
			<div class="py-32 text-center border border-dashed border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
				<p class="text-slate-400 text-lg">Nenhum post encontrado no momento.</p>
			</div>
		{/if}
	</div>
</section>
