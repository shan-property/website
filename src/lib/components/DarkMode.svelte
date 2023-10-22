<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { MoonSolid, SunSolid } from 'flowbite-svelte-icons';

	type DarkModeProps = (typeof DarkMode.prototype)['$$prop_def'];
	interface $$Props extends DarkModeProps {}

	$: ({ btnClass, ...restProps } = $$props);
</script>

<DarkMode
	btnClass="text-secondary-light transition-colors hocus:text-text {btnClass}"
	{...restProps}
>
	<svelte:fragment slot="lightIcon">
		<MoonSolid />
	</svelte:fragment>
	<svelte:fragment slot="darkIcon">
		<SunSolid />
	</svelte:fragment>
</DarkMode>
