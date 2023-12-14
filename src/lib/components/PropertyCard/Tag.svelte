<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Loading from '../Loading.svelte';
	import type { SvgProps } from '../Svgs/types';

	export let tag: string;

	const Icon_class = 'h-6 w-6 sm:h-5 sm:w-5 ps-1.25 pe-0.5 sm:ps-1 sm:pe-0.75 py-0.25';

	$: Icon_promise = import(`$lib/components/Svgs/${tag}.svelte`) as Promise<{
		default: typeof SvelteComponent & { props: SvgProps };
	}>;
</script>

<div class="relative me-0.5 mt-0.25 {Icon_class}">
	<figure
		class="absolute left-0 top-0 z-10 flex rounded-br-sm rounded-tl-sm bg-accent/90 pe-0.5 sm:rounded-bl-sm sm:rounded-br-none sm:rounded-tl-none sm:rounded-tr-sm"
	>
		{#await Icon_promise}
			<Loading class={Icon_class} />
		{:then { default: Icon }}
			<svelte:component this={Icon} class={Icon_class} />
		{/await}
		<figcaption class="tag-label hidden overflow-hidden text-end text-sm transition-all sm:block">
			{tag}
		</figcaption>
	</figure>
</div>
