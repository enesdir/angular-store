import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '~/src/environments/environment';
import { ProductService } from './product.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ProductService', () => {
	let service: ProductService;
	let httpMock: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
    imports: [],
    providers: [ProductService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});

		service = TestBed.inject(ProductService);
		httpMock = TestBed.inject(HttpTestingController);
	});

	afterEach(() => {
		httpMock.verify(); // Ensure that there are no outstanding requests
	});

	it('should fetch product by id', () => {
		const mockProduct = {
			id: '1',
			name: 'Test Product',
			title: 'Test Product',
			description: 'Test description',
			price: 100,
			discountPercentage: 10,
			discountPrice: 90,
			rating: 4.69,
			stock: 94,
			brand: 'Test Brand',
			category: 'Test Category',
			thumbnail: '',
			images: [''],
		};

		service.getProductById(1).subscribe((product) => {
			expect(product).toEqual(mockProduct);
		});

		const req = httpMock.expectOne(`${environment.API_URL}/products/1`);
		expect(req.request.method).toBe('GET');
		req.flush(mockProduct);
	});

	// Add similar tests for createProduct, updateProduct, and deleteProduct
});
