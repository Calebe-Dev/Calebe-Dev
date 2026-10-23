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

<section id="blog" class="py-32 relative overflow-hidden text-center md:text-left text-white max-w-7xl mx-auto px-4 sm:px-6">
    <div class="bg-slate-900/40 backdrop-blur-3xl border border-white/5 rounded-[3.5rem] p-8 md:p-16 lg:p-20 relative shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
        
        <!-- Fundo Interno Subtil -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-transparent pointer-events-none"></div>

		<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 relative z-10">
			<div class="max-w-2xl">
                <!-- Informações do Sistema -->
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/60 tracking-widest uppercase flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                        SvelteKit Natively
                    </span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-white/60 tracking-widest uppercase flex items-center gap-2">
                        <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        Markdown Render (.md)
                    </span>
                </div>

				<h2 class="text-4xl md:text-6xl font-black mb-6 tracking-tighter" data-aos="fade-up">
					Insights & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Artigos</span>
				</h2>
				<p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed text-balance" data-aos="fade-up" data-aos-delay="100">
					Explorando arquitetura frontend, design premium e tecnologias reais que rodam na base da minha infraestrutura.
				</p>
			</div>
			
			<div data-aos="fade-left" data-aos-delay="200">
				<a href="/blog" class="group px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full text-xs font-bold transition-all duration-500 uppercase tracking-widest border border-white/10 hover:border-white/30 flex items-center justify-center md:justify-start gap-3 shrink-0 text-white shadow-lg mx-auto md:mx-0">
					Ver Todos os Artigos
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-1.5 transition-transform duration-300">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>

		{#if posts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
				{#each posts as post, i}
					<div data-aos="fade-up" data-aos-delay={300 + (i * 100)} class="h-full">
						<BlogCard {post} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="py-20 text-center border border-dashed border-white/10 rounded-[2.5rem] bg-white/5 relative z-10">
				<p class="text-slate-400">Carregando artigos do sistema...</p>
			</div>
		{/if}
	</div>
</section>
