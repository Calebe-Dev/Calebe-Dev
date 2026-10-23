<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { absolute, faqNode, graph, personNode, serviceArea, webPageNode, websiteNode, type Faq as FaqItem } from '$lib/schema';
	import { careerPage, cityPages, person, regionPage, services } from '$lib/site';

	const path = '/';
	const title = 'Desenvolvedor full stack e consultor de SEO técnico - Calebe Araujo';
	const description =
		'Calebe Araujo, desenvolvedor full stack e consultor de SEO técnico em Sorocaba (SP): sites rápidos, auditoria de SEO e sistemas web para empresas.';

	const faqs: FaqItem[] = [
		{
			question: 'Quem é Calebe Araujo?',
			answer:
				'Calebe Araujo é desenvolvedor full stack e consultor de SEO técnico, baseado em Sorocaba (SP). Trabalha no Grupo OC, onde arquitetou um CRM em microsserviços que integra 25 sites, e cursa Análise e Desenvolvimento de Sistemas na Fatec Itu.'
		},
		{
			question: 'Qual a diferença entre contratar um consultor e uma agência de SEO?',
			answer:
				'Uma agência costuma dividir o trabalho entre atendimento, analistas e um time de desenvolvimento terceirizado. Como consultor independente e desenvolvedor, eu mesmo faço o diagnóstico e implemento as correções no código, o que encurta o caminho entre encontrar um problema e resolvê-lo.'
		},
		{
			question: 'Você atende empresas fora de Sorocaba?',
			answer:
				'Sim. Consultoria, auditoria e desenvolvimento são feitos de forma remota para empresas de todo o Brasil. Num raio de 90 km de Sorocaba, que inclui Itu, Indaiatuba, Jundiaí, Campinas e São Paulo, também é possível combinar reuniões presenciais.'
		},
		{
			question: 'Em quais tecnologias você desenvolve?',
			answer:
				'No front-end, uso principalmente Angular, Svelte e SvelteKit com TypeScript; no back-end, Node.js e Java com PostgreSQL; e na infraestrutura, Docker, AWS e Cloudflare. Para sites de conteúdo, também trabalho com WordPress e com o headless CMS Directus.'
		},
		{
			question: 'Você está disponível para vagas de emprego?',
			answer:
				'Sim. Estou aberto a vagas de desenvolvedor full stack, front-end Angular ou Svelte e desenvolvedor web com foco em SEO técnico, nos modelos remoto, híbrido ou presencial em Sorocaba e região.'
		}
	];

	const offers = Object.values(services).map((s) => ({
		'@type': 'Offer',
		itemOffered: { '@type': 'Service', name: s.name, url: absolute(s.path), areaServed: serviceArea }
	}));

	const jsonLd = graph(
		websiteNode(),
		webPageNode({ path, title, description, type: 'ProfilePage', mainEntity: 'pessoa' }),
		{
			...personNode(),
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Serviços de SEO, desenvolvimento web e consultoria',
				itemListElement: offers
			}
		},
		faqNode(path, faqs)
	);

	const regional = cityPages.filter((c) => c.city !== 'Sorocaba');
</script>

<Seo {title} {description} {path} {jsonLd} ogType="profile" />

