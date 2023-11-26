import { Product } from '@/landing/models/product';
import { ProductsCategoryFilterPipe } from './category-filter.pipe';

describe('ProductsCategoryFilterPipe', () => {
	let pipe: ProductsCategoryFilterPipe;

	beforeEach(() => {
		pipe = new ProductsCategoryFilterPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should filter products by category', () => {
		const products: Product[] = [
			{
				id: '1',
				brand: '',
				category: 'Category 1',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 1',
				discountPrice: 0,
			},
			{
				id: '2',
				brand: '',
				category: 'Category 2',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 2',
				discountPrice: 0,
			},
			{
				id: '3',
				brand: '',
				category: 'Category 1',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 3',
				discountPrice: 0,
			},
		];

		const filteredProducts = pipe.transform(products, 'Category 1');

		expect(filteredProducts.length).toBe(2);
		expect(filteredProducts[0].id).toBe('1');
		expect(filteredProducts[1].id).toBe('3');
	});

	it('should return all products if no category is selected', () => {
		const products: Product[] = [
			{
				id: '1',
				brand: '',
				category: 'Category 1',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 1',
				discountPrice: 0,
			},
			{
				id: '2',
				brand: '',
				category: 'Category 2',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 2',
				discountPrice: 0,
			},
			{
				id: '3',
				brand: '',
				category: 'Category 1',
				description: '',
				discountPercentage: 0,
				images: [],
				price: 0,
				rating: 0,
				stock: 0,
				thumbnail: '',
				title: 'Product 3',
				discountPrice: 0,
			},
		];

		const filteredProducts = pipe.transform(products, 'All');

		expect(filteredProducts.length).toBe(3);
	});
});
