<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	const obj_name_props = {
		favicon: {
			box: 1563.19,
			inner: import('./Favicon.svelte')
		}
	} as const;

	export let name: keyof typeof obj_name_props;

	$: ({ box, inner } = obj_name_props[name]);
</script>

<svg {...$$restProps} viewBox="0 0 {box} {box}">
	{#if typeof inner === 'string'}
		{@html inner}
	{:else}
		{#await inner}
			<slot name="loading">
				<rect width="100%" height="100%" fill="currentColor" />
			</slot>
		{:then Inner}
			<Inner.default />
		{/await}
	{/if}
</svg>
