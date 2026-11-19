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

	const path = guides.perfilEmpresa.path;
	const title = 'Perfil da Empresa no Google (Google Meu Negócio): como criar - Calebe Araujo';
	const description =
		'Como criar, verificar e otimizar o Perfil da Empresa no Google (o antigo Google Meu Negócio): categorias, serviços, fotos, avaliações e o que faz subir no mapa.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Quero ajuda com o Perfil da Empresa no Google. Minha empresa é: ',
		label: 'Falar sobre o Perfil da Empresa pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Perfil da Empresa no Google', path }
	];

	// Passo a passo de criação: a mesma lista alimenta o HTML e o HowTo do schema
	const passos = [
		{ nome: 'Acesse business.google.com', texto: 'com a conta Google que vai administrar a empresa. Use uma conta da empresa, e não a pessoal de um funcionário que pode sair.' },
		{ nome: 'Pesquise o nome da empresa', texto: 'antes de criar. Se o perfil já existir (o Google cria perfis a partir de dados públicos), peça acesso a ele em vez de criar um duplicado.' },
		{ nome: 'Escolha a categoria principal', texto: 'a que descreve o negócio, e não o que você gostaria de vender mais. "Dentista", e não "clínica de estética", se a maior parte do trabalho é odontologia.' },
		{ nome: 'Informe o endereço ou a área de atendimento', texto: 'Quem recebe clientes informa o endereço; quem vai até o cliente esconde o endereço e define as cidades ou bairros atendidos.' },
		{ nome: 'Adicione telefone e site', texto: 'iguais aos que estão no site e nas redes sociais. O link do site deve levar para a página mais relevante, não para uma página de anúncio.' },
		{ nome: 'Verifique o perfil', texto: 'pelo método que o Google oferecer para a sua empresa, como vídeo mostrando o local e a placa, ligação, mensagem ou e-mail. Só perfis verificados aparecem de forma estável.' }
	];

	const faqs: FaqItem[] = [
		{
			question: 'O Perfil da Empresa no Google é pago?',
			answer:
				'Não. Criar, verificar e manter o Perfil da Empresa no Google é gratuito. O Google cobra apenas por anúncios, que são um produto separado, e aparecer no mapa sem anúncio não depende de pagamento.'
		},
		{
			question: 'Google Meu Negócio e Perfil da Empresa no Google são a mesma coisa?',
			answer:
				'Sim. Google Meu Negócio (Google My Business) era o nome até 2021; hoje a ferramenta se chama Perfil da Empresa no Google (Google Business Profile). O perfil é gerenciado direto na busca, no app do Google Maps ou em business.google.com.'
		},
		{
			question: 'Posso ter Perfil da Empresa sem endereço comercial?',
			answer:
				'Pode. Quem atende na casa do cliente, como eletricistas, diaristas e técnicos, oculta o endereço e define uma área de atendimento. O que as regras do Google não permitem é usar endereço falso, escritório virtual ou caixa postal para aparecer em outra cidade.'
		},
		{
			question: 'Posso colocar a cidade ou palavras-chave no nome da empresa?',
			answer:
				'Não. As diretrizes do Google pedem que o nome seja o mesmo usado na fachada, nos documentos e com os clientes. Acrescentar "Sorocaba", "24 horas" ou "melhor preço" ao nome pode levar à suspensão do perfil, além de ser fácil de denunciar por concorrentes.'
		},
		{
			question: 'Quanto tempo leva para o perfil aparecer no Google Maps?',
			answer:
				'Depois da verificação, o perfil costuma aparecer em poucos dias. Aparecer bem posicionado nas buscas da cidade depende de relevância, distância e proeminência, e costuma levar semanas ou meses de fotos, avaliações e de um site alinhado ao perfil.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		howTo: {
			name: 'Como criar o Perfil da Empresa no Google',
			steps: passos.map((p) => ({ name: p.nome, text: `${p.nome} ${p.texto}` }))
		},
		article: { headline: 'Perfil da Empresa no Google: como criar e otimizar', type: 'Article' }
	});
