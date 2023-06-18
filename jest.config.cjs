module.exports = {
	preset: 'ts-jest/presets/js-with-ts',
	testMatch: [
		'<rootDir>/src/**/*.spec.tsx',
	],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'dist/',
		'main.tsx',
		'<rootDir>/src/types/',
	],
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,ts,tsx,jsx}',
		'!<rootDir>/src/**/*.d.ts',
		'!<rootDir>/src/components/**/*.css.ts',
		'!<rootDir>/src/components/**/*.stories.*',
		'!<rootDir>/**/index.ts',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	testEnvironment: 'jsdom',
	transform: {
		'\\.css\\.ts$': '@vanilla-extract/jest-transform',
	}
};