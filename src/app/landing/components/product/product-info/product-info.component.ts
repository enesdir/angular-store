import { CurrencyPipe, NgClass, NgIf, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroMinusSmallSolid, heroPlusSmallSolid } from '@ng-icons/heroicons/solid';

import { Product } from '@/landing/models/product';
import { CartService } from '@/landing/services/cart.service';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	standalone: true,
	imports: [NgIf, CurrencyPipe, PercentPipe, NgClass, NgIconComponent],
	viewProviders: [
		provideIcons({
			heroMinusSmallSolid,
			heroPlusSmallSolid,
		}),
	],
})
export class ProductInfoComponent {
	@Input({ required: true }) product!: Product;

	quantity = 1;

	constructor(private cartService: CartService) {}

	incrementQuantity(): void {
		this.quantity++;
	}

	addProductToCart(): void {
		this.cartService.addProductToCart(this.product, this.quantity);
	}

	decrementQuantity(): void {
		if (this.quantity > 0) {
			this.quantity--;
		}
	}
}
