<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, serviceArea, type Faq as FaqItem } from '$lib/schema';
	import { cityPages, person, regionPage, services, type WhatsApp } from '$lib/site';

	const path = regionPage.path;
	const title = 'Sites e SEO em Sorocaba e região (raio de 90 km) - Calebe Araujo';
	const description =
		'Criação de sites e SEO para empresas de Sorocaba e de um raio de 90 km: Itu, Indaiatuba, Jundiaí, Campinas e São Paulo. Veja como funciona o atendimento.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de Sorocaba e região e quero conversar sobre um projeto.',
		label: 'Falar comigo no WhatsApp'
	};

	const crumbs = [{ name: 'Sorocaba e região', path }];

	// Cidades citadas no texto da página (o raio completo vai no GeoCircle)
	const named = [
		'Sorocaba', 'Votorantim', 'Araçoiaba da Serra', 'Salto de Pirapora', 'Mairinque', 'Piedade',
		'Itu', 'Salto', 'Porto Feliz', 'Boituva', 'Tatuí', 'Indaiatuba',
		'Jundiaí', 'Campinas', 'Itapetininga', 'Cotia', 'São Paulo'
	];

	const faqs: FaqItem[] = [
		{
			question: 'Você atende empresas fora do raio de 90 km de Sorocaba?',
			answer:
				'Sim. O raio de 90 km define onde reuniões presenciais são viáveis. Consultoria, auditoria de SEO e desenvolvimento de sites são feitos de forma remota para empresas de qualquer cidade do Brasil.'
		},
		{
			question: 'Por que só algumas cidades têm página própria?',
			answer:
				'Cada página de cidade existe porque há pessoas buscando aquele serviço naquela cidade e porque há contexto local real para apresentar. Criar páginas quase iguais trocando só o nome da cidade é uma prática que o Google classifica como spam, além de não ajudar quem está lendo.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		type: 'CollectionPage',
		service: {
			name: 'Criação de sites e SEO em Sorocaba e região',
			serviceType: 'Criação de sites e consultoria de SEO',
			description,
			areaServed: [serviceArea, ...named.map(city)]
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Sites e SEO em Sorocaba e região (raio de 90 km)</h1>

		<p>
			Moro em {person.city} e atendo empresas da cidade e de um raio de cerca de 90 km, que vai do eixo
			de Itu e Indaiatuba até Jundiaí, Campinas e a capital paulista. Dentro desse raio, combino
			reuniões presenciais quando o projeto pede; fora dele, o trabalho é todo remoto.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="distancia-titulo">
		<h2 id="distancia-titulo">Como funciona o atendimento por distância</h2>
		<table>
			<caption>Formato de atendimento conforme a distância de Sorocaba (em linha reta)</caption>
			<thead>
				<tr>
					<th scope="col">Distância</th>
					<th scope="col">Exemplos de cidades</th>
					<th scope="col">Como funciona</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Até 30 km</th>
					<td>Votorantim, Araçoiaba da Serra, Salto de Pirapora, Mairinque, Piedade</td>
					<td>Reuniões presenciais com facilidade; desenvolvimento e acompanhamento remotos</td>
				</tr>
				<tr>
					<th scope="row">30 a 60 km</th>
					<td>Itu, Salto, Porto Feliz, Boituva, Tatuí, Indaiatuba</td>
					<td>Reunião presencial nas etapas principais, como o início do projeto</td>
				</tr>
				<tr>
					<th scope="row">60 a 90 km</th>
					<td>Jundiaí, Campinas, Itapetininga, Cotia, São Paulo</td>
					<td>Atendimento remoto, com encontro presencial quando o projeto exige</td>
				</tr>
				<tr>
					<th scope="row">Acima de 90 km</th>
					<td>Qualquer cidade do Brasil</td>
					<td>Atendimento 100% remoto, por vídeo, e-mail e WhatsApp</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">Páginas por cidade</h2>
		<p>Estas cidades têm uma página com o contexto local e o serviço mais buscado em cada uma:</p>
		<ul>
			{#each cityPages as page (page.path)}
				<li><a href={page.path}>{page.service} em {page.city}</a> ({page.km === 0 ? 'sede' : `cerca de ${page.km} km`})</li>
			{/each}
		</ul>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Onde as empresas da região procuram sites e SEO</h2>
		<p>
			Para decidir quais cidades teriam página própria, medi em outubro de 2026 quantas sugestões o
			autocompletar do Google mostra ao combinar cada cidade com cinco buscas: criação de sites,
			agência de marketing digital, agência de SEO, desenvolvedor web e vagas de desenvolvedor. É um
			indicador de que existe busca real, não uma medida de volume. As cidades com mais sinais:
		</p>
		<table>
			<caption>Sinais de busca por cidade no raio de 90 km de Sorocaba (outubro de 2026)</caption>
			<thead>
				<tr>
					<th scope="col">Cidade</th>
					<th scope="col">Distância de Sorocaba</th>
					<th scope="col">Sugestões encontradas</th>
				</tr>
			</thead>
			<tbody>
				<tr><th scope="row">Sorocaba</th><td>sede</td><td>15</td></tr>
				<tr><th scope="row">São Paulo</th><td>84 km</td><td>15</td></tr>
				<tr><th scope="row">Campinas</th><td>77 km</td><td>10</td></tr>
				<tr><th scope="row">Indaiatuba</th><td>52 km</td><td>7</td></tr>
				<tr><th scope="row">Jundiaí</th><td>67 km</td><td>3</td></tr>
				<tr><th scope="row">Itu</th><td>31 km</td><td>2</td></tr>
			</tbody>
		</table>
		<p>
			A leitura dos dados: a busca por esses serviços se concentra nas cidades-polo. Na maioria das
			cidades menores do raio, como Votorantim, Porto Feliz e Boituva, quase não aparecem sugestões
			com o nome da cidade, o que indica que as empresas dali procuram fornecedores nas cidades
			maiores ou sem citar a cidade. Para elas, o que pesa é um bom perfil no Google e um site com os
			serviços bem descritos, não uma página com o nome de cada município.
		</p>
	</section>

	<section aria-labelledby="local-titulo">
		<h2 id="local-titulo">O que muda no SEO de uma empresa local</h2>
		<ul>
			<li><strong>Perfil da Empresa no Google:</strong> categoria correta, área de atendimento, fotos e horários atualizados.</li>
			<li><strong>Dados consistentes:</strong> nome, endereço e telefone idênticos no site, no perfil do Google e em diretórios.</li>
			<li><strong>Uma página por serviço:</strong> cada serviço importante com sua própria página, que pode aparecer na busca específica.</li>
			<li><strong>Páginas de cidade só com demanda:</strong> quando há busca real e algo local para dizer, não como lista de municípios.</li>
		</ul>
	</section>

	<Faq {faqs} />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Criação de sites para empresas de qualquer cidade' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico remota' },
			{ href: services.seoB2b.path, text: 'SEO para indústrias e empresas B2B da região' }
		]}
	/>

	<Contact {whatsapp} />
</main>
