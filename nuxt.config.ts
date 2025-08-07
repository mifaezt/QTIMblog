export default defineNuxtConfig({
	css: ['@/assets/css/fonts.css', '@/assets/css/main.css'],
	devtools: { enabled: true },
	components: true,
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
