// Construtores de JSON-LD (schema.org). Cada página monta um @graph com estes nós;
// o conteúdo marcado deve ser sempre o mesmo que está visível no HTML.
import { SITE_URL, UPDATED, pageKeywords, person, socials } from './site';

export type Faq = { question: string; answer: string };
export type Crumb = { name: string; path: string };

const PERSON_ID = `${SITE_URL}/#pessoa`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const IMAGE_ID = `${SITE_URL}/#imagem`;
const YEAR = Number(UPDATED.slice(0, 4));

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
	email: person.email,
	telephone: person.phone,
	address: {
		'@type': 'PostalAddress',
		addressLocality: person.city,
		addressRegion: person.region,
		addressCountry: person.country
	},
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'sales',
		telephone: person.phone,
		url: person.whatsapp,
		availableLanguage: 'Portuguese',
		areaServed: 'BR'
	},
	worksFor: { '@type': 'Organization', name: 'Grupo OC', url: 'https://grupooc.com.br/' },
	// Formação em andamento (2023–2026): trocar para alumniOf após a conclusão
	affiliation: { '@type': 'CollegeOrUniversity', name: 'Fatec Itu' },
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
	sameAs: socials.map((s) => s.url),
	// Currículo em PDF para recrutadores
	subjectOf: {
		'@type': 'DigitalDocument',
		name: `Currículo de ${person.name}`,
		url: `${SITE_URL}${person.cv}`,
		encodingFormat: 'application/pdf',
		inLanguage: 'pt-BR'
	}
});

export const websiteNode = () => ({
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: `${SITE_URL}/`,
	name: person.name,
	alternateName: 'calebearaujo.com.br',
	description: 'Site de Calebe Araujo, desenvolvedor full stack e consultor de SEO técnico em Sorocaba (SP).',
	inLanguage: 'pt-BR',
	publisher: { '@id': PERSON_ID },
	creator: { '@id': PERSON_ID },
	copyrightHolder: { '@id': PERSON_ID },
	copyrightYear: YEAR
});

// Imagem de compartilhamento (1200×630): imagem principal de todas as páginas
export const imageNode = () => ({
	'@type': 'ImageObject',
	'@id': IMAGE_ID,
	url: `${SITE_URL}/images/compartilhamento-calebe-araujo.jpg`,
	contentUrl: `${SITE_URL}/images/compartilhamento-calebe-araujo.jpg`,
	width: 1200,
	height: 630,
	encodingFormat: 'image/jpeg',
	caption: 'Calebe Araujo, desenvolvedor full stack e consultor de SEO técnico em Sorocaba',
	creator: { '@id': PERSON_ID },
	copyrightHolder: { '@id': PERSON_ID }
});

export const webPageNode = (opts: {
	path: string;
	title: string;
	description: string;
	type?: 'WebPage' | 'ProfilePage' | 'CollectionPage';
	breadcrumb?: boolean;
	// 'pessoa' (perfil) ou 'servico' (páginas de serviço): entidade principal da página
	mainEntity?: 'pessoa' | 'servico';
	// a página fala sobre a pessoa sem ser o perfil dela (home)
	aboutPerson?: boolean;
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
		publisher: { '@id': PERSON_ID },
		copyrightHolder: { '@id': PERSON_ID },
		copyrightYear: YEAR,
		datePublished: UPDATED,
		dateModified: UPDATED,
		primaryImageOfPage: { '@id': IMAGE_ID },
		image: { '@id': IMAGE_ID },
		...(pageKeywords[opts.path] ? { keywords: pageKeywords[opts.path].join(', ') } : {}),
		...(main ? { mainEntity: { '@id': main } } : {}),
		...(opts.aboutPerson ? { about: { '@id': PERSON_ID } } : {}),
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

export const articleNode = (path: string, headline: string, description: string) => ({
	'@type': 'TechArticle',
	'@id': `${absolute(path)}#artigo`,
	headline,
	description,
	inLanguage: 'pt-BR',
	url: absolute(path),
	mainEntityOfPage: { '@id': `${absolute(path)}#pagina` },
	image: { '@id': IMAGE_ID },
	...(pageKeywords[path] ? { keywords: pageKeywords[path].join(', ') } : {}),
	copyrightHolder: { '@id': PERSON_ID },
	copyrightYear: YEAR,
	author: { '@id': PERSON_ID },
	publisher: { '@id': PERSON_ID },
	datePublished: UPDATED,
	dateModified: UPDATED
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
	// guias informativos: TechArticle assinado pela pessoa
	article?: { headline: string };
	faqs?: Faq[];
	person?: object;
	extra?: object[];
}) =>
	graph(
		websiteNode(),
		imageNode(),
		{ ...personNode(), ...opts.person },
		webPageNode({
			path: opts.path,
			title: opts.title,
			description: opts.description,
			type: opts.type,
			breadcrumb: true,
			mainEntity: opts.service ? 'servico' : opts.type === 'ProfilePage' ? 'pessoa' : undefined
		}),
		...(opts.article ? [articleNode(opts.path, opts.article.headline, opts.description)] : []),
		breadcrumbNode(opts.path, opts.crumbs),
		...(opts.service ? [serviceNode({ path: opts.path, ...opts.service })] : []),
		...(opts.faqs?.length ? [faqNode(opts.path, opts.faqs)] : []),
		...(opts.extra ?? [])
	);
