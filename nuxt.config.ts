export default defineNuxtConfig({
	compatibilityDate: '2025-08-07',
	css: ['@/assets/css/fonts.css', '@/assets/css/main.css'],
	devtools: { enabled: true },
	components: true,
	runtimeConfig: {
		public: {
			apiNinjasKey:
				process.env.NUXT_PUBLIC_API_NINJAS_KEY ||
				'vQIpjmmyUx3/jCMdd7zBRw==yxSAY5fBZUQJ2Hsf',
		},
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ['@nuxt/image'],
})
