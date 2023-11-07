import { evaluate } from './Evaluation';
import { Choice, Result } from '../../types';
import { rules } from '../../constants';

describe('useEvaluation test suite.', () => {

	it('Should recognize equal choices as draw.', () => {

		const result = evaluate(Choice.rock, Choice.rock, []);

		expect(result).toBe(Result.draw);
	});

	it('Should communicate if no applicable rule was provided.', () => {

		const result = evaluate(Choice.rock, Choice.scissors, []);

		expect(result).toBe(Result.inapplicable);
	});

	it('Should concider provided rules.', () => {

		const result = evaluate(Choice.paper, Choice.scissors, [{
			choice: Choice.paper,
			beats: Choice.scissors,
		}]);

		expect(result).toBe(Result.win);
	});

	it('Should concider base rules.', () => {

		const scissorsVsPaper = evaluate(Choice.scissors, Choice.paper, rules);
		const scissorsVsRock = evaluate(Choice.scissors, Choice.rock, rules);
		const rockVsScissors = evaluate(Choice.rock, Choice.scissors, rules);
		const rockVsPaper = evaluate(Choice.rock, Choice.paper, rules);
		const paperVsRock = evaluate(Choice.paper, Choice.rock, rules);
		const paperVsScissors = evaluate(Choice.paper, Choice.scissors, rules);

		expect(scissorsVsPaper).toBe(Result.win);
		expect(scissorsVsRock).toBe(Result.pwnd);
		expect(rockVsScissors).toBe(Result.win);
		expect(rockVsPaper).toBe(Result.pwnd);
		expect(paperVsRock).toBe(Result.win);
		expect(paperVsScissors).toBe(Result.pwnd);
	});
});