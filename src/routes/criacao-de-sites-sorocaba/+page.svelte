<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/criacao-de-sites-sorocaba';
	const title = 'Criação de sites em Sorocaba - Calebe Araujo';
	const description =
		'Criação de sites em Sorocaba (SP) com um desenvolvedor da cidade: sites rápidos, preparados para o Google e integrados ao WhatsApp e ao CRM.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Sou de Sorocaba e quero um orçamento de criação de site.',
		label: 'Pedir orçamento de site em Sorocaba pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Sorocaba', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Você faz reuniões presenciais em Sorocaba?',
			answer:
				'Sim. Como moro em Sorocaba, a reunião de início do projeto e as apresentações principais podem ser presenciais. O desenvolvimento e o acompanhamento do dia a dia são feitos de forma remota, por e-mail, vídeo e WhatsApp.'
		},
		{
			question: 'Minha empresa já tem Instagram e perfil no Google. Ainda preciso de um site?',
			answer:
				'Se você quer aparecer para quem procura o seu serviço no Google, sim. O perfil no Google ajuda nas buscas com mapa, mas o site é o que permite uma página para cada serviço, aparecer em buscas específicas e medir de onde vêm os contatos. Redes sociais são ótimas para relacionamento, mas pouco aparecem na busca por serviços.'
		},
		{
			question: 'Você atende Votorantim e as cidades vizinhas?',
			answer:
				'Sim. Votorantim, Araçoiaba da Serra, Salto de Pirapora e as demais cidades próximas são atendidas do mesmo jeito que Sorocaba, inclusive com reuniões presenciais.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites em Sorocaba',
			serviceType: 'Criação de sites',
			description,
			areaServed: city('Sorocaba')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Criação de sites em Sorocaba</h1>

		<p>
			Faço criação de sites em Sorocaba para empresas que querem ser encontradas no Google e receber
			contatos pelo site. Sou desenvolvedor full stack e moro na cidade: o projeto começa com uma
			conversa presencial e o site é entregue rápido, preparado para as buscas e com cada contato
			medido.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="dois-tipos-titulo">
		<h2 id="dois-tipos-titulo">Dois tipos de empresa, dois tipos de site</h2>
		<p>
			Sorocaba é um dos maiores polos industriais e de serviços do interior paulista, e isso cria duas
			necessidades bem diferentes. Indústrias e empresas B2B da cidade vendem para todo o Brasil e
			precisam de um site que apareça em buscas nacionais. Já o comércio e os serviços locais disputam
			o cliente que está na cidade, muitas vezes no mapa do Google. A estrutura do site muda conforme o
			caso.
		</p>

		<h3>Sites para indústria e empresas B2B</h3>
		<p>
			O foco são páginas por solução e por segmento atendido, com especificações, certificações e
			casos, que é o que o comprador de outra empresa procura antes de pedir uma proposta. Os
			formulários registram a página de origem de cada contato, para o comercial saber o que gerou
			cada oportunidade. Detalho essa estratégia na página de
			<a href={services.seoB2b.path}>SEO para empresas B2B</a>.
		</p>

		<h3>Sites para comércio e serviços locais</h3>
		<p>
			Aqui o site trabalha junto com o Perfil da Empresa no Google (o antigo Google Meu Negócio): mesmos dados de contato, uma
			página para cada serviço e informações que ajudam o cliente a decidir, como região atendida,
			horários e formas de pagamento. O botão de WhatsApp registra de qual página veio a conversa.
		</p>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência local: Sorocaba Indica</h2>
		<p>
			Trabalhei no <a href="https://sorocabaindica.com.br/">Sorocaba Indica</a>, um portal de buscas
			locais da cidade, em que a organização das categorias e das páginas estáticas e dinâmicas foi
			pensada para as buscas locais. É a mesma lógica que aplico em sites de empresas de Sorocaba:
			entender como as pessoas daqui pesquisam e montar as páginas a partir disso.
		</p>
	</section>

	<section aria-labelledby="incluido-titulo">
		<h2 id="incluido-titulo">O que o site da sua empresa recebe</h2>
		<ul>
			<li>Páginas rápidas, com conteúdo no HTML e boa nota nos Core Web Vitals.</li>
			<li>Base de SEO pronta: títulos, descrições, sitemap e dados estruturados com o endereço da empresa.</li>
			<li>Layout pensado primeiro para o celular, de onde vem a maior parte das buscas locais.</li>
			<li>WhatsApp e formulários integrados, com a origem de cada contato registrada.</li>
			<li>Search Console e Google Analytics configurados na publicação.</li>
		</ul>
		<p>
			O passo a passo completo, da pesquisa de buscas à publicação, está na página de
			<a href={services.criacaoDeSites.path}>criação de sites profissionais</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre criação de sites em Sorocaba" />

	<Related
		links={[
			{ href: '/consultoria-seo-sorocaba', text: 'SEO local para o site da sua empresa' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de um site que já existe' },
			{ href: '/criacao-de-sites-itu', text: 'Projetos de site na região de Itu' },
			{ href: regionPage.path, text: 'Atendimento em Sorocaba e região' }
		]}
	/>

	<Contact {whatsapp} title="Peça uma proposta de site em Sorocaba" intro="Conte o que a sua empresa faz e marque uma conversa presencial ou por vídeo." />
</main>
