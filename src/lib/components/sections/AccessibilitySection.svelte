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
            color: "#3b82f6"
        },
        {
            tag: "Arquitetura Semântica",
            title: "Código que Fala e se Expressa",
            text: "Acessibilidade começa no HTML. Construo aplicações onde a estrutura de dados e a semântica são tão priorizadas quanto a interface visual, garantindo que leitores de tela e tecnologias assistivas naveguem com fluidez.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            color: "#10b981"
        },
        {
            tag: "UX Universal",
            title: "Interfaces Sem Barreiras Digitais",
            text: "Um design de elite é aquele que todos conseguem usar. Foco em interfaces que respeitam a diversidade humana, com foco em navegação por teclado, hierarquia visual clara e padrões de interação intuitivos.",
            icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z",
            color: "#6366f1"
        },
        {
            tag: "Inclusão & Velocidade",
            title: "Acessibilidade é Performance",
            text: "Código acessível é código otimizado. Ao seguir rigorosamente os padrões W3C, minhas aplicações não são apenas inclusivas, mas também mais rápidas, fáceis de indexar pelo Google e sustentáveis a longo prazo.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z",
            color: "#f59e0b"
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

    const colors = ["#020617", "#0f172a", "#1e1b4b", "#020617"];
    let bgColor = $derived.by(() => {
        const step = 1 / (colors.length - 1);
        const index = Math.min(colors.length - 2, Math.floor(progress / step));
        const localProgress = (progress % step) / step;
        return `color-mix(in srgb, ${colors[index+1]}, ${colors[index]} ${100 - localProgress * 100}%)`;
    });

    // Helper para gerar estilos com Platô (Scroll Lock) e Suavidade CSS
    function getCharStyle(char: string, blockIndex: number, charOffset: number, absDist: number, dist: number) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        
        const seed = (blockIndex * 500) + charOffset;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        // Lógica de Platô (Lock): Se absDist < 0.06, a intensidade é Zero (montado)
        // Isso cria a "trava" onde a animação para e o conteúdo fica visível.
        const plateau = 0.06;
        let intensity = 0;
        if (absDist > plateau) {
            intensity = Math.min(1, (absDist - plateau) * 8);
        }
        
        const offsetX = (random(seed) - 0.5) * 2500 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 2000 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 4000 * intensity;
        const rotateX = (random(seed + 3) - 0.5) * 720 * intensity;
        const rotateY = (random(seed + 4) - 0.5) * 720 * intensity;
        const rotateZ = (random(seed + 5) - 0.5) * 360 * intensity;

        // Adicionando delay individual para um efeito cascata na montagem
        const delay = random(seed + 6) * 0.2;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg);
            opacity: ${1 - (intensity * 0.9)};
            filter: blur(${intensity * 12}px);
            white-space: pre;
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
        
        <!-- Atmospheric Depth (Parallax) -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
            {#each Array(12) as _, i}
                <div 
                    class="absolute bg-white/[0.03] rounded-full blur-3xl animate-pulse-slow"
                    style="
                        width: {400 + (i * 50)}px; 
                        height: {400 + (i * 50)}px;
                        top: {10 + (getCharStyle('', 0, i, 0, 0), (i * 7)) % 100}%;
                        left: {10 + (Math.cos(i) * 40 + 40)}%;
                        transform: translateZ({-i * 300}px);
                        animation-delay: {i * 0.5}s;
                    "
                ></div>
            {/each}
        </div>

        <!-- Section Title (Static/Fading) -->
        <div class="absolute top-8 md:top-16 text-center z-50 px-6 transition-all duration-1000" style="opacity: {progress < 0.98 ? 0.2 : 0};">
            <span class="text-blue-500 font-bold uppercase tracking-[0.6em] text-[8px] md:text-[9px] mb-2 block">Imersão de Precisão</span>
            <h2 class="text-xl md:text-2xl font-black text-white/10 tracking-widest uppercase">Arquitetura de Inclusão</h2>
        </div>

        <!-- Main Assembly Viewport -->
        <div class="relative w-full max-w-7xl flex items-center justify-center perspective-[3000px]">
            {#each blocks as block, i}
                {@const centerAt = i / blocks.length + (1 / (blocks.length * 2))}
                {@const dist = progress - centerAt}
                {@const absDist = Math.abs(dist)}
                
                <!-- Lock Zone Detection -->
                {@const isLocked = absDist < 0.06}
                {@const blockOpacity = Math.max(0, 1 - (absDist * 6))}

                <div 
                    class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-700"
                    class:block-locked={isLocked}
                    style="
                        pointer-events: {isLocked ? 'all' : 'none'};
                        z-index: {isLocked ? 100 : 10};
                        opacity: {blockOpacity};
                        visibility: {absDist > 0.3 ? 'hidden' : 'visible'};
                    "
                >
                    <!-- Icon Assembly with Motion Blur -->
                    <div 
                        class="mb-12 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1)"
                        style="
                            transform: translate3d(0, 0, {-dist * 6000}px) rotateY({dist * 720}deg) scale({1 - Math.min(1, absDist * 5)});
                            filter: blur({absDist * 15}px);
                        "
                    >
                        <div class="w-24 h-24 md:w-32 md:h-32 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-[0_0_80px_rgba(255,255,255,0.03)] group cursor-help">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={block.color} stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="transition-all duration-700 group-hover:scale-110">
                                <path d={block.icon} />
                                {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                            </svg>
                        </div>
                    </div>

                    <!-- Character-Level Title Assembly -->
                    <h3 class="text-5xl md:text-9xl font-black text-white mb-10 leading-[0.8] tracking-tighter text-balance">
                        {#each block.title.split('') as char, j}
                            <span class="char-unit" style={getCharStyle(char, i, j, absDist, dist)}>{char}</span>
                        {/each}
                    </h3>

                    <!-- Character-Level Text Assembly -->
                    <p class="text-white/60 text-xl md:text-3xl font-light max-w-5xl leading-tight text-balance">
                        {#each block.text.split(' ') as word, j}
                            <span class="inline-block">
                                {#each word.split('') as char, k}
                                    <span class="char-unit" style={getCharStyle(char, i, j * 20 + k + 100, absDist, dist)}>{char}</span>
                                {/each}
                            </span>
                        {/each}
                    </p>

                    <!-- Lock state Highlight -->
                    <div 
                        class="mt-16 flex items-center gap-8 transition-all duration-1000"
                        style="opacity: {isLocked ? 1 : 0}; transform: translateY({isLocked ? 0 : 50}px);"
                    >
                        <div class="w-20 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>
                        <span class="text-[12px] text-blue-500 font-black uppercase tracking-[0.6em] animate-shine">{block.tag}</span>
                        <div class="w-20 h-[1px] bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Scroll HUD -->
        <div class="absolute bottom-12 flex flex-col items-center gap-6 transition-all duration-700" style="opacity: {progress > 0.02 && progress < 0.98 ? 1 : 0};">
            <div class="flex items-center gap-3">
                {#each blocks as _, idx}
                    {@const blockProg = progress * blocks.length}
                    {@const isActive = Math.floor(blockProg) === idx}
                    <div 
                        class="h-1 rounded-full transition-all duration-700"
                        style="
                            width: {isActive ? '80px' : '24px'};
                            background: {isActive ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.05)'};
                            box-shadow: {isActive ? '0 0 20px rgba(59, 130, 246, 0.3)' : 'none'};
                        "
                    ></div>
                {/each}
            </div>
            <span class="text-[9px] uppercase tracking-[0.6em] font-black text-white/30 tabular-nums">Sincronização {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
        perspective: 3000px;
    }

    .char-unit {
        /* Garante que o navegador trate as letras como objetos individuais para 3D */
        transform-style: preserve-3d;
        backface-visibility: hidden;
    }

    .block-locked h3 span {
        /* Brilho sutil quando está travado no centro */
        animation: text-pulse 3s ease-in-out infinite;
    }

    @keyframes text-pulse {
        0%, 100% { opacity: 1; filter: drop-shadow(0 0 0px transparent); }
        50% { opacity: 0.9; filter: drop-shadow(0 0 8px rgba(255,255,255,0.2)); }
    }

    @keyframes shine {
        from { filter: brightness(1); }
        to { filter: brightness(1.5); }
    }

    .animate-pulse-slow {
        animation: pulse-slow 8s ease-in-out infinite;
    }

    @keyframes pulse-slow {
        0%, 100% { opacity: 0.02; transform: scale(1); }
        50% { opacity: 0.05; transform: scale(1.1); }
    }

    .animate-shine {
        animation: shine 2s ease-in-out infinite alternate;
    }
</style>
