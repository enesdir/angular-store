import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, CurrencyPipe, NgFor } from '@angular/common';
import { Product } from '../../../models/product';
import { ProductSingleCardComponent } from '../product-single-card/product-single-card.component';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [NgFor, DragDropModule, ProductSingleCardComponent],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = <Product[]>[];

  constructor() {}
  get pagedProducts() {
    return this.products;
  }
  ngOnInit(): void {}
  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.pagedProducts, event.previousIndex, event.currentIndex);
  }
}
