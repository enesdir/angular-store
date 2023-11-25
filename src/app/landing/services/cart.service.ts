import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { CartProduct } from '../models/cart-product';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	private _cartList: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
	cartList$: Observable<CartProduct[]> = this._cartList.asObservable();

	private actualAddProductId: number = 1;

	constructor() {}

	addProductToCart(product: CartProduct): void {
		const currentList = this._cartList.getValue();
		const productToAdd = product;
		productToAdd.id = this.actualAddProductId;

		this.nextId();

		currentList.push(productToAdd);
		this._cartList.next(currentList);
	}

	deleteInCartProduct(id: number): void {
		const currentList = this._cartList.getValue();
		const filteredList = currentList.filter((product) => product.id != id);

		this._cartList.next(filteredList);
	}

	private nextId(): void {
		this.actualAddProductId++;
	}
}
