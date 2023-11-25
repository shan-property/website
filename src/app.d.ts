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
	type ImgProps = svelteHTML.IntrinsicElements['img'];

	namespace Shan {
		type Product = {
			id: string;
			title: string;
			descriptionHtml: string;
			featuredImage: {
				altText: string;
				url: string;
			};
			productType: 'Auction' | 'Rent' | 'Sale';
		};
	}

	namespace Storefront {
		namespace QueryProducts {
			type P = {
				n: number;
				cursor?: string;
				/**
				 * @see https://shopify.dev/docs/api/storefront/2023-10/queries/products#argument-products-query
				 */
				query?: string;
			};

			type R = {
				products: {
					edges: {
						node: Shan.Product;
					}[];
					pageInfo: {
						hasNextPage: boolean;
						endCursor: string;
					};
				};
			};
		}
	}
}

export {};
