import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'inline-block',
	vars: {
		'--color-light': 'hsl(230, 89%, 62%)',
		'--color-dark': 'hsl(230, 89%, 65%)',
	},
});