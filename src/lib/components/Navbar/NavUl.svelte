<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	setContext('activeUrl', writable(''));
	setContext('navbarContext', { activeClass: '', nonActiveClass: '' });

	const slide_params = { delay: 250, duration: 500, easing: quintOut };

	const hidden = getContext<Writable<boolean>>('navHidden');
</script>

{#if $hidden}
	<ul
		class="hidden items-center space-x-8 rounded bg-bg-dark/5 px-3 py-1.5 text-sm font-medium md:flex"
	>
		<slot />
	</ul>
{:else}
	<ul
		class="absolute left-auto right-auto top-navbar mb-2 mt-1 w-1/3 min-w-max rounded bg-bg2 px-1/8 pb-3 pt-1.5 shadow-md sm:right-1/8 sm:w-1/5 sm:px-[4.2%] sm:pb-2.5 sm:pt-2"
		transition:slide={slide_params}
	>
		<slot />
	</ul>
{/if}
