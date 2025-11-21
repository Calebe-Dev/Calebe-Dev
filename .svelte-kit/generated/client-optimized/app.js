export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/blog": [3],
		"/cases/alphacompanyads": [4],
		"/cases/buenoswatertechnology": [5],
		"/cases/esquadriasmartins": [6],
		"/cases/grupooc": [7],
		"/cases/internetfibraagora": [8],
		"/cases/leadplanodesaude": [9],
		"/cases/linkdedicada": [10],
		"/cases/meupabxemnuvem": [11],
		"/cases/planotimempresa": [12],
		"/contato": [13],
		"/experiencia": [14],
		"/projetos": [15],
		"/servicos": [16],
		"/sobre": [17],
		"/solicitar-projeto": [18],
		"/solicitar-projeto/redirect": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';