import storefront from '$server/connections/storefront';
import type { GraphqlParams } from '@shopify/shopify-api';

export function query<T>(data: GraphqlParams['data'], params: Omit<GraphqlParams, 'data'> = {}) {
	return storefront.query<{ data: T }>({ data, ...params });
}
