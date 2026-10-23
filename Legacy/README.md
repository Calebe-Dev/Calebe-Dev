# Legacy — site anterior (arquivado)

Snapshot do site anterior, movido para cá em 2026-10-23 quando o site foi refeito do zero
com foco em SEO. **Nada aqui é buildado nem publicado**: o site em produção é o da raiz do projeto.

| Pasta/arquivo | O que é |
|---|---|
| `src/`, `static/` | Site SvelteKit anterior (home animada, seções, blog em mdsvex) |
| `svelte.config.js`, `vite.config.ts`, `package.json` | Configs e dependências desse site (Tailwind, mdsvex, Lenis, AOS...) |
| `templates/dynamic-hero/` | Componentes visuais do hero (partículas, mesh gradient, clima) |
| `cms-app/` | CMS desktop (Python/CustomTkinter) para criar posts do blog |
| `scripts/cms.js` | CMS via CLI para criar/listar posts |
| `OLD/` | Versão ainda mais antiga do portfólio |

Use como referência de conteúdo (experiências, projetos, posts) e de componentes visuais.
Para rodar o site antigo isoladamente, copie esta pasta para fora do projeto e rode `npm install && npm run dev`.
