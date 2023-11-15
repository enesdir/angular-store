import type { Product } from './product';

export type Products = {
	limit: number;
	skip: number;
	total: number;
	products: Product[];
};
