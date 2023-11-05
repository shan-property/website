import type { GraphqlParams } from '@shopify/shopify-api';
import storefront from './connections/storefront';

export function query<T extends Record<string, unknown>>(
	data: GraphqlParams['data'],
	params: Omit<GraphqlParams, 'data'> = {}
) {
	return storefront.query<{ data: T }>({ data, ...params });
}
