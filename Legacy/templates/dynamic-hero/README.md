# Template: Dynamic Hero Background (Svelte 5)

Este template contém um sistema completo de background dinâmico para seções Hero, focado em interatividade e imersão.

## Componentes Incluídos

1.  **`DynamicHeroBackground.svelte`**: O container principal que orquestra as camadas visuais.
2.  **`MeshGradient.svelte`**: Gradiente fluido com profundidade e transição Dia/Noite.
3.  **`InteractiveParticles.svelte`**: Sistema de física de partículas (Canvas) com repulsão de mouse, drift aleatório e "gravidade" vinculada ao scroll.
4.  **`WeatherOverlay.svelte`**: Efeitos de clima discretos (Chuva e Sol/God Rays).
5.  **`environment.svelte.ts`**: Gerenciador de estado global (Runes) para tempo, clima e posição do mouse.

## Como Usar em Outros Projetos

1.  Copie a pasta `dynamic-hero` para o seu diretório de componentes.
2.  Certifique-se de que o Svelte 5 e Tailwind CSS v4 estejam instalados.
3.  Importe o componente principal:

```svelte
<script>
  import DynamicHeroBackground from './path/to/DynamicHeroBackground.svelte';
</script>

<section class="relative h-screen overflow-hidden">
  <DynamicHeroBackground />
  <!-- Seu conteúdo aqui -->
</section>
```

## Dependências
- Svelte 5 (Runes)
- Tailwind CSS v4
- Google Fonts (Inter recomendada)
