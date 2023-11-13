<script lang="ts">
	import PropertyCard from '$lib/components/PropertyCard/index.svelte';
	import navbar_clip from '$lib/stores/navbar_clip';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		$navbar_clip = true;
	});
</script>

<article class="flex flex-wrap justify-center gap-x-4 gap-y-3 py-6 pe-[5%] ps-[5%] md:pe-[11%]">
	{#await data.products}
		<p>Loading...</p>
	{:then products}
		{#each products.edges as { node } (node.id)}
			<PropertyCard {...node} />
		{/each}
	{:catch error}
		<p>{error.message}</p>
	{/await}
</article>
