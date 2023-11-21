import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

import { ProductListComponent } from '@/modules/landing/components/products/product-list/product-list.component';
import { ProductsHeaderComponent } from '@/modules/landing/components/products/products-header/products-header.component';
import { ProductsService } from '@/modules/landing/services/products.service';
import { LoadingComponent } from '@/shared/components/loading/loading.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [NgFor, ProductsHeaderComponent, ProductListComponent, PaginationComponent, LoadingComponent],
})
export class HomeComponent implements OnInit {
	currentPage: number = 1;

	private _productsService = inject(ProductsService);
	public products = this._productsService.products;
	public loading = this._productsService.loading;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) {}

	public get totalPages() {
		return this._productsService.totalPages();
	}
	public get totalProducts() {
		return this._productsService.total();
	}
	public get limit() {
		return this._productsService.productsPerPage();
	}
	public set limit(value: number) {
		this._productsService.updateLimit(Number(value));
	}
	ngOnInit() {
		// Fetch products when the component initializes
		this.route.queryParams.subscribe((params: Params) => {
			this.currentPage = +params['page'] || 1; // Get pagination data from URL
			this._productsService.updateSkip((this.currentPage - 1) * this.limit);
		});
	}

	onPageChange(newPage: number) {
		this.currentPage = newPage;
		this.router.navigate(['/'], {
			queryParams: { page: this.currentPage },
		});
		this._productsService.updateSkip((this.currentPage - 1) * this.limit);
	}
}
