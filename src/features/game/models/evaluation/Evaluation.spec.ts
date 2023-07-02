import { renderHook } from '@testing-library/react-hooks';
import { useEvaluation } from './Evaluation';
import { Choice, Result } from '../../types';
import { rules } from '../../constants';

describe('useEvaluation test suite.', () => {

	it('Should recognize equal choices as draw.', () => {

		const hook = renderHook(() => useEvaluation([]));
		const result = hook.result.current.evaluate(Choice.rock, Choice.rock);

		expect(result).toBe(Result.draw);
	});

	it('Should communicate if no applicable rule was provided.', () => {

		const hook = renderHook(() => useEvaluation([]));
		const result = hook.result.current.evaluate(Choice.rock, Choice.scissors);

		expect(result).toBe(Result.inapplicable);
	});

	it('Should concider provided rules.', () => {

		const hook = renderHook(() => useEvaluation([{choice: Choice.paper, beats: Choice.scissors}]));
		const result = hook.result.current.evaluate(Choice.paper, Choice.scissors);

		expect(result).toBe(Result.win);
	});

	it('Should concider base rules.', () => {

		const hook = renderHook(() => useEvaluation(rules));
		const scissorsVsPaper = hook.result.current.evaluate(Choice.scissors, Choice.paper);
		const scissorsVsRock = hook.result.current.evaluate(Choice.scissors, Choice.rock);
		const rockVsScissors = hook.result.current.evaluate(Choice.rock, Choice.scissors);
		const rockVsPaper = hook.result.current.evaluate(Choice.rock, Choice.paper);
		const paperVsRock = hook.result.current.evaluate(Choice.paper, Choice.rock);
		const paperVsScissors = hook.result.current.evaluate(Choice.paper, Choice.scissors);


		expect(scissorsVsPaper).toBe(Result.win);
		expect(scissorsVsRock).toBe(Result.pwnd);
		expect(rockVsScissors).toBe(Result.win);
		expect(rockVsPaper).toBe(Result.pwnd);
		expect(paperVsRock).toBe(Result.win);
		expect(paperVsScissors).toBe(Result.pwnd);
	});
});