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

	const path = guides.siteNaoAparece.path;
	const title = 'Site não aparece no Google: diagnóstico passo a passo - Calebe Araujo';
	const description =
		'Seu site não aparece no Google? Veja como diagnosticar indexação, noindex, robots.txt, canonical e JavaScript, passo a passo, no Search Console.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Meu site não aparece no Google. O endereço é: ',
		label: 'Pedir ajuda com o meu site pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Site não aparece no Google', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Como colocar meu site no Google e pedir a indexação?',
			answer:
				'Cadastre o site no Google Search Console, envie o sitemap.xml e use a Inspeção de URL para solicitar a indexação das páginas principais. Isso acelera a descoberta, mas a indexação continua dependendo de a página estar liberada para robôs e de o Google considerar o conteúdo útil.'
		},
		{
			question: 'Pagar anúncios no Google ajuda o site a aparecer na busca orgânica?',
			answer:
				'Não. Anúncios do Google Ads aparecem na área paga e não influenciam a posição nem a indexação nos resultados orgânicos. Para aparecer de forma orgânica, o site precisa estar indexado e ser relevante para a busca.'
		},
		{
			question: 'O que significa "Detectada, mas não indexada no momento"?',
			answer:
				'É um status do relatório de indexação do Search Console: o Google sabe que a URL existe, mas ainda não a rastreou. Em sites novos costuma se resolver com o tempo; quando persiste em muitas páginas, pode indicar páginas demais de baixo valor ou um servidor lento para o robô.'
		}
	];

	// Diagnóstico em 7 passos: a mesma lista alimenta o HTML e o HowTo do schema
	const passosDiagnostico = [
		{ nome: 'Search Console:', html: 'verifique a propriedade do domínio e envie o sitemap.xml. Sem isso, você não tem os dados do próprio Google.' },
		{ nome: 'Inspeção de URL:', html: 'teste a página inicial e uma página de serviço. O resultado diz se a URL está no Google e, se não estiver, o motivo.' },
		{ nome: 'noindex:', html: 'procure <code>noindex</code> no código-fonte da página e no cabeçalho HTTP <code>X-Robots-Tag</code>. É comum o tema ou um plugin deixar essa diretiva ligada depois do lançamento.' },
		{ nome: 'robots.txt:', html: 'abra <code>seudominio.com.br/robots.txt</code> e veja se há <code>Disallow: /</code> ou regras bloqueando as páginas importantes.' },
		{ nome: 'Canonical:', html: 'confira se a tag canonical aponta para a própria página. Um canonical apontando para outra URL faz o Google ignorar a página atual.' },
		{ nome: 'JavaScript:', html: 'veja o código-fonte (não o inspecionar do navegador). Se o texto principal não estiver lá, o conteúdo depende de JavaScript, e nem todo robô o processa.' },
		{ nome: 'Qualidade e duplicação:', html: 'no relatório de indexação, os status "Rastreada, mas não indexada" e "Detectada, mas não indexada" indicam páginas que o Google não considerou úteis ou prioritárias.' }
	];
	const semTags = (html: string) => html.replace(/<[^>]+>/g, '');

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		howTo: {
			name: 'Diagnóstico em 7 passos',
			steps: passosDiagnostico.map((p) => ({ name: p.nome.replace(/:$/, ''), text: `${p.nome} ${semTags(p.html)}` }))
		},
		article: { headline: 'Site não aparece no Google: diagnóstico passo a passo' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="site-nao-aparece" />
		<Breadcrumbs {crumbs} />

		<h1>Site não aparece no Google: diagnóstico passo a passo</h1>

		<p>
			Quando um site não aparece no Google, nem na pesquisa pelo nome da empresa, o motivo é um destes:
			ainda não foi descoberto, está bloqueado para o robô do Google (o Googlebot), o Google escolheu
			outra URL como principal, o conteúdo depende de
			JavaScript que não é processado ou a página está indexada, mas não é relevante o bastante para a
			busca feita. O diagnóstico abaixo separa cada caso, na ordem em que vale a pena verificar. Se o
			seu site sumiu do Google de repente, depois de já aparecer, veja também as ações manuais na
			tabela de sintomas.
		</p>
		<p>
			Se o problema é que a sua empresa não aparece no Google Maps, o caminho é outro: o Perfil da
			Empresa no Google, explicado no guia
			<a href={guides.comoAparecer.path}>como colocar minha empresa no Google</a>.
		</p>
		<p>
			Este guia faz parte do meu trabalho de <a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a>:
			é o mesmo roteiro que uso no início de uma auditoria.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="teste-titulo">
		<h2 id="teste-titulo">Primeiro teste: o site está no índice do Google?</h2>
		<p>
			Pesquise no Google por <code>site:seudominio.com.br</code>. Se nenhum resultado aparecer, o
			problema é de indexação; se as páginas aparecem, mas não nas buscas que importam, o problema é
			de relevância. A consulta <code>site:</code> é só uma aproximação: a resposta definitiva vem da
			Inspeção de URL do Google Search Console, que mostra se cada página está no índice e por quê.
		</p>
	</section>

	<section aria-labelledby="passos-titulo">
		<h2 id="passos-titulo">Diagnóstico em 7 passos</h2>
		<ol>
			{#each passosDiagnostico as passo (passo.nome)}
				<li><strong>{passo.nome}</strong> {@html passo.html}</li>
			{/each}
		</ol>
	</section>

	<section aria-labelledby="tabela-titulo">
		<h2 id="tabela-titulo">Sintomas, causas e correções</h2>
		<table>
			<caption>Problemas comuns de indexação e como corrigir</caption>
			<thead>
				<tr>
					<th scope="col">Sintoma</th>
					<th scope="col">Onde ver</th>
					<th scope="col">Causa provável</th>
					<th scope="col">Correção</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Nenhuma página no Google</td>
					<td>Inspeção de URL</td>
					<td>noindex no site todo ou robots.txt bloqueando</td>
					<td>Remover a diretiva e pedir nova indexação</td>
				</tr>
				<tr>
					<td>Página aparece com outro endereço</td>
					<td>Inspeção de URL: "canônica selecionada pelo Google"</td>
					<td>Conteúdo duplicado ou canonical errado</td>
					<td>Unificar as URLs e ajustar o canonical</td>
				</tr>
				<tr>
					<td>Página indexada sem texto</td>
					<td>Inspeção de URL: "ver página rastreada"</td>
					<td>Conteúdo carregado só por JavaScript</td>
					<td>Renderização no servidor ou pré-renderização</td>
				</tr>
				<tr>
					<td>Site sumiu do Google de repente</td>
					<td>Search Console: "Ações manuais" e "Problemas de segurança"</td>
					<td>Penalidade por spam ou site invadido</td>
					<td>Corrigir a causa e pedir reconsideração</td>
				</tr>
				<tr>
					<td>Site novo sem nenhuma visita</td>
					<td>Relatório de desempenho</td>
					<td>Ainda em descoberta ou sem páginas para as buscas certas</td>
					<td>Sitemap enviado e uma página por serviço</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="wordpress-titulo">
		<h2 id="wordpress-titulo">Site WordPress que não aparece no Google</h2>
		<p>
			No WordPress, a causa mais comum é a opção "Evite que os mecanismos de busca indexem este site",
			em Configurações › Leitura, que fica marcada durante o desenvolvimento e é esquecida no
			lançamento. Também vale verificar plugins de modo de manutenção e as configurações de
			indexação do plugin de SEO, que podem aplicar noindex a tipos inteiros de página.
		</p>
	</section>

	<section aria-labelledby="plataformas-titulo">
		<h2 id="plataformas-titulo">Site na Hostinger, Wix ou Canva que não aparece no Google</h2>
		<p>
			Em construtores de site e hospedagens, o roteiro de diagnóstico é o mesmo, mas alguns motivos se
			repetem em cada plataforma:
		</p>
		<table>
			<caption>O que verificar em cada plataforma quando o site não aparece no Google</caption>
			<thead>
				<tr>
					<th scope="col">Plataforma</th>
					<th scope="col">O que verificar</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Hostinger, HostGator e outras hospedagens com WordPress</th>
					<td>Se o site foi publicado no domínio próprio, e não só no endereço temporário da hospedagem, e a opção de visibilidade em Configurações › Leitura.</td>
				</tr>
				<tr>
					<th scope="row">Wix</th>
					<td>Se a permissão para os mecanismos de busca indexarem o site está ativa nas configurações de SEO e se o site usa um domínio próprio.</td>
				</tr>
				<tr>
					<th scope="row">Canva</th>
					<td>Se a página tem texto de verdade, e não só imagens com texto, e se está ligada a um domínio próprio. Sites de uma página só costumam aparecer apenas para o nome da empresa.</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="novo-titulo">
		<h2 id="novo-titulo">Site novo: quanto tempo leva para aparecer no Google?</h2>
		<p>
			Um site novo pode levar de alguns dias a algumas semanas para ser rastreado e indexado, e o Google
			não garante prazo. Enviar o sitemap e ter links de outros sites apontando para o seu ajudam na
			descoberta. Aparecer bem nas buscas é um passo seguinte, que depende da concorrência e de cada
			página responder bem a uma busca específica.
		</p>
	</section>

	<section aria-labelledby="indexado-titulo">
		<h2 id="indexado-titulo">Está indexado, mas não aparece na busca</h2>
		<p>
			Se a página está no índice e mesmo assim não aparece, o problema deixou de ser técnico: falta
			relevância para aquela busca. Os caminhos são criar uma página específica para o serviço
			pesquisado, ligá-la com links internos a partir das páginas principais, melhorar o conteúdo com informações que a concorrência não tem e conquistar
			menções de outros sites. É aqui que uma <a href={services.auditoriaSeo.path}>auditoria de SEO</a>
			ajuda a decidir o que fazer primeiro.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre indexação no Google" />

	<Related
		links={[
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO técnica e completa' },
			{ href: guides.seoAngular.path, text: 'Por que sites em Angular não indexam e como resolver' },
			{ href: guides.seoParaIa.path, text: 'Como aparecer também nas respostas de IA' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites lentos' }
		]}
	/>

	<Contact {whatsapp} title="Não encontrou a causa?" intro="Envie o endereço do site pelo WhatsApp e eu verifico o que está impedindo a indexação." />
</main>
