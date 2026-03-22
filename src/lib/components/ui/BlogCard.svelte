<script lang="ts">
	import type { BlogPost } from '$lib/types/blog';
	export let post: BlogPost;
</script>

<a href="/blog/{post.slug}" class="group relative flex flex-col h-full bg-white/5 border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm">
	<div class="relative h-56 w-full overflow-hidden">
		{#if post.coverImage}
			<img src={post.coverImage} alt={post.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
		{:else}
			<div class="w-full h-full bg-gradient-to-br from-blue-900/40 to-slate-900/80 backdrop-blur-md"></div>
		{/if}
		<div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
		
		<div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
			<span class="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-white/90 border border-white/10 uppercase tracking-widest font-medium">
				{new Date(post.date).toLocaleDateString('pt-BR', { month: 'short', day: '2-digit', year: 'numeric' })}
			</span>
			{#if post.readTime}
				<span class="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] text-white/90 border border-white/10 flex items-center gap-1.5 uppercase tracking-widest font-medium">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
					{post.readTime}
				</span>
			{/if}
		</div>
	</div>

	<div class="p-6 flex flex-col flex-grow bg-slate-900/50">
		<h3 class="text-xl font-medium text-slate-100 mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
			{post.title}
		</h3>
		<p class="text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
			{post.excerpt}
		</p>
		
		<div class="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors duration-300 uppercase tracking-widest font-medium">
			<span>Ler Artigo</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover:translate-x-2 transition-transform duration-300">
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<polyline points="12 5 19 12 12 19"></polyline>
			</svg>
		</div>
	</div>
</a>
