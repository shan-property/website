<script lang="ts">
	import { base } from '$app/paths';
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	interface $$Props extends DivProps {}

	let container: HTMLDivElement;

	onMount(() => {
		const animation = lottie.loadAnimation({
			container,
			path: `${base}/animations/loading.json`,
			loop: true,
			autoplay: true,
			renderer: 'svg'
		});
		return () => {
			animation.destroy();
		};
	});
</script>

<div {...$$props} bind:this={container} />
