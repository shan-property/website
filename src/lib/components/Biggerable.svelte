<script lang="ts">
	import bigger_picture from '$lib/stores/bigger_picture';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { BiggerableProps } from './Biggerable';

	interface $$Props extends BiggerableProps {}

	$: ({ options, ...props } = $$props as $$Props);

	const onClick: MouseEventHandler<HTMLButtonElement> = function (ev) {
		const _bigger_picture = $bigger_picture;
		if (!_bigger_picture) return;
		if (typeof options === 'string')
			options = { items: ev.currentTarget.querySelectorAll(options) };
		_bigger_picture.open(options);
	};
</script>

<button on:click={onClick} title="Open Bigger Picture" type="button" {...props}>
	<slot />
</button>
