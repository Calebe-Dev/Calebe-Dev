import { browser } from '$app/environment';

export type WeatherType = 'sunny' | 'rainy' | 'cloudy';
export type DayCycle = 'day' | 'night';

class EnvironmentState {
	dayCycle = $state<DayCycle>('day');
	weather = $state<WeatherType>('sunny');
	mouse = $state({ x: 0, y: 0 });

	constructor() {
		if (browser) {
			this.updateCycle();
			window.addEventListener('mousemove', (e) => {
				this.mouse = { x: e.clientX, y: e.clientY };
			});
			// In a real app, you'd fetch weather here
		}
	}

	private updateCycle() {
		const hour = new Date().getHours();
		this.dayCycle = (hour >= 6 && hour < 18) ? 'day' : 'night';
	}
}

export const environment = new EnvironmentState();
