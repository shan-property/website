<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';

	let scrollY = 0;

	onMount(() => {
		window.addEventListener('scroll', function () {
			scrollY = window.scrollY;
		});
	});
</script>

<Head />

<Navbar bg={Boolean(scrollY)} />
<slot />
