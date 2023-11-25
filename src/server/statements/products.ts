import { query } from './helpers';

export async function queryProducts(params: Storefront.QueryProducts.P) {
	let gql_params = '$n: Int!';
	let gql_args = 'first: $n';
	if ('cursor' in params) {
		gql_params += ', $cursor: String';
		gql_args += ', after: $cursor';
	}
	if ('query' in params) {
		gql_params += ', $query: String';
		gql_args += ', query: $query';
	}
	const res_promise = query<Storefront.QueryProducts.R>({
		query: `query QueryProducts(${gql_params}) {
			products (${gql_args}) {
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
		variables: params
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
