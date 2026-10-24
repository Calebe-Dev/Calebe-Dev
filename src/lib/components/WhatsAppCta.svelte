<script lang="ts">
	// CTA de conversão: link direto para o WhatsApp com mensagem que identifica a página.
	import { defaultWhatsApp, person, whatsappLink, type WhatsApp } from '$lib/site';

	let { message = defaultWhatsApp.message, label = defaultWhatsApp.label }: Partial<WhatsApp> = $props();
</script>

<p><a href={whatsappLink(message)}>{label}: {person.phoneDisplay}</a></p>
