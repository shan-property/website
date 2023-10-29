<script lang="ts">
	import type { FeaturedHeading } from '$lib/stores/featured';
	import obj_featured_heading_store from '$lib/stores/featured';
	import Item from './Item.svelte';

	export let heading: FeaturedHeading;

	$: featured_items = obj_featured_heading_store[heading];
</script>

<section class="px-1/10 flex flex-wrap justify-center gap-y-3">
	<h2 class="afterline afterline-base after:left-1/8 mb-3 w-max font-serif text-xl after:bg-accent">
		{heading}
	</h2>

	<section class="flex basis-full flex-wrap gap-5">
		{#each $featured_items as { id, ...item } (id)}
			<Item {id} {...item} />
		{/each}
	</section>
</section>
