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
			: `text-secondary-light after:origin-left after:scale-0 after:bg-opacity-0 after:transition-all after:hocus:scale-100 after:hocus:bg-opacity-100 ${
					bg ? 'hocus:text-text' : 'hocus:text-text-light'
			  }`}"
		class:text-base={!bg}
	>
		<slot />
	</span>
</NavLi>
