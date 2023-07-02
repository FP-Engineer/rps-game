import { useCallback } from 'react';
import { Choice, Result, Rule } from '../../types';

export interface Evaluation {
	evaluate: (lhs: Choice, rhs: Choice) => Result;
}

export function useEvaluation(rules: Array<Rule>): Evaluation {

	const evaluate = useCallback((lhs: Choice, rhs: Choice): Result => {

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
	}, [rules]);
	
	return { evaluate };
}
