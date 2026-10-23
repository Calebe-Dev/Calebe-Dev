<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { cityPages, services } from '$lib/site';

	const path = services.criacaoDeSites.path;
	const title = 'Criação de sites profissionais rápidos e otimizados - Calebe Araujo';
	const description =
		'Criação de sites profissionais e landing pages rápidos, acessíveis e otimizados para o Google desde o código, com mensuração de contatos.';
	const crumbs = [{ name: 'Criação de sites', path }];

	const faqs: FaqItem[] = [
		{
			question: 'Quanto custa criar um site profissional?',
			answer:
				'O valor depende do número de páginas, de quem produz os textos e as imagens, das integrações necessárias, como CRM, formulários e catálogo, e da plataforma escolhida. Uma landing page única é bem mais simples que um site institucional com dezenas de páginas de serviço. A proposta é feita depois de entender o objetivo do site.'
		},
		{
			question: 'Vou conseguir editar o site depois de pronto?',
			answer:
				'Sim. Em sites WordPress, a edição é feita no próprio painel. Em sites estáticos ou feitos com SvelteKit, o conteúdo pode ficar em um CMS headless, como o Directus, que oferece um painel de edição sem mexer no código.'
		},
		{
			question: 'O site já sai otimizado para o Google?',
			answer:
				'O site sai com a base técnica de SEO pronta: títulos e descrições por página, URLs descritivas, sitemap, dados estruturados, boa performance e conteúdo no HTML. A posição no Google depois disso depende da concorrência e da qualidade do conteúdo de cada página.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites profissionais',
			serviceType: 'Criação de sites',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<Breadcrumbs {crumbs} />

	<h1>Criação de sites profissionais rápidos e otimizados</h1>

	<p>
		Crio sites institucionais e landing pages que carregam rápido, funcionam bem no celular e já
		nascem preparados para o Google: cada página com um objetivo claro, conteúdo no HTML e
		mensuração de contatos configurada. Já desenvolvi mais de 60 landing pages e sites
		institucionais e hoje mantenho uma rede de 25 sites integrados a um CRM.
	</p>

	<section aria-labelledby="tipos-titulo">
		<h2 id="tipos-titulo">Tipos de site que desenvolvo</h2>

		<h3>Site institucional</h3>
		<p>
			Apresenta a empresa, os serviços e as formas de contato. A diferença está na estrutura: em vez
			de uma única página genérica de serviços, cada serviço importante ganha sua própria página, que
			pode aparecer nas buscas por aquele serviço específico.
		</p>

		<h3>Landing page</h3>
		<p>
			Página com um único objetivo de conversão, usada em campanhas de anúncios ou para uma busca
			muito específica. Precisa ser leve, direta e medir cada contato gerado.
		</p>

		<h3>Sites de conteúdo e portais</h3>
		<p>
			Sites com muitas páginas, como portais locais e redes de sites, em que a arquitetura de URLs, o
			sitemap e os links internos fazem diferença na indexação.
		</p>
	</section>

	<section aria-labelledby="incluido-titulo">
		<h2 id="incluido-titulo">O que vem incluído em todo site</h2>
		<ul>
			<li>HTML semântico e acessível, seguindo as diretrizes WCAG.</li>
			<li>Base técnica de SEO: title, meta description e H1 por página, sitemap, robots.txt e dados estruturados.</li>
			<li>Performance: páginas geradas de forma estática ou renderizadas no servidor e imagens otimizadas.</li>
			<li>Layout responsivo, pensado primeiro para o celular.</li>
			<li>Mensuração com Google Analytics, Google Tag Manager e pixels de conversão.</li>
			<li>Formulários e botões de WhatsApp que podem enviar os contatos direto para o CRM.</li>
		</ul>
	</section>

	<section aria-labelledby="tecnologia-titulo">
		<h2 id="tecnologia-titulo">WordPress, SvelteKit ou Angular: qual tecnologia usar</h2>
		<p>Não existe tecnologia certa para todo projeto. Esta é a regra que uso para recomendar:</p>
		<table>
			<caption>Quando usar cada tecnologia na criação de um site</caption>
			<thead>
				<tr>
					<th scope="col">Tecnologia</th>
					<th scope="col">Melhor para</th>
					<th scope="col">Ponto de atenção</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">WordPress</th>
					<td>Equipes que querem editar tudo sozinhas e publicar conteúdo com frequência</td>
					<td>Plugins e temas pesados deixam o site lento; exige manutenção e atualizações</td>
				</tr>
				<tr>
					<th scope="row">SvelteKit (site estático)</th>
					<td>Sites institucionais e landing pages que precisam ser muito rápidos</td>
					<td>A edição de conteúdo depende de um CMS headless integrado</td>
				</tr>
				<tr>
					<th scope="row">Angular</th>
					<td>Aplicações com áreas logadas, painéis e regras de negócio complexas</td>
					<td>Precisa de renderização no servidor para as páginas públicas serem bem indexadas</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="processo-titulo">
		<h2 id="processo-titulo">Como é o processo de criação do site</h2>
		<ol>
			<li><strong>Objetivo:</strong> quem o site precisa atrair e qual ação deve gerar (ligação, WhatsApp, orçamento).</li>
			<li><strong>Pesquisa e arquitetura:</strong> as buscas reais do seu público definem quais páginas o site terá.</li>
			<li><strong>Conteúdo e estrutura:</strong> textos, headings e chamadas de cada página antes do visual.</li>
			<li><strong>Desenvolvimento:</strong> código, integrações e testes de performance e acessibilidade.</li>
			<li><strong>Publicação:</strong> domínio, Search Console, sitemap e mensuração configurados.</li>
			<li><strong>Acompanhamento:</strong> indexação das páginas e primeiras consultas no Search Console.</li>
		</ol>
	</section>

	<section aria-labelledby="regiao-titulo">
		<h2 id="regiao-titulo">Criação de sites em Sorocaba e região</h2>
		<p>
			Atendo empresas de todo o Brasil de forma remota. Para a região de Sorocaba, há páginas com o
			contexto de cada cidade:
		</p>
		<ul>
			{#each cityPages.filter((c) => c.service.startsWith('Criação')) as page (page.path)}
				<li><a href={page.path}>Criação de sites em {page.city}</a></li>
			{/each}
		</ul>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre criação de sites" />

	<Related
		links={[
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites que já existem' },
			{ href: services.sistemasWeb.path, text: 'Sistemas web e integrações com CRM' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO antes de refazer o site' },
			{ href: '/sorocaba-e-regiao', text: 'Cidades atendidas no raio de 90 km de Sorocaba' }
		]}
	/>

	<Contact title="Peça uma proposta de site" intro="Conte o que a sua empresa faz e qual o objetivo do site; eu respondo com uma proposta de estrutura e os próximos passos." />
</main>
