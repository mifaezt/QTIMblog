<template>
	<footer class="bg-purple-300 relative overflow-hidden">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
				<div>
					<p class="text-xs mb-2 sm:mb-4">Is there a project?</p>
					<h2 class="text-4xl sm:text-6xl lg:text-8xl font-normal">
						<NuxtLink href="#">
							<span
								class="underline underline-offset-4 sm:underline-offset-8 decoration-1 leading-tight"
								>Let's work</span
							><br class="hidden sm:block" />
							<span
								class="underline underline-offset-4 sm:underline-offset-8 decoration-1 leading-tight"
								>to</span
							>g<span
								class="underline underline-offset-4 sm:underline-offset-8 decoration-1 leading-tight"
								>ether</span
							>
						</NuxtLink>
					</h2>
				</div>

				<div class="space-y-6 sm:space-y-10 text-sm sm:ml-10 lg:ml-20">
					<div>
						<p class="mb-2 sm:mb-3">For all questions</p>
						<p>+7 (920) 278—00—68</p>
						<p>qtime@agency.com</p>
					</div>

					<div>
						<p class="mb-2 sm:mb-3">Office in Russia</p>
						<p class="mb-2 sm:mb-3">
							139 Ruben Station Lake<br />Drew, NM 52678
						</p>
						<button
							class="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full mt-2 sm:mt-0"
						>
							<img src="@/assets/icons/Arrow.svg" alt="Arrow" class="w-4 h-4" />
						</button>
					</div>

					<div>
						<p class="mb-2 sm:mb-3">Office in Dubai</p>
						<p class="mb-2 sm:mb-3">
							139 Ruben Station Lake<br />Drew, NM 52678
						</p>
						<button
							class="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full mt-2 sm:mt-0"
						>
							<img src="@/assets/icons/Arrow.svg" alt="Arrow" class="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>

			<div
				class="relative flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-16 pt-8 sm:pt-0"
			>
				<div
					class="flex gap-4 sm:gap-6 text-sm underline order-1 sm:order-none mb-4 sm:mb-0"
				>
					<NuxtLink href="#">Facebook</NuxtLink>
					<NuxtLink href="#">Instagram</NuxtLink>
					<NuxtLink href="#">Telegram</NuxtLink>
				</div>

				<button
					class="bg-black text-white rounded-full w-40 h-40 sm:w-60 sm:h-60 flex items-start justify-center pt-10 sm:pt-14 text-lg font-medium relative sm:absolute left-1/2 -translate-x-1/2 sm:translate-y-1/3 mb-6 sm:mb-0 order-3 sm:order-none"
				>
					Go
				</button>

				<div
					class="flex gap-4 sm:gap-6 text-sm underline order-2 sm:order-none mb-4 sm:mb-0"
				>
					<NuxtLink href="#">Behance</NuxtLink>
					<NuxtLink href="#">LinkedIn</NuxtLink>
					<NuxtLink href="#">Privacy Policy</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>
