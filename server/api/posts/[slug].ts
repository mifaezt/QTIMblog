// server/api/posts/[slug].ts
export default defineEventHandler(event => {
	const { slug } = event.context.params as { slug: string }

	return {
		id: 1,
		slug,
		title: `Title for ${slug}`,
		excerpt: 'Excerpt of the article...',
		content: `<p>This is the full article for <strong>${slug}</strong>.</p>`,
	}
})
