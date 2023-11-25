export interface BaseProduct {
	[key: string]: string | number | string[];
	id: string;
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	images: string[];
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

export interface Product extends BaseProduct {
	discountPrice: number;
}
