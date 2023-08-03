import { Choice } from '../types';
import { Rock } from './rock';
import { Paper } from './paper';
import { Scissors } from './scissors';

export const optionsMap = new Map([
	[Choice.rock, Rock],
	[Choice.paper, Paper],
	[Choice.scissors, Scissors],
]);