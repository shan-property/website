<script lang="ts">
	import { TITLE } from '$lib/config';
	import { Button, NavBrand, NavHamburger, NavUl } from 'flowbite-svelte';
	import DarkMode from '../DarkMode.svelte';
	import Favicon from '../Svgs/Favicon.svelte';
	import NavLi from './NavLi.svelte';
	import Search from './Search.svelte';

	export let bg: boolean;
</script>

<div class="relative z-10">
	<nav
		class="fixed w-full divide-gray-100 border-gray-100 px-2 py-2 transition-colors dark:divide-gray-700 sm:px-4 sm:py-0.5 {bg
			? 'bg-bg/98'
			: 'bg-bg/2 text-white backdrop-blur-sm'}"
	>
		<div
			class="container mx-auto flex flex-wrap items-center justify-around gap-x-5 sm:justify-between"
		>
			<NavBrand href="">
				<Favicon class="mr-2 h-8 sm:h-9 lg:mr-3" />
				<p
					class="transition-navbar-bg-text h-6 self-center whitespace-nowrap font-serif font-bold text-text {bg
						? 'text-lg'
						: 'text-lg sm:text-xl'}"
				>
					{TITLE}
				</p>
			</NavBrand>
			<div class="flex text-text">
				<Search />
				<DarkMode btnClass="block md:hidden" />
				<NavHamburger
					class={bg
						? 'text-text hocus:bg-secondary dark:hocus:bg-secondary'
						: 'text-text-light hocus:bg-secondary-dark dark:hocus:bg-secondary-dark'}
				/>
			</div>
			<NavUl
				nonActiveClass=""
				ulClass="mt-4 flex flex-col items-center rounded bg-bg-dark/5 px-3 py-1.5 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
			>
				<NavLi {bg} href="" active={true}>Home</NavLi>
				<NavLi {bg} href="">Properties</NavLi>
				<NavLi {bg} href="">News</NavLi>
				<Button
					class="border-2 border-primary font-bold text-primary transition-colors hocus:bg-primary hocus:text-text-variant dark:border-transparent dark:bg-primary/75 dark:text-text dark:hocus:border-primary dark:hocus:bg-primary"
					size="sm"
				>
					Contact Us
				</Button>
				<DarkMode btnClass="hidden md:block" />
			</NavUl>
		</div>
	</nav>
</div>
