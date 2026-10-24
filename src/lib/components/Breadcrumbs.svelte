<script lang="ts">
	import type { Crumb } from '$lib/schema';

	let { crumbs }: { crumbs: Crumb[] } = $props();
</script>

<nav aria-label="Trilha de navegação">
	<ol>
		<li><p><a href="/">Início</a></p></li>
		{#each crumbs as crumb, i (crumb.path)}
			<li>
				<p>
					{#if i === crumbs.length - 1}
						<span aria-current="page">{crumb.name}</span>
					{:else}
						<a href={crumb.path}>{crumb.name}</a>
					{/if}
				</p>
			</li>
		{/each}
	</ol>
</nav>
