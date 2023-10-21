<script>
	import { DarkMode } from 'flowbite-svelte';
	import { MoonSolid, SunSolid } from 'flowbite-svelte-icons';
</script>

<DarkMode btnClass="">
	<svelte:fragment slot="lightIcon">
		<MoonSolid />
	</svelte:fragment>
	<svelte:fragment slot="darkIcon">
		<SunSolid />
	</svelte:fragment>
</DarkMode>
