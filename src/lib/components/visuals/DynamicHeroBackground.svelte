<script lang="ts">
	import MeshGradient from './MeshGradient.svelte';
	import InteractiveParticles from './InteractiveParticles.svelte';
	import WeatherOverlay from './WeatherOverlay.svelte';
</script>

<div class="dynamic-bg">
	<MeshGradient />
	<InteractiveParticles />
	<WeatherOverlay />
</div>

<style>
	.dynamic-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0; /* Ensures content on top stays interactive if they have higher z-index */
	}
</style>
