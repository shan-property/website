import { query } from './helpers';

export async function queryProduct(params: Storefront.QueryProduct.P) {
	const gql_params = '$id: ID!';
	const gql_args = 'id: $id';
	const variables = {
		id: `gid://shopify/Product/${params.id}`
	};
	const res_promise = query<Storefront.QueryProduct.R>({
		query: `query QueryProduct(${gql_params}) {
			product (${gql_args}) {
				id
				title
				descriptionHtml
				featuredImage {
					altText
					url
				}
				productType
			}
		}`,
		variables
	});
	const res = await res_promise;
	const product = res.body.data.product;
	const id = product.id;
	product.id = id.substring(id.lastIndexOf('/') + 1);
	return product;
}
