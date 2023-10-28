<script lang="ts">
	import type { FeaturedHeading } from '$lib/stores/featured';
	import obj_featured_heading_store from '$lib/stores/featured';
	import Item from './Item.svelte';

	export let heading: FeaturedHeading;

	$: featured_items = obj_featured_heading_store[heading];
</script>

<section class="px-[10%]">
	<h2 class="afterline afterline-base mb-3 inline-block font-serif text-xl after:bg-accent">
		{heading}
	</h2>

	<section class="flex flex-wrap gap-5">
		{#each $featured_items as { id, ...item } (id)}
			<Item {id} {...item} />
		{/each}
	</section>
</section>
