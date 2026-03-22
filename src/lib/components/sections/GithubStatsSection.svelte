<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const GITHUB_USERNAME = 'Calebe-Dev';
	
	let repos = tweened(0, { duration: 2500, easing: cubicOut });
	let followers = tweened(0, { duration: 2500, easing: cubicOut });
	let stars = tweened(0, { duration: 2500, easing: cubicOut });

	let loading = $state(true);
	let error = $state(false);

	onMount(async () => {
		try {
			// Fetch User Data from GitHub API
			const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
			if (!userRes.ok) throw new Error('API Rate Limit or Not Found');
			const userData = await userRes.json();
			
			// Fetch Repos to aggregate Stats
			const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
			let totalStars = 0;
			if (reposRes.ok) {
				const reposData = await reposRes.json();
				totalStars = reposData.reduce((acc: number, curr: any) => acc + curr.stargazers_count, 0);
			}

			repos.set(userData.public_repos || 0);
			followers.set(userData.followers || 0);
			stars.set(totalStars);
		} catch (err) {
			console.error('Failed to sync to GitHub API:', err);
			error = true;
		} finally {
			loading = false;
		}
	});

    const format = (num: number) => Math.floor(num).toString();
</script>

<section class="py-32 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden">
    <!-- Matrix/Grid Background -->
    <div class="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_100%)] pointer-events-none"></div>

    <!-- Soft glow in center -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.1)_0%,transparent_50%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-8 relative z-10">
        <div class="flex flex-col md:flex-row items-center gap-16 justify-between">
            
            <div class="text-center md:text-left max-w-xl">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-emerald-500/20 mb-6 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span class="w-2 h-2 rounded-full bg-emerald-500 absolute"></span>
                    <span class="text-xs font-mono text-emerald-400 font-bold tracking-widest pl-2">api.github.com/sync</span>
                </div>

                <h2 class="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-white text-balance drop-shadow-sm">
                    Código <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Aberto</span>.
                </h2>

                <p class="text-slate-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-lg md:mx-0 mx-auto">
                    Acompanhamento em <span class="font-bold text-white">tempo real</span> das minhas contribuições, projetos públicos e do impacto gerado no ecossistema open-source.
                </p>

                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-emerald-400 rounded-full transition-all duration-300 font-bold tracking-wide group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="group-hover:scale-110 transition-transform"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Acessar Perfil
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
            </div>

            <div class="w-full md:w-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <!-- Repos -->
                <div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-emerald-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                    <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-emerald-400 border border-emerald-500/10 shadow-[0_0_15px_rgba(52,211,153,0.0)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    </div>
                    <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-emerald-400 transition-colors drop-shadow-sm">
                        {#if loading}
                            ...
                        {:else if error}
                            --
                        {:else}
                            {format($repos)}
                        {/if}
                    </div>
                    <div class="text-emerald-500/80 text-xs font-bold tracking-[0.2em] uppercase">Repositórios</div>
                </div>

                <!-- Stars -->
                <div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                    <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-cyan-400 border border-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-cyan-400 transition-colors drop-shadow-sm">
                        {#if loading}
                            ...
                        {:else if error}
                            --
                        {:else}
                            {format($stars)}
                        {/if}
                    </div>
                    <div class="text-cyan-500/80 text-xs font-bold tracking-[0.2em] uppercase">Estrelas</div>
                </div>

                <!-- Followers -->
                <div class="p-8 pb-10 rounded-[2rem] bg-slate-900/60 border border-slate-800 backdrop-blur-2xl hover:border-fuchsia-500/30 hover:bg-slate-900 transition-all duration-500 group text-center md:text-left sm:col-span-2 md:col-span-1 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                    <div class="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform text-fuchsia-400 border border-fuchsia-500/10 shadow-[0_0_15px_rgba(232,121,249,0.0)] group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div class="text-5xl font-black text-white mb-2 tracking-tighter group-hover:text-fuchsia-400 transition-colors drop-shadow-sm">
                        {#if loading}
                            ...
                        {:else if error}
                            --
                        {:else}
                            {format($followers)}
                        {/if}
                    </div>
                    <div class="text-fuchsia-500/80 text-xs font-bold tracking-[0.2em] uppercase">Seguidores</div>
                </div>
            </div>

        </div>
    </div>
</section>
