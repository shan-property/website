<script lang="ts">
	import { Button, Input } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<Button
	color="none"
	data-collapse-toggle="mobile-menu-3"
	aria-controls="mobile-menu-3"
	aria-expanded="false"
	class="mr-1 rounded-lg p-2.5 text-sm text-secondary-light hocus:text-text md:hidden"
>
	<SearchOutline class="h-5 w-5" />
</Button>
<form
	class="search relative hidden text-secondary-dark focus-within:text-black dark:text-secondary-dark md:block"
>
	<Button type="submit" class="absolute inset-y-0 left-0 flex items-center pl-3 text-current">
		<SearchOutline class="h-4 w-4" />
	</Button>
	<Input
		id="search-navbar"
		class="all-themes:border-secondary-light all-themes:bg-white all-themes:text-current all-themes:placeholder:text-secondary-light pl-10"
		placeholder="Search..."
	/>
</form>
