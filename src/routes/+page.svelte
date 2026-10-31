<script lang="ts">
	import HeroMidia from '$lib/components/HeroMidia.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { absolute, businessNode, faqNode, graph, imageNode, logoNode, navNode, personNode, serviceArea, webPageNode, websiteNode, type Faq as FaqItem } from '$lib/schema';
	import ProjetoRankingFixer from '$lib/components/ProjetoRankingFixer.svelte';
	import { careerPage, cityPages, guides, person, regionPage, services, type WhatsApp } from '$lib/site';

	const path = '/';
	const title = 'Calebe Araujo: desenvolvedor full stack e consultor de SEO';
	const description =
		'Calebe Araujo, desenvolvedor full stack e consultor de SEO técnico baseado em Sorocaba (SP): sites rápidos, auditoria de SEO e software sob medida.';

	const whatsapp: WhatsApp = {
		message: 'Olá, Calebe! Vim pelo seu site e quero uma proposta para o meu projeto.',
		label: 'Pedir uma proposta pelo WhatsApp'
	};

	const faqs: FaqItem[] = [
		{
			question: 'O que é SEO?',
			answer:
				'SEO (Search Engine Optimization, ou otimização para mecanismos de busca) é o trabalho de fazer um site aparecer nos resultados orgânicos do Google, os que não são anúncios, para as buscas de quem pode virar cliente. Envolve a parte técnica do site, o conteúdo de cada página e a reputação da marca, e hoje inclui também ser citado por ferramentas de IA, como o ChatGPT.'
		},
		{
			question: 'Quem é Calebe Araujo?',
			answer:
				'Calebe Araujo é tech lead, desenvolvedor full stack e consultor de SEO técnico, baseado em Sorocaba (SP). No Grupo OC, coordena o time de TI e arquitetou um CRM em microsserviços que integra 25 sites. Cursa Análise e Desenvolvimento de Sistemas na Fatec Itu.'
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
				'Sim. Estou aberto a vagas de tech lead, desenvolvedor full stack, front-end Angular ou Svelte e desenvolvedor web com foco em SEO técnico, nos modelos remoto, híbrido ou presencial em Sorocaba e região.'
		}
	];

	const offers = Object.values(services).map((s) => ({
		'@type': 'Offer',
		itemOffered: {
			'@type': 'Service',
			name: s.name,
			url: absolute(s.path),
			areaServed: [serviceArea, { '@type': 'Country', name: 'Brasil' }]
		}
	}));

	// Sites em produção (mesma lista visível na seção de resultados)
	const portfolio = [
		{ name: 'Grupo OC', url: 'https://grupooc.com.br/', description: 'portal institucional do grupo.' },
		{ name: 'Plano TIM Empresa', url: 'https://planotimempresa.com.br/', description: 'planos corporativos com captação de leads integrada ao CRM.' },
		{ name: 'Link Dedicada', url: 'https://linkdedicada.com.br/', description: 'landing pages de link dedicado para empresas.' },
		{ name: 'TIM Corporativo', url: 'https://timcorporativo.com.br/', description: 'site de telefonia empresarial.' },
		{ name: 'Sorocaba Indica', url: 'https://sorocabaindica.com.br/', description: 'portais de buscas locais.' },
		{ name: 'Campinas Indica', url: 'https://campinasindica.com.br/', description: 'portais de buscas locais.' },
		{ name: 'Esquadrias Martins', url: 'https://esquadriasmartins.com.br/', description: 'vitrine de projetos de esquadrias.' },
		{ name: 'Belle Moda Íntima', url: 'https://bellemodaintima.com.br/', description: 'e-commerce com catálogo sincronizado.' }
	];

	const jsonLd = graph(
		websiteNode(),
		navNode(),
		logoNode(),
		businessNode(),
		imageNode(path, title),
		webPageNode({ path, title, description, aboutPerson: true }),
		{
			...personNode(),
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Serviços de SEO, desenvolvimento web e consultoria',
				itemListElement: offers
			}
		},
		faqNode(path, faqs),
		{
			'@type': 'ItemList',
			'@id': `${absolute(path)}#portfolio`,
			name: 'Sites em produção em que trabalhei',
			itemListElement: portfolio.map((site, i) => ({
				'@type': 'ListItem',
				position: i + 1,
				item: {
					'@type': 'WebSite',
					name: site.name,
					url: site.url,
					description: site.description,
					contributor: { '@id': `${absolute('/')}#pessoa` }
				}
			}))
		}
	);

</script>

<Seo {title} {description} {path} {jsonLd} ogType="profile" />

