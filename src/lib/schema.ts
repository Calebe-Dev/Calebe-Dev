// Construtores de JSON-LD (schema.org). Cada página monta um @graph com estes nós;
// o conteúdo marcado deve ser sempre o mesmo que está visível no HTML.
import { SITE_URL, UPDATED, person } from './site';

export type Faq = { question: string; answer: string };
export type Crumb = { name: string; path: string };

const PERSON_ID = `${SITE_URL}/#pessoa`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const absolute = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

// Raio de atendimento: 90 km a partir do centro de Sorocaba
export const serviceArea = {
	'@type': 'GeoCircle',
	geoMidpoint: { '@type': 'GeoCoordinates', ...person.geo },
	geoRadius: person.serviceRadiusKm * 1000
};

export const city = (name: string) => ({
	'@type': 'City',
	name,
	containedInPlace: { '@type': 'State', name: 'São Paulo' }
});

export const personNode = () => ({
	'@type': 'Person',
	'@id': PERSON_ID,
	name: person.name,
	alternateName: person.fullName,
	url: `${SITE_URL}/`,
	jobTitle: person.jobTitle,
	email: `mailto:${person.email}`,
	telephone: person.phone,
	address: {
		'@type': 'PostalAddress',
		addressLocality: person.city,
		addressRegion: person.region,
		addressCountry: person.country
	},
	worksFor: { '@type': 'Organization', name: 'Grupo OC', url: 'https://grupooc.com.br/' },
	alumniOf: { '@type': 'CollegeOrUniversity', name: 'Fatec Itu' },
	knowsAbout: [
		'SEO técnico',
		'Core Web Vitals',
		'Dados estruturados',
		'Criação de sites',
		'Desenvolvimento full stack',
		'Angular',
		'Svelte',
		'SvelteKit',
		'TypeScript',
		'Node.js',
		'Java',
		'PostgreSQL',
		'Docker',
		'AWS',
		'Cloudflare',
		'Microsserviços',
		'Acessibilidade web'
	],
	sameAs: [person.linkedin, person.github, person.instagram]
});

export const websiteNode = () => ({
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: `${SITE_URL}/`,
	name: person.name,
	inLanguage: 'pt-BR',
	publisher: { '@id': PERSON_ID }
});

export const webPageNode = (opts: {
	path: string;
	title: string;
	description: string;
	type?: 'WebPage' | 'ProfilePage' | 'CollectionPage';
	breadcrumb?: boolean;
	// 'pessoa' (home/perfil) ou 'servico' (páginas de serviço): entidade principal da página
	mainEntity?: 'pessoa' | 'servico';
}) => {
	const url = absolute(opts.path);
	const main = opts.mainEntity === 'pessoa' ? PERSON_ID : opts.mainEntity === 'servico' ? `${url}#servico` : null;
	return {
		'@type': opts.type ?? 'WebPage',
		'@id': `${url}#pagina`,
		url,
		name: opts.title,
		description: opts.description,
		inLanguage: 'pt-BR',
		isPartOf: { '@id': WEBSITE_ID },
		author: { '@id': PERSON_ID },
		dateModified: UPDATED,
		...(main ? { mainEntity: { '@id': main } } : {}),
		...(opts.breadcrumb ? { breadcrumb: { '@id': `${url}#trilha` } } : {})
	};
};

export const breadcrumbNode = (path: string, crumbs: Crumb[]) => ({
	'@type': 'BreadcrumbList',
	'@id': `${absolute(path)}#trilha`,
	itemListElement: [{ name: 'Início', path: '/' }, ...crumbs].map((c, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: c.name,
		item: absolute(c.path)
	}))
});

export const serviceNode = (opts: {
	path: string;
	name: string;
	description: string;
	serviceType: string;
	areaServed?: object | object[];
	audience?: string;
}) => ({
	'@type': 'Service',
	'@id': `${absolute(opts.path)}#servico`,
	name: opts.name,
	serviceType: opts.serviceType,
	description: opts.description,
	url: absolute(opts.path),
	provider: { '@id': PERSON_ID },
	areaServed: opts.areaServed ?? [serviceArea, { '@type': 'Country', name: 'Brasil' }],
	...(opts.audience ? { audience: { '@type': 'BusinessAudience', audienceType: opts.audience } } : {})
});

export const faqNode = (path: string, faqs: Faq[]) => ({
	'@type': 'FAQPage',
	'@id': `${absolute(path)}#perguntas-frequentes`,
	mainEntity: faqs.map((f) => ({
		'@type': 'Question',
		name: f.question,
		acceptedAnswer: { '@type': 'Answer', text: f.answer }
	}))
});

export const graph = (...nodes: object[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

// Grafo completo de uma subpágina: site + pessoa + página + trilha + serviço + FAQ
export const pageGraph = (opts: {
	path: string;
	title: string;
	description: string;
	crumbs: Crumb[];
	type?: 'WebPage' | 'ProfilePage' | 'CollectionPage';
	service?: Omit<Parameters<typeof serviceNode>[0], 'path'>;
	faqs?: Faq[];
	person?: object;
}) =>
	graph(
		websiteNode(),
		{ ...personNode(), ...opts.person },
		webPageNode({
			path: opts.path,
			title: opts.title,
			description: opts.description,
			type: opts.type,
			breadcrumb: true,
			mainEntity: opts.service ? 'servico' : opts.type === 'ProfilePage' ? 'pessoa' : undefined
		}),
		breadcrumbNode(opts.path, opts.crumbs),
		...(opts.service ? [serviceNode({ path: opts.path, ...opts.service })] : []),
		...(opts.faqs?.length ? [faqNode(opts.path, opts.faqs)] : [])
	);
