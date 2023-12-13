import { map } from 'rxjs/operators';
import { userChoices } from '../user-choice/UserChoice';
import { options } from '../../constants';
import { Choice } from '../../types';
import { useObservable } from '../../../../hooks/use-observable/useObservalbe';

export const computerChoices = userChoices.pipe(
	map(() => options.at(Math.floor(Math.random() * options.length)) ?? Choice.initial),
);

export const useComputerChoice = () => useObservable(computerChoices);