<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    let scrollY = $state(0);
    let innerHeight = $state(1000);
    let innerWidth = $state(1000);
    let container = $state<HTMLElement | null>(null);

    const blocks = [
        {
            tag: "Perspectiva - CID H54",
            title: "O Olhar Clínico para o Contraste",
            text: "Ter baixa visão não é um obstáculo, mas minha maior ferramenta de QA. Isso me força a projetar com uma obsessão natural pela legibilidade e pelo contraste perfeito em qualquer condição de iluminação.",
            icon: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z",
            color: "#3b82f6",
            bgColor: "#020617"
        },
        {
            tag: "Arquitetura Semântica",
            title: "Código que Fala e se Expressa",
            text: "Acessibilidade começa no HTML. Construo aplicações onde a estrutura de dados e a semântica são tão priorizadas quanto a interface visual, garantindo que leitores de tela e tecnologias assistivas naveguem com fluidez.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            color: "#10b981",
            bgColor: "#06100c"
        },
        {
            tag: "UX Universal",
            title: "Interfaces Sem Barreiras Digitais",
            text: "Um design de elite é aquele que todos conseguem usar. Foco em interfaces que respeitam a diversidade humana, com foco em navegação por teclado, hierarquia visual clara e padrões de interação intuitivos.",
            icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
            color: "#6366f1",
            bgColor: "#080b1a"
        },
        {
            tag: "Inclusão & Velocidade",
            title: "Acessibilidade é Performance",
            text: "Código acessível é código otimizado. Ao seguir rigorosamente os padrões W3C, minhas aplicações não são apenas inclusivas, mas também mais rápidas, fáceis de indexar pelo Google e sustentáveis a longo prazo.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            color: "#f59e0b",
            bgColor: "#100902"
        }
    ];

    let progress = $derived.by(() => {
        const _ = scrollY;
        if (!container) return 0;
        const rect = container.getBoundingClientRect();
        const maxScroll = rect.height - innerHeight;
        const scrolled = -rect.top;
        return Math.max(0, Math.min(1, scrolled / maxScroll));
    });

    function getPlateauIntensity(blockIndex: number, prog: number) {
        const step = 1 / blocks.length;
        const start = blockIndex * step;
        const end = (blockIndex + 1) * step;
        const center = start + step / 2;
        if (prog < start || prog > end) return 1;
        const dist = Math.abs(prog - center);
        const normDist = dist / (step / 2);
        if (normDist < 0.4) return 0;
        return (normDist - 0.4) / 0.6; 
    }

    let currentBgColor = $derived.by(() => {
        const p = progress;
        const step = 1 / blocks.length;
        const index = Math.min(blocks.length - 2, Math.floor(p / step));
        const localProgress = (p % step) / step;
        return `color-mix(in srgb, ${blocks[index+1].bgColor}, ${blocks[index].bgColor} ${100 - localProgress * 100}%)`;
    });

    let titleIntensity = $derived.by(() => {
        const p = progress;
        // Entrance: Chaos -> Order (1 -> 0)
        if (p < 0.08) return (0.08 - p) / 0.08;
        // Exit: Order -> Chaos (0 -> 1)
        if (p > 0.92) return (p - 0.92) / 0.08;
        return 0;
    });

    // Stable seed-based random values to prevent per-frame jitter
    function getStableCharVars(charIndex: number, uniqueSeed: number = 0) {
        const seed = (charIndex + uniqueSeed) * 41;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };
        const respMult = innerWidth < 768 ? 0.35 : 1;
        return `
            --ox: ${(random(seed) - 0.5) * 1400 * respMult}px;
            --oy: ${(random(seed+1) - 0.5) * 1000 * respMult}px;
            --oz: ${(random(seed+2) - 0.5) * 2000 * respMult}px;
            --rot: ${(random(seed+3) - 0.5) * 720}deg;
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<section 
    bind:this={container} 
    class="relative w-full h-[500vh]"
    style="background-color: {currentBgColor};"
>
    <!-- Elemento Sticky Central -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        
        <!-- Animated Main Title -->
        <div class="absolute top-12 md:top-20 text-center z-50">
            <span class="text-blue-500 font-bold uppercase tracking-[0.6em] text-[8px] md:text-[10px] mb-4 block opacity-50">Inclusion by Design</span>
            <h2 class="text-fluid-section font-black text-white/90 tracking-tighter perspective-[2000px] transform-style-[preserve-3d]">
                {#each "Visão Além dos Limites".split('') as char, i}
                    <span class="char" style="{getStableCharVars(i, 999)} --intensity: {titleIntensity};">
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                {/each}
            </h2>
        </div>

        <!-- Progress HUD -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <div class="w-full h-full max-w-6xl max-h-[600px] border border-white/[0.03] rounded-[4rem] flex flex-col items-center justify-center opacity-40">
                <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </div>
        </div>

        <!-- Content Stack Progressivo -->
        <div class="relative w-full max-w-6xl aspect-video flex items-center justify-center">
            {#each blocks as block, i}
                {@const intensity = getPlateauIntensity(i, progress)}
                {@const centerAt = i / blocks.length + (1 / (blocks.length * 2))}
                {@const dist = progress - centerAt}
                {@const absDist = Math.abs(dist)}
                {@const isActive = absDist < 0.12}

                <div 
                    class="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-0"
                    style="
                        opacity: {1 - intensity};
                        transform: perspective(2500px) translate3d(0, 0, {-absDist * 4000}px);
                        filter: blur({intensity * 10}px);
                        pointer-events: {isActive ? 'all' : 'none'};
                        z-index: {Math.floor(100 - absDist * 100)};
                    "
                >
                    <!-- Icon Glass Premium -->
                    <div 
                        class="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-3xl shadow-2xl transition-all duration-700"
                        style="color: {block.color}; transform: rotate({intensity * 45}deg) scale({1 - intensity * 0.5});"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <path d={block.icon} />
                            {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                        </svg>
                    </div>

                    <span class="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4">{block.tag}</span>
                    <h3 class="text-fluid-title font-black text-white mb-6 leading-[0.9] tracking-tighter perspective-[1500px] transform-style-[preserve-3d]">
                        {#each block.title.split('') as char, idx}
                            <span class="char" style="{getStableCharVars(idx, (i+1)*100)} --intensity: {intensity};">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        {/each}
                    </h3>
                    <p class="text-white/70 text-fluid-body font-light max-w-2xl leading-relaxed text-balance transition-all duration-700" style="opacity: {1 - intensity}; transform: translateY({intensity * 20}px);">
                        {block.text}
                    </p>
                </div>
            {/each}
        </div>

        <!-- Scroll Indicator Refinado -->
        <div class="absolute bottom-16 flex flex-col items-center gap-4 transition-opacity duration-500" style="opacity: {progress > 0.05 && progress < 0.95 ? 0.6 : 0};">
            <div class="w-[1px] h-20 bg-white/5 relative overflow-hidden">
                <div class="absolute inset-0 bg-blue-500/30 transition-all duration-300 ease-linear shadow-[0_0_15px_#3b82f6]" style="height: {progress * 100}%;"></div>
            </div>
            <span class="text-[8px] uppercase tracking-[0.6em] font-black text-white/20 tabular-nums">Inclusão {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
    }

    .char {
        display: inline-block;
        will-change: transform, opacity;
        transform: translate3d(
            calc(var(--ox) * var(--intensity)), 
            calc(var(--oy) * var(--intensity)), 
            calc(var(--oz) * var(--intensity))
        ) rotate(calc(var(--rot) * var(--intensity)));
        opacity: calc(1 - var(--intensity));
        transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
    }
</style>
