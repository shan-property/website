<script lang="ts">
	import Head from '$lib/components/Head.svelte';
	import Navbar from '$lib/components/Navbar/index.svelte';
	import '../app.postcss';
</script>

<Head />

<Navbar />
<slot />
<footer class="pt-10" />
