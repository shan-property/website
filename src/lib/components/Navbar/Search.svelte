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
	class="hidden transition-colors duration-75 all-themes:text-secondary-light all-themes:focus-within:text-text-dark all-themes:hocus:text-secondary-dark md:block"
>
	<Input
		floatClass="absolute inset-y-0 left-0 flex items-center pl-3 all-themes:text-current"
		class="pl-9 all-themes:border-secondary all-themes:!bg-white all-themes:text-secondary-dark all-themes:placeholder:text-secondary-light all-themes:hocus:text-text-dark"
		placeholder="Search..."
	>
		<SearchOutline slot="left" class="h-4 w-4" />
	</Input>
</form>
