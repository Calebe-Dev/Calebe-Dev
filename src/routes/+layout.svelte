<script lang="ts">
	import { careerPage, person, regionPage, services } from '$lib/site';

	let { children } = $props();
</script>

<a href="#conteudo">Pular para o conteúdo</a>

<header>
	<p><a href="/">{person.name}</a></p>
	<nav aria-label="Principal">
		<ul>
			<li><a href={services.consultoriaSeo.path}>Consultoria de SEO</a></li>
			<li><a href={services.auditoriaSeo.path}>Auditoria de SEO</a></li>
			<li><a href={services.criacaoDeSites.path}>Criação de sites</a></li>
			<li><a href={services.otimizacaoDeSites.path}>Otimização de sites</a></li>
			<li><a href={services.sistemasWeb.path}>Sistemas web</a></li>
			<li><a href={services.seoB2b.path}>SEO B2B</a></li>
			<li><a href={careerPage.path}>Para recrutadores</a></li>
			<li><a href={regionPage.path}>Sorocaba e região</a></li>
			<li><a href="/#contato">Contato</a></li>
		</ul>
	</nav>
</header>

{@render children()}

<footer>
	<p>
		© {new Date().getFullYear()} {person.name} · SEO, desenvolvimento web e consultoria ·
		{person.city} – {person.region}, Brasil
	</p>
	<ul>
		<li><a href={`mailto:${person.email}`}>E-mail</a></li>
		<li><a href={person.whatsapp}>WhatsApp</a></li>
		<li><a href={person.linkedin}>LinkedIn</a></li>
		<li><a href={person.github}>GitHub</a></li>
	</ul>
</footer>
