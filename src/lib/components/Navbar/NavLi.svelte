<script lang="ts">
	import { NavLi } from 'flowbite-svelte';

	export let href: string;
	export let active = false;
</script>

<NavLi {href} {active}>
	<span
		class="relative font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-3/4 after:origin-left after:scale-0 after:bg-white/0 after:transition-all after:content-[''] after:hocus:scale-100 after:hocus:bg-white/100"
	>
		<slot />
	</span>
</NavLi>
