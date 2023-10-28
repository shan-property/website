import { writable, type Writable } from 'svelte/store';

export const featured_heading_arr = [
	'Featured Apartments for Rent',
	'Featured Apartments for Sale',
	'Auction'
] as const;

export type FeaturedHeading = (typeof featured_heading_arr)[number];
export type FeaturedItem = {
	id: string;
	title: string;
	description: string;
};
type FeaturedItems = ReadonlyArray<FeaturedItem>;
type FeaturedStore = Writable<FeaturedItems>;
const featuredStore = () => writable<FeaturedItems>([]);

const obj_featured_heading_store: Record<FeaturedHeading, FeaturedStore> = {} as never;
for (const heading of featured_heading_arr) obj_featured_heading_store[heading] = featuredStore();

export default obj_featured_heading_store;
