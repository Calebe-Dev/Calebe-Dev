<script lang="ts">
    import { onMount } from 'svelte';
    
    // CID H54 - Baixa Visão
    const title = "Visão Além do Código";
    const badge = "CID H54 • Baixa Visão";
    const description = "Ter baixa visão não é uma limitação para meu trabalho, mas sim o meu maior catalisador de qualidade. Minha condição me deu um 'olhar' clínico para acessibilidade (A11y) que vai além de checklists: é uma experiência vivida.";
    const secondaryText = "Isso se traduz em interfaces com contraste impecável, tipografia rigorosamente legível e um código semanticamente perfeito que respeita todos os usuários, independentemente de como eles interagem com a web.";
</script>

<section class="relative py-32 md:py-48 bg-[#050505] text-white overflow-hidden border-y border-white/5">
    <!-- Efeito de Lente / Brilho de Fundo -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
    
    <div class="max-w-7xl mx-auto px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <!-- Esquerda: Visual "Lens" Inspirado na Apple -->
            <div class="lg:col-span-5 flex justify-center lg:justify-start" data-aos="fade-right">
                <div class="relative w-64 h-64 md:w-80 md:h-80">
                    <!-- Círculos concêntricos de vidro -->
                    <div class="absolute inset-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] animate-[pulse_8s_infinite]"></div>
                    <div class="absolute inset-4 rounded-full border border-white/5 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                    
                    <!-- Ícone Central -->
                    <div class="absolute inset-0 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 opacity-80">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z"/>
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M12 8a4.97 4.97 0 0 1 3.5 1.5"/>
                        </svg>
                    </div>

                    <!-- Badge do CID flutuante -->
                    <div class="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl shadow-2xl">
                        <span class="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase">{badge}</span>
                    </div>
                </div>
            </div>

            <!-- Direita: Conteúdo -->
            <div class="lg:col-span-7" data-aos="fade-left">
                <span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Inclusão & Performance</span>
                
                <h2 class="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-[1.1] text-balance">
                    {title}
                </h2>
                
                <div class="space-y-6 max-w-2xl">
                    <p class="text-xl md:text-2xl text-slate-200 font-light leading-snug">
                        {description}
                    </p>
                    
                    <p class="text-base text-slate-400 font-light leading-relaxed border-l-2 border-blue-500/30 pl-8 py-2">
                        {secondaryText}
                    </p>

                    <div class="pt-8 flex flex-wrap gap-4">
                        <div class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400">Contrast Optimization</div>
                        <div class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400">W3C Standards</div>
                        <div class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-slate-400">Inclusive Design</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>

<style>
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.05); opacity: 1; }
    }
</style>
