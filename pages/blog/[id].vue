<template>
	<section class="max-w-3xl mx-auto px-4 py-12">
		<h1 class="text-4xl font-normal mb-4">{{ post?.title }}</h1>
		<NuxtImg
			v-if="imageUrl"
			:src="imageUrl"
			alt="random"
			class="rounded mb-6"
		/>
		<p class="text-black-600 leading-relaxed mb-4">About</p>
		<p class="text-black-600 leading-relaxed">{{ post?.description }}</p>
	</section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useBlogPost } from '~/composables/useBlogPost'

defineProps<{
	post: {
		id: string
		title: string
		preview: string
	}
}>()

const { imageUrl } = useRandomImage()

const route = useRoute()
const id = route.params.id as string

const { post } = await useBlogPost(id)
</script>

<style scoped></style>