<main id="conteudo">
	<header class="hero">
		<HeroMidia foto="home" video="rede" />
		<h1>Desenvolvedor full stack e consultor de SEO técnico</h1>

		<p>
			Sou <strong>{person.name}</strong>, desenvolvedor full stack e consultor de SEO técnico baseado em
			{person.city} ({person.region}). Em palavras simples: ajudo empresas a
			<a href={guides.comoAparecer.path}>aparecer no Google</a> e construo sites e sistemas sob medida,
			rápidos e pensados para trazer clientes. Atendo empresas de todo o Brasil de forma remota, da
			<a href={services.consultoriaSeo.path}>consultoria de SEO técnico</a> ao desenvolvimento do site.
		</p>
		<p>
			No Grupo OC, atuo como tech lead e coordeno o time de TI. Lá, arquitetei um CRM em microsserviços
			que integra 25 sites e, ao migrar sistemas legados para Angular e Svelte, reduzi o tempo de
			carregamento das páginas de 8 para 1 segundo.
			Antes disso, desenvolvi mais de 60 landing pages e sites institucionais com SEO técnico aplicado
			desde o código.
		</p>
		<WhatsAppCta {...whatsapp} />
		<p>
			Se você é recrutador, veja meu <a href={careerPage.path}>perfil profissional completo</a> ou
			<a href={person.cv} download type="application/pdf">baixe o currículo em PDF</a>.
		</p>
	</header>

	<section id="servicos" aria-labelledby="servicos-titulo">
		<h2 id="servicos-titulo">Serviços de SEO, desenvolvimento web e consultoria</h2>
		<p>
			Trabalho na interseção entre código e busca orgânica: como desenvolvedor web e especialista em
			SEO, quem diagnostica o problema é a mesma pessoa que sabe corrigi-lo no código, sem
			intermediários.
		</p>

		<h3>Consultoria de SEO</h3>
		<p>
			Diagnóstico e correção do que impede o site de ser rastreado, indexado e bem posicionado:
			indexação, velocidade, palavras-chave, dados estruturados e arquitetura de páginas, para
			aumentar o tráfego orgânico com acompanhamento no Search Console. Inclui preparar o site para
			ser citado por ferramentas de IA, como o ChatGPT (<a href={guides.seoParaIa.path}>SEO para IA</a>).
			<a href={services.consultoriaSeo.path}>Como funciona a consultoria de SEO</a>.
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

		<h3>Site grátis para empresas</h3>
		<p>
			Para empresas de qualquer nicho: crio e hospedo um site de até 5 páginas, otimizado para o Google,
			sem custo no primeiro ano, e a empresa paga só o domínio. São até 5 sites gratuitos por mês.
			<a href={services.siteGratis.path}>Como funciona o site grátis</a>.
		</p>

		<h3>Otimização de sites</h3>
		<p>
			Para sites lentos ou instáveis: melhoria de Core Web Vitals (LCP, INP e CLS), peso de páginas e
			infraestrutura. <a href={services.otimizacaoDeSites.path}>Como acelerar um site lento</a>.
		</p>

		<h3>Sistemas web e software sob medida</h3>
		<p>
			CRMs, integrações entre sistemas, APIs REST e headless CMS, construídos a partir do processo da
			sua empresa, do banco de dados à nuvem.
			<a href={services.sistemasWeb.path}>Desenvolvimento de software sob medida</a>.
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

	<ProjetoRankingFixer />

	<section id="experiencia" aria-labelledby="experiencia-titulo">
		<h2 id="experiencia-titulo">Experiência profissional</h2>
		<ul>
			<li>
				<strong>Fundador, Ranking Fixer</strong> (<time datetime="2026-10">outubro de 2026</time> até o
				momento): consultoria de SEO técnico em inglês para empresas de outros países, em
				<a href="https://rankingfixer.com/" hreflang="en">rankingfixer.com</a>.
			</li>
			<li>
				<strong>Tech Lead e Desenvolvedor Full Stack, Grupo OC</strong> (<time datetime="2025-08">agosto de 2025</time> até o
				momento): coordenação do time de TI, CRM em microsserviços, migração para Angular e Svelte,
				infraestrutura com Docker e AWS.
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
			Estou aberto a vagas de tech lead, desenvolvedor full stack, front-end Angular ou Svelte e
			desenvolvedor web com foco em SEO técnico e performance, nos modelos remoto, híbrido ou presencial em
			{person.city} e região. O histórico completo, com stack, resultados e formas de contato, está
			no meu <a href={careerPage.path}>perfil de desenvolvedor full stack em Sorocaba</a>.
		</p>
		<p><a href={person.cv} download type="application/pdf">Baixar currículo em PDF</a></p>
	</section>

	<section id="regiao" aria-labelledby="regiao-titulo">
		<h2 id="regiao-titulo">Atendimento em Sorocaba e num raio de 90 km</h2>
		<p>
			Atendo presencialmente em {person.city} e, num raio de cerca de 90 km, combino reuniões quando
			o projeto pede. A região inclui o eixo de Itu e Indaiatuba, Jundiaí, Campinas e a capital
			paulista. Para empresas de outras regiões, todo o trabalho é feito de forma remota.
		</p>
		<ul>
			{#each cityPages as page (page.path)}
				<li><p><a href={page.path}>{page.anchor[0].toUpperCase() + page.anchor.slice(1)}</a></p></li>
			{/each}
		</ul>
		<p><a href={regionPage.path}>Veja como funciona o atendimento por distância e as cidades atendidas</a>.</p>
	</section>

	<Faq {faqs} />

	<Contact
		{whatsapp}
		title="Contato"
		intro="Para propostas de consultoria, auditoria de SEO ou desenvolvimento, e também para oportunidades de vaga, fale comigo pelo WhatsApp."
	/>
</main>
