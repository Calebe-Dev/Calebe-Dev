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
        if (!container) return 0;
        const rect = container.getBoundingClientRect();
        const maxScroll = rect.height - innerHeight;
        const scrolled = -rect.top;
        return Math.max(0, Math.min(1, scrolled / maxScroll));
    });

    // Interpolate background color
    const colors = ["#050505", "#0a0a0f", "#0f172a", "#050505"];
    let bgColor = $derived.by(() => {
        const step = 1 / (colors.length - 1);
        const index = Math.min(colors.length - 2, Math.floor(progress / step));
        const localProgress = (progress % step) / step;
        return `color-mix(in srgb, ${colors[index+1]}, ${colors[index]} ${100 - localProgress * 100}%)`;
    });

    function getBlockStyle(index: number) {
        const center = index / blocks.length + (1 / (blocks.length * 2));
        const distance = Math.abs(progress - center);
        const activeRange = 1 / blocks.length;
        
        // Intensidade da animação 3D
        const opacity = Math.max(0, 1 - (distance / (activeRange * 0.8)));
        const scale = 0.8 + (1 - distance / activeRange) * 0.4;
        const translateZ = (progress - center) * 1000; // Efeito de profundidade
        const blur = distance > activeRange * 0.2 ? Math.min(20, (distance - activeRange * 0.2) * 100) : 0;

        return `
            opacity: ${opacity};
            transform: perspective(1000px) translate3d(0, 0, ${-translateZ}px) scale(${scale});
            filter: blur(${blur}px);
            pointer-events: ${opacity > 0.5 ? 'auto' : 'none'};
            z-index: ${Math.floor(opacity * 100)};
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[500vh] transition-colors duration-700 ease-linear overflow-hidden"
    style="background-color: {bgColor};"
>
    <!-- Elemento Sticky Central -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <!-- Depth Visual (Partículas de Brilho) -->
        <div class="absolute inset-0 pointer-events-none opacity-30">
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <!-- Cabeçalho da Seção (Sempre visível mas atenuado no final) -->
        <div class="absolute top-12 md:top-24 text-center z-50 px-6 transition-opacity duration-500" style="opacity: {progress < 0.95 ? 1 : 0};">
            <span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Inclusão sem Compromissos</span>
            <h2 class="text-fluid-section font-black text-white tracking-tighter">Visão Além dos Limites</h2>
        </div>

        <!-- Content Stack -->
        <div class="relative w-full max-w-5xl h-full flex items-center justify-center">
            {#each blocks as block, i}
                <div 
                    class="absolute flex flex-col items-center text-center px-8 md:px-0"
                    style={getBlockStyle(i)}
                >
                    <!-- Icon Glass Circle -->
                    <div 
                        class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-xl shadow-2xl"
                        style="color: {block.color};"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d={block.icon} />
                            {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                        </svg>
                    </div>

                    <span class="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">{block.tag}</span>
                    <h3 class="text-3xl md:text-5xl font-black text-white mb-6 leading-none text-balance">{block.title}</h3>
                    <p class="text-white/70 text-fluid-body font-light max-w-2xl leading-relaxed text-balance">
                        {block.text}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Scroll Indicator (Internal) -->
        <div class="absolute bottom-12 flex flex-col items-center gap-2 transition-opacity" style="opacity: {progress < 0.9 ? 0.4 : 0};">
            <div class="w-1 h-12 bg-white/10 rounded-full overflow-hidden">
                <div class="w-full bg-blue-500 transition-all duration-100 ease-linear" style="height: {progress * 100}%;"></div>
            </div>
            <span class="text-[8px] uppercase tracking-widest text-white/40">Inclusão {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(.experience-track) {
        /* Garante que outras seções não sobreponham durante o sticky */
        z-index: 10;
    }
</style>
