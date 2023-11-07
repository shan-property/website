import { queryProducts } from '$server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return { products: queryProducts({ n: 50 }) };
};
