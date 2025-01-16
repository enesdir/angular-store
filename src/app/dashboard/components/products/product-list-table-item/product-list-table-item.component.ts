import { CurrencyPipe, NgOptimizedImage, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowSmallRight } from '@ng-icons/heroicons/outline';

import { Product } from '@/landing/models/product';

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: '[product-list-table-item]',
	templateUrl: './product-list-table-item.component.html',
	imports: [NgIconComponent, NgOptimizedImage, CurrencyPipe, PercentPipe],
	viewProviders: [
		provideIcons({
			heroArrowSmallRight,
		}),
	],
})
export class ProductListTableItemComponent {
	@Input() product = <Product>{};

	constructor() {}
}
