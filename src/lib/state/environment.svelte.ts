import { browser } from '$app/environment';

export type WeatherType = 'sunny' | 'rainy' | 'cloudy';
export type DayCycle = 'day' | 'night';

class EnvironmentState {
	dayCycle = $state<DayCycle>('day');
	weather = $state<WeatherType>('sunny');
	mouse = $state({ x: 0, y: 0 });
	scrollProgress = $state(0);
	isLeftClickActive = $state(false);
	shakeIntensity = $state(0);
	textBounds = $state<DOMRect | null>(null);
	collisionMask = $state<{
		data: Uint8ClampedArray | null;
		width: number;
		height: number;
	}>({ data: null, width: 0, height: 0 });

	constructor() {
		if (browser) {
			this.updateCycle();
			
			window.addEventListener('mousemove', (e) => {
				this.mouse = { x: e.clientX, y: e.clientY };
			});

			window.addEventListener('mousedown', (e) => {
				if (e.button === 0) this.isLeftClickActive = true;
				if (e.button === 2) this.triggerShake();
			});

			window.addEventListener('mouseup', (e) => {
				if (e.button === 0) this.isLeftClickActive = false;
			});

			window.addEventListener('contextmenu', (e) => {
				e.preventDefault(); // Impedir menu padrão para o "terremoto"
			});

			window.addEventListener('scroll', () => {
				const height = window.innerHeight;
				this.scrollProgress = Math.min(window.scrollY / height, 1);
			}, { passive: true });

			// Loop para decair o shake
			const decayShake = () => {
				if (this.shakeIntensity > 0) {
					this.shakeIntensity *= 0.92;
					if (this.shakeIntensity < 0.1) this.shakeIntensity = 0;
				}
				requestAnimationFrame(decayShake);
			};
			decayShake();
		}
	}

	triggerShake() {
		this.shakeIntensity = 15;
	}

	private updateCycle() {
		const hour = new Date().getHours();
		this.dayCycle = (hour >= 6 && hour < 18) ? 'day' : 'night';
	}
}

export const environment = new EnvironmentState();
