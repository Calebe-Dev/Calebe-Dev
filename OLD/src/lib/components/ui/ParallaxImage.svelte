<script lang="ts">
	import { onMount } from 'svelte';

	let { 
		src, 
		alt, 
		height = '500px', 
		speed = 0.2,
		class: className = ''
	}: { 
		src: string; 
		alt: string; 
		height?: string; 
		speed?: number;
		class?: string;
	} = $props();

	let container: HTMLElement;
	let offset = $state(0);

	onMount(() => {
		const handleScroll = () => {
			if (!container) return;
			const rect = container.getBoundingClientRect();
			// Check if element is in viewport (with some buffer)
			const visible = rect.top < window.innerHeight && rect.bottom > 0;

			if (visible) {
				const center = window.innerHeight / 2;
				const containerCenter = rect.top + rect.height / 2;
				const dist = containerCenter - center;
				offset = dist * speed * -1;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class={`parallax-container ${className}`} style="height: {height};" bind:this={container}>
	<div 
		class="parallax-inner" 
		style="transform: translate3d(0, {offset}px, 0); background-image: url('{src}');"
		role="img"
		aria-label={alt}
	></div>
</div>

<style>
	.parallax-container {
		overflow: hidden;
		position: relative;
		width: 100%;
		border-radius: 24px;
		box-shadow: 0 20px 40px rgba(0,0,0,0.3);
		transform: translateZ(0); /* Hardware acceleration */
	}
	.parallax-inner {
		position: absolute;
		top: -20%;
		left: 0;
		width: 100%;
		height: 140%;
		background-size: cover;
		background-position: center;
		will-change: transform;
	}
</style>
