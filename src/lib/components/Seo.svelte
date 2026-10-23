<script lang="ts">
	// <head> de cada página: title, description, canonical, Open Graph e JSON-LD.
	import { SITE_URL, person } from '$lib/site';
	import { absolute } from '$lib/schema';

	let {
		title,
		description,
		path,
		jsonLd,
		ogType = 'website'
	}: { title: string; description: string; path: string; jsonLd: object; ogType?: string } = $props();

	const url = $derived(absolute(path));
	const image = `${SITE_URL}/images/logo-calebe-araujo.jpg`;
	// JSON dentro de <script>: escapa "<" para não fechar a tag por acidente
	const jsonLdScript = $derived(
		`<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` + 'script>'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href={url} />

	<meta property="og:type" content={ogType} />
	<meta property="og:locale" content="pt_BR" />
	<meta property="og:site_name" content={person.name} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:width" content="640" />
	<meta property="og:image:height" content="640" />
	<meta property="og:image:alt" content="Logotipo de Calebe Araujo: letra C em azul-ciano" />
	<meta name="twitter:card" content="summary" />

	{@html jsonLdScript}
</svelte:head>
