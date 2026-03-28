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
        if (progress < plateauStart) return Math.min(1, (plateauStart - progress) * 5);
        if (progress > plateauEnd) return Math.min(1, (progress - plateauEnd) * 5);
        return 0; // Locked in the center (fully visible)
    });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[300vh] bg-black text-white overflow-clip" 
    itemscope itemtype="https://schema.org/AboutPage"
>
    <!-- Background dynamic depth -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(59,130,246,0.06),_transparent_60%)] pointer-events-none"></div>
    
    <!-- Sticky Content -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        
        <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            <!-- Left: Clean Solid Title with Blur Transition -->
            <div 
                class="text-left transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
                style="opacity: {1 - assemblyIntensity}; filter: blur({assemblyIntensity * 12}px); transform: translateY({assemblyIntensity * 40}px);"
            >
                <span class="text-blue-500 font-bold uppercase tracking-[0.5em] text-[10px] mb-8 block opacity-40">Resumo Profissional</span>
                
                <h2 class="text-fluid-title font-black tracking-tighter mb-10 leading-[0.9] text-balance" itemprop="name">
                    Engenharia de Software <br/> 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">& Arte Digital</span>
                </h2>
                
                <div class="h-1 w-24 bg-blue-600/40"></div>
            </div>

            <!-- Right: Content Cards with elevation -->
            <div 
                class="flex flex-col gap-8 transition-all duration-1000 ease-out" 
                style="opacity: {1 - assemblyIntensity}; transform: translateX({assemblyIntensity * 80}px) translateZ({-assemblyIntensity * 400}px); filter: blur({assemblyIntensity * 10}px);"
            >
                <article 
                    class="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl hover:border-white/10 transition-all duration-700 group cursor-default" 
                    itemprop="mainEntity" itemscope itemtype="https://schema.org/Person"
                >
                    <p class="text-slate-400 font-light leading-relaxed text-lg lg:text-xl text-balance" itemprop="description">
                        Desenvolvedor Full Stack especializado em ecossistemas <strong class="text-white">SvelteKit</strong>, <strong class="text-white">TypeScript</strong> e infraestrutura <strong class="text-white">Cloudflare</strong>. 
                        Atuo na arquitetura de soluções robustas, conectando front-end premium e sistemas de <strong class="text-blue-400">CRM proprietários</strong>.
                    </p>
                </article>

                <div 
                    class="p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl hover:border-white/10 transition-all duration-700 flex items-center justify-between group" 
                    itemprop="hasCredential" itemscope itemtype="https://schema.org/EducationalOccupationalCredential"
                >
                    <div>
                        <h4 class="text-white font-black text-xl lg:text-2xl mb-2 tracking-tight" itemprop="name">Análise e Desenvolvimento</h4>
                        <p class="text-slate-500 text-sm font-bold tracking-widest uppercase opacity-70">Formação Acadêmica (Cursando)</p>
                    </div>
                    <div class="w-16 h-16 rounded-[1.5rem] bg-blue-600/10 text-blue-500 border border-blue-500/10 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section Sync Indicator -->
        <div class="absolute bottom-12 flex items-center gap-6 opacity-20">
            <span class="text-[9px] font-black tracking-widest uppercase tabular-nums">Bio Analysis {Math.floor(progress * 100)}%</span>
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
