import './global.css';

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'AWS Amplify'
	}
});

export default app;
