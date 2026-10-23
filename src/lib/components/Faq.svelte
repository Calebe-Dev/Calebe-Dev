<script lang="ts">
	// FAQ visível: o mesmo array alimenta o FAQPage do JSON-LD (schema = conteúdo da página).
	import type { Faq } from '$lib/schema';

	let { faqs, title = 'Perguntas frequentes' }: { faqs: Faq[]; title?: string } = $props();
</script>

<section id="perguntas-frequentes" aria-labelledby="perguntas-frequentes-titulo">
	<h2 id="perguntas-frequentes-titulo">{title}</h2>
	{#each faqs as faq (faq.question)}
		<h3>{faq.question}</h3>
		<p>{faq.answer}</p>
	{/each}
</section>
