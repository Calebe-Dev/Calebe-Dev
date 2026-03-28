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

    // Helper para gerar offsets 3D determinísticos
    function getCharStyle(char: string, blockIndex: number, charOffset: number, absDist: number, dist: number) {
        if (char === ' ') return '';
        
        // Semente única para cada caractere
        const seed = (blockIndex * 500) + charOffset;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };

        // Intensidade do caos baseada na distância do scroll (0 a 1)
        // Quanto mais longe do centro (absDist maior), mais caótico.
        // A montagem acontece quando absDist < 0.15
        const intensity = Math.min(1, absDist * 7); 
        
        // Vetores de explosão (de onde as letras vêm)
        const offsetX = (random(seed) - 0.5) * 3000 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 2000 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 4000 * intensity;
        const rotateX = (random(seed + 3) - 0.5) * 1080 * intensity;
        const rotateY = (random(seed + 4) - 0.5) * 1080 * intensity;
        const rotateZ = (random(seed + 5) - 0.5) * 720 * intensity;

        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg);
            opacity: ${1 - (intensity * 0.8)};
            filter: blur(${intensity * 15}px);
            white-space: pre;
            will-change: transform, opacity;
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[600vh] transition-colors duration-1000 ease-linear"
    style="background-color: {bgColor};"
>
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <!-- Background Depth Elements -->
        <div class="absolute inset-0 pointer-events-none opacity-20">
            <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-blue-500/10"></div>
            {#each Array(15) as _, i}
                <div 
                    class="absolute bg-white/5 rounded-full blur-3xl"
                    style="
                        width: {300 + (i * 40)}px; 
                        height: {300 + (i * 40)}px;
                        top: {10 + (i * 6)}%;
                        left: {10 + (Math.cos(i) * 30 + 30)}%;
                        transform: translateZ({-i * 200}px);
                    "
                ></div>
            {/each}
        </div>

        <div class="absolute top-8 md:top-16 text-center z-50 px-6 transition-all duration-700" style="opacity: {progress < 0.95 ? 0.3 : 0};">
            <span class="text-blue-500 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] mb-2 block">Experiência Imersiva</span>
            <h2 class="text-xl md:text-2xl font-black text-white/20 tracking-tighter uppercase">Laboratório de Acessibilidade</h2>
        </div>

        <div class="relative w-full max-w-6xl flex items-center justify-center perspective-[2500px]">
            {#each blocks as block, i}
                {@const centerAt = i / blocks.length + (1 / (blocks.length * 2))}
                {@const dist = progress - centerAt}
                {@const absDist = Math.abs(dist)}
                {@const blockActive = absDist < 0.2}

                <div 
                    class="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                    style="
                        pointer-events: {blockActive ? 'all' : 'none'};
                        z-index: {blockActive ? 100 : 10};
                        visibility: {absDist > 0.3 ? 'hidden' : 'visible'};
                    "
                >
                    <!-- Icon Assembly -->
                    <div 
                        class="mb-10 transition-all duration-700"
                        style="
                            transform: translate3d(0, 0, {-dist * 5000}px) rotateY({dist * 360}deg) scale({1 - Math.min(1, absDist * 4)});
                            opacity: {1 - Math.min(1, absDist * 5)};
                            filter: blur({absDist * 20}px);
                        "
                    >
                        <div class="w-24 h-24 md:w-32 md:h-32 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={block.color} stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d={block.icon} />
                                {#if i === 0}<circle cx="12" cy="12" r="3" />{/if}
                            </svg>
                        </div>
                    </div>

                    <!-- Title Assembly (Per-Character) -->
                    <h3 class="text-4xl md:text-8xl font-black text-white mb-10 leading-[0.85] tracking-tighter text-balance">
                        {#each block.title.split('') as char, j}
                            <span style={getCharStyle(char, i, j, absDist, dist)}>{char}</span>
                        {/each}
                    </h3>

                    <!-- Text Assembly (Per-Character) -->
                    <p class="text-white/70 text-lg md:text-2xl font-light max-w-4xl leading-relaxed text-balance">
                        {#each block.text.split(' ') as word, j}
                            <span class="inline-block">
                                {#each word.split('') as char, k}
                                    <span style={getCharStyle(char, i, j * 20 + k + 100, absDist, dist)}>{char}</span>
                                {/each}
                                <span class="inline-block">&nbsp;</span>
                            </span>
                        {/each}
                    </p>

                    <div 
                        class="mt-16 flex items-center gap-6 transition-all duration-1000"
                        style="opacity: {1 - absDist * 8}; transform: translateY({absDist * 150}px) translateZ({-absDist * 1000}px);"
                    >
                        <div class="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>
                        <span class="text-[11px] text-blue-400 font-bold uppercase tracking-[.5em]">{block.tag}</span>
                        <div class="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/20"></div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- Atmospheric Progress Indicator -->
        <div class="absolute bottom-12 flex flex-col items-center gap-6 transition-opacity duration-700" style="opacity: {progress > 0.02 && progress < 0.98 ? 1 : 0};">
            <div class="flex items-center gap-4">
                {#each blocks as _, idx}
                    {@const isActive = Math.floor(progress * blocks.length) === idx}
                    <div 
                        class="h-1 rounded-full transition-all duration-700"
                        style="
                            width: {isActive ? '60px' : '20px'};
                            background: {isActive ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.1)'};
                            box-shadow: {isActive ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none'};
                        "
                    ></div>
                {/each}
            </div>
            <span class="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 tabular-nums">Ponto de Convergência {Math.floor(progress * 100)}%</span>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
        perspective: 2000px;
    }
</style>
