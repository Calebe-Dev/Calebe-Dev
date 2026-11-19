<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { freeSiteOffer, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { freeSite, guides, nichePages, services, type WhatsApp } from '$lib/site';

	const path = '/site-para-dentista';
	const title = 'Site para dentista: site grátis dentro das regras do CFO - Calebe Araujo';
	const description =
		'Site para dentista e clínica odontológica, grátis: até 5 páginas por tratamento, dentro da Resolução CFO 196/2019 e otimizado para o Google e para o mapa.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site para dentista e quero consultar a disponibilidade do site grátis. Meu consultório é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [
		{ name: 'Site grátis para empresas', path: services.siteGratis.path },
		{ name: 'Site para dentista', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'O site do dentista pode ter fotos de antes e depois?',
			answer:
				'A Resolução CFO 196/2019 autoriza imagens do diagnóstico e da conclusão do tratamento, desde que o caso seja do próprio dentista que executou o procedimento e que o paciente autorize antes, por Termo de Consentimento Livre e Esclarecido (TCLE). Continua proibido mostrar o procedimento sendo feito, fora de publicações científicas.'
		},
		{
			question: 'Posso publicar preços e promoções no site?',
			answer:
				'As regras sobre preços, descontos e formas de pagamento na publicidade odontológica estão no Código de Ética Odontológica, que foi alterado em 2025 pela Resolução CFO 271/2025, depois de uma decisão do CADE sobre descontos. Antes de publicar valores ou condições, confirme a redação em vigor com o CRO do seu estado. No site, eu deixo esse tipo de informação de fora até você confirmar.'
		},
		{
			question: 'Quais informações são obrigatórias no site?',
			answer:
				'Pela Resolução CFO 196/2019, toda imagem ou vídeo publicado precisa trazer o nome do profissional e o número de inscrição no CRO. No site, coloco o nome e o CRO do responsável técnico no rodapé de todas as páginas, além de nas páginas com imagens de casos.'
		},
		{
			question: 'O site grátis fica sendo do meu consultório?',
			answer:
				'O domínio, a marca, as fotos e as informações do consultório continuam seus. O código, o design, os textos que eu escrevo e o trabalho de SEO são meus, e o consultório recebe o uso do site enquanto a parceria durar. Os detalhes estão na seção de propriedade da página do site grátis.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para dentista e clínica odontológica',
			serviceType: 'Criação e hospedagem de site',
			description,
			audience: 'Dentistas e clínicas odontológicas',
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Site para dentista: site grátis dentro das regras do CFO</h1>

		<p>
			Um site para dentista precisa aparecer quando alguém pesquisa um tratamento na cidade, como
			"implante dentário em Sorocaba" ou "dentista perto de mim", e respeitar as regras de publicidade
			do Conselho Federal de Odontologia, como a Resolução CFO 196/2019, que trata de imagens de
			pacientes. Isso pede um site informativo, organizado por tratamento, e não uma página de promoções.
		</p>
		<p>
			Crio e hospedo esse site de graça no primeiro ano, com até 5 páginas, dentro da oferta de
			<a href={services.siteGratis.path}>site grátis para empresas</a>. O consultório registra e paga o
			próprio domínio.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="paginas-titulo">
		<h2 id="paginas-titulo">As páginas que o site de um dentista precisa ter</h2>
		<p>
			Com até 5 páginas, o site de um consultório ou de uma clínica odontológica fica bem resolvido com
			uma página para cada tratamento principal, porque é ela que aparece para a busca daquele tratamento.
			Uma distribuição comum:
		</p>
		<ol>
			<li><strong>Início:</strong> quem é o dentista ou a clínica, os tratamentos, o endereço e o agendamento.</li>
			<li><strong>Páginas de tratamento (duas ou três):</strong> por exemplo, implantes, ortodontia ou clareamento, cada uma explicando como funciona, para quem é indicado e quanto tempo leva.</li>
			<li><strong>Sobre:</strong> formação, especialidades registradas no CRO e a equipe.</li>
			<li><strong>Contato:</strong> endereço, mapa, telefone, WhatsApp e horários.</li>
		</ol>
	</section>

	<section aria-labelledby="buscas-titulo">
		<h2 id="buscas-titulo">O que o paciente pesquisa no Google</h2>
		<p>
			Quem procura dentista pesquisa de dois jeitos: pelo tratamento e pela cidade, como "ortodontista em
			Votorantim", ou por uma dúvida, como "implante dentário dói?" ou "quanto tempo dura um
			clareamento". A busca com a cidade é disputada no mapa, pelo Perfil da Empresa no Google, e nas
			páginas de tratamento do site; a dúvida é respondida por um conteúdo informativo dentro da página
			do tratamento.
		</p>
		<p>
			Por isso o site trabalha junto com o perfil no Google: mesmo nome, endereço e telefone, e o link do
			perfil apontando para o site. O passo a passo do perfil está no guia do
			<a href={guides.perfilEmpresa.path}>Perfil da Empresa no Google</a>.
		</p>
	</section>

	<section aria-labelledby="cfo-titulo">
		<h2 id="cfo-titulo">O que o site pode e não pode ter pela Resolução CFO 196/2019</h2>
		<table>
			<caption>Imagens no site do dentista, segundo a Resolução CFO 196/2019</caption>
			<thead>
				<tr>
					<th scope="col">Pode ter</th>
					<th scope="col">Não pode ter</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Selfies do dentista, com ou sem paciente, com autorização do paciente por TCLE (art. 1º)</td>
					<td>Imagens em que apareçam equipamentos, instrumentais, materiais ou tecidos biológicos (art. 1º, § 1º)</td>
				</tr>
				<tr>
					<td>Imagens do diagnóstico e do resultado final de casos do próprio dentista, com TCLE (art. 2º)</td>
					<td>Vídeos ou imagens do procedimento sendo realizado, fora de publicações científicas (art. 3º)</td>
				</tr>
				<tr>
					<td>Nome do profissional e número de inscrição no CRO em toda imagem ou vídeo (art. 4º)</td>
					<td>Casos clínicos de outros profissionais (art. 4º)</td>
				</tr>
				<tr>
					<td>Explicações técnicas e informativas sobre os tratamentos</td>
					<td>Sensacionalismo, autopromoção, concorrência desleal, mercantilização ou promessa de resultado (art. 2º, § 1º)</td>
				</tr>
			</tbody>
		</table>
		<p>
			O texto completo está no <a href="https://website.cfo.org.br/wp-content/uploads/2019/01/Resolu%c3%a7%c3%a3o-CFO-196-2019.pdf">site
			do CFO</a>. Regras sobre preços e descontos estão no Código de Ética Odontológica, alterado em 2025;
			confirme a versão em vigor com o CRO do seu estado. A responsabilidade ética pelo conteúdo é do
			dentista; eu escrevo os textos seguindo essas regras e você aprova antes da publicação.
		</p>
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Dados estruturados para consultórios odontológicos</h2>
		<p>
			No site de um dentista, uso o tipo <code>Dentist</code>, do vocabulário Schema.org, com nome,
			endereço, telefone, horários e região atendida, além da trilha de navegação de cada página. As
			informações marcadas são sempre as mesmas do site e do Perfil da Empresa no Google.
		</p>
	</section>

	<section aria-labelledby="oferta-titulo">
		<h2 id="oferta-titulo">Site grátis para o seu consultório</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, o primeiro ano é
			grátis: eu crio o site do consultório, com até 5 páginas, hospedo na rede global da Cloudflare, com
			HTTPS e páginas estáticas que abrem rápido, e configuro o Google Search Console. O consultório
			registra e paga o domínio. Em troca, você autoriza o uso do site como case no meu portfólio e dá
			um depoimento sobre o trabalho depois de 30 dias. São até 5 sites gratuitos por mês, para qualquer
			especialidade.
		</p>
		<p>
			O código, o design, os textos que escrevo e o trabalho de SEO continuam meus; o consultório recebe o
			uso do site. Veja <a href={freeSite.ownershipAnchor}>o que é seu e o que é meu no site grátis</a>. Prazo de entrega, ajustes e o que acontece depois do primeiro ano estão nas
			<a href={freeSite.conditionsAnchor}>condições do site grátis</a>.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre site para dentista" />

	<Related
		links={[
			{ href: services.siteGratis.path, text: 'Como funciona o site grátis para empresas' },
			...nichePages.filter((p) => p.path !== path).map((p) => ({ href: p.path, text: p.anchor[0].toUpperCase() + p.anchor.slice(1) })),
			{ href: guides.seoLocal.path, text: 'SEO local para consultórios' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade para o seu consultório" intro="Conte os tratamentos principais e a cidade onde atende; eu respondo se há vaga no mês e como ficariam as páginas." />
</main>
