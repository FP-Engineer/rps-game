/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
	base: '/rps-game',
	plugins: [
		react(),
		vanillaExtractPlugin(),
		svgr(),
	],
	envDir: '',
});
