import { Product } from '@/landing/models/product';
import { ProductsSortPipe } from './sort-filter.pipe';

describe('ProductsSortPipe', () => {
	let pipe: ProductsSortPipe;

	beforeEach(() => {
		pipe = new ProductsSortPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should sort products by price in ascending order', () => {
		const products: Product[] = [
			{
				id: '1',
				price: 100,
				discountPrice: 80,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '2',
				price: 200,
				discountPrice: 180,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '3',
				price: 150,
				discountPrice: 130,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
		];

		const sortedProducts = pipe.transform(products, 'price', 'asc');

		expect(sortedProducts[0].id).toBe('1');
		expect(sortedProducts[1].id).toBe('3');
		expect(sortedProducts[2].id).toBe('2');
	});

	it('should sort products by price in descending order', () => {
		const products: Product[] = [
			{
				id: '1',
				price: 100,
				discountPrice: 80,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '2',
				price: 200,
				discountPrice: 180,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '3',
				price: 150,
				discountPrice: 130,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
		];

		const sortedProducts = pipe.transform(products, 'price', 'desc');

		expect(sortedProducts[0].id).toBe('2');
		expect(sortedProducts[1].id).toBe('3');
		expect(sortedProducts[2].id).toBe('1');
	});

	it('should return the same array if sort mode is disabled', () => {
		const products: Product[] = [
			{
				id: '1',
				price: 100,
				discountPrice: 80,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '2',
				price: 200,
				discountPrice: 180,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
			{
				id: '3',
				price: 150,
				discountPrice: 130,
				brand: '',
				category: '',
				description: '',
				images: [],
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: '',
				discountPercentage: 0,
			},
		];

		const sortedProducts = pipe.transform(products, 'price', 'disabled');

		expect(sortedProducts).toEqual(products);
	});
});
