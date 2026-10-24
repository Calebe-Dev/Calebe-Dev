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

	const path = guides.seoAngular.path;
	const title = 'SEO para sites Angular: SSR, pré-renderização e indexação - Calebe Araujo';
	const description =
		'SEO para sites Angular: por que aplicações que rodam só no navegador indexam mal e como resolver com SSR, pré-renderização e meta tags por rota.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Tenho um site em Angular com problemas de SEO. O endereço é: ',
		label: 'Falar sobre o meu site Angular pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'SEO para sites Angular', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Angular é ruim para SEO?',
			answer:
				'Não. Uma aplicação Angular que só renderiza no navegador tem problemas de indexação, mas o próprio Angular oferece renderização no servidor e pré-renderização. Com uma delas configurada, as páginas chegam completas no HTML e o SEO fica no mesmo nível de qualquer site estático.'
		},
		{
			question: 'Preciso reescrever o site para ter renderização no servidor?',
			answer:
				'Normalmente não. Nas versões atuais, o comando ng add @angular/ssr adiciona a renderização no servidor a um projeto existente. O trabalho costuma estar em ajustar o código que usa APIs exclusivas do navegador, como window e localStorage, para que ele também rode no servidor; o erro mais comum nessa etapa é o "window is not defined".'
		},
		{
			question: 'Angular com SSR ou Next.js: qual é melhor para SEO?',
			answer:
				'Para o SEO, os dois chegam ao mesmo resultado quando a página é entregue pronta no HTML. A escolha deve seguir o time e o projeto: se a aplicação já é Angular, ativar a renderização no servidor costuma custar bem menos que reescrever tudo em Next.js, que é baseado em React.'
		},
		{
			question: 'O Google não executa JavaScript?',
			answer:
				'Executa, com uma versão atualizada do Chrome, mas a renderização entra numa fila e pode atrasar a indexação. Outros robôs, como os de muitas ferramentas de IA, geralmente não executam JavaScript e veem apenas o HTML inicial, que numa aplicação sem SSR está praticamente vazio.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'SEO para sites Angular: SSR, pré-renderização e indexação' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="seo-angular" />
		<Breadcrumbs {crumbs} />

		<h1>SEO para sites Angular: SSR, pré-renderização e indexação</h1>

		<p>
			Por padrão, uma aplicação Angular é montada no navegador: o HTML que o servidor entrega tem pouco
			mais que a tag <code>&lt;app-root&gt;</code>, e o conteúdo só aparece depois que o JavaScript roda.
			Para o SEO, isso significa indexação mais lenta no Google e páginas praticamente vazias para os
			robôs que não executam JavaScript. A solução é entregar o HTML pronto, com renderização no
			servidor (SSR) ou pré-renderização.
		</p>
		<p>
			Trabalho com Angular em produção: no Grupo OC, migrei sites legados para Angular e Svelte, e o
			carregamento das páginas caiu de 8 para 1 segundo. Este guia complementa a minha
			<a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a>.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="problemas-titulo">
		<h2 id="problemas-titulo">Por que um site Angular não aparece no Google</h2>
		<ul>
			<li><strong>HTML vazio:</strong> sem SSR, o código-fonte da página não tem o texto, só os scripts.</li>
			<li><strong>Title e description iguais em todas as rotas:</strong> o index.html define um título único, e as rotas não o alteram.</li>
			<li><strong>URLs com #:</strong> rotas no formato <code>/#/servicos</code> não são tratadas como páginas separadas.</li>
			<li><strong>Navegação sem link real:</strong> menus feitos com eventos de clique, em vez de <code>&lt;a href&gt;</code> com routerLink, não são seguidos pelos robôs.</li>
			<li><strong>Bundle pesado:</strong> muito JavaScript na carga inicial prejudica os Core Web Vitals.</li>
		</ul>
	</section>

	<section aria-labelledby="modos-titulo">
		<h2 id="modos-titulo">SSR, pré-renderização ou renderização no navegador: qual usar</h2>
		<p>
			Na comparação Angular SSR vs SPA, a SPA tradicional (renderização no navegador, ou CSR) entrega o
			HTML vazio; com SSR, o servidor entrega a página pronta e o Angular assume a interatividade
			depois, pela hidratação. As versões recentes do Angular permitem combinar os modos por rota. A
			escolha depende do tipo de página:
		</p>
		<table>
			<caption>Modo de renderização recomendado por tipo de página Angular</caption>
			<thead>
				<tr>
					<th scope="col">Tipo de página</th>
					<th scope="col">Modo</th>
					<th scope="col">Por quê</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Institucional, serviços, landing pages</td>
					<td>Pré-renderização (SSG)</td>
					<td>HTML gerado no build, servido como arquivo estático e mais rápido</td>
				</tr>
				<tr>
					<td>Catálogo, busca, conteúdo que muda sempre</td>
					<td>Renderização no servidor (SSR)</td>
					<td>HTML atualizado a cada acesso, sem depender do build</td>
				</tr>
				<tr>
					<td>Área logada, painéis</td>
					<td>Renderização no navegador (CSR)</td>
					<td>Não precisa ser indexada</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="checklist-titulo">
		<h2 id="checklist-titulo">Checklist de SEO para Angular</h2>
		<ol>
			<li>Renderização no servidor ou pré-renderização com <code>@angular/ssr</code>, o antigo Angular Universal, incorporado ao Angular a partir da versão 17.</li>
			<li>Meta tags por rota: title e meta description, com os serviços <code>Title</code> e <code>Meta</code> ou a propriedade <code>title</code> das rotas.</li>
			<li>Canonical por rota, gerado no servidor.</li>
			<li>Dados estruturados (JSON-LD) incluídos no HTML renderizado no servidor.</li>
			<li>Links com <code>&lt;a&gt;</code> e routerLink, e URLs sem <code>#</code>.</li>
			<li>Sitemap.xml gerado a partir das rotas públicas.</li>
			<li>Hidratação ativa, para a página não "piscar" ao carregar, e lazy loading das rotas para reduzir o JavaScript inicial.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="verificar-titulo">
		<h2 id="verificar-titulo">Como verificar se o seu site Angular está indexável</h2>
		<p>
			Abra o código-fonte da página no navegador (não o inspecionar). Se o texto principal estiver lá,
			o HTML chega pronto. No Search Console, a Inspeção de URL mostra a página como o Google a
			renderizou; compare com a página real. Se o diagnóstico mostrar outros bloqueios, o roteiro
			completo está em <a href={guides.siteNaoAparece.path}>por que um site não aparece no Google</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO em Angular" />

	<Related
		links={[
			{ href: services.otimizacaoDeSites.path, text: 'Core Web Vitals em aplicações pesadas' },
			{ href: services.sistemasWeb.path, text: 'Desenvolvimento de sistemas web em Angular' },
			{ href: guides.seoParaIa.path, text: 'Robôs de IA e conteúdo renderizado no servidor' },
			{ href: careerPage.path, text: 'Experiência como desenvolvedor Angular' }
		]}
	/>

	<Contact {whatsapp} title="Seu site Angular não indexa?" intro="Envie o endereço pelo WhatsApp e eu verifico como os robôs estão vendo as suas páginas." />
</main>
