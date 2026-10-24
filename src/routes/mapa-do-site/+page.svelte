<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, pageGraph } from '$lib/schema';
	import { siteGroups, sitemapPage, type WhatsApp } from '$lib/site';

	const path = sitemapPage.path;
	const title = 'Mapa do site - Calebe Araujo';
	const description =
		'Mapa do site de Calebe Araujo: todas as páginas de serviços de SEO e desenvolvimento, guias, atendimento por cidade e perfil profissional.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pelo mapa do seu site e quero conversar sobre um projeto.',
		label: 'Falar comigo no WhatsApp'
	};
	const crumbs = [{ name: 'Mapa do site', path }];

	const groups = siteGroups;

	const all = [{ href: '/', text: 'Página inicial', note: '' }, ...groups.flatMap((g) => g.entries)];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		type: 'CollectionPage',
		extra: [
			{
				'@type': 'ItemList',
				'@id': `${absolute(path)}#paginas`,
				name: 'Páginas do site de Calebe Araujo',
				numberOfItems: all.length,
				itemListElement: all.map((e, i) => ({
					'@type': 'ListItem',
					position: i + 1,
					name: e.text,
					url: absolute(e.href)
				}))
			}
		]
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Mapa do site</h1>

		<p>
			Todas as páginas do site, organizadas por assunto: serviços de SEO e desenvolvimento, guias,
			atendimento por cidade na região de Sorocaba e o perfil profissional com o currículo.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="inicio-titulo">
		<h2 id="inicio-titulo">Página inicial</h2>
		<ul>
			<li><a href="/">Calebe Araujo: desenvolvedor full stack e consultor de SEO</a></li>
		</ul>
	</section>

	{#each groups as group (group.id)}
		<section aria-labelledby={`${group.id}-titulo`}>
			<h2 id={`${group.id}-titulo`}>{group.title}</h2>
			<ul>
				{#each group.entries as entry (entry.href)}
					<li><a href={entry.href}>{entry.text}</a>: {entry.note}.</li>
				{/each}
			</ul>
		</section>
	{/each}

	<section aria-labelledby="arquivos-titulo">
		<h2 id="arquivos-titulo">Arquivos para buscadores</h2>
		<ul>
			<li><a href="/sitemap.xml">sitemap.xml</a>: lista de URLs para o Google e o Bing.</li>
			<li><a href="/robots.txt">robots.txt</a>: regras de rastreamento.</li>
			<li><a href="/llms.txt">llms.txt</a>: resumo do site para ferramentas de IA.</li>
		</ul>
	</section>

	<Contact {whatsapp} />
</main>
