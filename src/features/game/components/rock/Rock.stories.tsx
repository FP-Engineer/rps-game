import type { Meta, StoryObj } from '@storybook/react';

import { Rock } from './Rock';

const meta = {
	title: 'Rock',
	component: Rock,
	argTypes: {},
} satisfies Meta<typeof Rock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RockStory: Story = {
	args: {},
};