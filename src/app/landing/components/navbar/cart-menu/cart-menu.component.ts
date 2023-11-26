import { CurrencyPipe, NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroShoppingCart, heroTrash } from '@ng-icons/heroicons/outline';

import { CartService } from '@/landing/services/cart.service';
import { ClickOutsideDirective } from '@/shared/directives/click-outside.directive';

@Component({
	selector: 'app-cart-menu',
	templateUrl: './cart-menu.component.html',
	standalone: true,
	imports: [ClickOutsideDirective, NgClass, RouterLink, NgOptimizedImage, NgFor, NgIconComponent, NgIf, CurrencyPipe],
	viewProviders: [provideIcons({ heroShoppingCart, heroTrash })],
})
export class CartMenuComponent {
	public isMenuOpen = false;
	cart = [];
	userData = {
		name: 'Awesome User',
		links: [
			{
				title: 'Cart',
				href: '/dashboard',
			},
		],
	};

	public toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}
	constructor(public cartService: CartService) {}
	public get cartList() {
		return this.cartService.cartList;
	}
	public updateQuantity(id: string, quantity: number): void {
		this.cartService.updateProductQuantity(id, quantity);
	}
}
