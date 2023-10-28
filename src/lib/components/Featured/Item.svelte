<script lang="ts">
	import type { FeaturedItem } from '$lib/stores/featured';

	interface $$Props extends FeaturedItem {}

	$: ({ description, title } = $$props as $$Props);
</script>

<article class="flex flex-col gap-3">
	<h3 class="font-serif text-lg">{title}</h3>
	<p class="text-sm">{description}</p>
</article>
