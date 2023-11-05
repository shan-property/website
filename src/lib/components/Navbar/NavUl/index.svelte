<script lang="ts">
	import DarkMode from '$lib/components/DarkMode.svelte';
	import { Button, NavUl } from 'flowbite-svelte';
	import NavLi from './NavLi.svelte';
</script>

<NavUl
	nonActiveClass=""
	ulClass="mt-4 flex flex-col items-center rounded bg-bg-dark/5 px-3 py-1.5 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
>
	<NavLi href="/">Home</NavLi>
	<NavLi href="/properties/">Properties</NavLi>
	<NavLi href="/news/">News</NavLi>
	<Button
		class="w-max border-2 border-primary font-bold text-primary transition-colors hocus:bg-primary hocus:text-text-variant dark:border-transparent dark:bg-primary/75 dark:text-text dark:hocus:border-primary dark:hocus:bg-primary"
		size="sm"
	>
		Contact Us
	</Button>
	<DarkMode btnClass="hidden md:block" />
</NavUl>
