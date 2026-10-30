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

	const path = guides.pequenasEmpresas.path;
	const title = 'SEO para pequenas empresas: um plano de 90 dias - Calebe Araujo';
	const description =
		'SEO para pequenas empresas sem desperdício: o que fazer sozinho, o que vale contratar e um plano de 90 dias com prioridades e prazos realistas.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Tenho uma pequena empresa e quero aparecer melhor no Google. Minha empresa é: ',
		label: 'Falar sobre SEO para a minha empresa pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'SEO para pequenas empresas', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'SEO funciona para empresa pequena com pouco orçamento?',
			answer:
				'Funciona, desde que o orçamento vá para o que traz contato primeiro: Perfil da Empresa no Google completo, uma página para cada serviço principal e um site sem erros de indexação. Boa parte dessa base é gratuita ou feita uma única vez. O que desperdiça orçamento pequeno são pacotes mensais genéricos, que não dizem o que será entregue.'
		},
		{
			question: 'Quanto tempo o SEO leva para dar resultado numa pequena empresa?',
			answer:
				'O Perfil da Empresa no Google costuma aparecer no mapa logo depois de verificado. Páginas novas do site levam de alguns dias a algumas semanas para serem encontradas. Já o trabalho de SEO como um todo leva, na maioria dos casos, de quatro meses a um ano para mostrar benefícios, segundo o próprio Google. Por isso o plano começa pelo que dá retorno mais cedo.'
		},
		{
			question: 'Preciso de site ou o Perfil da Empresa no Google basta?',
			answer:
				'Para aparecer no mapa da sua cidade, o perfil resolve boa parte. O site entra para as buscas mais específicas, como um serviço que você faz e o concorrente não, para quem pesquisa fora do raio do mapa e para convencer quem já encontrou a sua empresa. Os dois juntos funcionam melhor do que qualquer um sozinho.'
		},
		{
			question: 'Vale a pena fazer um blog na minha pequena empresa?',
			answer:
				'Só depois das páginas de serviço, e só com assuntos que os seus clientes realmente perguntam. Um blog com temas amplos, que qualquer site poderia publicar, consome tempo e raramente traz cliente. Uma página que responde bem a uma dúvida real, com a experiência da sua empresa, vale mais que dez textos genéricos.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		article: { headline: 'SEO para pequenas empresas: um plano de 90 dias', type: 'Article' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="como-aparecer-no-google" />
		<Breadcrumbs {crumbs} />

		<h1>SEO para pequenas empresas: um plano de 90 dias</h1>

		<p>
			SEO para pequenas empresas é o trabalho de fazer o negócio aparecer no Google para quem já está
			procurando o que ele vende, dentro do orçamento e do tempo de uma empresa pequena. A técnica é a
			mesma de uma empresa grande; o que muda é a ordem: primeiro o que traz contato com pouco esforço,
			depois o que leva meses para dar resultado.
		</p>
		<p>
			Este guia segue a ordem que uso na <a href={services.consultoriaSeo.path}>consultoria de SEO</a>
			para pequenas empresas: o que o dono consegue fazer sozinho e de graça, o que vale contratar e o
			que fazer em cada mês dos primeiros 90 dias.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="sozinho-titulo">
		<h2 id="sozinho-titulo">O que dá para fazer sozinho e de graça</h2>
		<p>
			Uma pequena empresa consegue fazer sozinha a base do SEO local: cadastrar o negócio no Google,
			manter os dados de contato iguais em todo lugar e pedir avaliações a clientes. Nada disso tem
			custo, só exige constância.
		</p>
		<ul>
			<li><strong>Perfil da Empresa no Google (o antigo Google Meu Negócio):</strong> categoria correta, serviços, área de atendimento, horários e fotos reais. O passo a passo está no guia de <a href={guides.comoAparecer.path}>como colocar a sua empresa no Google</a>.</li>
			<li><strong>Google Search Console:</strong> a ferramenta gratuita que mostra se o site aparece no Google e para quais pesquisas.</li>
			<li><strong>Dados idênticos:</strong> nome, endereço e telefone escritos da mesma forma no site, no perfil e nas redes sociais.</li>
			<li><strong>Avaliações:</strong> pedir a cada cliente atendido e responder a todas, inclusive às negativas, sem oferecer nada em troca.</li>
			<li><strong>Lista de perguntas:</strong> anotar as dúvidas que os clientes fazem no WhatsApp e no telefone. Elas viram as seções das páginas de serviço.</li>
		</ul>
	</section>

	<section aria-labelledby="contratar-titulo">
		<h2 id="contratar-titulo">O que vale contratar</h2>
		<p>
			Vale contratar o que exige conhecimento técnico ou um tempo que o dono não tem: a estrutura do
			site, a correção de erros de indexação e de velocidade e a escrita das páginas de serviço. Errar
			nessas partes custa meses de espera sem resultado.
		</p>
		<ul>
			<li><strong>Site com uma página por serviço:</strong> é a página do serviço que aparece para a busca específica. Veja como funciona a <a href={services.criacaoDeSites.path}>criação de sites</a> com essa estrutura.</li>
			<li><strong>Diagnóstico técnico:</strong> se o site já existe e não aparece, uma <a href={services.auditoriaSeo.path}>auditoria de SEO</a> mostra o que corrigir primeiro.</li>
			<li><strong>Página para anúncios:</strong> enquanto o SEO não traz contatos, uma <a href={services.landingPage.path}>landing page</a> bem feita deixa o dinheiro dos anúncios render mais.</li>
		</ul>
	</section>

	<section aria-labelledby="plano-titulo">
		<h2 id="plano-titulo">Plano de SEO de 90 dias para uma pequena empresa</h2>
		<p>
			O plano divide o trabalho em três etapas de cerca de um mês: a base técnica e o perfil, as
			páginas de serviço e, por fim, avaliações e medição. Cada etapa depende da anterior, por isso a
			ordem importa mais que a velocidade.
		</p>

		<h3>Mês 1: base técnica e Perfil da Empresa</h3>
		<ol>
			<li>Perfil da Empresa no Google completo e verificado.</li>
			<li>Search Console cadastrado e o sitemap do site enviado.</li>
			<li>Site rápido no celular e com as páginas liberadas para o Google; se alguma não aparece, siga o <a href={guides.siteNaoAparece.path}>diagnóstico de indexação</a>.</li>
			<li>Correção de erros que impedem a indexação, como páginas bloqueadas, endereços duplicados e links quebrados.</li>
		</ol>

		<h3>Mês 2: uma página para cada serviço</h3>
		<ol>
			<li>Uma página para cada serviço principal, com o nome que o cliente usa na busca no título.</li>
			<li>No início de cada página, a resposta para as perguntas que mais aparecem: como funciona, prazo e o que define o preço.</li>
			<li>Fotos de trabalhos reais e a área atendida escrita em texto, sem listas de bairros.</li>
			<li>Links entre as páginas de serviços relacionados.</li>
		</ol>

		<h3>Mês 3: avaliações, perguntas e medição</h3>
		<ol>
			<li>Pedido de avaliação incluído na rotina de atendimento.</li>
			<li>Perguntas frequentes reais respondidas nas páginas de serviço.</li>
			<li>Cada contato medido: o botão de WhatsApp com uma mensagem que já informa de qual página o cliente veio.</li>
			<li>Revisão no Search Console: pesquisas que já mostram o site perto da primeira página indicam quais títulos e textos ajustar.</li>
		</ol>
		<p>
			Ao fim dos 90 dias, o esperado é ter o perfil completo, as páginas indexadas e as primeiras
			pesquisas aparecendo no Search Console. Posições estáveis na primeira página levam mais tempo, e
			o acompanhamento depois disso é feito com base no que os dados mostram.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="investir-titulo">
		<h2 id="investir-titulo">Quanto investir em SEO numa pequena empresa</h2>
		<p>
			O investimento depende de quatro fatores: se o site já existe ou precisa ser feito, quantos
			serviços precisam de página própria, quem escreve os textos e se a disputa é na cidade ou no
			país inteiro. Para a maioria das pequenas empresas, um projeto pontual bem definido resolve mais
			do que um acompanhamento mensal longo.
		</p>
		<p>
			Antes de contratar, peça por escrito o que será entregue: quais páginas, quais correções e como
			o resultado será medido. Desconfie de pacotes mensais que prometem "otimização contínua" sem
			dizer o que muda no site.
		</p>
	</section>

	<section aria-labelledby="local-nacional-titulo">
		<h2 id="local-nacional-titulo">SEO local ou nacional: por onde começar</h2>
		<p>
			Se o cliente está na sua cidade, comece pelo SEO local: Perfil da Empresa no Google e páginas de
			serviço que citam a região atendida. É o caso de prestadores de serviço, comércio e clínicas, como
			explico na <a href="/consultoria-seo-sorocaba">consultoria de SEO local em Sorocaba</a>. Se a
			empresa vende para todo o país, o perfil perde peso e o trabalho passa a ser de páginas por
			solução e por segmento de cliente, como no <a href={services.seoB2b.path}>SEO para empresas B2B</a>.
		</p>
	</section>

	<section aria-labelledby="erros-titulo">
		<h2 id="erros-titulo">Erros que desperdiçam o orçamento de SEO</h2>
		<ul>
			<li><strong>Blog genérico:</strong> textos sobre temas amplos, que qualquer site poderia publicar, antes de existirem as páginas de serviço.</li>
			<li><strong>Compra de links:</strong> pacotes de backlinks violam as regras do Google e podem fazer o site perder posições.</li>
			<li><strong>Uma página por bairro:</strong> páginas iguais trocando só o nome do bairro são tratadas como spam e dividem a força do site.</li>
			<li><strong>Trocar de site sem planejamento:</strong> um site novo que muda os endereços das páginas sem redirecionar os antigos perde o que o anterior já tinha conquistado.</li>
			<li><strong>Promessa de primeiro lugar:</strong> ninguém controla a posição no Google; quem garante o primeiro lugar está falando de anúncio ou não está sendo honesto.</li>
		</ul>
	</section>

	<section aria-labelledby="consultoria-titulo">
		<h2 id="consultoria-titulo">Quando contratar uma consultoria de SEO</h2>
		<p>
			Vale contratar uma consultoria quando o site existe há meses e não aparece para as buscas que
			importam, quando não há ninguém na empresa para cuidar da parte técnica ou quando o site vai ser
			refeito. Na minha <a href={services.consultoriaSeo.path}>consultoria de SEO para pequenas empresas</a>,
			começo pelo diagnóstico e entrego as correções feitas no próprio site, porque também sou o
			desenvolvedor.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO para pequenas empresas" />

	<Related
		links={[
			{ href: guides.comoAparecer.path, text: 'Como colocar a sua empresa no Google, sem jargão' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO do site da sua empresa' },
			{ href: services.criacaoDeSites.path, text: 'Sites com uma página para cada serviço' },
			{ href: '/consultoria-seo-sorocaba', text: 'SEO local para empresas de Sorocaba' }
		]}
	/>

	<Contact {whatsapp} title="Quer o plano aplicado na sua empresa?" intro="Conte o que a sua empresa faz e em que região atende; eu respondo com as prioridades para os primeiros 90 dias." />
</main>
