<script lang="ts">
    import { onMount } from 'svelte';

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

    // Plateau Logic: Focus from 30% to 70% of the section progress
    const plateauStart = 0.3;
    const plateauEnd = 0.7;
    
    let assemblyIntensity = $derived.by(() => {
        if (progress < plateauStart) return Math.min(1, (plateauStart - progress) * 4);
        if (progress > plateauEnd) return Math.min(1, (progress - plateauEnd) * 4);
        return 0; // Locked in the center
    });

    const titleParts = ["Engenharia de Software", "& Arte Digital"];
    
    function getCharStyle(char: string, partIndex: number, charIndex: number, intensity: number) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        
        const seed = (partIndex * 100) + charIndex;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        const offsetX = (random(seed) - 0.5) * 1500 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 1000 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 3000 * intensity;
        const rotateX = (random(seed + 3) - 0.5) * 360 * intensity;
        const rotateY = (random(seed + 4) - 0.5) * 360 * intensity;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg);
            opacity: ${1 - (intensity * 0.9)};
            filter: blur(${intensity * 10}px);
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out;
            will-change: transform, opacity;
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[300vh] bg-black text-white overflow-clip" 
    itemscope itemtype="https://schema.org/AboutPage"
>
    <!-- Background dynamic depth -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(59,130,246,0.08),_transparent_60%)] pointer-events-none"></div>
    
    <!-- Sticky Content -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        
        <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <!-- Left: 3D Assembly Title -->
            <div class="text-left perspective-[2000px]">
                <span class="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-40">Resumo Profissional</span>
                
                <h1 class="text-fluid-title font-black tracking-tighter mb-10 leading-[0.9] text-balance" itemprop="name">
                    {#each ["Líder Técnico", "& Engenheiro Full Stack"] as part, i}
                        <div class="block">
                            {#each part.split(' ') as word, j}
                                <span class="inline-block">
                                    {#each word.split('') as char, k}
                                        <span style={getCharStyle(char, i, j * 20 + k, assemblyIntensity)}>{char}</span>
                                    {/each}
                                    <span style="display: inline-block; width: 0.25em;">&nbsp;</span>
                                </span>
                            {/each}
                        </div>
                    {/each}
                </h1>
                
                <div class="h-1 w-24 bg-blue-600/40 transition-all duration-1000" style="transform: scaleX({1 - assemblyIntensity}); transform-origin: left;"></div>
            </div>

            <!-- Right: Content Cards -->
            <div class="flex flex-col gap-6">
                <!-- Resumo -->
                <article class="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:border-white/20 transition-all duration-500" itemprop="mainEntity" itemscope itemtype="https://schema.org/Person">
                    <p class="text-slate-300 font-light leading-relaxed text-lg" itemprop="description">
                        Especialista em ecossistemas <strong>SvelteKit</strong>, <strong>TypeScript</strong> e infraestrutura de alta performance com <strong>Cloudflare Zero Trust</strong>. Atuo como <strong>Tech Lead</strong>, arquitetando soluções escaláveis que conectam interfaces premium a back-ends robustos em <strong>Node.js</strong> e sistemas <strong>CRM proprietários</strong>. Foco total em entregar resultados de negócio através de <strong>SEO Técnico</strong> agressivo e <strong>AEO</strong> (Answer Engine Optimization).
                    </p>
                </article>

                <!-- Formação -->
                <div 
                    class="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl hover:border-white/10 transition-all duration-700 flex items-center justify-between group" 
                    itemprop="hasCredential" itemscope itemtype="https://schema.org/EducationalOccupationalCredential"
                >
                    <div>
                        <h4 class="text-white font-black text-xl lg:text-2xl mb-2 tracking-tight" itemprop="name">Análise e Desenvolvimento</h4>
                        <p class="text-slate-500 text-sm font-bold tracking-widest uppercase opacity-70">Formação Acadêmica (Cursando)</p>
                    </div>
                    <div class="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 text-blue-500 border border-blue-500/10 flex items-center justify-center shrink-0 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Hudson HUD (Niche Touch) -->
        <div class="absolute bottom-12 flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-700">
            <span class="text-[9px] font-black tracking-widest uppercase">Bio Sync {Math.floor(progress * 100)}%</span>
            <div class="w-32 h-[1px] bg-white/10 overflow-hidden">
                <div class="h-full bg-blue-500 transition-all duration-100 ease-linear" style="width: {progress * 100}%;"></div>
            </div>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>
