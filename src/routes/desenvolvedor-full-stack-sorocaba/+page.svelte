<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, guides, person, services, type WhatsApp } from '$lib/site';

	const path = careerPage.path;
	const title = 'Desenvolvedor full stack em Sorocaba: Angular e Node.js - Calebe Araujo';
	const description =
		'Calebe Araujo, desenvolvedor full stack em Sorocaba (SP): Angular, Svelte, Node.js, Java, Docker e AWS. Aberto a vagas remotas, híbridas e presenciais.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vi seu perfil de desenvolvedor full stack e tenho uma oportunidade de vaga.',
		label: 'Falar sobre uma vaga pelo WhatsApp'
	};

	const crumbs = [{ name: 'Desenvolvedor full stack em Sorocaba', path }];

	const skills = [
		'Angular',
		'Svelte',
		'SvelteKit',
		'TypeScript',
		'JavaScript',
		'Node.js',
		'Java',
		'PostgreSQL',
		'MongoDB',
		'APIs REST',
		'Microsserviços',
		'Docker',
		'AWS',
		'Cloudflare',
		'SEO técnico',
		'Core Web Vitals'
	];

	const faqs: FaqItem[] = [
		{
			question: 'Calebe Araujo está disponível para vagas remotas?',
			answer:
				'Sim. Calebe está aberto a vagas remotas, híbridas e presenciais. Mora em Sorocaba (SP), o que permite trabalho presencial na cidade e na região e modelo híbrido em cidades próximas, conforme a frequência de deslocamento combinada.'
		},
		{
			question: 'Qual é a stack principal do Calebe?',
			answer:
				'No front-end, Angular e Svelte com TypeScript; no back-end, Node.js e Java com PostgreSQL; e na infraestrutura, Docker, AWS e Cloudflare. Em produção, trabalha com arquitetura de microsserviços e headless CMS (Directus).'
		},
		{
			question: 'Onde ver o código e os projetos do Calebe?',
			answer:
				'Os repositórios públicos estão no GitHub, em github.com/Calebe-Dev, e o histórico profissional completo está no LinkedIn, em linkedin.com/in/calebe-dev. Os sites em produção em que trabalhou estão listados na página inicial deste site.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		type: 'ProfilePage',
		person: {
			hasOccupation: {
				'@type': 'Occupation',
				name: 'Desenvolvedor Full Stack',
				occupationLocation: city(person.city),
				skills: skills.join(', ')
			}
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="profile" />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Desenvolvedor full stack em Sorocaba: Angular e Node.js</h1>

		<p>
			Sou {person.name}, desenvolvedor full stack em {person.city} (SP), com experiência em produção em
			Angular, Svelte, Node.js, Java, PostgreSQL, Docker e AWS. Estou aberto a vagas de desenvolvedor
			full stack, front-end e desenvolvedor web com foco em SEO técnico e performance, nos modelos
			remoto, híbrido ou presencial.
		</p>

		<WhatsAppCta {...whatsapp} />
		<p><a href={person.cv} download type="application/pdf">Baixar currículo em PDF</a></p>
	</header>

	<section aria-labelledby="resumo-titulo">
		<h2 id="resumo-titulo">Resumo profissional</h2>
		<ul>
			<li>Arquitetei e construí um CRM proprietário em microsserviços que integra 25 sites.</li>
			<li>Reduzi o carregamento de páginas de 8 para 1 segundo migrando sistemas legados para Angular e Svelte.</li>
			<li>Desenvolvi mais de 60 landing pages e sites institucionais com SEO técnico e mensuração de conversões.</li>
			<li>Administro infraestrutura com Docker, AWS, servidores Linux e Cloudflare.</li>
		</ul>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência profissional</h2>

		<article>
			<h3>Desenvolvedor Full Stack — Grupo OC</h3>
			<p><time datetime="2025-08">Agosto de 2025</time> até o momento · {person.city} (SP)</p>
			<ul>
				<li>Arquitetura e desenvolvimento de um CRM proprietário em microsserviços integrando 25 sites, com headless CMS (Directus) e APIs REST.</li>
				<li>Migração de sistemas legados para Angular e Svelte, com o tempo de carregamento caindo de 8 para 1 segundo.</li>
				<li>Infraestrutura com Docker, PostgreSQL, servidores Ubuntu com Cloudflare Tunnel e serviços da AWS.</li>
			</ul>
			<p>Tecnologias: Angular, Svelte, TypeScript, Node.js, Java, PostgreSQL, Directus, Docker e AWS.</p>
		</article>

		<article>
			<h3>Desenvolvedor Web — Alpha Company ADS</h3>
			<p><time datetime="2025-02">Fevereiro</time> a <time datetime="2025-08">agosto de 2025</time></p>
			<ul>
				<li>Desenvolvimento de mais de 60 landing pages e sites institucionais.</li>
				<li>SEO técnico, otimização de performance e Core Web Vitals.</li>
				<li>Integração de Google Analytics, Google Tag Manager e pixels de conversão; gestão de campanhas no Meta Ads e no Google Ads.</li>
			</ul>
		</article>

		<article>
			<h3>Estagiário de Desenvolvimento Web — QIplus</h3>
			<p><time datetime="2024-05">Maio de 2024</time> a <time datetime="2025-02">fevereiro de 2025</time></p>
			<ul>
				<li>Aplicações web responsivas com HTML, CSS e JavaScript.</li>
				<li>Integração de APIs de terceiros e experimentos de automação com APIs de modelos de linguagem.</li>
			</ul>
		</article>
	</section>

	<section aria-labelledby="competencias-titulo">
		<h2 id="competencias-titulo">Competências técnicas</h2>
		<dl>
			<dt>Front-end</dt>
			<dd>Angular, Svelte e SvelteKit, TypeScript, JavaScript, HTML semântico, CSS e acessibilidade (WCAG).</dd>
			<dt>Back-end</dt>
			<dd>Node.js com Express, Java, APIs REST e arquitetura de microsserviços.</dd>
			<dt>Banco de dados</dt>
			<dd>PostgreSQL e MongoDB; Directus como headless CMS.</dd>
			<dt>DevOps e cloud</dt>
			<dd>Docker, AWS, Cloudflare, Linux, NGINX, Git e GitHub Actions.</dd>
			<dt>SEO e performance</dt>
			<dd>SEO técnico, Core Web Vitals, dados estruturados, Lighthouse e Google Search Console.</dd>
		</dl>
	</section>

	<section aria-labelledby="diferenciais-titulo">
		<h2 id="diferenciais-titulo">O que levo para o time</h2>
		<ul>
			<li>SEO e performance tratados desde a arquitetura, não como ajuste no fim do projeto.</li>
			<li>Experiência de ponta a ponta: do banco de dados ao deploy, passando pela infraestrutura.</li>
			<li>Visão de produto orientada a conversão, de quem já desenvolveu e mediu campanhas de marketing.</li>
			<li>Acessibilidade e HTML semântico como padrão de qualidade.</li>
		</ul>
	</section>

	<section aria-labelledby="modelos-titulo">
		<h2 id="modelos-titulo">Cargos, modelos de trabalho e localização</h2>
		<p>Cargos em que atuo:</p>
		<ul>
			<li>Desenvolvedor Full Stack (Angular ou Svelte com Node.js ou Java).</li>
			<li>Desenvolvedor Front-end Angular.</li>
			<li>Desenvolvedor Front-end Svelte e SvelteKit.</li>
			<li>Desenvolvedor Web em Sorocaba, com foco em SEO técnico.</li>
			<li>Engenheiro de performance web (Core Web Vitals).</li>
		</ul>
		<p>
			Moro em {person.city}, no interior de São Paulo, cidade conectada à capital pela Rodovia Castello
			Branco. Trabalho presencial em {person.city} e região, modelo híbrido em cidades próximas, como
			Itu, Indaiatuba, Jundiaí, Campinas e São Paulo, conforme a frequência combinada, e trabalho remoto
			para empresas de qualquer lugar.
		</p>
	</section>

	<section aria-labelledby="formacao-titulo">
		<h2 id="formacao-titulo">Formação</h2>
		<p>Análise e Desenvolvimento de Sistemas — Fatec Itu (2023 a 2026).</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes de recrutadores" />

	<Related
		title="Mais sobre o meu trabalho"
		links={[
			{ href: '/', text: 'Página inicial com resultados e sites em produção' },
			{ href: services.sistemasWeb.path, text: 'Projetos de sistemas web e microsserviços' },
			{ href: services.otimizacaoDeSites.path, text: 'Trabalho com performance e Core Web Vitals' },
			{ href: guides.seoAngular.path, text: 'Artigo técnico: SEO em aplicações Angular' },
			{ href: person.github, text: 'Repositórios no GitHub' }
		]}
	/>

	<Contact
		{whatsapp}
		title="Contato para oportunidades"
		intro="Para propostas de vaga, me chame no WhatsApp; respondo com disponibilidade para entrevista."
	/>
</main>
