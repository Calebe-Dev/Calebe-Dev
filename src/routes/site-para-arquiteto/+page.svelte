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

	const path = '/site-para-arquiteto';
	const title = 'Site para arquiteto: portfólio grátis e regras do CAU - Calebe Araujo';
	const description =
		'Site para arquiteto e escritório de arquitetura, grátis: portfólio de projetos rápido, com a responsabilidade técnica que o CAU exige na publicidade.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site para arquiteto e quero consultar a disponibilidade do site grátis. Meu escritório é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [
		{ name: 'Site grátis para empresas', path: services.siteGratis.path },
		{ name: 'Site para arquiteto', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Preciso mostrar o número de registro no CAU no portfólio?',
			answer:
				'Sim, ao divulgar projetos, obras e serviços. O artigo 11 da Resolução CAU/BR 75/2014 pede que a publicidade indique o responsável técnico, o título profissional e o número de registro no CAU, e a atividade técnica desenvolvida. No site, essas informações acompanham cada projeto do portfólio.'
		},
		{
			question: 'As fotos dos projetos não vão deixar o site lento?',
			answer:
				'Não precisam deixar. As fotos são convertidas para formatos leves, como AVIF e WebP, em tamanhos diferentes para celular e computador, com largura e altura definidas para a página não pular durante o carregamento. As imagens que ficam fora da tela só são baixadas quando o visitante chega até elas.'
		},
		{
			question: 'Posso divulgar um projeto feito em parceria com outros profissionais?',
			answer:
				'Pode, indicando a responsabilidade técnica de cada um. Pela Resolução CAU/BR 75/2014, o nome do responsável técnico deve aparecer, no mínimo, com o mesmo destaque das demais pessoas físicas citadas no material.'
		},
		{
			question: 'Quantos projetos cabem no site grátis?',
			answer:
				'O limite é de páginas, não de projetos: até 5 páginas. Uma delas costuma ser o portfólio, com uma seleção dos projetos mais representativos de cada tipo de serviço. Uma página própria para cada projeto, com o processo completo, exige mais páginas e faz parte de um projeto pago.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para arquiteto e escritório de arquitetura',
			serviceType: 'Criação e hospedagem de site',
			description,
			audience: 'Arquitetos e escritórios de arquitetura',
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Site para arquiteto: portfólio grátis e regras do CAU</h1>

		<p>
			Um site para arquiteto é, antes de tudo, um portfólio: quem procura um escritório de arquitetura
			quer ver projetos antes de pedir um orçamento. O desafio é mostrar fotos grandes sem deixar o site
			lento e indicar, em cada projeto, a responsabilidade técnica que o Conselho de Arquitetura e
			Urbanismo (CAU) exige em toda peça publicitária.
		</p>
		<p>
			Crio e hospedo esse site de graça, com até 5 páginas, dentro da oferta de
			<a href={services.siteGratis.path}>site grátis para empresas</a>. O escritório registra e paga o
			próprio domínio.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">As páginas que o site de um arquiteto precisa ter</h2>
		<p>
			Com até 5 páginas, o site de um arquiteto equilibra o portfólio com as páginas que respondem a quem
			pesquisa um tipo de projeto. Uma distribuição comum:
		</p>
		<ol>
			<li><strong>Início:</strong> a forma de trabalhar do escritório e os projetos em destaque.</li>
			<li><strong>Portfólio:</strong> os projetos mais representativos, cada um com fotos, tipo de projeto e a indicação de responsabilidade técnica.</li>
			<li><strong>Serviços:</strong> os tipos de projeto que o escritório faz, como residencial, comercial ou de interiores, e como é cada etapa.</li>
			<li><strong>Sobre:</strong> formação, registro no CAU e a equipe.</li>
			<li><strong>Contato:</strong> telefone, WhatsApp e a região atendida.</li>
		</ol>
	</section>

	<section aria-labelledby="buscas-titulo">
		<h2 id="buscas-titulo">O que o cliente de um arquiteto pesquisa no Google</h2>
		<p>
			As buscas misturam o tipo de projeto e a cidade, como "arquiteto de interiores" ou "projeto de casa
			térrea" em uma região, e dúvidas de quem ainda está decidindo, como "quanto custa um projeto de
			arquitetura" ou "qual a diferença entre arquiteto e designer de interiores". Muita gente também
			procura referências visuais antes de procurar um profissional.
		</p>
		<p>
			Por isso a página de serviços explica cada tipo de projeto em texto, e não só com imagens: o Google
			não entende uma foto de sala como "projeto de interiores" se nada na página diz isso. O texto
			alternativo de cada imagem descreve o que ela mostra.
		</p>
	</section>

	<section aria-labelledby="cau-titulo">
		<h2 id="cau-titulo">O que o CAU exige na divulgação de projetos</h2>
		<p>
			A Resolução CAU/BR 75/2014 trata da indicação da responsabilidade técnica em documentos, placas,
			peças publicitárias e outros elementos de comunicação. No site, isso vale para o portfólio e para
			qualquer página que divulgue projetos, obras ou serviços:
		</p>
		<table>
			<caption>Exigências da Resolução CAU/BR 75/2014 aplicadas ao site de arquitetura</caption>
			<thead>
				<tr>
					<th scope="col">O que a resolução pede</th>
					<th scope="col">Como fica no site</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Indicação do responsável técnico (art. 11, I)</td>
					<td>Nome do arquiteto responsável em cada projeto do portfólio</td>
				</tr>
				<tr>
					<td>Título profissional e número de registro no CAU (art. 11, II)</td>
					<td>"Arquiteto e urbanista" e o número de registro junto do nome</td>
				</tr>
				<tr>
					<td>Atividade técnica desenvolvida (art. 11, III)</td>
					<td>O que foi feito naquele projeto, como projeto arquitetônico ou de interiores</td>
				</tr>
				<tr>
					<td>Destaque no mínimo igual ao das demais pessoas físicas citadas (art. 12)</td>
					<td>Mesmo tamanho de texto que o dos outros profissionais creditados no projeto</td>
				</tr>
			</tbody>
		</table>
		<p>
			O texto da resolução está no <a href="https://transparencia.caubr.gov.br/resolucao75/">portal de
			transparência do CAU/BR</a>.
		</p>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Dados estruturados para escritórios de arquitetura</h2>
		<p>
			O vocabulário Schema.org não tem um tipo específico para arquitetos, então uso
			<code>ProfessionalService</code> para o escritório, com nome, contato e região atendida, e descrevo
			as imagens do portfólio com o autor de cada projeto. Os dados marcados são os mesmos que aparecem
			nas páginas.
		</p>
	</section>

	<section aria-labelledby="oferta-titulo">
		<h2 id="oferta-titulo">Site grátis para o seu escritório de arquitetura</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, é
			grátis: eu crio o site, com até 5 páginas, hospedo na rede global da Cloudflare, com HTTPS e páginas
			estáticas que abrem rápido, e configuro o Google Search Console. O escritório registra e paga o
			domínio. Em troca, você autoriza o uso do site como case no meu portfólio e dá um depoimento sobre o
			trabalho depois de 30 dias. São até 5 sites gratuitos por mês.
		</p>
		<p>
			O código, o design, os textos que escrevo e o trabalho de SEO continuam meus; as fotos e os
			projetos são seus. Veja <a href={freeSite.ownershipAnchor}>o que é seu e o que é meu no site grátis</a>.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre site para arquiteto" />

	<Related
		links={[
			{ href: services.siteGratis.path, text: 'Como funciona o site grátis para empresas' },
			...nichePages.filter((p) => p.path !== path).map((p) => ({ href: p.path, text: p.anchor[0].toUpperCase() + p.anchor.slice(1) })),
			{ href: services.otimizacaoDeSites.path, text: 'Como manter rápido um site com muitas fotos' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade para o seu escritório" intro="Conte os tipos de projeto que o escritório faz e a região em que atende; eu respondo se há vaga no mês e como ficariam as páginas." />
</main>
