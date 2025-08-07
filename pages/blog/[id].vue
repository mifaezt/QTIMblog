<template>
	<section class="max-w-3xl mx-auto px-4 py-12">
		<h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
		<img v-if="imageUrl" :src="imageUrl" alt="random" class="rounded mb-6" />
		<p class="text-gray-700 leading-relaxed">{{ post?.description }}</p>
	</section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useBlogPost } from '~/composables/useBlogPost'

defineProps<{
	post: {
		id: string
		title: string
		preview: string
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

const route = useRoute()
const id = route.params.id as string

const { post } = await useBlogPost(id)
</script>
