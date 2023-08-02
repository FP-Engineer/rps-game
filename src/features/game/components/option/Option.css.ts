import { style } from '@vanilla-extract/css';

export const container = style({
	vars: {
		'--color-gradient-from': 'var(--color-light, lightgray)',
		'--color-gradient-to': 'var(--color-dark, darkgray)',
		'--color-shadow-inset': '#8080801f',
		'--color-shadow': 'color-mix(in hsl, var(--color-gradient-to), var(--color-shadow-inset) 20%)',
	},
	cursor: 'pointer',
	display: 'inline-block',
	inlineSize: 'clamp(8rem, 35.2vw, 12.5rem)',
	aspectRatio: '1',
	borderRadius: '50%',
	boxSizing: 'border-box',
	boxShadow: `
		inset 0 0.5rem 0 var(--color-shadow-inset),
		0 0.5rem 0 var(--color-shadow)
	`,
	border: 'clamp(0.875rem, 3.733vw, 1.5rem) solid transparent',
	backgroundImage: 'linear-gradient(white, white), linear-gradient(to bottom, var(--color-gradient-from), var(--color-gradient-to))',
	backgroundOrigin: 'border-box',
	backgroundClip: 'content-box, border-box',
});