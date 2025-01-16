import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductFAQComponent } from '@/landing/components/product/product-faq/product-faq.component';
import { ProductImagesComponent } from '@/landing/components/product/product-images/product-images.component';
import { ProductInfoComponent } from '@/landing/components/product/product-info/product-info.component';
import { Product } from '@/landing/models/product';
import { ProductService } from '@/landing/services/product.service';
import { LoadingComponent } from '@/shared/components/loading/loading.component';

@Component({
	selector: 'app-product-page',
	templateUrl: './product.component.html',
	imports: [ProductImagesComponent, ProductInfoComponent, ProductFAQComponent, NgIf, AsyncPipe, LoadingComponent],
})
export default class ProductPageComponent implements OnInit {
	product$!: Observable<Product>;

	constructor(
		private route: ActivatedRoute,
		private productService: ProductService
	) {}

	ngOnInit(): void {
		const productId = this.route.snapshot.paramMap.get('productId');
		if (productId) {
			this.product$ = this.productService.getProductById(+productId);
		}
	}
}
