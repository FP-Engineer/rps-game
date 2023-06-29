export enum Choice {
	rock = 'rock',
	paper = 'paper',
	scissors = 'scissors',
}

export enum Result {
    win,
    pwnd,
    draw,
}

export interface Rule {
	choice: Choice;
	beats: Choice;
}

export const rules: Array<Rule> = [
	{choice: Choice.rock, beats: Choice.scissors},
	{choice: Choice.paper, beats: Choice.rock},
	{choice: Choice.scissors, beats: Choice.paper},
];
