import { Rule } from '../types/Rule';
import { Choice } from '../types/Choice';


export const rules: Array<Rule> = [
	{ choice: Choice.rock, beats: Choice.scissors },
	{ choice: Choice.paper, beats: Choice.rock },
	{ choice: Choice.scissors, beats: Choice.paper },
];
