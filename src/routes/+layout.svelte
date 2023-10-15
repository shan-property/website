<script lang="ts">
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import { TITLE } from '$lib/config';
</script>

<svelte:head>
	<title>{TITLE}</title>
</svelte:head>

<Navbar />
<slot />
