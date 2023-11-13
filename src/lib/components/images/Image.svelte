<script lang="ts">
	import { onMount } from 'svelte';
	import Loading from '../Loading.svelte';

	interface $$Props extends ImgProps {}

	let loading = true;

	onMount(() => {
		const image = Object.assign(new Image(), $$props);
		image.onload = () => {
			loading = false;
		};
	});
</script>

{#if loading}
	<Loading {...$$props} />
{:else}
	<!-- svelte-ignore a11y-missing-attribute -->
	<img {...$$props} />
{/if}
