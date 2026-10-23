<script lang="ts">
	// Apple-like ambient backdrop with low-saturation movement.
</script>

<div class="mesh-wrap">
	<div class="mesh-orb orb-a"></div>
	<div class="mesh-orb orb-b"></div>
	<div class="mesh-orb orb-c"></div>
	<div class="mesh-vignette"></div>
</div>

<style>
	.mesh-wrap {
		position: absolute;
		inset: 0;
		overflow: hidden;
		background:
			radial-gradient(circle at 18% 12%, rgba(140, 175, 235, 0.2), transparent 34%),
			radial-gradient(circle at 82% 8%, rgba(172, 180, 220, 0.17), transparent 30%),
			linear-gradient(180deg, rgba(12, 18, 28, 0.65), rgba(5, 8, 16, 0.92));
		pointer-events: none;
		z-index: -10;
	}

	.mesh-orb {
		position: absolute;
		border-radius: 999px;
		filter: blur(90px);
		opacity: 0.28;
		will-change: transform;
	}

	.orb-a {
		left: -8%;
		top: 6%;
		height: 340px;
		width: 340px;
		background: radial-gradient(circle at 30% 30%, rgba(125, 196, 255, 0.8), rgba(58, 110, 182, 0.2));
		animation: driftA 14s ease-in-out infinite;
	}

	.orb-b {
		right: -10%;
		top: 16%;
		height: 380px;
		width: 380px;
		background: radial-gradient(circle at 35% 35%, rgba(200, 207, 242, 0.7), rgba(62, 78, 126, 0.24));
		animation: driftB 16s ease-in-out infinite;
	}

	.orb-c {
		left: 28%;
		bottom: -18%;
		height: 420px;
		width: 420px;
		background: radial-gradient(circle at 50% 35%, rgba(145, 165, 220, 0.58), rgba(34, 46, 77, 0.18));
		animation: driftC 18s ease-in-out infinite;
	}

	.mesh-vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at center, transparent 30%, rgba(4, 6, 12, 0.56) 82%);
	}

	@keyframes driftA {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(8%, 3%, 0) scale(1.07);
		}
	}

	@keyframes driftB {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(-8%, 8%, 0) scale(1.08);
		}
	}

	@keyframes driftC {
		0%,
		100% {
			transform: translate3d(0, 0, 0) scale(1);
		}
		50% {
			transform: translate3d(3%, -6%, 0) scale(1.06);
		}
	}

	@media (max-width: 900px) {
		.mesh-orb {
			filter: blur(78px);
			opacity: 0.22;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.orb-a,
		.orb-b,
		.orb-c {
			animation: none;
		}
	}
</style>
