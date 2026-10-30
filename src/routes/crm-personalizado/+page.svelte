<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { services, type WhatsApp } from '$lib/site';

	const path = services.crmPersonalizado.path;
	const title = 'CRM personalizado: quando vale a pena e quanto custa - Calebe Araujo';
	const description =
		'CRM personalizado ou CRM pronto? Quando um CRM sob medida compensa, o que define o custo e o caso real de um CRM que integra os leads de 25 sites.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de CRM personalizado e quero conversar sobre o CRM da minha empresa.',
		label: 'Conversar sobre um CRM personalizado pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Desenvolvimento de sistemas web', path: services.sistemasWeb.path },
		{ name: 'CRM personalizado', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'CRM personalizado é o mesmo que software sob medida?',
			answer:
				'É um tipo de software sob medida, voltado para a gestão de clientes e vendas: cadastro de contatos, etapas do funil, tarefas da equipe comercial e a origem de cada lead. Quando o sistema também controla estoque, pedidos ou ordens de serviço, ele passa a ser um sistema de gestão mais amplo, desenvolvido da mesma forma.'
		},
		{
			question: 'Quanto tempo leva para ter um CRM personalizado funcionando?',
			answer:
				'Depende do escopo, principalmente do número de integrações e de regras comerciais. Para não esperar o sistema inteiro, o projeto começa por um MVP: a captação de leads, o funil e a integração mais importante, já em uso pela equipe. O restante entra em entregas seguintes, conforme o uso mostra o que falta.'
		},
		{
			question: 'Os dados dos clientes ficam seguros em um CRM próprio?',
			answer:
				'A segurança é parte do projeto desde o início: perfis de acesso para cada função, registro de quem altera os dados, conexões criptografadas, backups e cuidado com dados pessoais, como pede a LGPD. Com um CRM próprio, a empresa também decide onde os dados ficam e quem tem acesso a eles.'
		},
		{
			question: 'Dá para levar os dados do CRM atual para o novo?',
			answer:
				'Na maioria dos casos, sim. Os CRMs prontos permitem exportar contatos e negócios em planilha ou por API, e esses dados são importados no sistema novo antes de ele entrar em uso. A migração costuma ser o momento de limpar cadastros duplicados e campos que ninguém usa.'
		},
		{
			question: 'O CRM personalizado funciona no celular?',
			answer:
				'Sim. Como é um sistema web, ele roda no navegador do computador e do celular, sem instalação. Isso é útil para equipes externas, que registram visitas e atualizam negociações de onde estiverem.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Desenvolvimento de CRM personalizado',
			serviceType: 'Desenvolvimento de CRM personalizado',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="sistemas-web" />
		<Breadcrumbs {crumbs} />

		<h1>CRM personalizado: quando vale a pena e quanto custa</h1>

		<p>
			CRM personalizado é um sistema de gestão de clientes desenvolvido a partir do processo comercial
			da própria empresa: as etapas do funil, os campos de cada cadastro, as regras de distribuição de
			leads e as integrações seguem a forma como o time já vende, em vez de o time se adaptar a um CRM
			pronto. Desenvolvo CRMs sob medida e também integrações com CRMs que a empresa já usa.
		</p>
		<p>
			É uma das frentes do <a href={services.sistemasWeb.path}>desenvolvimento de sistemas web</a>. No
			Grupo OC, arquitetei e construí um CRM em microsserviços que recebe os leads de 25 sites e mostra
			qual página gerou cada contato.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="comparacao-titulo">
		<h2 id="comparacao-titulo">CRM pronto ou CRM personalizado?</h2>
		<p>
			Para a maioria das empresas, um CRM pronto é o melhor começo: entra em uso no mesmo dia e custa
			pouco com uma equipe pequena. O CRM personalizado passa a valer a pena quando o processo comercial
			não cabe no modelo da ferramenta, quando os leads vêm de muitos canais que precisam ser integrados
			ou quando a mensalidade por usuário cresce mais que o valor que o sistema entrega.
		</p>
		<table>
			<caption>Comparação entre CRM pronto e CRM personalizado</caption>
			<thead>
				<tr>
					<th scope="col">Critério</th>
					<th scope="col">CRM pronto (RD Station CRM, Pipedrive, HubSpot)</th>
					<th scope="col">CRM personalizado</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Início de uso</th>
					<td>Imediato, após a configuração</td>
					<td>Depois do desenvolvimento da primeira versão</td>
				</tr>
				<tr>
					<th scope="row">Custo</th>
					<td>Mensalidade, em geral por usuário, que cresce com a equipe</td>
					<td>Investimento no desenvolvimento, mais hospedagem e manutenção</td>
				</tr>
				<tr>
					<th scope="row">Processo comercial</th>
					<td>A equipe se adapta às etapas e campos da ferramenta</td>
					<td>O sistema segue o processo da empresa</td>
				</tr>
				<tr>
					<th scope="row">Integrações</th>
					<td>As que a ferramenta oferece, às vezes em planos mais caros</td>
					<td>Qualquer sistema com API ou banco de dados acessível</td>
				</tr>
				<tr>
					<th scope="row">Dados</th>
					<td>Na plataforma do fornecedor</td>
					<td>Em servidor escolhido pela empresa</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="sinais-titulo">
		<h2 id="sinais-titulo">Cinco sinais de que o CRM pronto não serve mais</h2>
		<ol>
			<li><strong>Leads perdidos entre canais:</strong> contatos do site, de formulários e do WhatsApp chegam por caminhos diferentes, e parte deles é copiada à mão ou se perde.</li>
			<li><strong>Planilhas paralelas:</strong> a equipe mantém controles fora do CRM porque a ferramenta não tem o campo ou a etapa de que ela precisa.</li>
			<li><strong>Regras que a ferramenta não suporta:</strong> distribuição de leads por região, por produto ou por marca, ou vários sites alimentando o mesmo funil.</li>
			<li><strong>Integrações impossíveis ou caras:</strong> o ERP ou o sistema interno da empresa não conversa com o CRM, ou a integração só existe em um plano muito mais caro.</li>
			<li><strong>Relatórios montados à mão:</strong> para saber qual canal ou página traz venda, alguém precisa cruzar dados de sistemas diferentes todo mês.</li>
		</ol>
	</section>

	<section aria-labelledby="custo-titulo">
		<h2 id="custo-titulo">Quanto custa um CRM personalizado</h2>
		<p>
			O custo de um CRM personalizado depende do número de canais e sistemas a integrar, das regras
			comerciais e perfis de acesso, dos relatórios necessários, da migração dos dados atuais e da
			hospedagem e manutenção depois da entrega. Por isso o orçamento é feito depois de mapear o
			processo comercial.
		</p>
		<p>
			A comparação justa com um CRM pronto é o custo total em alguns anos: de um lado, a mensalidade
			multiplicada pelo número de usuários e pelos planos necessários para as integrações; do outro, o
			desenvolvimento, a hospedagem e a manutenção. Começar por um MVP reduz o investimento inicial e
			mostra cedo se o sistema resolve o problema.
		</p>
	</section>

	<section aria-labelledby="caso-titulo">
		<h2 id="caso-titulo">Caso real: CRM em microsserviços para 25 sites</h2>
		<p>
			No Grupo OC, os leads de 25 sites chegam a um CRM proprietário por APIs REST, o que permite saber
			qual página gerou cada contato. O conteúdo das páginas fica centralizado em um headless CMS
			(Directus), e a infraestrutura roda em servidores Ubuntu com Docker e PostgreSQL, publicados com
			Cloudflare Tunnel no modelo Zero Trust, e em serviços da AWS.
		</p>
		<p>
			A arquitetura em microsserviços foi escolhida porque várias aplicações, os 25 sites, consomem os
			mesmos dados. Para um CRM que atende um único site ou uma única equipe, um sistema único bem
			organizado em módulos costuma ser mais simples de desenvolver e manter.
		</p>
	</section>

	<section aria-labelledby="projeto-titulo">
		<h2 id="projeto-titulo">Como é o projeto de um CRM personalizado</h2>
		<ol>
			<li><strong>Mapeamento do processo comercial:</strong> de onde vêm os leads, quem atende cada um, quais são as etapas até a venda e o que a equipe precisa ver em cada uma.</li>
			<li><strong>Primeira versão (MVP):</strong> captação de leads, funil e a integração mais importante, já em uso pela equipe.</li>
			<li><strong>Integrações:</strong> site, formulários, botões de WhatsApp, ERP e ferramentas de marketing enviando e recebendo dados sem digitação manual.</li>
			<li><strong>Migração dos dados:</strong> contatos e negociações do sistema atual importados e limpos.</li>
			<li><strong>Segurança e LGPD:</strong> perfis de acesso, registro de alterações e backups desde a primeira versão.</li>
			<li><strong>Evolução:</strong> relatórios, automações e novas regras conforme o uso mostra o que falta.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="integrar-titulo">
		<h2 id="integrar-titulo">Quando é melhor integrar do que substituir</h2>
		<p>
			Nem todo problema de CRM pede um sistema novo. Se a equipe gosta da ferramenta atual e o problema
			é só a entrada de leads, integrar o site e os formulários ao CRM que a empresa já usa, pela API
			dele, resolve mais rápido e custa menos. O CRM personalizado faz sentido quando o problema está no
			próprio processo que a ferramenta não consegue representar.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre CRM personalizado" />

	<Related
		links={[
			{ href: services.sistemasWeb.path, text: 'Sistemas web e software sob medida' },
			{ href: services.seoB2b.path, text: 'Leads B2B da busca orgânica direto no CRM' },
			{ href: services.landingPage.path, text: 'Landing pages que enviam os contatos ao CRM' },
			{ href: services.criacaoDeSites.path, text: 'Sites integrados ao CRM desde o início' }
		]}
	/>

	<Contact {whatsapp} title="Converse sobre o CRM da sua empresa" intro="Conte como os leads chegam hoje, quem atende e qual CRM ou planilha a equipe usa; eu respondo se vale integrar ou desenvolver um CRM próprio." />
</main>