<main id="conteudo">
	<h1>Desenvolvedor full stack e consultor de SEO técnico</h1>

	<p>
		Sou <strong>{person.name}</strong>, desenvolvedor full stack e consultor de SEO técnico em
		{person.city} ({person.region}). Construo sites e sistemas web rápidos, fáceis de indexar e
		pensados para gerar contatos, e atendo empresas de todo o Brasil de forma remota.
	</p>
	<p>
		No Grupo OC, arquitetei um CRM em microsserviços que integra 25 sites e, ao migrar sistemas
		legados para Angular e Svelte, reduzi o tempo de carregamento das páginas de 8 para 1 segundo.
		Antes disso, desenvolvi mais de 60 landing pages e sites institucionais com SEO técnico aplicado
		desde o código.
	</p>
	<p>
		<a href="#contato">Peça uma proposta</a>, <a href={person.whatsapp}>fale comigo pelo WhatsApp</a> ou,
		se você é recrutador, veja meu <a href={careerPage.path}>perfil profissional completo</a>.
	</p>

	<section id="servicos" aria-labelledby="servicos-titulo">
		<h2 id="servicos-titulo">Serviços de SEO, desenvolvimento web e consultoria</h2>
		<p>
			Trabalho na interseção entre código e busca orgânica: quem diagnostica o problema de SEO é a
			mesma pessoa que sabe corrigi-lo no código, sem intermediários.
		</p>

		<h3>Consultoria de SEO</h3>
		<p>
			Diagnóstico e correção do que impede o site de ser rastreado, indexado e bem posicionado:
			indexação, velocidade, dados estruturados e arquitetura de páginas, com acompanhamento no
			Search Console. <a href={services.consultoriaSeo.path}>Como funciona a consultoria de SEO</a>.
		</p>

		<h3>Auditoria de SEO</h3>
		<p>
			Relatório técnico, on-page e de conteúdo, com cada problema ordenado pelo impacto no negócio e a
			correção recomendada. <a href={services.auditoriaSeo.path}>O que a auditoria de SEO entrega</a>.
		</p>

		<h3>Criação de sites</h3>
		<p>
			Sites institucionais e landing pages que nascem otimizados: HTML semântico, carregamento rápido,
			acessibilidade e mensuração de conversões. <a href={services.criacaoDeSites.path}>Criação de sites profissionais</a>.
		</p>

		<h3>Otimização de sites</h3>
		<p>
			Para sites lentos ou instáveis: melhoria de Core Web Vitals (LCP, INP e CLS), peso de páginas e
			infraestrutura. <a href={services.otimizacaoDeSites.path}>Como acelerar um site lento</a>.
		</p>

		<h3>Desenvolvimento de sistemas web</h3>
		<p>
			CRMs, integrações entre sites, APIs REST e headless CMS, do banco de dados à nuvem.
			<a href={services.sistemasWeb.path}>Sistemas web sob medida</a>.
		</p>

		<h3>SEO para empresas B2B</h3>
		<p>
			Estratégia de busca orgânica para empresas que vendem para empresas, com páginas por solução e
			por segmento ligadas ao CRM. <a href={services.seoB2b.path}>SEO e geração de leads B2B</a>.
		</p>
	</section>

	<section id="resultados" aria-labelledby="resultados-titulo">
		<h2 id="resultados-titulo">Resultados em projetos reais</h2>
		<ul>
			<li>
				<strong>CRM em microsserviços integrando 25 sites</strong>, com headless CMS (Directus) e APIs
				REST centralizando o conteúdo e os leads da rede (Grupo OC).
			</li>
			<li>
				<strong>Carregamento de 8 s para 1 s</strong>, uma redução de 90%, na migração de sistemas
				legados para Angular e Svelte (Grupo OC).
			</li>
			<li>
				<strong>Mais de 60 landing pages e sites institucionais</strong> com SEO técnico, otimização de
				performance e mensuração de conversões (Alpha Company ADS).
			</li>
		</ul>

		<h3>Sites em produção em que trabalhei</h3>
		<ul>
			<li><a href="https://grupooc.com.br/">Grupo OC</a>: portal institucional do grupo.</li>
			<li><a href="https://planotimempresa.com.br/">Plano TIM Empresa</a>: planos corporativos com captação de leads integrada ao CRM.</li>
			<li><a href="https://linkdedicada.com.br/">Link Dedicada</a>: landing pages de link dedicado para empresas.</li>
			<li><a href="https://timcorporativo.com.br/">TIM Corporativo</a>: site de telefonia empresarial.</li>
			<li><a href="https://sorocabaindica.com.br/">Sorocaba Indica</a> e <a href="https://campinasindica.com.br/">Campinas Indica</a>: portais de buscas locais.</li>
			<li><a href="https://esquadriasmartins.com.br/">Esquadrias Martins</a>: vitrine de projetos de esquadrias.</li>
			<li><a href="https://bellemodaintima.com.br/">Belle Moda Íntima</a>: e-commerce com catálogo sincronizado.</li>
		</ul>
	</section>

	<section id="experiencia" aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência profissional</h2>
		<ul>
			<li>
				<strong>Desenvolvedor Full Stack, Grupo OC</strong> (<time datetime="2025-08">agosto de 2025</time> até o
				momento): CRM em microsserviços, migração para Angular e Svelte, infraestrutura com Docker e AWS.
			</li>
			<li>
				<strong>Desenvolvedor Web, Alpha Company ADS</strong> (<time datetime="2025-02">fevereiro</time> a
				<time datetime="2025-08">agosto de 2025</time>): mais de 60 landing pages e sites com SEO técnico.
			</li>
			<li>
				<strong>Estagiário de Desenvolvimento Web, QIplus</strong> (<time datetime="2024-05">maio de 2024</time> a
				<time datetime="2025-02">fevereiro de 2025</time>): aplicações web, integrações de API e automação com IA.
			</li>
		</ul>
		<p>Formação: Análise e Desenvolvimento de Sistemas, Fatec Itu (2023 a 2026).</p>
	</section>

	<section id="tecnologias" aria-labelledby="tecnologias-titulo">
		<h2 id="tecnologias-titulo">Tecnologias que uso</h2>
		<dl>
			<dt>Front-end</dt>
			<dd>Angular, Svelte e SvelteKit, TypeScript, JavaScript, HTML semântico e CSS.</dd>
			<dt>Back-end e dados</dt>
			<dd>Node.js, Java, Express, PostgreSQL, MongoDB e APIs REST.</dd>
			<dt>Infraestrutura</dt>
			<dd>Docker, AWS, Cloudflare, Linux, NGINX e GitHub Actions.</dd>
			<dt>CMS</dt>
			<dd>Directus (headless) e WordPress.</dd>
			<dt>SEO e mensuração</dt>
			<dd>Google Search Console, Lighthouse, PageSpeed Insights, Google Analytics, Google Tag Manager e Schema.org.</dd>
		</dl>
	</section>

	<section id="vagas" aria-labelledby="vagas-titulo">
		<h2 id="vagas-titulo">Para recrutadores: disponível para vagas de desenvolvedor</h2>
		<p>
			Estou aberto a vagas de desenvolvedor full stack, front-end Angular ou Svelte e desenvolvedor web
			com foco em SEO técnico e performance, nos modelos remoto, híbrido ou presencial em
			{person.city} e região. O histórico completo, com stack, resultados e formas de contato, está
			no meu <a href={careerPage.path}>perfil de desenvolvedor full stack em Sorocaba</a>.
		</p>
	</section>

	<section id="regiao" aria-labelledby="regiao-titulo">
		<h2 id="regiao-titulo">Atendimento em Sorocaba e num raio de 90 km</h2>
		<p>
			Atendo presencialmente em {person.city} e, num raio de cerca de 90 km, combino reuniões quando
			o projeto pede. A região inclui o eixo de Itu e Indaiatuba, Jundiaí, Campinas e a capital
			paulista. Para empresas de outras regiões, todo o trabalho é feito de forma remota.
		</p>
		<ul>
			<li><a href="/criacao-de-sites-sorocaba">Criação de sites em Sorocaba</a></li>
			<li><a href="/consultoria-seo-sorocaba">Consultoria de SEO em Sorocaba</a></li>
			{#each regional as page (page.path)}
				<li><a href={page.path}>{page.service} em {page.city}</a></li>
			{/each}
		</ul>
		<p><a href={regionPage.path}>Veja como funciona o atendimento por distância e as cidades atendidas</a>.</p>
	</section>

	<Faq {faqs} />

	<Contact
		title="Contato"
		intro="Para propostas de consultoria, auditoria de SEO ou desenvolvimento, e também para oportunidades de vaga, fale comigo por e-mail ou WhatsApp."
	/>
</main>
