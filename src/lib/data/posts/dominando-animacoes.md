---
title: Dominando Animações no SvelteKit
date: 2026-03-22
excerpt: Aprenda como criar interfaces premium com transições fluidas e micro-interações que encantam o usuário.
coverImage: https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800
readTime: 5 min
---

# Transições Fluidas no Svelte

Bem-vindo ao meu blog! Esta é uma demonstração de como o conteúdo em **Markdown** será renderizado no novo sistema.
Usando o SvelteKit com `mdsvex`, podemos facilmente criar posts ricos e fáceis de manter.

## O Poder do `in:fade` e `out:fly`

Svelte torna as animações simples e poderosas. Aqui está um pequeno exemplo:

```svelte
<script>
    import { fade, fly } from 'svelte/transition';
    let visible = true;
</script>

{#if visible}
    <div in:fly={{ y: 50, duration: 500 }} out:fade>
        Sou um elemento animado!
    </div>
{/if}
```

Obrigado por acompanhar! Logo trarei artigos reais sobre as tecnologias que mais uso.
