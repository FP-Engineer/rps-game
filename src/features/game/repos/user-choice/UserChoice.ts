import { BehaviorSubject } from 'rxjs';
import { Choice } from '../../types';
import { useObservable } from '../../../../hooks/use-observable/useObservalbe';

export const userChoices = new BehaviorSubject(Choice.initial);

export const useUserChoice = () => useObservable(userChoices);