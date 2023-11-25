<script lang="ts">
	import Featured from '$lib/components/Featured/Featured.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { TITLE } from '$lib/constants/config';
	import { obj_productType_heading, productType_arr } from '$lib/constants/product';
	import navbar_clip from '$lib/stores/navbar_clip';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		$navbar_clip = false;
	});
</script>

<Hero />

<header class="mb-4 flex justify-center">
	<h1 class="rounded-sm px-2.5 pt-1 text-center text-primary-variant dark:bg-bg-variant">
		{TITLE}
	</h1>
</header>

<article class="flex flex-col gap-9">
	{#each productType_arr as productType (productType)}
		{#await data.products[productType]}
			Loading...
		{:then products}
			<Featured heading={obj_productType_heading[productType]} data={products.edges} />
		{/await}
	{/each}
</article>
