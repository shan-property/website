<script lang="ts">
	import { DarkMode } from 'flowbite-svelte';
	import { MoonSolid, SunSolid } from 'flowbite-svelte-icons';

	type DarkModeProps = (typeof DarkMode.prototype)['$$prop_def'];
	interface $$Props extends DarkModeProps {}
</script>

<DarkMode {...$$restProps}>
	<svelte:fragment slot="lightIcon">
		<MoonSolid />
	</svelte:fragment>
	<svelte:fragment slot="darkIcon">
		<SunSolid />
	</svelte:fragment>
</DarkMode>
