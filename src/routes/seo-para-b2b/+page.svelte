<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { services, type WhatsApp } from '$lib/site';
	import { cases, casePath, portfolioPage } from '$lib/portfolio';

	// Casos B2B reais da rede (telecom para empresas), na ordem de crescimento de cliques
	const casosB2b = ['linkdedicada', 'planotimcorporativo', 'planotimempresa', 'meupabxemnuvem']
		.map((slug) => cases.find((c) => c.slug === slug)!)
		.filter((c) => c.clicksX);
	const vezes = (x: number) => `${x.toLocaleString('pt-BR', { maximumFractionDigits: 1 })}x`;
	const mes = (ym: string) => {
		const [y, m] = ym.split('-');
		return `${['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'][Number(m) - 1]}/${y.slice(2)}`;
	};

	const path = services.seoB2b.path;
	const title = 'SEO B2B: consultoria para gerar leads de empresas B2B - Calebe Araujo';
	const description =
		'SEO B2B com casos reais: sites de telecom para empresas com até 127x mais cliques no Google. Páginas por solução, cauda longa comercial e leads no CRM.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de SEO para B2B e quero gerar mais leads para a minha empresa.',
		label: 'Falar sobre SEO B2B pelo WhatsApp'
	};

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
				'O indicador principal é o número de leads qualificados gerados por página orgânica, e não o tráfego. Para isso, o formulário e o WhatsApp do site precisam registrar a página de origem no CRM. Com esse dado, dá para cruzar com as vendas fechadas, calcular o retorno (ROI) de cada página e comparar o custo de aquisição de cliente (CAC) da busca orgânica com o dos anúncios.'
		},
		{
			question: 'Consultoria de SEO B2B ou agência de SEO B2B?',
			answer:
				'Depende de onde está o gargalo. Uma agência de SEO para empresas B2B costuma ser a escolha quando a necessidade é produzir muito conteúdo e campanhas todo mês. Uma consultoria de SEO B2B feita por um desenvolvedor faz mais sentido quando o problema está no site: páginas que não indexam, falta de uma página por solução ou leads que chegam sem origem no CRM. Os dois modelos podem trabalhar juntos, com o consultor cuidando da base técnica.'
		},
		{
			question: 'Quanto tempo o SEO B2B leva para gerar leads?',
			answer:
				'Em sites que já existem, páginas de solução bem estruturadas costumam receber as primeiras visitas qualificadas em dois a quatro meses. Como as buscas B2B têm pouca concorrência de conteúdo bom, é comum ranquear antes do que em mercados B2C, mas o lead depende também do ciclo de compra do cliente, que pode levar meses.'
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
			serviceType: 'Consultoria de SEO B2B e geração de leads',
			description,
			audience: 'Empresas que vendem produtos e serviços para outras empresas'
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-b2b" />
		<Breadcrumbs {crumbs} />

		<h1>SEO B2B: consultoria para gerar leads de empresas B2B</h1>

		<p>
			SEO B2B, ou SEO para B2B, é a estratégia de busca orgânica de empresas que vendem para outras empresas: na
			prática, a forma de divulgar a sua empresa para outras empresas pelo Google, aparecendo quando um
			comprador pesquisa o que você vende. O ciclo de vendas é mais longo, envolve vários tomadores de decisão e começa com pesquisas específicas,
			muitas vezes com pouco volume. Por isso o foco não é atrair muitas visitas, e sim aparecer para quem
			está comparando fornecedores e transformar essa visita em um lead registrado no CRM.
		</p>
		<p>
			Na consultoria de SEO para empresas B2B, estruturo as páginas, corrijo a parte técnica do site e ligo cada
			formulário ao CRM, para que a empresa saiba quais buscas geram oportunidades de venda.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="diferencas-titulo">
		<h2 id="diferencas-titulo">SEO B2B vs B2C: o que muda</h2>
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
					<th scope="row">Jornada de compra</th>
					<td>Curta, muitas vezes decidida por uma pessoa</td>
					<td>Longa, com vários tomadores de decisão e etapas no funil de vendas</td>
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
		<h2 id="estrutura-titulo">Como estruturo o SEO para empresas B2B</h2>
		<ol>
			<li><strong>Uma página por solução:</strong> cada produto ou serviço vendável ganha sua página comercial, que funciona como página principal do tema.</li>
			<li><strong>Páginas por segmento:</strong> quando há busca real, a solução é apresentada para setores específicos, como indústria, empresas de software (SaaS), clínicas ou escritórios.</li>
			<li><strong>Cauda longa comercial:</strong> buscas de fundo de funil, como "quanto custa", "como contratar" e comparativos entre alternativas, em que o comprador já está decidindo.</li>
			<li><strong>Prova e autoria:</strong> casos, números próprios e quem está por trás da empresa, que pesam na confiança do comprador e do Google.</li>
			<li><strong>Lead com origem:</strong> formulários e WhatsApp registrando no CRM a página que gerou cada contato.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Casos de SEO B2B: rede de sites de telecom empresarial</h2>
		<p>
			No Grupo OC, trabalho em uma rede de sites B2B de telecomunicações para empresas, com páginas de
			planos corporativos, link dedicado e telefonia empresarial. Os sites são integrados a um CRM
			próprio em microsserviços, que centraliza os leads de 25 sites e mostra de qual página veio cada
			oportunidade. É esse modelo, de páginas por intenção ligadas ao CRM, que aplico em projetos B2B.
		</p>
		<table>
			<caption>Cliques no Google: mês de referência comparado ao melhor mês dos últimos 12 (Search Console)</caption>
			<thead>
				<tr>
					<th scope="col">Site</th>
					<th scope="col">O que vende</th>
					<th scope="col">Crescimento de cliques</th>
				</tr>
			</thead>
			<tbody>
				{#each casosB2b as c (c.slug)}
					<tr>
						<th scope="row"><a href={casePath(c.slug)}>{c.name}</a></th>
						<td>{c.segment}</td>
						<td>{vezes(c.clicksX!)} ({mes(c.base)} a {mes(c.bestClicksMonth)})</td>
					</tr>
				{/each}
			</tbody>
		</table>
		<p>
			Os números absolutos de tráfego pertencem aos clientes; por isso mostro quantas vezes o resultado
			cresceu. O que esses sites têm em comum é o que descrevo acima: uma página por solução ("link
			dedicado", "PABX em nuvem", "plano TIM para CNPJ"), buscas de baixo volume e alta intenção e
			o lead registrado no CRM com a página de origem. Os detalhes de cada projeto estão no
			<a href={portfolioPage.path}>portfólio</a>.
		</p>
	</section>

	<section aria-labelledby="keywords-titulo">
		<h2 id="keywords-titulo">Palavras-chave B2B: poucas buscas, alto valor</h2>
		<p>
			Em B2B, o custo por clique mostra quanto vale uma busca. No Google Ads, termos como "SEO B2B" e
			"link dedicado" chegam a dezenas ou centenas de reais por clique, mesmo com poucas centenas de
			pesquisas por mês. Cada visita orgânica nessas buscas é um clique que a empresa não paga. Por
			isso a pesquisa de palavras-chave B2B prioriza:
		</p>
		<ul>
			<li><strong>Termos de solução:</strong> o nome do que se compra, como "PABX em nuvem" ou "software de gestão para indústria".</li>
			<li><strong>Termos de requisito:</strong> "com SLA", "para CNPJ", "com nota fiscal", "integração com ERP".</li>
			<li><strong>Termos de decisão:</strong> "preço", "quanto custa", "melhor", "comparativo", "alternativa a".</li>
			<li><strong>Termos de segmento:</strong> a solução aplicada a um setor, quando há busca real por essa combinação.</li>
		</ul>
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
		<h3>Marketing industrial B2B</h3>
		<p>
			No marketing industrial, quem pesquisa costuma ser um engenheiro, um comprador técnico ou um
			gestor de manutenção procurando especificações, normas, aplicações e fornecedores. Páginas com
			dados técnicos de cada produto, setores atendidos e capacidade de produção respondem a essas buscas
			melhor que textos institucionais genéricos, e servem também como material para o time comercial.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO para B2B" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: portfolioPage.path, text: 'Portfólio: 21 sites em produção' },
			{ href: services.guestPost.path, text: 'Guest posts em portais do seu setor' },
			{ href: services.sistemasWeb.path, text: 'CRM e integrações para leads B2B' },
			{ href: services.criacaoDeSites.path, text: 'Sites com páginas por solução e segmento' },
			{ href: '/criacao-de-sites-jundiai', text: 'Exemplo de estrutura B2B para logística' }
		]}
	/>

	<Contact {whatsapp} title="Converse sobre SEO para a sua empresa B2B" intro="Conte o que a sua empresa vende, para quem e como os leads chegam hoje." />
</main>
