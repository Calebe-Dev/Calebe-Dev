<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Compartilhar from '$lib/components/Compartilhar.svelte';
	import { defaultWhatsApp, menu, person, privacyPage, siteGroups, sitemapPage, socials, whatsappLink } from '$lib/site';

	let { children } = $props();

	// marca o link da página atual no menu (acessibilidade e destaque visual)
	const atual = (href: string) => (page.url.pathname === href ? 'page' : undefined);
	// grupo que contém a página atual (destaque do item principal)
	const grupoAtual = (itens: { href: string }[]) => itens.some((item) => item.href === page.url.pathname);

	// botão flutuante: a mensagem identifica a página de origem do contato
	const mensagemFlutuante = $derived(
		`Olá, Calebe! Vim pelo seu site (página ${page.url.pathname}) e quero conversar sobre um projeto.`
	);
</script>

<a href="#conteudo">Pular para o conteúdo</a>

<header>
	<p><a href="/">{person.name}</a></p>

	<!-- menu sanduíche do celular, sem JavaScript: a caixa de seleção abre e fecha o painel -->
	<input type="checkbox" id="menu-abrir" class="menu-controle" />
	<label for="menu-abrir" class="menu-botao"><span>Menu</span></label>

	<nav aria-label="Principal">
		<ul>
			{#each menu as grupo (grupo.label)}
				<li class="menu-grupo" class:menu-grupo-atual={grupoAtual(grupo.itens)}>
					<p><a href={grupo.href} aria-current={atual(grupo.href)}>{grupo.label}</a></p>
					<ul>
						{#each grupo.itens as item (item.href)}
							<li>
								<p>
									{#if item.href.endsWith('.pdf')}
										<a href={item.href} download type="application/pdf">{item.label}</a>
									{:else}
										<a href={item.href} aria-current={atual(item.href)}>{item.label}</a>
									{/if}
								</p>
							</li>
						{/each}
					</ul>
				</li>
			{/each}
			<li class="menu-cta"><p><a href={whatsappLink(defaultWhatsApp.message)}>WhatsApp {person.phoneDisplay}</a></p></li>
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
				Tech lead, desenvolvedor full stack e consultor de SEO técnico. Sites, sistemas sob medida e SEO para
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
			<a href={sitemapPage.path}>Mapa do site completo</a> ·
			<a href={privacyPage.path}>Política de privacidade</a>
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

<a class="whatsapp-flutuante" href={whatsappLink(mensagemFlutuante)}><span>Fale comigo no WhatsApp</span></a>
