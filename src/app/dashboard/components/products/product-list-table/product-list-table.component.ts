import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Product } from '@/landing/models/product';
import { ProductListTableItemComponent } from '../product-list-table-item/product-list-table-item.component';
import { ProductsSortingComponent } from '../products-sorting/products-sorting.component';

@Component({
	selector: 'dash-product-list-table',
	templateUrl: 'product-list-table.component.html',
	standalone: true,
	imports: [NgFor, ProductListTableItemComponent, ProductsSortingComponent],
})
export class ProductListTableComponent {
	@Input({ required: true }) products!: Product[];
}
