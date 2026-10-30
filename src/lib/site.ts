// Fonte única dos dados da pessoa/site: usada no HTML, no JSON-LD e no sitemap.
// Manter NAP (nome, local, contato) idêntico em todo lugar é sinal de confiança de entidade.

export const SITE_URL = 'https://calebearaujo.com.br';

// Data da última revisão do conteúdo (lastmod do sitemap e "atualizado em" das páginas)
export const UPDATED = '2026-10-29';

// Datas completas (ISO 8601 com fuso de Brasília), formato que o Google pede nos dados estruturados
const HORARIO = 'T09:00:00-03:00';
// Publicação: relançamento do site em 23/10/2026; páginas criadas depois têm a própria data
const RELANCAMENTO = '2026-10-23';
const publicadaEm: Record<string, string> = {
	'/como-aparecer-no-google': '2026-10-24',
	'/guest-post': '2026-10-24',
	'/copywriter-seo': '2026-10-24',
	'/politica-de-privacidade': '2026-10-28',
	'/criacao-de-landing-page': '2026-10-29',
	'/seo-para-pequenas-empresas': '2026-10-29',
	'/migracao-de-site-sem-perder-seo': '2026-10-29',
	'/crm-personalizado': '2026-10-29'
};
export const datePublished = (path: string) => `${publicadaEm[path] ?? RELANCAMENTO}${HORARIO}`;
export const dateModified = `${UPDATED}${HORARIO}`;

export const person = {
	name: 'Calebe Araujo',
	fullName: 'Calebe Sousa de Araujo',
	jobTitle: 'Tech Lead, Desenvolvedor Full Stack e Consultor de SEO Técnico',
	city: 'Sorocaba',
	region: 'SP',
	country: 'BR',
	// Centro de Sorocaba: ponto de origem do raio de atendimento
	geo: { latitude: -23.5015, longitude: -47.4526 },
	serviceRadiusKm: 90,
	email: 'calebe.araujo101@gmail.com',
	phone: '+55 11 98838-5247',
	phoneDisplay: '(11) 98838-5247',
	whatsapp: 'https://wa.me/5511988385247',
	whatsappNumber: '5511988385247',
	linkedin: 'https://www.linkedin.com/in/calebe-dev',
	github: 'https://github.com/Calebe-Dev',
	cv: '/curriculo-calebe-araujo.pdf'
};

// Perfis oficiais (os mesmos do schema de autor nos sites da rede Grupo OC):
// alimentam o sameAs do JSON-LD e os links rel="me" do rodapé.
export const socials = [
	{ name: 'LinkedIn', handle: 'calebe-dev', url: 'https://www.linkedin.com/in/calebe-dev' },
	{ name: 'GitHub', handle: 'Calebe-Dev', url: 'https://github.com/Calebe-Dev' },
	{ name: 'YouTube', handle: '@calebe_tech', url: 'https://www.youtube.com/@calebe_tech' },
	{ name: 'Instagram', handle: '@calebe_original', url: 'https://www.instagram.com/calebe_original/' },
	{ name: 'Facebook', handle: 'calebearaujo101', url: 'https://www.facebook.com/calebearaujo101/' }
];

// Todo CTA de conversão leva ao WhatsApp. A mensagem pré-preenchida identifica a página
// de origem do lead (atribuição sem JavaScript).
export type WhatsApp = { message: string; label: string };

