<!--
	Vídeo decorativo de fundo do hero (aurora nas cores da marca, gerada por código, loop de 8 s).
	Só é baixado em telas a partir de 760 px e sem "reduzir movimento": no celular nenhuma fonte
	corresponde ao `media`, então nada é carregado. AV1 (41 KB) primeiro; H.264 para o Safari.
-->
<video class="hero-video" autoplay muted loop playsinline aria-hidden="true">
	<source
		src="/videos/aurora-marca.webm"
		type={'video/webm; codecs="av01.0.05M.10"'}
		media="(min-width: 760px) and (prefers-reduced-motion: no-preference)"
	/>
	<source
		src="/videos/aurora-marca.mp4"
		type={'video/mp4; codecs="avc1.640028"'}
		media="(min-width: 760px) and (prefers-reduced-motion: no-preference)"
	/>
</video>
