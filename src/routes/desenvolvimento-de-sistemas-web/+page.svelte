<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, services, type WhatsApp } from '$lib/site';

	const path = services.sistemasWeb.path;
	const title = 'Desenvolvimento de sistemas web sob medida - Calebe Araujo';
	const description =
		'Desenvolvimento de sistemas web sob medida: CRMs, integrações entre sites, APIs REST e headless CMS com Angular, Svelte, Node.js, Java e PostgreSQL.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de sistemas web e quero conversar sobre um sistema sob medida.',
		label: 'Conversar sobre o meu sistema pelo WhatsApp'
	};

	const crumbs = [{ name: 'Desenvolvimento de sistemas web', path }];

	const faqs: FaqItem[] = [
		{
			question: 'Sistema sob medida ou software pronto (SaaS)?',
			answer:
				'Se um software pronto atende o processo da empresa, ele quase sempre sai mais barato e mais rápido. O sistema sob medida vale a pena quando o processo é o diferencial do negócio, quando é preciso integrar vários sistemas que não conversam entre si ou quando o custo das licenças cresce mais que o custo de manter um sistema próprio.'
		},
		{
			question: 'O sistema pode se integrar a um CRM ou ERP que a empresa já usa?',
			answer:
				'Na maioria dos casos, sim. A integração é feita pelas APIs do sistema existente: o novo sistema envia e recebe dados, como leads, pedidos e cadastros, sem trabalho manual. Quando o sistema antigo não tem API, avalio alternativas como exportação agendada ou leitura direta do banco de dados.'
		},
		{
			question: 'Microsserviços são sempre a melhor arquitetura?',
			answer:
				'Não. Para a maioria dos sistemas, começar com um monólito bem organizado em módulos é mais simples de desenvolver e manter. Microsserviços se pagam quando há várias aplicações consumindo os mesmos dados, como uma rede de sites, ou partes do sistema com cargas e ciclos de mudança muito diferentes.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Desenvolvimento de sistemas web sob medida',
			serviceType: 'Desenvolvimento de software web',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Desenvolvimento de sistemas web sob medida</h1>

		<p>
			Desenvolvo sistemas web sob medida para processos que planilhas e softwares prontos não resolvem
			bem: CRMs, integrações entre sites, APIs REST e painéis de gestão de conteúdo. Trabalho do banco de
			dados à infraestrutura em nuvem, com Angular, Svelte, Node.js, Java e PostgreSQL.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="caso-titulo">
		<h2 id="caso-titulo">Caso real: CRM em microsserviços para 25 sites</h2>
		<p>
			No Grupo OC, arquitetei e construí um CRM proprietário em microsserviços que integra 25 sites.
			O conteúdo das páginas fica centralizado em um headless CMS (Directus) e os leads de todos os
			sites chegam ao CRM por APIs REST, o que permite saber qual página gerou cada contato.
		</p>
		<p>
			A infraestrutura roda em servidores Ubuntu com Docker e PostgreSQL, publicados com Cloudflare
			Tunnel no modelo Zero Trust, e em serviços da AWS. Na migração dos sites legados para Angular e
			Svelte, o carregamento das páginas caiu de 8 para 1 segundo.
		</p>
	</section>

	<section aria-labelledby="solucoes-titulo">
		<h2 id="solucoes-titulo">O que posso desenvolver</h2>
		<h3>CRM e gestão de leads</h3>
		<p>
			Captura de contatos de sites, formulários e WhatsApp em um só lugar, com origem de cada lead e
			etapas do funil definidas pelo processo comercial da empresa.
		</p>
		<h3>Integrações entre sistemas</h3>
		<p>
			APIs que conectam sites, CRM, ERP e ferramentas de marketing, eliminando o trabalho de copiar
			dados de um sistema para outro.
		</p>
		<h3>Headless CMS para redes de sites</h3>
		<p>
			Um painel único para editar o conteúdo de vários sites, com os sites gerados de forma estática
			para continuarem rápidos e fáceis de indexar.
		</p>
		<h3>Automações com inteligência artificial</h3>
		<p>
			Rotinas que usam APIs de modelos de linguagem para classificar, resumir ou enriquecer dados,
			sempre com regras claras sobre o que a automação pode ou não alterar.
		</p>
	</section>

	<section aria-labelledby="stack-titulo">
		<h2 id="stack-titulo">Tecnologias</h2>
		<dl>
			<dt>Front-end</dt>
			<dd>Angular, Svelte e SvelteKit com TypeScript.</dd>
			<dt>Back-end</dt>
			<dd>Node.js com Express e Java, expondo APIs REST.</dd>
			<dt>Dados</dt>
			<dd>PostgreSQL e MongoDB; Directus como headless CMS.</dd>
			<dt>Infraestrutura</dt>
			<dd>Docker, AWS, Cloudflare, Linux, NGINX e GitHub Actions para integração contínua.</dd>
		</dl>
	</section>

	<section aria-labelledby="como-titulo">
		<h2 id="como-titulo">Como conduzo um projeto de sistema</h2>
		<ol>
			<li><strong>Entendimento do processo:</strong> quem usa o sistema, quais dados entram e quais decisões ele precisa apoiar.</li>
			<li><strong>Arquitetura:</strong> a solução mais simples que resolve o problema hoje e permite crescer.</li>
			<li><strong>Entregas incrementais:</strong> partes utilizáveis do sistema publicadas cedo, em vez de uma entrega única no fim.</li>
			<li><strong>Publicação e monitoramento:</strong> deploy automatizado, backups e acompanhamento de erros.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre sistemas web" />

	<Related
		links={[
			{ href: services.seoB2b.path, text: 'Leads B2B do site direto para o CRM' },
			{ href: services.criacaoDeSites.path, text: 'Criação de sites integrados ao CRM' },
			{ href: services.otimizacaoDeSites.path, text: 'Performance de sites e aplicações' },
			{ href: careerPage.path, text: 'Experiência como desenvolvedor full stack' }
		]}
	/>

	<Contact {whatsapp} title="Converse sobre o seu sistema" intro="Descreva o processo que você quer automatizar ou os sistemas que precisam conversar entre si." />
</main>
