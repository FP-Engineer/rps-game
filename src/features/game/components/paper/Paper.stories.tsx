import type { Meta, StoryObj } from '@storybook/react';

import { Paper } from './Paper';

const meta = {
	title: 'Paper',
	component: Paper,
	argTypes: {},
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaperStory: Story = {
	args: {},
};