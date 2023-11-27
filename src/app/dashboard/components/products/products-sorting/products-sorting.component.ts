import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerArrowBadgeDownFilled } from '@ng-icons/tabler-icons';

import { ProductsService } from '@/landing/services/products.service';

@Component({
	selector: 'dash-products-sorting',
	templateUrl: './products-sorting.component.html',
	standalone: true,
	imports: [NgIconComponent, NgClass],
	viewProviders: [
		provideIcons({
			tablerArrowBadgeDownFilled,
		}),
	],
})
export class ProductsSortingComponent {
	@Input() public key!: string;
	constructor(private _productsService: ProductsService) {}

	public sortKey = this._productsService.sortKey;
	public sortMode = this._productsService.sortMode;

	public sortKeys = ['price', 'stock', 'rating'];

	public updateSortKey(sortKey: string) {
		this._productsService.updateSortKey(sortKey);
	}
}
