<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, pageGraph } from '$lib/schema';
	import { careerPage, cityPages, guides, person, regionPage, services, sitemapPage, type WhatsApp } from '$lib/site';

	const path = sitemapPage.path;
	const title = 'Mapa do site - Calebe Araujo';
	const description =
		'Mapa do site de Calebe Araujo: todas as páginas de serviços de SEO e desenvolvimento, guias, atendimento por cidade e perfil profissional.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pelo mapa do seu site e quero conversar sobre um projeto.',
		label: 'Falar comigo no WhatsApp'
	};
	const crumbs = [{ name: 'Mapa do site', path }];

	type Entry = { href: string; text: string; note: string };

	const groups: { id: string; title: string; entries: Entry[] }[] = [
		{
			id: 'servicos',
			title: 'Serviços',
			entries: [
				{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico', note: 'diagnóstico, plano priorizado e correções no código' },
				{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO', note: 'relatório técnico, on-page e de conteúdo, priorizado por impacto' },
				{ href: services.criacaoDeSites.path, text: 'Criação de sites profissionais', note: 'sites institucionais e landing pages rápidos e otimizados' },
				{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites e Core Web Vitals', note: 'como acelerar um site lento' },
				{ href: services.sistemasWeb.path, text: 'Desenvolvimento de sistemas web', note: 'Software sob medida: CRMs, integrações, APIs REST e headless CMS' },
				{ href: services.seoB2b.path, text: 'SEO para empresas B2B', note: 'geração de leads pela busca orgânica' }
			]
		},
		{
			id: 'guias',
			title: 'Guias de SEO',
			entries: [
				{ href: guides.siteNaoAparece.path, text: 'Site não aparece no Google', note: 'diagnóstico de indexação em 7 passos' },
				{ href: guides.seoParaIa.path, text: 'SEO para IA', note: 'como aparecer no ChatGPT e no AI Overviews' },
				{ href: guides.seoAngular.path, text: 'SEO para sites Angular', note: 'SSR, pré-renderização e indexação' }
			]
		},
		{
			id: 'cidades',
			title: 'Atendimento por cidade',
			entries: [
				{ href: regionPage.path, text: 'Sorocaba e região (raio de 90 km)', note: 'atendimento por distância e demanda por cidade' },
				...cityPages.map((c) => ({
					href: c.path,
					text: `${c.service} em ${c.city}`,
					note: c.km === 0 ? 'sede' : `cerca de ${c.km} km de Sorocaba`
				}))
			]
		},
		{
			id: 'perfil',
			title: 'Perfil profissional',
			entries: [
				{ href: careerPage.path, text: 'Desenvolvedor full stack em Sorocaba', note: 'experiência, stack e disponibilidade para vagas' },
				{ href: person.cv, text: 'Currículo em PDF', note: 'versão para download' }
			]
		}
	];

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
