import type { Meta, StoryObj } from '@storybook/react';

import { PlayerTurn } from './PlayerTurn';
import { Choice } from '../../types';

const meta = {
	title: 'PlayerTurn',
	component: PlayerTurn,
	argTypes: {},
} satisfies Meta<typeof PlayerTurn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PlayerTurnStory: Story = {
	args: {
		options: [Choice.rock, Choice.paper, Choice.scissors],
	},
};