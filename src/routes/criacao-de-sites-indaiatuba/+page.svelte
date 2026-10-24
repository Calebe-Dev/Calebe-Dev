<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/criacao-de-sites-indaiatuba';
	const title = 'Criação de sites e SEO em Indaiatuba - Calebe Araujo';
	const description =
		'Criação de sites e SEO em Indaiatuba (SP): sites rápidos, páginas por serviço e SEO local para empresas da cidade e da região de Viracopos.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Sou de Indaiatuba e quero um orçamento de site e SEO.',
		label: 'Pedir orçamento em Indaiatuba pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Indaiatuba', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Você também faz gestão de redes sociais e anúncios?',
			answer:
				'Meu foco é o site, o SEO e a mensuração. Tenho experiência com campanhas no Meta Ads e no Google Ads, então preparo o site e as páginas de destino para as campanhas e configuro o rastreamento das conversões. Para a gestão contínua de redes sociais, o ideal é um profissional ou uma agência dedicada, trabalhando junto com o site.'
		},
		{
			question: 'Vale a pena ter páginas separadas para Indaiatuba e Campinas?',
			answer:
				'Só se a empresa atende as duas cidades de verdade e tem algo diferente para dizer em cada uma, como uma unidade, uma equipe ou serviços específicos. Repetir o mesmo texto trocando o nome da cidade divide a força do site e pode ser tratado como spam pelo Google.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites e SEO em Indaiatuba',
			serviceType: 'Criação de sites e SEO',
			description,
			areaServed: city('Indaiatuba')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Criação de sites e SEO em Indaiatuba</h1>

		<p>
			Desenvolvo sites e faço SEO para empresas de Indaiatuba que querem ser encontradas no Google e
			receber contatos qualificados. A cidade fica a cerca de 50 km de Sorocaba, onde moro, e o
			atendimento combina reuniões presenciais nas etapas principais com o trabalho remoto no dia a dia.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="agencia-titulo">
		<h2 id="agencia-titulo">Agência de marketing digital ou especialista em site e SEO?</h2>
		<p>
			Um dado curioso da cidade: quando medi as sugestões de busca do Google em outubro de 2026,
			Indaiatuba teve mais sugestões para "agência de marketing digital" do que para "criação de
			sites". As empresas da cidade costumam procurar um pacote completo de marketing.
		</p>
		<p>
			Uma agência resolve bem redes sociais, criação de peças e gestão de anúncios. O que costuma ficar
			em segundo plano nesses pacotes é a parte técnica: velocidade do site, estrutura de páginas,
			indexação e a integração dos contatos com o comercial. É exatamente aí que eu atuo, seja
			sozinho, seja trabalhando junto com a agência que já cuida do marketing da empresa.
		</p>
	</section>

	<section aria-labelledby="divisao-titulo">
		<h2 id="divisao-titulo">Como dividir o trabalho com a agência de marketing</h2>
		<p>
			Quando a empresa já tem uma agência, a divisão mais comum fica assim. Ela evita que duas equipes
			mexam no mesmo lugar e deixa claro quem responde por cada resultado:
		</p>
		<table>
			<caption>Divisão de responsabilidades entre agência e especialista em site e SEO</caption>
			<thead>
				<tr>
					<th scope="col">Frente</th>
					<th scope="col">Agência de marketing</th>
					<th scope="col">Especialista em site e SEO</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Redes sociais e criação de peças</th>
					<td>Responsável</td>
					<td>Não atua</td>
				</tr>
				<tr>
					<th scope="row">Anúncios pagos</th>
					<td>Gestão das campanhas</td>
					<td>Páginas de destino e rastreamento de conversões</td>
				</tr>
				<tr>
					<th scope="row">Site</th>
					<td>Briefing de comunicação e identidade visual</td>
					<td>Estrutura, desenvolvimento, velocidade e manutenção técnica</td>
				</tr>
				<tr>
					<th scope="row">SEO</th>
					<td>Pautas de conteúdo, quando houver</td>
					<td>Pesquisa de buscas, SEO técnico e acompanhamento no Search Console</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="empresas-titulo">
		<h2 id="empresas-titulo">Sites para o perfil das empresas de Indaiatuba</h2>
		<p>
			Indaiatuba é vizinha do Aeroporto de Viracopos e tem um distrito industrial ativo, além de um
			comércio e uma oferta de serviços que crescem junto com a população. Isso gera dois públicos com
			buscas diferentes:
		</p>
		<ul>
			<li><strong>Indústria, logística e B2B:</strong> compradores de outras empresas pesquisam por solução, especificação e capacidade de atendimento. O site precisa de páginas por solução e de um pedido de cotação simples.</li>
			<li><strong>Serviços e comércio local:</strong> o cliente está na cidade e decide pelo mapa do Google e pelo celular. O site precisa estar alinhado ao Perfil da Empresa no Google, com uma página para cada serviço.</li>
		</ul>
	</section>

	<section aria-labelledby="entrega-titulo">
		<h2 id="entrega-titulo">O que entra no projeto</h2>
		<ul>
			<li>Site rápido, com conteúdo no HTML e bons Core Web Vitals no celular.</li>
			<li>Pesquisa das buscas reais do seu público para definir as páginas do site.</li>
			<li>SEO local e dados estruturados com o endereço e a área de atendimento da empresa.</li>
			<li>Formulários e WhatsApp com a origem de cada contato registrada.</li>
		</ul>
		<p>
			Para sites que já existem, o caminho começa por uma <a href={services.auditoriaSeo.path}>auditoria de SEO</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre sites e SEO em Indaiatuba" />

	<Related
		links={[
			{ href: '/criacao-de-sites-campinas', text: 'Sites para empresas da região de Campinas' },
			{ href: '/criacao-de-sites-itu', text: 'Sites para turismo e comércio em Itu' },
			{ href: services.seoB2b.path, text: 'SEO para indústrias e empresas B2B' },
			{ href: regionPage.path, text: 'Atendimento na região de Sorocaba' }
		]}
	/>

	<Contact {whatsapp} title="Fale sobre o site da sua empresa em Indaiatuba" intro="Conte o que a sua empresa faz e como os clientes chegam até você hoje." />
</main>
