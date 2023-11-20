import { computed, Injectable, Signal, signal } from '@angular/core';

import { Product } from '../models/product';
import { Products } from '../models/products';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private _unfilteredProducts = signal<Product[]>([]);
	private _debounceSearchTimeout: ReturnType<typeof setTimeout> | undefined;
	public products = signal<Product[]>([]);
	public search = signal<string>('');
	public skip = signal<number>(0);
	public limit = signal<number>(10);
	public total = signal<number>(0);
	public categories = signal<string[]>([]);
	public category = signal<string>('');
	public loading = signal<boolean>(false);
	public totalPages: Signal<number> = computed(() => Math.ceil(this.total() / this.limit()));
	public sortKey = signal<string | 'none'>('none');
	public sortMode = signal<'disabled' | 'asc' | 'desc'>('disabled');

	constructor() {
		this.updateProducts();
	}

	private async updateProducts() {
		const baseUrl: string = 'https://dummyjson.com/products';
		const baseLimit: number = 100;
		const search = this.search();
		try {
			this.loading.set(true);
			const response = await fetch(
				search ? `${baseUrl}/search?q=${search}&limit=${baseLimit}` : `${baseUrl}?limit=${baseLimit}`
			);
			const data: Products = await response.json();
			data.products.map((product) => {
				if (product.discountPercentage)
					product.discountPrice = product.price - (product.price * product.discountPercentage) / 100;
				return product;
			});
			this._unfilteredProducts.set([...data.products]);

			const categoriesResponse = await fetch(`${baseUrl}/categories`);
			const categoriesData: string[] = await categoriesResponse.json();
			this.categories.set(['', ...categoriesData.sort()]);

			this.setProducts();
		} catch (error) {
			console.error(error);
			this.loading.set(false);
		}
	}

	private filterProducts(products: Product[]) {
		const category = this.category();
		if (category) {
			return products.filter((product) => product.category === category);
		}
		return products;
	}

	private setProducts() {
		const products = [...this.filterProducts(this._unfilteredProducts())];
		this.total.set(products.length);

		let sortKey = this.sortKey();
		const sortMode = this.sortMode();

		if (sortMode !== 'disabled') {
			if (sortKey === 'price') sortKey = 'discountPrice';
			products.sort((a, b) => {
				if (a[sortKey] < b[sortKey]) return sortMode === 'asc' ? -1 : 1;
				if (a[sortKey] > b[sortKey]) return sortMode === 'asc' ? 1 : -1;
				return 0;
			});
		}

		const skip = this.skip();
		const limit = this.limit();

		this.products.set(products.slice(skip, skip + limit));
		if (this.loading()) this.loading.set(false);
	}

	public updateSearch(search: string) {
		this.resetAndSetProducts();
		this.search.set(search);
		this.debounceSearch();
	}

	private debounceSearch() {
		if (this._debounceSearchTimeout) {
			clearTimeout(this._debounceSearchTimeout);
		}
		this._debounceSearchTimeout = setTimeout(() => {
			this.updateProducts();
			this._debounceSearchTimeout = undefined;
		}, 250);
	}

	public updateSkip(skip: number) {
		this.skip.set(skip);
		this.setProducts();
	}

	public updateLimit(limit: number) {
		this.resetAndSetProducts();
		this.limit.set(limit);
	}

	public updateCategory(category: string) {
		this.resetAndSetProducts();
		this.category.set(category);
	}

	public updateSortKey(sortKey: string) {
		this.resetAndSetProducts();

		const currentSortKey = this.sortKey();

		if (sortKey !== currentSortKey) {
			this.sortMode.set('asc');
			this.sortKey.set(sortKey);
		} else {
			const currentSortMode = this.sortMode();
			switch (currentSortMode) {
				case 'disabled':
					this.sortMode.set('asc');
					break;
				case 'asc':
					this.sortMode.set('desc');
					break;
				case 'desc':
					this.sortMode.set('disabled');
					break;
			}
		}
	}

	private resetAndSetProducts() {
		this.skip.set(0);
		this.setProducts();
	}
}
