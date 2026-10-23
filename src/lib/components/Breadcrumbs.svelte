<script lang="ts">
	import type { Crumb } from '$lib/schema';

	let { crumbs }: { crumbs: Crumb[] } = $props();
</script>

<nav aria-label="Trilha de navegação">
	<ol>
		<li><a href="/">Início</a></li>
		{#each crumbs as crumb, i (crumb.path)}
			<li>
				{#if i === crumbs.length - 1}
					<span aria-current="page">{crumb.name}</span>
				{:else}
					<a href={crumb.path}>{crumb.name}</a>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
