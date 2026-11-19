<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { guides, regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/consultoria-seo-sorocaba';
	const title = 'SEO em Sorocaba: consultor e otimização de sites para o Google - Calebe Araujo';
	const description =
		'SEO em Sorocaba: otimização de sites, SEO local e Google Meu Negócio com um consultor que corrige o site no código. Uma alternativa à agência de SEO.';
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
			question: 'Quanto tempo leva para um site aparecer melhor no Google em Sorocaba?',
			answer:
				'Correções técnicas, como indexação e títulos, costumam aparecer no Search Console em duas a seis semanas. Subir para as primeiras posições em buscas locais com concorrência leva de três a seis meses, dependendo do estado do site, das avaliações no Perfil da Empresa e de quantas páginas de serviço precisam ser criadas.'
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
		<HeroMidia foto="consultoria-seo" />
		<Breadcrumbs {crumbs} />

		<h1>SEO em Sorocaba: consultor e otimização de sites para o Google</h1>

		<p>
			Como consultor de SEO em Sorocaba, faço a otimização de sites de empresas da cidade e de
			Votorantim para que apareçam melhor no Google, tanto no mapa das buscas locais quanto nos
			resultados orgânicos. A diferença de trabalhar
			comigo é que, além de diagnosticar, eu desenvolvo: as correções técnicas são feitas no próprio
			site, sem depender de outro fornecedor.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="busca-titulo">
		<h2 id="busca-titulo">Como as empresas de Sorocaba são encontradas no Google</h2>
		<p>
			Numa busca local, o Google costuma mostrar primeiro o mapa com três empresas, que vêm do Perfil
			da Empresa no Google (o antigo Google Meu Negócio), e depois os resultados orgânicos, que vêm dos sites. Uma estratégia de SEO
			local trabalha os dois ao mesmo tempo: o perfil para o mapa, o site para as buscas mais
			específicas e para convencer quem chega.
		</p>
		<p>
			Um exemplo de por que a pesquisa vem antes de tudo: quem digita "seo sorocaba" no Google recebe
			sugestões de um restaurante chamado Seo Barbecue, e não de serviços de marketing. Escolher
			palavras-chave sem olhar como as pessoas realmente pesquisam leva a páginas otimizadas para a
			busca errada.
		</p>
	</section>

	<section aria-labelledby="otimizacao-titulo">
		<h2 id="otimizacao-titulo">Otimização de sites em Sorocaba: o que entra no trabalho</h2>
		<p>
			Otimização de sites para SEO é o conjunto de correções que fazem o Google entender, indexar e
			posicionar as páginas de uma empresa. Em sites de empresas de Sorocaba, os problemas que mais
			encontro são sempre os mesmos, e todos são corrigidos direto no código:
		</p>
		<ul>
			<li><strong>Páginas que não indexam:</strong> noindex esquecido, canonical errado, conteúdo carregado só por JavaScript ou URLs duplicadas com e sem "www".</li>
			<li><strong>Um serviço sem página própria:</strong> tudo em uma página "Serviços", o que impede de ranquear para buscas como "manutenção de ar-condicionado em Sorocaba".</li>
			<li><strong>Title, meta description e H1 genéricos:</strong> "Home" ou só o nome da empresa, sem o serviço e a cidade.</li>
			<li><strong>Site lento no celular:</strong> tema pesado, imagens sem compressão e dezenas de scripts, o que piora as Core Web Vitals e faz o visitante desistir.</li>
			<li><strong>Dados do negócio inconsistentes:</strong> telefone e endereço diferentes no site e no Perfil da Empresa, e nenhum dado estruturado (schema LocalBusiness).</li>
		</ul>
		<p>
			Quando o problema principal é velocidade, o trabalho é o de
			<a href={services.otimizacaoDeSites.path}>otimização de sites lentos e Core Web Vitals</a>, com o caso
			real de um site que passou de 8 s para 1 s de carregamento.
		</p>
	</section>

	<section aria-labelledby="agencia-titulo">
		<h2 id="agencia-titulo">Agência de SEO em Sorocaba ou consultor?</h2>
		<p>
			Quem procura uma agência de SEO em Sorocaba normalmente quer a mesma coisa: aparecer no Google e
			receber contatos. Eu não sou uma agência: trabalho sozinho, como consultor e desenvolvedor. A
			diferença prática está em quem implementa as mudanças no site, porque é lá que a maior parte dos
			problemas de posicionamento aparece.
		</p>
		<table>
			<caption>Agência de SEO e consultor-desenvolvedor, lado a lado</caption>
			<thead>
				<tr>
					<th scope="col">Aspecto</th>
					<th scope="col">Agência de SEO</th>
					<th scope="col">Consultor que desenvolve</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Quem faz as correções</th>
					<td>Equipe de conteúdo; o código costuma depender do desenvolvedor do cliente</td>
					<td>O próprio consultor, no código do site</td>
				</tr>
				<tr>
					<th scope="row">Volume de conteúdo</th>
					<td>Alto, com redatores dedicados</td>
					<td>Menor, focado nas páginas que geram contato</td>
				</tr>
				<tr>
					<th scope="row">Contato</th>
					<td>Atendimento por gerente de conta</td>
					<td>Direto com quem executa</td>
				</tr>
				<tr>
					<th scope="row">Faz mais sentido quando</th>
					<td>A empresa precisa de muito conteúdo e campanhas todo mês</td>
					<td>O site tem problema técnico, é lento ou não tem página por serviço</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="manutencao-titulo">
		<h2 id="manutencao-titulo">Manutenção de sites em Sorocaba</h2>
		<p>
			SEO não termina na entrega. Atualizações de plugins, um formulário que para de enviar ou uma página
			nova publicada sem title derrubam o resultado sem ninguém perceber. Na manutenção, acompanho o
			Search Console todo mês, corrijo erros de indexação, mantenho o site rápido e publico as páginas
			novas já otimizadas. O ranqueamento de sites em Sorocaba depende dessa constância: quem corrige
			e mede todo mês passa à frente de quem otimizou uma vez só.
		</p>
	</section>

	<section aria-labelledby="ordem-titulo">
		<h2 id="ordem-titulo">SEO local e Google Meu Negócio em Sorocaba: o que fazer primeiro</h2>
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
			{ href: guides.comoAparecer.path, text: 'Guia: como colocar sua empresa no Google' },
			{ href: '/criacao-de-sites-sorocaba', text: 'Um site novo para a sua empresa em Sorocaba' },
			{ href: '/consultoria-seo-sao-paulo', text: 'SEO para sites da capital paulista' },
			{ href: regionPage.path, text: 'Cidades atendidas na região' }
		]}
	/>

	<Contact {whatsapp} title="Fale sobre o SEO da sua empresa" intro="Envie o endereço do site e do Perfil da Empresa no Google e conte quais serviços você quer destacar." />
</main>
