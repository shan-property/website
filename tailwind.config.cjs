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
				gray: {
					'700a0': '#37415100'
				}
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
