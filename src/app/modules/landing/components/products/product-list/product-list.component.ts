import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ProductSingleCardComponent } from '@/modules/landing/components/products/product-single-card/product-single-card.component';
import { Product } from '@/modules/landing/models/product';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	standalone: true,
	imports: [NgFor, DragDropModule, ProductSingleCardComponent],
})
export class ProductListComponent {
	@Input({ required: true }) products!: Product[];

	constructor() {}
	get pagedProducts() {
		return this.products;
	}
	onDrop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.pagedProducts, event.previousIndex, event.currentIndex);
	}
}
