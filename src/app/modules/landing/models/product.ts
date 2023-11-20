export interface Product {
	[key: string]: string | number | string[];
	id: string;
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	images: string[];
	price: number;
	discountPrice: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}
