import { CurrencyPipe, NgOptimizedImage, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

import type { Product } from '@/modules/landing/models/product';

@Component({
	selector: 'app-product-single-card',
	templateUrl: './product-single-card.component.html',
	standalone: true,
	imports: [NgStyle, CurrencyPipe, NgOptimizedImage],
})
export class ProductSingleCardComponent {
	@Input({ required: true }) product!: Product;

	constructor() {}
}
