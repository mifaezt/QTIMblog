export default defineEventHandler(event => {
	const query = getQuery(event)
	const page = Number(query.page || 1)
	const perPage = 6

	const allPosts = [...Array(20)].map((_, i) => ({
		id: i + 1,
		title: `Post ${i + 1}`,
		slug: `post-${i + 1}`,
		excerpt: 'This is an example excerpt...',
		content: '<p>This is full HTML content of the post.</p>',
		// image: `https://picsum.photos/seed/${i}/600/400`,
	}))

	const posts = allPosts.slice((page - 1) * perPage, page * perPage)

	return {
		data: posts,
		meta: {
			totalPages: Math.ceil(allPosts.length / perPage),
		},
	}
})
