import BiggerPicture, { type BiggerPictureInstance } from 'bigger-picture/svelte';
import { writable } from 'svelte/store';

export type BiggerPictureOpenOptions = Parameters<BiggerPictureInstance['open']>[0];
type BiggerPictureValue = {
	[K in Exclude<keyof BiggerPictureInstance, 'setPosition'>]: BiggerPictureInstance[K];
} & {
	setPosition: (position: number) => void;
};
const bigger_picture = writable<BiggerPictureValue>();

export function initBiggerPicture() {
	const bigger_picture_instance = BiggerPicture({ target: document.body });

	function open(options: BiggerPictureOpenOptions) {
		bigger_picture_instance.open(options);
	}

	function close() {
		bigger_picture_instance.close();
	}

	function next() {
		bigger_picture_instance.next();
	}

	function prev() {
		bigger_picture_instance.prev();
	}

	function setPosition(position: number) {
		bigger_picture_instance.setPosition({ position });
	}

	bigger_picture.set({
		open,
		close,
		next,
		prev,
		setPosition
	});
}

export default bigger_picture;
