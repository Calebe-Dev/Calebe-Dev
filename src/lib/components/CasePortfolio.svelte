<script lang="ts">
	// Página de um case do portfólio, voltada a recrutadores: o que é o site, o que foi feito,
	// stack, resultado no Google (só multiplicadores) e desempenho medido.
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph } from '$lib/schema';
	import { careerPage, person, type WhatsApp } from '$lib/site';
	import { casePath, caseBySlug, network, portfolioPage } from '$lib/portfolio';

	let { slug }: { slug: string } = $props();

	const c = $derived(caseBySlug(slug));
	const path = $derived(casePath(slug));

	const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
	const mes = (ym: string) => `${MESES[Number(ym.slice(5, 7)) - 1]}/${ym.slice(2, 4)}`;
	const vezes = (x: number) => `${x.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}x`;

	const tipo = $derived(
		c.slug === 'bellemodaintima'
			? 'loja virtual em WordPress e WooCommerce'
			: c.before
				? `migração para ${c.slug === 'planovivoempresarial' ? 'HTML estático' : 'SvelteKit'}`
				: 'site em SvelteKit'
	);
	const title = $derived(`${c.name}: case de ${tipo} - ${person.name}`);
	const description = $derived(
		`Case ${c.name} (${c.domain}): ${c.segment}. Stack ${c.stack}` +
			(c.imprX ? `; impressões no Google ${vezes(c.imprX)} maiores (${mes(c.base)} a ${mes(c.bestImprMonth)}).` : '.')
	);
	const crumbs = $derived([
		{ name: portfolioPage.name, path: portfolioPage.path },
		{ name: c.name, path }
	]);
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vi os cases do seu portfólio e tenho uma oportunidade de vaga.',
		label: 'Falar sobre uma vaga pelo WhatsApp'
	};

	const jsonLd = $derived(
		pageGraph({
			path,
			title,
			description,
			crumbs,
			extra: [
				{
					'@type': 'WebSite',
					'@id': `https://${c.domain}/#website`,
					name: c.name,
					url: `https://${c.domain}/`,
					creator: { '@id': 'https://calebearaujo.com.br/#pessoa' }
				}
			]
		})
	);
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />
		<h1>{c.name}: case de {tipo}</h1>
		<p>
			<a href={`https://${c.domain}/`}>{c.domain}</a>: {c.segment}. Trabalhei no desenvolvimento e
			no SEO técnico do site{c.slug === 'bellemodaintima' ? '' : ', como parte da rede de sites que mantenho'}.
		</p>
		<p>Stack: {c.stack}.</p>
		<p><a href={`https://${c.domain}/`}>Visitar {c.domain}</a></p>
		<figure class="case-captura">
			<img src={`/images/projetos/${c.slug}.webp`} alt={`Página inicial do site ${c.name}`} width="720" height="360" />
		</figure>
	</header>

	<section aria-labelledby="feito-titulo">
		<h2 id="feito-titulo">O que foi feito</h2>
		<ul>
			{#if c.slug === 'bellemodaintima'}
				<li>Loja virtual em WordPress com WooCommerce e catálogo de produtos sincronizado.</li>
				<li>Site atrás da Cloudflare, com HTTPS e CDN.</li>
			{:else if c.before}
				<li>
					Migração do site anterior ({c.before}) para
					{c.slug === 'planovivoempresarial' ? 'HTML estático, sem framework' : 'SvelteKit, com as páginas pré-renderizadas em HTML'}.
				</li>
				<li>Hospedagem na Cloudflare, com HTTPS e CDN, no lugar da hospedagem anterior.</li>
			{:else}
				<li>Site em SvelteKit, com as páginas pré-renderizadas em HTML.</li>
				<li>Hospedagem na Cloudflare, com HTTPS e CDN.</li>
			{/if}
			<li>SEO técnico: estrutura de páginas, títulos, dados estruturados, sitemap e acompanhamento no Google Search Console.</li>
			{#if c.assetsBefore && c.assetsNow}
				<li>
					A página inicial carregava {c.assetsBefore[0]} arquivos JavaScript e {c.assetsBefore[1]} de CSS
					em 2025; hoje carrega {c.assetsNow[0]} e {c.assetsNow[1]}.
				</li>
			{/if}
		</ul>
	</section>

	<section aria-labelledby="resultado-titulo">
		<h2 id="resultado-titulo">Resultado no Google</h2>
		<p>
			Mês de entrada: <strong>{mes(c.base)}</strong>,
			{c.isNew ? 'o primeiro mês completo do site no Search Console' : 'antes da minha entrada no Grupo OC, em agosto de 2025'}.
			Comparação com o melhor mês dos últimos 12:
		</p>
		<ul>
			<li>
				<strong>Impressões:</strong>
				{#if c.imprX}{vezes(c.imprX)} ({mes(c.base)} a {mes(c.bestImprMonth)}){:else}o site passou a aparecer no Google todo mês (melhor mês: {mes(c.bestImprMonth)}){/if}
			</li>
			<li>
				<strong>Cliques:</strong>
				{#if c.clicksX}{vezes(c.clicksX)} ({mes(c.base)} a {mes(c.bestClicksMonth)}){:else}de zero em {mes(c.base)} para cliques todo mês (melhor mês: {mes(c.bestClicksMonth)}){/if}
			</li>
		</ul>
		<p>
			Os valores mostram quantas vezes o resultado cresceu. Os números absolutos de tráfego pertencem ao
			dono do site e não são divulgados.
		</p>
	</section>

	{#if c.lighthouse}
		<section aria-labelledby="desempenho-titulo">
			<h2 id="desempenho-titulo">Desempenho medido</h2>
			<p>
				No Lighthouse, em modo celular, a página inicial tirou <strong>{c.lighthouse[0]}</strong> de 100
				em performance, com o maior elemento visível carregado em
				<strong>{c.lighthouse[1].toLocaleString('pt-BR')} s</strong> (LCP), em medição de 31/10/2026.
			</p>
		</section>
	{/if}

	<Related
		title="Outros cases e perfil"
		links={[
			{ href: portfolioPage.path, text: `Todos os ${network.sites} sites do portfólio` },
			{ href: careerPage.path, text: 'Perfil profissional e experiência' },
			{ href: `https://${c.domain}/`, text: `Visitar ${c.domain}` }
		]}
	/>

	<Contact {whatsapp} title="Recrutador?" intro="Fale comigo sobre vagas de tech lead e desenvolvedor full stack." />
</main>
