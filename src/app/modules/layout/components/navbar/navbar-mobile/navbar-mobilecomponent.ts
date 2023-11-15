import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MenuService } from '@/modules/layout/services/menu.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';

@Component({
	selector: 'app-navbar-mobile',
	templateUrl: './navbar-mobile.component.html',
	standalone: true,
	imports: [NgClass, AngularSvgIconModule, NavbarMobileMenuComponent],
})
export class NavbarMobileComponent {
	constructor(public menuService: MenuService) {}
	public toggleMobileMenu(): void {
		this.menuService.showMobileMenu = false;
	}
}
