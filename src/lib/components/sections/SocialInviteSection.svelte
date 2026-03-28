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

    // Plateau logic for focus
    let intensity = $derived.by(() => {
        if (progress < 0.25) return (0.25 - progress) * 4;
        if (progress > 0.75) return (progress - 0.75) * 4;
        return 0;
    });

    function getCharStyle(char: string, index: number, intel: number) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        const seed = index * 49;
        const random = (s: number) => Math.sin(s) * 10000 - Math.floor(Math.sin(s) * 10000);
        return `
            display: inline-block;
            transform: translate3d(${(random(seed)-0.5)*1500*intel}px, ${(random(seed+1)-0.5)*1000*intel}px, ${-intel*3000}px) rotate(${(random(seed+2)-0.5)*360*intel}deg);
            opacity: ${1 - intel};
            filter: blur(${intel * 15}px);
            transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container}
    class="relative w-full h-[200vh] bg-black text-white overflow-clip border-t border-white/5"
>
    <!-- Background Depth -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_rgba(59,130,246,0.05),_transparent_60%)] pointer-events-none"></div>

    <!-- Sticky Visual Step -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        
        <div class="text-center mb-24 z-20">
            <span class="text-blue-500 font-bold uppercase tracking-[0.6em] text-[9px] mb-8 block opacity-40 transition-all duration-700" style="opacity: {1 - intensity}; transform: translateY({intensity * 20}px);">Networking de Elite</span>
            <h2 class="text-fluid-title font-black tracking-tighter mb-8 leading-none">
                {#each "REDES".split('') as char, i}
                    <span style={getCharStyle(char, i, intensity)}>{char}</span>
                {/each}
                <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    {#each "PROFISSIONAIS".split('') as char, i}
                        <span style={getCharStyle(char, i + 10, intensity)}>{char}</span>
                    {/each}
                </span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto text-lg md:text-xl font-light leading-relaxed transition-all duration-1000" style="opacity: {1 - intensity}; transform: translateZ({-intensity * 500}px);">
                Acompanhe insights técnicos, bastidores de infraestrutura e meu lifestyle dev em tempo real.
            </p>
        </div>

        <!-- Social Cards Bento -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl transition-all duration-1000" style="opacity: {1 - intensity}; transform: translateY({intensity * 100}px) scale({1 - intensity * 0.1});">
            
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="group relative bg-[#0a66c2]/10 p-12 rounded-[4rem] overflow-hidden flex flex-col justify-between min-h-[380px] border border-white/5 hover:border-blue-500/30 transition-all duration-700 shadow-2xl backdrop-blur-3xl">
                <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
                
                <div class="relative z-10 text-white">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                    
                    <h3 class="text-4xl font-black mb-6 tracking-tight">Conecte-se</h3>
                    <p class="text-white/40 font-light leading-snug text-lg max-w-sm">Junte-se ao meu networking B2B e acompanhe artigos técnicos aprofundados.</p>
                </div>
                
                <div class="relative z-10 flex items-center justify-between mt-12 w-full pt-8 border-t border-white/5">
                    <span class="text-white/20 font-black uppercase tracking-[0.4em] text-[9px]">Acessar LinkedIn</span>
                    <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </div>
                </div>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/calebe.dev" target="_blank" rel="noopener noreferrer" class="group relative bg-white/[0.02] p-12 rounded-[4rem] overflow-hidden flex flex-col justify-between min-h-[380px] border border-white/5 hover:border-pink-500/30 transition-all duration-700 shadow-2xl backdrop-blur-3xl">
                <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-20"></div>
                
                <div class="relative z-10 text-white">
                    <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    
                    <h3 class="text-4xl font-black mb-6 tracking-tight">Bastidores</h3>
                    <p class="text-white/40 font-light leading-snug text-lg max-w-sm">O lado humano do código. Setup físico, rotina técnica e lifestyle dev.</p>
                </div>
                
                <div class="relative z-10 flex items-center justify-between mt-12 w-full pt-8 border-t border-white/5">
                    <span class="text-white/20 font-black uppercase tracking-[0.4em] text-[9px]">Acessar Instagram</span>
                    <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-tr from-[#dc2743] to-[#bc1888] transition-all duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                    </div>
                </div>
            </a>
        </div>

        <div class="absolute bottom-12 flex items-center gap-6 opacity-20">
            <span class="text-[9px] font-black tracking-widest uppercase tabular-nums">Network Ping: 22ms</span>
            <div class="w-24 h-[1px] bg-white/10"></div>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>
