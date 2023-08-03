import React from 'react';
import { Choice } from '../types';

export const optionsMap = new Map([
	[Choice.rock, React.lazy(() => import('./rock/Rock'))],
	[Choice.paper, React.lazy(() => import('./paper/Paper'))],
	[Choice.scissors, React.lazy(() => import('./scissors/Scissors'))],
]);