export default defineNuxtConfig({
	compatibilityDate: '2025-08-07',
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
