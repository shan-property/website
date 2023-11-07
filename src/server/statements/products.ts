import { query } from './helpers';

type QueryT = {
	products: {
		edges: {
			node: {
				id: string;
				title: string;
				descriptionHtml: string;
				featuredImage: {
					altText: string;
					url: string;
				};
			};
		}[];
		pageInfo: {
			hasNextPage: boolean;
			endCursor: string;
		};
	};
};

export async function queryProducts({ n, cursor }: { n: number; cursor?: string }) {
	const res_promise = query<QueryT>({
		query: `query QueryProducts($n: Int!, $cursor: String) {
			products (first: $n, after: $cursor) {
				edges {
					node {
						id
						title
						descriptionHtml
						featuredImage {
							altText
							url
						}
					}
				}
				pageInfo {
					hasNextPage
					endCursor
				}
			}
		}`,
		variables: { n, cursor }
	});
	const res = await res_promise;
	return res.body.data.products;
}
