// Construtores de JSON-LD (schema.org). Cada página monta um @graph com estes nós;
// o conteúdo marcado deve ser sempre o mesmo que está visível no HTML.
import { SITE_URL, UPDATED, dateModified, datePublished, logo, menu, pageKeywords, person, services, shareCard, socials } from './site';

export type Faq = { question: string; answer: string };
export type Crumb = { name: string; path: string };

const PERSON_ID = `${SITE_URL}/#pessoa`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const BUSINESS_ID = `${SITE_URL}/#negocio`;
const LOGO_ID = `${SITE_URL}/#logo`;
const NAV_ID = `${SITE_URL}/#navegacao`;
const YEAR = Number(UPDATED.slice(0, 4));

export const absolute = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);
const imageId = (path: string) => `${absolute(path)}#imagem`;

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
	// Emprego atual e a consultoria em inglês (rankingfixer.com), que usa este mesmo @id como autor
	worksFor: [
		{ '@type': 'Organization', name: 'Grupo OC', url: 'https://grupooc.com.br/' },
		{ '@type': 'Organization', '@id': 'https://rankingfixer.com/#organization', name: 'Ranking Fixer', url: 'https://rankingfixer.com/' }
	],
	knowsLanguage: { '@type': 'Language', name: 'Português', alternateName: 'pt-BR' },
	brand: { '@id': BUSINESS_ID },
	// Formação em andamento (2023–2026): trocar para alumniOf após a conclusão
	affiliation: { '@type': 'CollegeOrUniversity', name: 'Fatec Itu' },
	knowsAbout: [
		'SEO técnico',
		'Core Web Vitals',
		'Dados estruturados',
		'Criação de sites',
		'Desenvolvimento full stack',
		'Liderança técnica',
		'Coordenação de times de TI',
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

// Card de compartilhamento da página (1200×630): imagem principal da página
export const imageNode = (path: string, caption: string) => ({
	'@type': 'ImageObject',
	'@id': imageId(path),
	url: absolute(shareCard(path)),
	contentUrl: absolute(shareCard(path)),
	width: 1200,
	height: 630,
	encodingFormat: 'image/jpeg',
	caption,
	representativeOfPage: true,
	creator: { '@id': PERSON_ID },
	copyrightHolder: { '@id': PERSON_ID }
});

// Monograma da marca
export const logoNode = () => ({
	'@type': 'ImageObject',
	'@id': LOGO_ID,
	url: absolute(logo.path),
	contentUrl: absolute(logo.path),
	width: logo.width,
	height: logo.height,
	encodingFormat: 'image/png',
	caption: `Logotipo de ${person.name}`
});

// Atividade profissional (marca pessoal): serviços, área de atendimento e contato
export const businessNode = () => ({
	'@type': 'ProfessionalService',
	'@id': BUSINESS_ID,
	name: person.name,
	alternateName: `${person.name} — SEO e desenvolvimento web`,
	description:
		'Consultoria e auditoria de SEO técnico, criação e otimização de sites e desenvolvimento de sistemas web sob medida, em Sorocaba (SP) e em todo o Brasil.',
	url: `${SITE_URL}/`,
	logo: { '@id': LOGO_ID },
	image: absolute(shareCard('/')),
	email: person.email,
	telephone: person.phone,
	address: {
		'@type': 'PostalAddress',
		addressLocality: person.city,
		addressRegion: person.region,
		addressCountry: person.country
	},
	geo: { '@type': 'GeoCoordinates', ...person.geo },
	areaServed: [serviceArea, { '@type': 'Country', name: 'Brasil' }],
	founder: { '@id': PERSON_ID },
	employee: { '@id': PERSON_ID },
	sameAs: socials.map((s) => s.url),
	contactPoint: {
		'@type': 'ContactPoint',
		contactType: 'sales',
		telephone: person.phone,
		email: person.email,
		url: person.whatsapp,
		availableLanguage: 'Portuguese',
		areaServed: 'BR'
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Serviços de SEO, desenvolvimento web e consultoria',
		itemListElement: Object.values(services).map((s) => ({
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: s.name, url: absolute(s.path) }
		}))
	}
});

