import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MenuService } from '@/core/services/menu.service';
import { LogoComponent } from '@/shared/components/logo/logo.component';
import { BurgerButtonComponent } from './burger-button/burger-button.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { NotificationMenuComponent } from './notification-menu/notification-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',

	standalone: true,
	imports: [
		NgClass,
		NavbarMenuComponent,
		NavbarMobileComponent,
		LogoComponent,
		NotificationMenuComponent,
		ProfileMenuComponent,
		CartMenuComponent,
		BurgerButtonComponent,
		RouterLink,
	],
})
export class NavbarComponent {
	constructor(public menuService: MenuService) {}
}
