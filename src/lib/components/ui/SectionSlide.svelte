<script lang="ts">
	/**
	 * Wrapper for full-screen sections with scroll snap
	 */
	let {
		children,
		class: className = '',
		id = ''
	}: { children: any; class?: string; id?: string } = $props();
</script>

<div
	{id}
	class={`apple-gridline min-h-[100svh] w-full relative flex items-center justify-center snap-start overflow-x-hidden pt-24 pb-16 md:pt-28 md:pb-20 ${className}`}
>
	{@render children()}
</div>
