<script lang="ts">
	import bg from '$lib/stores/bg';
	import { NavLi } from 'flowbite-svelte';

	export let href: string;
	export let active = false;
</script>

<NavLi {href} {active}>
	<span
		class="transition-navbar-bg-text afterline afterline-sm font-bold after:bg-primary {active
			? 'text-primary dark:text-text'
			: `text-secondary-light after:origin-left after:scale-0 after:bg-opacity-0 after:transition-all after:hocus:scale-100 after:hocus:bg-opacity-100 ${
					$bg ? 'hocus:text-text' : 'hocus:text-text-light'
			  }`}"
		class:text-base={!$bg}
	>
		<slot />
	</span>
</NavLi>
