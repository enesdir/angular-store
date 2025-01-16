import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ProductListTableComponent } from '@/dashboard/components/products/product-list-table/product-list-table.component';
import { ProductsFilterComponent } from '@/dashboard/components/products/products-filter/products-filter.component';
import { ProductsHeaderComponent } from '@/dashboard/components/products/products-header/products-header.component';
import { SearchBarComponent } from '@/landing/components/search-bar/search-bar.component';
import { ProductsService } from '@/landing/services/products.service';
import { LoadingComponent } from '@/shared/components/loading/loading.component';
import { PaginationComponent } from '@/shared/components/pagination/pagination.component';

@Component({
	selector: 'dash-products-page',
	templateUrl: './products.component.html',
	imports: [
		ProductsHeaderComponent,
		ProductListTableComponent,
		PaginationComponent,
		LoadingComponent,
		SearchBarComponent,
		ProductsFilterComponent,
	],
})
export default class ProductsPageComponent implements OnInit {
	currentPage: number = 1;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private productsService: ProductsService
	) {}

	public get searchFormControl() {
		return this.productsService.searchFormControl;
	}
	public get loading() {
		return this.productsService.loading;
	}
	public get products() {
		return this.productsService.products;
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
			const searchQuery = params['q'] || ''; // Get search query from URL
			this.productsService.searchFormControl.setValue(searchQuery, { emitEvent: false }); // Set the search query without emitting an event
			this.productsService.updateSkip((this.currentPage - 1) * this.limit);
		});
		this.productsService.searchFormControl.valueChanges.subscribe(() => {
			this.currentPage = 1;
			this.router.navigate(['/dashboard/products'], {
				queryParams: { q: this.productsService.searchFormControl.value },
			});
		});
	}

	onPageChange(newPage: number) {
		if (this.currentPage !== newPage) {
			this.currentPage = newPage;
			this.router.navigate(['/dashboard/products'], {
				queryParams: { q: this.productsService.searchFormControl.value, page: this.currentPage },
			});
			this.productsService.updateSkip((this.currentPage - 1) * this.limit);
		}
	}
}
