// composables/useRandomImage.ts
import { onMounted, ref } from '#imports'

export default function useRandomImage() {
	const imageUrl = ref<string | null>(null)
	const error = ref<Error | null>(null)
	const isLoading = ref(false)

	const fetchRandomImage = async () => {
		const config = useRuntimeConfig()
		isLoading.value = true
		error.value = null

		try {
			const response = await fetch(
				'https://api.api-ninjas.com/v1/randomimage',
				{
					headers: {
						'X-Api-Key': config.public.apiNinjasKey,
						Accept: 'image/jpg',
					},
				}
			)

			if (!response.ok) throw new Error('Failed to fetch image')

			const blob = await response.blob()
			imageUrl.value = URL.createObjectURL(blob)
		} catch (err) {
			error.value = err as Error
			console.error('Image load error:', err)
			imageUrl.value = '/default-image.jpg'
		} finally {
			isLoading.value = false
		}
	}

	onMounted(fetchRandomImage)

	return {
		imageUrl,
		error,
		isLoading,
		fetchRandomImage,
	}
}
