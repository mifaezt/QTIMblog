<template>
	<div class="flex gap-2">
		<NuxtLink
			v-for="n in totalPages"
			:key="n"
			:to="{ query: { page: n } }"
			class="w-8 h-8 flex items-center justify-center rounded-full border text-sm"
			:class="{ 'bg-black text-white': n === currentPage }"
		>
			{{ n }}
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	currentPage: number
	totalPages: number
}>()
</script>
