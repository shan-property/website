<script lang="ts">
	export let title: string;
	export let featuredImage: {
		url: string;
		altText: string;
	};
	export let productType: ProductType;

	$: first_letter = productType[0];
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
	<aside class="mt-0.5">
		<section
			class="relative flex rounded-e-sm bg-accent py-0.25 pe-1.25 ps-1 text-end text-sm text-text-variant sm:text-start"
		>
			{first_letter}
			<div
				class="rest-letters absolute left-full top-0 z-10 -ms-0.5 overflow-hidden rounded-e-sm bg-accent py-0.25 transition-all"
			>
				{productType}
			</div>
		</section>
	</aside>
</article>
