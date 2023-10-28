<script lang="ts">
	import Featured from '$lib/components/Featured.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { TITLE } from '$lib/config';
</script>

<Hero />

<h1 class="text-center text-primary-variant">{TITLE}</h1>

<article class="flex flex-col gap-9">
	<Featured title="Featured Apartments for Rent" />
	<Featured title="Featured Apartments for Sale" />
	<Featured title="Auction" />
</article>
