import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaginationComponent } from 'src/app/shared/components/pagination/pagination.component';

import { ProductListComponent } from '@/modules/landing/components/products/product-list/product-list.component';
import { ProductsHeaderComponent } from '@/modules/landing/components/products/products-header/products-header.component';
import { SearchBarComponent } from '@/modules/landing/components/search/search.component';
import { ProductsService } from '@/modules/landing/services/products.service';
import { LoadingComponent } from '@/shared/components/loading/loading.component';

@Component({
	selector: 'app-home',
	templateUrl: './search.component.html',
	standalone: true,
	imports: [
		NgFor,
		ProductsHeaderComponent,
		ProductListComponent,
		PaginationComponent,
		LoadingComponent,
		SearchBarComponent,
	],
})
export class SearchComponent implements OnInit {
	currentPage: number = 1;

	private _productsService = inject(ProductsService);
	public products = this._productsService.products;
	public loading = this._productsService.loading;
	public searchFormControl = this._productsService.searchFormControl;

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
			const searchQuery = params['q'] || ''; // Get search query from URL
			this._productsService.searchFormControl.setValue(searchQuery, { emitEvent: false }); // Set the search query without emitting an event
			this._productsService.updateSkip((this.currentPage - 1) * this.limit);
		});
		this._productsService.searchFormControl.valueChanges.subscribe(() => {
			this.currentPage = 1;
			this.router.navigate(['/search'], {
				queryParams: { q: this._productsService.searchFormControl.value },
			});
		});
	}

	onPageChange(newPage: number) {
		if (this.currentPage !== newPage) {
			this.currentPage = newPage;
			this.router.navigate(['/search'], {
				queryParams: { q: this._productsService.searchFormControl.value, page: this.currentPage },
			});
			this._productsService.updateSkip((this.currentPage - 1) * this.limit);
		}
	}
}
