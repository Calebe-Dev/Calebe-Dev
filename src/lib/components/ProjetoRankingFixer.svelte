<script lang="ts">
	// Banner da Ranking Fixer (rankingfixer.com), a consultoria em inglês fundada pelo Calebe.
	// "destaque" na home; "compacto" nas páginas de SEO, como ponte para quem atende fora do Brasil.
	import { rankingFixer } from '$lib/site';

	let { variante = 'destaque' }: { variante?: 'destaque' | 'compacto' } = $props();
	const titulo = $derived(variante === 'destaque' ? 'ranking-fixer-titulo' : 'ranking-fixer-compacto-titulo');
</script>

<section id={variante === 'destaque' ? 'ranking-fixer' : undefined} class="projeto-rf" class:compacto={variante === 'compacto'} aria-labelledby={titulo}>
	<img class="projeto-rf-logo" src="/images/rankingfixer.svg" alt="" width="56" height="56" />

	{#if variante === 'destaque'}
		<p class="projeto-rf-selo">Projeto próprio · Iniciativa internacional</p>
		<h2 id={titulo}>Ranking Fixer: SEO técnico feito no Brasil para empresas de outros países</h2>
		<p>
			A Ranking Fixer é a iniciativa que fundei para levar o meu método de SEO técnico, que é diagnosticar
			e corrigir no código o que impede um site de ranquear, a empresas dos Estados Unidos, do Reino
			Unido, do Canadá e da Nova Zelândia, com atendimento remoto e em inglês.
		</p>
		<p>
			É um projeto pensado para escalar: guias técnicos sobre os erros do Google Search Console,
			auditorias com a correção implementada e um modelo white label para agências que precisam de SEO
			técnico executado nos sites dos clientes.
		</p>
		<ul>
			<li>Indexação e Google Search Console</li>
			<li>Core Web Vitals</li>
			<li>Migrações de site sem perder tráfego</li>
			<li>SEO técnico white label para agências</li>
		</ul>
		<p class="projeto-rf-links">
			<a href={rankingFixer.url} hreflang="en">Conhecer a Ranking Fixer</a>
			<a href={rankingFixer.guides} hreflang="en">Ler os guias técnicos (em inglês)</a>
		</p>
	{:else}
		<h2 id={titulo}>Atende empresas fora do Brasil? Conheça a Ranking Fixer</h2>
		<p>
			Para empresas de outros países, o mesmo trabalho de SEO técnico é feito em inglês pela
			<a href={rankingFixer.url} hreflang="en">Ranking Fixer</a>, a iniciativa internacional que fundei,
			com foco em indexação, Core Web Vitals e migrações de site.
		</p>
	{/if}
</section>
