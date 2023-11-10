import type { Meta, StoryObj } from '@storybook/react';

import { Game } from './Game';

const meta = {
	title: 'Game',
	component: Game,
	argTypes: {},
} satisfies Meta<typeof Game>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GameStory: Story = {
	args: {},
};