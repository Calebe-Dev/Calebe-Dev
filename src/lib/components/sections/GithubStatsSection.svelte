<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
    import { get } from 'svelte/store';

	const GITHUB_USERNAME = 'Calebe-Dev';
	
	let repos = tweened(0, { duration: 2500, easing: cubicOut });
	let followers = tweened(0, { duration: 2500, easing: cubicOut });
	let stars = tweened(0, { duration: 2500, easing: cubicOut });

	let loading = $state(true);
	let error = $state(false);
    let scrollY = $state(0);
    let innerHeight = $state(1000);
    let container = $state<HTMLElement | null>(null);

    let progress = $derived.by(() => {
        const _ = scrollY;
        if (!container) return 0;
        const rect = container.getBoundingClientRect();
        const maxScroll = rect.height - innerHeight;
        const scrolled = -rect.top;
        return Math.max(0, Math.min(1, scrolled / maxScroll));
    });

    // Plateau for focus
    const plateauStart = 0.25;
    const plateauEnd = 0.75;

    let intensity = $derived.by(() => {
        if (progress < plateauStart) return Math.min(1, (plateauStart - progress) * 5);
        if (progress > plateauEnd) return Math.min(1, (progress - plateauEnd) * 5);
        return 0;
    });

	onMount(async () => {
		try {
			const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
			if (!userRes.ok) throw new Error('API Rate Limit');
			const userData = await userRes.json();
			
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
			error = true;
		} finally {
			loading = false;
		}
	});

    const format = (num: number) => Math.floor(num).toString();
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container}
    class="relative w-full h-[200vh] bg-black text-white overflow-clip border-t border-white/5"
>
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        
        <!-- Matrix/Grid Atmosphere -->
        <div class="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div class="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16 justify-between perspective-[2500px]">
            
            <!-- Left: Solid Clean Title -->
            <div 
                class="text-center md:text-left max-w-xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
                style="opacity: {1 - intensity}; filter: blur({intensity * 15}px); transform: translateY({intensity * 40}px);"
            >
                <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0:10px_#10b981]"></span>
                    <span class="text-[9px] font-black font-mono text-emerald-400 uppercase tracking-widest pl-2">api.github.com/sync</span>
                </div>

                <h2 class="text-fluid-title font-black mb-10 leading-none uppercase">
                    Código <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Aberto</span>
                </h2>

                <p class="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10 text-balance">
                    Acompanhamento em tempo real das minhas contribuições e do impacto gerado no ecossistema open-source.
                </p>

                <a 
                    href={`https://github.com/${GITHUB_USERNAME}`} 
                    target="_blank" 
                    class="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full transition-all duration-500 font-bold tracking-widest text-[10px] uppercase shadow-2xl"
                >
                    Inspecionar GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
            </div>

            <!-- Right: Stats Cards -->
            <div class="w-full md:w-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out" style="opacity: {1 - intensity}; transform: translateZ({-intensity * 600}px); filter: blur({intensity * 10}px);">
                {#each [
                    { label: 'Repositórios', val: repos, color: 'emerald', icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' },
                    { label: 'Estrelas', val: stars, color: 'cyan', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
                    { label: 'Seguidores', val: followers, color: 'fuchsia', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' }
                ] as stat, i}
                    <div class="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl">
                        <div class="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d={stat.icon}/></svg>
                        </div>
                        <div class="text-6xl font-black text-white mb-2 tracking-tighter tabular-nums">
                            {loading ? '...' : format(get(stat.val))}
                        </div>
                        <div class="text-white/30 text-[9px] font-black tracking-[0.4em] uppercase">{stat.label}</div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="absolute bottom-12 opacity-10 flex flex-col items-center gap-4">
            <span class="text-[8px] font-black tracking-[0.6em] uppercase tabular-nums">Sync Pulse: High</span>
            <div class="w-48 h-[1px] bg-white/20"></div>
        </div>
    </div>
</section>
