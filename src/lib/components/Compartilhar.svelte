<!--
	Links de compartilhamento da página atual (sem JavaScript: cada rede abre a própria tela de
	compartilhar com o endereço da página; a prévia vem do card Open Graph da página).
-->
<script lang="ts">
	import { page } from '$app/state';
	import { absolute } from '$lib/schema';
	import { person, shareCard } from '$lib/site';

	const url = $derived(absolute(page.url.pathname));
	const u = $derived(encodeURIComponent(url));
	const card = $derived(encodeURIComponent(absolute(shareCard(page.url.pathname))));

	const redes = $derived([
		{ nome: 'WhatsApp', href: `https://api.whatsapp.com/send?text=${u}` },
		{ nome: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
		{ nome: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
		{ nome: 'X', href: `https://x.com/intent/tweet?url=${u}` },
		{ nome: 'Threads', href: `https://www.threads.net/intent/post?text=${u}` },
		{ nome: 'Bluesky', href: `https://bsky.app/intent/compose?text=${u}` },
		{ nome: 'Telegram', href: `https://t.me/share/url?url=${u}` },
		{ nome: 'Reddit', href: `https://www.reddit.com/submit?url=${u}` },
		{ nome: 'Pinterest', href: `https://www.pinterest.com/pin/create/button/?url=${u}&media=${card}` },
		{ nome: 'E-mail', href: `mailto:?subject=${encodeURIComponent(`Indicação: ${person.name}`)}&body=${u}` }
	]);
</script>

<aside class="compartilhar" aria-labelledby="compartilhar-titulo">
	<h2 id="compartilhar-titulo">Compartilhe esta página</h2>
	<ul>
		{#each redes as rede (rede.nome)}
			<li>
				<a href={rede.href} data-rede={rede.nome} rel="nofollow noopener noreferrer" target="_blank">{rede.nome}</a>
			</li>
		{/each}
	</ul>
</aside>
