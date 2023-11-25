import { query } from './helpers';

type QueryT = {
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
						productType
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
	const products = res.body.data.products;
	let i = products.edges.length;
	while (i-- > 0) {
		const id = products.edges[i].node.id;
		products.edges[i].node.id = id.substring(id.lastIndexOf('/') + 1);
	}
	return products;
}
