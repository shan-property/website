<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard/index.svelte';
	import navbar_clip from '$lib/stores/navbar_clip';
	import products from '$lib/stores/products';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		products.update((products) => {
			for (const [id, product] of Object.entries(data.products.edges)) {
				products[id] = product.node;
			}
			return products;
		});
	});

	onMount(() => {
		$navbar_clip = true;
	});
</script>

<article class="flex flex-wrap justify-center gap-x-4 gap-y-3 py-6 pe-[5%] ps-[5%] md:pe-[11%]">
	{#each Object.entries($products) as [id, product] (id)}
		<PropertyCard {...product} />
	{/each}
</article>
