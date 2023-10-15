<script lang="ts">
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { TITLE } from '$lib/config';
	import { onMount } from 'svelte';
	import '../app.postcss';

	let scrollY = 0;

	onMount(() => {
		window.addEventListener('scroll', function () {
			scrollY = window.scrollY;
		});
	});
</script>

<svelte:head>
	<title>{TITLE}</title>
</svelte:head>

<Navbar bg={Boolean(scrollY)} />
<slot />