</script>

<Seo {title} {description} {path} {jsonLd} ogType="article" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="como-aparecer-no-google" />
		<Breadcrumbs {crumbs} />

		<h1>Perfil da Empresa no Google: como criar e otimizar</h1>

		<p>
			O Perfil da Empresa no Google, que até 2021 se chamava Google Meu Negócio, é o cadastro gratuito
			que faz a sua empresa aparecer no Google Maps, no mapa da busca e no painel com telefone, horário,
			fotos e avaliações. Para negócios locais, é muitas vezes o primeiro lugar onde o cliente encontra
			a empresa, antes mesmo do site.
		</p>
		<p>
			Este guia mostra como criar e verificar o perfil, o que preencher em cada campo e o que realmente
			ajuda a empresa a subir no mapa. Para o panorama completo, com site e anúncios, veja
			<a href={guides.comoAparecer.path}>como colocar minha empresa no Google</a>.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="o-que-e-titulo">
		<h2 id="o-que-e-titulo">O que é o Perfil da Empresa no Google</h2>
		<p>
			É a ficha da empresa dentro do Google. Ela aparece em três lugares: no Google Maps, no bloco de
			mapa com três empresas que surge em buscas como "pizzaria perto de mim" e no painel à direita (ou
			no topo, no celular) quando alguém pesquisa o nome da empresa. O cadastro é o mesmo para os três:
			não existe um cadastro separado para o Maps.
		</p>
		<p>
			O perfil não substitui o site. Ele resolve a busca pelo tipo de negócio na cidade; o site resolve
			as buscas mais específicas, como um serviço ou uma dúvida, e é onde o cliente decide se confia na
			empresa. Os dois funcionam melhor juntos, com as mesmas informações.
		</p>
	</section>

	<section aria-labelledby="criar-titulo">
		<h2 id="criar-titulo">Como criar o Perfil da Empresa no Google, passo a passo</h2>
		<ol>
			{#each passos as passo (passo.nome)}
				<li><strong>{passo.nome}</strong> {passo.texto}</li>
			{/each}
		</ol>
		<p>
			Pelo celular, o caminho é o app do Google Maps: toque na foto da sua conta e escolha "Adicionar sua
			empresa". Os passos são os mesmos.
		</p>
	</section>

	<section aria-labelledby="otimizar-titulo">
		<h2 id="otimizar-titulo">Como otimizar o perfil, campo por campo</h2>
		<table>
			<caption>O que preencher no Perfil da Empresa no Google e por quê</caption>
			<thead>
				<tr>
					<th scope="col">Campo</th>
					<th scope="col">O que fazer</th>
					<th scope="col">Por que importa</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Nome</th>
					<td>Exatamente o nome da fachada, sem cidade ou palavra-chave</td>
					<td>Nome com palavra-chave viola as diretrizes e pode suspender o perfil</td>
				</tr>
				<tr>
					<th scope="row">Categoria principal</th>
					<td>A mais específica que descreve o negócio</td>
					<td>É o sinal mais forte de para quais buscas a empresa aparece</td>
				</tr>
				<tr>
					<th scope="row">Categorias adicionais</th>
					<td>Só as que descrevem serviços que a empresa realmente presta</td>
					<td>Ampliam as buscas em que o perfil pode aparecer</td>
				</tr>
				<tr>
					<th scope="row">Serviços ou produtos</th>
					<td>Um item por serviço, com descrição curta</td>
					<td>Ajudam o Google a ligar o perfil a buscas específicas</td>
				</tr>
				<tr>
					<th scope="row">Descrição</th>
					<td>O que a empresa faz, para quem e onde, em linguagem natural</td>
					<td>Convence quem lê; não é lugar para lista de palavras-chave</td>
				</tr>
				<tr>
					<th scope="row">Horários</th>
					<td>Horário normal e horários especiais em feriados</td>
					<td>Horário errado gera avaliação negativa e desconfiança</td>
				</tr>
				<tr>
					<th scope="row">Fotos</th>
					<td>Fachada, equipe, ambiente e trabalhos reais, atualizadas com frequência</td>
					<td>Fotos reais aumentam a confiança e o tempo no perfil</td>
				</tr>
				<tr>
					<th scope="row">Site</th>
					<td>Link para a página mais relevante do site, com o mesmo telefone e endereço</td>
					<td>Dados iguais no site e no perfil reforçam a identidade da empresa</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="ranking-titulo">
		<h2 id="ranking-titulo">O que faz uma empresa subir no Google Maps</h2>
		<p>
			O Google informa que os resultados locais dependem principalmente de três fatores: relevância (o
			quanto o perfil corresponde ao que foi pesquisado), distância (o quanto a empresa está perto de
			quem pesquisa) e proeminência (o quanto a empresa é conhecida, o que inclui avaliações, menções e o
			próprio site). A distância você não controla; os outros dois, sim:
		</p>
		<ul>
			<li><strong>Relevância:</strong> categoria certa, serviços cadastrados e um site com uma página para cada serviço.</li>
			<li><strong>Proeminência:</strong> avaliações reais e frequentes, respostas a todas elas, fotos novas e menções da empresa em outros sites da cidade.</li>
			<li><strong>Consistência:</strong> nome, endereço e telefone idênticos no perfil, no site, nas redes sociais e nos diretórios.</li>
		</ul>
		<p>
			Essa combinação de perfil e site é o que chamo de <a href={guides.seoLocal.path}>SEO local</a>. Em
			Sorocaba e região, é a base da minha <a href="/consultoria-seo-sorocaba">consultoria de SEO local</a>.
		</p>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="avaliacoes-titulo">
		<h2 id="avaliacoes-titulo">Avaliações: como conseguir e como responder</h2>
		<ul>
			<li><strong>Peça a todos os clientes atendidos,</strong> logo depois do serviço, com o link curto de avaliação que o próprio perfil gera.</li>
			<li><strong>Não compre nem troque avaliações por desconto:</strong> as regras do Google proíbem incentivos, e avaliações falsas podem ser removidas junto com outras legítimas.</li>
			<li><strong>Responda a todas,</strong> agradecendo as positivas e tratando as negativas com fatos, sem expor dados do cliente.</li>
			<li><strong>Peça que o cliente cite o serviço:</strong> uma avaliação que fala em "troca de telhado" ajuda o perfil a aparecer para essa busca.</li>
		</ul>
	</section>

	<section aria-labelledby="erros-titulo">
		<h2 id="erros-titulo">Erros que derrubam ou suspendem o perfil</h2>
		<ul>
			<li>Palavras-chave ou nome da cidade no nome da empresa.</li>
			<li>Endereço de escritório virtual, coworking sem atendimento ou casa de terceiros.</li>
			<li>Dois perfis para a mesma empresa no mesmo endereço.</li>
			<li>Mudar nome, endereço e categoria muitas vezes em pouco tempo.</li>
			<li>Avaliações compradas ou escritas por funcionários.</li>
		</ul>
		<p>
			Se o perfil foi suspenso, corrija o motivo antes de pedir a reativação pelo próprio painel; um
			pedido sem correção tende a ser negado.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre o Perfil da Empresa no Google" />

	<Related
		links={[
			{ href: guides.comoAparecer.path, text: 'Como colocar minha empresa no Google e na primeira página' },
			{ href: guides.seoLocal.path, text: 'SEO local: perfil, site e avaliações juntos' },
			{ href: '/consultoria-seo-sorocaba', text: 'SEO local e Google Meu Negócio em Sorocaba' },
			{ href: services.siteGratis.path, text: 'Site grátis para ligar ao seu perfil' },
			{ href: guides.pequenasEmpresas.path, text: 'Plano de SEO de 90 dias para pequenas empresas' }
		]}
	/>

	<Contact {whatsapp} title="Quer ajuda com o perfil da sua empresa?" intro="Envie o nome da empresa como aparece no Google e a cidade; eu verifico o perfil e digo o que corrigir primeiro." />
</main>
