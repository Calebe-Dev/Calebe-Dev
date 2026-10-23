<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { services } from '$lib/site';

	const path = services.auditoriaSeo.path;
	const title = 'Auditoria de SEO técnica e completa - Calebe Araujo';
	const description =
		'Auditoria de SEO técnica, on-page e de conteúdo, com cada problema priorizado pelo impacto no negócio e a correção recomendada para o seu site.';
	const crumbs = [{ name: 'Auditoria de SEO', path }];

	const faqs: FaqItem[] = [
		{
			question: 'Uma auditoria de SEO gratuita resolve?',
			answer:
				'Ferramentas gratuitas, como o PageSpeed Insights e o próprio Search Console, mostram sintomas e são um bom ponto de partida. O que elas não fazem é separar falsos alertas dos problemas reais, explicar a causa no código e ordenar as correções pelo impacto no negócio, que é o que uma auditoria feita por especialista entrega.'
		},
		{
			question: 'Com que frequência devo fazer uma auditoria de SEO?',
			answer:
				'Uma auditoria completa por ano é uma boa referência para sites estáveis. Além disso, vale auditar antes e depois de mudanças grandes, como migração de plataforma, troca de domínio ou redesign, e sempre que houver uma queda de tráfego orgânico sem causa clara.'
		},
		{
			question: 'O que é canibalização de palavras-chave?',
			answer:
				'Canibalização é quando duas ou mais páginas do mesmo site disputam a mesma busca. O Google alterna entre elas, nenhuma consolida a posição e o site perde força. A correção costuma ser unir as páginas, redirecionar uma para a outra ou diferenciar a intenção de cada uma.'
		},
		{
			question: 'A auditoria inclui a correção dos problemas?',
			answer:
				'A auditoria entrega o diagnóstico e o plano de correção. A implementação pode ser feita por mim, já que sou desenvolvedor, ou pelo seu time ou fornecedor, seguindo as recomendações e os critérios de aceite de cada item do relatório.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Auditoria de SEO técnica e completa',
			serviceType: 'Auditoria de SEO',
			description
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<Breadcrumbs {crumbs} />

	<h1>Auditoria de SEO técnica e completa</h1>

	<p>
		Uma auditoria de SEO é um diagnóstico do site em três camadas: técnica, on-page e de conteúdo. O
		resultado não é uma lista com centenas de alertas de ferramenta, e sim um plano com os problemas
		que realmente custam tráfego e contatos, cada um com evidência, correção e prioridade.
	</p>

	<section aria-labelledby="camadas-titulo">
		<h2 id="camadas-titulo">O que é analisado na auditoria de SEO</h2>

		<h3>Camada técnica</h3>
		<ul>
			<li>Códigos de status, cadeias de redirecionamento e páginas de erro.</li>
			<li>robots.txt, sitemap.xml, canonical e diretivas de indexação, como noindex.</li>
			<li>Renderização: se o conteúdo principal está no HTML ou depende de JavaScript para aparecer.</li>
			<li>Core Web Vitals com dados de campo (CrUX) e de laboratório (Lighthouse).</li>
			<li>Peso de imagens, scripts de terceiros e configuração de cache.</li>
		</ul>

		<h3>Camada on-page</h3>
		<ul>
			<li>Title, meta description e H1 de cada página, e se eles correspondem à busca que a página quer atender.</li>
			<li>Hierarquia de headings, links internos e textos âncora.</li>
			<li>Dados estruturados (JSON-LD): sintaxe, campos obrigatórios e coerência com o conteúdo visível.</li>
			<li>Texto alternativo e dimensões das imagens.</li>
		</ul>

		<h3>Camada de conteúdo</h3>
		<ul>
			<li>Intenção de busca: se cada página responde ao que a pessoa procura.</li>
			<li>Canibalização entre páginas que disputam a mesma palavra-chave.</li>
			<li>Páginas finas, duplicadas ou geradas em massa, que o Google trata como baixa qualidade.</li>
			<li>Sinais de experiência e autoria: quem está por trás do site e por que confiar nele.</li>
		</ul>
	</section>

	<section aria-labelledby="relatorio-titulo">
		<h2 id="relatorio-titulo">Como é o relatório da auditoria</h2>
		<p>
			Cada item do relatório segue o mesmo formato, para que qualquer pessoa do time saiba o que fazer
			e em que ordem. Os exemplos abaixo são ilustrativos:
		</p>
		<table>
			<caption>Exemplos de itens de um relatório de auditoria de SEO</caption>
			<thead>
				<tr>
					<th scope="col">Achado</th>
					<th scope="col">Evidência</th>
					<th scope="col">Correção</th>
					<th scope="col">Prioridade</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Página de serviço fora do índice</td>
					<td>Meta robots com noindex herdado do tema</td>
					<td>Remover a diretiva e solicitar indexação</td>
					<td>Alta</td>
				</tr>
				<tr>
					<td>LCP acima de 4 segundos no celular</td>
					<td>Imagem principal de 1,5 MB carregada com lazy loading</td>
					<td>Comprimir, definir dimensões e carregar sem atraso</td>
					<td>Alta</td>
				</tr>
				<tr>
					<td>Duas páginas para a mesma busca</td>
					<td>Search Console alterna as URLs na mesma consulta</td>
					<td>Unificar o conteúdo e redirecionar com 301</td>
					<td>Média</td>
				</tr>
			</tbody>
		</table>
	</section>

	<section aria-labelledby="ferramenta-titulo">
		<h2 id="ferramenta-titulo">Auditoria por ferramenta ou feita por especialista</h2>
		<p>
			Ferramentas de SEO são ótimas para levantar sintomas, mas tratam todos os alertas com o mesmo
			peso. Um título com 61 caracteres e uma página de vendas fora do índice aparecem na mesma lista.
			Na auditoria feita por especialista, cada alerta é confirmado no site real, a causa é encontrada
			no código ou no CMS e a ordem das correções segue o que move o negócio.
		</p>
	</section>

	<section aria-labelledby="quando-titulo">
		<h2 id="quando-titulo">Quando fazer uma auditoria de SEO</h2>
		<ul>
			<li>Antes de migrar de plataforma, trocar de domínio ou refazer o layout do site.</li>
			<li>Depois de uma queda de tráfego orgânico sem explicação.</li>
			<li>Ao assumir um site que outra equipe construiu.</li>
			<li>Antes de investir em produção de conteúdo, para não construir sobre uma base com falhas.</li>
		</ul>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre auditoria de SEO" />

	<Related
		links={[
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico com implementação' },
			{ href: services.otimizacaoDeSites.path, text: 'Como resolver um site lento' },
			{ href: services.criacaoDeSites.path, text: 'Sites que já nascem otimizados para o Google' },
			{ href: '/consultoria-seo-sorocaba', text: 'SEO para empresas de Sorocaba' }
		]}
	/>

	<Contact title="Peça a auditoria do seu site" intro="Envie o endereço do site e conte o que mudou recentemente: queda de tráfego, migração ou um projeto novo." />
</main>
