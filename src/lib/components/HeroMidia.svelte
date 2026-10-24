<!--
	Mídia decorativa do hero, sem texto (alt="" e aria-hidden): não altera o conteúdo de SEO.
	- foto: imagem da página (AVIF/WebP em 768 e 1376 px). No computador ocupa a direita do painel;
	  no celular vira um fundo suave atrás do texto.
	- video: "aurora" (marca, 41 KB) nas páginas internas; "rede" (rede de dados da marca, 325 KB) na home.
	  O vídeo só é baixado a partir de 760 px e sem "reduzir movimento" (atributo media).
-->
<script lang="ts">
	let { foto, video = 'aurora' }: { foto?: string; video?: 'aurora' | 'rede' } = $props();

	const desktop = '(min-width: 760px) and (prefers-reduced-motion: no-preference)';
	const arquivo = $derived(video === 'rede' ? 'rede-marca' : 'aurora-marca');
	const srcset = (ext: string) =>
		`/images/fotos/${foto}-768.${ext} 768w, /images/fotos/${foto}-1376.${ext} 1376w`;
	const sizes = '(min-width: 760px) 640px, 100vw';
</script>

<video class="hero-video" autoplay muted loop playsinline aria-hidden="true">
	<source src={`/videos/${arquivo}.webm`} type={'video/webm; codecs="av01.0.05M.10"'} media={desktop} />
	<source src={`/videos/${arquivo}.mp4`} type={'video/mp4; codecs="avc1.640028"'} media={desktop} />
</video>

{#if foto}
	<picture class="hero-foto">
		<source type="image/avif" srcset={srcset('avif')} {sizes} />
		<img
			src={`/images/fotos/${foto}-768.webp`}
			srcset={srcset('webp')}
			{sizes}
			alt=""
			width="1376"
			height="768"
			fetchpriority="high"
			decoding="async"
		/>
	</picture>
{/if}
