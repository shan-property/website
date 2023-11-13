// See https://kit.svelte.dev/docs/types#app

import type { HTMLAttributes } from 'svelte/elements';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Class = HTMLAttributes<HTMLElement>['class'];
	type DivProps = svelteHTML.IntrinsicElements['div'];

	type ProductType = 'Auction' | 'Rental' | 'Sale';
}

export {};
