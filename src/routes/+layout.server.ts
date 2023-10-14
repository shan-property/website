import { PUBLIC_TITLE } from '$env/static/public';

export async function load() {
	return {
		title: PUBLIC_TITLE
	};
}
