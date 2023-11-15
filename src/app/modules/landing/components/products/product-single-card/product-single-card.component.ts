import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

import type { Product } from '@/modules/landing/models/product';

@Component({
	selector: '[product-single-card]',
	templateUrl: './product-single-card.component.html',
	standalone: true,
	imports: [NgStyle, CurrencyPipe],
})
export class ProductSingleCardComponent {
	@Input() product: Product = <Product>{};

	constructor() {}
}
