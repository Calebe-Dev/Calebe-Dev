<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/criacao-de-sites-itu';
	const title = 'Criação de sites em Itu - Calebe Araujo';
	const description =
		'Criação de sites em Itu (SP) para turismo, comércio e indústria: sites rápidos e preparados para o Google, com um desenvolvedor da região de Sorocaba.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Sou de Itu e quero um orçamento de criação de site.',
		label: 'Pedir orçamento de site em Itu pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Itu', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Site para turismo precisa de algo diferente?',
			answer:
				'Precisa. Quem planeja um passeio pesquisa com antecedência e quase sempre pelo celular, então o site deve carregar rápido no 4G, mostrar fotos reais, horários, localização e formas de reserva logo no início. Também vale ter páginas para as experiências ou atrações principais, porque elas são buscadas separadamente.'
		},
		{
			question: 'Você atende Salto e Cabreúva também?',
			answer:
				'Sim. Salto e Cabreúva ficam na mesma região e são atendidas como Itu: reunião presencial nas etapas principais do projeto e o restante do trabalho de forma remota.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites em Itu',
			serviceType: 'Criação de sites',
			description,
			areaServed: city('Itu')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Criação de sites em Itu</h1>

		<p>
			Faço criação de sites em Itu para pousadas, restaurantes, lojas e indústrias que querem ser
			encontrados no Google. Moro em Sorocaba, a cerca de 30 km, e tenho uma ligação direta com a cidade:
			minha formação em Análise e Desenvolvimento de Sistemas é na Fatec Itu.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="perfil-titulo">
		<h2 id="perfil-titulo">O que as empresas de Itu precisam no site</h2>
		<p>
			Itu tem uma economia com três frentes que pedem sites diferentes. O turismo, puxado pelo centro
			histórico e pela fama de cidade dos exageros, depende de visitantes que pesquisam de outras
			cidades antes de viajar. O comércio local disputa o morador. E as indústrias da cidade vendem
			para outras empresas, muitas vezes de outros estados.
		</p>
		<ul>
			<li><strong>Turismo e gastronomia:</strong> fotos reais, horários, como chegar e reservas visíveis logo no início, com páginas para cada atração ou experiência.</li>
			<li><strong>Comércio e serviços:</strong> site ligado ao Perfil da Empresa no Google, com os mesmos dados de contato e uma página para cada serviço.</li>
			<li><strong>Indústria:</strong> páginas por produto e por segmento atendido, com especificações e pedido de cotação.</li>
		</ul>
	</section>

	<section aria-labelledby="estrutura-titulo">
		<h2 id="estrutura-titulo">Exemplo de estrutura para um site de turismo em Itu</h2>
		<p>
			Quem planeja um passeio faz várias buscas antes de decidir: o que fazer na cidade, onde comer,
			onde ficar e como chegar. Um site de pousada, restaurante ou atração ganha força quando responde
			a essas buscas em páginas próprias, em vez de concentrar tudo numa página inicial longa:
		</p>
		<ul>
			<li><strong>Página inicial:</strong> o que a empresa oferece, fotos reais, localização e botão de reserva ou contato.</li>
			<li><strong>Páginas de experiência:</strong> uma para cada passeio, cardápio especial, pacote ou tipo de quarto.</li>
			<li><strong>Como chegar:</strong> trajeto a partir de São Paulo, Campinas e Sorocaba, estacionamento e acessibilidade.</li>
			<li><strong>Agenda:</strong> eventos e datas especiais, atualizada com antecedência para aparecer nas buscas da época.</li>
			<li><strong>Perguntas frequentes:</strong> horários, crianças, animais de estimação, formas de pagamento e cancelamento.</li>
		</ul>
		<p>
			Com essa estrutura, cada página pode aparecer para uma busca diferente, e o visitante encontra a
			resposta sem precisar ligar para perguntar.
		</p>
	</section>

	<section aria-labelledby="busca-titulo">
		<h2 id="busca-titulo">Um cuidado especial com o nome da cidade</h2>
		<p>
			Itu tem um nome curto, que se confunde com outras palavras na busca. Quem digita "site itu" no
			Google recebe sugestões como Ituran e iTunes. Por isso, nos títulos e nos textos do site, a
			cidade deve aparecer com contexto, como "em Itu, SP", e o endereço completo deve estar nos dados
			estruturados, para o Google não ter dúvida de onde a empresa fica.
		</p>
	</section>

	<section aria-labelledby="atendimento-titulo">
		<h2 id="atendimento-titulo">Como funciona o atendimento em Itu</h2>
		<p>
			A cerca de 30 km de Sorocaba, Itu fica perto o bastante para reuniões presenciais nas etapas
			principais do projeto, como o início e a apresentação do site. O desenvolvimento e o
			acompanhamento são feitos de forma remota. O processo completo está descrito na página de
			<a href={services.criacaoDeSites.path}>criação de sites profissionais</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre criação de sites em Itu" />

	<Related
		links={[
			{ href: '/criacao-de-sites-sorocaba', text: 'Sites para indústria e comércio de Sorocaba' },
			{ href: '/criacao-de-sites-indaiatuba', text: 'Site e SEO na vizinha Indaiatuba' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO para um site que já existe' },
			{ href: regionPage.path, text: 'Atendimento na região de Sorocaba' }
		]}
	/>

	<Contact {whatsapp} title="Peça uma proposta de site em Itu" intro="Conte o que a sua empresa faz e qual público o site precisa atrair." />
</main>
