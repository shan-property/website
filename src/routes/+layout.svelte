<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { initBiggerPicture } from '$lib/stores/bigger_picture';
	import { onMount } from 'svelte';

	import 'bigger-picture/css';
	import '../app.postcss';

	onMount(() => {
		initBiggerPicture();
	});
</script>

<Head />

<Navbar />
<slot />
<footer class="pt-10" />
