import type { Meta, StoryObj } from '@storybook/react';

import { Announcement } from './Announcement';
import { Choice, Result } from '../../types';

const meta = {
	title: 'Announcement',
	component: Announcement,
	argTypes: {},
} satisfies Meta<typeof Announcement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnnouncementStory: Story = {
	args: {
		playerOneChoice: Choice.scissors,
		playerTwoChoice: Choice.paper,
		result: Result.win,
	},
};