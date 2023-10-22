<script lang="ts">
	import { Button, Input } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<Button
	color="none"
	data-collapse-toggle="mobile-menu-3"
	aria-controls="mobile-menu-3"
	aria-expanded="false"
	class="text-secondary-light mr-1 rounded-lg p-2.5 text-sm hocus:text-text md:hidden"
>
	<SearchOutline class="h-5 w-5" />
</Button>
<div class="relative hidden md:block">
	<div
		class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-secondary-variant"
	>
		<SearchOutline class="h-4 w-4" />
	</div>
	<Input id="search-navbar" class="pl-10" placeholder="Search..." />
</div>
