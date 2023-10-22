const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				'text-variant': 'var(--text-variant)',
				background: 'var(--background)',
				primary: 'var(--primary)',
				'primary-variant': 'var(--primary-variant)',
				secondary: 'var(--secondary)',
				'secondary-variant': 'var(--secondary-variant)',
				accent: 'var(--accent)',
				'accent-variant': 'var(--accent-variant)'
			},
			borderWidth: {
				2.5: '2.5px'
			}
		}
	},

	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
		require('flowbite/plugin')
	]
};

module.exports = config;
