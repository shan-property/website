<script lang="ts">
	import { NavLi } from 'flowbite-svelte';

	export let bg: boolean;
	export let href: string;
	export let active = false;
</script>

<NavLi {href} {active}>
	<span
		class="transition-navbar-bg-text relative font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-3/4 after:translate-y-1 after:bg-primary after:content-[''] {active
			? 'text-primary dark:text-text'
			: 'hocus:text-text-variant text-secondary after:origin-left after:scale-0 after:bg-opacity-0 after:transition-all after:hocus:scale-100 after:hocus:bg-opacity-100 dark:text-secondary-variant dark:hocus:text-text'}"
		class:text-base={!bg}
	>
		<slot />
	</span>
</NavLi>
