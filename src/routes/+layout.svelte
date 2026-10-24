<script lang="ts">
	import '../app.css';
	import { careerPage, defaultWhatsApp, person, regionPage, services, sitemapPage, socials, whatsappLink } from '$lib/site';

	let { children } = $props();
</script>

<a href="#conteudo">Pular para o conteúdo</a>

<header>
	<p><a href="/">{person.name}</a></p>
	<nav aria-label="Principal">
		<ul>
			<li><p><a href={services.consultoriaSeo.path}>Consultoria de SEO</a></p></li>
			<li><p><a href={services.auditoriaSeo.path}>Auditoria de SEO</a></p></li>
			<li><p><a href={services.criacaoDeSites.path}>Criação de sites</a></p></li>
			<li><p><a href={services.otimizacaoDeSites.path}>Otimização de sites</a></p></li>
			<li><p><a href={services.sistemasWeb.path}>Sistemas web</a></p></li>
			<li><p><a href={services.seoB2b.path}>SEO B2B</a></p></li>
			<li><p><a href={careerPage.path}>Para recrutadores</a></p></li>
			<li><p><a href={regionPage.path}>Sorocaba e região</a></p></li>
			<li><p><a href={whatsappLink(defaultWhatsApp.message)}>WhatsApp {person.phoneDisplay}</a></p></li>
		</ul>
	</nav>
</header>

{@render children()}

<footer>
	<p>
		© {new Date().getFullYear()} {person.name} · SEO, desenvolvimento web e consultoria ·
		{person.city} – {person.region}, Brasil
	</p>
	<p><a href={whatsappLink(defaultWhatsApp.message)}>WhatsApp {person.phoneDisplay}</a></p>
	<p><a href={sitemapPage.path}>Mapa do site</a></p>
	<nav aria-label="Redes sociais">
		<ul>
			{#each socials as social (social.url)}
				<li><p><a href={social.url} rel="me">{social.name}</a></p></li>
			{/each}
		</ul>
	</nav>
</footer>
