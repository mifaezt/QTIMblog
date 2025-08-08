import type { BlogPost } from '~/types/blog'

export const useBlogPost = async (id: string) => {
	const { data, error } = await useFetch<BlogPost>(
		`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`
	)

	if (error.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Статья не найдена',
		})
	}

	return {
		post: data.value,
	}
}
