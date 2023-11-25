import { writable } from 'svelte/store';

const products = writable<Record<string, Shan.Product>>({});

export default products;
