<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import bg from '$lib/stores/bg';

	setContext('activeUrl', writable(''));
	setContext('navbarContext', { activeClass: '', nonActiveClass: '' });

	const slide_params = { delay: 250, duration: 500, easing: quintOut };

	const hidden = getContext<Writable<boolean>>('navHidden');
</script>

{#if $hidden}
	<ul
		class="hidden items-center gap-x-7 rounded bg-bg-dark/5 px-4 py-1.5 font-medium md:flex {$bg
			? 'text-sm'
			: ''}"
	>
		<slot />
	</ul>
{:else}
	<ul
		class="absolute left-auto right-auto top-navbar mb-2 mt-1 rounded bg-bg/98 px-7.5 pb-5 pt-4.5 shadow-md sm:right-[15%] sm:ps-5 sm:pt-5"
		transition:slide={slide_params}
	>
		<slot />
	</ul>
{/if}
