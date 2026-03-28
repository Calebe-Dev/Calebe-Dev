<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let scrollY = $state(0);
    let innerHeight = $state(1000);
    let container = $state<HTMLElement | null>(null);

    const blocks = [
        {
            tag: "Perspectiva - CID H54",
            title: "O Olhar Clínico para o Contraste",
            text: "Ter baixa visão não é um obstáculo, mas minha maior ferramenta de QA. Isso me força a projetar com uma obsessão natural pela legibilidade e pelo contraste perfeito em qualquer condição de iluminação.",
            icon: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z",
            color: "#3b82f6" // Blue
        },
        {
            tag: "Arquitetura Semântica",
            title: "Código que Fala e se Expressa",
            text: "Acessibilidade começa no HTML. Construo aplicações onde a estrutura de dados e a semântica são tão priorizadas quanto a interface visual, garantindo que leitores de tela e tecnologias assistivas naveguem com fluidez.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            color: "#10b981" // Emerald
        },
        {
            tag: "UX Universal",
            title: "Interfaces Sem Barreiras Digitais",
            text: "Um design de elite é aquele que todos conseguem usar. Foco em interfaces que respeitam a diversidade humana, com foco em navegação por teclado, hierarquia visual clara e padrões de interação intuitivos.",
            icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
            color: "#6366f1" // Indigo
        },
        {
            tag: "Inclusão & Velocidade",
            title: "Acessibilidade é Performance",
            text: "Código acessível é código otimizado. Ao seguir rigorosamente os padrões W3C, minhas aplicações não são apenas inclusivas, mas também mais rápidas, fáceis de indexar pelo Google e sustentáveis a longo prazo.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            color: "#f59e0b" // Amber
        }
    ];

    let progress = $derived.by(() => {
        // Registrar dependência para o Svelte recomputar no scroll
        const _ = scrollY;
        
        if (!container) return 0;
        const rect = container.getBoundingClientRect();
        const maxScroll = rect.height - innerHeight;
        const scrolled = -rect.top;
        return Math.max(0, Math.min(1, scrolled / maxScroll));
    });

    // Interpolate background color - Slate/Indigo Theme
    const colors = ["#020617", "#0f172a", "#1e1b4b", "#020617"];
    let bgColor = $derived.by(() => {
        const step = 1 / (colors.length - 1);
        const index = Math.min(colors.length - 2, Math.floor(progress / step));
        const localProgress = (progress % step) / step;
        return `color-mix(in srgb, ${colors[index+1]}, ${colors[index]} ${100 - localProgress * 100}%)`;
    });

</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[500vh] transition-colors duration-700 ease-linear"
    style="background-color: {bgColor};"
>
    <!-- Elemento Sticky Central -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <!-- Depth Visual (Partículas de Brilho) -->
        <div class="absolute inset-0 pointer-events-none opacity-30">
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <!-- Cabeçalho Fixo (Mais sutil e integrado) -->
        <div class="absolute top-8 md:top-16 text-center z-50 px-6 transition-all duration-700" style="opacity: {progress < 0.9 ? 1 : 0}; transform: translateY({progress * -20}px);">
            <span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 md:mb-4 block">Inclusão sem Compromissos</span>
            <h2 class="text-fluid-section font-black text-white/90 tracking-tighter mix-blend-screen">Visão Além dos Limites</h2>
        </div>

        <!-- Content Stack Imersivo -->
        <div class="relative w-full max-w-5xl aspect-video flex items-center justify-center">
            {#each blocks as block, i}
                {@const centerAt = i / blocks.length + (1 / (blocks.length * 2))}
                {@const dist = progress - centerAt}
                {@const absDist = Math.abs(dist)}
                
                <!-- Intensidade da Transição 3D (Z-axis separation) -->
                {@const isActive = absDist < 0.12}
                {@const opacity = Math.max(0, 1 - (absDist / 0.15))}
                {@const scale = 0.6 + (1 - Math.min(1, absDist / 0.15)) * 0.4}
                {@const translateZ = -dist * 2500} <!-- Profundidade maior para evitar sobreposição -->
                {@const blur = absDist > 0.04 ? Math.min(12, (absDist - 0.04) * 60) : 0}

                <div 
                    class="absolute inset-0 flex flex-col items-center justify-center text-center px-10 md:px-0"
                    style="
                        opacity: {opacity};
                        transform: perspective(1500px) translate3d(0, 0, {translateZ}px) scale({scale});
                        filter: blur({blur}px);
                        pointer-events: {isActive ? 'all' : 'none'};
                        z-index: {Math.floor(100 - absDist * 100)};
                        transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    "
                >
                    <!-- Icon Glass Premium -->
                    <div 
                        class="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-2xl shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700"
                        style="color: {block.color};"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d={block.icon} />
                            {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                        </svg>
                    </div>

                    <span class="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4">{block.tag}</span>
                    <h3 class="text-fluid-title font-black text-white mb-6 leading-[0.9] text-balance">{block.title}</h3>
                    <p class="text-white/70 text-fluid-body font-light max-w-2xl leading-relaxed text-balance">
                        {block.text}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Scroll/Progress Indicator -->
        <div class="absolute bottom-12 flex flex-col items-center gap-3 transition-opacity duration-500" style="opacity: {progress > 0.05 && progress < 0.95 ? 0.6 : 0};">
            <div class="w-1.5 h-16 bg-white/5 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm">
                <div class="w-full bg-gradient-to-b from-blue-500 to-indigo-600 transition-all duration-150 ease-linear origin-top" style="height: {progress * 100}%;"></div>
            </div>
            <span class="text-[8px] uppercase tracking-[0.3em] font-bold text-white/30 tabular-nums">Inclusão {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(.experience-track) {
        z-index: 10;
    }
</style>
