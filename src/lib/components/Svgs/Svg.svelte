<script lang="ts">
	import type { BaseSvgProps } from './types';

	// https://www.reddit.com/r/sveltejs/comments/10z18o2/specifying_class_prop_with_typescript
	interface $$Props extends BaseSvgProps {}

	export let box: number;
</script>

<svg {...$$restProps} viewBox="0 0 {box} {box}">
	<slot />
</svg>
