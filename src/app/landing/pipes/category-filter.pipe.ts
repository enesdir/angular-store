import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '@/landing/models/product';

@Pipe({
	name: 'app-products-filter',
})
export class ProductsCategoryFilterPipe implements PipeTransform {
	transform(products: Product[], selectedCategory: string): Product[] {
		if (!selectedCategory || selectedCategory === 'All') {
			return products;
		} else {
			return products.filter((product) => product.category === selectedCategory);
		}
	}
}
