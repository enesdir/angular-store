import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '~/src/environments/environment';

import type { Category } from '~/src/app/dashboard/models/category';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	private baseUrl: string = `${environment.API_URL}/products`;

	constructor(private http: HttpClient) {}

	getCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(`${this.baseUrl}/categories`);
	}
}
