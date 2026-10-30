<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { freeSiteOffer, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { freeSite, nichePages, services, type WhatsApp } from '$lib/site';

	const path = '/site-para-imobiliaria';
	const title = 'Site para imobiliária e corretor de imóveis grátis - Calebe Araujo';
	const description =
		'Site para imobiliária e corretor de imóveis, grátis: até 5 páginas sobre a região e os serviços, com o CRECI exigido por lei e otimizado para o Google.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site para imobiliária e quero consultar a disponibilidade do site grátis. Minha imobiliária é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [
		{ name: 'Site grátis para empresas', path: services.siteGratis.path },
		{ name: 'Site para imobiliária', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'O site grátis tem cadastro e busca de imóveis?',
			answer:
				'Não. O site grátis tem até 5 páginas institucionais, sobre a imobiliária, a região e os serviços. Um catálogo com cadastro, filtros e busca de imóveis é um sistema, que pode ser desenvolvido como serviço pago e opcional. Outra opção é levar o visitante do site para a vitrine de imóveis que a imobiliária já usa.'
		},
		{
			question: 'Onde o número do CRECI aparece no site?',
			answer:
				'Em todas as páginas. A Lei 6.530/1978 proíbe fazer anúncio ou impresso relativo à atividade profissional sem mencionar o número de inscrição, então o site traz o nome e o CRECI do corretor ou da imobiliária no rodapé de cada página.'
		},
		{
			question: 'Posso anunciar um imóvel no site sem autorização do proprietário?',
			answer:
				'Não. A Lei 6.530/1978 proíbe o corretor de anunciar publicamente proposta de transação para a qual não esteja autorizado por documento escrito. Antes de um imóvel aparecer no site ou em qualquer anúncio, a autorização precisa existir.'
		},
		{
			question: 'O site serve para corretor autônomo?',
			answer:
				'Serve. A estrutura é a mesma de uma imobiliária, com a apresentação do corretor, a região em que atua e os serviços. O que muda é a identificação: o nome e o número de inscrição do corretor no CRECI.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para imobiliária e corretor de imóveis',
			serviceType: 'Criação e hospedagem de site',
			description,
			audience: 'Imobiliárias e corretores de imóveis',
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="regiao" />
		<Breadcrumbs {crumbs} />

		<h1>Site para imobiliária e corretor de imóveis grátis</h1>

		<p>
			Um site para imobiliária ou para corretor de imóveis tem um papel diferente do portal de anúncios:
			ele apresenta quem intermedia o negócio, a região em que atua e os serviços oferecidos, como venda,
			locação e administração de imóveis, para quem pesquisa uma imobiliária de confiança no Google. E
			precisa seguir a lei que regula a profissão, a começar pelo número do CRECI em toda publicidade.
		</p>
		<p>
			Crio e hospedo esse site de graça, com até 5 páginas, dentro da oferta de
			<a href={services.siteGratis.path}>site grátis para empresas</a>. A imobiliária registra e paga o
			próprio domínio.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">As páginas que o site de uma imobiliária precisa ter</h2>
		<p>
			Com até 5 páginas, o foco é o que nenhum portal mostra: quem é a imobiliária, onde ela conhece o
			mercado e como ela trabalha. Uma distribuição comum:
		</p>
		<ol>
			<li><strong>Início:</strong> a imobiliária ou o corretor, a região de atuação e o contato.</li>
			<li><strong>Venda de imóveis:</strong> como funciona a intermediação para quem quer vender ou comprar.</li>
			<li><strong>Locação e administração:</strong> para proprietários que querem alugar e para inquilinos.</li>
			<li><strong>Região atendida:</strong> os bairros e cidades em que a imobiliária atua, descritos em texto, com o que ela conhece de cada um.</li>
			<li><strong>Contato:</strong> endereço, telefone, WhatsApp, mapa e o CRECI.</li>
		</ol>
		<p>
			Se a imobiliária faz avaliação de imóveis, essa costuma ser uma boa página no lugar de uma das
			acima, porque responde a uma dúvida frequente de quem pensa em vender.
		</p>
	</section>

	<section aria-labelledby="buscas-titulo">
		<h2 id="buscas-titulo">O que o cliente de uma imobiliária pesquisa no Google</h2>
		<p>
			As buscas por um imóvel específico, como "apartamento para alugar" em um bairro, costumam mostrar
			primeiro os grandes portais de anúncios, que têm milhares de ofertas. Um site de imobiliária com
			poucas páginas compete melhor em outro tipo de busca: a que procura quem intermedia, como
			"imobiliária em" uma cidade ou bairro, "administradora de imóveis" e "avaliação de imóvel". Nessas
			buscas, o mapa com o Perfil da Empresa no Google também pesa, e o site reforça o perfil.
		</p>
	</section>

	<section aria-labelledby="creci-titulo">
		<h2 id="creci-titulo">O que a lei exige no site: CRECI e autorização do proprietário</h2>
		<p>
			A profissão de corretor de imóveis é regulada pela Lei 6.530/1978. O artigo 20 traz vedações que
			valem também para o site:
		</p>
		<table>
			<caption>Exigências da Lei 6.530/1978 que afetam o site de uma imobiliária</caption>
			<thead>
				<tr>
					<th scope="col">O que a lei proíbe</th>
					<th scope="col">Como fica no site</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Fazer anúncio ou impresso relativo à atividade profissional sem mencionar o número de inscrição</td>
					<td>Nome e número do CRECI no rodapé de todas as páginas</td>
				</tr>
				<tr>
					<td>Anunciar publicamente proposta de transação sem autorização por documento escrito</td>
					<td>Imóvel só aparece no site, ou em link a partir dele, com a autorização do proprietário</td>
				</tr>
				<tr>
					<td>Anunciar imóvel loteado ou em condomínio sem mencionar o número de registro no Registro de Imóveis</td>
					<td>O número de registro acompanha o anúncio desses imóveis</td>
				</tr>
			</tbody>
		</table>
		<p>
			O texto da lei está no <a href="https://www.planalto.gov.br/ccivil_03/leis/l6530.htm">site do
			Planalto</a>. O Conselho Federal (COFECI) e os conselhos regionais (CRECI) têm normas complementares
			sobre a forma de apresentar essas informações; vale confirmar com o CRECI da sua região antes de
			publicar.
		</p>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Dados estruturados para imobiliárias</h2>
		<p>
			No site de uma imobiliária, uso o tipo <code>RealEstateAgent</code>, do vocabulário Schema.org,
			que descreve uma imobiliária ou um corretor, com nome, endereço, telefone, horário e a região
			atendida. Os dados marcados são os mesmos que aparecem nas páginas, inclusive o contato, e
			precisam ser idênticos aos do Perfil da Empresa no Google.
		</p>
	</section>

	<section aria-labelledby="oferta-titulo">
		<h2 id="oferta-titulo">Site grátis para a sua imobiliária</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, é
			grátis: eu crio o site, com até 5 páginas, hospedo na rede global da Cloudflare, com HTTPS e páginas
			estáticas que abrem rápido, e configuro o Google Search Console. A imobiliária registra e paga o
			domínio. Em troca, você autoriza o uso do site como case no meu portfólio e dá um depoimento sobre o
			trabalho depois de 30 dias. São até 5 sites gratuitos por mês.
		</p>
		<p>
			O código, o design, os textos que escrevo e o trabalho de SEO continuam meus; a imobiliária recebe
			o uso do site. Veja <a href={freeSite.ownershipAnchor}>o que é seu e o que é meu no site grátis</a>.
			Um catálogo de imóveis com busca é um <a href={services.sistemasWeb.path}>sistema web</a>, pago e
			opcional.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre site para imobiliária" />

	<Related
		links={[
			{ href: services.siteGratis.path, text: 'Como funciona o site grátis para empresas' },
			...nichePages.filter((p) => p.path !== path).map((p) => ({ href: p.path, text: p.anchor[0].toUpperCase() + p.anchor.slice(1) })),
			{ href: '/como-aparecer-no-google', text: 'Como a imobiliária aparece no mapa do Google' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade para a sua imobiliária" intro="Conte a cidade e os bairros em que a imobiliária atua e os serviços que oferece; eu respondo se há vaga no mês e como ficariam as páginas." />
</main>
