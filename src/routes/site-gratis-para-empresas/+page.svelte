<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { freeSiteOffer, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { freeSite, nichePages, services, type WhatsApp } from '$lib/site';

	const path = services.siteGratis.path;
	const title = 'Site grátis para empresas: eu crio e hospedo o seu site - Calebe Araujo';
	const description =
		'Site grátis por 1 ano para empresas de qualquer nicho: crio e hospedo até 5 páginas otimizadas para o Google, em até 7 dias. Você só registra o domínio.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pela página de site grátis para empresas e quero consultar a disponibilidade. Minha empresa é: ',
		label: freeSite.whatsappLabel
	};

	const crumbs = [{ name: 'Site grátis para empresas', path }];

	const faqs: FaqItem[] = [
		{
			question: 'O site grátis é grátis mesmo?',
			answer:
				'Sim, durante o primeiro ano. A criação e a hospedagem do site, com até 5 páginas, não têm custo nos primeiros 12 meses. O único gasto é o domínio, que fica no nome da sua empresa e é pago por você diretamente ao órgão de registro. Em troca, você autoriza que o site entre no meu portfólio como case e dá um depoimento sobre o trabalho depois de 30 dias.'
		},
		{
			question: 'O site fica sendo da minha empresa?',
			answer:
				'Não. O código, o design, os textos que eu escrevo e todo o trabalho de SEO são de minha propriedade, com todos os direitos reservados. A sua empresa recebe o uso do site enquanto a parceria durar. O que você fornece continua seu: marca, logo, fotos próprias, as informações do negócio e o domínio. Se a parceria terminar, você mantém o domínio e o seu material, mas não leva o site.'
		},
		{
			question: 'O que acontece depois do primeiro ano?',
			answer:
				'As condições são renegociadas. Se o site estiver trazendo contatos e clientes para a sua empresa, ofereço a continuidade a um preço acessível, sob proposta. Qualquer uma das partes pode encerrar a parceria com aviso prévio de 3 meses.'
		},
		{
			question: 'Em quanto tempo o site fica pronto?',
			answer:
				'Em até 7 dias, contados a partir do momento em que recebo as informações do negócio e o material que você quiser usar, como logo e fotos. Depois da entrega, você tem uma rodada de ajustes incluída; alterações além dela são feitas sob proposta.'
		},
		{
			question: 'Minha empresa é de um nicho diferente. Posso participar?',
			answer:
				'Pode. A oferta vale para qualquer nicho e qualquer porte de empresa. O limite é de vagas: até 5 sites gratuitos por mês, por isso o primeiro passo é consultar a disponibilidade pelo WhatsApp.'
		},
		{
			question: 'Por que o link no rodapé do meu site é nofollow?',
			answer:
				'Porque exigir um link que transmita relevância como condição de um serviço é um esquema de links pelas regras do Google, e isso pode prejudicar os dois sites. O crédito no rodapé identifica quem fez o site, com o atributo nofollow, que diz ao Google para não usar o link como sinal de ranqueamento.'
		},
		{
			question: 'Preciso entender de domínio e DNS?',
			answer:
				'Não precisa ser especialista. Registrar o domínio, renovar e apontar o DNS para a hospedagem são tarefas suas, e eu explico o que precisa ser configurado. Em domínios .com.br, o registro é feito no Registro.br, com o CPF ou o CNPJ do titular.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Site grátis para empresas',
			serviceType: 'Criação e hospedagem de site',
			description,
			offers: freeSiteOffer(path)
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="criacao-de-sites" />
		<Breadcrumbs {crumbs} />

		<h1>Site grátis para empresas: eu crio e hospedo o seu site</h1>

		<p>
			Site grátis para empresas é a minha oferta para quem precisa de um site profissional e não quer
			montar sozinho em um construtor: eu planejo, escrevo, desenvolvo e hospedo um site de até 5
			páginas, e a sua empresa só registra e paga o próprio domínio. Vale para qualquer nicho e qualquer
			porte de empresa, com um limite de até 5 sites gratuitos por mês. O site fica pronto em até 7 dias
			e é gratuito durante o primeiro ano.
		</p>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. Aqui, o
			primeiro ano é grátis: você paga só o domínio.
		</p>
		<p>
			Não é um modelo pronto com o logotipo trocado. As páginas seguem as mesmas práticas de SEO que uso
			nos projetos pagos de <a href={services.criacaoDeSites.path}>criação de sites</a>: uma página por
			serviço, SEO técnico, dados estruturados, carregamento rápido e o Google Search Console configurado.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="como-titulo">
		<h2 id="como-titulo">Como funciona o site grátis</h2>
		<ol>
			<li><strong>Disponibilidade:</strong> você me chama no WhatsApp e eu confirmo se ainda há vaga no mês.</li>
			<li><strong>Conversa sobre o negócio:</strong> o que a empresa faz, quais serviços vende, para quem e em que região atende.</li>
			<li><strong>Domínio:</strong> você registra o domínio da empresa no seu nome.</li>
			<li><strong>Planejamento das páginas:</strong> defino quais serão as até 5 páginas a partir de como os seus clientes pesquisam no Google.</li>
			<li><strong>Textos e desenvolvimento:</strong> escrevo os textos com as informações que você passar e desenvolvo o site em até 7 dias, contados do recebimento das informações e do material.</li>
			<li><strong>Ajustes:</strong> você revisa o site pronto e pede uma rodada de ajustes, incluída na oferta.</li>
			<li><strong>Publicação:</strong> o site é publicado na Cloudflare, você aponta o DNS do domínio e eu configuro o Google Search Console.</li>
			<li><strong>Depois de 30 dias:</strong> você dá um depoimento sobre o trabalho, e o site passa a fazer parte do meu portfólio.</li>
			<li><strong>Depois de 1 ano:</strong> conversamos sobre a continuidade, nas condições descritas abaixo.</li>
		</ol>
	</section>

	<section aria-labelledby="incluido-titulo">
		<h2 id="incluido-titulo">O que está incluído</h2>
		<ul>
			<li><strong>Até 5 páginas</strong> planejadas para a busca orgânica, com estrutura de uma página por serviço principal.</li>
			<li><strong>SEO técnico:</strong> título, descrição e H1 por página, URLs descritivas, sitemap e robots.txt.</li>
			<li><strong>Dados estruturados</strong> que descrevem o negócio para o Google, no tipo adequado ao seu segmento.</li>
			<li><strong>Velocidade:</strong> páginas geradas de forma estática e imagens em formatos leves.</li>
			<li><strong>Google Search Console</strong> configurado, para acompanhar se o site aparece e para quais pesquisas.</li>
			<li><strong>Hospedagem na Cloudflare</strong>, com HTTPS (detalhes abaixo), sem custo no primeiro ano.</li>
			<li><strong>Uma rodada de ajustes</strong> depois da entrega.</li>
		</ul>
	</section>

	<section aria-labelledby="infra-titulo">
		<h2 id="infra-titulo">Hospedagem: infraestrutura de nível corporativo</h2>
		<p>
			O site fica hospedado na rede global da Cloudflare, a mesma que hospeda este site. Segundo a
			própria Cloudflare, a rede tem servidores em mais de 300 cidades em mais de 100 países, e a empresa
			informa que atende 1 em cada 5 sites da internet. Na prática, isso significa:
		</p>
		<ul>
			<li><strong>Páginas estáticas, geradas antes da visita:</strong> o servidor entrega o HTML pronto, sem montar a página a cada acesso, o que ajuda o site a abrir rápido.</li>
			<li><strong>Entrega pelo servidor mais próximo (CDN):</strong> o visitante recebe o site a partir de um ponto da rede perto dele.</li>
			<li><strong>HTTPS</strong> com certificado de segurança em todas as páginas.</li>
			<li><strong>Proteção contra ataques</strong> e tráfego malicioso, feita pela própria rede da Cloudflare.</li>
		</ul>
	</section>

	<section aria-labelledby="cliente-titulo">
		<h2 id="cliente-titulo">O que fica por conta da sua empresa</h2>
		<p>
			A sua empresa cuida do domínio: o registro, a renovação e o apontamento do DNS para a hospedagem.
			O domínio fica no seu nome e é pago por você, então ele é sempre seu. Além disso, você fornece as
			informações do negócio, a marca e as fotos próprias que quiser usar, e autoriza o uso do site como
			case no meu portfólio, com um depoimento depois de 30 dias.
		</p>
	</section>

	<section id="propriedade" aria-labelledby="propriedade-titulo">
		<h2 id="propriedade-titulo">De quem é o site: o que é seu e o que é meu</h2>
		<p>
			No site grátis, a sua empresa recebe o uso do site, e não a propriedade dele. O código, o design, os
			textos que eu escrevo e todo o trabalho de SEO, como a estrutura de páginas, as otimizações e os
			dados estruturados, são de propriedade de Calebe Araujo, com todos os direitos reservados. Prefiro
			dizer isso logo aqui, com clareza, do que deixar para um contrato que ninguém lê.
		</p>
		<table>
			<caption>Propriedade de cada parte do site grátis</caption>
			<thead>
				<tr>
					<th scope="col">Parte do site</th>
					<th scope="col">De quem é</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Domínio</th>
					<td>Da sua empresa, registrado e pago por você</td>
				</tr>
				<tr>
					<th scope="row">Marca, logo, fotos próprias e informações do negócio</th>
					<td>Da sua empresa</td>
				</tr>
				<tr>
					<th scope="row">Código, design e textos escritos por mim</th>
					<td>De Calebe Araujo, todos os direitos reservados</td>
				</tr>
				<tr>
					<th scope="row">Trabalho de SEO: estrutura, otimizações e dados estruturados</th>
					<td>De Calebe Araujo, todos os direitos reservados</td>
				</tr>
			</tbody>
		</table>
		<p>
			Na prática: enquanto a parceria durar, o site funciona no seu domínio, com o seu conteúdo. Se a
			sua empresa decidir encerrar, ela mantém o domínio e todo o material que forneceu, mas não leva o
			site. Depois do encerramento, o site pode continuar publicado em um domínio meu, como projeto do
			meu portfólio, identificado como tal e fora dos resultados do Google. O rodapé de cada site traz o aviso "© Calebe Araujo. Todos os direitos reservados." e o
			crédito de quem fez o site, com link nofollow.
		</p>
	</section>

	<section id="condicoes" aria-labelledby="condicoes-titulo">
		<h2 id="condicoes-titulo">Condições do site grátis</h2>
		<table>
			<caption>Condições da oferta de site grátis para empresas</caption>
			<thead>
				<tr>
					<th scope="col">Item</th>
					<th scope="col">Condição</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Período gratuito</th>
					<td>12 meses de criação e hospedagem sem custo, contados da publicação do site</td>
				</tr>
				<tr>
					<th scope="row">Prazo de entrega</th>
					<td>Até 7 dias, contados do recebimento das informações e do material</td>
				</tr>
				<tr>
					<th scope="row">Ajustes</th>
					<td>Uma rodada de ajustes incluída depois da entrega; outras alterações, sob proposta</td>
				</tr>
				<tr>
					<th scope="row">Serviços extras</th>
					<td>Sob proposta, com condições exclusivas para quem tem o site grátis</td>
				</tr>
				<tr>
					<th scope="row">Depois do primeiro ano</th>
					<td>Renegociação: se o site estiver trazendo contatos e clientes, a continuidade é oferecida a um preço acessível, sob proposta</td>
				</tr>
				<tr>
					<th scope="row">Encerramento</th>
					<td>Por qualquer uma das partes, com aviso prévio de 3 meses</td>
				</tr>
				<tr>
					<th scope="row">Depois do encerramento</th>
					<td>O domínio e o seu material continuam seus; o site pode seguir publicado em um domínio meu, como projeto de portfólio, fora dos resultados do Google</td>
				</tr>
			</tbody>
		</table>
		<p>
			As condições completas ficam em um termo de uso que a sua empresa recebe e aceita antes do início
			do trabalho.
		</p>
	</section>

	<section aria-labelledby="gratis-titulo">
		<h2 id="gratis-titulo">Por que é grátis</h2>
		<p>
			Um site com esse trabalho de SEO sai por mais de R$ 1.000 quando é contratado comigo. O primeiro
			ano é grátis porque cada site entregue vira um case real no meu portfólio e traz um depoimento de quem usou o
			serviço, e isso vale mais para mim, neste momento, do que cobrar pelos primeiros sites. O limite
			de 5 sites por mês existe para eu manter a qualidade.
		</p>
		<p>
			Também ofereço serviços pagos, todos opcionais: SEO local e configuração do Perfil da Empresa no
			Google (o antigo Google Meu Negócio), <a href={services.landingPage.path}>landing pages</a> para
			anúncios e <a href={services.sistemasWeb.path}>sistemas web</a>, sob proposta e com condições
			exclusivas para quem tem o site grátis. Contratar qualquer um deles não é condição para receber o
			site.
		</p>
	</section>

	<section aria-labelledby="construtor-titulo">
		<h2 id="construtor-titulo">Site grátis feito por mim ou criado em um construtor</h2>
		<p>
			Construtores como Wix e Google Sites permitem criar um site grátis sozinho, e para testar uma ideia
			eles funcionam. A diferença está em quem faz o trabalho e no que o site entrega para a busca no
			Google.
		</p>
		<table>
			<caption>Comparação entre o site grátis feito por mim e um site em construtor</caption>
			<thead>
				<tr>
					<th scope="col">Critério</th>
					<th scope="col">Construtor de sites</th>
					<th scope="col">Site grátis feito por mim</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Quem monta</th>
					<td>Você, com modelos prontos</td>
					<td>Eu, a partir do seu negócio</td>
				</tr>
				<tr>
					<th scope="row">Domínio próprio</th>
					<td>Nos planos gratuitos, em geral um subdomínio da plataforma</td>
					<td>O domínio da sua empresa</td>
				</tr>
				<tr>
					<th scope="row">Estrutura para o Google</th>
					<td>Depende do que você souber configurar</td>
					<td>Uma página por serviço, SEO técnico e dados estruturados</td>
				</tr>
				<tr>
					<th scope="row">Propriedade do site</th>
					<td>Em geral, o site fica na plataforma e não pode ser levado para fora dela</td>
					<td>O site é meu; o domínio e o seu material são seus</td>
				</tr>
				<tr>
					<th scope="row">Limite</th>
					<td>Recursos dos planos gratuitos</td>
					<td>Até 5 páginas e até 5 sites por mês</td>
				</tr>
			</tbody>
		</table>
		<p>
			Se a sua empresa precisa de mais de 5 páginas, de um site que seja dela por completo ou de
			integrações, o caminho é um projeto pago de <a href={services.criacaoDeSites.path}>criação de sites</a>.
		</p>
	</section>

	<section aria-labelledby="segmentos-titulo">
		<h2 id="segmentos-titulo">Site grátis por segmento</h2>
		<p>
			A oferta vale para qualquer nicho. Para segmentos com regras próprias de publicidade do conselho
			profissional, explico em páginas separadas o que o site precisa ter e o que ele não pode ter:
		</p>
		<ul>
			{#each nichePages as page (page.path)}
				<li><p><a href={page.path}>{page.anchor[0].toUpperCase() + page.anchor.slice(1)}</a></p></li>
			{/each}
		</ul>
		<WhatsAppCta {...whatsapp} />
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre o site grátis" />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Criação de sites profissionais sob medida' },
			{ href: services.landingPage.path, text: 'Landing pages para anúncios' },
			{ href: '/como-aparecer-no-google', text: 'Como colocar a sua empresa no Google' },
			{ href: '/seo-para-pequenas-empresas', text: 'SEO para pequenas empresas: plano de 90 dias' }
		]}
	/>

	<Contact {whatsapp} title="Consulte a disponibilidade" intro="Conte o que a sua empresa faz e em que região atende; eu respondo se há vaga no mês e quais seriam as páginas do seu site." />
</main>
