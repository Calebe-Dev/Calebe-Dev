<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, pageGraph } from '$lib/schema';
	import { careerPage, person, type WhatsApp } from '$lib/site';
	import { casePath, cases, network, portfolioPage } from '$lib/portfolio';

	const path = portfolioPage.path;
	const title = `Portfólio: ${network.sites} sites em produção - ${person.name}`;
	const description = `Portfólio de ${person.name}, tech lead e desenvolvedor full stack: ${network.sites} sites em produção, a maioria migrada de WordPress para SvelteKit na Cloudflare, com resultado medido no Google.`;
	const crumbs = [{ name: portfolioPage.name, path }];
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vi o seu portfólio e tenho uma oportunidade de vaga.',
		label: 'Falar sobre uma vaga pelo WhatsApp'
	};

	const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
	const mes = (ym: string) => `${MESES[Number(ym.slice(5, 7)) - 1]}/${ym.slice(2, 4)}`;
	const vezes = (x: number) => `${x.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}x`;
	const migrated = cases.filter((c) => c.before).length;

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		type: 'CollectionPage',
		extra: [
			{
				'@type': 'ItemList',
				'@id': `${absolute(path)}#cases`,
				name: `Cases de ${person.name}`,
				numberOfItems: cases.length,
				itemListElement: cases.map((c, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: c.name,
					url: absolute(casePath(c.slug))
				}))
			}
		]
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />
		<h1>Portfólio: {network.sites} sites em produção</h1>
		<p>
			Estes são os sites em que trabalho como tech lead e desenvolvedor full stack, a maioria no Grupo
			OC desde agosto de 2025. Em {migrated} deles, conduzi a migração de WordPress (ou de outra
			plataforma) para SvelteKit ou HTML estático na Cloudflare; os outros foram construídos já nessa
			stack. Cada case mostra o que foi feito, a stack e o resultado medido no Google.
		</p>
		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="numeros-titulo">
		<h2 id="numeros-titulo">Resultado da rede</h2>
		<ul>
			<li>
				<strong>Cliques no Google: {vezes(network.clicksX)}</strong> e
				<strong>impressões: {vezes(network.imprX)}</strong>, somando os {network.sites} sites, de julho
				de 2025 (mês anterior à minha entrada) ao melhor mês sustentado dos últimos 12.
			</li>
			<li>
				<strong>Performance no celular:</strong> nota mediana {network.lighthouseMedian.toLocaleString('pt-BR')}
				de 100 no Lighthouse e LCP mediano de {network.lcpMedian.toLocaleString('pt-BR')} s, nas páginas
				iniciais medidas em 31/10/2026.
			</li>
			<li>
				<strong>Páginas mais leves:</strong> nas homes migradas, de cerca de 20 arquivos JavaScript e
				30 de CSS em 2025 para 1 e 2 a 3 hoje (medianas).
			</li>
		</ul>
		<p>
			Os resultados aparecem em multiplicadores: os números absolutos de tráfego pertencem aos donos dos
			sites e não são divulgados.
		</p>
	</section>

	<section aria-labelledby="cases-titulo">
		<h2 id="cases-titulo">Os cases</h2>
		<table>
			<caption>Sites do portfólio, stack e crescimento das impressões no Google</caption>
			<thead>
				<tr>
					<th scope="col">Site</th>
					<th scope="col">Projeto</th>
					<th scope="col">Stack</th>
					<th scope="col">Impressões</th>
				</tr>
			</thead>
			<tbody>
				{#each cases as c (c.slug)}
					<tr>
						<th scope="row"><a href={casePath(c.slug)}>{c.name}</a></th>
						<td>{c.segment}</td>
						<td>{c.stack}</td>
						<td>{c.imprX ? `${vezes(c.imprX)} (${mes(c.base)} a ${mes(c.bestImprMonth)})` : 'site novo'}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<Related
		title="Perfil profissional"
		links={[
			{ href: careerPage.path, text: 'Experiência, stack e disponibilidade para vagas' },
			{ href: person.cv, text: 'Currículo em PDF' }
		]}
	/>

	<Contact {whatsapp} title="Recrutador?" intro="Fale comigo sobre vagas de tech lead e desenvolvedor full stack." />
</main>
