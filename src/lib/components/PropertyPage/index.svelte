<script lang="ts">
	import Biggerable from '$lib/components/Biggerable.svelte';
	import Image from '../images/Image.svelte';

	interface $$Props extends Shan.Product {}

	$: ({ descriptionHtml, featuredImage, title } = $$props as $$Props);

	const image_class = 'property-image';
</script>

<article class="container mx-auto lg:max-w-5xl xl:max-w-5xl 2xl:max-w-5xl">
	<Biggerable class="w-full" options=".{image_class}">
		<Image
			class="my-8 aspect-video w-full object-cover sm:rounded-lg md:rounded-xl {image_class}"
			src={featuredImage.url}
			alt={featuredImage.altText}
		/>
	</Biggerable>
	<h1>{title}</h1>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<p class="break-all">{@html descriptionHtml}</p>
</article>
