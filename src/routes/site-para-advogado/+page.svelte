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

	const path = '/site-para-advogado';
	const title = 'Site para advogado: site grátis dentro das regras da OAB - Calebe Araujo';
	const description =
		'Site para advogado e escritório de advocacia, grátis: até 5 páginas por área de atuação, dentro do Provimento 205/2021 da OAB e otimizado para o Google.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site para advogado e quero consultar a disponibilidade do site grátis. Meu escritório é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [
		{ name: 'Site grátis para empresas', path: services.siteGratis.path },
		{ name: 'Site para advogado', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'O site do advogado pode mostrar valores de honorários?',
			answer:
				'Não. O artigo 3º, inciso I, do Provimento 205/2021 da OAB veda na publicidade a referência, direta ou indireta, a valores de honorários, forma de pagamento, gratuidade ou descontos. Isso inclui chamadas como "primeira consulta grátis".'
		},
		{
			question: 'Posso publicar artigos jurídicos no site?',
			answer:
				'Pode. O artigo 4º do Provimento 205/2021 permite o marketing de conteúdos jurídicos com caráter técnico e informativo, sem divulgação de resultados concretos. Artigos que explicam direitos e procedimentos são o tipo de conteúdo que responde às perguntas que as pessoas fazem no Google.'
		},
		{
			question: 'Posso citar processos que ganhei?',
			answer:
				'Não. O Provimento veda a menção a decisões judiciais e a resultados obtidos em procedimentos (artigo 4º, parágrafo 2º) e a promessa de resultados ou o uso de casos concretos para oferecer a atuação profissional (artigo 6º). Frases como "ganhamos 95% das causas" ficam fora do site.'
		},
		{
			question: 'O site grátis fica sendo do meu escritório?',
			answer:
				'O domínio, a marca, as fotos e as informações do escritório continuam seus. O código, o design, os textos que eu escrevo e o trabalho de SEO são meus, e o escritório recebe o uso do site enquanto a parceria durar. Os detalhes estão na seção de propriedade da página do site grátis.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para advogado e escritório de advocacia',
			serviceType: 'Criação e hospedagem de site',
			description,
			audience: 'Advogados e escritórios de advocacia',
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-b2b" />
		<Breadcrumbs {crumbs} />

		<h1>Site para advogado: site grátis dentro das regras da OAB</h1>

		<p>
			Um site para advogado precisa fazer duas coisas ao mesmo tempo: aparecer quando alguém pesquisa a
			área de atuação no Google e respeitar os limites da publicidade na advocacia, definidos pela OAB no
			Provimento 205/2021. Isso pede um site sóbrio, informativo e organizado por área de atuação, e não
			uma página de vendas.
		</p>
		<p>
			Crio e hospedo esse site de graça, com até 5 páginas, dentro da oferta de
			<a href={services.siteGratis.path}>site grátis para empresas</a>. O escritório registra e paga o
			próprio domínio.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">As páginas que o site de um advogado precisa ter</h2>
		<p>
			Com até 5 páginas, o site de um advogado ou de um escritório de advocacia fica bem resolvido com uma
			página para cada área de atuação principal, porque é ela que aparece para a busca daquela área.
			Uma distribuição comum:
		</p>
		<ol>
			<li><strong>Início:</strong> quem é o advogado ou o escritório, as áreas de atuação e a forma de contato.</li>
			<li><strong>Páginas de área de atuação (duas ou três):</strong> por exemplo, direito de família, trabalhista ou previdenciário, cada uma explicando de forma técnica o que a área cobre e quando procurar um advogado.</li>
			<li><strong>Sobre:</strong> formação, inscrição na OAB e trajetória, sem autoengrandecimento.</li>
			<li><strong>Contato:</strong> endereço, telefone, WhatsApp e mapa.</li>
		</ol>
	</section>

	<section aria-labelledby="buscas-titulo">
		<h2 id="buscas-titulo">O que o cliente de um advogado pesquisa no Google</h2>
		<p>
			Quem precisa de um advogado costuma pesquisar pela área e pela cidade, como "advogado trabalhista em
			Sorocaba", ou por uma dúvida concreta, como "como funciona o divórcio consensual" ou "quanto tempo
			demora um inventário". As duas formas levam a páginas diferentes: a busca pela área encontra a
			página daquela área de atuação, e a dúvida encontra um conteúdo informativo que a responde.
		</p>
		<p>
			Por isso a página de cada área começa explicando o assunto de forma direta, como pede um conteúdo
			técnico e informativo, e não com frases de efeito. É esse formato que o Google e as respostas de IA
			conseguem usar.
		</p>
	</section>

	<section aria-labelledby="oab-titulo">
		<h2 id="oab-titulo">O que o site pode e não pode ter pelo Provimento 205/2021 da OAB</h2>
		<p>
			O Provimento 205/2021 da OAB permite a publicidade informativa da advocacia, discreta e moderada,
			e veda a publicidade que busca captar clientela com apelos comerciais. No site, isso se traduz
			assim:
		</p>
		<table>
			<caption>O que o site de advocacia pode e não pode ter, segundo o Provimento 205/2021</caption>
			<thead>
				<tr>
					<th scope="col">Pode ter</th>
					<th scope="col">Não pode ter</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Conteúdo jurídico técnico e informativo, como artigos que explicam direitos e procedimentos (art. 4º)</td>
					<td>Valores de honorários, forma de pagamento, gratuidade ou descontos, inclusive "consulta grátis" (art. 3º, I)</td>
				</tr>
				<tr>
					<td>Logomarca e imagens do escritório e dos profissionais (art. 5º)</td>
					<td>Menção a decisões judiciais ou a resultados obtidos em processos (art. 4º, § 2º)</td>
				</tr>
				<tr>
					<td>Áreas de atuação, formação e canais de contato</td>
					<td>Promessa de resultados ou uso de casos concretos para oferecer serviços (art. 6º)</td>
				</tr>
				<tr>
					<td>Informações objetivas sobre o escritório</td>
					<td>Ostentação de bens, como veículos, viagens e hospedagens (art. 6º, parágrafo único), e expressões persuasivas ou de autoengrandecimento (art. 3º)</td>
				</tr>
			</tbody>
		</table>
		<p>
			O texto completo está no <a href="https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021">site
			da OAB</a>. A responsabilidade ética pelo conteúdo publicado é do advogado; eu escrevo os textos
			seguindo essas regras e você aprova antes da publicação.
		</p>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Dados estruturados para escritórios de advocacia</h2>
		<p>
			Os dados estruturados descrevem o escritório para o Google em um formato que ele lê sem
			interpretar o texto. No site de um advogado, uso o tipo <code>LegalService</code>, do vocabulário
			Schema.org, com nome, endereço, telefone e região atendida, além da trilha de navegação de cada
			página. As informações marcadas são sempre as mesmas que aparecem no site.
		</p>
	</section>

	<section aria-labelledby="oferta-titulo">
		<h2 id="oferta-titulo">Site grátis para o seu escritório</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, é
			grátis: eu crio o site do escritório, com até 5 páginas, hospedo na rede global da Cloudflare, com
			HTTPS e páginas estáticas que abrem rápido, e configuro o Google Search Console. O escritório
			registra e paga o domínio. Em troca, você autoriza o uso do site
			como case no meu portfólio e dá um depoimento sobre o trabalho depois de 30 dias. São até 5 sites
			gratuitos por mês, para qualquer área do direito.
		</p>
		<p>
			O código, o design, os textos que escrevo e o trabalho de SEO continuam meus; o escritório recebe o
			uso do site. Veja <a href={freeSite.ownershipAnchor}>o que é seu e o que é meu no site grátis</a>.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre site para advogado" />

	<Related
		links={[
			{ href: services.siteGratis.path, text: 'Como funciona o site grátis para empresas' },
			...nichePages.filter((p) => p.path !== path).map((p) => ({ href: p.path, text: p.anchor[0].toUpperCase() + p.anchor.slice(1) })),
			{ href: '/seo-para-pequenas-empresas', text: 'SEO para pequenos escritórios: plano de 90 dias' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade para o seu escritório" intro="Conte as áreas de atuação do escritório e a cidade onde atende; eu respondo se há vaga no mês e como ficariam as páginas." />
</main>
