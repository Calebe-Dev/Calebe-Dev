<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { environment } from '$lib/state/environment.svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationFrame: number;
	
	let particles: Particle[] = [];
	const PARTICLE_COUNT = 80;

	class Particle {
		x: number;
		y: number;
		size: number;
		baseX: number;
		baseY: number;
		vx: number;
		vy: number;
		density: number;

		constructor(canvasWidth: number, canvasHeight: number) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.size = Math.random() * 4 + 2; // Partículas maiores (2-6px)
			this.baseX = this.x;
			this.baseY = this.y;
			this.vx = 0;
			this.vy = 0;
			this.density = (Math.random() * 30) + 1;
		}

		update(mouseX: number, mouseY: number) {
			let dx = mouseX - this.x;
			let dy = mouseY - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let forceDirectionX = dx / distance;
			let forceDirectionY = dy / distance;
			let maxDistance = 200; // Raio de interação um pouco maior
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
				if (this.y !== this.baseY) {
					let dy = this.y - this.baseY;
					this.y -= dy / 20;
				}
			}
		}

		draw(ctx: CanvasRenderingContext2D, color: string) {
			ctx.fillStyle = color;
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
		
		// Cores complementares com contraste:
		// Dia (fundo claro): Partículas escuras (Navy Blue)
		// Noite (fundo escuro): Partículas claras (Luminous Blue/Cyan)
		const color = environment.dayCycle === 'day' 
			? 'rgba(15, 23, 42, 0.6)' 
			: 'rgba(191, 219, 254, 0.7)';
		
		for (let p of particles) {
			p.update(environment.mouse.x, environment.mouse.y);
			p.draw(ctx, color);
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
