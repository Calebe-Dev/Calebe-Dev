<script lang="ts">
	import { environment } from '$lib/state/environment.svelte';
	
	let isNight = $derived(environment.dayCycle === 'night');
</script>

<div class="mesh-container" class:night={isNight}>
	<div class="blob blob-1"></div>
	<div class="blob blob-2"></div>
	<div class="blob blob-3"></div>
	<div class="blob blob-4"></div>
</div>

<style>
	.mesh-container {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background: linear-gradient(135deg, #f0f4ff 0%, #d8e3fc 100%);
		transition: background 2s ease-in-out;
		z-index: -2;
	}

	.mesh-container.night {
		background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
	}

	.blob {
		position: absolute;
		width: 80vmax;
		height: 80vmax;
		filter: blur(80px);
		border-radius: 50%;
		opacity: 0.6;
		transition: background 2s ease-in-out;
		animation: move 20s infinite alternate linear;
	}

	.blob-1 {
		background: radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent);
		top: -20%;
		left: -20%;
	}

	.blob-2 {
		background: radial-gradient(circle at center, rgba(147, 51, 234, 0.2), transparent);
		bottom: -20%;
		right: -20%;
		animation-delay: -5s;
		animation-duration: 25s;
	}

	.blob-3 {
		background: radial-gradient(circle at center, rgba(236, 72, 153, 0.2), transparent);
		top: 40%;
		left: 30%;
		animation-delay: -10s;
		animation-duration: 30s;
	}

	.night .blob-1 { background: radial-gradient(circle at center, rgba(30, 58, 138, 0.5), transparent); }
	.night .blob-2 { background: radial-gradient(circle at center, rgba(88, 28, 135, 0.4), transparent); }
	.night .blob-3 { background: radial-gradient(circle at center, rgba(16, 185, 129, 0.1), transparent); }

	@keyframes move {
		from { transform: translate(0, 0) scale(1) rotate(0); }
		to { transform: translate(10%, 10%) scale(1.1) rotate(20deg); }
	}
</style>
