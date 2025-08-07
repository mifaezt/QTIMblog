<template>
	<NuxtLink :to="`/blog/${post.id}`" class="group block">
		<div class="rounded overflow-hidden mb-4">
			<img
				v-if="imageUrl"
				:src="imageUrl"
				alt="random"
				class="w-full h-full object-cover transition group-hover:scale-105"
			/>
		</div>
		<!-- <h2 class="text-lg font-semibold mb-2">{{ post.title }}</h2> -->
		<p class="text-black-500 text-xl line-clamp-3">{{ post.description }}</p>
		<!-- <p class="text-gray-500 text-sm line-clamp-3">{{ post.preview }}</p> -->
	</NuxtLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { BlogPost } from '~/types/blog'

defineProps<{
	post: {
		id: string
		title: string
		preview: string
		post: BlogPost
	}
}>()

const imageUrl = ref<string | null>(null)

onMounted(async () => {
	try {
		const response = await fetch('https://api.api-ninjas.com/v1/randomimage', {
			headers: {
				'X-Api-Key': 'vQIpjmmyUx3/jCMdd7zBRw==yxSAY5fBZUQJ2Hsf',
				Accept: 'image/jpg',
			},
		})
		const blob = await response.blob()
		imageUrl.value = URL.createObjectURL(blob)
	} catch (error) {
		console.error('Ошибка загрузки изображения', error)
	}
})
</script>
