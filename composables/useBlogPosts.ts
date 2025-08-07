// composables/useBlogPosts.ts
// import { useFetch, createError } from '#app'
import type { BlogPost } from '~/types/blog'

export const useBlogPosts = async (page: number = 1, limit: number = 6) => {
	const offset = (page - 1) * limit

	const { data, error } = await useFetch<BlogPost[]>(
		`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`,
		{
			params: {
				limit,
				page,
			},
		}
	)

	if (error.value) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Ошибка при загрузке постов',
		})
	}

	const totalItems = 30 // можно задать вручную, API не возвращает total
	const totalPages = Math.ceil(totalItems / limit)

	return {
		posts: data.value || [],
		totalPages,
	}
}
