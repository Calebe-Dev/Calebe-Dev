<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { environment } from '$lib/state/environment.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationFrame: number;
	
	let particles: Particle[] = [];
	const PARTICLE_COUNT = 100;

	// Paletas de cores complementares e vibrantes
	const dayPalette = ['#0f172a', '#1e293b', '#334155', '#475569', '#3b82f6'];
	const nightPalette = ['#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#818cf8', '#c084fc'];

	class Particle {
		x: number;
		y: number;
		size: number;
		baseX: number;
		baseY: number;
		density: number;
		colorIndex: number;
		color: string = '';

		constructor(canvasWidth: number, canvasHeight: number) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.size = Math.random() * 4 + 2;
			this.baseX = this.x;
			this.baseY = this.y;
			this.density = (Math.random() * 30) + 1;
			this.colorIndex = Math.floor(Math.random() * 5);
			this.updateColor();
		}

		updateColor() {
			const palette = environment.dayCycle === 'day' ? dayPalette : nightPalette;
			this.color = palette[this.colorIndex];
		}

		update(mouseX: number, mouseY: number) {
			this.updateColor();
			
			// Efeito de Scroll: Empurra as partículas para cima conforme desce
			// Quando scrollProgress chega em 1 (fim da hero), as partículas ficam "esmagadas" no fundo
			const scrollOffset = environment.scrollProgress * canvas.height * 0.5;
			const targetBaseY = this.baseY - scrollOffset;

			let dx = mouseX - this.x;
			let dy = mouseY - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let forceDirectionX = dx / distance;
			let forceDirectionY = dy / distance;
			let maxDistance = 200;
			let force = (maxDistance - distance) / maxDistance;
			let directionX = forceDirectionX * force * this.density;
			let directionY = forceDirectionY * force * this.density;

			if (distance < maxDistance) {
				this.x -= directionX;
				this.y -= directionY;
			} else {
				if (this.x !== this.baseX) {
					let dx = this.x - this.baseX;
					this.x -= dx / 20;
				}
				if (this.y !== targetBaseY) {
					let dy = this.y - targetBaseY;
					this.y -= dy / 20;
				}
			}

			// Boundary Check: Manter dentro do canvas conforme o scroll
			if (this.y < 0) this.y = 0;
			if (this.y > canvas.height) this.y = canvas.height;
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}
	}

	function init() {
		particles = [];
		for (let i = 0; i < PARTICLE_COUNT; i++) {
			particles.push(new Particle(canvas.width, canvas.height));
		}
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		for (let p of particles) {
			p.update(environment.mouse.x, environment.mouse.y);
			p.draw(ctx);
		}
		animationFrame = requestAnimationFrame(animate);
	}

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			init();
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		animate();
	});

	onDestroy(() => {
		if (animationFrame) cancelAnimationFrame(animationFrame);
	});
</script>

<canvas bind:this={canvas} class="particles-canvas"></canvas>

<style>
	.particles-canvas {
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
	}
</style>
