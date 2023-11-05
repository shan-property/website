<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { NAVBAR_SCROLL_THRESHOLD } from '$lib/config';
	import bg from '$lib/stores/bg';
	import { onMount } from 'svelte';
	import '../app.postcss';

	let scrollY = 0;

	onMount(() => {
		window.addEventListener('scroll', function () {
			scrollY = window.scrollY;
			$bg = scrollY > NAVBAR_SCROLL_THRESHOLD;
		});
	});
</script>

<Head />

<Navbar />
<slot />
<footer class="pt-10" />
