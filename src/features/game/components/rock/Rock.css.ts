import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'inline-block',
	vars: {
		'--color-light': 'hsl(349, 71%, 52%)',
		'--color-dark': 'hsl(349, 70%, 56%)',
	},
});