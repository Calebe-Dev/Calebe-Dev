<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services } from '$lib/site';

	const path = '/criacao-de-sites-jundiai';
	const title = 'Criação de sites em Jundiaí - Calebe Araujo';
	const description =
		'Criação de sites em Jundiaí (SP) para indústria, logística e serviços: páginas por solução, SEO técnico e contatos integrados ao CRM.';
	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Jundiaí', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Por que separar uma página para cada solução da empresa?',
			answer:
				'Porque cada solução é pesquisada de um jeito. Uma transportadora que faz carga fracionada e armazenagem atende duas buscas diferentes, e uma página genérica de serviços dificilmente aparece bem para as duas. Com uma página por solução, cada uma pode responder à sua busca e medir quantos contatos gera.'
		},
		{
			question: 'Você atende Itupeva, Louveira e Várzea Paulista?',
			answer:
				'Sim. As cidades vizinhas de Jundiaí são atendidas da mesma forma: trabalho remoto no dia a dia e encontro presencial quando o projeto exige.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites em Jundiaí',
			serviceType: 'Criação de sites',
			description,
			areaServed: city('Jundiaí')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<Breadcrumbs {crumbs} />

	<h1>Criação de sites em Jundiaí</h1>

	<p>
		Faço criação de sites em Jundiaí com foco em empresas que vendem para outras empresas: indústrias,
		operadores logísticos e prestadores de serviço. O site é estruturado para aparecer nas buscas de
		quem está comparando fornecedores e para entregar cada contato ao time comercial com a página de
		origem registrada.
	</p>

	<section aria-labelledby="logistica-titulo">
		<h2 id="logistica-titulo">Sites para indústria e logística em Jundiaí</h2>
		<p>
			Jundiaí fica entre São Paulo e Campinas, no eixo das rodovias Anhanguera e Bandeirantes, o que fez
			da cidade um polo de logística e de indústria. Essas empresas vendem para clientes de todo o
			estado e de outras regiões, e o comprador pesquisa por solução, capacidade e área atendida antes
			de pedir uma cotação.
		</p>
		<ul>
			<li><strong>Páginas por solução:</strong> cada serviço ou linha de produto com a sua página, como armazenagem, transporte ou usinagem.</li>
			<li><strong>Informações de decisão:</strong> capacidade, certificações, regiões atendidas e prazos, que são o que o comprador compara.</li>
			<li><strong>Pedido de cotação simples:</strong> formulário curto que chega ao CRM com a página que gerou o pedido.</li>
		</ul>
		<p>
			Essa estrutura é a base da estratégia que descrevo em <a href={services.seoB2b.path}>SEO para empresas B2B</a>,
			aplicada a partir da experiência com uma rede de sites B2B integrada a um CRM próprio.
		</p>
	</section>

	<section aria-labelledby="exemplo-titulo">
		<h2 id="exemplo-titulo">Exemplo de estrutura para uma empresa de logística</h2>
		<p>
			Para ilustrar, este seria um ponto de partida para o site de um operador logístico de Jundiaí. A
			estrutura final sai da pesquisa das buscas reais do seu público:
		</p>
		<table>
			<caption>Estrutura de páginas sugerida para um operador logístico</caption>
			<thead>
				<tr>
					<th scope="col">Página</th>
					<th scope="col">Busca que atende</th>
					<th scope="col">O que precisa mostrar</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Armazenagem</td>
					<td>Empresas procurando galpão ou operador para estoque</td>
					<td>Área, tipos de carga, sistema de gestão do estoque e certificações</td>
				</tr>
				<tr>
					<td>Transporte de cargas</td>
					<td>Compradores comparando transportadoras por rota</td>
					<td>Regiões atendidas, tipos de veículo, prazos e rastreamento</td>
				</tr>
				<tr>
					<td>Segmentos atendidos</td>
					<td>Indústrias de um setor específico</td>
					<td>Exigências do setor e casos de clientes parecidos</td>
				</tr>
				<tr>
					<td>Cotação</td>
					<td>Quem já decidiu e quer preço</td>
					<td>Formulário curto, prazo de resposta e contato direto</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="local-titulo">
		<h2 id="local-titulo">Comércio e serviços para o público de Jundiaí</h2>
		<p>
			Para empresas que atendem o morador da cidade e das vizinhas, como Itupeva, Louveira e Várzea
			Paulista, o site trabalha junto com o Perfil da Empresa no Google: mesmos dados de contato, uma
			página para cada serviço e carregamento rápido no celular, de onde vem a maior parte das buscas
			locais.
		</p>
	</section>

	<section aria-labelledby="atendimento-titulo">
		<h2 id="atendimento-titulo">Como funciona o atendimento em Jundiaí</h2>
		<p>
			Jundiaí fica a cerca de 70 km de Sorocaba. O projeto é conduzido de forma remota, com reuniões
			por vídeo, e um encontro presencial pode ser combinado quando o projeto exige. Para empresas
			que já têm site, começo com uma <a href={services.auditoriaSeo.path}>auditoria de SEO</a> antes de
			propor mudanças.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre criação de sites em Jundiaí" />

	<Related
		links={[
			{ href: services.seoB2b.path, text: 'SEO para empresas B2B' },
			{ href: services.sistemasWeb.path, text: 'Integração do site com CRM e ERP' },
			{ href: '/criacao-de-sites-campinas', text: 'Criação de sites em Campinas' },
			{ href: regionPage.path, text: 'Atendimento na região de Sorocaba' }
		]}
	/>

	<Contact title="Peça uma proposta de site em Jundiaí" intro="Conte quais soluções a sua empresa oferece e para quem você vende." />
</main>
