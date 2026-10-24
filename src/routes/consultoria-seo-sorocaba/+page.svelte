<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/consultoria-seo-sorocaba';
	const title = 'Consultoria de SEO em Sorocaba: SEO local e técnico - Calebe Araujo';
	const description =
		'Consultoria de SEO em Sorocaba (SP): SEO técnico, SEO local e Perfil da Empresa no Google com um consultor que também desenvolve e corrige o site.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Sou de Sorocaba e quero melhorar o SEO do meu site. Meu site é: ',
		label: 'Falar sobre SEO em Sorocaba pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'Sorocaba', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'SEO local funciona para empresa sem loja física?',
			answer:
				'Funciona. O Perfil da Empresa no Google permite ocultar o endereço e definir uma área de atendimento, o que é o caso de prestadores que vão até o cliente. O site complementa com uma página para cada serviço e com os dados de contato idênticos aos do perfil.'
		},
		{
			question: 'Preciso de uma página para cada bairro de Sorocaba?',
			answer:
				'Na maioria dos casos, não. Páginas quase iguais trocando só o nome do bairro são tratadas pelo Google como spam e dividem a força do site. Uma página de bairro só se justifica quando há busca real por aquele bairro e algo específico para dizer, como uma unidade física ou um serviço que só existe ali.'
		},
		{
			question: 'Consultor de SEO ou agência de marketing digital em Sorocaba?',
			answer:
				'Uma agência de marketing digital em Sorocaba costuma reunir redes sociais, anúncios, design e SEO no mesmo contrato, o que faz sentido para quem quer terceirizar todo o marketing. Se a necessidade é aparecer no Google, com SEO técnico, SEO local e otimização do site, um consultor que também desenvolve resolve direto no código, sem intermediários. Os dois modelos podem trabalhar juntos: a agência cuida das campanhas e o consultor, da base técnica do site.'
		},
		{
			question: 'O trabalho de SEO local inclui o Perfil da Empresa no Google?',
			answer:
				'Sim. Categoria, área de atendimento, serviços, fotos e a consistência dos dados entre o perfil e o site fazem parte do SEO local, porque é o perfil que aparece no mapa, acima dos resultados orgânicos, em muitas buscas da cidade.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Consultoria de SEO em Sorocaba',
			serviceType: 'Consultoria de SEO',
			description,
			areaServed: city('Sorocaba')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Consultoria de SEO em Sorocaba: SEO local e técnico</h1>

		<p>
			Como consultor de SEO em Sorocaba, ajudo empresas da cidade e de Votorantim a aparecer melhor no
			Google, tanto no mapa das buscas locais quanto nos resultados orgânicos. A diferença de trabalhar
			comigo é que, além de diagnosticar, eu desenvolvo: as correções técnicas são feitas no próprio
			site, sem depender de outro fornecedor.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="busca-titulo">
		<h2 id="busca-titulo">Como as empresas de Sorocaba são encontradas no Google</h2>
		<p>
			Numa busca local, o Google costuma mostrar primeiro o mapa com três empresas, que vêm do Perfil
			da Empresa no Google, e depois os resultados orgânicos, que vêm dos sites. Uma estratégia de SEO
			local trabalha os dois ao mesmo tempo: o perfil para o mapa, o site para as buscas mais
			específicas e para convencer quem chega.
		</p>
		<p>
			Um exemplo de por que a pesquisa vem antes de tudo: quem digita "seo sorocaba" no Google recebe
			sugestões de um restaurante chamado Seo Barbecue, e não de serviços de marketing. Escolher
			palavras-chave sem olhar como as pessoas realmente pesquisam leva a páginas otimizadas para a
			busca errada.
		</p>
		<p>
			Quem procura SEO em Sorocaba também pesquisa por "agência de SEO" e "agência de marketing digital".
			Para essas empresas, a pergunta certa não é o tipo de fornecedor, e sim quem vai implementar as
			mudanças no site, porque é lá que a maior parte dos problemas de posicionamento aparece.
		</p>
	</section>

	<section aria-labelledby="ordem-titulo">
		<h2 id="ordem-titulo">SEO local: o que fazer primeiro</h2>
		<ol>
			<li><strong>Perfil da Empresa no Google completo:</strong> categoria principal correta, serviços, área de atendimento, fotos e horários.</li>
			<li><strong>Dados idênticos em todo lugar:</strong> nome, endereço e telefone iguais no site, no perfil e nos diretórios.</li>
			<li><strong>Uma página por serviço no site:</strong> é ela que aparece para a busca específica, como "conserto de ar-condicionado em Sorocaba".</li>
			<li><strong>Avaliações reais:</strong> pedir avaliações a clientes atendidos e responder a todas, positivas ou não.</li>
			<li><strong>Base técnica:</strong> site rápido no celular, indexado e com dados estruturados do negócio.</li>
		</ol>
	</section>

	<section aria-labelledby="nacional-titulo">
		<h2 id="nacional-titulo">Empresas de Sorocaba que vendem para todo o Brasil</h2>
		<p>
			Muitas empresas da cidade, principalmente indústrias e prestadores de serviço B2B, não dependem
			do cliente local. Para elas, o SEO local é secundário e o trabalho é de SEO técnico e de
			conteúdo para buscas nacionais, com páginas por solução e por segmento. Explico essa abordagem
			na página de <a href={services.seoB2b.path}>SEO para empresas B2B</a>.
		</p>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência com SEO local</h2>
		<p>
			Trabalhei na rede de portais de buscas locais Indica, com sites para Sorocaba, Campinas, Osasco,
			Guarulhos e São Paulo, em que cada portal organiza categorias e páginas para as buscas da
			própria cidade. Hoje, no Grupo OC, mantenho uma rede de 25 sites integrados a um CRM, o que me dá
			dados reais de quais páginas e buscas geram contatos.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO em Sorocaba" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Como funciona a consultoria de SEO técnico' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO do seu site' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites para empresas de Sorocaba' },
			{ href: '/criacao-de-sites-sorocaba', text: 'Um site novo para a sua empresa em Sorocaba' },
			{ href: '/consultoria-seo-sao-paulo', text: 'SEO para sites da capital paulista' },
			{ href: regionPage.path, text: 'Cidades atendidas na região' }
		]}
	/>

	<Contact {whatsapp} title="Fale sobre o SEO da sua empresa" intro="Envie o endereço do site e do Perfil da Empresa no Google e conte quais serviços você quer destacar." />
</main>
