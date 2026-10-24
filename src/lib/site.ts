// Fonte única dos dados da pessoa/site: usada no HTML, no JSON-LD e no sitemap.
// Manter NAP (nome, local, contato) idêntico em todo lugar é sinal de confiança de entidade.

export const SITE_URL = 'https://calebearaujo.com.br';

// Data da última revisão do conteúdo (lastmod do sitemap e "atualizado em" das páginas)
export const UPDATED = '2026-10-23';

export const person = {
	name: 'Calebe Araujo',
	fullName: 'Calebe Sousa de Araujo',
	jobTitle: 'Desenvolvedor Full Stack e Consultor de SEO Técnico',
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
	otimizacaoDeSites: { path: '/otimizacao-de-sites', name: 'Otimização de sites' },
	sistemasWeb: { path: '/desenvolvimento-de-sistemas-web', name: 'Desenvolvimento de sistemas web' },
	seoB2b: { path: '/seo-para-b2b', name: 'SEO para empresas B2B' }
} as const;

// Guias (cluster pages) da consultoria de SEO: respondem dúvidas reais e levam à auditoria/consultoria
export const guides = {
	siteNaoAparece: { path: '/site-nao-aparece-no-google', name: 'Site não aparece no Google' },
	seoParaIa: { path: '/seo-para-ia', name: 'SEO para IA' },
	seoAngular: { path: '/seo-para-sites-angular', name: 'SEO para sites Angular' }
} as const;

export const careerPage = { path: '/desenvolvedor-full-stack-sorocaba', name: 'Desenvolvedor full stack em Sorocaba' };
export const regionPage = { path: '/sorocaba-e-regiao', name: 'Atendimento em Sorocaba e região' };

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

// Palavras-chave de cada página (meta keywords e keywords do schema), do mapa de keywords da análise
export const pageKeywords: Record<string, string[]> = {
	'/': ['Calebe Araujo', 'desenvolvedor full stack', 'consultor de SEO técnico', 'Sorocaba', 'Angular', 'SvelteKit'],
	'/consultoria-seo': ['consultoria de SEO', 'consultor SEO', 'consultoria de SEO técnico', 'especialista em SEO', 'consultoria SEO para pequenas empresas', 'consultoria de SEO para WordPress'],
	'/auditoria-seo': ['auditoria de SEO', 'auditoria SEO técnica', 'auditoria SEO completa', 'diagnóstico de SEO'],
	'/criacao-de-sites': ['criação de sites', 'criação de sites profissionais', 'desenvolvimento de sites', 'landing page', 'site institucional'],
	'/otimizacao-de-sites': ['otimização de sites', 'site lento', 'Core Web Vitals', 'velocidade do site', 'PageSpeed'],
	'/desenvolvimento-de-sistemas-web': ['desenvolvimento de sistemas web', 'software sob medida', 'software personalizado', 'CRM personalizado', 'integração de sistemas', 'APIs REST'],
	'/seo-para-b2b': ['SEO B2B', 'SEO para empresas B2B', 'consultoria de SEO B2B', 'marketing B2B', 'geração de leads B2B', 'marketing industrial B2B'],
	'/desenvolvedor-full-stack-sorocaba': ['desenvolvedor full stack Sorocaba', 'desenvolvedor Angular', 'desenvolvedor Node.js', 'desenvolvedor web Sorocaba', 'currículo desenvolvedor full stack'],
	'/sorocaba-e-regiao': ['criação de sites região de Sorocaba', 'SEO interior de São Paulo', 'atendimento em Sorocaba e região'],
	'/criacao-de-sites-sorocaba': ['criação de sites Sorocaba', 'site para empresa em Sorocaba', 'desenvolvedor web Sorocaba'],
	'/consultoria-seo-sorocaba': ['consultoria de SEO Sorocaba', 'consultor de SEO Sorocaba', 'SEO em Sorocaba', 'SEO local Sorocaba', 'agência de SEO Sorocaba', 'Perfil da Empresa no Google Sorocaba'],
	'/criacao-de-sites-itu': ['criação de sites Itu', 'site para turismo em Itu', 'site para empresa em Itu'],
	'/criacao-de-sites-indaiatuba': ['criação de sites Indaiatuba', 'SEO Indaiatuba', 'marketing digital Indaiatuba'],
	'/criacao-de-sites-jundiai': ['criação de sites Jundiaí', 'site para empresa de logística', 'site industrial Jundiaí'],
	'/criacao-de-sites-campinas': ['criação de sites Campinas', 'desenvolvimento de sites Campinas', 'site profissional Campinas'],
	'/consultoria-seo-sao-paulo': ['consultoria de SEO São Paulo', 'consultor de SEO SP', 'SEO técnico São Paulo'],
	'/site-nao-aparece-no-google': ['site não aparece no Google', 'como indexar site no Google', 'site WordPress não aparece no Google', 'Google Search Console'],
	'/seo-para-ia': ['SEO para IA', 'GEO', 'como aparecer no ChatGPT', 'AI Overviews', 'SEO para ChatGPT'],
	'/seo-para-sites-angular': ['SEO Angular', 'Angular SSR', 'pré-renderização Angular', 'indexação Angular'],
	'/mapa-do-site': ['mapa do site', 'Calebe Araujo', 'páginas do site']
};

