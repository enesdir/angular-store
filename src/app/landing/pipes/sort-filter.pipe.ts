import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '@/landing/models/product';

@Pipe({
	name: 'app-products-sort',
})
export class ProductsSortPipe implements PipeTransform {
	transform(products: Product[], sortKey: string, sortMode: 'asc' | 'desc' | 'disabled'): Product[] {
		if (sortMode === 'disabled') {
			return products;
		}

		if (sortKey === 'price') sortKey = 'discountPrice';

		return products.sort((a, b) => {
			if (a[sortKey] < b[sortKey]) return sortMode === 'asc' ? -1 : 1;
			if (a[sortKey] > b[sortKey]) return sortMode === 'asc' ? 1 : -1;
			return 0;
		});
	}
}
