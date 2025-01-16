import { CurrencyPipe, NgOptimizedImage, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { Product } from '@/landing/models/product';

@Component({
	selector: 'app-product-single-card',
	templateUrl: './product-single-card.component.html',
	imports: [CurrencyPipe, NgOptimizedImage, RouterLink, PercentPipe],
})
export class ProductSingleCardComponent {
	@Input({ required: true }) product!: Product;

	constructor() {}
}
