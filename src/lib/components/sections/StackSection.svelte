<script lang="ts">
    import { onMount } from 'svelte';

    let scrollY = $state(0);
    let innerHeight = $state(1000);
    let container = $state<HTMLElement | null>(null);

    const stack = [
		{ id: '01', name: 'SvelteKit', icon: '⚡', color: '#ff3e00', desc: 'Performance SSR nativa para interfaces ultra-fluidas.', comment: 'Minha principal escolha para interfaces web de elite. A reatividade compilada e a ausência de Virtual DOM garantem performance extrema.', category: 'Frontend', group: 0 },
		{ id: '02', name: 'TypeScript', icon: 'TS', color: '#3178c6', desc: 'Tipagem forte para arquiteturas de software resilientes.', comment: 'Essencial em qualquer projeto de escala. Garante a integridade dos dados e uma manutenção previsível em sistemas complexos.', category: 'Frontend', group: 0 },
		{ id: '03', name: 'Node.js', icon: '🟢', color: '#339933', desc: 'Back-ends escaláveis e processamento assíncrono.', comment: 'O motor por trás de microserviços robustos. Utilizado para orquestrar fluxos de dados e integrações críticas de API.', category: 'Backend', group: 1 },
		{ id: '04', name: 'Angular', icon: '🅰️', color: '#dd0031', desc: 'Estruturas Enterprise de alta complexidade.', comment: 'Ideal para sistemas que exigem injeção de dependências pesadas e padrões arquiteturais corporativos rigorosos.', category: 'Frontend', group: 0 },
		{ id: '05', name: 'PostgreSQL', icon: '🐘', color: '#336791', desc: 'Persistência de dados com integridade absoluta.', comment: 'Meu padrão ouro para bancos relacionais. Fundamental para garantir que a fundação de dados de um CRM jamais falhe.', category: 'Backend', group: 1 },
		{ id: '06', name: 'Ruby / Rails', icon: '💎', color: '#701516', desc: 'Elegância e agilidade no desenvolvimento B2B.', comment: 'A produtividade que o Ruby entrega é inigualável para automações corporativas e scripts de alta fidelidade.', category: 'Infrastructure', group: 2 },
		{ id: '07', name: 'Go', icon: '🐹', color: '#00add8', desc: 'Eficiência máxima em sistemas distribuídos.', comment: 'A escolha definitiva para serviços onde a latência zero é obrigatória. Confiável como um relógio suíço industrial.', category: 'Infrastructure', group: 2 }
	];

    let progress = $derived.by(() => {
        const _ = scrollY;
        if (!container) return 0;
        const rect = container.getBoundingClientRect();
        const maxScroll = rect.height - innerHeight;
        const scrolled = -rect.top;
        return Math.max(0, Math.min(1, scrolled / maxScroll));
    });

    // Plateau Logic
    let lockedProgress = $derived.by(() => {
        const p = progress;
        if (p < 0.2) return 0; // Entrance assembly
        if (p > 0.8) return 1; // Exit assembly
        // Center plateau: 0.2 to 0.8 -> maps to 0 to 1
        return (p - 0.2) / 0.6;
    });

    let assemblyIntensity = $derived.by(() => {
        if (progress < 0.15) return (0.15 - progress) * 6.6;
        if (progress > 0.85) return (progress - 0.85) * 6.6;
        return 0;
    });

    function getCharStyle(char: string, index: number, intensity: number) {
        if (char === ' ') return 'display: inline-block; width: 0.25em;';
        const seed = index * 31;
        const random = (s: number) => {
            const x = Math.sin(s) * 10000;
            return x - Math.floor(x);
        };
        const offsetX = (random(seed) - 0.5) * 1200 * intensity;
        const offsetY = (random(seed + 1) - 0.5) * 800 * intensity;
        const offsetZ = (random(seed + 2) - 0.5) * 2000 * intensity;
        return `
            display: inline-block;
            transform: translate3d(${offsetX}px, ${offsetY}px, ${offsetZ}px) rotate(${intensity * 360}deg);
            opacity: ${1 - intensity};
            filter: blur(${intensity * 8}px);
            transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease;
            will-change: transform, opacity;
        `;
    }

    function getCardStyle(item: any, prog: number) {
        const groupStep = 1 / 3;
        const groupStart = item.group * groupStep;
        const groupEnd = (item.group + 1) * groupStep;
        
        // Relative progress within the group plateau
        const localProgress = Math.max(0, Math.min(1, (lockedProgress - groupStart) / groupStep));
        const dist = Math.abs(localProgress - 0.5) * 2; // 0 at center, 1 at edges
        
        let intensity = Math.max(0, dist - 0.2) * 5; // Plateau of 20% in the middle
        if (assemblyIntensity > 0) intensity = Math.max(intensity, assemblyIntensity);

        const seed = item.group * 100 + item.id;
        const random = (s: number) => Math.sin(s) * 10000 - Math.floor(Math.sin(s) * 10000);

        return `
            transform: translate3d(${(random(seed)-0.5)*500*intensity}px, ${(random(seed+1)-0.5)*500*intensity}px, ${-intensity*1500}px) rotateY(${intensity*90}deg);
            opacity: ${1 - intensity};
            filter: blur(${intensity * 10}px);
            transition: all 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        `;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<section 
    bind:this={container} 
    class="relative w-full h-[400vh] bg-black text-white overflow-clip"
>
    <!-- Dynamic Depth Background -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(59,130,246,0.05),_transparent_70%)] pointer-events-none"></div>

    <!-- Sticky Visual Container -->
    <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        
        <!-- Animated Main Title -->
        <div class="absolute top-20 text-center z-50">
            <span class="text-blue-500 font-bold uppercase tracking-[0.8em] text-[10px] mb-6 block opacity-50">Power Grid</span>
            <h2 class="text-fluid-title font-black tracking-tighter leading-none mb-4">
                {#each "MINHA STACK".split('') as char, i}
                    <span style={getCharStyle(char, i, assemblyIntensity)}>{char}</span>
                {/each}
            </h2>
        </div>

        <!-- Tech Categories HUD -->
        <div class="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-40 opacity-30">
            {#each ['Frontend', 'Backend', 'Infrastructure'] as cat, i}
                {@const isActive = Math.floor(lockedProgress * 3) === i}
                <div class="flex flex-col gap-2 transition-all duration-700" style="opacity: {isActive ? 1 : 0.2}; transform: translateX({isActive ? 0 : -20}px);">
                    <span class="text-[9px] font-black uppercase tracking-[0.5em]">{cat}</span>
                    <div class="h-[1px] bg-white/20 w-16 overflow-hidden">
                        <div class="h-full bg-blue-500 transition-all duration-500" style="width: {isActive ? '100%' : '0%'}"></div>
                    </div>
                </div>
            {/each}
        </div>

        <!-- 3D Grid Assembly -->
        <div class="perspective-[2500px] w-full max-w-6xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {#each stack as item}
                    <div 
                        class="relative group p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 backdrop-blur-3xl shadow-2xl transition-all duration-700"
                        style={getCardStyle(item, lockedProgress)}
                    >
                        <div class="w-16 h-16 mb-8 rounded-2xl bg-white/5 flex items-center justify-center text-4xl shadow-inner border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                            {item.icon}
                        </div>
                        <h4 class="text-2xl font-black tracking-tight text-white mb-4">{item.name}</h4>
                        <p class="text-white/40 text-sm font-light leading-relaxed mb-10 text-balance">{item.desc}</p>
                        
                        <div class="flex items-center justify-between pt-6 border-t border-white/5">
                            <span class="text-[9px] font-black uppercase tracking-widest text-white/20">Elite Tooling</span>
                            <div class="flex gap-1">
                                {#each Array(5) as _, i}
                                    <div class="w-1.5 h-1.5 rounded-full {i < 4 ? '' : 'opacity-10'}" style="background-color: {i < 4 ? item.color : 'white'};"></div>
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Bottom Progress Indicator -->
        <div class="absolute bottom-12 flex flex-col items-center gap-4 opacity-40">
            <span class="text-[8px] font-black tracking-[0.6em] uppercase tabular-nums">Stack Analysis {Math.floor(progress * 100)}%</span>
            <div class="w-48 h-[1px] bg-white/10 relative">
                <div class="absolute inset-0 bg-blue-500 transition-all duration-100 ease-linear shadow-[0_0_10px_#3b82f6]" style="width: {progress * 100}%;"></div>
            </div>
        </div>
    </div>
</section>

<style>
    :global(body) {
        overflow-x: hidden;
    }
</style>
