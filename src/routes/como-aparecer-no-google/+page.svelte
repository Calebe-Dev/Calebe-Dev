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

	const path = guides.comoAparecer.path;
	const title = 'Como colocar minha empresa no Google e na primeira página - Calebe Araujo';
	const description =
		'Guia sem jargão para colocar sua empresa no Google: Perfil da Empresa (o antigo Google Meu Negócio), site e o que ajuda a chegar à primeira página.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero colocar minha empresa no Google. Minha empresa é: ',
		label: 'Falar sobre aparecer no Google pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Como aparecer no Google', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Quanto tempo leva para minha empresa aparecer no Google?',
			answer:
				'No mapa, a empresa passa a aparecer depois que o Perfil da Empresa no Google é verificado, o que pode levar alguns dias. Um site novo pode levar de alguns dias a algumas semanas para ser encontrado pelo Google, e chegar às primeiras posições costuma levar de quatro meses a um ano, segundo o próprio Google.'
		},
		{
			question: 'Dá para aparecer no Google sem pagar?',
			answer:
				'Sim. Criar o Perfil da Empresa no Google e aparecer nos resultados de pesquisa são gratuitos. Você só paga se quiser anúncios ou se contratar alguém para fazer o site e o trabalho para ele aparecer bem.'
		},
		{
			question: 'Google Meu Negócio e Perfil da Empresa no Google são a mesma coisa?',
			answer:
				'Sim. Google Meu Negócio era o nome antigo; desde 2021 a ferramenta se chama Perfil da Empresa no Google. O cadastro e o funcionamento continuam os mesmos, e muita gente ainda a procura pelo nome antigo.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'Como colocar minha empresa no Google e na primeira página', type: 'Article' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="como-aparecer-no-google" />
		<Breadcrumbs {crumbs} />

		<h1>Como colocar minha empresa no Google e na primeira página</h1>

		<p>
			Para colocar a sua empresa no Google existem três caminhos, que podem andar juntos: o Perfil da
			Empresa no Google (o antigo Google Meu Negócio), que faz a empresa aparecer no mapa; um site com
			uma página para cada serviço, que aparece nos resultados de pesquisa; e os anúncios, que aparecem
			enquanto você paga. Os dois primeiros são gratuitos para criar; o que custa é o trabalho de
			fazê-los bem feitos.
		</p>
		<p>
			Este guia é para quem não é da área: explica cada caminho sem jargão e mostra o que realmente
			ajuda uma empresa a ser encontrada. Quando aparecer um termo técnico, ele vem explicado.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="formas-titulo">
		<h2 id="formas-titulo">As três formas de aparecer no Google</h2>
		<table>
			<caption>Onde a sua empresa pode aparecer numa pesquisa do Google</caption>
			<thead>
				<tr>
					<th scope="col">Onde aparece</th>
					<th scope="col">Como funciona</th>
					<th scope="col">Custo</th>
					<th scope="col">Prazo</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">No mapa</th>
					<td>Perfil da Empresa no Google, mostrado em buscas como "dentista perto de mim"</td>
					<td>Gratuito</td>
					<td>Depois que o perfil é verificado</td>
				</tr>
				<tr>
					<th scope="row">Nos resultados de pesquisa</th>
					<td>Páginas do seu site, abaixo do mapa e dos anúncios</td>
					<td>Gratuito para aparecer; o site é o investimento</td>
					<td>De algumas semanas a meses</td>
				</tr>
				<tr>
					<th scope="row">Nos anúncios</th>
					<td>Google Ads, no topo, com a marcação "Patrocinado"</td>
					<td>Pago por clique</td>
					<td>Imediato, enquanto houver verba</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="perfil-titulo">
		<h2 id="perfil-titulo">Passo 1: Perfil da Empresa no Google (o antigo Google Meu Negócio)</h2>
		<ol>
			<li><strong>Crie ou assuma o perfil</strong> em business.google.com, com a conta Google da empresa.</li>
			<li><strong>Escolha a categoria principal certa:</strong> é ela que define para quais pesquisas a empresa aparece.</li>
			<li><strong>Preencha tudo:</strong> serviços, horários, área de atendimento, fotos reais e o endereço do site.</li>
			<li><strong>Verifique o perfil:</strong> o Google confirma que a empresa existe pelo método que ele indicar, como vídeo, ligação ou mensagem.</li>
			<li><strong>Peça avaliações a clientes reais</strong> e responda a todas, positivas ou não.</li>
		</ol>
		<h3>Empresa sem endereço também aparece</h3>
		<p>
			Quem atende na casa do cliente ou trabalha de casa pode esconder o endereço e informar uma área
			de atendimento. A empresa continua aparecendo no mapa para as pesquisas da região, sem expor onde
			fica.
		</p>
	</section>

	<section aria-labelledby="site-titulo">
		<h2 id="site-titulo">Passo 2: um site que o Google consegue mostrar</h2>
		<p>
			O perfil leva ao mapa; o site é o que aparece nas pesquisas mais específicas, como "manutenção de
			ar-condicionado para escritórios", e é onde o cliente decide se confia na sua empresa. Para isso,
			o site precisa de:
		</p>
		<ul>
			<li>Uma página para cada serviço, com o nome do serviço do jeito que o cliente pesquisa.</li>
			<li>Texto de verdade em cada página, e não só imagens e frases soltas.</li>
			<li>Carregamento rápido no celular, onde acontece boa parte das pesquisas.</li>
			<li>Nome, endereço e telefone iguais no site e no Perfil da Empresa no Google.</li>
			<li>Cadastro no Google Search Console, a ferramenta gratuita do Google que mostra se o site está aparecendo e para quais pesquisas.</li>
		</ul>
		<p>
			Esse trabalho de preparar o site para aparecer no Google se chama SEO (otimização para mecanismos
			de busca). Se a empresa ainda não tem site, o melhor momento para fazer isso é na
			<a href={services.criacaoDeSites.path}>criação do site</a>, e não depois.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="primeiro-titulo">
		<h2 id="primeiro-titulo">Como ficar em primeiro lugar no Google</h2>
		<p>
			Ninguém pode garantir o primeiro lugar: o próprio Google recomenda desconfiar de quem promete
			isso. O que leva uma empresa ao topo, com o tempo, é a soma de quatro fatores:
		</p>
		<ol>
			<li><strong>Relevância:</strong> a página responde exatamente ao que a pessoa pesquisou.</li>
			<li><strong>Proximidade:</strong> no mapa, empresas perto de quem pesquisa levam vantagem.</li>
			<li><strong>Reputação:</strong> avaliações, menções e links de outros sites confiáveis.</li>
			<li><strong>Experiência:</strong> site rápido, fácil de usar no celular e com informações claras.</li>
		</ol>
		<p>
			No mapa, o Google informa que a ordem depende de relevância, distância e proeminência, que é o
			quanto a empresa é conhecida. Nos resultados de pesquisa, os sinais são muitos, mas esses quatro
			são os que estão nas suas mãos.
		</p>
	</section>

	<section aria-labelledby="custo-titulo">
		<h2 id="custo-titulo">O que é de graça e o que é investimento</h2>
		<dl>
			<dt>De graça</dt>
			<dd>Criar o Perfil da Empresa no Google, aparecer nos resultados de pesquisa e usar o Search Console.</dd>
			<dt>Investimento</dt>
			<dd>O site, o tempo para produzir textos e fotos e, se você quiser resultado imediato, os anúncios.</dd>
		</dl>
		<p>
			Aparecer no Google sem pagar é possível, mas exige trabalho bem feito. O atalho pago são os
			anúncios, que param de trazer clientes no dia em que a verba acaba.
		</p>
	</section>

	<section aria-labelledby="nao-aparece-titulo">
		<h2 id="nao-aparece-titulo">Minha empresa não aparece no Google: o que verificar</h2>
		<ul>
			<li><strong>Perfil não verificado ou suspenso:</strong> confira o status do perfil em business.google.com.</li>
			<li><strong>Categoria errada:</strong> a empresa aparece para pesquisas que não são as dela.</li>
			<li><strong>Site fora do Google:</strong> se o seu site sumiu do Google ou nunca apareceu, siga o <a href={guides.siteNaoAparece.path}>diagnóstico de site que não aparece no Google</a>.</li>
			<li><strong>Site novo:</strong> pode levar algumas semanas até o Google encontrar e mostrar as páginas.</li>
		</ul>
	</section>

	<section aria-labelledby="ajuda-titulo">
		<h2 id="ajuda-titulo">Quando vale contratar ajuda</h2>
		<p>
			Se a sua empresa depende de clientes que pesquisam no Google, vale ter alguém cuidando do perfil,
			do site e do acompanhamento dos resultados. Como desenvolvedor e especialista em SEO, faço as
			duas partes: construo o site e cuido do trabalho para ele aparecer, na
			<a href={services.consultoriaSeo.path}>consultoria de SEO</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre aparecer no Google" />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Criação de sites profissionais para empresas' },
			{ href: '/consultoria-seo-sorocaba', text: 'Google Meu Negócio e SEO local em Sorocaba' },
			{ href: guides.siteNaoAparece.path, text: 'Meu site sumiu do Google: o que fazer' },
			{ href: guides.seoParaIa.path, text: 'Como a empresa aparece também no ChatGPT' }
		]}
	/>

	<Contact {whatsapp} title="Quer a sua empresa aparecendo no Google?" intro="Conte o que a sua empresa faz e em que região atende; eu respondo com o caminho mais rápido para ela ser encontrada." />
</main>
