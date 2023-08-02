import type { Meta, StoryObj } from '@storybook/react';

import { Scissors } from './Scissors';

const meta = {
	title: 'Scissors',
	component: Scissors,
	argTypes: {},
} satisfies Meta<typeof Scissors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScissorsStory: Story = {
	args: {},
};