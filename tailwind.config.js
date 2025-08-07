/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{vue,js,ts}',
		'./layouts/**/*.{vue,js,ts}',
		'./pages/**/*.{vue,js,ts}',
		'./app.vue',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"TT Commons"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
