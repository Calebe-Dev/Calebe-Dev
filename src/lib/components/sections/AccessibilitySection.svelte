<script lang="ts">
    import { onMount } from 'svelte';

    let scrollY = $state(0);
    let innerHeight = $state(1000);
    let container = $state<HTMLElement | null>(null);

    const blocks = [
        {
            tag: "Perspectiva - CID H54",
            title: "O Olhar Clínico para o Contraste",
            text: "Ter baixa visão não é um obstáculo, mas minha maior ferramenta de QA. Isso me força a projetar com uma obsessão natural pela legibilidade e pelo contraste perfeito em qualquer condição de iluminação.",
            icon: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z",
            color: "#3b82f6",
            bgColor: "#020617" // Deep Blue
        },
        {
            tag: "Arquitetura Semântica",
            title: "Código que Fala e se Expressa",
            text: "Acessibilidade começa no HTML. Construo aplicações onde a estrutura de dados e a semântica são tão priorizadas quanto a interface visual, garantindo que leitores de tela e tecnologias assistivas naveguem com fluidez.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            color: "#10b981",
            bgColor: "#06100c" // Deep Emerald
        },
        {
            tag: "UX Universal",
            title: "Interfaces Sem Barreiras Digitais",
            text: "Um design de elite é aquele que todos conseguem usar. Foco em interfaces que respeitam a diversidade humana, com foco em navegação por teclado, hierarquia visual clara e padrões de interação intuitivos.",
            icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
            color: "#6366f1",
            bgColor: "#080b1a" // Deep Indigo
        },
        {
            tag: "Inclusão & Velocidade",
            title: "Acessibilidade é Performance",
            text: "Código acessível é código otimizado. Ao seguir rigorosamente os padrões W3C, minhas aplicações não são apenas inclusivas, mas também mais rápidas, fáceis de indexar pelo Google e sustentáveis a longo prazo.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            color: "#f59e0b",
            bgColor: "#100902" // Deep Amber/Charcoal
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

    // Interpolate background color with more distinct steps
    let bgColor = $derived.by(() => {
        const step = 1 / blocks.length;
        const index = Math.min(blocks.length - 1, Math.floor(progress / step));
        const nextIndex = Math.min(blocks.length - 1, index + 1);
        const localProgress = (progress % step) / step;
        return `color-mix(in srgb, ${blocks[nextIndex].bgColor}, ${blocks[index].bgColor} ${100 - localProgress * 100}%)`;
    });

    // Função de Estilo de Caractere com Melhor Espaçamento
    function getCharStyle(char: string, blockIndex: number, charOffset: number, absDist: number, dist: number) {
        // Se for espaço, mantemos o fluxo normal com um span transparente
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        
        const seed = (blockIndex * 500) + charOffset;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        const plateau = 0.05;
        let intensity = 0;
        if (absDist > plateau) {
            intensity = Math.min(1, (absDist - plateau) * 8);
        }
        
        const offsetX = (random(seed) - 0.5) * 2000 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 1500 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 3500 * intensity;
        const rotateX = (random(seed + 3) - 0.5) * 720 * intensity;
        const rotateY = (random(seed + 4) - 0.5) * 720 * intensity;
        const rotateZ = (random(seed + 5) - 0.5) * 360 * intensity;

        const delay = random(seed + 6) * 0.15;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg);
            opacity: ${1 - (intensity * 0.95)};
            filter: blur(${intensity * 10}px);
            will-change: transform, opacity;
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out, filter 0.5s ease-out;
            transition-delay: ${intensity === 0 ? delay : 0}s;
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[800vh] transition-colors duration-1000 ease-linear"
    style="background-color: {bgColor};"
>
    <!-- Sticky Central Wrapper -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <!-- Depth Atmospheric elements -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
            {#each Array(8) as _, i}
                <div 
                    class="absolute bg-white/[0.04] rounded-full blur-3xl"
                    style="
                        width: {400 + (i * 80)}px; 
                        height: {400 + (i * 80)}px;
                        top: {(i * 12) % 100}%;
                        left: {10 + (Math.sin(i) * 50 + 40)}%;
                        transform: translateZ({-i * 400}px);
                    "
                ></div>
            {/each}
        </div>

        <!-- Floating Section Header -->
        <div class="absolute top-10 text-center z-50 transition-opacity duration-1000" style="opacity: {progress < 0.98 ? 0.15 : 0};">
            <h2 class="text-xs font-black text-white tracking-[0.8em] uppercase opacity-50">Inclusão Digital</h2>
        </div>

        <!-- Content Rendering Perspective Area -->
        <div class="relative w-full max-w-7xl flex items-center justify-center perspective-[2500px]">
            {#each blocks as block, i}
                {@const centerAt = i / blocks.length + (1 / (blocks.length * 2))}
                {@const dist = progress - centerAt}
                {@const absDist = Math.abs(dist)}
                {@const isLocked = absDist < 0.05}
                {@const blockOpacity = Math.max(0, 1 - (absDist * 7))}

                <div 
                    class="absolute inset-0 flex flex-col items-center justify-center text-center px-10 md:px-0"
                    style="
                        pointer-events: {isLocked ? 'all' : 'none'};
                        z-index: {isLocked ? 100 : 10};
                        opacity: {blockOpacity};
                        visibility: {absDist > 0.3 ? 'hidden' : 'visible'};
                    "
                >
                    <!-- Floating Icon Assembly -->
                    <div 
                        class="mb-14 transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1)"
                        style="
                            transform: translate3d(0, 0, {-dist * 7000}px) rotateY({dist * 1080}deg) scale({1 - Math.min(1, absDist * 4)});
                            filter: blur({absDist * 20}px);
                        "
                    >
                        <div class="w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke={block.color} stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                                <path d={block.icon} />
                                {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                            </svg>
                        </div>
                    </div>

                    <!-- 3D Character Split Title - Properly Spaced -->
                    <h3 class="text-fluid-title font-black text-white mb-10 leading-[0.85] tracking-tighter text-balance">
                        {#each block.title.split(' ') as word, j}
                            <span class="inline-block whitespace-nowrap">
                                {#each word.split('') as char, k}
                                    <span class="char-unit" style={getCharStyle(char, i, j * 20 + k, absDist, dist)}>{char}</span>
                                {/each}
                                <span style="display: inline-block; width: 0.25em;">&nbsp;</span>
                            </span>
                        {/each}
                    </h3>

                    <!-- 3D Character Split Text - Properly Spaced -->
                    <p class="text-white/60 text-fluid-body font-light max-w-4xl leading-tight text-balance px-4 md:px-0">
                        {#each block.text.split(' ') as word, j}
                            <span class="inline-block whitespace-nowrap">
                                {#each word.split('') as char, k}
                                    <span class="char-unit" style={getCharStyle(char, i, j * 30 + k + 200, absDist, dist)}>{char}</span>
                                {/each}
                                <span style="display: inline-block; width: 0.25em;">&nbsp;</span>
                            </span>
                        {/each}
                    </p>

                    <!-- Lock Marker -->
                    <div 
                        class="mt-16 flex items-center gap-10 transition-all duration-[1000ms]"
                        style="opacity: {isLocked ? 1 : 0}; transform: translateY({isLocked ? 0 : 60}px);"
                    >
                        <div class="w-12 h-[1px] bg-white/10"></div>
                        <span class="text-[10px] text-white/50 font-black uppercase tracking-[0.8em]">{block.tag}</span>
                        <div class="w-12 h-[1px] bg-white/10"></div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Progress Tracker Bar -->
        <div class="absolute bottom-10 flex flex-col items-center gap-4 transition-all duration-700" style="opacity: {progress > 0.05 && progress < 0.95 ? 0.8 : 0};">
            <div class="flex items-center gap-2">
                {#each blocks as _, idx}
                    {@const isActive = Math.floor(progress * blocks.length) === idx}
                    <div 
                        class="h-1 rounded-full transition-all duration-1000"
                        style="
                            width: {isActive ? '48px' : '10px'};
                            background: {isActive ? 'rgba(59, 130, 246, 0.9)' : 'rgba(255, 255, 255, 0.08)'};
                            box-shadow: {isActive ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none'};
                        "
                    ></div>
                {/each}
            </div>
            <span class="text-[8px] uppercase tracking-[0.6em] font-black text-white/20 tabular-nums">Análise {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
        perspective: 2500px;
    }

    .char-unit {
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }

    /* Brilho quando o bloco está montado */
    .char-unit {
        filter: drop-shadow(0 0 10px transparent);
    }
</style>
