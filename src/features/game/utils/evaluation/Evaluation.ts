import { Choice, Result, Rule } from '../../types';

export function evaluate(lhs: Choice, rhs: Choice, rules: Array<Rule>): Result {

	if (lhs === rhs) {

		return Result.draw;
	}

	const rule = rules.find(({ choice }) => choice === lhs);

	if (!rule) {

		return Result.inapplicable;
	}

	const hasWon = rule.beats === rhs;
	const result = hasWon ? Result.win : Result.pwnd;

	return result;
}
