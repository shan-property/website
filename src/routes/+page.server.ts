import { LUCKY_N } from '$lib/constants/config';
import { productType_arr } from '$lib/constants/product';
import { queryProducts } from '$server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const data: { products: Record<Shan.Product['productType'], ReturnType<typeof queryProducts>> } =
		{
			products: {}
		} as never;

	for (const productType of productType_arr) {
		data.products[productType] = queryProducts({
			n: LUCKY_N,
			query: `product_type:${productType}`
		});
	}

	return data;
};
