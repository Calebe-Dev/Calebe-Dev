<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let width: number;
	let height: number;
	let particles: Particle[] = [];
	let animationId: number | null = null;
	let reducedMotion = false;

	const mouse = { x: 0, y: 0 };
	const baseParticleCount = 36;

	class Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		alpha: number;
		targetAlpha: number;

		constructor() {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
			this.vx = (Math.random() - 0.5) * 0.2; // Slow float
			this.vy = (Math.random() - 0.5) * 0.2;
			this.size = Math.random() * 2;
			this.alpha = Math.random() * 0.5;
			this.targetAlpha = this.alpha;
		}

		update() {
			this.x += this.vx;
			this.y += this.vy;

			// Wrap around screen
			if (this.x < 0) this.x = width;
			if (this.x > width) this.x = 0;
			if (this.y < 0) this.y = height;
			if (this.y > height) this.y = 0;

			// Mouse interaction (subtle push)
			const dx = mouse.x - this.x;
			const dy = mouse.y - this.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > 0 && distance < 200) {
				const force = (200 - distance) / 200;
				this.vx -= (dx / distance) * force * 0.02;
				this.vy -= (dy / distance) * force * 0.02;
				this.targetAlpha = 0.8; // Brighten near mouse
			} else {
				this.targetAlpha = Math.random() * 0.3 + 0.1;
			}

			// Smooth alpha transition
			this.alpha += (this.targetAlpha - this.alpha) * 0.05;
		}

		draw() {
			if (!ctx) return;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(191, 207, 238, ${this.alpha})`;
			ctx.fill();
		}
	}

	function resize() {
		width = window.innerWidth;
		height = window.innerHeight;
		if (canvas) {
			canvas.width = width;
			canvas.height = height;
		}
	}

	function animate() {
		if (!ctx) return;
		ctx.clearRect(0, 0, width, height);

		particles.forEach((p) => {
			p.update();
			p.draw();
		});

		// Connect particles
		particles.forEach((p1, i) => {
			for (let j = i + 1; j < particles.length; j++) {
				const p2 = particles[j];
				const dx = p1.x - p2.x;
				const dy = p1.y - p2.y;
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance < 150) {
					ctx!.beginPath();
					ctx!.strokeStyle = `rgba(174, 196, 238, ${0.08 * (1 - distance / 150)})`;
					ctx!.lineWidth = 0.5;
					ctx!.moveTo(p1.x, p1.y);
					ctx!.lineTo(p2.x, p2.y);
					ctx!.stroke();
				}
			}
		});

		animationId = requestAnimationFrame(animate);
	}

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		ctx = canvas.getContext('2d');
		resize();
		window.addEventListener('resize', resize);
		const handleMouseMove = (e: MouseEvent) => {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
		};
		window.addEventListener('mousemove', handleMouseMove);

		const computedParticleCount = Math.max(
			16,
			Math.round((window.innerWidth / 1440) * baseParticleCount)
		);

		for (let i = 0; i < computedParticleCount; i++) {
			particles.push(new Particle());
		}

		if (!reducedMotion && window.innerWidth > 640) {
			animate();
		} else {
			particles.forEach((p) => p.draw());
		}

		return () => {
			window.removeEventListener('resize', resize);
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationId) cancelAnimationFrame(animationId);
		};
	});
</script>

<canvas bind:this={canvas} class="fixed inset-0 pointer-events-none z-0 opacity-25 mix-blend-screen"
></canvas>
