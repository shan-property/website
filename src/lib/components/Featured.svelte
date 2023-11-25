<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard/index.svelte';
	import { updateProducts } from '$lib/stores/products';
	import { onMount } from 'svelte';

	export let heading: string;
	export let data: Storefront.QueryProducts.R['products']['edges'];

	onMount(() => {
		updateProducts(data);
	});
</script>

<section class="flex flex-wrap justify-center gap-y-3 px-1/10">
	<h2 class="afterline afterline-base mb-3 w-max font-serif text-xl after:left-1/8 after:bg-accent">
		{heading}
	</h2>

	<div class="relative basis-full overflow-x-hidden">
		<article class="flex gap-5 overflow-x-scroll">
			{#each data as { node } (node.id)}
				<PropertyCard {...node} />
			{/each}
		</article>
		<div
			class="absolute bottom-0 right-0 top-0 h-full w-1/10 max-w-[50px] bg-gradient-to-l from-bg2 to-bg2/0"
		></div>
	</div>
</section>
