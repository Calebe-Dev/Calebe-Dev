<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { services, type WhatsApp } from '$lib/site';

	const path = services.otimizacaoDeSites.path;
	const title = 'Otimização de sites lentos e Core Web Vitals - Calebe Araujo';
	const description =
		'Otimização de sites lentos: diagnóstico de Core Web Vitals, imagens, scripts e infraestrutura. Caso real com carregamento reduzido de 8 s para 1 s.';
	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Meu site está lento. O endereço é: ',
		label: 'Pedir diagnóstico de velocidade pelo WhatsApp'
	};

	const crumbs = [{ name: 'Otimização de sites', path }];

	const faqs: FaqItem[] = [
		{
			question: 'A velocidade do site influencia no SEO?',
			answer:
				'Sim, mas não sozinha. Os Core Web Vitals fazem parte dos sinais de experiência de página que o Google considera. Eles não superam a relevância do conteúdo, mas funcionam como desempate entre páginas parecidas e afetam diretamente a conversão, porque visitantes abandonam páginas que demoram a carregar.'
		},
		{
			question: 'Como saber se o meu site está lento?',
			answer:
				'Teste a página no PageSpeed Insights e veja primeiro o bloco de dados de usuários reais, que mostra os Core Web Vitals medidos no Chrome. No Search Console, o relatório Core Web Vitals lista quais grupos de páginas estão bons, precisam de melhoria ou estão ruins.'
		},
		{
			question: 'Trocar de hospedagem resolve um site lento?',
			answer:
				'Só quando o gargalo é o servidor, o que aparece como um tempo alto até o primeiro byte. Na maioria dos sites lentos, o problema está nas imagens pesadas, no excesso de JavaScript e nos scripts de terceiros, e esses continuam lentos em qualquer hospedagem.'
		},
		{
			question: 'Por que a nota do PageSpeed muda a cada teste?',
			answer:
				'A nota vem de um teste de laboratório que varia com a rede, o servidor e o momento da medição. O que o Google usa para avaliar a experiência são os dados de campo, coletados de usuários reais ao longo de 28 dias, por isso eles são mais confiáveis que uma nota isolada.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Otimização de sites e Core Web Vitals',
			serviceType: 'Otimização de performance de sites',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<header class="hero">
		<Breadcrumbs {crumbs} />

		<h1>Otimização de sites lentos e Core Web Vitals</h1>

		<p>
			Otimização de sites é o trabalho de reduzir o tempo de carregamento e a instabilidade das páginas,
			medidos pelos Core Web Vitals do Google. Em um projeto real, a migração de sistemas legados para
			Angular e Svelte reduziu o carregamento das páginas de 8 para 1 segundo, uma melhora de 90%.
		</p>

		<WhatsAppCta {...whatsapp} />
	</header>

	<section aria-labelledby="causas-titulo">
		<h2 id="causas-titulo">Por que um site fica lento</h2>
		<p>As causas mais comuns, em ordem de frequência nos sites que analiso:</p>
		<ol>
			<li><strong>Imagens pesadas:</strong> fotos enviadas no tamanho original da câmera, sem compressão e sem dimensões definidas.</li>
			<li><strong>Excesso de JavaScript:</strong> page builders, sliders e plugins que carregam código em todas as páginas.</li>
			<li><strong>Scripts de terceiros:</strong> chats, pixels de anúncios e widgets que disputam o carregamento com o conteúdo.</li>
			<li><strong>Servidor sem cache:</strong> cada visita gera a página do zero, sem CDN nem cache de página.</li>
			<li><strong>Renderização no navegador:</strong> aplicações que só mostram o conteúdo depois de executar todo o JavaScript.</li>
		</ol>
	</section>

	<section aria-labelledby="cwv-titulo">
		<h2 id="cwv-titulo">O que são os Core Web Vitals</h2>
		<p>
			Core Web Vitals são as três métricas que o Google usa para medir a experiência de carregamento,
			interação e estabilidade de uma página. Os limites considerados bons, medidos em 75% das visitas,
			são estes:
		</p>
		<table>
			<caption>Core Web Vitals e os limites considerados bons pelo Google</caption>
			<thead>
				<tr>
					<th scope="col">Métrica</th>
					<th scope="col">O que mede</th>
					<th scope="col">Bom</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">LCP (Largest Contentful Paint)</th>
					<td>Tempo até o maior elemento visível carregar</td>
					<td>Até 2,5 s</td>
				</tr>
				<tr>
					<th scope="row">INP (Interaction to Next Paint)</th>
					<td>Tempo de resposta a cliques e toques</td>
					<td>Até 200 ms</td>
				</tr>
				<tr>
					<th scope="row">CLS (Cumulative Layout Shift)</th>
					<td>Quanto o layout se mexe durante o carregamento</td>
					<td>Até 0,1</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="metodo-titulo">
		<h2 id="metodo-titulo">Como faço a otimização</h2>
		<ol>
			<li><strong>Medir com dados reais:</strong> Search Console e dados de campo do Chrome mostram onde está o problema de verdade.</li>
			<li><strong>Encontrar o gargalo:</strong> no laboratório, identifico qual recurso atrasa o LCP ou trava as interações.</li>
			<li><strong>Corrigir pela causa:</strong> imagens, JavaScript, fontes e terceiros, na ordem do ganho esperado.</li>
			<li><strong>Infraestrutura:</strong> cache e CDN, como os da Cloudflare, para entregar as páginas perto do visitante.</li>
			<li><strong>Mudar a arquitetura quando necessário:</strong> páginas estáticas ou renderizadas no servidor quando a stack atual não tem como ser rápida.</li>
			<li><strong>Validar:</strong> acompanho os dados de campo nas semanas seguintes, porque eles levam 28 dias para refletir a mudança.</li>
		</ol>
		<WhatsAppCta {...whatsapp} />
	</section>

	<section aria-labelledby="wordpress-titulo">
		<h2 id="wordpress-titulo">Otimização de sites WordPress</h2>
		<p>
			Em WordPress, a lentidão quase sempre vem de temas multiuso e plugins demais. As correções que
			mais resolvem são remover plugins sem uso, trocar page builders pesados quando possível, ativar
			cache de página, servir imagens em formatos modernos e adiar scripts de terceiros. Quando o tema
			é o gargalo, comparo o custo de otimizá-lo com o de reconstruir as páginas principais.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre otimização de sites" />

	<Related
		links={[
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO com análise de performance' },
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico' },
			{ href: services.criacaoDeSites.path, text: 'Criação de sites rápidos desde o início' },
			{ href: services.sistemasWeb.path, text: 'Migração de sistemas legados' }
		]}
	/>

	<Contact {whatsapp} title="Descubra por que o seu site está lento" intro="Envie o endereço do site e as páginas que mais importam para o seu negócio." />
</main>
