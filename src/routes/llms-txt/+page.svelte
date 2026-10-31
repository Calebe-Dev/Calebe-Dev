<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { SITE_URL, guides, rankingFixer, services, type WhatsApp } from '$lib/site';

	const path = guides.llmsTxt.path;
	const title = 'llms.txt: o que é, para que serve e quando vale a pena - Calebe Araujo';
	const description =
		'llms.txt é um arquivo em Markdown que resume o site para modelos de IA. Veja o formato, quem usa, a diferença para o robots.txt e quando vale a pena criar.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero saber se vale a pena ter um llms.txt no meu site. Meu site é: ',
		label: 'Tirar a dúvida pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'llms.txt', path }
	];

	// Os três arquivos da raiz do site que costumam ser confundidos
	const arquivos = [
		['robots.txt', 'Diz quais robôs podem acessar quais páginas', 'Todos os buscadores e a maioria dos robôs de IA', 'Sim, há décadas'],
		['sitemap.xml', 'Lista as páginas que você quer que sejam encontradas', 'Google, Bing e outros buscadores', 'Sim'],
		['llms.txt', 'Resume o site e aponta os links mais úteis para modelos de IA', 'Algumas ferramentas, quando alguém fornece o link', 'Não: é uma proposta, sem adoção confirmada pelos grandes buscadores']
	];

	const faqs: FaqItem[] = [
		{
			question: 'llms.txt melhora o SEO?',
			answer:
				'Não. O Google declarou que a busca não usa o arquivo, então ele não muda posição nem a chance de aparecer nos AI Overviews. Ter o arquivo é barato e não atrapalha, mas o que faz um site ser encontrado e citado continua sendo indexação, conteúdo que responde a pergunta e autoridade.'
		},
		{
			question: 'O llms.txt substitui o robots.txt?',
			answer:
				'Não. O robots.txt controla quais robôs podem acessar o site e é respeitado pelos buscadores e pela maioria dos robôs de IA. O llms.txt só descreve o site; ele não libera nem bloqueia nada.'
		},
		{
			question: 'O ChatGPT lê o llms.txt?',
			answer:
				'A OpenAI não confirmou usar o arquivo na busca do ChatGPT. Para o ChatGPT citar o seu site, o que conta é o robots.txt liberar o OAI-SearchBot, o robô da busca da OpenAI, e as páginas estarem bem indexadas, inclusive no Bing.'
		},
		{
			question: 'Onde fica o arquivo llms.txt?',
			answer:
				'Na raiz do domínio, no endereço /llms.txt, como o robots.txt. Ele é um arquivo de texto simples escrito em Markdown, servido como texto puro.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'llms.txt: o que é, para que serve e quando vale a pena' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-para-ia" />
		<Breadcrumbs {crumbs} />

		<h1>llms.txt: o que é, para que serve e quando vale a pena</h1>

		<p>
			O llms.txt é um arquivo de texto em Markdown, publicado na raiz do site (em <code>/llms.txt</code>), que
			resume o site e lista os links mais importantes para ferramentas de inteligência artificial. Foi
			proposto em setembro de 2024 por Jeremy Howard, da Answer.AI. É barato e inofensivo, mas não é um
			padrão adotado pelos grandes buscadores: o Google declarou que a busca não usa o arquivo.
		</p>
		<p>
			Resumo honesto: vale ter se o seu site é documentação técnica ou se você já fez o básico. Não vale como
			prioridade para quem ainda tem páginas fora do Google. Este site e o da
			<a href={rankingFixer.url} hreflang="en">Ranking Fixer</a> publicam o arquivo, e mostro abaixo como ele é.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="formato-titulo">
		<h2 id="formato-titulo">Como é um arquivo llms.txt</h2>
		<p>
			A proposta define uma estrutura simples: um título com o nome do site, uma citação com o resumo em uma
			ou duas frases, e seções com listas de links, cada um com uma descrição curta. Este é o começo do
			arquivo publicado neste site (versão encurtada):
		</p>
		<pre><code># Calebe Araujo

&gt; Calebe Araujo é tech lead, desenvolvedor full stack e consultor de
&gt; SEO técnico baseado em Sorocaba (SP), Brasil. (…)

## Serviços

- [Consultoria de SEO técnico](https://calebearaujo.com.br/consultoria-seo): diagnóstico,
  plano priorizado e correções implementadas no código.
- [Auditoria de SEO](https://calebearaujo.com.br/auditoria-seo): relatório técnico,
  on-page e de conteúdo, priorizado por impacto.

## Guias

- [Site não aparece no Google](https://calebearaujo.com.br/site-nao-aparece-no-google):
  diagnóstico de indexação em 7 passos.</code></pre>
		<p>
			O arquivo completo está em <a href={`${SITE_URL}/llms.txt`}>calebearaujo.com.br/llms.txt</a>. A proposta
			também prevê um <code>llms-full.txt</code>, com o texto inteiro das páginas num arquivo só, usado
			principalmente em documentação técnica.
		</p>
	</section>

	<section aria-labelledby="diferenca-titulo">
		<h2 id="diferenca-titulo">llms.txt, robots.txt e sitemap.xml: qual a diferença</h2>
		<p>
			Os três ficam na raiz do site e costumam ser confundidos, mas fazem coisas diferentes. Só o llms.txt não
			é um padrão estabelecido.
		</p>
		<table>
			<caption>Os três arquivos da raiz do site</caption>
			<thead>
				<tr>
					<th scope="col">Arquivo</th>
					<th scope="col">O que faz</th>
					<th scope="col">Quem lê</th>
					<th scope="col">É padrão?</th>
				</tr>
			</thead>
			<tbody>
				{#each arquivos as [arquivo, faz, quem, padrao] (arquivo)}
					<tr>
						<th scope="row"><code>{arquivo}</code></th>
						<td>{faz}</td>
						<td>{quem}</td>
						<td>{padrao}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>

	<section aria-labelledby="quem-titulo">
		<h2 id="quem-titulo">Quem usa o llms.txt hoje</h2>
		<p>
			O uso mais comum está em documentação técnica: plataformas de documentação geram o arquivo
			automaticamente, e desenvolvedores colam o link em assistentes de código para que a ferramenta leia a
			documentação inteira de uma vez. Nesse caso o arquivo é útil porque alguém o entrega à IA de propósito.
		</p>
		<p>
			Na busca, o quadro é outro. O Google declarou que não usa o llms.txt, e nenhum grande motor de resposta
			confirmou depender dele para escolher fontes. Os AI Overviews e o <a href={guides.aiMode.path}>Modo IA do
			Google</a> usam o índice da busca comum; o ChatGPT usa os próprios robôs e parceiros de busca, como o
			Bing.
		</p>
	</section>

	<section aria-labelledby="vale-titulo">
		<h2 id="vale-titulo">Quando vale a pena criar</h2>
		<ul>
			<li><strong>Vale:</strong> documentação de software, API ou produto técnico, que desenvolvedores entregam a assistentes de código.</li>
			<li><strong>Vale:</strong> site que já está bem indexado e quer um resumo organizado de si mesmo, por custo quase zero.</li>
			<li><strong>Não é prioridade:</strong> site com páginas importantes fora do Google, lento ou que depende de JavaScript para mostrar o texto. O tempo rende mais resolvendo isso.</li>
			<li><strong>Não faz sentido:</strong> como estratégia para "aparecer na IA". Quem promete resultado com o arquivo está vendendo esperança.</li>
		</ul>
	</section>

	<section aria-labelledby="antes-titulo">
		<h2 id="antes-titulo">O que fazer antes do llms.txt</h2>
		<ol>
			<li><strong>Páginas no índice:</strong> confira no Search Console se as páginas importantes estão indexadas. Se não estiverem, o <a href={guides.siteNaoAparece.path}>diagnóstico de indexação</a> vem primeiro.</li>
			<li><strong>Robôs liberados:</strong> o robots.txt e o firewall do provedor não podem bloquear o Googlebot, o Bingbot e o OAI-SearchBot, o robô da busca do ChatGPT.</li>
			<li><strong>Texto no HTML:</strong> a maioria dos robôs de IA não executa JavaScript. Se o texto só aparece depois que o JavaScript roda, para eles a página está vazia.</li>
			<li><strong>Respostas diretas:</strong> cada seção começa respondendo a pergunta, com informação que só a sua empresa tem.</li>
		</ol>
		<p>O resto está no guia de <a href={guides.seoParaIa.path}>SEO para IA</a>.</p>
	</section>

	<section aria-labelledby="criar-titulo">
		<h2 id="criar-titulo">Como criar o seu llms.txt</h2>
		<ol>
			<li>Escreva um arquivo de texto com <code># Nome do site</code> na primeira linha e uma citação (<code>&gt;</code>) com o resumo do que o site é e para quem.</li>
			<li>Crie seções com <code>##</code> (serviços, guias, sobre) e, em cada uma, uma lista de links com uma descrição curta.</li>
			<li>Coloque só páginas indexáveis e que respondem 200. Link quebrado ou página com noindex no llms.txt é sinal de arquivo abandonado.</li>
			<li>Publique na raiz do domínio, em <code>/llms.txt</code>, como texto puro.</li>
			<li>Atualize sempre que criar ou remover uma página importante. O conteúdo precisa bater com o que está no site.</li>
		</ol>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre llms.txt" />

	<Related
		links={[
			{ href: guides.aiMode.path, text: 'AI Mode e AI Overviews do Google' },
			{ href: guides.seoParaIa.path, text: 'SEO para IA: como ser citado pelo ChatGPT' },
			{ href: guides.siteNaoAparece.path, text: 'Diagnóstico de site que não aparece no Google' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' }
		]}
	/>

	<Contact {whatsapp} title="Na dúvida se o seu site precisa de um llms.txt?" intro="Envie o endereço pelo WhatsApp: eu verifico primeiro o que pesa mais, como indexação e acesso dos robôs, e digo se o arquivo vale a pena no seu caso." />
</main>
