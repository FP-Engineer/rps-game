import type { Meta, StoryObj } from '@storybook/react';

import { Option } from './Option';

const meta = {
	title: 'Option',
	component: Option,
	argTypes: {},
} satisfies Meta<typeof Option>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OptionStory: Story = {
	args: {
		label: '',
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		handleClick: () => {},
	},
};