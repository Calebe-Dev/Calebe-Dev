<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, copywriterPage, person, services, type WhatsApp } from '$lib/site';

	const path = copywriterPage.path;
	const title = 'Copywriter SEO: redação para sites e landing pages - Calebe Araujo';
	const description =
		'Copywriter SEO em Sorocaba (SP): textos para sites, landing pages e páginas de serviço. Aberto a vagas de copywriter e redator SEO, inclusive remotas.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vi seu perfil de copywriter SEO e tenho uma oportunidade de vaga.',
		label: 'Falar sobre uma vaga de copywriter pelo WhatsApp'
	};

	const crumbs = [{ name: 'Copywriter SEO', path }];

	const skills = [
		'Copywriting',
		'Redação SEO',
		'Pesquisa de palavras-chave',
		'Landing pages',
		'Páginas de serviço',
		'Microtextos de interface',
		'Perguntas frequentes (FAQ)',
		'HTML semântico',
		'Dados estruturados',
		'Google Search Console'
	];

	const faqs: FaqItem[] = [
		{
			question: 'Você tem experiência formal como copywriter?',
			answer:
				'Não como cargo com esse nome. Escrevo os textos dos sites e landing pages que desenvolvo como desenvolvedor full stack e consultor de SEO, unindo argumentos de venda, estrutura para a busca e chamadas para ação. Para vagas de copywriter SEO e redator SEO, essa combinação de escrita e técnica é o meu diferencial.'
		},
		{
			question: 'Qual a diferença entre copywriter e redator SEO?',
			answer:
				'O copywriter escreve para convencer o leitor a agir, como pedir um orçamento ou chamar no WhatsApp. O redator SEO escreve para ser encontrado na busca, cobrindo a intenção de quem pesquisa. Em sites de empresas, as duas funções se misturam: a página precisa aparecer no Google e, depois, converter.'
		},
		{
			question: 'Está disponível para vagas remotas de copywriter?',
			answer:
				'Sim. Estou aberto a vagas remotas (home office), híbridas e presenciais em Sorocaba e região, como copywriter SEO, redator SEO ou em funções que unem conteúdo e desenvolvimento web.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		person: {
			hasOccupation: {
				'@type': 'Occupation',
				name: 'Copywriter SEO',
				occupationLocation: city(person.city),
				skills: skills.join(', ')
			}
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="profile" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Copywriter SEO: redação para sites e landing pages</h1>

		<p>
			Sou {person.name}, desenvolvedor full stack e consultor de SEO em {person.city} (SP), e escrevo os
			textos dos sites e landing pages que desenvolvo. Para vagas de copywriter SEO e redator SEO, levo a
			escrita que convence junto com o lado técnico: pesquisa de palavras-chave, estrutura de títulos,
			dados estruturados e performance.
		</p>
		<p>
			O histórico completo está no meu <a href={careerPage.path}>perfil de desenvolvedor full stack</a> e
			no <a href={person.cv} download type="application/pdf">currículo em PDF</a>.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="escrevo-titulo">
		<h2 id="escrevo-titulo">O que eu escrevo</h2>
		<ul>
			<li><strong>Landing pages:</strong> título, argumentos, provas e chamadas para ação pensados para uma única conversão.</li>
			<li><strong>Páginas de serviço:</strong> uma intenção de busca por página, com resposta direta no início e perguntas frequentes.</li>
			<li><strong>Sites institucionais:</strong> apresentação da empresa, dos serviços e dos diferenciais em linguagem clara.</li>
			<li><strong>Microtextos:</strong> botões, formulários e chamadas para o WhatsApp, que decidem se o visitante entra em contato.</li>
			<li><strong>Guias para a busca orgânica:</strong> conteúdos que respondem dúvidas reais e levam às páginas comerciais.</li>
		</ul>
	</section>

	<section aria-labelledby="metodo-titulo">
		<h2 id="metodo-titulo">Como escrevo para SEO e conversão</h2>
		<ol>
			<li><strong>Pesquisa:</strong> como o público realmente busca, com o autocompletar do Google e os dados do Search Console.</li>
			<li><strong>Intenção:</strong> um objetivo por página, sem duas páginas disputando a mesma busca.</li>
			<li><strong>Resposta direta:</strong> a definição ou a oferta logo no primeiro parágrafo, para o leitor e para as ferramentas de IA.</li>
			<li><strong>Estrutura:</strong> títulos que funcionam sozinhos, listas e tabelas para quem lê escaneando.</li>
			<li><strong>Prova:</strong> números reais e casos verificáveis, nunca promessas genéricas.</li>
			<li><strong>Ação:</strong> uma chamada clara em cada etapa da página.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="tecnico-titulo">
		<h2 id="tecnico-titulo">Copywriting com o lado técnico</h2>
		<p>
			Como também sou desenvolvedor, o texto não fica preso num documento: eu mesmo o publico com HTML
			semântico, title e meta description por página, dados estruturados e carregamento rápido, que fazem
			o conteúdo aparecer no Google. Isso evita o vaivém entre redação, SEO e desenvolvimento.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes de recrutadores" />

	<Related
		links={[
			{ href: careerPage.path, text: 'Perfil de desenvolvedor full stack' },
			{ href: services.criacaoDeSites.path, text: 'Sites com textos e SEO desde o início' },
			{ href: services.guestPost.path, text: 'Guest posts escritos para SEO' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' }
		]}
	/>

	<Contact {whatsapp} title="Contato para oportunidades de copywriter" intro="Conte a vaga, o tipo de conteúdo e o modelo de trabalho; respondo pelo WhatsApp ou por e-mail." />
</main>
