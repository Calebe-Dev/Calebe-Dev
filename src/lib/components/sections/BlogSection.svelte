<script lang="ts">
	import { onMount } from 'svelte';
	import type { BlogPost } from '$lib/types/blog';
	import BlogCard from '$lib/components/ui/BlogCard.svelte';
	
	let posts: BlogPost[] = $state([]);
    let scrollY = $state(0);
    let container = $state<HTMLElement | null>(null);
    let isVisible = $state(false);

    $effect(() => {
        const _ = scrollY;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            isVisible = true;
        }
    });
	
	onMount(async () => {
		const { getPosts } = await import('$lib/utils/blog');
		const allPosts = await getPosts();
		posts = allPosts.slice(0, 3);
	});

    function getCharStyle(char: string, index: number, visible: boolean) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        if (visible) return 'display: inline-block;';
        
        const seed = index * 27;
        const random = (s: number) => Math.sin(s) * 10000 - Math.floor(Math.sin(s) * 10000);
        
        const intensity = 1;
        const offsetX = (random(seed) - 0.5) * 1000 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 500 * intensity;
        const offsetZ = -1200 * intensity;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotate(${random(seed+2)*180}deg);
            opacity: 0;
            filter: blur(10px);
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
            transition-delay: ${index * 0.02}s;
        `;
    }
</script>

<section 
    bind:this={container}
    id="blog" 
    class="py-40 relative overflow-hidden text-center md:text-left text-white max-w-7xl mx-auto px-8"
>
    <!-- Glassmorphism Container -->
    <div 
        class="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-20 relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-1000"
        style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 60}px);"
    >
        
        <!-- Depth Decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>

		<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12 relative z-10">
			<div class="max-w-2xl">
                <!-- System Badges -->
                <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 transition-all duration-700 delay-300" style="opacity: {isVisible ? 0.6 : 0};">
                    <span class="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/40 tracking-[0.4em] uppercase flex items-center gap-3">
                        <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]"></span>
                        SvelteKit Logic
                    </span>
                    <span class="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black text-white/40 tracking-[0.4em] uppercase flex items-center gap-3">
                        <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Unified MD
                    </span>
                </div>

				<h2 class="text-fluid-section font-black mb-8 tracking-tighter leading-none">
                    {#each "INSIGHTS &".split('') as char, i}
                        <span style={getCharStyle(char, i, isVisible)}>{char}</span>
                    {/each}
                    <br/>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        {#each "ARTIGOS".split('') as char, i}
                            <span style={getCharStyle(char, i + 12, isVisible)}>{char}</span>
                        {/each}
                    </span>
				</h2>
				<p class="text-slate-400 text-xl font-light leading-relaxed text-balance transition-all duration-1000 delay-500" style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 20}px);">
					Arquitetura de software, design premium e estratégias de engenharia validadas em produção.
				</p>
			</div>
			
			<div class="transition-all duration-1000 delay-700" style="opacity: {isVisible ? 1 : 0};">
				<a href="/blog" class="group px-10 py-5 bg-white/5 hover:bg-white text-white hover:text-black rounded-full text-[10px] font-black transition-all duration-500 uppercase tracking-[0.3em] border border-white/10 hover:border-transparent flex items-center gap-4 shadow-2xl">
					Explorar Blog
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="transform group-hover:translate-x-2 transition-transform duration-300">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>

		{#if posts.length > 0}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 transition-all duration-1000 delay-[900ms]" style="opacity: {isVisible ? 1 : 0}; transform: translateY({isVisible ? 0 : 40}px);">
				{#each posts as post, i}
					<div class="h-full">
						<BlogCard {post} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="py-32 text-center border border-dashed border-white/10 rounded-[3rem] bg-white/[0.01] relative z-10">
				<div class="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
				<p class="text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">Sincronizando Artigos...</p>
			</div>
		{/if}
	</div>
</section>
