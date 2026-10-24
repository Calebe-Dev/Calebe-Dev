<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/consultoria-seo-sao-paulo';
	const title = 'Consultoria de SEO em São Paulo - Calebe Araujo';
	const description =
		'Consultoria de SEO técnico para empresas de São Paulo: sites com muitas páginas, migrações e performance, com um consultor que também desenvolve.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Sou de São Paulo e quero melhorar o SEO do meu site. Meu site é: ',
		label: 'Falar sobre SEO em São Paulo pelo WhatsApp'
	};

	const crumbs = [
		{ name: 'Consultoria de SEO', path: services.consultoriaSeo.path },
		{ name: 'São Paulo', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Vale contratar um consultor de SEO de fora da capital?',
			answer:
				'Sim, porque SEO técnico é um trabalho feito no site, no Search Console e no código, e não depende de presença física. O que importa é a experiência com sites do porte e do tipo do seu. Para reuniões presenciais, Sorocaba fica ligada à capital pela Rodovia Castello Branco.'
		},
		{
			question: 'Páginas por bairro funcionam para SEO em São Paulo?',
			answer:
				'Funcionam quando a empresa tem presença real no bairro, como uma unidade, ou quando há busca específica por aquele bairro e conteúdo diferente para oferecer. Criar dezenas de páginas iguais trocando só o nome do bairro é tratado pelo Google como spam e tende a perder posições.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Consultoria de SEO em São Paulo',
			serviceType: 'Consultoria de SEO',
			description,
			areaServed: city('São Paulo')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Consultoria de SEO em São Paulo</h1>

		<p>
			Como consultor de SEO em SP, ofereço consultoria de SEO técnico para empresas da capital cujo site
			tem problemas que só se resolvem no código: muitas páginas, migrações, lentidão ou conteúdo que depende de JavaScript para
			aparecer. Sou desenvolvedor full stack, então o diagnóstico e a correção são feitos pela mesma
			pessoa.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="disputa-titulo">
		<h2 id="disputa-titulo">Por que o SEO em São Paulo é mais disputado</h2>
		<p>
			São Paulo é o maior mercado do país, e as buscas comerciais da capital reúnem mais concorrentes
			por resultado do que em qualquer outra cidade. Nas buscas locais, o mapa do Google mostra
			empresas próximas de quem pesquisa, o que fragmenta a disputa por região da cidade. Por isso,
			atacar diretamente termos genéricos, como o nome do serviço sozinho, costuma ser caro e lento.
			O caminho mais eficiente é a cauda longa: buscas mais específicas por solução, por segmento ou
			por etapa da compra, em que a concorrência é menor e quem pesquisa está mais perto de contratar.
		</p>
	</section>

	<section aria-labelledby="cauda-titulo">
		<h2 id="cauda-titulo">Da busca genérica à cauda longa: exemplos</h2>
		<p>
			Os exemplos abaixo mostram como a mesma área de atuação se desdobra em buscas mais específicas,
			com menos concorrência e quem pesquisa mais perto de contratar. Os termos são ilustrativos; os
			reais saem da pesquisa do seu mercado e do Search Console do seu site.
		</p>
		<table>
			<caption>Exemplos de buscas genéricas e de cauda longa em São Paulo</caption>
			<thead>
				<tr>
					<th scope="col">Busca genérica</th>
					<th scope="col">Cauda longa</th>
					<th scope="col">Por que é mais viável</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>contabilidade</td>
					<td>contabilidade para clínicas médicas em São Paulo</td>
					<td>Segmento definido e intenção clara de contratar</td>
				</tr>
				<tr>
					<td>software de gestão</td>
					<td>software de gestão para distribuidora de alimentos</td>
					<td>Poucas páginas respondem bem a esse recorte</td>
				</tr>
				<tr>
					<td>manutenção de ar-condicionado</td>
					<td>manutenção de ar-condicionado para escritórios na zona sul</td>
					<td>Combina serviço, público e região de atendimento real</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="desenvolvedor-titulo">
		<h2 id="desenvolvedor-titulo">Onde um consultor desenvolvedor faz diferença</h2>
		<ul>
			<li><strong>Sites com muitas páginas:</strong> portais, catálogos e redes de sites, onde problemas de indexação e canibalização se repetem em escala.</li>
			<li><strong>Migrações:</strong> troca de plataforma ou de domínio com mapa de redirecionamentos e acompanhamento da indexação.</li>
			<li><strong>Aplicações em Angular, React ou Vue:</strong> renderização no servidor ou geração estática para o conteúdo aparecer no HTML.</li>
			<li><strong>Performance:</strong> Core Web Vitals corrigidos na causa, não só com plugins de cache.</li>
		</ul>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência com portais da Grande São Paulo</h2>
		<p>
			Trabalhei na rede de portais de buscas locais Indica, que inclui o
			<a href="https://saopauloindica.com.br/">SP Indica</a>, o Osasco Indica e o Guarulhos Indica, com
			indexação de muitas rotas e organização de páginas para buscas locais em grande volume. No Grupo
			OC, mantenho uma rede de 25 sites integrada a um CRM próprio.
		</p>
	</section>

	<section aria-labelledby="atendimento-titulo">
		<h2 id="atendimento-titulo">Atendimento para a capital e a Grande São Paulo</h2>
		<p>
			O trabalho é feito de forma remota para empresas da capital e de cidades como Osasco, Barueri e
			Cotia, com reuniões por vídeo e acesso ao Search Console e ao código. Quando o projeto exige,
			combino um encontro presencial. O passo a passo está na página de
			<a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre SEO em São Paulo" />

	<Related
		links={[
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO técnica e completa' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de Core Web Vitals' },
			{ href: services.seoB2b.path, text: 'SEO para empresas B2B' },
			{ href: '/consultoria-seo-sorocaba', text: 'SEO local para empresas do interior' },
			{ href: regionPage.path, text: 'Atendimento na região de Sorocaba' }
		]}
	/>

	<Contact {whatsapp} title="Fale sobre o SEO do seu site" intro="Envie o endereço do site e conte o principal problema: queda de tráfego, migração ou lentidão." />
</main>
