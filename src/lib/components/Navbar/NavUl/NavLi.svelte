<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import bg from '$lib/stores/bg';
	import { NavLi } from 'flowbite-svelte';

	export let href: string;
	$: based_href = `${base}${href}`;
	console.log(based_href, $page.url.pathname);
	$: active = based_href === $page.url.pathname;
</script>

<NavLi class="py-1.25 text-center sm:py-1.5 sm:text-start md:py-2" href={based_href} {active}>
	<span
		class="transition-navbar-bg-text afterline afterline-sm font-bold after:left-1/8 after:bg-primary sm:after:left-0 {active
			? 'text-primary dark:text-text'
			: `text-secondary-light after:origin-left after:scale-0 after:bg-opacity-0 after:transition-all hocus:text-text after:hocus:scale-100 after:hocus:bg-opacity-100 ${
					$bg ? '' : 'text-base md:hocus:text-text-light'
				}`}"
	>
		<slot />
	</span>
</NavLi>
