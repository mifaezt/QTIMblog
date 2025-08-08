<template>
	<header class="w-full py-4 bg-white">
		<div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
			<NuxtLink to="/" class="text-3xl font-medium tracking-tight">
				QTIM
			</NuxtLink>

			<nav class="flex items-center gap-6">
				<NuxtLink to="/" class="text-sm text-gray-800 hover:text-gray-500">
					Works
				</NuxtLink>
				<NuxtLink to="/" class="text-sm text-gray-800 hover:text-gray-500">
					About
				</NuxtLink>

				<button
					class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
				>
					<img
						src="/assets/icons/flag.png"
						alt="English"
						class="w-4 h-4 object-cover"
					/>
				</button>

				<NuxtLink
					to="/"
					class="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition"
				>
					Let’s work
				</NuxtLink>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts"></script>
