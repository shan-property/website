<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { SvgProps } from '../Svgs/types';

	export let tag: string;

	$: Icon_promise = import(`$lib/components/Svgs/${tag}.svelte`) as Promise<{
		default: typeof SvelteComponent & { props: SvgProps };
	}>;
</script>

<section
	class="relative mt-0.25 flex rounded-bl-sm rounded-tr-sm bg-accent py-0.25 pe-1.25 ps-1 text-end text-sm sm:text-start"
>
	{#await Icon_promise}
		Loading...
	{:then { default: Icon }}
		<svelte:component this={Icon} class="h-5 w-4" />
	{/await}
	<div
		class="rest-letters absolute left-full top-0 z-10 -ms-0.5 overflow-hidden rounded-bl-sm rounded-tr-sm bg-accent py-0.25 transition-all"
	>
		{tag}
	</div>
</section>
