import { map } from 'rxjs/operators';
import { Result } from '../../types';
import { combineLatest } from 'rxjs';
import { evaluate } from '../../utils/evaluation/Evaluation';
import { rules } from '../../constants';
import { bind } from '@react-rxjs/core';
import { userChoice } from '../user-choice';
import { computerChoice } from '../computer-choice';

export const results = combineLatest([userChoice, computerChoice]).pipe(
	map(([userChoice, computerChoice]) => evaluate(userChoice, computerChoice, rules)),
);

export const [useResult] = bind(
	results,
	Result.pending,
);