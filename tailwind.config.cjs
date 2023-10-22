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
				...ObjColorColorObj(['text', 'background', 'primary', 'secondary', 'accent'])
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

/**
 * @param {string} color
 */
function ColorObj(color) {
	return {
		DEFAULT: `var(--${color})`,
		light: `var(--${color}-light)`,
		dark: `var(--${color}-dark)`,
		variant: `var(--${color}-variant)`
	};
}

/**
 *
 * @param {string[]} color_arr
 */
function ObjColorColorObj(color_arr) {
	let obj = {};
	for (const color of color_arr) {
		obj[color] = ColorObj(color);
	}
	return obj;
}
