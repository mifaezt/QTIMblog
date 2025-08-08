<template>
	<footer class="bg-purple-300 relative overflow-hidden">
		<div class="max-w-7xl mx-auto px-6 py-16">
			<div class="grid grid-cols-2 gap-8">
				<div>
					<p class="text-xs mb-4">Is there a project?</p>
					<h2 class="text-8xl font-normal">
						<NuxtLink href="#">
							<span
								class="underline underline-offset-8 decoration-1 leading-tight"
								>Let’s work</span
							><br />
							<span
								class="underline underline-offset-8 decoration-1 leading-tight"
								>to</span
							>g<span
								class="underline underline-offset-8 decoration-1 leading-tight"
								>ether</span
							>
						</NuxtLink>
					</h2>
				</div>

				<div class="space-y-10 text-sm ml-20">
					<div>
						<p class="mb-3">For all questions</p>
						<p>+7 (920) 278—00—68</p>
						<p>qtime@agency.com</p>
					</div>

					<div>
						<p class="mb-3">Office in Russia</p>
						<p class="mb-3">139 Ruben Station Lake<br />Drew, NM 52678</p>
						<button
							class="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full"
						>
							<img src="@/assets/icons/Arrow.svg" alt="Arrow" class="w-4 h-4" />
						</button>
					</div>

					<div>
						<p class="mb-3">Office in Dubai</p>
						<p class="mb-3">139 Ruben Station Lake<br />Drew, NM 52678</p>
						<button
							class="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full"
						>
							<img src="@/assets/icons/Arrow.svg" alt="Arrow" class="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>

			<div class="relative flex justify-between items-center mt-16">
				<div class="flex gap-6 text-sm underline">
					<NuxtLink href="#">Facebook</NuxtLink>
					<NuxtLink href="#">Instagram</NuxtLink>
					<NuxtLink href="#">Telegram</NuxtLink>
				</div>

				<button
					class="bg-black text-white rounded-full w-60 h-60 flex items-start justify-center pt-14 text-lg font-medium absolute left-1/2 -translate-x-1/2 translate-y-1/3"
				>
					Go
				</button>

				<div class="flex gap-6 text-sm underline">
					<NuxtLink href="#">Behance</NuxtLink>
					<NuxtLink href="#">LinkedIn</NuxtLink>
					<NuxtLink href="#">Privacy Policy</NuxtLink>
				</div>
			</div>
		</div>
	</footer>
</template>
