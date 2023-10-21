<script lang="ts">
	import Svg from '$lib/components/images/Svg.svelte';
	import { TITLE } from '$lib/config';
	import { Button, Input, NavBrand, NavHamburger, NavUl, Navbar } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import DarkMode from '../DarkMode.svelte';
	import NavLi from './NavLi.svelte';

	export let bg: boolean;
</script>

<div class="relative">
	<Navbar class="fixed py-1 transition-colors {bg ? '' : 'bg-transparent text-white'}">
		<NavBrand href="">
			<Svg name="favicon" class="mr-2 h-8 sm:mr-3 sm:h-9" alt={TITLE} />
			<span
				class="transition-navbar-bg-text self-center whitespace-nowrap font-bold text-text {bg
					? 'text-lg'
					: 'text-lg sm:text-xl'}"
			>
				{TITLE}
			</span>
		</NavBrand>
		<!-- TODO: Restyle Search -->
		<div class="flex">
			<Button
				color="none"
				data-collapse-toggle="mobile-menu-3"
				aria-controls="mobile-menu-3"
				aria-expanded="false"
				class="mr-1 rounded-lg p-2.5 text-sm text-secondary hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
			>
				<SearchOutline class="h-5 w-5" />
			</Button>
			<div class="relative hidden md:block">
				<div
					class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700"
				>
					<SearchOutline class="h-4 w-4" />
				</div>
				<Input id="search-navbar" class="pl-10" placeholder="Search..." />
			</div>
			<div class="flex md:hidden">
				<DarkMode />
			</div>
			<NavHamburger />
		</div>
		<NavUl nonActiveClass="">
			<NavLi {bg} href="" active={true}>Home</NavLi>
			<!-- <NavLi {bg} href="properties">Properties</NavLi>
			<NavLi {bg} href="contact">Contact</NavLi>
			<NavLi {bg} href="news">News</NavLi> -->
		</NavUl>
		<div class="hidden md:flex">
			<DarkMode />
		</div>
	</Navbar>
</div>
