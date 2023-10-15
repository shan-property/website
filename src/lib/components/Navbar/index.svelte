<script lang="ts">
	import { TITLE } from '$lib/config';
	import { Button, Input, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
</script>

<div class="relative">
	<Navbar class="fixed bg-transparent">
		<NavBrand href="/">
			<img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt={TITLE} />
			<span class="self-center whitespace-nowrap text-xl font-bold text-white">
				{TITLE}
			</span>
		</NavBrand>
		<div class="flex md:order-2">
			<Button
				color="none"
				data-collapse-toggle="mobile-menu-3"
				aria-controls="mobile-menu-3"
				aria-expanded="false"
				class="mr-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
			>
				<SearchOutline class="h-5 w-5" />
			</Button>
			<div class="relative hidden md:block">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchOutline class="h-4 w-4" />
				</div>
				<Input id="search-navbar" class="pl-10" placeholder="Search..." />
			</div>
			<NavHamburger />
		</div>
		<NavUl
			nonActiveClass="navbar-navli text-white underline decoration-transparent decoration-2 transition-colors hocus:decoration-white"
		>
			<NavLi href="/" active={true}>
				<span class="font-bold">Home</span>
			</NavLi>
			<NavLi href="/properties">
				<span class="font-bold">Properties</span>
			</NavLi>
			<NavLi href="/contact">
				<span class="font-bold">Contact</span>
			</NavLi>
			<NavLi href="/news">
				<span class="font-bold">News</span>
			</NavLi>
		</NavUl>
	</Navbar>
</div>
