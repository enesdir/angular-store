import { BaseProduct, Product } from '@/landing/models/product';
import { DiscountPipe } from './discount.pipe';

describe('DiscountPipe', () => {
	let pipe: DiscountPipe;

	beforeEach(() => {
		pipe = new DiscountPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should calculate discount for a single product', () => {
		const product: BaseProduct = {
			id: '1',
			brand: '',
			category: '',
			description: '',
			discountPercentage: 20,
			images: [],
			price: 100,
			rating: 0,
			stock: 0,
			thumbnail: '',
			title: '',
		};

		// @ts-expect-error: todo
		const discountedProduct: Product = pipe.transform(product);

		expect(discountedProduct.discountPrice).toBe(80);
	});

	it('should calculate discount for an array of products', () => {
		const products: BaseProduct[] = [
			{
				id: '1',
				brand: '',
				category: '',
				description: '',
				discountPercentage: 20,
				images: [],
				price: 100,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
			},
			{
				id: '2',
				brand: '',
				category: '',
				description: '',
				discountPercentage: 50,
				images: [],
				price: 200,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
			},
		];
		// @ts-expect-error: todo
		const discountedProducts: Product[] = pipe.transform(products);

		expect(discountedProducts[0].discountPrice).toBe(80);
		expect(discountedProducts[1].discountPrice).toBe(100);
	});
});
