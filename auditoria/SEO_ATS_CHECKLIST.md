# SEO & ATS Strategy Checklist

This document provides the technical and content standards for the Calebe-Dev portfolio.

## 1. Technical & Semantic SEO (AEO-Ready)
- [ ] **JSON-LD Schema**: Ensure `Person` and `WebSite` schemas are valid and contain current career links.
- [ ] **Microdata**: Use `itemprop`, `itemtype`, and `itemscope` in all data-heavy sections (`About`, `Experience`, `Projects`).
- [ ] **AEO Entity Clarity**: Use direct, non-abstract definitions for core services (e.g., "SvelteKit Developer" vs "Especialista em Interfaces").
- [ ] **Canonical Tags**: Maintain `<link rel="canonical">` to prevent duplicate content issues.
- [ ] **Alt-Texts**: Every visual element must have descriptive alt-text mirroring its function (e.g., "Diagrama de arquitetura CRM").

## 2. ATS Readiness (Recruiter-Centric)
- [ ] **Keyword Clustering**: Include high-value terms early in the document (`SvelteKit`, `TypeScript`, `Node.js`, `Cloudflare`, `PostgreSQL`).
- [ ] **No-Visual Fallbacks**: Ensure content is readable by parsers even when CSS/JS logic (like 3D tilts) is stripped.
- [ ] **Impact Verbs**: Use action-oriented verbs: *Liderança*, *Engenharia*, *Otimização*, *Deploy*, *Arquitetura*.
- [ ] **Result Metrics**: Whenever possible, quantify success (e.g., "SEO Agressivo", "Conversão de Leads").

## 3. Performance & A11y
- [ ] **Lighthouse Score**: Aim for 100/100 in Accessibility and SEO.
- [ ] **Contrast**: Strict adherence to WCAG 2.1 Level AA.
- [ ] **Semantic HTML**: Use `<article>`, `<time>`, `<aside>`, and `<nav>` appropriately.
