import { TestBed } from '@angular/core/testing';

import { BrowserStorageService } from '@/core/services/storage.service';
import { Product } from '../models/product';
import { CartService } from './cart.service';

describe('CartService', () => {
	let service: CartService;
	let localStorageService: jasmine.SpyObj<BrowserStorageService>;

	beforeEach(() => {
		const localStorageSpy = jasmine.createSpyObj('BrowserStorageService', ['getItem', 'setItem']);

		TestBed.configureTestingModule({
			providers: [CartService, { provide: BrowserStorageService, useValue: localStorageSpy }],
		});

		service = TestBed.inject(CartService);
		localStorageService = TestBed.inject(BrowserStorageService) as jasmine.SpyObj<BrowserStorageService>;
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	describe('addProductToCart', () => {
		it('should add a product to the cart', () => {
			const product: Product = {
				id: '1',
				name: 'Test Product',
				title: 'Test Product',
				description: 'Test description',
				price: 100,
				discountPercentage: 75,
				discountPrice: 25,
				rating: 4.69,
				stock: 94,
				brand: 'Test Brand',
				category: 'Test Category',
				thumbnail: 'testproduct.jpg',
				images: [''],
			};

			service.addProductToCart(product, 1);

			expect(service.cartList.length).toBe(1);
			expect(service.cartList()[0].id).toBe(product.id);
			expect(localStorageService.setItem).toHaveBeenCalled();
		});
	});

	describe('updateProductQuantity', () => {
		it('should update the quantity of a product in the cart', () => {
			const product: Product = {
				id: '1',
				name: 'Test Product',
				title: 'Test Product',
				description: 'Test description',
				price: 100,
				discountPercentage: 75,
				discountPrice: 25,
				rating: 4.69,
				stock: 94,
				brand: 'Test Brand',
				category: 'Test Category',
				thumbnail: 'testproduct.jpg',
				images: [''],
			};

			service.addProductToCart(product, 1);
			service.updateProductQuantity(product.id, 2);

			expect(service.cartList()[0].quantity).toBe(2);
			expect(localStorageService.setItem).toHaveBeenCalled();
		});
	});
});
