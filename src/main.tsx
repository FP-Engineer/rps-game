/// <reference types="vite-plugin-svgr/client" />

import ReactDOM from 'react-dom/client';

import { App } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<App />
);
