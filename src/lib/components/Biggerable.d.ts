import type { BiggerPictureOpenOptions } from '$lib/stores/bigger_picture';

export type BiggerableProps = Omit<
	svelteHTML.IntrinsicElements['button'],
	'on:click' | 'onClick' | 'title' | 'type'
> & {
	/**
	 * Either bp.open options or a selector (querySelectorAll)
	 */
	options: BiggerPictureOpenOptions | string;
};
