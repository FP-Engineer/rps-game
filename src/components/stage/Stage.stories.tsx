import type { Meta, StoryObj } from '@storybook/react';

import { Stage } from './Stage';

const meta = {
	title: 'Stage',
	component: Stage,
	argTypes: {},
} satisfies Meta<typeof Stage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StageStory: Story = {
	args: {},
};