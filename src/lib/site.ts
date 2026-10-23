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
	linkedin: 'https://www.linkedin.com/in/calebe-dev',
	github: 'https://github.com/Calebe-Dev',
	instagram: 'https://www.instagram.com/calebe.dev'
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

export const careerPage = { path: '/desenvolvedor-full-stack-sorocaba', name: 'Desenvolvedor full stack em Sorocaba' };
export const regionPage = { path: '/sorocaba-e-regiao', name: 'Atendimento em Sorocaba e região' };

// Cidades com página própria: só onde há busca real (autocomplete do Google, out/2026)
// e conteúdo local genuíno — as demais do raio de 90 km ficam na página regional e no schema.
export const cityPages = [
	{ path: '/criacao-de-sites-sorocaba', city: 'Sorocaba', service: 'Criação de sites', km: 0 },
	{ path: '/consultoria-seo-sorocaba', city: 'Sorocaba', service: 'Consultoria de SEO', km: 0 },
	{ path: '/criacao-de-sites-itu', city: 'Itu', service: 'Criação de sites', km: 31 },
	{ path: '/criacao-de-sites-indaiatuba', city: 'Indaiatuba', service: 'Criação de sites e SEO', km: 52 },
	{ path: '/criacao-de-sites-jundiai', city: 'Jundiaí', service: 'Criação de sites', km: 67 },
	{ path: '/criacao-de-sites-campinas', city: 'Campinas', service: 'Criação de sites', km: 77 },
	{ path: '/consultoria-seo-sao-paulo', city: 'São Paulo', service: 'Consultoria de SEO', km: 84 }
] as const;
