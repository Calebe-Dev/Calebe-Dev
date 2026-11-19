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
	import { network, portfolioPage } from '$lib/portfolio';

	const path = guides.coreWebVitals.path;
	const title = 'Core Web Vitals: o que são LCP, INP e CLS e como melhorar - Calebe Araujo';
	const description =
		'Core Web Vitals são as métricas do Google para carregamento (LCP), interação (INP) e estabilidade (CLS). Veja os limites, como medir e como corrigir cada uma.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero melhorar os Core Web Vitals do meu site. O endereço é: ',
		label: 'Pedir análise dos Core Web Vitals pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Otimização de sites', path: services.otimizacaoDeSites.path },
		{ name: 'Core Web Vitals', path }
	];

	const decimal = (n: number) => n.toLocaleString('pt-BR');

	const metricas = [
		['LCP (Largest Contentful Paint)', 'Carregamento: quando o maior elemento visível (foto, banner ou bloco de texto) termina de aparecer', 'Até 2,5 s', '2,5 s a 4 s', 'Acima de 4 s'],
		['INP (Interaction to Next Paint)', 'Interação: quanto a página demora para responder a cliques, toques e teclas', 'Até 200 ms', '200 ms a 500 ms', 'Acima de 500 ms'],
		['CLS (Cumulative Layout Shift)', 'Estabilidade: quanto o conteúdo pula de lugar enquanto a página carrega', 'Até 0,1', '0,1 a 0,25', 'Acima de 0,25']
	];

	const faqs: FaqItem[] = [
		{
			question: 'Core Web Vitals influenciam o ranqueamento no Google?',
			answer:
				'Sim, como parte dos sinais de experiência de página, mas com peso menor que a relevância do conteúdo. Na prática, funcionam como desempate entre páginas parecidas. O efeito maior é na conversão: visitantes desistem de páginas lentas ou que pulam durante o carregamento.'
		},
		{
			question: 'O que aconteceu com o FID?',
			answer:
				'O FID (First Input Delay) foi substituído pelo INP como Core Web Vital em março de 2024. O FID media só o atraso da primeira interação; o INP considera as interações da visita inteira, o que mostra melhor se a página trava.'
		},
		{
			question: 'Por que o PageSpeed mostra nota alta e o Search Console mostra problema?',
			answer:
				'A nota do PageSpeed vem de um teste de laboratório, feito uma vez, em condições simuladas. O Search Console usa dados de campo, de usuários reais do Chrome nos últimos 28 dias, com celulares e redes variados. Para o Google, valem os dados de campo.'
		},
		{
			question: 'Quanto tempo leva para o Search Console mostrar a melhora?',
			answer:
				'Os dados de campo cobrem uma janela de 28 dias, então uma correção leva cerca de quatro semanas para aparecer por completo. No relatório Core Web Vitals do Search Console, o botão "Validar correção" acompanha esse período.'
		},
		{
			question: 'Meu site tem pouco tráfego e não aparece no relatório. E agora?',
			answer:
				'Sites com poucas visitas não têm dados de campo suficientes no relatório do Chrome (CrUX). Nesse caso, use o teste de laboratório do PageSpeed Insights e do Lighthouse como referência, sabendo que ele é uma simulação.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'Core Web Vitals: o que são LCP, INP e CLS e como melhorar', type: 'TechArticle' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="otimizacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Core Web Vitals: o que são LCP, INP e CLS e como melhorar</h1>

		<p>
			Core Web Vitals são as três métricas que o Google usa para medir a experiência real de uma página:
			LCP mede o carregamento, INP mede a resposta a cliques e toques e CLS mede a estabilidade do
			layout. Uma página passa quando as três ficam dentro do limite bom em pelo menos 75% das visitas,
			medidas em usuários reais do Chrome.
		</p>
		<p>
			Este guia explica cada métrica, onde consultar os números do seu site e o que corrigir quando uma
			delas está ruim. Para a contratação do trabalho, veja a
			<a href={services.otimizacaoDeSites.path}>otimização de sites lentos</a>.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="metricas-titulo">
		<h2 id="metricas-titulo">As três métricas e os limites do Google</h2>
		<table>
			<caption>Core Web Vitals: o que cada métrica mede e as faixas do Google (75% das visitas)</caption>
			<thead>
				<tr>
					<th scope="col">Métrica</th>
					<th scope="col">O que mede</th>
					<th scope="col">Bom</th>
					<th scope="col">Precisa melhorar</th>
					<th scope="col">Ruim</th>
				</tr>
			</thead>
			<tbody>
				{#each metricas as [nome, mede, bom, medio, ruim] (nome)}
					<tr>
						<th scope="row">{nome}</th>
						<td>{mede}</td>
						<td>{bom}</td>
						<td>{medio}</td>
						<td>{ruim}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<section aria-labelledby="medir-titulo">
		<h2 id="medir-titulo">Como medir os Core Web Vitals do seu site</h2>
		<ul>
			<li><strong>Search Console, relatório Core Web Vitals:</strong> agrupa as páginas do site em boas, que precisam de melhoria e ruins, separadas por celular e computador. É o melhor ponto de partida.</li>
			<li><strong>PageSpeed Insights:</strong> mostra, para uma URL, os dados de campo (usuários reais, 28 dias) no topo e o diagnóstico de laboratório (Lighthouse) embaixo, com o que atrasa a página.</li>
			<li><strong>Chrome DevTools, painel Performance:</strong> mede LCP, INP e CLS ao vivo enquanto você navega, útil para achar a interação que trava.</li>
		</ul>
		<p>
			Dados de campo e de laboratório medem coisas diferentes: o laboratório simula um celular numa rede
			lenta; o campo reflete os aparelhos e as redes de quem visita o site. Quando divergem, quem decide é
			o campo.
		</p>
	</section>

	<section aria-labelledby="lcp-titulo">
		<h2 id="lcp-titulo">Como melhorar o LCP</h2>
		<p>O LCP costuma ser a foto principal ou o banner do topo. O que mais atrasa:</p>
		<ul>
			<li><strong>Imagem pesada:</strong> converta para AVIF ou WebP, sirva tamanhos diferentes para celular e computador (<code>srcset</code>) e defina largura e altura.</li>
			<li><strong>Imagem descoberta tarde:</strong> a imagem principal não pode ter <code>loading="lazy"</code>; use <code>fetchpriority="high"</code> nela.</li>
			<li><strong>Servidor lento:</strong> tempo alto até o primeiro byte (TTFB) pede cache de página e CDN.</li>
			<li><strong>CSS e fontes bloqueando:</strong> CSS enorme no topo da página e fontes externas atrasam o primeiro desenho.</li>
			<li><strong>Conteúdo montado por JavaScript:</strong> se o texto só aparece depois que o JavaScript roda, o LCP espera o JavaScript inteiro.</li>
		</ul>
	</section>

	<section aria-labelledby="inp-titulo">
		<h2 id="inp-titulo">Como melhorar o INP</h2>
		<p>O INP piora quando o navegador está ocupado executando JavaScript e não consegue responder ao toque:</p>
		<ul>
			<li><strong>Menos JavaScript:</strong> sliders, page builders e plugins que carregam código em todas as páginas são os principais culpados.</li>
			<li><strong>Scripts de terceiros:</strong> chats, pixels e widgets competem pelo processador; carregue-os depois do conteúdo ou só nas páginas que precisam.</li>
			<li><strong>Tarefas longas:</strong> divida o trabalho pesado em partes menores, para o navegador conseguir responder entre elas.</li>
			<li><strong>Resposta visual imediata:</strong> ao clicar, mostre o retorno (botão pressionado, carregando) antes de processar o resto.</li>
		</ul>
	</section>

	<section aria-labelledby="cls-titulo">
		<h2 id="cls-titulo">Como melhorar o CLS</h2>
		<ul>
			<li><strong>Dimensões em imagens e vídeos:</strong> <code>width</code> e <code>height</code> reservam o espaço antes do arquivo chegar.</li>
			<li><strong>Espaço reservado para anúncios, banners de cookies e embeds:</strong> elementos que aparecem depois empurram o conteúdo.</li>
			<li><strong>Fontes:</strong> fontes que trocam de tamanho ao carregar movem o texto; prefira fontes do sistema ou ajuste a fonte reserva.</li>
			<li><strong>Nada inserido acima do conteúdo:</strong> avisos e barras que surgem no topo depois do carregamento são a causa mais comum.</li>
		</ul>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="dados-titulo">
		<h2 id="dados-titulo">Números reais: a rede de sites que mantenho</h2>
		<p>
			Mantenho {network.sites} sites em produção, migrados de WordPress e PHP para páginas estáticas em
			SvelteKit e Cloudflare. Na medição de {network.measuredOn.split('-').reverse().join('/')}, no
			Lighthouse mobile, a nota mediana de performance foi {decimal(network.lighthouseMedian)} e o LCP
			mediano, {decimal(network.lcpMedian)} s. Em um dos projetos, o carregamento caiu de 8 s para 1 s. As
			medições de cada site estão no <a href={portfolioPage.path}>portfólio</a>.
		</p>
		<p>
			A lição desses projetos: quando o site depende de um tema pesado e de dezenas de plugins, ajustes
			pontuais melhoram pouco. O ganho grande vem de mudar a forma como as páginas são entregues, com HTML
			pronto no servidor e pouco ou nenhum JavaScript.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre Core Web Vitals" />

	<Related
		links={[
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites lentos' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO técnica' },
			{ href: guides.seoAngular.path, text: 'SEO e performance em sites Angular' },
			{ href: guides.siteNaoAparece.path, text: 'Site não aparece no Google: diagnóstico' }
		]}
	/>

	<Contact {whatsapp} title="Quer saber o que deixa o seu site lento?" intro="Envie o endereço do site; eu olho os dados de campo e digo qual métrica corrigir primeiro." />
</main>
