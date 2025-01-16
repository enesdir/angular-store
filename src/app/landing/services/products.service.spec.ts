import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
	let service: ProductsService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			providers: [ProductsService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
		});

		service = TestBed.inject(ProductsService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify(); // Ensure that there are no outstanding requests
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should correctly initialize signals', () => {
		expect(service.products()).toEqual([]);
		expect(service.searchFormControl.value).toBe('');
		expect(service.skip()).toBe(0);
		expect(service.productsPerPage()).toBe(10);
		// Add similar assertions for other signals
	});
});