export const whatsappLink = (message: string) =>
	`https://wa.me/${person.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsApp: WhatsApp = {
	message: 'Olá, Calebe! Vim pelo seu site e quero conversar sobre um projeto.',
	label: 'Falar comigo no WhatsApp'
};

// Páginas de serviço (pillars). `path` é a URL canônica, sem barra final.
export const services = {
	consultoriaSeo: { path: '/consultoria-seo', name: 'Consultoria de SEO' },
	auditoriaSeo: { path: '/auditoria-seo', name: 'Auditoria de SEO' },
	criacaoDeSites: { path: '/criacao-de-sites', name: 'Criação de sites' },
	landingPage: { path: '/criacao-de-landing-page', name: 'Criação de landing page' },
	otimizacaoDeSites: { path: '/otimizacao-de-sites', name: 'Otimização de sites' },
	sistemasWeb: { path: '/desenvolvimento-de-sistemas-web', name: 'Desenvolvimento de sistemas web' },
	crmPersonalizado: { path: '/crm-personalizado', name: 'CRM personalizado' },
	seoB2b: { path: '/seo-para-b2b', name: 'SEO para empresas B2B' },
	guestPost: { path: '/guest-post', name: 'Guest post para SEO' }
} as const;

// Guias (cluster pages) da consultoria de SEO: respondem dúvidas reais e levam à auditoria/consultoria
export const guides = {
	siteNaoAparece: { path: '/site-nao-aparece-no-google', name: 'Site não aparece no Google' },
	seoParaIa: { path: '/seo-para-ia', name: 'SEO para IA' },
	seoAngular: { path: '/seo-para-sites-angular', name: 'SEO para sites Angular' },
	comoAparecer: { path: '/como-aparecer-no-google', name: 'Como aparecer no Google' },
	pequenasEmpresas: { path: '/seo-para-pequenas-empresas', name: 'SEO para pequenas empresas' },
	migracao: { path: '/migracao-de-site-sem-perder-seo', name: 'Migração de site sem perder SEO' }
} as const;

export const careerPage = { path: '/desenvolvedor-full-stack-sorocaba', name: 'Desenvolvedor full stack em Sorocaba' };
export const copywriterPage = { path: '/copywriter-seo', name: 'Copywriter SEO' };
export const regionPage = { path: '/sorocaba-e-regiao', name: 'Atendimento em Sorocaba e região' };

// Menu principal em grupos com subitens (cabeçalho e SiteNavigationElement do schema)
export type MenuItem = { href: string; label: string };
export const menu: (MenuItem & { itens: MenuItem[] })[] = [
	{
		href: '/#servicos',
		label: 'Serviços',
		itens: [
			{ href: services.consultoriaSeo.path, label: 'Consultoria de SEO' },
			{ href: services.auditoriaSeo.path, label: 'Auditoria de SEO' },
			{ href: services.criacaoDeSites.path, label: 'Criação de sites' },
			{ href: services.landingPage.path, label: 'Landing pages' },
			{ href: services.otimizacaoDeSites.path, label: 'Otimização de sites' },
			{ href: services.sistemasWeb.path, label: 'Sistemas web' },
			{ href: services.crmPersonalizado.path, label: 'CRM personalizado' },
			{ href: services.seoB2b.path, label: 'SEO B2B' },
			{ href: services.guestPost.path, label: 'Guest post' }
		]
	},
	{
		href: '/mapa-do-site#guias-titulo',
		label: 'Guias',
		itens: [
			{ href: '/como-aparecer-no-google', label: 'Como aparecer no Google' },
			{ href: '/seo-para-pequenas-empresas', label: 'SEO para pequenas empresas' },
			{ href: '/site-nao-aparece-no-google', label: 'Site não aparece no Google' },
			{ href: '/migracao-de-site-sem-perder-seo', label: 'Migração de site sem perder SEO' },
			{ href: '/seo-para-ia', label: 'SEO para IA' },
			{ href: '/seo-para-sites-angular', label: 'SEO para sites Angular' }
		]
	},
	{
		href: regionPage.path,
		label: 'Sorocaba e região',
		itens: [
			{ href: regionPage.path, label: 'Atendimento no raio de 90 km' },
			{ href: '/criacao-de-sites-sorocaba', label: 'Criação de sites em Sorocaba' },
			{ href: '/consultoria-seo-sorocaba', label: 'Consultoria de SEO em Sorocaba' },
			{ href: '/criacao-de-sites-itu', label: 'Criação de sites em Itu' },
			{ href: '/criacao-de-sites-indaiatuba', label: 'Sites e SEO em Indaiatuba' },
			{ href: '/criacao-de-sites-jundiai', label: 'Criação de sites em Jundiaí' },
			{ href: '/criacao-de-sites-campinas', label: 'Criação de sites em Campinas' },
			{ href: '/consultoria-seo-sao-paulo', label: 'Consultoria de SEO em São Paulo' }
		]
	},
	{
		href: careerPage.path,
		label: 'Para recrutadores',
		itens: [
			{ href: careerPage.path, label: 'Desenvolvedor full stack' },
			{ href: copywriterPage.path, label: 'Copywriter SEO' },
			{ href: person.cv, label: 'Currículo em PDF' }
		]
	}
];

// Cidades com página própria: só onde há busca real (autocomplete do Google, out/2026)
// e conteúdo local genuíno — as demais do raio de 90 km ficam na página regional e no schema.
export const cityPages = [
	// `anchor`: texto descritivo usado fora do hub regional (evita a mesma âncora exata em todo o site)
	{ path: '/criacao-de-sites-sorocaba', city: 'Sorocaba', service: 'Criação de sites', km: 0, anchor: 'sites para empresas de Sorocaba' },
	{ path: '/consultoria-seo-sorocaba', city: 'Sorocaba', service: 'Consultoria de SEO', km: 0, anchor: 'SEO local e técnico para empresas de Sorocaba' },
	{ path: '/criacao-de-sites-itu', city: 'Itu', service: 'Criação de sites', km: 31, anchor: 'sites para turismo, comércio e indústria em Itu' },
	{ path: '/criacao-de-sites-indaiatuba', city: 'Indaiatuba', service: 'Criação de sites e SEO', km: 52, anchor: 'site e SEO para empresas de Indaiatuba' },
	{ path: '/criacao-de-sites-jundiai', city: 'Jundiaí', service: 'Criação de sites', km: 67, anchor: 'sites para logística e indústria em Jundiaí' },
	{ path: '/criacao-de-sites-campinas', city: 'Campinas', service: 'Criação de sites', km: 77, anchor: 'como se destacar no Google em Campinas' },
	{ path: '/consultoria-seo-sao-paulo', city: 'São Paulo', service: 'Consultoria de SEO', km: 84, anchor: 'SEO técnico para empresas da capital paulista' }
] as const;

export const sitemapPage = { path: '/mapa-do-site', name: 'Mapa do site' };
export const privacyPage = { path: '/politica-de-privacidade', name: 'Política de privacidade' };

// Card de compartilhamento (Open Graph/Twitter, 1200×630) de cada página: scripts/gerar-cards.mjs
export const shareCard = (path: string) => `/images/compartilhamento/${path === '/' ? 'home' : path.slice(1)}.jpg`;
export const logo = { path: '/images/logo-marca-512.png', width: 512, height: 512 };

// Páginas agrupadas por assunto: alimentam o mapa do site e o minimapa do rodapé
export type SiteEntry = { href: string; text: string; note: string };

export const siteGroups: { id: string; title: string; entries: SiteEntry[] }[] = [
	{
		id: 'servicos',
		title: 'Serviços',
		entries: [
			{ href: services.consultoriaSeo.path, text: 'Consultoria de SEO técnico', note: 'diagnóstico, plano priorizado e correções no código' },
			{ href: services.auditoriaSeo.path, text: 'Auditoria de SEO', note: 'relatório técnico, on-page e de conteúdo, priorizado por impacto' },
			{ href: services.criacaoDeSites.path, text: 'Criação de sites profissionais', note: 'sites institucionais e landing pages rápidos e otimizados' },
			{ href: services.landingPage.path, text: 'Criação de landing page', note: 'páginas de uma oferta só, para anúncios e para a busca orgânica' },
			{ href: services.otimizacaoDeSites.path, text: 'Otimização de sites e Core Web Vitals', note: 'como acelerar um site lento' },
			{ href: services.sistemasWeb.path, text: 'Desenvolvimento de sistemas web', note: 'Software sob medida: CRMs, integrações, APIs REST e headless CMS' },
			{ href: services.crmPersonalizado.path, text: 'CRM personalizado', note: 'quando um CRM sob medida vale mais que um CRM pronto' },
			{ href: services.seoB2b.path, text: 'SEO para empresas B2B', note: 'geração de leads pela busca orgânica' },
			{ href: services.guestPost.path, text: 'Guest post para SEO', note: 'artigos convidados e backlinks dentro das regras do Google' }
		]
	},
	{
		id: 'guias',
		title: 'Guias de SEO',
		entries: [
			{ href: guides.comoAparecer.path, text: 'Como colocar minha empresa no Google', note: 'guia sem jargão: Google Meu Negócio, site e primeira página' },
			{ href: guides.pequenasEmpresas.path, text: 'SEO para pequenas empresas', note: 'o que fazer sozinho, o que contratar e um plano de 90 dias' },
			{ href: guides.siteNaoAparece.path, text: 'Site não aparece no Google', note: 'diagnóstico de indexação em 7 passos' },
			{ href: guides.migracao.path, text: 'Migração de site sem perder SEO', note: 'inventário de URLs, redirecionamentos 301 e o que testar antes e depois' },
			{ href: guides.seoParaIa.path, text: 'SEO para IA', note: 'como aparecer no ChatGPT e no AI Overviews' },
			{ href: guides.seoAngular.path, text: 'SEO para sites Angular', note: 'SSR, pré-renderização e indexação' }
		]
	},
	{
		id: 'cidades',
		title: 'Atendimento por cidade',
		entries: [
			{ href: regionPage.path, text: 'Sorocaba e região (raio de 90 km)', note: 'atendimento por distância e demanda por cidade' },
			...cityPages.map((c) => ({
				href: c.path,
				text: `${c.service} em ${c.city}`,
				note: c.km === 0 ? 'sede' : `cerca de ${c.km} km de Sorocaba`
			}))
		]
	},
	{
		id: 'perfil',
		title: 'Perfil profissional',
		entries: [
			{ href: careerPage.path, text: 'Desenvolvedor full stack em Sorocaba', note: 'experiência, stack e disponibilidade para vagas' },
			{ href: copywriterPage.path, text: 'Copywriter SEO', note: 'redação para sites e landing pages; vagas de copywriter e redator SEO' },
			{ href: person.cv, text: 'Currículo em PDF', note: 'versão para download' }
		]
	}
];

// Palavras-chave de cada página (meta keywords e keywords do schema), do mapa de keywords da análise
export const pageKeywords: Record<string, string[]> = {
	'/': ['Calebe Araujo', 'desenvolvedor full stack', 'tech lead', 'consultor de SEO técnico', 'especialista em SEO', 'desenvolvedor web', 'software sob medida', 'Sorocaba'],
	'/consultoria-seo': ['consultoria de SEO', 'consultor SEO', 'consultoria de SEO técnico', 'especialista em SEO', 'consultoria SEO para pequenas empresas', 'consultoria de SEO para WordPress'],
	'/auditoria-seo': ['auditoria de SEO', 'auditoria SEO técnica', 'auditoria SEO completa', 'auditoria de SEO online', 'checklist de SEO', 'análise de SEO do site'],
	'/criacao-de-sites': ['criação de sites', 'criação de sites profissionais', 'desenvolvimento de sites', 'site institucional', 'site para empresa'],
	'/criacao-de-landing-page': ['criação de landing page', 'landing page profissional', 'landing page de alta conversão', 'landing page para empresas', 'landing page preço', 'landing page para Google Ads'],
	'/otimizacao-de-sites': ['otimização de sites', 'site lento', 'Core Web Vitals', 'teste de velocidade do site', 'PageSpeed Insights'],
	'/desenvolvimento-de-sistemas-web': ['desenvolvimento de sistemas web', 'software sob medida', 'software personalizado', 'sistema personalizado para empresa', 'integração de sistemas', 'APIs REST'],
	'/crm-personalizado': ['CRM personalizado', 'CRM sob medida', 'quanto custa um CRM', 'CRM pronto ou personalizado', 'desenvolvimento de CRM', 'integração com CRM'],
	'/seo-para-b2b': ['SEO B2B', 'SEO para empresas B2B', 'consultoria de SEO B2B', 'marketing B2B', 'geração de leads B2B', 'marketing industrial B2B'],
	'/desenvolvedor-full-stack-sorocaba': ['desenvolvedor full stack Sorocaba', 'tech lead Sorocaba', 'desenvolvedor Angular', 'desenvolvedor Node.js', 'desenvolvedor web Sorocaba', 'currículo desenvolvedor full stack'],
	'/sorocaba-e-regiao': ['criação de sites região de Sorocaba', 'SEO interior de São Paulo', 'atendimento em Sorocaba e região'],
	'/criacao-de-sites-sorocaba': ['criação de sites Sorocaba', 'site para empresa em Sorocaba', 'desenvolvedor web Sorocaba'],
	'/consultoria-seo-sorocaba': ['consultoria de SEO Sorocaba', 'consultor de SEO Sorocaba', 'SEO em Sorocaba', 'SEO local Sorocaba', 'agência de SEO Sorocaba', 'Perfil da Empresa no Google Sorocaba'],
	'/criacao-de-sites-itu': ['criação de sites Itu', 'site para turismo em Itu', 'site para empresa em Itu'],
	'/criacao-de-sites-indaiatuba': ['criação de sites Indaiatuba', 'SEO Indaiatuba', 'marketing digital Indaiatuba'],
	'/criacao-de-sites-jundiai': ['criação de sites Jundiaí', 'site para empresa de logística', 'site industrial Jundiaí'],
	'/criacao-de-sites-campinas': ['criação de sites Campinas SP', 'desenvolvimento de sites Campinas', 'SEO local Campinas', 'como aparecer no Google em Campinas'],
	'/consultoria-seo-sao-paulo': ['consultoria de SEO São Paulo', 'consultoria SEO SP', 'consultor de SEO São Paulo', 'SEO técnico São Paulo', 'SEO Osasco'],
	'/site-nao-aparece-no-google': ['site não aparece no Google', 'meu site não aparece no Google', 'como indexar site no Google', 'colocar meu site no Google', 'site Hostinger não aparece no Google', 'Google Search Console'],
	'/migracao-de-site-sem-perder-seo': ['migração de site', 'migração de site sem perder SEO', 'redirecionamento 301', 'redesign de site', 'migração de site WordPress', 'troca de domínio SEO'],
	'/seo-para-ia': ['SEO para IA', 'SEO para inteligência artificial', 'GEO', 'GEO vs SEO', 'como aparecer no ChatGPT', 'AI Overviews'],
	'/seo-para-sites-angular': ['SEO Angular', 'Angular SSR', 'Angular Universal', 'Angular SSR vs SPA', 'pré-renderização Angular', 'indexação Angular'],
	'/seo-para-pequenas-empresas': ['SEO para pequenas empresas', 'consultoria SEO para pequenas empresas', 'SEO para empresas', 'plano de SEO', 'SEO local para pequenas empresas', 'quanto investir em SEO'],
	'/como-aparecer-no-google': ['como colocar minha empresa no Google', 'como aparecer no Google', 'como ficar em primeiro no Google', 'primeira página do Google', 'Google Meu Negócio', 'Perfil da Empresa no Google'],
	'/guest-post': ['guest post', 'guest post para SEO', 'artigo convidado', 'backlinks', 'link building', 'guest post e publieditorial'],
	'/copywriter-seo': ['copywriter SEO', 'redator SEO', 'vaga de copywriter', 'copywriter remoto', 'redação para landing pages', 'copywriter Sorocaba'],
	'/mapa-do-site': ['mapa do site', 'Calebe Araujo', 'páginas do site'],
	'/politica-de-privacidade': ['política de privacidade', 'LGPD', 'proteção de dados', 'Calebe Araujo']
};

