<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, guides, services, type WhatsApp } from '$lib/site';

	const path = guides.migracao.path;
	const title = 'Migração de site sem perder SEO: checklist completo - Calebe Araujo';
	const description =
		'Migração ou redesign de site sem perder posições no Google: mapa de URLs, redirecionamentos 301, testes antes e depois e um caso real.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vou trocar o meu site e não quero perder as posições no Google. O site atual é: ',
		label: 'Planejar a migração do meu site pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Migração de site', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Quanto tempo o site leva para se recuperar depois de uma migração?',
			answer:
				'Em uma migração bem feita, a oscilação de posições costuma se acomodar em algumas semanas. Segundo o Google, em um site de tamanho médio a maioria das páginas é transferida no índice em algumas semanas, e sites maiores levam mais tempo. Queda que continua depois disso indica um problema a investigar, como redirecionamentos errados ou conteúdo que se perdeu.'
		},
		{
			question: 'Por quanto tempo devo manter os redirecionamentos?',
			answer:
				'O Google recomenda manter os redirecionamentos pelo maior tempo possível, em geral por pelo menos um ano. Na prática, o mais seguro é não removê-los nunca, porque links antigos em outros sites e favoritos dos clientes continuam apontando para os endereços antigos. Em troca de domínio, mantenha também o domínio antigo registrado.'
		},
		{
			question: 'Posso redirecionar todas as páginas antigas para a home?',
			answer:
				'Não é recomendado. Quando uma página antiga redireciona para a home, que não tem o mesmo conteúdo, o Google tende a tratar o endereço como um soft 404, ou seja, como uma página removida, e a relevância dela não passa para lugar nenhum. Cada página deve ir para a equivalente mais próxima; se não houver equivalente, um 404 honesto é melhor.'
		},
		{
			question: 'Mudar só o layout, sem mudar os endereços, afeta o SEO?',
			answer:
				'Pode afetar. Mesmo com as mesmas URLs, um novo layout pode remover textos, trocar títulos e headings, mudar os links internos ou deixar a página mais lenta. Por isso o redesign também precisa de uma comparação entre o antes e o depois de cada página importante.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'Migração de site sem perder SEO: checklist completo' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="site-nao-aparece" />
		<Breadcrumbs {crumbs} />

		<h1>Migração de site sem perder SEO: checklist completo</h1>

		<p>
			Migrar um site sem perder SEO significa trocar o domínio, a plataforma ou o layout mantendo, para
			cada página que já aparece no Google, um endereço equivalente no site novo, ligado ao antigo por
			um redirecionamento 301. Quando isso falha, o Google trata as páginas antigas como removidas, e as
			posições que elas tinham conquistado vão embora junto.
		</p>
		<p>
			Este checklist é o que sigo em migrações e redesigns, inclusive no relançamento deste site. O
			planejamento da migração faz parte da <a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a>
			e de toda <a href={services.criacaoDeSites.path}>criação de site</a> que substitui um site antigo.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="queda-titulo">
		<h2 id="queda-titulo">Por que o tráfego cai depois de uma migração</h2>
		<p>
			O tráfego cai depois de uma migração quando o Google deixa de encontrar, no site novo, o que
			encontrava no antigo: o endereço, o conteúdo ou os sinais da página. As causas mais comuns são:
		</p>
		<ul>
			<li><strong>Endereços que mudaram sem redirecionamento:</strong> as páginas antigas passam a responder 404 e perdem as posições.</li>
			<li><strong>Tudo redirecionado para a home:</strong> o Google trata esses endereços como páginas removidas (soft 404).</li>
			<li><strong>Conteúdo que encolheu:</strong> textos cortados no redesign deixam de responder às buscas para as quais a página aparecia.</li>
			<li><strong>Títulos e headings trocados:</strong> o novo texto já não usa os termos que traziam as visitas.</li>
			<li><strong>Bloqueio do ambiente de testes publicado:</strong> <code>noindex</code> ou robots.txt de homologação esquecidos no site novo.</li>
			<li><strong>Conteúdo que só aparece com JavaScript:</strong> a plataforma nova entrega a página vazia para os robôs.</li>
			<li><strong>Links internos para endereços antigos:</strong> cada clique passa por um redirecionamento, às vezes em cadeia.</li>
		</ul>
	</section>

	<section aria-labelledby="tipos-titulo">
		<h2 id="tipos-titulo">Tipos de migração e o risco de cada uma</h2>
		<p>
			Toda migração mexe em alguma coisa que o Google já conhecia. O risco depende do que muda: o
			endereço das páginas, o conteúdo, a tecnologia ou tudo ao mesmo tempo.
		</p>
		<table>
			<caption>Tipos de migração de site e o principal cuidado em cada uma</caption>
			<thead>
				<tr>
					<th scope="col">Tipo</th>
					<th scope="col">O que muda</th>
					<th scope="col">Principal cuidado</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Troca de domínio</th>
					<td>Todos os endereços</td>
					<td>Redirecionar página por página e usar a ferramenta de mudança de endereço do Search Console</td>
				</tr>
				<tr>
					<th scope="row">Troca de plataforma</th>
					<td>Tecnologia e, quase sempre, o formato dos endereços</td>
					<td>Mapa de redirecionamentos e conteúdo entregue no HTML</td>
				</tr>
				<tr>
					<th scope="row">Redesign</th>
					<td>Layout, textos e menus</td>
					<td>Não perder conteúdo, títulos nem links internos das páginas que já recebem visitas</td>
				</tr>
				<tr>
					<th scope="row">HTTP para HTTPS</th>
					<td>Protocolo de todos os endereços</td>
					<td>Redirecionamento 301 único e canonical, sitemap e links internos já em HTTPS</td>
				</tr>
			</tbody>
		</table>
		<p>
			Fazer várias mudanças de uma vez, como domínio, plataforma e layout no mesmo dia, dificulta
			descobrir a causa se algo der errado. Quando o prazo permite, separar as etapas reduz o risco.
		</p>
	</section>

	<section aria-labelledby="inventario-titulo">
		<h2 id="inventario-titulo">Antes: o inventário de URLs</h2>
		<p>
			O inventário é a lista de todos os endereços do site atual que têm algum valor: os que recebem
			visitas da busca, os que têm links de outros sites e os que aparecem no sitemap. É o documento
			mais importante da migração, porque tudo o que não estiver nele corre o risco de virar 404.
		</p>
		<ol>
			<li><strong>Sitemap atual:</strong> a lista oficial de páginas do site.</li>
			<li><strong>Search Console:</strong> o relatório de desempenho por página mostra quais endereços tiveram impressões e cliques nos últimos 16 meses.</li>
			<li><strong>Links externos:</strong> páginas que recebem links de outros sites precisam de destino, mesmo sem tráfego.</li>
			<li><strong>Rastreamento do site:</strong> uma ferramenta de rastreamento encontra páginas que não estão no sitemap.</li>
			<li><strong>Registro do que existe hoje:</strong> título, H1 e tamanho do texto das páginas principais, para comparar depois.</li>
		</ol>
	</section>

	<section aria-labelledby="mapa-titulo">
		<h2 id="mapa-titulo">O mapa de redirecionamentos 301</h2>
		<p>
			O mapa de redirecionamentos liga cada endereço antigo ao endereço novo com o mesmo conteúdo ou a
			mesma intenção. É ele que diz ao Google que a página mudou de lugar, e não que deixou de existir.
		</p>
		<ul>
			<li><strong>Um para um:</strong> cada página antiga vai para a equivalente mais próxima, e não para uma página genérica.</li>
			<li><strong>Sem equivalente, sem redirecionamento:</strong> conteúdo que deixou de existir responde 404 ou 410, em vez de ir para a home.</li>
			<li><strong>Sem cadeias:</strong> o endereço antigo aponta direto para o destino final, e os links internos do site novo já usam os endereços novos.</li>
			<li><strong>Redirecionamento permanente:</strong> 301 ou 308 para mudanças definitivas; 302 e 307 só para mudanças temporárias.</li>
			<li><strong>Redirecionamento no servidor:</strong> configurado no servidor ou na hospedagem, e não por JavaScript ou meta refresh, que são lidos com menos confiança.</li>
		</ul>
	</section>

	<section aria-labelledby="dia-titulo">
		<h2 id="dia-titulo">No dia da publicação: o que testar</h2>
		<ol>
			<li>Nenhum <code>noindex</code> nem bloqueio no robots.txt herdado do ambiente de testes.</li>
			<li>Sitemap novo só com endereços que respondem 200, enviado no Search Console.</li>
			<li>Canonical de cada página apontando para ela mesma, no endereço novo.</li>
			<li>Uma amostra dos redirecionamentos testada: cada endereço antigo responde 301 e chega ao destino certo em um único salto.</li>
			<li>Conteúdo principal presente no HTML que o servidor entrega, e não só depois do JavaScript.</li>
			<li>Inspeção de URL no Search Console das páginas mais importantes, para pedir o rastreamento.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="depois-titulo">
		<h2 id="depois-titulo">Depois: o acompanhamento das primeiras semanas</h2>
		<p>
			Nas semanas seguintes, o acompanhamento compara o site novo com o antigo nos dados do Search
			Console. Alguma oscilação é normal enquanto o Google processa os redirecionamentos; o que importa
			é a tendência.
		</p>
		<ul>
			<li><strong>Relatório de páginas:</strong> novos erros 404, páginas com redirecionamento e páginas que deixaram de ser indexadas.</li>
			<li><strong>Desempenho:</strong> cliques por página comparados com o mesmo período antes da migração.</li>
			<li><strong>Velocidade:</strong> Core Web Vitals do site novo, que só refletem os usuários reais depois de algumas semanas.</li>
			<li><strong>Links internos e externos:</strong> correção dos links que ainda apontam para endereços antigos.</li>
		</ul>
	</section>

	<section aria-labelledby="caso-titulo">
		<h2 id="caso-titulo">Caso real: o relançamento deste site</h2>
		<p>
			Em outubro de 2026, o site antigo, que tinha blog, páginas de cases e animações em JavaScript, foi
			substituído por este site, com uma página por serviço e HTML gerado de forma estática. Antes da
			troca, listei os endereços do sitemap antigo e defini um destino para cada um:
		</p>
		<ul>
			<li>as páginas de perfil e experiência foram para a página de <a href={careerPage.path}>desenvolvedor full stack</a>;</li>
			<li>cada case foi para a página de serviço que hoje trata daquele trabalho: os sites da rede de telecom, por exemplo, para <a href={services.seoB2b.path}>SEO para B2B</a>, e o site de esquadrias, para <a href="/criacao-de-sites-sorocaba">criação de sites em Sorocaba</a>;</li>
			<li>as antigas páginas de serviços e de contato foram para a página inicial, que hoje reúne os serviços e o contato;</li>
			<li>os posts antigos, sem conteúdo equivalente no site novo, ficaram em 404 de propósito, porque redirecioná-los para a home seria tratado como soft 404.</li>
		</ul>
		<p>
			No total, 16 endereços antigos ganharam redirecionamento 301, configurado no servidor. Em outro
			tipo de migração, a de sistemas legados para Angular e Svelte, o carregamento das páginas caiu de
			8 para 1 segundo, como conto na página de <a href={services.sistemasWeb.path}>desenvolvimento de sistemas web</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre migração de site" />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Criação de um site novo para substituir o antigo' },
			{ href: guides.siteNaoAparece.path, text: 'Diagnóstico de páginas que sumiram do Google' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO antes e depois da migração' },
			{ href: guides.seoAngular.path, text: 'Migração para Angular sem perder a indexação' },
			{ href: services.otimizacaoDeSites.path, text: 'Velocidade do site novo e Core Web Vitals' }
		]}
	/>

	<Contact {whatsapp} title="Vai trocar de site?" intro="Envie o endereço do site atual e conte o que vai mudar (domínio, plataforma ou layout); eu respondo com os riscos e o plano de migração." />
</main>
