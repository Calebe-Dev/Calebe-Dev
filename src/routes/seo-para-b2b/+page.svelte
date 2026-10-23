<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { services } from '$lib/site';

	const path = services.seoB2b.path;
	const title = 'SEO para B2B: geração de leads pela busca orgânica - Calebe Araujo';
	const description =
		'SEO para empresas B2B: páginas por solução e por segmento, cauda longa comercial e leads medidos no CRM. Experiência com rede de sites de telecom.';
	const crumbs = [{ name: 'SEO para B2B', path }];

	const faqs: FaqItem[] = [
		{
			question: 'SEO funciona para empresas B2B com poucas buscas?',
			answer:
				'Funciona, e costuma ser mais rentável que em B2C. Uma busca com 50 pesquisas por mês pode valer mais que uma com 50 mil quando quem pesquisa é um comprador com orçamento. Em B2B, o objetivo não é volume de visitas, e sim aparecer para as poucas buscas que antecedem uma compra.'
		},
		{
			question: 'Como medir o retorno do SEO em B2B?',
			answer:
				'O indicador principal é o número de leads qualificados gerados por página orgânica, e não o tráfego. Para isso, o formulário e o WhatsApp do site precisam registrar a página de origem no CRM. Com esse dado, dá para cruzar com as vendas fechadas e calcular o retorno de cada página.'
		},
		{
			question: 'Vale a pena manter um blog em uma empresa B2B?',
			answer:
				'Vale quando cada artigo apoia uma página comercial, respondendo a dúvidas reais de quem está avaliando a compra, como comparativos, custos e requisitos técnicos. Blog com notícias genéricas do setor raramente gera leads e dilui os esforços do site.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'SEO para empresas B2B',
			serviceType: 'SEO B2B e geração de leads',
			description,
			audience: 'Empresas que vendem produtos e serviços para outras empresas'
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<Breadcrumbs {crumbs} />

	<h1>SEO para B2B: geração de leads pela busca orgânica</h1>

	<p>
		SEO para B2B é a estratégia de busca orgânica de empresas que vendem para outras empresas. O ciclo
		de compra é mais longo, envolve várias pessoas e começa com pesquisas específicas, muitas vezes com
		pouco volume. Por isso o foco não é atrair muitas visitas, e sim aparecer para quem está
		comparando fornecedores e transformar essa visita em um lead registrado no CRM.
	</p>

	<section aria-labelledby="diferencas-titulo">
		<h2 id="diferencas-titulo">Diferenças entre SEO B2B e B2C</h2>
		<table>
			<caption>Como o SEO muda quando o cliente é uma empresa</caption>
			<thead>
				<tr>
					<th scope="col">Aspecto</th>
					<th scope="col">B2C</th>
					<th scope="col">B2B</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Volume de buscas</th>
					<td>Alto, com muitas buscas genéricas</td>
					<td>Baixo, com buscas técnicas e específicas</td>
				</tr>
				<tr>
					<th scope="row">Conversão</th>
					<td>Compra no site ou visita à loja</td>
					<td>Pedido de proposta, formulário ou contato com consultor</td>
				</tr>
				<tr>
					<th scope="row">Conteúdo que converte</th>
					<td>Produto, preço e avaliações</td>
					<td>Páginas por solução, por segmento, comparativos e requisitos</td>
				</tr>
				<tr>
					<th scope="row">Métrica principal</th>
					<td>Vendas e ticket médio</td>
					<td>Leads qualificados por página e vendas fechadas no CRM</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="estrutura-titulo">
		<h2 id="estrutura-titulo">Como estruturo o SEO de uma empresa B2B</h2>
		<ol>
			<li><strong>Uma página por solução:</strong> cada produto ou serviço vendável ganha sua página comercial, que funciona como página principal do tema.</li>
			<li><strong>Páginas por segmento:</strong> quando há busca real, a solução é apresentada para setores específicos, como indústria, clínicas ou escritórios.</li>
			<li><strong>Cauda longa comercial:</strong> buscas como "quanto custa", "como contratar" e comparativos entre alternativas, onde o comprador já está decidindo.</li>
			<li><strong>Prova e autoria:</strong> casos, números próprios e quem está por trás da empresa, que pesam na confiança do comprador e do Google.</li>
			<li><strong>Lead com origem:</strong> formulários e WhatsApp registrando no CRM a página que gerou cada contato.</li>
		</ol>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência com SEO B2B: rede de sites de telecom empresarial</h2>
		<p>
			No Grupo OC, trabalho em uma rede de sites B2B de telecomunicações para empresas, com páginas de
			planos corporativos, link dedicado e telefonia empresarial. Os sites são integrados a um CRM
			próprio em microsserviços, que centraliza os leads de 25 sites e mostra de qual página veio cada
			oportunidade. É esse modelo, de páginas por intenção ligadas ao CRM, que aplico em projetos B2B.
		</p>
	</section>

	<section aria-labelledby="marketing-titulo">
		<h2 id="marketing-titulo">Onde o SEO entra no marketing B2B</h2>
		<p>
			No marketing B2B, prospecção ativa, LinkedIn e anúncios geram demanda; o SEO captura a demanda
			que já existe, de compradores que pesquisam no Google por conta própria. Os canais se
			complementam: a página que aparece na busca orgânica é a mesma que recebe o tráfego das
			campanhas, então uma página bem estruturada melhora os dois resultados. Para indústrias e
			empresas de serviços da região de Sorocaba, que vendem para todo o país, a busca orgânica é um
			canal de aquisição que não depende de verba de mídia contínua.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO para B2B" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: services.sistemasWeb.path, text: 'CRM e integrações para leads B2B' },
			{ href: services.criacaoDeSites.path, text: 'Sites com páginas por solução e segmento' },
			{ href: '/criacao-de-sites-jundiai', text: 'Sites para indústria e logística em Jundiaí' }
		]}
	/>

	<Contact title="Converse sobre SEO para a sua empresa B2B" intro="Conte o que a sua empresa vende, para quem e como os leads chegam hoje." />
</main>
