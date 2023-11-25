import type { BaseProduct, Product } from './product';

export interface Pagination {
	limit: number;
	skip: number;
	total: number;
}
export interface BaseProducts extends Pagination {
	products: BaseProduct[];
}
export interface Products extends Pagination {
	products: Product[];
}
