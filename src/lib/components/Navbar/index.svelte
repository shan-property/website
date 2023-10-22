<script lang="ts">
	import { TITLE } from '$lib/config';
	import { Button, Input, NavBrand, NavHamburger, NavUl } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import DarkMode from '../DarkMode.svelte';
	import Favicon from '../Svgs/Favicon.svelte';
	import NavLi from './NavLi.svelte';

	export let bg: boolean;
</script>

<div class="relative z-10">
	<nav
		class="fixed w-full divide-gray-100 border-gray-100 px-2 py-2 transition-colors dark:divide-gray-700 sm:px-4 sm:py-0.5 {bg
			? 'bg-background/98'
			: 'bg-background/2 text-white backdrop-blur-sm'}"
	>
		<div
			class="container mx-auto flex flex-wrap items-center justify-around gap-x-3 sm:justify-between"
		>
			<NavBrand href="">
				<Favicon class="mr-2 h-8 sm:mr-3 sm:h-9" />
				<span
					class="transition-navbar-bg-text self-center whitespace-nowrap font-bold text-text {bg
						? 'text-lg'
						: 'text-lg sm:text-xl'}"
				>
					{TITLE}
				</span>
			</NavBrand>
			<div class="flex">
				<Button
					color="none"
					data-collapse-toggle="mobile-menu-3"
					aria-controls="mobile-menu-3"
					aria-expanded="false"
					class="mr-1 rounded-lg p-2.5 text-sm md:hidden"
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
				<DarkMode btnClass="block md:hidden" />
				<NavHamburger />
			</div>
			<NavUl
				nonActiveClass=""
				ulClass="bg-background-dark/5 mt-4 flex flex-col items-center rounded px-3 py-1.5 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
			>
				<NavLi {bg} href="" active={true}>Home</NavLi>
				<NavLi {bg} href="">Properties</NavLi>
				<NavLi {bg} href="">News</NavLi>
				<Button
					class="dark:bg-primary/75 border-2 border-primary font-bold text-primary transition-colors hocus:bg-primary hocus:text-text-variant dark:border-transparent dark:text-text dark:hocus:border-primary dark:hocus:bg-primary"
					size="sm"
				>
					Contact Us
				</Button>
				<DarkMode btnClass="hidden md:block" />
			</NavUl>
		</div>
	</nav>
</div>
