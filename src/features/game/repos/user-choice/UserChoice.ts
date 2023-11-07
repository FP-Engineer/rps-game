import { bind } from '@react-rxjs/core';
import { createSignal } from '@react-rxjs/utils';
import { Choice } from '../../types';

export const [userChoices, sendChoice] = createSignal<Choice>();

export const [useUserChoice, userChoice] = bind(
	userChoices,
	Choice.initial,
);