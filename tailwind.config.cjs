const plugin = require('tailwindcss/plugin');

const obj_color_color_obj = ObjColorColorObj([
	'text',
	'background',
	'primary',
	'secondary',
	'accent'
]);

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
				...obj_color_color_obj
			},
			borderWidth: {
				2.5: '2.5px'
			},
			opacity: {
				2: '.02',
				98: '.98'
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
function Color(color) {
	return `hsl(var(--${color}) / <alpha-value>)`;
}

/**
 * @param {string} color
 */
function ColorObj(color) {
	const color_obj = {
		DEFAULT: Color(color)
	};
	for (const variant of ['light', 'dark', 'variant']) {
		color_obj[variant] = Color(`${color}-${variant}`);
	}
	return color_obj;
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
