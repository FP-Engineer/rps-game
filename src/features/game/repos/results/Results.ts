import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { evaluate } from '../../utils/evaluation/Evaluation';
import { rules } from '../../constants';
import { userChoices } from '../user-choice';
import { computerChoices } from '../computer-choice';
import { useObservable } from '../../../../hooks/use-observable/useObservalbe';

export const results = combineLatest([userChoices, computerChoices]).pipe(
	map(([userChoice, computerChoice]) => evaluate(userChoice, computerChoice, rules)),
);

export const useResult = () => useObservable(results);