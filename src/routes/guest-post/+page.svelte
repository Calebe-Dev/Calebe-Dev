<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { copywriterPage, services, type WhatsApp } from '$lib/site';

	const path = services.guestPost.path;
	const title = 'Guest post para SEO: artigos convidados e backlinks - Calebe Araujo';
	const description =
		'Guest post para SEO: artigos convidados em sites do seu nicho, com conteúdo útil e backlinks dentro das regras do Google. Pauta, redação e publicação.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de guest post e quero conversar sobre artigos convidados para o meu site.',
		label: 'Falar sobre guest posts pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Guest post', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Guest post ainda funciona para SEO?',
			answer:
				'Funciona quando o artigo é publicado em um site do mesmo assunto, com audiência real, e seria útil mesmo sem o link. O Google trata como spam as campanhas de guest post feitas em grande escala só para conseguir links, principalmente com textos âncora cheios de palavras-chave; nesses casos o link é ignorado e o site pode receber uma ação manual.'
		},
		{
			question: 'Quanto custa um guest post?',
			answer:
				'Depende do número de artigos, da pesquisa de sites e da redação. Quando um site cobra para publicar, o link passa a ser patrocinado e, pelas regras do Google, precisa ser marcado como rel="sponsored". Por isso a prioridade é conquistar publicações editoriais, aceitas pela qualidade do conteúdo.'
		},
		{
			question: 'Qual a diferença entre guest post e publieditorial?',
			answer:
				'No guest post, o artigo é aceito pelo valor do conteúdo e o link é editorial. No publieditorial, a publicação é paga e o link deve ser marcado como patrocinado. Os dois podem trazer visibilidade e visitas, mas para o SEO o que conta é o link editorial.'
		},
		{
			question: 'Quantos guest posts preciso por mês?',
			answer:
				'Não existe um número ideal. Poucos artigos em sites realmente relevantes valem mais que dezenas em sites genéricos. Um ritmo constante e natural, acompanhado no Search Console, funciona melhor do que picos de publicações.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Guest post para SEO',
			serviceType: 'Guest post e link building',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-b2b" />
		<Breadcrumbs {crumbs} />

		<h1>Guest post para SEO: artigos convidados e backlinks</h1>

		<p>
			Guest post é um artigo convidado: um conteúdo escrito para ser publicado no site de outra empresa,
			blog ou portal do seu setor, com um link para o seu site. Quando o site é do mesmo assunto e o
			texto é útil, o guest post leva visitas qualificadas, reforça a autoridade da marca e gera um
			backlink que ajuda no SEO.
		</p>
		<p>
			Cuido do processo inteiro: escolha dos sites, pauta, redação do artigo e acompanhamento do link. O
			trabalho faz parte da minha <a href={services.consultoriaSeo.path}>consultoria de SEO</a>, e os
			textos são escritos por mim, com a mesma técnica de SEO que uso nos sites que desenvolvo.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="como-titulo">
		<h2 id="como-titulo">Como funciona o guest post</h2>
		<ol>
			<li><strong>Seleção de sites:</strong> blogs e portais do mesmo nicho, com audiência e conteúdo próprios, e não só uma métrica de autoridade alta.</li>
			<li><strong>Pauta:</strong> um tema que o público do site parceiro quer ler e que tenha relação com o seu serviço.</li>
			<li><strong>Redação:</strong> artigo original, com resposta direta, boa estrutura e dados, escrito para o leitor do site que publica.</li>
			<li><strong>Link:</strong> um link contextual para a página certa do seu site, com texto âncora natural, sem repetir a palavra-chave exata.</li>
			<li><strong>Acompanhamento:</strong> confirmação de que o artigo foi indexado e do efeito nos links e nas consultas no Search Console.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="regras-titulo">
		<h2 id="regras-titulo">Guest post dentro das regras do Google</h2>
		<p>
			As políticas de spam do Google citam campanhas de guest post em grande escala, com links de texto
			âncora otimizado, como esquema de links. A regra prática é simples: o artigo precisa fazer sentido
			para o site que publica mesmo sem o link. Quando a publicação é paga, o link deve ser marcado com
			<code>rel="sponsored"</code>. Seguindo isso, o guest post é uma forma segura de ganhar autoridade e
			visitas.
		</p>
	</section>

	<section aria-labelledby="formatos-titulo">
		<h2 id="formatos-titulo">Guest post, publieditorial e link building</h2>
		<table>
			<caption>Diferenças entre os formatos de publicação com link</caption>
			<thead>
				<tr>
					<th scope="col">Formato</th>
					<th scope="col">O que é</th>
					<th scope="col">Como fica o link</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Guest post</th>
					<td>Artigo convidado, aceito pelo valor do conteúdo</td>
					<td>Editorial: conta para o SEO</td>
				</tr>
				<tr>
					<th scope="row">Publieditorial</th>
					<td>Publicação paga em portal ou blog</td>
					<td>Patrocinado, marcado como <code>rel="sponsored"</code></td>
				</tr>
				<tr>
					<th scope="row">Link building</th>
					<td>Conjunto de ações para conquistar links: guest posts, menções, parcerias e conteúdo que outros sites citam</td>
					<td>Varia conforme a ação</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="quando-titulo">
		<h2 id="quando-titulo">Quando vale investir em guest posts</h2>
		<ul>
			<li>O site já tem a base técnica em ordem e boas páginas para receber os links.</li>
			<li>A empresa atua num nicho com blogs, portais e associações que publicam conteúdo.</li>
			<li>As páginas certas já estão indexadas, mas perdem posições para concorrentes com mais autoridade.</li>
			<li>O objetivo inclui visibilidade e visitas, e não só links.</li>
		</ul>
		<p>
			Se a base técnica ainda tem problemas, a <a href={services.auditoriaSeo.path}>auditoria de SEO</a>
			vem antes: links levam força para as páginas, mas não corrigem um site que o Google não consegue ler.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre guest post" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria antes de investir em links' },
			{ href: services.seoB2b.path, text: 'Autoridade e leads em SEO B2B' },
			{ href: copywriterPage.path, text: 'Redação SEO para sites e landing pages' }
		]}
	/>

	<Contact {whatsapp} title="Converse sobre guest posts para o seu site" intro="Envie o endereço do site e conte o seu nicho; eu respondo com os tipos de site que fazem sentido para os seus links." />
</main>
