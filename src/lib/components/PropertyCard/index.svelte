<script lang="ts">
	import Tag from './Tag.svelte';

	export let title: string;
	export let featuredImage: {
		url: string;
		altText: string;
	};
	export let productType: ProductType;
</script>

<article
	class="flex sm:[&:hover_.rest-letters]:max-w-xs sm:[&:hover_.rest-letters]:pe-1.25 sm:[&_.rest-letters]:max-w-0"
>
	<figure class="relative h-max w-64 min-w-[200px] rounded-sm bg-bg p-1 shadow">
		<figcaption
			class="absolute bottom-0 left-1 bg-gradient-to-tr from-bg to-bg/90 pe-1.5 ps-0.5 pt-0.5 font-serif font-bold"
		>
			{title}
		</figcaption>
		<img src={featuredImage.url} alt={featuredImage.altText} class="aspect-photo object-cover" />
	</figure>
	<aside class="mt-0.25">
		<Tag tag={productType} />
	</aside>
</article>
