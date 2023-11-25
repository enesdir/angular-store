import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '~/src/environments/environment';
import { BaseProduct, Product } from '@/landing/models/product';
import { DiscountPipe } from '@/landing/pipes/discount.pipe';

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private baseUrl: string = `${environment.API_URL}/products`;
	private discountPipe = new DiscountPipe();

	constructor(private http: HttpClient) {}

	getProductById(id: number): Observable<Product> {
		// @ts-expect-error: object to object
		return this.http.get<BaseProduct>(`${this.baseUrl}/${id}`).pipe(
			map((product) => {
				return this.discountPipe.transform(product);
			})
		);
	}
	createProduct(product: BaseProduct): Observable<BaseProduct> {
		return this.http.post<BaseProduct>(`${this.baseUrl}/add`, product);
	}

	updateProduct(product: BaseProduct): Observable<BaseProduct> {
		return this.http.put<BaseProduct>(`${this.baseUrl}/${product.id}`, product);
	}

	deleteProduct(productId: number): Observable<void> {
		return this.http.delete<void>(`${this.baseUrl}/${productId}`);
	}
}
