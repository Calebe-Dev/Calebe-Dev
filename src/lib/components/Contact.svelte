<script lang="ts">
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';
	import { UPDATED, defaultWhatsApp, person, type WhatsApp } from '$lib/site';

	let {
		title = 'Fale comigo',
		intro = 'Conte o que você precisa pelo WhatsApp e eu respondo com os próximos passos.',
		whatsapp = defaultWhatsApp
	}: { title?: string; intro?: string; whatsapp?: WhatsApp } = $props();

	const updatedLabel = new Date(`${UPDATED}T12:00:00`).toLocaleDateString('pt-BR', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
</script>

<section id="contato" aria-labelledby="contato-titulo">
	<h2 id="contato-titulo">{title}</h2>
	<p>{intro}</p>
	<WhatsAppCta {...whatsapp} />
	<address>
		<p>Outros canais:</p>
		<ul>
			<li>E-mail: <a href={`mailto:${person.email}`}>{person.email}</a></li>
			<li>LinkedIn: <a href={person.linkedin}>linkedin.com/in/calebe-dev</a></li>
			<li>Localização: {person.city} – {person.region}, Brasil</li>
		</ul>
	</address>
</section>

<p>Página atualizada em <time datetime={UPDATED}>{updatedLabel}</time>.</p>
