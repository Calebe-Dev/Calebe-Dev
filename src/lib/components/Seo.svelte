<script lang="ts">
	// <head> de cada página: title, metadados (autor, publicador, keywords, geo), canonical,
	// hreflang, Open Graph (site, artigo e perfil), Twitter/X e JSON-LD.
	import { SITE_URL, UPDATED, careerPage, dateModified, datePublished, pageKeywords, person, shareCard, socials } from '$lib/site';
	import { absolute } from '$lib/schema';

	let {
		title,
		description,
		path,
		jsonLd,
		ogType = 'website'
	}: { title: string; description: string; path: string; jsonLd: object; ogType?: 'website' | 'article' | 'profile' } = $props();

	const BRAND = ` - ${person.name}`;
	const url = $derived(absolute(path));
	// O Google exibe o nome do site separado (schema WebSite); acima de 60 caracteres o sufixo
	// de marca sai do <title> para o termo-alvo não ser cortado na busca.
	const pageTitle = $derived(title.length > 60 && title.endsWith(BRAND) ? title.slice(0, -BRAND.length) : title);
	const keywords = $derived(pageKeywords[path] ?? []);
	const year = UPDATED.slice(0, 4);
	const published = $derived(datePublished(path));

	// Card próprio de cada página, 1200×630 (WhatsApp, LinkedIn, Facebook, X, Telegram, Threads)
	const image = $derived(`${SITE_URL}${shareCard(path)}`);
	const imageAlt = $derived(`${title.endsWith(BRAND) ? title.slice(0, -BRAND.length) : title} — ${person.name}, calebearaujo.com.br`);
	const [firstName, ...lastNames] = person.name.split(' ');

	// JSON dentro de <script>: escapa "<" para não fechar a tag por acidente
	const jsonLdScript = $derived(
		`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` + 'script>'
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}
	<meta name="author" content={person.name} />
	<meta name="publisher" content={person.name} />
	<meta name="copyright" content={`© ${year} ${person.name}`} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="theme-color" content="#0a1f44" />

	<!-- localização (sede em Sorocaba-SP) -->
	<meta name="geo.region" content="BR-SP" />
	<meta name="geo.placename" content={person.city} />
	<meta name="geo.position" content={`${person.geo.latitude};${person.geo.longitude}`} />
	<meta name="ICBM" content={`${person.geo.latitude}, ${person.geo.longitude}`} />

	<link rel="canonical" href={url} />
	<link rel="alternate" hreflang="pt-BR" href={url} />
	<link rel="alternate" hreflang="x-default" href={url} />
	<link rel="author" href={absolute(careerPage.path)} />
	<link rel="publisher" href={`${SITE_URL}/`} />
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
	<link rel="image_src" href={image} />
	{#each socials as social (social.url)}
		<link rel="me" href={social.url} />
	{/each}

	<!-- Open Graph -->
	<meta property="og:type" content={ogType} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content={person.name} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:updated_time" content={dateModified} />
	<meta property="og:image" content={image} />
	<meta property="og:image:secure_url" content={image} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />
	{#if ogType === 'article'}
		<meta property="article:author" content={absolute(careerPage.path)} />
		<meta property="article:publisher" content={`${SITE_URL}/`} />
		<meta property="article:published_time" content={published} />
		<meta property="article:modified_time" content={dateModified} />
		<meta property="article:section" content="SEO técnico" />
		{#each keywords as tag (tag)}
			<meta property="article:tag" content={tag} />
		{/each}
	{/if}
	{#if ogType === 'profile'}
		<meta property="profile:first_name" content={firstName} />
		<meta property="profile:last_name" content={lastNames.join(' ')} />
		<meta property="profile:username" content="calebe-dev" />
	{/if}

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{@html jsonLdScript}
</svelte:head>
