import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { Products } from '../models/products';

const baseUrl = 'https://dummyjson.com/products';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	constructor(private http: HttpClient) {}

	getProducts(page: number, itemsPerPage: number): Observable<Products> {
		const limit = itemsPerPage;
		const skip = (page - 1) * itemsPerPage;
		const productsUrl = `${baseUrl}?limit=${limit}&skip=${skip}`;

		return this.http.get<Products>(productsUrl).pipe(
			take(1),
			catchError(err => {
				return throwError(() => err);
			})
		);
	}
}
