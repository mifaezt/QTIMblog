<template>
	<section class="max-w-7xl mx-auto px-4 py-12">
		<h1 class="text-4xl font-bold mb-10">Articles</h1>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<BlogCard v-for="post in posts" :key="post.id" :post="post" />
		</div>
		<div class="mt-10">
			<Pagination :currentPage="page" :totalPages="totalPages" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import BlogCard from '~/components/BlogCard.vue'
import Pagination from '~/components/Pagination.vue'
import { useBlogPosts } from '~/composables/useBlogPosts'

const route = useRoute()
const page = Number(route.query.page || 1)

const { posts, totalPages } = await useBlogPosts(page)
</script>
