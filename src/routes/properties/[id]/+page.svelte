<script lang="ts">
	import { page } from '$app/stores';
	import navbar_clip from '$lib/stores/navbar_clip';
	import products, { setProduct } from '$lib/stores/products';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { id } = $page.params;
	$: product = id ? $products[id] : null;

	onMount(() => {
		setProduct(data.product);
	});

	onMount(() => {
		$navbar_clip = true;
	});
</script>

{#if product}
	<h1>{product.title}</h1>
{/if}
