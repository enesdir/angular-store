import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, EMPTY, map, startWith, Subject, switchMap } from 'rxjs';

import { environment } from '~/src/environments/environment';
import { Product } from '@/landing/models/product';
import { Products } from '@/landing/models/products';
import { ProductsCategoryFilterPipe } from '@/landing/pipes/category-filter.pipe';
import { ProductsSortPipe } from '@/landing/pipes/sort-filter.pipe';

export interface ProductsState {
	products: Product[];
	error: string | null;
	loading: boolean;
	totalPages: number;
	total: number;
}
@Injectable({ providedIn: 'root' })
export class ProductsService {
	private categoryFilterPipe = new ProductsCategoryFilterPipe();
	private productsSortPipe = new ProductsSortPipe();
	public productsPerPage = signal<number>(10);
	public skip = signal<number>(0);
	public searchFormControl = new FormControl();
	public category = signal<string>('');
	public sortKey = signal<string | 'none'>('none');
	public sortMode = signal<'disabled' | 'asc' | 'desc'>('disabled');
	private _unfilteredProducts = signal<Product[]>([]);
	private state = signal<ProductsState>({
		products: [],
		error: null,
		loading: true,
		totalPages: 0,
		total: 0,
	});
	public products = computed(() => this.state().products);
	public error = computed(() => this.state().error);
	public loading = computed(() => this.state().loading);
	public totalPages = computed(() => this.state().totalPages);
	public total = computed(() => this.state().total);
	private error$ = new Subject<string | null>();

	private searchChanged$ = this.searchFormControl.valueChanges.pipe(
		debounceTime(300),
		distinctUntilChanged(),
		startWith(''),
		map((search) => (search.length ? search : ''))
	);

	private productsLoaded$ = this.searchChanged$.pipe(
		switchMap((search) =>
			this.fetchFromServer(search).pipe(
				catchError((err) => {
					this.handleError(err);
					return EMPTY;
				}),
				map((response) => {
					const products = this.calculateDiscountPrice(response.products);
					this._unfilteredProducts.set(products);
					this.setProducts();
				})
			)
		)
	);

	constructor(private http: HttpClient) {
		//reducers
		this.searchChanged$.pipe(takeUntilDestroyed()).subscribe(() => {
			this.state.update((state) => ({
				...state,
				loading: true,
				products: [],
			}));
			this.skip.set(0);
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars, unused-imports/no-unused-vars
		this.productsLoaded$.pipe(takeUntilDestroyed()).subscribe((response) =>
			this.state.update((state) => ({
				...state,
				loading: false,
			}))
		);
		this.error$.pipe(takeUntilDestroyed()).subscribe((error) =>
			this.state.update((state) => ({
				...state,
				error,
			}))
		);
	}

	private calculateDiscountPrice(products: Product[]) {
		return products.map((product) => {
			product.discountPrice = product.price - (product.price * product.discountPercentage) / 100;
			return product;
		});
	}

	private fetchFromServer(search: string) {
		const baseUrl: string = `${environment.API_URL}/products`;
		const baseLimit: number = 100;
		return this.http
			.get<Products>(search ? `${baseUrl}/search?q=${search}&limit=${baseLimit}` : `${baseUrl}?limit=${baseLimit}`)
			.pipe(
				catchError((err) => {
					this.handleError(err);
					return EMPTY;
				}),
				map((response) => {
					const products = this.calculateDiscountPrice(response.products);
					return {
						products,
					};
				})
			);
	}

	private filterProducts(products: Product[]): Product[] {
		const category = this.category();
		return this.categoryFilterPipe.transform(products, category);
	}

	private setProducts() {
		let products = [...this.filterProducts(this._unfilteredProducts())];
		const sortKey = this.sortKey();
		const sortMode = this.sortMode();
		products = this.productsSortPipe.transform(products, sortKey, sortMode);
		const skip = this.skip();
		const limit = this.productsPerPage();
		this.state.update((state) => ({
			...state,
			loading: false,
			products: products.slice(skip, skip + limit),
			total: products.length,
			totalPages: Math.ceil(products.length / limit),
		}));
	}

	public updateLimit(limit: number) {
		this.productsPerPage.set(limit);
		this.fetchFromServer(this.searchFormControl.value);
	}

	public updateSkip(skip: number) {
		this.skip.set(skip);
		this.setProducts();
	}

	public updateCategory(category: string) {
		this.category.set(category);
		this.setProducts();
	}

	private handleError(err: HttpErrorResponse) {
		if (err.status === 404 && err.url) {
			this.error$.next(`Failed to load products for /r/${err.url.split('/')[4]}`);
			return;
		}
		this.error$.next(err.statusText);
	}
}
