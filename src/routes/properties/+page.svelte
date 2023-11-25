<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard/index.svelte';
	import navbar_clip from '$lib/stores/navbar_clip';
	import products, { updateProducts } from '$lib/stores/products';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		updateProducts(data.products.edges);
	});

	onMount(() => {
		$navbar_clip = true;
	});
</script>

<article class="flex flex-wrap justify-center gap-x-4 gap-y-3 py-6 pe-[5%] ps-[5%] md:pe-[11%]">
	{#each Object.values($products) as product (product.id)}
		<PropertyCard {...product} />
	{/each}
</article>
