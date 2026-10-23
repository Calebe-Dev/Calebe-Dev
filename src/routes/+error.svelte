<script lang="ts">
	import { page } from '$app/state';
	import { careerPage, regionPage, services } from '$lib/site';
</script>

<svelte:head>
	<title>Página não encontrada - Calebe Araujo</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main id="conteudo">
	{#if page.status === 404}
		<h1>Página não encontrada</h1>
		<p>O endereço que você acessou não existe ou foi removido. Estes são os principais conteúdos do site:</p>
	{:else}
		<h1>Algo deu errado</h1>
		<p>Ocorreu um erro ao carregar esta página. Tente novamente ou acesse um dos conteúdos abaixo:</p>
	{/if}
	<ul>
		<li><a href="/">Página inicial</a></li>
		<li><a href={services.consultoriaSeo.path}>Consultoria de SEO</a></li>
		<li><a href={services.criacaoDeSites.path}>Criação de sites</a></li>
		<li><a href={careerPage.path}>Perfil profissional para recrutadores</a></li>
		<li><a href={regionPage.path}>Atendimento em Sorocaba e região</a></li>
	</ul>
</main>
