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
		vx: number = 0;
		vy: number = 0;
		size: number;
		density: number;
		colorIndex: number;
		color: string = '';
		friction: number = 0.98; // Atrito menor para mais "deslize"

		constructor(canvasWidth: number, canvasHeight: number) {
			this.x = Math.random() * canvasWidth;
			this.y = Math.random() * canvasHeight;
			this.size = Math.random() * 4 + 2;
			// Pequena velocidade inicial aleatória para movimento constante
			this.vx = (Math.random() - 0.5) * 0.5;
			this.vy = (Math.random() - 0.5) * 0.5;
			this.density = (Math.random() * 20) + 1;
			this.colorIndex = Math.floor(Math.random() * 5);
			this.updateColor();
		}

		updateColor() {
			const palette = environment.dayCycle === 'day' ? dayPalette : nightPalette;
			this.color = palette[this.colorIndex];
		}

		update(mouseX: number, mouseY: number) {
			this.updateColor();
			
			// Interação com o Mouse (Física de Repulsão/Atração)
			let dx = mouseX - this.x;
			let dy = mouseY - this.y;
			let distance = Math.sqrt(dx * dx + dy * dy);
			let maxDistance = 200;

			if (distance < maxDistance) {
				const force = (maxDistance - distance) / maxDistance;
				const angle = Math.atan2(dy, dx);

				if (environment.isLeftClickActive) {
					const attractionForce = force * this.density * 0.8; 
					this.vx += Math.cos(angle) * attractionForce;
					this.vy += Math.sin(angle) * attractionForce;
					this.friction = 0.92;
				} else {
					const pushForce = force * this.density * 2;
					this.vx -= Math.cos(angle) * pushForce;
					this.vy -= Math.sin(angle) * pushForce;
					this.friction = 0.98;
				}
			}

			// COLISÃO COM O TEXTO (Hero Text Bounds)
			if (environment.textBounds) {
				const b = environment.textBounds;
				// Margem de segurança para a colisão
				const margin = 20;
				if (
					this.x > b.left - margin && 
					this.x < b.right + margin && 
					this.y > b.top - margin && 
					this.y < b.bottom + margin
				) {
					// Física de colisão simples: empurrar para a borda mais próxima
					const distLeft = Math.abs(this.x - (b.left - margin));
					const distRight = Math.abs(this.x - (b.right + margin));
					const distTop = Math.abs(this.y - (b.top - margin));
					const distBottom = Math.abs(this.y - (b.bottom + margin));

					const minDist = Math.min(distLeft, distRight, distTop, distBottom);

					if (minDist === distLeft) { this.vx -= 1.5; this.x = b.left - margin; }
					else if (minDist === distRight) { this.vx += 1.5; this.x = b.right + margin; }
					else if (minDist === distTop) { this.vy -= 1.5; this.y = b.top - margin; }
					else if (minDist === distBottom) { this.vy += 1.5; this.y = b.bottom + margin; }
					
					// Inverter um pouco a velocidade para o "kike"
					this.vx *= -0.5;
					this.vy *= -0.5;
				}
			}

			// Efeito TERREMOTO (Botão Direito)
			if (environment.shakeIntensity > 0) {
				this.vx += (Math.random() - 0.5) * environment.shakeIntensity;
				this.vy += (Math.random() - 0.5) * environment.shakeIntensity;
			}

			// Efeito de Scroll
			if (environment.scrollProgress > 0) {
				const gravity = environment.scrollProgress * 0.5;
				this.vy += gravity;
			}

			// Drift aleatório sutil
			this.vx += (Math.random() - 0.5) * 0.05;
			this.vy += (Math.random() - 0.5) * 0.05;

			// Aplicação de Velocidade e Atrito
			this.x += this.vx;
			this.y += this.vy;
			this.vx *= this.friction;
			this.vy *= this.friction;

			// Boundary Check & Bounce
			if (this.x < 0) { this.x = 0; this.vx *= -0.8; }
			if (this.x > canvas.width) { this.x = canvas.width; this.vx *= -0.8; }
			if (this.y < 0) { this.y = 0; this.vy *= -0.8; }
			if (this.y > canvas.height) { this.y = canvas.height; this.vy *= -0.5; }
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
