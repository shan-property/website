import { queryProduct } from '$server/statements/product';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return { product: queryProduct({ id: params.id }) };
};
