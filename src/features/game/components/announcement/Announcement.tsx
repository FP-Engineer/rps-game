import { Label } from '../../../../components/label';
import { Choice, Result } from '../../types';
import { optionsMap } from '../constants';
import { Option } from '../option';

import {
	useComputerChoice as defaultComputerChoice,
	useResult as defaultResult,
	useUserChoice as defaultUserChoice,
} from '../../repos';

import {
	container,
	p1Choice,
	p2Choice,
	p1Label,
	p2Label,
	resultLabel,
} from './Announcement.css';

export interface Props {
	playerOneChoice?: Choice;
	playerTwoChoice?: Choice;
	result?: Result;
}

export const Announcement: React.FC<Props> = ({
	playerOneChoice = defaultUserChoice() ?? Choice.initial,
	playerTwoChoice = defaultComputerChoice() ?? Choice.initial,
	result = defaultResult() ?? Result.pending,
}) => {
	const P1Choice = optionsMap.get(playerOneChoice) ?? Option;
	const P2Choice = optionsMap.get(playerTwoChoice) ?? Option;
	const getResultMessage = (result: Result) => {
		
		switch (result) {
		case Result.draw:	return 'DRAW';
		case Result.win:	return 'YOU WIN';
		case Result.pwnd:	return 'YOU LOSE';
		default:			return 'UNDETERMINED';
		}
	};
	const resultMessage = getResultMessage(result);

	return (
		<div className={ container }>
			<Label className={ p1Label }>YOU PICKED</Label>
			<span className={ p1Choice } ><P1Choice glow={ Result.win === result } /></span>
			<Label className={ p2Label }>THE HOUSE PICKED</Label>
			<span className={ p2Choice }><P2Choice glow={ Result.pwnd === result } /></span>
			<Label className={ resultLabel }>{ resultMessage }</Label>
		</div>
	);
};

export default Announcement;