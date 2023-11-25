import { Pipe, PipeTransform } from '@angular/core';

import { BaseProduct, Product } from '@/landing/models/product';

@Pipe({
	name: 'discount',
})
export class DiscountPipe implements PipeTransform {
	transform(products: BaseProduct[] | BaseProduct): Product[] | Product {
		if (Array.isArray(products)) {
			return products.map((product) => this.calculateDiscount(product));
		} else {
			return this.calculateDiscount(products);
		}
	}

	private calculateDiscount(product: BaseProduct): Product {
		const discountPrice = product.price - (product.price * product.discountPercentage) / 100;
		return { ...product, discountPrice };
	}
}
