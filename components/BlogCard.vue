<template>
	<NuxtLink
		:to="`/blog/${post.id}`"
		class="group block relative hover: transition-all duration-300 transform hover:-translate-y-5"
	>
		<div class="overflow-hidden mb-4 aspect-square">
			<NuxtImg
				v-if="imageUrl"
				:src="imageUrl"
				:alt="post.title"
				class="w-full h-full object-cover transition"
			/>
		</div>

		<p class="text-black-500 text-xl line-clamp-3 mt-8">
			{{ post.description }}
		</p>
		<p
			class="absolute left-4 bottom-4 text-xl text-blue-600 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
		>
			Read more
		</p>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

defineProps<{
	post: {
		id: string
		title: string
		preview: string
		description: string
		post: BlogPost
	}
}>()
const { imageUrl } = useRandomImage()
</script>

<style scoped>
.block:hover .absolute {
	opacity: 1;
	transform: translateY(0);
	bottom: -10%;
	left: 0;
	color: var(--color-pink-light);
}
</style>
