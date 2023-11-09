/// <reference types='vitest' />
import { defineConfig, mergeConfig } from 'vitest/config'
import config from './vite.config';

export default mergeConfig(config, defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			exclude: [
				'src/**/*.css.ts*',
			],
		},
	},
}));