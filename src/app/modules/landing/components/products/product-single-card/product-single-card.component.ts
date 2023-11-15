import { Component, Input, OnInit } from '@angular/core';
import { NgStyle, CurrencyPipe } from '@angular/common';
import { Product } from '../../../models/product';

@Component({
  selector: '[product-single-card]',
  templateUrl: './product-single-card.component.html',
  standalone: true,
  imports: [NgStyle, CurrencyPipe],
})
export class ProductSingleCardComponent implements OnInit {
  @Input() product: Product = <Product>{};

  constructor() {}

  ngOnInit(): void {}
}
