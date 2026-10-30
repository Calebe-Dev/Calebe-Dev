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

	const path = services.landingPage.path;
	const title = 'Criação de landing page profissional para empresas - Calebe Araujo';
	const description =
		'Criação de landing page profissional: página rápida, texto que convence e contatos medidos. Mais de 60 landing pages e sites entregues com SEO técnico.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de landing page e quero um orçamento de landing page.',
		label: 'Pedir orçamento de landing page pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Landing page', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Landing page aparece no Google?',
			answer:
				'Pode aparecer, desde que esteja liberada para indexação e tenha conteúdo suficiente para responder à busca que ela mira. Uma página curta, com pouco mais que um formulário, raramente ganha posições na busca orgânica. Para receber cliques de anúncios, ela não precisa estar no índice do Google; para aparecer sozinha nos resultados, precisa ser escrita como uma página de busca.'
		},
		{
			question: 'Quanto tempo leva para criar uma landing page?',
			answer:
				'O que mais pesa no prazo é a definição da oferta: o que está sendo vendido, para quem, por qual preço ou condição e quais dúvidas o cliente costuma ter. Com essas respostas e as imagens em mãos, a parte técnica é a etapa mais rápida. Por isso o prazo é combinado na proposta, depois de entender o que já está pronto.'
		},
		{
			question: 'Vou conseguir editar a landing page depois?',
			answer:
				'Sim. Em WordPress, a edição é feita no painel. Em landing pages estáticas, que são as mais rápidas, os textos podem ficar em um CMS headless, como o Directus, que oferece um painel de edição sem mexer no código.'
		},
		{
			question: 'Preciso de um site além da landing page?',
			answer:
				'Não necessariamente. Para uma oferta ou campanha específica, a landing page resolve sozinha. Quando a empresa tem vários serviços e quer aparecer em buscas diferentes, um site institucional com uma página por serviço passa a fazer mais sentido, e a landing page continua útil para as campanhas.'
		},
		{
			question: 'Posso divulgar a landing page no Instagram e no WhatsApp?',
			answer:
				'Pode. A página sai com a imagem e o título de compartilhamento configurados, para aparecer com prévia no WhatsApp, no LinkedIn e nas outras redes. Usando endereços com parâmetros de campanha (UTM), dá para saber quantos contatos vieram de cada canal.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de landing page profissional',
			serviceType: 'Criação de landing page',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Criação de landing page profissional para empresas</h1>

		<p>
			Criação de landing page é o desenvolvimento de uma página com um único objetivo: transformar a
			visita em um pedido de orçamento, uma mensagem no WhatsApp ou uma inscrição. Desenvolvo landing
			pages profissionais para empresas que abrem rápido no celular, respondem às dúvidas de quem chega
			e medem cada contato, tanto para campanhas de anúncios quanto para buscas específicas no Google.
		</p>
		<p>
			Já desenvolvi mais de 60 landing pages e sites institucionais com SEO técnico, como as landing
			pages de link dedicado do site <a href="https://linkdedicada.com.br/">Link Dedicada</a>. A
			mesma pessoa planeja a estrutura, escreve os textos e programa a página, sem intermediários entre
			a ideia e o código.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="o-que-e-titulo">
		<h2 id="o-que-e-titulo">O que é uma landing page e quando ela é melhor que um site</h2>
		<p>
			Landing page, ou página de destino, é uma página feita para uma única ação. Ela não tem um menu
			com dez caminhos nem fala de todos os serviços da empresa: apresenta uma oferta, responde às
			perguntas de quem chegou e leva a um único contato. É uma parte da
			<a href={services.criacaoDeSites.path}>criação de sites</a>, com um papel diferente do site
			institucional.
		</p>
		<p>Ela costuma ser a melhor escolha quando:</p>
		<ul>
			<li>a empresa vai anunciar um serviço específico e precisa de uma página que fale só dele;</li>
			<li>a oferta é nova e precisa ser testada antes de virar parte de um site completo;</li>
			<li>existe uma busca própria para aquele serviço, com uma pergunta clara a responder;</li>
			<li>a empresa precisa começar a receber contatos antes de ter um site com muitas páginas.</li>
		</ul>
		<p>
			Quando não é a melhor escolha: se a empresa tem vários serviços e quer aparecer em buscas
			diferentes, uma única landing page não dá conta. Nesse caso, o caminho é um site institucional
			com uma página para cada serviço, e as landing pages ficam para as campanhas.
		</p>
	</section>

	<section aria-labelledby="converter-titulo">
		<h2 id="converter-titulo">O que faz uma landing page converter</h2>
		<p>
			Uma landing page de alta conversão combina uma promessa clara, respostas às dúvidas antes do
			pedido de contato, carregamento rápido no celular e um caminho de contato sem atrito. Design
			bonito ajuda, mas não compensa a falta de nenhum desses pontos.
		</p>
		<ol>
			<li><strong>Uma oferta por página:</strong> se a página vende duas coisas, o visitante não sabe qual pedir.</li>
			<li><strong>Título coerente com o anúncio ou a busca:</strong> quem clicou em "manutenção de ar-condicionado" precisa ler isso no topo, e não o slogan da empresa.</li>
			<li><strong>Resposta antes do pedido:</strong> como funciona, em quanto tempo e o que define o preço aparecem no início, porque são as primeiras perguntas de quem compara fornecedores.</li>
			<li><strong>Prova real:</strong> números, fotos de trabalhos e clientes de verdade, com autorização. Depoimento inventado tira a credibilidade da página inteira.</li>
			<li><strong>Velocidade no celular:</strong> o maior elemento da tela visível em até 2,5 segundos, que é o limite considerado bom pelo Google para o LCP. Quem paga pelo clique perde o visitante que desiste antes de a página abrir.</li>
			<li><strong>Contato sem atrito:</strong> formulário com poucos campos ou WhatsApp com uma mensagem pronta que já informa de qual página o contato veio.</li>
			<li><strong>Medição desde o primeiro dia:</strong> cada envio de formulário e cada clique no WhatsApp registrado como conversão, para saber qual campanha traz cliente e qual só traz visita.</li>
		</ol>
	</section>

	<section aria-labelledby="ads-organico-titulo">
		<h2 id="ads-organico-titulo">Landing page para Google Ads e para a busca orgânica</h2>
		<p>
			A mesma landing page raramente atende bem aos dois. Para anúncios, ela precisa ser direta e
			coerente com o texto do anúncio, porque a experiência na página de destino faz parte do Índice de
			qualidade do Google Ads. Para a busca orgânica, ela precisa de conteúdo suficiente para responder
			à pesquisa e não pode repetir outra página do site.
		</p>
		<table>
			<caption>Diferenças entre landing page de anúncio e landing page para a busca orgânica</caption>
			<thead>
				<tr>
					<th scope="col">Critério</th>
					<th scope="col">Para anúncios</th>
					<th scope="col">Para a busca orgânica</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Tamanho do texto</th>
					<td>Curto, focado na oferta e no contato</td>
					<td>Completo o bastante para responder à pesquisa</td>
				</tr>
				<tr>
					<th scope="row">Indexação</th>
					<td>Opcional; variações de teste podem ficar fora do índice</td>
					<td>Obrigatória, com URL e título descritivos</td>
				</tr>
				<tr>
					<th scope="row">Quantidade</th>
					<td>Uma por campanha ou grupo de anúncios</td>
					<td>Uma por intenção de busca, sem páginas quase iguais</td>
				</tr>
				<tr>
					<th scope="row">O que medir</th>
					<td>Custo por contato e taxa de conversão</td>
					<td>Impressões, cliques e contatos vindos da busca</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="processo-titulo">
		<h2 id="processo-titulo">Como é o processo de criação da landing page</h2>
		<ol>
			<li><strong>Objetivo e oferta:</strong> o que a página vende, para quem e qual ação o visitante deve tomar.</li>
			<li><strong>Argumentos:</strong> as perguntas que os clientes já fazem no atendimento e no WhatsApp viram as seções da página.</li>
			<li><strong>Texto e estrutura antes do visual:</strong> título, respostas, provas e chamadas definidos primeiro; o design vem para destacar o que já está escrito.</li>
			<li><strong>Desenvolvimento:</strong> HTML gerado de forma estática, imagens em formatos leves e acessibilidade verificada.</li>
			<li><strong>Medição:</strong> conversões configuradas no Google Analytics, no Tag Manager ou nos pixels das campanhas, e a mensagem do WhatsApp identificando a página.</li>
			<li><strong>Publicação e ajustes:</strong> domínio, Search Console e, quando houver tráfego suficiente, testes de título e de chamada para melhorar a conversão.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="custo-titulo">
		<h2 id="custo-titulo">Quanto custa uma landing page</h2>
		<p>
			O preço de uma landing page depende de quem produz os textos e as imagens, de quantas seções a
			oferta exige, se o visual é criado do zero, de quais integrações são necessárias (CRM,
			formulários, pixels de anúncio) e de quantas variações vão ser testadas. Uma página para uma
			oferta simples, com textos e fotos prontos, é bem diferente de uma página com texto escrito do
			zero e integração ao CRM. Por isso a proposta é montada depois de entender a oferta e de onde
			virão as visitas.
		</p>
	</section>

	<section aria-labelledby="ferramenta-titulo">
		<h2 id="ferramenta-titulo">Landing page em código ou em construtor visual?</h2>
		<p>
			Construtores visuais, como Elementor, Wix e as ferramentas de landing page das plataformas de
			marketing, permitem montar e editar uma página sem programador. Uma landing page feita em código
			entrega mais velocidade e controle. Nenhum dos dois é errado; a escolha depende do uso.
		</p>
		<table>
			<caption>Comparação entre landing page em construtor visual e em código</caption>
			<thead>
				<tr>
					<th scope="col">Critério</th>
					<th scope="col">Construtor visual</th>
					<th scope="col">Feita em código</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Edição pelo time de marketing</th>
					<td>Direta, arrastando blocos</td>
					<td>Por um painel (CMS headless) ou com ajuda do desenvolvedor</td>
				</tr>
				<tr>
					<th scope="row">Velocidade no celular</th>
					<td>Depende dos scripts e do tema; costuma pesar mais</td>
					<td>Só o necessário é carregado</td>
				</tr>
				<tr>
					<th scope="row">Integrações sob medida</th>
					<td>Limitadas ao que a ferramenta oferece</td>
					<td>Qualquer CRM ou API</td>
				</tr>
				<tr>
					<th scope="row">Indicado para</th>
					<td>Testes rápidos e campanhas de curta duração</td>
					<td>Páginas permanentes, com tráfego pago constante ou alvo na busca orgânica</td>
				</tr>
			</tbody>
		</table>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre landing pages" />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Sites institucionais com uma página por serviço' },
			{ href: copywriterPage.path, text: 'Textos de landing page escritos para conversão e SEO' },
			{ href: services.otimizacaoDeSites.path, text: 'Como acelerar uma landing page lenta' },
			{ href: services.sistemasWeb.path, text: 'Contatos da landing page direto no CRM' },
			{ href: services.seoB2b.path, text: 'Landing pages por solução para empresas B2B' }
		]}
	/>

	<Contact {whatsapp} title="Peça a sua landing page" intro="Conte qual oferta a página vai apresentar e de onde virão as visitas (anúncios, Google ou redes sociais); eu respondo com uma proposta de estrutura." />
</main>
