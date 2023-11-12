<script lang="ts">
	export let tag: string;

	$: first_letter = tag[0];
</script>

<section
	class="relative mt-0.25 flex rounded-e-sm bg-accent py-0.25 pe-1.25 ps-1 text-end text-sm text-text-variant sm:text-start"
>
	{first_letter}
	<div
		class="rest-letters absolute left-full top-0 z-10 -ms-0.5 overflow-hidden rounded-e-sm bg-accent py-0.25 transition-all"
	>
		{tag}
	</div>
</section>
