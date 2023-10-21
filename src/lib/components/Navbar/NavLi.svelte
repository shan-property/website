<script lang="ts">
	import { NavLi } from 'flowbite-svelte';

	export let bg: boolean;
	export let href: string;
	export let active = false;
</script>

<NavLi {href} {active}>
	<span
		class="transition-navbar-bg-text relative font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-3/4 after:origin-left after:translate-y-1 after:scale-0 after:bg-primary after:bg-opacity-0 after:transition-all after:content-[''] after:hocus:scale-100 after:hocus:bg-primary after:hocus:bg-opacity-100 {active
			? 'text-primary'
			: ''}"
		class:text-base={!bg}
	>
		<slot />
	</span>
</NavLi>