// Menu principal do site
export const navNode = () => ({
	'@type': 'ItemList',
	'@id': NAV_ID,
	name: 'Menu principal',
	itemListElement: menu
		.flatMap((grupo) => [grupo, ...grupo.itens])
		.filter((item, i, todos) => todos.findIndex((outro) => outro.href === item.href) === i)
		.map((item, i) => ({
			'@type': 'SiteNavigationElement',
			position: i + 1,
			name: item.label,
			url: absolute(item.href)
		}))
});

// Passo a passo visível na página (lista ordenada)
export const howToNode = (path: string, name: string, steps: { name: string; text: string }[]) => ({
	'@type': 'HowTo',
	'@id': `${absolute(path)}#passo-a-passo`,
	name,
	inLanguage: 'pt-BR',
	step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text }))
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
		datePublished: datePublished(opts.path),
		dateModified,
		primaryImageOfPage: { '@id': imageId(opts.path) },
		image: { '@id': imageId(opts.path) },
		thumbnailUrl: absolute(shareCard(opts.path)),
		// trechos indicados para leitura em voz alta por assistentes
		speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero > p:first-of-type'] },
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
	// Oferta do serviço (só com condições reais e visíveis na página)
	offers?: object;
}) => ({
	'@type': 'Service',
	'@id': `${absolute(opts.path)}#servico`,
	name: opts.name,
	serviceType: opts.serviceType,
	description: opts.description,
	url: absolute(opts.path),
	provider: { '@id': BUSINESS_ID },
	image: { '@id': imageId(opts.path) },
	areaServed: opts.areaServed ?? [serviceArea, { '@type': 'Country', name: 'Brasil' }],
	...(opts.audience ? { audience: { '@type': 'BusinessAudience', audienceType: opts.audience } } : {}),
	...(opts.offers ? { offers: opts.offers } : {})
});

// Oferta gratuita de criação e hospedagem de site (termos decididos; vagas limitadas por mês)
export const freeSiteOffer = (path: string) => ({
	'@type': 'Offer',
	price: '0',
	priceCurrency: 'BRL',
	url: absolute(path),
	availability: 'https://schema.org/LimitedAvailability',
	description:
		'Criação e hospedagem gratuitas de um site com até 5 páginas, para empresas de qualquer nicho e porte. O cliente registra e paga o próprio domínio. Até 5 sites gratuitos por mês.'
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

export const articleNode = (
	path: string,
	headline: string,
	description: string,
	type: 'TechArticle' | 'Article' = 'TechArticle'
) => ({
	'@type': type,
	'@id': `${absolute(path)}#artigo`,
	headline,
	description,
	inLanguage: 'pt-BR',
	url: absolute(path),
	mainEntityOfPage: { '@id': `${absolute(path)}#pagina` },
	image: { '@id': imageId(path) },
	articleSection: 'Guias de SEO',
	isAccessibleForFree: true,
	...(pageKeywords[path] ? { keywords: pageKeywords[path].join(', ') } : {}),
	copyrightHolder: { '@id': PERSON_ID },
	copyrightYear: YEAR,
	author: { '@id': PERSON_ID },
	publisher: { '@id': PERSON_ID },
	datePublished: datePublished(path),
	dateModified
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
	// guias informativos assinados pela pessoa: TechArticle (técnicos) ou Article (para leigos)
	article?: { headline: string; type?: 'TechArticle' | 'Article' };
	faqs?: Faq[];
	howTo?: { name: string; steps: { name: string; text: string }[] };
	person?: object;
	extra?: object[];
}) =>
	graph(
		websiteNode(),
		navNode(),
		logoNode(),
		businessNode(),
		imageNode(opts.path, opts.title),
		{ ...personNode(), ...opts.person },
		webPageNode({
			path: opts.path,
			title: opts.title,
			description: opts.description,
			type: opts.type,
			breadcrumb: true,
			mainEntity: opts.service ? 'servico' : opts.type === 'ProfilePage' ? 'pessoa' : undefined
		}),
		...(opts.article ? [articleNode(opts.path, opts.article.headline, opts.description, opts.article.type)] : []),
		breadcrumbNode(opts.path, opts.crumbs),
		...(opts.service ? [serviceNode({ path: opts.path, ...opts.service })] : []),
		...(opts.faqs?.length ? [faqNode(opts.path, opts.faqs)] : []),
		...(opts.howTo ? [howToNode(opts.path, opts.howTo.name, opts.howTo.steps)] : []),
		...(opts.extra ?? [])
	);
