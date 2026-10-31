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

	const path = guides.aiMode.path;
	const title = 'AI Mode e AI Overviews do Google: o que muda para o seu site - Calebe Araujo';
	const description =
		'O que são o Modo IA (AI Mode) e os AI Overviews do Google, como escolhem as fontes, o que muda nos cliques e o que fazer no site para ser citado.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero entender como o meu site aparece no AI Mode e nos AI Overviews. Meu site é: ',
		label: 'Avaliar o meu site pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'AI Mode e AI Overviews', path }
	];

	// Lado a lado: os dois recursos de IA da busca do Google
	const comparacao = [
		['Onde aparece', 'No topo da página de resultados, acima dos links', 'Numa área própria da busca, em formato de conversa'],
		['Quando aparece', 'Só em algumas buscas, quando o Google acha que um resumo ajuda', 'Quando a pessoa escolhe o Modo IA'],
		['Como responde', 'Um resumo curto, com links para as fontes', 'Uma resposta longa, com perguntas de acompanhamento e links'],
		['De onde vêm as fontes', 'Do índice da busca do Google', 'Do índice da busca, consultado em várias buscas ao mesmo tempo']
	];

	const faqs: FaqItem[] = [
		{
			question: 'Qual a diferença entre AI Overview e AI Mode?',
			answer:
				'O AI Overview (Visão geral criada por IA) é o resumo que aparece no topo de algumas buscas, acima dos links. O AI Mode (Modo IA) é uma área separada da busca, em formato de conversa, que responde perguntas longas e aceita perguntas de acompanhamento. Os dois citam páginas como fonte e usam o mesmo índice da busca do Google.'
		},
		{
			question: 'Preciso fazer algo especial para aparecer no AI Mode?',
			answer:
				'Não. O Google diz que não há requisito extra: a página precisa estar indexada e poder ser exibida com trecho (snippet) nos resultados. O que aumenta a chance de ser citado é o mesmo que ajuda no SEO: responder a pergunta de forma direta, trazer informação própria e deixar claro quem é a fonte.'
		},
		{
			question: 'Dá para impedir que o Google use o meu site nos AI Overviews?',
			answer:
				'Dá, com as mesmas regras que controlam o trecho nos resultados: nosnippet, data-nosnippet ou max-snippet limitam o que pode ser mostrado, e noindex tira a página da busca. O Google-Extended, no robots.txt, não tira o site dos AI Overviews; ele controla o uso do conteúdo pelo Gemini. Bloquear o trecho também piora a aparência do site nos resultados comuns, então raramente compensa.'
		},
		{
			question: 'O AI Mode está disponível no Brasil?',
			answer:
				'Sim. Os AI Overviews chegaram ao Brasil em agosto de 2024, e o Modo IA passou a funcionar em português do Brasil em setembro de 2025.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'AI Mode e AI Overviews do Google: o que muda para o seu site' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-para-ia" />
		<Breadcrumbs {crumbs} />

		<h1>AI Mode e AI Overviews do Google: o que muda para o seu site</h1>

		<p>
			Os AI Overviews (Visão geral criada por IA) são os resumos gerados por inteligência artificial que
			aparecem no topo de algumas buscas do Google. O AI Mode (Modo IA) é uma área da busca em formato de
			conversa, que responde perguntas longas. Os dois citam sites como fonte, usam o mesmo índice da busca
			comum e não pedem nada além de SEO bem feito. O que muda é onde o clique acontece.
		</p>
		<p>
			Neste guia: a diferença entre os dois, como o Google escolhe as páginas citadas, o efeito nos cliques
			e o que fazer no site. É uma das frentes da minha <a href={services.consultoriaSeo.path}>consultoria de
			SEO técnico</a>.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="diferenca-titulo">
		<h2 id="diferenca-titulo">Qual a diferença entre AI Overview e AI Mode</h2>
		<p>
			O AI Overview aparece sozinho, só em algumas buscas, quando o Google entende que um resumo ajuda. O AI
			Mode é escolhido pela pessoa e funciona como uma conversa: ela faz uma pergunta longa, recebe uma
			resposta com links e continua perguntando. Os AI Overviews chegaram ao Brasil em agosto de 2024, e o
			Modo IA passou a responder em português do Brasil em setembro de 2025.
		</p>
		<table>
			<caption>AI Overviews e Modo IA do Google, lado a lado</caption>
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">AI Overview</th>
					<th scope="col">AI Mode (Modo IA)</th>
				</tr>
			</thead>
			<tbody>
				{#each comparacao as [linha, overview, modo] (linha)}
					<tr>
						<th scope="row">{linha}</th>
						<td>{overview}</td>
						<td>{modo}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<section aria-labelledby="fontes-titulo">
		<h2 id="fontes-titulo">Como o Google escolhe as páginas citadas</h2>
		<p>
			A resposta é montada a partir do índice da busca, o mesmo que gera os resultados comuns. No AI Mode, o
			Google descreve uma técnica chamada <em>query fan-out</em>: a pergunta é dividida em várias buscas
			menores, uma para cada parte do assunto, e as respostas são reunidas num texto só. Na prática, uma
			pergunta como "qual sistema de gestão serve para uma clínica pequena" vira buscas sobre preço,
			funções, integração e suporte.
		</p>
		<p>
			Por isso quem cobre o assunto por inteiro, com uma página para cada dúvida real, concorre à citação
			em cada uma dessas buscas menores. E como a IA usa trechos e não páginas inteiras, cada seção precisa
			se sustentar sozinha: a pergunta no título e a resposta direta logo no começo do texto.
		</p>
	</section>

	<section aria-labelledby="cliques-titulo">
		<h2 id="cliques-titulo">O que muda nos cliques</h2>
		<p>
			Quando a resposta aparece na própria página do Google, menos gente clica. Um estudo do Pew Research
			Center publicado em julho de 2025 mediu isso: quem viu um resumo de IA clicou num resultado comum em
			8% das visitas, contra 15% de quem não viu. O efeito é maior nas perguntas informativas, do tipo "o que
			é" e "como funciona", e menor quando a pessoa já está decidindo o que contratar ou comprar.
		</p>
		<p>
			Duas consequências para o seu site. Primeiro, ser citado como fonte passa a valer mais do que ficar em
			quinto lugar logo abaixo do resumo. Segundo, páginas de decisão, com preço, prazo, condições e casos
			reais, ganham peso: são as que a pessoa ainda precisa abrir depois de ler o resumo.
		</p>
	</section>

	<section aria-labelledby="medir-titulo">
		<h2 id="medir-titulo">Como ver no Search Console</h2>
		<p>
			Impressões e cliques vindos dos AI Overviews e do Modo IA entram no relatório de Desempenho do Search
			Console, no tipo de pesquisa "Web", somados aos da busca comum. O Google começou a liberar relatórios
			específicos de IA generativa aos poucos; se a sua conta ainda não tem, os números estão misturados.
		</p>
		<p>
			Um sinal típico de resumo de IA é este: impressões estáveis e taxa de cliques caindo nas buscas
			informativas, sem perda de posição. Antes de concluir que o site piorou, compare a mesma busca com e
			sem resumo de IA.
		</p>
	</section>

	<section aria-labelledby="fazer-titulo">
		<h2 id="fazer-titulo">O que fazer no site</h2>
		<ol>
			<li><strong>Indexação em dia:</strong> página fora do índice não é citada. Se houver páginas importantes fora do Google, comece pelo <a href={guides.siteNaoAparece.path}>diagnóstico de indexação</a>.</li>
			<li><strong>Trecho liberado:</strong> confira se o site não usa <code>nosnippet</code> ou um <code>max-snippet</code> muito baixo. O Google diz que a página precisa poder ser exibida com trecho para aparecer nos recursos de IA.</li>
			<li><strong>Resposta primeiro:</strong> cada seção começa respondendo a pergunta em duas ou três frases, com o sujeito explícito, e aprofunda depois.</li>
			<li><strong>Informação que só você tem:</strong> preço praticado, prazo medido, caso de cliente, foto do próprio trabalho. Conteúdo que qualquer IA escreveria não precisa ser citado.</li>
			<li><strong>Cobertura do assunto:</strong> uma página para cada dúvida real do seu cliente, ligadas entre si, em vez de um texto genérico que tenta responder tudo.</li>
			<li><strong>Autoria clara:</strong> quem escreve, com que experiência, e os mesmos perfis ligados em todo lugar, para o Google saber quem é a fonte.</li>
		</ol>
		<p>
			Os outros motores de resposta, como ChatGPT e Perplexity, seguem a mesma lógica com índices próprios;
			o que muda para eles está no guia de <a href={guides.seoParaIa.path}>SEO para IA</a>.
		</p>
	</section>

	<section aria-labelledby="nao-titulo">
		<h2 id="nao-titulo">O que não adianta</h2>
		<ul>
			<li><strong>"Otimização para IA" vendida à parte do SEO:</strong> o próprio Google diz que otimizar para os recursos de IA da busca continua sendo SEO. Não existe marcação nem arquivo que coloque o site no AI Mode.</li>
			<li><strong>Dados estruturados como atalho:</strong> ajudam o Google a entender a página, mas não são requisito para os recursos de IA.</li>
			<li><strong>Arquivo llms.txt:</strong> a busca do Google não usa esse arquivo. Vale saber <a href={guides.llmsTxt.path}>o que ele é e quando vale a pena ter</a>.</li>
			<li><strong>Páginas em massa:</strong> texto genérico produzido em escala é o que o Google trata como spam e o que a IA não tem motivo para citar.</li>
		</ul>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre AI Mode e AI Overviews" />

	<Related
		links={[
			{ href: guides.seoParaIa.path, text: 'SEO para IA: ChatGPT, Gemini e Perplexity' },
			{ href: guides.llmsTxt.path, text: 'llms.txt: o que é e quando vale a pena' },
			{ href: guides.siteNaoAparece.path, text: 'Diagnóstico de site que não aparece no Google' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' }
		]}
	/>

	<Contact {whatsapp} title="Quer saber como o seu site aparece nas respostas do Google?" intro="Envie o endereço do site pelo WhatsApp e eu verifico se as páginas estão indexadas, elegíveis a trecho e prontas para serem citadas." />
</main>
