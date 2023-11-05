import '@shopify/shopify-api/adapters/web-api';

import {
	HOSTNAME,
	HOSTSCHEME,
	SHOPIFY_API_KEY,
	SHOPIFY_API_SECRET,
	SHOPIFY_STOREFRONT_ACCESS_TOKEN
} from '$env/static/private';
import { LATEST_API_VERSION, shopifyApi } from '@shopify/shopify-api';
import ShanPError from '../Error';

if (HOSTSCHEME !== 'https' && HOSTSCHEME !== 'http')
	throw new ShanPError('HOSTSCHEME must be either http or https');

const shopify = shopifyApi({
	apiVersion: LATEST_API_VERSION,
	apiKey: SHOPIFY_API_KEY,
	apiSecretKey: SHOPIFY_API_SECRET,
	isEmbeddedApp: false,
	isCustomStoreApp: true,
	adminApiAccessToken: '_',
	privateAppStorefrontAccessToken: SHOPIFY_STOREFRONT_ACCESS_TOKEN,
	scopes: ['unauthenticated_read_product_listings', 'unauthenticated_read_product_tags'],
	hostScheme: HOSTSCHEME,
	hostName: HOSTNAME
});

export default shopify;
