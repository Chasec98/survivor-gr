/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				survivor: ['Survivor', 'sans-serif'],
				chelsea: ['Chelsea Market', 'sans-serif'],
				fredericka: ['Fredericka', 'sans-serif'],
				museo: ['Museo', 'sans-serif'],
			},
			brightness: {
				35: '.35',
			}
		},
	},
	plugins: [],
}
