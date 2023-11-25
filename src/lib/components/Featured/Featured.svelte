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

	<section class="flex basis-full flex-wrap gap-5">
		{#each data as { node } (node.id)}
			<PropertyCard {...node} />
		{/each}
	</section>
</section>
