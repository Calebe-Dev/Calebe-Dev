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

    // Final plateau for the last section
    const plateauStart = 0.2;
    let intensity = $derived.by(() => {
        if (progress < plateauStart) return Math.min(1, (plateauStart - progress) * 5);
        return 0; // Stays assembled until the very end
    });
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container}
    class="relative w-full h-[200vh] bg-black text-white overflow-clip border-t border-white/5"
>
    <!-- Final Atmospheric Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none"></div>

    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        
        <!-- Premium Glassmorphism Container (Solid Transition) -->
        <div 
            class="bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[4rem] p-12 md:p-24 text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden group w-full max-w-6xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
            style="opacity: {1 - intensity}; filter: blur({intensity * 15}px); transform: translateY({intensity * 50}px) scale({1 - intensity * 0.05});"
        >
            <div class="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
            <div class="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <!-- Focus Icon -->
            <div class="w-24 h-24 mx-auto bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] flex items-center justify-center mb-16 relative transform transition-transform duration-1000">
                <div class="absolute inset-0 bg-blue-500/10 rounded-[2.5rem] animate-ping opacity-20"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" class="text-blue-400 drop-shadow-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>

            <h2 class="text-fluid-section font-black tracking-tighter mb-10 leading-none uppercase">
                Vamos Construir <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Juntos</span>
            </h2>
            
            <p class="text-xl md:text-2xl text-slate-400 font-light mb-20 max-w-2xl mx-auto text-balance">
                O próximo nível da sua presença digital começa com uma engenharia de software implacável.
            </p>

            <!-- CTA Matrix -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-6">
                <a href="mailto:calebe.araujo101@gmail.com" class="group px-12 py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all duration-500 flex items-center gap-4 w-full md:w-auto shadow-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    E-mail Direto
                </a>
                
                <a href="https://wa.me/5511988385247" target="_blank" rel="noopener noreferrer" class="group px-12 py-6 bg-white/5 hover:bg-[#25D366]/10 text-white hover:text-[#25D366] rounded-full font-black text-xs uppercase tracking-[0.3em] border border-white/10 hover:border-[#25D366]/30 backdrop-blur-3xl transition-all duration-500 flex items-center gap-3 w-full md:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    WhatsApp
                </a>

                <a href="https://www.linkedin.com/in/calebe-dev" target="_blank" rel="noopener noreferrer" class="group px-12 py-6 bg-white/5 hover:bg-[#0a66c2]/10 text-white hover:text-[#0a66c2] rounded-full font-black text-xs uppercase tracking-[0.3em] border border-white/10 backdrop-blur-3xl transition-all duration-500 flex items-center gap-3 w-full md:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                </a>
            </div>
        </div>

        <!-- Footer Finisher -->
        <div class="absolute bottom-12 flex flex-col items-center gap-3 opacity-10">
            <span class="text-[8px] font-black tracking-[0.6em] uppercase">Built for Performance — 2026</span>
            <div class="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>
