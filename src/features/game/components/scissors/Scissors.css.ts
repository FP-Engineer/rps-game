import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'inline-block',
	vars: {
		'--color-light': 'hsl(40, 84%, 53%)',
		'--color-dark': 'hsl(39, 89%, 49%)',
	},
});