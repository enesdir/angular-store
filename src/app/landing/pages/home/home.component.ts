import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

import { ProductListComponent } from '@/landing/components/products/product-list/product-list.component';
import { ProductsHeaderComponent } from '@/landing/components/products/products-header/products-header.component';
import { ProductsService } from '@/landing/services/products.service';
import { LoadingComponent } from '@/shared/components/loading/loading.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	imports: [NgFor, ProductsHeaderComponent, ProductListComponent, PaginationComponent, LoadingComponent],
})
export default class HomeComponent implements OnInit {
	currentPage: number = 1;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productsService: ProductsService
	) {}
	public get loading() {
		return this.productsService.loading();
	}
	public get products() {
		return this.productsService.products();
	}
	public get totalPages() {
		return this.productsService.totalPages();
	}
	public get totalProducts() {
		return this.productsService.total();
	}
	public get limit() {
		return this.productsService.productsPerPage();
	}
	public set limit(value: number) {
		this.productsService.updateLimit(Number(value));
	}

	ngOnInit() {
		// Fetch products when the component initializes
		this.route.queryParams.subscribe((params: Params) => {
			this.currentPage = +params['page'] || 1; // Get pagination data from URL
			this.productsService.updateSkip((this.currentPage - 1) * this.limit);
		});
	}

	onPageChange(newPage: number) {
		this.currentPage = newPage;
		this.router.navigate(['/'], {
			queryParams: { page: this.currentPage },
		});
		this.productsService.updateSkip((this.currentPage - 1) * this.limit);
	}
}
