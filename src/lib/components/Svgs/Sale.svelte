<script lang="ts">
	import Svg from './Svg.svelte';
	import type { SvgProps } from './types';

	interface $$Props extends SvgProps {}

	const box = 24;
</script>

<Svg {...$$restProps} {box}>
	<path
		fill="currentColor"
		d="M12 2 7 6h2v4h2V8h2v2h2V6h2l-5-4zM3 6a1 1 0 0 0-1 1v6.484c0 .531.212 1.041.586 1.416L6 18.314V21h5l-.002-3.414a3.994 3.994 0 0 0-1.17-2.828l-4.242-4.41a2 2 0 0 0 0 2.828l1.777 1.845a.5.5 0 0 1-.707.708l-2.66-2.713c0-.006.004-.01.004-.016V7a1 1 0 0 0-1-1zm18 0a1 1 0 0 0-1 1v6c0 .006.004.01.004.016l-2.66 2.713a.5.5 0 0 1-.707-.708l1.777-1.845a2 2 0 0 0 0-2.828l-4.242 4.41a3.994 3.994 0 0 0-1.17 2.828L13 21h5v-2.686l3.414-3.414c.374-.375.586-.885.586-1.416V7a1 1 0 0 0-1-1z"
	/>
</Svg>
