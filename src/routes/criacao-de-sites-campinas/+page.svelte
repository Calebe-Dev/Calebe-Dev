<script lang="ts">
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Related from '$lib/components/Related.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { city, pageGraph, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, regionPage, services } from '$lib/site';

	const path = '/criacao-de-sites-campinas';
	const title = 'Criação de sites em Campinas - Calebe Araujo';
	const description =
		'Criação e desenvolvimento de sites em Campinas (SP) com foco em performance e SEO técnico para se destacar num mercado com muitas agências.';
	const crumbs = [
		{ name: 'Criação de sites', path: services.criacaoDeSites.path },
		{ name: 'Campinas', path }
	];

	const faqs: FaqItem[] = [
		{
			question: 'Criação de sites e desenvolvimento de sites são a mesma coisa?',
			answer:
				'Na prática, os dois termos são usados para o mesmo serviço. Quando há diferença, "criação" costuma se referir ao projeto completo, com estrutura, conteúdo e visual, e "desenvolvimento" à programação e às integrações. No meu trabalho, as duas partes são feitas pela mesma pessoa.'
		},
		{
			question: 'Vale contratar um desenvolvedor de Sorocaba para um site em Campinas?',
			answer:
				'O que define a qualidade do site é o processo e a experiência de quem desenvolve, não a cidade. O projeto é conduzido de forma remota, com reuniões por vídeo, e a cerca de 80 km de distância um encontro presencial pode ser combinado quando o projeto exige.'
		},
		{
			question: 'Você atende Valinhos, Vinhedo e Hortolândia?',
			answer:
				'Sim. As cidades da região de Campinas são atendidas da mesma forma, com trabalho remoto e encontros presenciais pontuais quando necessários.'
		}
	];

	const jsonLd = pageGraph({
		path,
		title,
		description,
		crumbs,
		faqs,
		service: {
			name: 'Criação de sites em Campinas',
			serviceType: 'Criação de sites',
			description,
			areaServed: city('Campinas')
		}
	});
</script>

<Seo {title} {description} {path} {jsonLd} />

<main id="conteudo">
	<Breadcrumbs {crumbs} />

	<h1>Criação de sites em Campinas</h1>

	<p>
		Faço criação e desenvolvimento de sites em Campinas para empresas que precisam se destacar numa
		das buscas mais disputadas do interior paulista. A estratégia é competir onde muitas agências não
		competem: velocidade, estrutura técnica e uma página realmente útil para cada serviço.
	</p>

	<section aria-labelledby="mercado-titulo">
		<h2 id="mercado-titulo">Como se destacar no Google num mercado concorrido</h2>
		<p>
			Campinas é uma das maiores economias do estado, com universidades como a Unicamp e a PUC-Campinas
			e um polo de empresas de tecnologia. Isso significa muitas empresas disputando as mesmas buscas
			e muitas agências oferecendo sites. Na minha análise de concorrentes, encontrei agências com
			centenas de páginas de cidade praticamente iguais, trocando só o nome do município. Esse tipo de
			página é frágil: o Google o classifica como spam quando percebe o padrão.
		</p>
		<p>O que funciona melhor num mercado assim:</p>
		<ul>
			<li><strong>Páginas específicas:</strong> uma página por serviço, respondendo de verdade à busca, em vez de uma página genérica.</li>
			<li><strong>Velocidade:</strong> num empate de relevância, a página mais rápida e estável leva vantagem e converte mais.</li>
			<li><strong>Prova concreta:</strong> casos, números e quem está por trás da empresa, que diferenciam o site de textos genéricos.</li>
		</ul>
	</section>

	<section aria-labelledby="comparar-titulo">
		<h2 id="comparar-titulo">Como comparar propostas de criação de sites</h2>
		<p>
			Com tantas opções em Campinas, as propostas costumam chegar com preços e promessas difíceis de
			comparar. Estas perguntas ajudam a separar o que importa:
		</p>
		<ol>
			<li><strong>Quantas páginas o site terá e por quê?</strong> Uma proposta séria explica quais serviços ganham página própria e que busca cada uma atende.</li>
			<li><strong>Quem escreve os textos?</strong> Texto genérico produzido em massa raramente aparece no Google; vale saber se o conteúdo é pensado para o seu negócio.</li>
			<li><strong>Como será medida a velocidade?</strong> Peça o compromisso com Core Web Vitals no celular, não só uma nota de laboratório.</li>
			<li><strong>O site fica no seu nome?</strong> Domínio, hospedagem e acesso ao código ou ao painel devem ser da sua empresa.</li>
			<li><strong>Como os contatos serão medidos?</strong> Formulários e WhatsApp precisam registrar de que página veio cada contato.</li>
		</ol>
	</section>

	<section aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência em Campinas: Campinas Indica</h2>
		<p>
			Trabalhei no <a href="https://campinasindica.com.br/">Campinas Indica</a>, portal de buscas locais
			da cidade, com ajustes de performance e na organização das páginas para as buscas locais. É
			uma experiência direta com a forma como o público de Campinas pesquisa empresas e serviços.
		</p>
	</section>

	<section aria-labelledby="tecnologia-titulo">
		<h2 id="tecnologia-titulo">Sites para empresas de tecnologia e serviços</h2>
		<p>
			Empresas de tecnologia e de serviços B2B costumam precisar de mais que um site institucional:
			páginas por solução, integração dos formulários com o CRM e, às vezes, áreas logadas para
			clientes. Desenvolvo com SvelteKit para sites que precisam ser muito rápidos e com Angular para
			aplicações mais complexas, sempre com o conteúdo público entregue no HTML para ser bem indexado.
		</p>
		<p>
			Se você é recrutador de uma empresa de tecnologia da região, meu histórico está no
			<a href={careerPage.path}>perfil de desenvolvedor full stack</a>.
		</p>
	</section>

	<Faq {faqs} title="Perguntas frequentes sobre criação de sites em Campinas" />

	<Related
		links={[
			{ href: services.criacaoDeSites.path, text: 'Como é o processo de criação de um site' },
			{ href: '/criacao-de-sites-indaiatuba', text: 'Sites e SEO em Indaiatuba' },
			{ href: '/criacao-de-sites-jundiai', text: 'Criação de sites em Jundiaí' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites lentos' },
			{ href: regionPage.path, text: 'Atendimento na região de Sorocaba' }
		]}
	/>

	<Contact title="Peça uma proposta de site em Campinas" intro="Conte o que a sua empresa faz e quais serviços você quer que apareçam no Google." />
</main>
