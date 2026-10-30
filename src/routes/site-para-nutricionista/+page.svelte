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

	const path = '/site-para-nutricionista';
	const title = 'Site para nutricionista grátis, dentro do código de ética - Calebe Araujo';
	const description =
		'Site para nutricionista, grátis: até 5 páginas sobre o atendimento presencial e online, sem fotos de antes e depois, como pede o código de ética do CFN.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site para nutricionista e quero consultar a disponibilidade do site grátis. Meu consultório é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [
		{ name: 'Site grátis para empresas', path: services.siteGratis.path },
		{ name: 'Site para nutricionista', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Posso mostrar fotos de antes e depois de pacientes no site?',
			answer:
				'Não. O Código de Ética e de Conduta do Nutricionista (Resolução CFN 599/2018), no artigo 58, proíbe divulgar imagens corporais de si ou de pacientes atribuindo os resultados a produtos, equipamentos, técnicas ou protocolos. O site mostra o seu trabalho por outros caminhos: a forma de atendimento, a sua formação e conteúdo útil.'
		},
		{
			question: 'O site serve para quem atende online?',
			answer:
				'Serve. A página de atendimento explica como funciona a consulta online, e o texto não fica preso a uma cidade. Para quem atende também em consultório, a mesma página descreve o endereço e a região, o que ajuda a aparecer nas buscas locais.'
		},
		{
			question: 'O site tem agendamento online?',
			answer:
				'O site grátis tem até 5 páginas e não inclui um sistema de agendamento. O botão de contato pode levar ao seu WhatsApp ou à ferramenta de agendamento que você já usa.'
		},
		{
			question: 'O novo código de ética muda o que posso publicar?',
			answer:
				'O CFN aprovou em 2026 uma atualização do código de ética, com orientações para o ambiente digital. Antes de publicar o site, confira no site do CFN qual versão está em vigor, e eu ajusto os textos ao que ela pede.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para nutricionista',
			serviceType: 'Criação e hospedagem de site',
			description,
			audience: 'Nutricionistas e consultórios de nutrição',
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="como-aparecer-no-google" />
		<Breadcrumbs {crumbs} />

		<h1>Site para nutricionista grátis, dentro do código de ética</h1>

		<p>
			Um site para nutricionista precisa passar confiança para quem procura acompanhamento nutricional,
			explicar com clareza como é o atendimento, presencial ou online, e respeitar o código de ética da
			profissão, que proíbe, por exemplo, as fotos de antes e depois que são comuns nas redes sociais.
			Como é um tema de saúde, o Google também dá peso a quem escreve e às credenciais de quem atende.
		</p>
		<p>
			Crio e hospedo esse site de graça no primeiro ano, com até 5 páginas, dentro da oferta de
			<a href={services.siteGratis.path}>site grátis para empresas</a>. Você registra e paga o próprio
			domínio.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">As páginas que o site de um nutricionista precisa ter</h2>
		<p>
			Com até 5 páginas, o site de um nutricionista se organiza em torno do atendimento e de quem atende.
			Uma distribuição comum:
		</p>
		<ol>
			<li><strong>Início:</strong> a abordagem de trabalho, o público atendido e o contato.</li>
			<li><strong>Atendimento:</strong> as áreas de atuação, como nutrição clínica, esportiva ou materno-infantil, cada uma com quem ela ajuda.</li>
			<li><strong>Como funciona a consulta:</strong> primeira consulta, retornos e atendimento online, explicados passo a passo.</li>
			<li><strong>Sobre:</strong> formação, especializações e registro profissional.</li>
			<li><strong>Contato:</strong> endereço do consultório, WhatsApp e região atendida.</li>
		</ol>
	</section>

	<section aria-labelledby="buscas-titulo">
		<h2 id="buscas-titulo">O que o paciente de um nutricionista pesquisa no Google</h2>
		<p>
			As buscas combinam a área e o formato do atendimento, como "nutricionista esportivo",
			"nutricionista online" ou "nutricionista materno-infantil" em uma cidade, e dúvidas sobre a
			consulta, como "como é a primeira consulta com nutricionista". As páginas de atendimento e de
			consulta são escritas para responder a essas buscas de forma direta.
		</p>
		<p>
			Por ser um tema de saúde, o conteúdo segue as diretrizes do Google para páginas que afetam o bem-estar
			das pessoas: informação correta, autoria identificada e nenhuma promessa de resultado.
		</p>
	</section>

	<section aria-labelledby="cfn-titulo">
		<h2 id="cfn-titulo">O que o código de ética do nutricionista proíbe no site</h2>
		<p>
			O Código de Ética e de Conduta do Nutricionista (Resolução CFN 599/2018) proíbe, no artigo 58, a
			divulgação de imagens corporais de si próprio ou de pacientes atribuindo os resultados a produtos,
			equipamentos, técnicas ou protocolos, as conhecidas fotos de "antes e depois". O Conselho Federal
			de Nutrição explica que os tratamentos podem não ter o mesmo resultado para todos e que essas
			imagens criam expectativas irreais.
		</p>
		<table>
			<caption>Como o site de um nutricionista lida com a proibição do antes e depois</caption>
			<thead>
				<tr>
					<th scope="col">Fica fora do site</th>
					<th scope="col">O que entra no lugar</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Fotos de antes e depois, suas ou de pacientes</td>
					<td>Explicação de como é o acompanhamento e do que o paciente pode esperar de cada etapa</td>
				</tr>
				<tr>
					<td>Resultados atribuídos a um produto, técnica ou protocolo</td>
					<td>Formação, especializações e a abordagem de trabalho</td>
				</tr>
			</tbody>
		</table>
		<p>
			Em 2026, o CFN aprovou uma atualização do código de ética com orientações para o ambiente digital.
			Antes de publicar o site, confira no <a href="https://www.cfn.org.br/">site do CFN</a> qual versão
			está em vigor; os textos são ajustados a ela.
		</p>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Dados estruturados para nutricionistas</h2>
		<p>
			Para um consultório de nutrição, uso o tipo <code>MedicalBusiness</code>, do vocabulário
			Schema.org, com a especialidade <code>DietNutrition</code>, além dos dados da profissional ou do
			profissional como pessoa, com a formação. Os dados marcados são os mesmos que aparecem nas páginas.
		</p>
	</section>

	<section aria-labelledby="oferta-titulo">
		<h2 id="oferta-titulo">Site grátis para o seu consultório de nutrição</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, o primeiro ano é
			grátis: eu crio o site, com até 5 páginas, hospedo na rede global da Cloudflare, com HTTPS e páginas
			estáticas que abrem rápido, e configuro o Google Search Console. Você registra e paga o domínio. Em
			troca, autoriza o uso do site como case no meu portfólio e dá um depoimento sobre o trabalho depois
			de 30 dias. São até 5 sites gratuitos por mês.
		</p>
		<p>
			O código, o design, os textos que escrevo e o trabalho de SEO continuam meus; a sua marca, as suas
			fotos e as informações do consultório são suas. Veja
			<a href={freeSite.ownershipAnchor}>o que é seu e o que é meu no site grátis</a>. Prazo de entrega,
			ajustes e o que acontece depois do primeiro ano estão nas
			<a href={freeSite.conditionsAnchor}>condições do site grátis</a>.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre site para nutricionista" />

	<Related
		links={[
			{ href: services.siteGratis.path, text: 'Como funciona o site grátis para empresas' },
			...nichePages.filter((p) => p.path !== path).map((p) => ({ href: p.path, text: p.anchor[0].toUpperCase() + p.anchor.slice(1) })),
			{ href: '/como-aparecer-no-google', text: 'Como o consultório aparece no mapa do Google' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade para o seu consultório" intro="Conte como você atende (consultório, online ou os dois) e as suas áreas de atuação; eu respondo se há vaga no mês e como ficariam as páginas." />
</main>
