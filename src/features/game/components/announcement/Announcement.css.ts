import { style } from '@vanilla-extract/css';

export const container = style({
	display: 'grid',
	blockSize: '100%',
	placeContent: 'center',
	color: 'white',
	gridTemplate: '1fr auto 1fr / auto auto',
	gridTemplateAreas: '"p1label . p2label" "p1choice result p2choice"',
	justifyItems: 'center',
	alignItems: 'center',
	gap: '1rem',
});

export const p1Label = style({
	gridArea: 'p1label',
});

export const p2Label = style({
	gridArea: 'p2label',
});

export const p1Choice = style({
	gridArea: 'p1choice',
});

export const p2Choice = style({
	gridArea: 'p2choice',
});

export const resultLabel = style({
	gridArea: 'result',
});