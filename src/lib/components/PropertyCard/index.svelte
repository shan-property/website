<script lang="ts">
	import { base } from '$app/paths';
	import Image from '../images/Image.svelte';
	import Tag from './Tag.svelte';

	interface $$Props extends Shan.Product {}

	$: ({ id, title, featuredImage, productType } = $$props as $$Props);
</script>

<article
	class="flex sm:[&:hover_.rest-letters]:max-w-xs sm:[&:hover_.rest-letters]:pe-1.25 [&_.rest-letters]:max-w-0"
>
	<a href="{base}/properties/{id}">
		<figure class="relative h-max w-64 min-w-[200px] bg-bg-light p-1 shadow">
			<figcaption
				class="absolute bottom-0 left-1 bg-gradient-to-tr from-bg-light to-bg-light/90 pe-1.5 ps-0.5 pt-0.5 font-serif font-semibold text-text-dark"
			>
				{title}
			</figcaption>
			<Image
				src={featuredImage.url}
				alt={featuredImage.altText}
				class="aspect-photo object-cover"
			/>
		</figure>
	</a>
	<aside class="mt-0.25 text-text-variant">
		<Tag tag={productType} />
	</aside>
</article>
