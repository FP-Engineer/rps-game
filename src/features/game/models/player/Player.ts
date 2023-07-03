import { useCallback, useState } from "react";
import { Choice } from "../../types";

export interface Player {
    choice: Choice;
    choose: (choice: Choice) => void;
}

export function usePlayer() {

	const [choice, setChoice] = useState<Choice>(Choice.initial);
	const choose = useCallback(
		(choice: Choice) => setChoice(choice),
		[setChoice],
	);

	return { choice, choose };
}