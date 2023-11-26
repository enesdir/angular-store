import { isPlatformBrowser } from '@angular/common';
import { computed, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

import { BrowserStorageService } from '@/core/services/storage.service';
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
		...this.getCartFromLocalStorage(),
	});

	public cartList = computed(() => this.state().products);

	constructor(
		@Inject(PLATFORM_ID) private platformId: object,
		private localStorageService: BrowserStorageService
	) {}
	private getCartFromLocalStorage(): ProductsState {
		if (isPlatformBrowser(this.platformId)) {
			const cartData = this.localStorageService.getItem('cart');
			return cartData ? JSON.parse(cartData) : { products: [], userId: null, merge: false };
		}
		return { products: [], userId: null, merge: false };
	}

	private updateCartInLocalStorage(cartState: ProductsState): void {
		if (isPlatformBrowser(this.platformId)) {
			return this.localStorageService.setItem('cart', JSON.stringify(cartState));
		}
	}

	private updateProducts(updatedProducts: CartProduct[]): void {
		this.state.update((state) => ({ ...state, products: updatedProducts }));
		this.updateCartInLocalStorage({ ...this.state(), products: updatedProducts }); // Update cart data in localStorage
	}
	public updateProductQuantity(productId: string, quantity: number): void {
		if (quantity === 0) {
			this.removeProductFromCart(productId);
		} else {
			const updatedProducts = this.state().products.map((product) => {
				if (product.id === productId) {
					const finalPrice = this.calculateFinalPrice(product.unitPrice, quantity);
					return { ...product, quantity, finalPrice };
				}
				return product;
			});

			this.updateProducts(updatedProducts);
		}
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

	private removeProductFromCart(productId: string): void {
		const updatedProducts = this.state().products.filter((product) => product.id !== productId);
		this.updateProducts(updatedProducts);
	}

	private calculateFinalPrice(productPrice: number, quantity: number): number {
		return productPrice * quantity;
	}

	private calculatePrice(product: Product): number {
		return product.discountPercentage ? product.discountPrice : product.price;
	}
}
