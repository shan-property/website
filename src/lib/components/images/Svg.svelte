<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	type Props = {
		box: number;
		inner: string | Promise<string> | Promise<typeof import('*?raw')>;
	};

	const obj_name_props = {
		favicon: {
			box: 1563.19,
			inner: import('./favicon.svg?raw')
		}
	} as const satisfies Record<string, Props>;

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
		{:then inner}
			{#if typeof inner === 'string'}
				{@html inner}
			{:else}
				{@html inner.default}
			{/if}
		{/await}
	{/if}
</svg>
