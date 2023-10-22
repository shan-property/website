<script lang="ts">
	import Favicon from './Favicon.svelte';

	/* eslint-disable svelte/no-at-html-tags */
	const obj_name_props = {
		favicon: {
			box: 1563.19,
			inner: Favicon
		}
	} as const;

	export let name: keyof typeof obj_name_props;

	$: ({ box, inner } = obj_name_props[name]);
</script>

<svg {...$$restProps} viewBox="0 0 {box} {box}">
	{#if typeof inner === 'string'}
		{@html inner}
	{:else}
		<svelte:component this={inner} />
	{/if}
</svg>
