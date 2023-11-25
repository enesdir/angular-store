import { CurrencyPipe, NgClass, NgIf, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMinusSmallSolid, heroPlusSmallSolid } from '@ng-icons/heroicons/solid';

import { CartProduct } from '@/landing/models/cart-product';
import { Product } from '@/landing/models/product';
import { CartService } from '@/landing/services/cart.service';
import { ButtonComponent } from '@/shared/components/button/button.component';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	standalone: true,
	imports: [NgIf, CurrencyPipe, PercentPipe, NgClass, ButtonComponent, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroMinusSmallSolid,
			heroPlusSmallSolid,
		}),
	],
})
export class ProductInfoComponent {
	@Input({ required: true }) product!: Product;

	quantity: number = 0;

	mainPrice: number | undefined;
	realPrice?: number | undefined;
	discount?: number | undefined;

	constructor(private cartService: CartService) {}

	addProductToCart(product: Product) {
		if (this.quantity > 0) {
			// check the correct price (normal price or discount)
			const productPrice = product.discountPercentage ? product.discountPrice : product.price;
			// final price (including multipled)
			const finalPrice = productPrice * this.quantity;

			const productToCart: CartProduct = {
				title: product.title,
				quantity: this.quantity,
				unitPrice: product.price,
				finalPrice: finalPrice,
				image: product.images[0],
			};

			this.cartService.addProductToCart(productToCart);
		}
	}

	addProduct(): void {
		this.quantity++;
	}
	removeProduct(): void {
		this.quantity--;
	}
}
