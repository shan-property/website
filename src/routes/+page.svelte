<script lang="ts">
	import Featured from '$lib/components/Featured/Featured.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { TITLE } from '$lib/config';
	import obj_featured_heading_store, { featured_heading_arr } from '$lib/stores/featured';
	import { onMount } from 'svelte';

	onMount(() => {
		for (const heading of featured_heading_arr) {
			const store = obj_featured_heading_store[heading];
			const items = [];
			for (let i = 3; i--; )
				items.push({
					id: i.toString(),
					title: 'Loading...',
					description: 'Loading...'
				});
			store.set(items);
		}
	});
</script>

<Hero />

<h1 class="text-center text-primary-variant">{TITLE}</h1>

<article class="flex flex-col gap-9">
	{#each featured_heading_arr as heading}
		<Featured {heading} />
	{/each}
</article>
