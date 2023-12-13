<script lang="ts">
	import DarkMode from '$lib/components/DarkMode.svelte';
	import { Button } from 'flowbite-svelte';
	import NavLi from './NavLi.svelte';
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const active_url = writable('');
	setContext('activeUrl', active_url);

	const slide_params = { delay: 250, duration: 500, easing: quintOut };

	const activeClass =
		'text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent';
	const nonActiveClass = '';
	setContext('navbarContext', { activeClass, nonActiveClass });

	const hidden = getContext<Writable<boolean>>('navHidden');
</script>

{#if $hidden}
	<ul
		class="hidden items-center space-x-8 rounded bg-bg-dark/5 px-3 py-1.5 text-sm font-medium md:flex"
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
		<DarkMode />
	</ul>
{:else}
	<ul
		class="absolute left-auto right-auto top-navbar mb-2 mt-1 w-1/3 min-w-max rounded bg-bg2 px-1/8 pb-3 pt-1.5 shadow-md sm:right-1/8 sm:w-1/5 sm:px-[4.2%] sm:pb-2.5 sm:pt-2"
		transition:slide={slide_params}
	>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/properties/">Properties</NavLi>
		<NavLi href="/news/">News</NavLi>
		<Button
			class="mt-0.5 w-max border-2 border-primary font-bold text-primary transition-colors hocus:bg-primary hocus:text-text-variant dark:border-transparent dark:bg-primary/75 dark:text-text dark:hocus:border-primary dark:hocus:bg-primary sm:mt-1"
			size="sm"
		>
			Contact Us
		</Button>
	</ul>
{/if}
