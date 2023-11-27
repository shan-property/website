<script lang="ts">
	import loading_animation from '$lib/animations/loading.json';
	import lottie from 'lottie-web';
	import { onMount } from 'svelte';

	interface $$Props extends DivProps {}

	let container: HTMLDivElement;

	onMount(() => {
		const animation = lottie.loadAnimation({
			container,
			animationData: loading_animation,
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
