import { SHOPIFY_SHOP } from '$env/static/private';
import { LATEST_API_VERSION } from '@shopify/shopify-api';
import shopify from './shopify';

const session = shopify.session.customAppSession(SHOPIFY_SHOP);

const storefront = new shopify.clients.Storefront({ session, apiVersion: LATEST_API_VERSION });

export default storefront;
