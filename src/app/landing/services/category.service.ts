import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '~/src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	private baseUrl: string = `${environment.API_URL}/products`;

	constructor(private http: HttpClient) {}

	getCategories(): Observable<string[]> {
		return this.http.get<string[]>(`${this.baseUrl}/categories`);
	}
}
