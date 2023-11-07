import { map } from 'rxjs/operators';
import { bind } from '@react-rxjs/core';
import { userChoice } from '../user-choice/UserChoice';
import { options } from '../../constants';
import { Choice } from '../../types';

export const computerChoices = userChoice.pipe(
	map(() => options.at(Math.floor(Math.random() * options.length)) ?? Choice.initial),
);

export const [useComputerChoice, computerChoice] = bind(
	computerChoices,
	Choice.initial
);