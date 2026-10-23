<script lang="ts">
	// "Veja também": links internos para páginas do mesmo cluster (âncoras descritivas e variadas).
	let { links, title = 'Veja também' }: { links: { href: string; text: string }[]; title?: string } = $props();
</script>

<nav aria-labelledby="veja-tambem-titulo">
	<h2 id="veja-tambem-titulo">{title}</h2>
	<ul>
		{#each links as link (link.href)}
			<li><a href={link.href}>{link.text}</a></li>
		{/each}
	</ul>
</nav>
