<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Compartilhar from '$lib/components/Compartilhar.svelte';
	import { defaultWhatsApp, mainNav, person, siteGroups, sitemapPage, socials, whatsappLink } from '$lib/site';

	let { children } = $props();

	// marca o link da página atual no menu (acessibilidade e destaque visual)
	const atual = (href: string) => (page.url.pathname === href ? 'page' : undefined);
</script>

<a href="#conteudo">Pular para o conteúdo</a>

<header>
	<p><a href="/">{person.name}</a></p>
	<nav aria-label="Principal">
		<ul>
			{#each mainNav as item (item.href)}
				<li><p><a href={item.href} aria-current={atual(item.href)}>{item.label}</a></p></li>
			{/each}
			<li><p><a href={whatsappLink(defaultWhatsApp.message)}>WhatsApp {person.phoneDisplay}</a></p></li>
		</ul>
	</nav>
</header>

{@render children()}

{#if page.status < 400}
	<Compartilhar />
{/if}

<footer>
	<div class="rodape">
		<div class="rodape-marca">
			<p><a href="/">{person.name}</a></p>
			<p>
				Desenvolvedor full stack e consultor de SEO técnico. Sites, sistemas sob medida e SEO para
				empresas de todo o Brasil.
			</p>
			<address>
				<p><a href={whatsappLink(defaultWhatsApp.message)}>WhatsApp {person.phoneDisplay}</a></p>
				<p><a href={`mailto:${person.email}`}>{person.email}</a></p>
				<p>
					{person.city} – {person.region}, Brasil. Atendimento remoto em todo o país e presencial num
					raio de {person.serviceRadiusKm} km.
				</p>
			</address>
		</div>

		<nav aria-label="Mapa do site resumido">
			{#each siteGroups as group (group.id)}
				<div>
					<h2>{group.title}</h2>
					<ul>
						{#each group.entries as entry (entry.href)}
							<li>
								{#if entry.href.endsWith('.pdf')}
									<a href={entry.href} download type="application/pdf">{entry.text}</a>
								{:else}
									<a href={entry.href}>{entry.text}</a>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</div>

	<div class="rodape-base">
		<p>
			© {new Date().getFullYear()} {person.name} · SEO, desenvolvimento web e consultoria ·
			<a href={sitemapPage.path}>Mapa do site completo</a>
		</p>
		<nav aria-label="Redes sociais">
			<ul>
				{#each socials as social (social.url)}
					<li><p><a href={social.url} rel="me">{social.name}</a></p></li>
				{/each}
			</ul>
		</nav>
	</div>
</footer>
