<template>
	<main class="max-w-7xl mx-auto px-4 py-8 md:py-12">
		<h1 class="text-4xl md:text-5xl lg:text-6xl font-normal mb-10 md:mb-10">
			Articles
		</h1>

		<div v-if="pending" class="grid grid-cols-1 md:grid-cols-4 gap-8"></div>

		<div v-else-if="error" class="text-red-500">
			Error loading posts: {{ error.message }}
		</div>

		<div v-else-if="!posts.length" class="text-gray-500">No articles found</div>

		<template v-else>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
				aria-label="Articles list"
			>
				<BlogCard
					v-for="post in posts"
					:key="post.id"
					:post="post"
					class="hover:scale-[1.02] transition-transform"
				/>
			</div>

			<div class="mt-10">
				<Pagination :currentPage="page" :totalPages="totalPages" />
			</div>
		</template>
	</main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
const route = useRoute()

const page = computed(() => {
	const pageNum = Number(route.query.page) || 1
	return Math.max(1, pageNum)
})

const { data, error, pending } = await useAsyncData(
	() => useBlogPosts(page.value),
	{
		watch: [page],
		transform: res => {
			return res
		},
	}
)

const posts = computed(() => data.value?.posts || [])
const totalPages = computed(() => data.value?.totalPages || 1)

onMounted(() => {
	if (page.value < totalPages.value) {
		const nextPage = page.value + 1
		useBlogPosts(nextPage)
	}
})
</script>
