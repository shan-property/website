const plugin = require('tailwindcss/plugin');

const variant_arr = ['light', 'dark', 'variant'];
const obj_color_color_obj = ObjColorColorObj(
	['text', 'bg', 'primary', 'secondary', 'accent'],
	variant_arr
);

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
			aspectRatio: {
				photo: '3/2'
			},
			colors: {
				...obj_color_color_obj,
				bg2: Color('bg2')
			},
			content: {
				empty: "''"
			},
			borderWidth: {
				2.5: '2.5px'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Josefin Sans', 'serif']
			},
			opacity: {
				2: '.02',
				98: '.98'
			},
			spacing: {
				'1/8': '12.5%',
				'1/10': '10%'
			}
		}
	},

	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
			addVariant('all-themes', ['&', ':is(.dark &)']);
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
 * @param {string[]} variant_arr
 */
function ColorObj(color, variant_arr) {
	const color_obj = {
		DEFAULT: Color(color)
	};
	for (const variant of variant_arr) {
		color_obj[variant] = Color(`${color}-${variant}`);
	}
	return color_obj;
}

/**
 *
 * @param {string[]} color_arr
 * @param {string[]} variant_arr
 */
function ObjColorColorObj(color_arr, variant_arr) {
	let obj = {};
	for (const color of color_arr) {
		obj[color] = ColorObj(color, variant_arr);
	}
	return obj;
}
