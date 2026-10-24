<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { guides, services, type WhatsApp } from '$lib/site';

	const path = services.consultoriaSeo.path;
	const title = 'Consultoria de SEO técnico para empresas - Calebe Araujo';
	const description =
		'Consultoria de SEO técnico para empresas: diagnóstico, plano priorizado e correções no código para o seu site ser indexado e gerar contatos.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de consultoria de SEO. Meu site é: ',
		label: 'Pedir uma análise do meu site pelo WhatsApp'
	};

	const crumbs = [{ name: 'Consultoria de SEO', path }];

	const faqs: FaqItem[] = [
		{
			question: 'O que faz um consultor ou especialista em SEO técnico?',
			answer:
				'Um especialista em SEO técnico identifica e corrige o que impede um site de ser rastreado, indexado e bem posicionado no Google: páginas bloqueadas, conteúdo duplicado, lentidão, redirecionamentos quebrados e dados estruturados incorretos. Diferente de uma ferramenta automática, ele prioriza o que mais afeta o tráfego e as vendas.'
		},
		{
			question: 'Quanto tempo o SEO leva para dar resultado?',
			answer:
				'Segundo o próprio Google, na maioria dos casos são necessários de quatro meses a um ano para implementar as melhorias e começar a ver os benefícios. Correções técnicas graves, como páginas importantes fora do índice, costumam mostrar efeito antes; ganhos em buscas concorridas levam mais tempo.'
		},
		{
			question: 'Uma consultoria de SEO garante o primeiro lugar no Google?',
			answer:
				'Não. O Google avisa que ninguém pode garantir a primeira posição, e promessas de primeiro lugar ou de primeira página garantida são um sinal de alerta. O que uma consultoria séria garante é um diagnóstico claro, correções bem feitas e acompanhamento dos indicadores no Search Console.'
		},
		{
			question: 'Preciso trocar de plataforma para melhorar o SEO?',
			answer:
				'Na maioria dos casos, não. WordPress, Angular, SvelteKit ou HTML estático podem ter ótimo SEO quando bem configurados. A troca só faz sentido quando a plataforma atual impede correções importantes, como renderização dependente de JavaScript ou lentidão que não se resolve com otimização.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Consultoria de SEO técnico',
			serviceType: 'Consultoria de SEO',
			description,
			audience: 'Empresas com site próprio que querem mais tráfego orgânico e contatos'
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="consultoria-seo" />
		<Breadcrumbs {crumbs} />

		<h1>Consultoria de SEO técnico para empresas</h1>

		<p>
			Consultoria de SEO técnico é o trabalho de encontrar e corrigir o que impede um site de aparecer
			bem no Google: problemas de rastreamento, indexação, velocidade, estrutura de páginas e dados
			estruturados. Como sou desenvolvedor full stack, não entrego só um relatório: implemento as
			correções no código ou oriento o seu time a fazê-las.
		</p>
		<p>
			A experiência vem de projetos em produção: uma rede de 25 sites integrada a um CRM próprio e mais
			de 60 landing pages construídas com SEO técnico desde a primeira linha de código.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="incluido-titulo">
		<h2 id="incluido-titulo">O que a consultoria de SEO inclui</h2>
		<p>
			O escopo parte de um diagnóstico do site e cobre as camadas que mais pesam no posicionamento
			orgânico:
		</p>
		<ul>
			<li><strong>Rastreamento e indexação:</strong> robots.txt, sitemap.xml, canonical, redirecionamentos, códigos de status e o relatório de páginas do Search Console.</li>
			<li><strong>Performance:</strong> Core Web Vitals (LCP, INP e CLS) com dados reais de usuários, peso de páginas e cache.</li>
			<li><strong>Palavras-chave e SEO on-page:</strong> pesquisa de palavras-chave baseada em como o público realmente busca, com títulos, headings e textos alinhados a cada intenção.</li>
			<li><strong>Arquitetura de informação:</strong> uma intenção de busca por página, URLs descritivas e links internos que distribuem relevância.</li>
			<li><strong>Dados estruturados:</strong> Schema.org em JSON-LD coerente com o conteúdo visível, sem dados inventados.</li>
			<li><strong>Renderização:</strong> conteúdo principal entregue no HTML, que é o que robôs de busca e de IA leem de forma confiável, inclusive em <a href={guides.seoAngular.path}>aplicações Angular</a>.</li>
			<li><strong>Conteúdo e canibalização:</strong> páginas que disputam a mesma busca, páginas finas e lacunas de intenção.</li>
			<li><strong>Autoridade (SEO off-page):</strong> análise de backlinks e menções da marca, com foco em links conquistados por conteúdo útil, sem compra de links.</li>
			<li><strong>Respostas de IA:</strong> estrutura em pergunta e resposta para o site ser citado em AI Overviews e assistentes (veja o guia de <a href={guides.seoParaIa.path}>SEO para IA</a>).</li>
		</ul>
	</section>

	<section aria-labelledby="para-quem-titulo">
		<h2 id="para-quem-titulo">Para quem a consultoria de SEO faz sentido</h2>
		<p>A consultoria traz mais retorno para empresas em uma destas situações:</p>
		<ul>
			<li>O site existe há meses, mas não aparece para as buscas que importam.</li>
			<li>O tráfego orgânico caiu depois de uma migração, um redesign ou uma atualização do Google.</li>
			<li>A empresa vai trocar de plataforma e não quer perder as posições conquistadas.</li>
			<li>O site tem muitas páginas, como portais, redes de sites ou catálogos, e problemas que se repetem em escala.</li>
			<li>O time de marketing produz conteúdo, mas não tem um desenvolvedor para resolver a parte técnica.</li>
		</ul>
		<h3>Consultoria de SEO para pequenas empresas</h3>
		<p>
			Para pequenas empresas, a consultoria começa pelo que traz retorno mais rápido com pouco
			investimento: Perfil da Empresa no Google (o antigo Google Meu Negócio) bem preenchido, uma página para cada serviço principal e uma
			base técnica sem erros de indexação. Em vez de um acompanhamento mensal longo, um projeto
			pontual bem feito costuma resolver a maior parte do problema.
		</p>

		<h3>Consultoria de SEO para WordPress</h3>
		<p>
			Em sites WordPress, os problemas de SEO costumam se repetir: plugins que deixam o site lento,
			páginas de tag e de autor indexadas sem necessidade, sitemaps duplicados entre plugins e temas com
			títulos fora de ordem. A consultoria resolve isso na configuração e no tema, sem trocar de
			plataforma.
		</p>

		<h3>Quando não é a melhor escolha</h3>
		<p>
			Se o site é novo e ainda não tem conteúdo sobre os serviços da empresa, o primeiro passo é
			estruturar as páginas, não otimizar o que não existe. E se o negócio precisa de clientes nas
			próximas semanas, anúncios pagos resolvem mais rápido; o SEO é um investimento de médio prazo
			que pode andar em paralelo.
		</p>
	</section>

	<section aria-labelledby="processo-titulo">
		<h2 id="processo-titulo">Como funciona, passo a passo</h2>
		<ol>
			<li><strong>Diagnóstico:</strong> análise do site publicado, do Search Console e, quando houver acesso, do código-fonte ou do CMS.</li>
			<li><strong>Plano priorizado:</strong> lista de correções ordenada pelo impacto em tráfego e em contatos, com o motivo de cada prioridade.</li>
			<li><strong>Execução:</strong> implemento as correções diretamente ou oriento o seu time ou fornecedor, com critérios claros de aceite.</li>
			<li><strong>Acompanhamento:</strong> métricas de indexação, Core Web Vitals e consultas no Search Console acompanhadas após cada mudança.</li>
		</ol>
		<p>
			Para começar, preciso do endereço do site e de acesso de leitura ao Google Search Console.
			Acesso ao Google Analytics e ao código ou CMS acelera o diagnóstico, mas não é obrigatório.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="consultor-agencia-titulo">
		<h2 id="consultor-agencia-titulo">Consultor de SEO ou agência de SEO?</h2>
		<p>
			As duas opções funcionam, para necessidades diferentes. Quem procura uma empresa especializada em
			SEO normalmente compara agências e consultores independentes, às vezes chamados de consultores de
			SEO freelancer. A tabela resume onde cada modelo se sai melhor:
		</p>
		<table>
			<caption>Comparação entre consultor independente e agência de SEO</caption>
			<thead>
				<tr>
					<th scope="col">Critério</th>
					<th scope="col">Consultor desenvolvedor</th>
					<th scope="col">Agência de SEO</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Quem implementa as correções técnicas</th>
					<td>O próprio consultor, no código</td>
					<td>Normalmente o desenvolvedor do cliente ou um terceirizado</td>
				</tr>
				<tr>
					<th scope="row">Comunicação</th>
					<td>Direta com quem executa</td>
					<td>Por meio de atendimento e gerência de contas</td>
				</tr>
				<tr>
					<th scope="row">Ponto forte</th>
					<td>Especialista em SEO técnico, performance, migrações e arquitetura</td>
					<td>Produção de conteúdo e link building em grande volume</td>
				</tr>
				<tr>
					<th scope="row">Indicado para</th>
					<td>Sites com problemas técnicos ou que vão ser reconstruídos</td>
					<td>Empresas que precisam publicar muito conteúdo todo mês</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="custo-titulo">
		<h2 id="custo-titulo">Quanto custa uma consultoria de SEO</h2>
		<p>
			O preço de uma consultoria de SEO depende principalmente de quatro fatores: o tamanho do site
			(dez páginas ou dez mil), a plataforma e o acesso ao código, se a implementação das correções
			está incluída e se o trabalho é pontual ou com acompanhamento mensal. Por isso a proposta é
			montada depois de uma primeira análise do site, com escopo e entregas definidos por escrito.
		</p>
	</section>

	<section aria-labelledby="guias-titulo">
		<h2 id="guias-titulo">Guias sobre SEO técnico</h2>
		<ul>
			<li><a href={guides.comoAparecer.path}>Como colocar a sua empresa no Google</a>: guia sem jargão para donos de empresa.</li>
			<li><a href={guides.siteNaoAparece.path}>Por que um site não aparece no Google</a>: diagnóstico em 7 passos.</li>
			<li><a href={guides.seoParaIa.path}>Como aparecer no ChatGPT e no AI Overviews</a>: SEO para IA na prática.</li>
			<li><a href={guides.seoAngular.path}>SEO para sites Angular</a>: SSR, pré-renderização e indexação.</li>
		</ul>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre consultoria de SEO" />

	<Related
		links={[
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO: o diagnóstico que abre a consultoria' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites lentos e Core Web Vitals' },
			{ href: services.seoB2b.path, text: 'Consultoria de SEO B2B e geração de leads' },
			{ href: '/consultoria-seo-sorocaba', text: 'Consultoria de SEO local em Sorocaba' },
			{ href: '/consultoria-seo-sao-paulo', text: 'Consultoria de SEO para empresas de São Paulo' }
		]}
	/>

	<Contact {whatsapp} title="Solicite uma análise do seu site" intro="Envie o endereço do seu site pelo WhatsApp e conte o que você quer melhorar no Google." />
</main>
