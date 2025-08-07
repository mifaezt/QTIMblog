<template>
	<div class="flex gap-2">
		<!-- Номера страниц -->
		<NuxtLink
			v-for="n in totalPages"
			:key="n"
			:to="{ query: { page: n } }"
			class="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors"
			:class="
				n === currentPage
					? 'bg-black text-white'
					: 'bg-[#f4f4f4] text-black hover:bg-[#e5e5e5]'
			"
		>
			{{ n }}
		</NuxtLink>

		<!-- Кнопка "вперёд" -->
		<NuxtLink
			v-if="currentPage < totalPages"
			:to="{ query: { page: currentPage + 1 } }"
			class="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors bg-[#f4f4f4] text-black hover:bg-[#e5e5e5]"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-4 h-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	currentPage: number
	totalPages: number
}>()
</script>
