<script lang="ts">
	import { base } from '$app/paths';
	import DarkMode from '$lib/components/DarkMode.svelte';
	import Favicon from '$lib/components/Svgs/Favicon.svelte';
	import { NAVBAR_SCROLL_THRESHOLD, TITLE } from '$lib/constants/config';
	import bg from '$lib/stores/bg';
	import navbar_clip from '$lib/stores/navbar_clip';
	import { NavBrand, NavHamburger } from 'flowbite-svelte';
	import NavUl from './NavUl/index.svelte';
	import Search from './Search.svelte';

	let scrollY = 0;
	let clientHeight: number;

	$: {
		$bg = $navbar_clip || scrollY > NAVBAR_SCROLL_THRESHOLD;
	}
</script>

<svelte:window bind:scrollY />

<div class="relative z-20">
	{#if $navbar_clip}<div style="height:{clientHeight}px" />{/if}
	<nav
		bind:clientHeight
		class="fixed top-0 w-full divide-gray-100 border-gray-100 px-2 py-2 transition-colors dark:divide-gray-700 sm:px-4 sm:py-0.5 {$bg
			? 'bg-bg/98'
			: 'bg-bg/2 text-white backdrop-blur-sm'}"
	>
		<div class="mx-auto flex flex-wrap items-center justify-around gap-x-5 md:w-min lg:w-auto">
			<NavBrand href="{base}/">
				<Favicon class="mr-2 h-8 sm:h-9 lg:mr-3" />
				<p
					class="transition-navbar-bg-text h-6 self-center whitespace-nowrap font-serif font-bold text-text {$bg
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
					class={$bg
						? 'text-text hocus:bg-secondary dark:hocus:bg-secondary'
						: 'text-text-light hocus:bg-secondary-dark dark:hocus:bg-secondary-dark'}
				/>
			</div>
			<NavUl />
		</div>
	</nav>
</div>
