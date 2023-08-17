import { style, keyframes } from '@vanilla-extract/css';

export const container = style({
	vars: {
		'--color-gradient-from': 'var(--color-light, lightgray)',
		'--color-gradient-to': 'var(--color-dark, darkgray)',
		'--color-shadow-inset': '#8080801f',
		'--color-shadow': 'color-mix(in hsl, var(--color-gradient-to), var(--color-shadow-inset) 20%)',
	},
	position: 'relative',
	inlineSize: 'clamp(8rem, 35.2vw, 12.5rem)',
	aspectRatio: '1',
	transition: 'all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)',
	':hover': {
		transform: 'scale(1.05)',
	},
});

export const button = style({
	cursor: 'pointer',
	boxShadow: `
		inset 0 0.5rem 0 var(--color-shadow-inset),
		0 0.5rem 0 var(--color-shadow)
	`,
	border: 'clamp(0.875rem, 3.733vw, 1.5rem) solid transparent',
	backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom, var(--color-gradient-from), var(--color-gradient-to))',
	backgroundOrigin: 'border-box',
	backgroundClip: 'content-box, border-box',
});

export const cycle = style({
	inlineSize: 'clamp(8rem, 35.2vw, 12.5rem)',
	aspectRatio: '1',
	position: 'absolute',
	display: 'inline-block',
	borderRadius: '50%',
	boxSizing: 'border-box',
});

const highlight = keyframes({
	'0%': {
		transform: 'scale(1)',
		opacity: '0.6',
	},
	'100%': {
		transform: 'scale(1.4)',
		opacity: '0',
	},
});

export const glow = style({
	backgroundColor: 'var(--color-dark, darkgray)',
	animationName: highlight,
	animationDuration: '2s',
	animationIterationCount: 'infinite',
});