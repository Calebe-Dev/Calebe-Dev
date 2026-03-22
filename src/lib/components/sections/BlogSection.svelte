<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/types/blog';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	
	let posts: BlogPost[] = [];
	
	onMount(async () => {
		const { getPosts } = await import('$lib/utils/blog');
		const allPosts = await getPosts();
		posts = allPosts.slice(0, 3);
	});
</script>

<section id="blog" class="py-24 relative bg-slate-900 border-t border-white/5">
	<div class="container mx-auto px-6 max-w-6xl relative z-10">
		<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
			<div class="max-w-2xl">
				<h2 class="text-3xl md:text-5xl font-medium text-slate-100 mb-6 tracking-tight" data-aos="fade-up">
					Insights & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Artigos</span>
				</h2>
				<p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed" data-aos="fade-up" data-aos-delay="100">
					Explorando arquitetura frontend, design premium e tecnologias que moldam o futuro do desenvolvimento web.
				</p>
			</div>
			
			<div data-aos="fade-left" data-aos-delay="200">
				<a href="/blog" class="group px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-xs transition-all duration-500 uppercase tracking-widest border border-white/5 hover:border-white/20 flex items-center gap-3 shrink-0 text-white/80 hover:text-white">
					Ver Todos
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1 transition-transform duration-300">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>

		{#if posts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each posts as post, i}
					<div data-aos="fade-up" data-aos-delay={300 + (i * 100)}>
						<BlogCard {post} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="py-20 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
				<p class="text-slate-400">Carregando artigos...</p>
			</div>
		{/if}
	</div>
</section>
