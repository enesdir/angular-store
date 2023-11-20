import type { Product } from './product';

export interface Products {
	limit: number;
	skip: number;
	total: number;
	products: Product[];
}
