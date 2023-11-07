import { rules } from '.';

export const options = [...new Set(rules.map(({choice}) => choice))];