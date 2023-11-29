import { writable } from 'svelte/store';

const products = writable<Record<string, Shan.Product>>({});

export default products;

export function updateProducts(edges: Storefront.QueryProducts.R['products']['edges']) {
	products.update((products) => {
		for (const { node } of edges) {
			products[node.id] = node;
		}
		return products;
	});
}

export function setProduct(product: Shan.Product) {
	products.update((products) => {
		products[product.id] = product;
		return products;
	});
}
