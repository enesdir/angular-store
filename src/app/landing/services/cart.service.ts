import { computed, Injectable, signal } from '@angular/core';

import { CartProduct } from '../models/cart-product';
import { Product } from '../models/product';

export interface ProductsState {
	products: CartProduct[];
	userId: string | null;
	merge: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private state = signal<ProductsState>({
		products: [],
		userId: null,
		merge: true,
	});

	public cartList = computed(() => this.state().products);

	constructor() {}

	public updateProductQuantity(productId: string, quantity: number): void {
		const updatedProducts = this.state().products.map((product) => {
			if (product.id === productId) {
				const finalPrice = this.calculateFinalPrice(product.unitPrice, quantity);
				return { ...product, quantity, finalPrice };
			}
			return product;
		});

		this.updateProducts(updatedProducts);
	}

	public addProductToCart(product: Product, quantity: number): void {
		const productPrice = this.calculatePrice(product);
		const finalPrice = this.calculateFinalPrice(productPrice, quantity);
		const existingCartItem = this.state().products.find((item) => item.id === product.id);

		const updatedProducts = existingCartItem
			? this.updateExistingProduct(existingCartItem, quantity, finalPrice)
			: this.addNewProduct(product, productPrice, quantity, finalPrice);

		this.updateProducts(updatedProducts);
	}

	private addNewProduct(product: Product, productPrice: number, quantity: number, finalPrice: number): CartProduct[] {
		const newCartItem: CartProduct = {
			id: product.id,
			title: product.title,
			image: product.thumbnail,
			unitPrice: productPrice,
			quantity: quantity,
			finalPrice: finalPrice,
		};
		return [...this.state().products, newCartItem];
	}

	private updateExistingProduct(existingCartItem: CartProduct, quantity: number, finalPrice: number): CartProduct[] {
		existingCartItem.quantity += quantity;
		existingCartItem.finalPrice += finalPrice;
		return [...this.state().products];
	}

	private updateProducts(updatedProducts: CartProduct[]): void {
		this.state.update((state) => ({ ...state, products: updatedProducts }));
	}

	private calculateFinalPrice(productPrice: number, quantity: number): number {
		return productPrice * quantity;
	}

	private calculatePrice(product: Product): number {
		return product.discountPercentage ? product.discountPrice : product.price;
	}
}
