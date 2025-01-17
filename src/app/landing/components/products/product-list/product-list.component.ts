import { Component, Input } from '@angular/core';

import { ProductSingleCardComponent } from '@/landing/components/products/product-single-card/product-single-card.component';
import { Product } from '@/landing/models/product';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	imports: [ProductSingleCardComponent],
})
export class ProductListComponent {
	@Input({ required: true }) products!: Product[];

	constructor() {}
	get pagedProducts() {
		return this.products;
	}
}
